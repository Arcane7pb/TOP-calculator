
//OPERATIONS SECTION

const add = (x, y) => +x + +y;
const substract = (x, y) => +x - +y;
const multiply = (x, y) => +x * +y;
const divide = (x, y) => +x / +y;

let firstNum = "";
let secondNum = "";
let operator = "";
let calc = 0;
let firstDecimal = 0;
let secondDecimal = 0;

function operate (x, y, operat) {
    
    let total = 0;

    total = (operat === "+") ? add(x, y) :
        (operat === "-") ? substract(x, y) :
        (operat === "x") ? multiply(x, y) :
        (operat === "%") ? divide(x, y) :
        (operat === "*") ? multiply(x, y) :
        (operat === "/") ? divide(x, y) :
        "Invalid Operator"
    ;

    if ( (total % 1) != 0){
        total = total.toFixed(4).replace(/0+$/, "")
    }

    operator = "";
    firstNum = `${total}`;    
    secondNum = "";
    calc += 1

    return total
}

//DISPLAy

const display = document.querySelector(".displayOutput")

function updateDisplay(){

    display.textContent = `${firstNum}${operator}${secondNum}`;

}

//MANAGING BUTTON INPUTS

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
    {id : "productK", number: "*"},
    {id : "divideK", number: "/"},
];

function storeNumericalInput (input) {
    if(operator === ""){
        if (calc != 0){
            console.log("Number after operating")
            reset()
        }
        if (input === "."){
            if (firstDecimal != 0){
                return
            }
            firstDecimal = 1;
        }
        firstNum += input;
    } else {
        if (input === "."){
            if (secondDecimal != 0){
                return
            }
            secondDecimal = 1;
        }
        secondNum += input;
    }
}

function storeOperatorInput (input) {
    if(operator === ""){
        operator = input;
    } else if (secondNum != ""){
        operate(firstNum,secondNum,operator);
        operator = input
    }
}

function reset () {
    firstNum = "";
    secondNum = "";
    operator = "";
    calc = 0;
    firstDecimal = 0;
    secondDecimal = 0;
}

function eraseLastNum () {
    if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1);
    } else if (operator === "") {
        firstNum = firstNum.slice(0, -1);
    }
    updateDisplay()
}

function classifyButtonInput (event) {

    if (event.key){
        console.log("Key pressed");
        console.log(event.key);
        console.log(event.code);
    }

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

    if (event.target.className == "erase") {
        eraseLastNum();
    }

    if (event.target.className === "equal") {
            operate(firstNum, secondNum, operator);
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

calculator.addEventListener("click", classifyButtonInput )

//MANAGING KEYBOARD INPUTS with help of the previous button inputs

function classifyKeyboardInput (event) {

    for (number of numericalInputs) {
        if (number.number === event.key) {
            storeNumericalInput(number.number);
            updateDisplay();
            return console.log("Numerical input modified!");
        };
    };

    for (operat of operatorInputs) {
        if (operat.number === event.key) {
            storeOperatorInput(operat.number);
            updateDisplay();
            return console.log("Operator input added!");
        };
    };

    if ( (event.key == "Backspace") || (event.key == "delete") ) {
        eraseLastNum();
    }

    if ( (event.key == "Enter") || (event.key == "=") ) {
            operate(firstNum, secondNum, operator);
            updateDisplay();
            return console.log("Solved!");
    };

    if ( (event.key == "c") || (event.key == "C") ) {
            reset();
            updateDisplay();
            return console.log("Reset!");
    };

};

const keyboard = document.querySelector("body");

keyboard.addEventListener("keydown", classifyKeyboardInput )