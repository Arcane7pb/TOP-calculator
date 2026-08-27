
//OPERATIONS SECTION

const add = (x, y) => +x + +y;
const substract = (x, y) => +x - +y;
const multiply = (x, y) => +x * +y;
const divide = (x, y) => +x / +y;

let firstNum = "";
let secondNum = "";
let operator = "";

function operate (x, y, operat) {
    
    let total = 0;

    total = (operat === "+") ? add(x, y) :
        (operat === "-") ? substract(x, y) :
        (operat === "*") ? multiply(x, y) :
        (operat === "/") ? divide(x, y) :
        "Invalid Operator"
    ;

    operator = "";
    firstNum = `${total}`;    
    secondNum = "";

    return total
}

//DISPLAy

const display = document.querySelector(".displayOutput")

function updateDisplay(){

    display.textContent = `${firstNum} ${operator} ${secondNum}`;

}

//MANAGING INPUTS

const numericalInputs = [
    {id : "zero", number: "0"},
    {id : "one", number: "1"},
    {id : "two", number: "2"},
    {id : "three", number: "3"},
    {id : "four", number: "4"},
    {id : "five", number: "5"},
    {id : "six", number: "6"},
    {id : "seven", number: "7"},
    {id : "eight", number: "8"},
    {id : "nine", number: "9"},
    {id : "decimal", number: "."},
];

const operatorInputs = [
    {id : "plus", number: "+"},
    {id : "substract", number: "-"},
    {id : "product", number: "x"},
    {id : "divide", number: "%"},
];

function storeNumericalInput (input) {
    if(operator === ""){
    firstNum += input;
    } else {
    secondNum += input;
    }
}

function storeOperatorInput (input) {
    if(operator === ""){
        operator = input;
    }
}

function reset () {
    firstNum = "";
    secondNum = "";
    operator = "";
}

function classifyInput (event) {

    for (number of numericalInputs) {
        if (number.id === event.target.className) {
            storeNumericalInput(number.number);
            updateDisplay();
            return console.log("Numerical input modified!");
        };
    };

    for (operat of operatorInputs) {
        if (operat.id === event.target.className) {
            storeOperatorInput(operat.number);
            updateDisplay();
            return console.log("Operator input added!");
        };
    };

    if (event.target.className === "equal") {
            operate(firstNum, secondNum, operator);
            updateDisplay();
            updateDisplay();
            return console.log("Solved!");
    };

    if (event.target.className === "reset") {
            reset();
            updateDisplay();
            return console.log("Reset!");
    };

};

const calculator = document.querySelector(".inputs");

calculator.addEventListener("click", classifyInput )