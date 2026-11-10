let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let addButton = document.querySelector('#addButton');
let outputField = document.querySelector('#output');
let subtractButton = document.querySelector('#subtractButton');
let multiplyButton = document.querySelector('#multiplyButton');
let divideButton = document.querySelector('#divideButton');

function add() {
    console.log("[add]Input Values:", input1.value, input2.value);

    let addition1 = Number(input1.value);
    let addition2 = Number(input2.value);
    let sum = addition1 + addition2;
    outputField.value = sum;

    console.log("[add]Sum:", sum);
}

addButton.onclick = () => add();

function subtract() {
    let substract1 = Number(input1.value);
    let subtract2 = Number(input2.value);
    let sum = substract1 - subtract2;
    outputField.value = sum;
}

subtractButton.onclick = () => subtract();

function multiply() {
    let multiply1 = Number(input1.value);
    let multiply2 = Number(input2.value);
    let total = multiply1 * multiply2;
    outputField.value = total;
}

multiplyButton.onclick = () => multiply();

function divide() {
    let divide1 = Number(input1.value);
    let divide2 = Number(input2.value);
    let total = divide1 / divide2;
    outputField.value = total;
}

divideButton.onclick = () => divide();