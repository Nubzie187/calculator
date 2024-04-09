let numOne = 0;
let numTwo = 0;
let operator = " ";

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

const display = document.getElementById('display');
const number = document.querySelectorAll(".number");
number.forEach(number => {
    number.addEventListener('click', function (){
        display.append(number.textContent);
    });
});