const gridContainer = document.querySelector(".grid-container");
const scoreElement = document.querySelector(".score");
const livesElement = document.querySelector(".lives");
const progressFill = document.querySelector(".progress-fill");
const pairsFoundElement = document.querySelector(".pairs-found");
const pairsTotalElement = document.querySelector(".pairs-total");
const statusElement = document.querySelector(".status");

const startOverlay = document.querySelector("#startOverlay");
const winOverlay = document.querySelector("#winOverlay");
const startButton = document.querySelector("#startButton");
const playAgainButton = document.querySelector("#playAgainButton");
const finalMovesElement = document.querySelector(".final-moves");
const finalLivesElement = document.querySelector(".final-lives");

let cards = [];
let firstCard, secondCard;
let lockBoard = true;
let score = 0;
let lives = 10;
let matchedPairs = 0;
let hasStarted = false;
let currentAudio = null;

const maxLives = 10;

const data = [
  { 
    name: "ichigo", 
    image: "images/aikatsu_ichigo.webp",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bc/98/d6/bc98d6f4-9842-a860-49a7-4fafd0701d01/mzaf_15925208771860647404.plus.aac.p.m4a"
  },
  { 
    name: "mizuki", 
    image: "images/aikatsu_mizuki.png",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/45/ff/91/45ff9179-c139-ba23-cf97-92f0254eeb72/mzaf_2996341997875504412.plus.aac.p.m4a" 
  },
  { name: "nagisa", 
    image: "images/akb0048_nagisa.webp",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/59/fd/74/59fd7418-2ce1-3852-522d-ade018a7e6fb/mzaf_8177112927276950511.plus.aac.p.m4a" 
  },
  { 
    name: "aira", 
    image: "images/prad_aira.webp", 
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c4/24/c5/c424c5ce-d38f-e836-0b6b-f8bd580647b1/mzaf_3719029147369953991.plus.aac.p.m4a" 
  },
  { 
    name: "falulu", 
    image: "images/pripara_falulu.webp",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/85/ce/d4/85ced4e9-3832-547a-552f-e8c7cec408b0/mzaf_5031317401398037934.plus.aac.p.m4a"  
  },
  { 
    name: "rinne", 
    image: "images/prrl_rinne.webp",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/98/cb/59/98cb59dc-66f1-d8ec-93d7-cbf2c1552dc7/mzaf_10677547719035801137.plus.aac.p.m4a"  
  },
  { 
    name: "hime", 
    image: "images/stars_hime.png",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/bf/2f/bfbf2f4c-1212-1a1a-0144-0a6bd094c21a/mzaf_4857431850892932062.plus.aac.p.m4a"  
  },
  { 
    name: "matsuri", 
    image: "images/waccha_matsuri.webp",
    audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/47/7c/b1/477cb101-8f95-5d61-0d8f-4296078c7f31/mzaf_624496573097813707.plus.aac.ep.m4a"  
  }
];

const totalPairs = data.length;
pairsTotalElement.textContent = totalPairs;

cards = [...data, ...data];
shuffleCards();
updateHud();
generateCards();
setStatus("Press Start Game to begin.");

startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", playAgain);

function shuffleCards() {
  let currentIndex = cards.length;
  let randomIndex;
  let temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
  for (let [index, card] of cards.entries()) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    const row = Math.floor(index / 4);
    const col = index % 4;
    const useCardOne = (row + col) % 2 === 0;
    const backDesign = useCardOne ? "images/card.webp" : "images/card2.webp";
    const backImageClass = useCardOne ? "back-image back-image-card1" : "back-image back-image-card2";
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src="${card.image}" alt="${card.name}" />
      </div>
      <div class="back">
        <img class="${backImageClass}" src="${backDesign}" alt="Card back design" />
      </div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function updateHud() {
  scoreElement.textContent = score;
  livesElement.textContent = "❤".repeat(lives) + "♡".repeat(maxLives - lives);
  pairsFoundElement.textContent = matchedPairs;
  progressFill.style.width = `${(matchedPairs / totalPairs) * 100}%`;
}

function setStatus(message) {
  statusElement.textContent = message;
}

function stopCardAudio() {
  if (!currentAudio) return;
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = null;
}

function playCardAudio(cardName) {
  const selectedCard = data.find((item) => item.name === cardName);
  if (!selectedCard || !selectedCard.audio) return;

  stopCardAudio();
  currentAudio = new Audio(selectedCard.audio);
  currentAudio.preload = "none";
  currentAudio.play().catch(() => {
    currentAudio = null;
  });
}

function stopGameClicks() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => card.removeEventListener("click", flipCard));
}

function startGame() {
  hasStarted = true;
  lockBoard = false;
  startOverlay.classList.add("hidden");
  setStatus("");
}

function showWinModal() {
  finalMovesElement.textContent = score;
  finalLivesElement.textContent = lives;
  winOverlay.classList.remove("hidden");
}

function hideWinModal() {
  winOverlay.classList.add("hidden");
}

function playAgain() {
  hideWinModal();
  restart();
}

function flipCard() {
  if (lockBoard || !hasStarted) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    playCardAudio(this.dataset.name);
    firstCard = this;
    return;
  }

  playCardAudio(this.dataset.name);
  secondCard = this;
  score++;
  updateHud();
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  matchedPairs++;
  updateHud();

  if (matchedPairs === totalPairs) {
    setStatus("You cleared all pairs!");
    stopCardAudio();
    lockBoard = true;
    stopGameClicks();
    showWinModal();
    return;
  }

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    stopCardAudio();
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");

    lives--;
    updateHud();

    if (lives <= 0) {
      setStatus("No lives left. Restart to try again.");
      stopCardAudio();
      lockBoard = true;
      stopGameClicks();
      return;
    }

    resetBoard();
  }, 2000);
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restart() {
  stopCardAudio();
  cards = [...data, ...data];
  firstCard = null;
  secondCard = null;
  shuffleCards();

  score = 0;
  lives = maxLives;
  matchedPairs = 0;
  lockBoard = !hasStarted;
  setStatus(hasStarted ? "" : "Press Start Game to begin.");

  updateHud();
  gridContainer.innerHTML = "";
  generateCards();
}
