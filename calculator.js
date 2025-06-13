/*
Make numbers work.
Somehow when you hit a number multiple times it just appends itself so hit 7 then 7 again = 77
Store that value when an operator button is pressed.

repeat process and store second value
equate when either an operator is pressed or = button. 

Disable decimal button after pressed once


*/


// Cached DOM elements
const result_field = document.getElementById("solution")
const buttons = document.querySelectorAll("button.number[data-choice]");
const backspace = document.querySelectorAll("button.backspace");
const operators = document.querySelectorAll("button.operator");
const equals = document.querySelectorAll("button.equal");

// Attach click listeners to each number
buttons.forEach(button => {
  button.addEventListener("click", () => {
    numberChoice = button.dataset.choice;
    handleNumberClick(numberChoice);
  });
});

//Backspace button
backspace.forEach(button => {
    button.addEventListener("click", () => {
    result_field.textContent = result_field.textContent.slice(0,-1);

  });
});

//Equals button
equals.forEach(button => {
    button.addEventListener("click", () =>{
        if (firstNumber&&currentOperator&&secondNumber) {

        }
    })
})


function handleNumberClick(num) {
    if (!isSecondNumber) {
        firstNumber += num;
        updateDisplay(firstNumber);
    } else {
        secondNumber += num;
        updateDisplay(secondNumber);
    }
}


let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let isSecondNumber = false;

//Operator Buttons
operators.forEach(button => {
    button.addEventListener("click", () => {
        currentOperator = button.dataset.choice;

        if (firstNumber === '') return;

        if (secondNumber !== '') {
            operate(currentOperator,firstNumber,secondNumber)
        }

        isSecondNumber = true;
    })
});

//Operator Functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : 'Error: Divide by 0'; }

//Map operators to operations obj
const operations = {
    '+': add,
    '-': subtract,
    'x': multiply,
    '/': divide
};

function operate(operator) {
    const x = parseFloat(firstNumber);
    const y = parseFloat(secondNumber);
    const operation = operations[operator];

    const result = operation(x, y);

    updateDisplay(result);
    firstNumber = result.toString();
    secondNumber = '';
    currentOperator = null;
    isSecondNumber = false;
    console.log(result);
    
}

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    
}

//Updates the number display
function updateDisplay(value){
    result_field.textContent = value;
}

function clearField(){
    result_field.textContent = ""
}