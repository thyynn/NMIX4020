const groups = [
    {
        title: "BTS Members",
        pix: ["namjoon.jpg", "seokjin.jpg", "yoongi.jpg", "hoseok.jpg", "jimin.jpg", "taehyung.jpg", "jungkook.jpg"],
        names: ["Kim Namjoon", "Kim Seokjin", "Min Yoongi", "Jung Hoseok", "Park Jimin", "Kim Taehyung", "Jeon Jungkook"]
    },
    {
        title: "Kep1er Members",
        pix: ["yujin.jpg", "xiaoting.jpg", "chaehyun.jpg", "dayeon.jpg", "hikaru.jpg", "hiyyih.jpg", "youngeun.jpg"],
        names: ["Choi Yujin", "Shen Xiaoting", "Kim Chaehyun", "Kim Dayeon", "Ezaki Hikaru", "Huening Bahiyyih", "Seo Youngeun (left)"]
    },
    {
        title: "Enhypen Members",
        pix: ["jungwon.jpg", "heeseung.jpg", "jay.jpg", "jake.jpg", "sunghoon.jpg", "sunoo.jpg", "niki.jpg"],
        names: ["Yang Jungwon", "Lee Heeseung (left)", "Park Jay", "Sim Jake", "Park Sunghoon", "Kim Seonwoo", "Nishimura Riki"]
    }
];

const currentIndexes = [0, 0, 0];

function renderCurrentPlayer(groupIndex, targetId) {
    const group = groups[groupIndex];
    const index = currentIndexes[groupIndex];
    const slideshow = document.querySelector(`#${targetId}`);

    console.log("[showCurrentPerson]name:", group.names[index]);

    slideshow.innerHTML = "<h3>" + group.title + "</h3>" +
                          "<img src='projectRoster/" + group.pix[index] + "'>" +
                          "<br><span class='player-name'>" + group.names[index] + "</span>";
}

function canShow(plusMinus, groupIndex, targetId) {
    const groupLength = groups[groupIndex].names.length;
    currentIndexes[groupIndex] = currentIndexes[groupIndex] + plusMinus;

    if (currentIndexes[groupIndex] < 0) {
        currentIndexes[groupIndex] = groupLength - 1;
    }

    if (currentIndexes[groupIndex] >= groupLength) {
        currentIndexes[groupIndex] = 0;
    }

    renderCurrentPlayer(groupIndex, targetId);
}

renderCurrentPlayer(0, "slideshow1");
renderCurrentPlayer(1, "slideshow2");
renderCurrentPlayer(2, "slideshow3");

document.querySelector("#next1").onclick = function () {
    canShow(1, 0, "slideshow1");
};

document.querySelector("#previous1").onclick = function () {
    canShow(-1, 0, "slideshow1");
};

document.querySelector("#next2").onclick = function () {
    canShow(1, 1, "slideshow2");
};

document.querySelector("#previous2").onclick = function () {
    canShow(-1, 1, "slideshow2");
};

document.querySelector("#next3").onclick = function () {
    canShow(1, 2, "slideshow3");
};

document.querySelector("#previous3").onclick = function () {
    canShow(-1, 2, "slideshow3");
};
