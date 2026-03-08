const display = document.getElementById("display");
const history = document.getElementById("history");

let firstNumber = null;
let operator = null;
let waitingSecond = false;
let justCalculated = false;

function appendNumber(num) {

    if (waitingSecond) {
        display.value = num;
        waitingSecond = false;
    } else {
        display.value = display.value ? display.value + num : num;
    }
}

function setOperator(op) {

    const current = parseFloat(display.value);

    if (justCalculated) {
        history.innerText = current + " " + op;
        firstNumber = current;
        operator = op;
        waitingSecond = true;
        justCalculated = false;
        return;
    }

    if (firstNumber === null) {
        firstNumber = current;
    } 
    else if (!waitingSecond) {
        const result = operate(firstNumber, current, operator);
        display.value = result;
        firstNumber = result;
    }

    operator = op;
    waitingSecond = true;

    history.innerText = firstNumber + " " + op;
}

function calculate() {

    if (operator === null) return;

    const secondNumber = parseFloat(display.value);

    history.innerText = firstNumber + " " + operator + " " + secondNumber + " =";

    const result = operate(firstNumber, secondNumber, operator);

    display.value = result;

    firstNumber = result;
    operator = null;
    waitingSecond = true;
    justCalculated = true;
}

function operate(a, b, op) {

    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? "Error" : a / b;
    }
}

function clearDisplay() {
    display.value = "";
    history.innerText = "";
    firstNumber = null;
    operator = null;
    waitingSecond = false;
    justCalculated = false;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function developer() {
    alert("Developer Information\n\nName: Jessel Zapanta\nRole: Programmer\nCourse: MSIT1");
}

function about() {
    alert("Application Information\n\nWeb Calculator\nVersion 1.0\nStandard Web Calculator.");
}