let num1 = "";
let num2 = "";
let action = "";
let result = "";
let calculated = false;

document.addEventListener("DOMContentLoaded", function() {
    let nums = document.querySelectorAll(".num");
    let ops = document.querySelectorAll(".operator");
    let equal = document.querySelector("#eq");

    nums.forEach((num) => num.addEventListener("click", function(e) {
        display(result);
        if (calculated) {
            !calculated;
        }
        if (action != "" && num1 != "") {
            num2 = e.target.textContent;
            display(num2);
        }
        else {
            num1 = e.target.textContent;
            display(num1);
        }
    }))

    ops.forEach((op) => op.addEventListener("click", function(e) {
        calculated = false;
        if (num1 != "" && num2 != "") {
            if (num1 != "0" && num2 == "0" && action == "/") {
                clear();
                display("ERROR");
            }
            display(calculate(num1, op, num2));
            num1 = calculate(num1, op, num2)
            num2 = "";
        }
        action = e.target.textContent;
    }))

    document.querySelector(".clear").addEventListener("click", clear());
    document.querySelector("#eq").addEventListener("click", function() {
        display("");
        if (num1 != "0" && num2 == "0" && action == "/") {
            clear();
            display("ERROR");
        }
        display(calculate(num1, op, num2));
        num1 = calculate(num1, op, num2)
        num2 = "";
        action = "";
        calculated = true;
    })
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(a, b) {
    return (a / b) * 100;
}

function display(result) {
    let display = document.querySelector(".display");
    display.innerHTML = result;
}

function clear() {
    num1 = "";
    num2 = "";
    action = "";
    result = "";
    calculated = false;
}

function calculate(a, op, b) {
    if (op == "+") {
        return add(a,b);
    }
    else if (op == "-") {
        return subtract(a,b);
    }
    else if (op == "*") {
        return multiply(a,b);
    }
    else if (op == "/") {
        return divide(a,b);
    }
    else if (op == "%") {
        return percent(a,b);
    }
}