let num1, num2, operator

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(a, b, operator){
    switch (operator) {
        case "+":
            add(a, b)
            break;
        case "-":
            subtract(a, b)
            break;
        case "*":
            multiply(a, b)
            break;
        case "/":
            if (b == 0) return
            divide(a, b)
            break;
        default:
            break;
    }
}