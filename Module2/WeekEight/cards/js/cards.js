
var cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"]

let deck1 = document.querySelector("#deck");
let deck2 = document.querySelector("#deck2");

function shuffle() {
    let deck = document.querySelector("#deck");
    deck.innerHTML = ""; // clear the deck first

    for (let i = 0; i < 5; i++) {
        let outcome = Math.floor(Math.random() * cards.length);
        console.log(outcome); // optional debug

        deck.innerHTML += "<img src='cards/" + cards[outcome] + "'>";
        
        cards.splice(outcome, 1);
    }

    $("img").draggable();
    $("img").dblclick(
        function(){
        $(this).hide();
        }
    );
}

function addCard() {
    // Step 1: Make sure we still have cards left
    if (cards.length > 0) {
        
        // Step 2: Select the deck area
        let deck = document.querySelector("#deck");
        
        // Step 3: Get a random index from the remaining deck
        let outcome1 = Math.floor(Math.random() * cards.length);
        console.log(outcome1);

        // Step 4: Display that card image inside the deck
        deck.innerHTML += "<img src='cards/" + cards[outcome1] + "'>";

        // Step 5: Remove that card from the array so it’s not reused
        cards.splice(outcome1, 1);

        // Step 6: Make all cards draggable again
        $("img").draggable();

        // Step 7: Re-attach double-click discard functionality
        $("img").dblclick(function(){
            $(this).hide();
        });
    }
    else {
        alert("No more cards left in the deck!");
    }
}


function reset(){
    deck.innerHTML = "";
    deck2.innerHTML = "";
}

function twoHands() {
    let deck1 = document.querySelector("#deck");
    let deck2 = document.querySelector("#deck2");

    deck1.innerHTML = "";
    deck2.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        let outcome1 = Math.floor(Math.random() * cards.length);
        deck1.innerHTML += "<img src='cards/" + cards[outcome1] + "'>";
        cards.splice(outcome1, 1); 

        let outcome2 = Math.floor(Math.random() * cards.length);
        deck2.innerHTML += "<img src='cards/" + cards[outcome2] + "'>";
        cards.splice(outcome2, 1); 
    }

    $("img").draggable();
    $("img").dblclick(function(){
        $(this).hide();
    });
}