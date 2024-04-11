const display = document.getElementById('display');
const number = document.querySelectorAll(".number");
const decimalButton = document.getElementById("decimal");
const maxLength = 10;
let valuesArray = [];
let numOne = 0;
let numTwo = 0;
let operator = " ";
let isEquals = false;

number.forEach(number => {
    number.addEventListener('click', function (){  
        display.append(number.textContent); //Adds the first number to the display
        //This checks to see if equals has been pressed. If so, it starts a new calculation on next number button pressed
        if(isEquals){
            //Resets the calculator
            display.textContent = "";
            valuesArray = [];
            isEquals = false;
            display.append(number.textContent);
        }
        //Sets display maxLength to 10 digits
        if (display.textContent.length >= maxLength) {
            display.textContent = display.textContent.slice(0, maxLength);
        }
    });
});

//Loop through each operator and assign operator to the one clicked
const op = document.querySelectorAll(".operator");
op.forEach(op => {
    op.addEventListener('click', function(){
        valuesArray.push(display.textContent);  //Add values to the array          
        display.textContent = ""; 
        numOne = valuesArray[0];
        numTwo = valuesArray[1];
        
        switch(op.id){
            case "add":
                operator = "add";
                break;
            case "subtract":
                operator = "subtract";
                break;
            case "divide":
                operator = "divide";
                break;
            case "multiply":
                operator = "multiply";
                break;
            case "equals":
                operations();
                isEquals = true;
                break;
            case "clear":
                clearDisplay();
        }
    });
});

//Adds decimal functionality
decimalButton.addEventListener("click", function() { 
    display.append(decimalButton.textContent);
});

function operations(){
    switch(operator){
        case "add":
            display.textContent = add(parseFloat(numOne), parseFloat(numTwo));
            break;
        case "subtract":
            display.textContent = subtract(parseFloat(numOne), parseFloat(numTwo));
            break;        
        case "multiply":
            display.textContent = multiply(parseFloat(numOne), parseFloat(numTwo));
            break;
        case "divide":
            display.textContent = divide(parseFloat(numOne), parseFloat(numTwo));
            break;
    }
}

function clearDisplay(){
    display.textContent = "0";
    valuesArray = [];
}

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
    //Zero doesn't exist
    if (b === 0) { 
        return "Error";
    }
    return a / b;
}