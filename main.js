let num1 = "", 
    num2 = "", 
    operator = "", 
    display = ""

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

function modulus(a, b){
    return a % b
}

function operate(a, b, operator){
    switch (operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        case "%":
            return modulus(a, b)
    }
}

let result = ""
const dd = document.getElementById("dis")

function action(data){
    switch (data){
        case "C":
            display = ""
            num1 = ""
            num2 = ""
            operator = ""
            document.getElementById(".").disabled = false
            break;
        case "Backspace":
            if (display[display.length - 1] == "."){
                document.getElementById(".").disabled = false
                display = parseFloat(display).toString()
            } else {
                let arr = display.split('')
                arr.pop()
                display = arr.join("")
                // display = 
                //     display = Math.floor(parseFloat(display) / 10)
                // } else {
                //     display = ""
                // }
            }
            break;
        case "=":
            display = operate(parseFloat(num1), parseFloat(num2), operator).toString()
            num2 = ""
            num1 = display
            operator = ""
            break;
        case "sign":
            if (num2 != ""){
                num2 = (parseFloat(num2) * -1).toString()
                display = num2
            } else if (num1 != ""){
                display = "-"
            } else if (display != ""){
                display = (parseFloat(display) * -1).toString()
            } else {
                display = "-"
            }
            break;
        case ".":
            document.getElementById(".").disabled = true
            if (num2 != ""){
                num2 += data
                display = num2
                break
            }
            if (display == ""){
                display = "0."
            }
            display += data
            break;
        case "%":
        case "+":
        case "-":
        case "*":
        case "/":
            if (operator == ""){
                operator = data
                num1 = display
            } else {
                if (num2 == "") break
                num1 = operate(parseFloat(num1), parseFloat(num2), operator).toString()
                display = num1
                operator = data
                num2 = ""
            }
            document.getElementById(".").disabled = false
            document.getElementById(data).focus()
            break;
        default:
            if (parseInt(data) > -1){
                if (operator != ""){
                    if (display == "-"){
                        num2 = display + data
                    } else {
                        num2+=data
                    }
                    display = num2
                    break
                }
                display += data
            }
            break;
    }
    dd.innerHTML = display
}

window.addEventListener('keydown', function(e){
    action(e.key)
});