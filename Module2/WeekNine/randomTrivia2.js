let divLoad = document.querySelector("#mainDiv"); 
var theAnswer = [];

function qa() {
     $.getJSON('https://the-trivia-api.com/v2/questions/', function(data) { 
        divLoad.innerHTML = "";
        theAnswer = [];

        for (let i = 0; i < 10; i++) {
            divLoad.innerHTML += "<h3> Category: " + data[i].category.replaceAll("_", " ") + "</h3>";
            divLoad.innerHTML += "<p> Question: " + data[i].question.text + "</p>";
            
            divLoad.innerHTML += "<button onclick='showAnswer(" + i + ")'>Show Answer</button><br>";
            divLoad.innerHTML += "<br><div id='answers" + i + "'></div><br>";
            theAnswer.push(data[i].correctAnswer);
        }
     });

}

function showAnswer(a) {
    let something = "#answers" + a;
    let somethingelse = document.querySelector(something);
    somethingelse.innerHTML = theAnswer[a];
}
