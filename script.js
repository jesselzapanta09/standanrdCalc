const display = document.getElementById("display");
const history = document.getElementById("history");

let firstNumber = null;
let operator = null;
let waitingSecond = false;
let expression = "";

function appendNumber(num){

    if(waitingSecond){
        display.value = num;
        waitingSecond = false;
    } else {
        display.value = display.value ? display.value + num : num;
    }
}

function setOperator(op){

    if(firstNumber === null){
        firstNumber = parseFloat(display.value);
        expression = display.value + " " + op + " ";
    } else if(!waitingSecond){

        const secondNumber = parseFloat(display.value);
        firstNumber = operate(firstNumber, secondNumber, operator);

        expression += display.value + " " + op + " ";
        display.value = firstNumber;
    }

    operator = op;
    waitingSecond = true;

    history.innerText = expression;
}

function calculate(){

    if(operator === null) return;

    const secondNumber = parseFloat(display.value);

    expression += display.value + " =";

    const result = operate(firstNumber, secondNumber, operator);

    history.innerText = expression;
    display.value = result;

    firstNumber = result;
    operator = null;
    waitingSecond = true;
}

function operate(a,b,op){

    switch(op){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? "Error" : a / b;
    }
}

function clearDisplay(){
    display.value = "";
    history.innerText = "";
    firstNumber = null;
    operator = null;
    expression = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function developer(){
    alert("Developer Information\n\nName: Jessel Zapanta\nRole: Programmer\nTechnology: HTML, CSS, JavaScript");
}

function about(){
    alert("Application Information\n\nWeb Calculator\nVersion 1.0\nStandard Web Calculator.");
}