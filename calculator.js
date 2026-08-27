const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let firstNum = 6 ;
let secondNum = 3;
let operator = "" ;

function operate (x, y, operator) {
    let total = 0
    if (operator === "+"){
        total = add(x, y);
    } else if (operator === "-"){
        total = substract(x, y);
    } else if (operator === "*"){
        total = multiply(x, y);
    } else if (operator === "/"){
        total = divide(x, y);
    } else {
        return "Invalid Operator"
    }
    return total
}

console.log(operate(firstNum,secondNum, operator))