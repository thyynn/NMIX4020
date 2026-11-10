let question = document.querySelector("#question");
let answer = document.querySelector("#answer");
let category = document.querySelector("#category");
let theAnswer = "";

function qa() {
     $.getJSON('https://the-trivia-api.com/v2/questions/', function(data) { 
        question.innerHTML = data[0].question.text;
        category.innerHTML = "<h2> Category: " + data[0].category.replaceAll("_", " ") + "</h2>";
        theAnswer = data[0].correctAnswer;
     });

}

function showAnswer() {
        answer.innerHTML = "Answer: " + theAnswer;
}