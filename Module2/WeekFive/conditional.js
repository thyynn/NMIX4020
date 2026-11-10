// function compare() {
//     let answer = 24;
//     let response = document.querySelector("#response");
//     response.innerHTML = "correct";
// }

// function compare() {
//     let answer = document.querySelector("#userInput");
//     answer = answer.value;
//     answer = Number(answer); // Convert from string to number

//     let response = document.querySelector("#response");

//     // if (answer === 24) {
//     //     response.innerHTML = "Correct!";
//     // } 
//     // else {
//     //     response.innerHTML = "Wrong answer!";
//     // }

//     if (answer === 24) {
//     response.innerHTML = "Correct!";
//     } 
//     else if (answer < 10) {
//     response.innerHTML = answer + " is way too low.";
//     } 
//     else if (answer < 24) {
//     response.innerHTML = answer + " is too low but close.";
//     } 
//     else if (answer > 40) {
//     response.innerHTML = answer + " is way too high.";
//     }
//     else {
//     response.innerHTML = answer + " is too high but close.";
//     }
// }

let dropdown = document.querySelector("#userInput");
let dropdownTwo = document.querySelector("#userInputTwo");

for (let i = 0; i <= 100; i++) {
    dropdown.innerHTML += `<option value="${i}">${i}</option>`;
    dropdownTwo.innerHTML += `<option value="${i}">${i}</option>`;
}

function compare() {
    let answer = Number(document.querySelector("#userInput").value);
    let response = document.querySelector("#response");

    switch (true) {
        case (answer === 24):
            response.innerHTML = "Correct!";
            break;
        case (answer < 10):
            response.innerHTML = answer + " is way too low.";
            break;
        case (answer < 24):
            response.innerHTML = answer + " is too low but close.";
            break;
        case (answer > 40):
            response.innerHTML = answer + " is way too high.";
            break;
        default:
            response.innerHTML = answer + " is too high but close.";
    }
}

function compareTwo() {
    let answer = Number(document.querySelector("#userInputTwo").value);
    let response = document.querySelector("#responseTwo");

    switch (true) {
        case (answer === 72):
            response.innerHTML = "Correct!";
            break;
        case (answer < 30):
            response.innerHTML = answer + " is way too low.";
            break;
        case (answer < 72):
            response.innerHTML = answer + " is too low but close.";
            break;
        case (answer > 90):
            response.innerHTML = answer + " is way too high.";
            break;
        default:
            response.innerHTML = answer + " is too high but close.";
    }
}
