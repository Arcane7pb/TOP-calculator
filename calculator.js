
//OPERATIONS SECTION

const add = (x, y) => +x + +y;
const substract = (x, y) => +x - +y;
const multiply = (x, y) => +x * +y;
const divide = (x, y) => +x / +y;

let firstNum = "";
let secondNum = "";
let operator = "";

function operate (x, y, operator) {

    let total = 0;

    total = (operator === "+") ? add(x, y) :
        (operator === "-") ? substract(x, y) :
        (operator === "*") ? multiply(x, y) :
        (operator === "/") ? divide(x, y) :
        "Invalid Operator"
    ;

    return total
}
//---------------------

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
    {id : "product", number: "*"},
    {id : "divide", number: "/"},
];

function storeNumericalInput (input) {
    firstNum += input;
    console.log(firstNum)
}

function storeOperatorInput (input) {
    if(operator === ""){
        operator = input;
    }
    console.log(operator)
}

function reset () {
    firstNum = "";
    secondNum = "";
    operator = "";
}

function classifyInput (event) {
    console.log(event.target.className);

    for (number of numericalInputs) {
        if (number.id === event.target.className) {
            storeNumericalInput(number.number);
            return console.log("Numerical input modified!");
        };
    };

    for (operat of operatorInputs) {
        if (operat.id === event.target.className) {
            storeOperatorInput(operat.number);
            return console.log("Operator input added!");
        };
    };

    if (event.target.className === "equal") {
            operate(firstNum, secondNum, operator);
            return console.log("Solved!");
    };

    if (event.target.className === "reset") {
            reset();
            return console.log("Reset!");
    };

};

const calculator = document.querySelector(".inputs");

calculator.addEventListener("click", classifyInput )