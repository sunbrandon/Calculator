let num1 = "";
let num2 = "";
let action = "";
let result = "";
let calculated = false;

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
    document.querySelector(".display").textContent = result;
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
        return add(parseFloat(a),parseFloat(b));
    }
    else if (op == "-") {
        return subtract(parseFloat(a),parseFloat(b));
    }
    else if (op == "x") {
        return multiply(parseFloat(a),parseFloat(b));
    }
    else if (op == "/") {
        return divide(parseFloat(a),parseFloat(b));
    }
    else if (op == "%") {
        return percent(parseFloat(a),parseFloat(b));
    }
}

let nums = document.querySelectorAll(".num");
let ops = document.querySelectorAll(".operator");
let equal = document.querySelector("#eq");

nums.forEach((num) => num.addEventListener("click", function() {
    display(result);
    if (calculated == true) {
        num1 = "";
        calculated = false;
    }
    if (action != "" && num1 != "") {
        num2 += num.textContent;
        display(num2);
        console.log(num2);
    }
    else {
        num1 += num.textContent;
        display(num1);
        console.log(num1);
    }
}));

ops.forEach((op) => op.addEventListener("click", function() {
    display("");
    calculated = false;
    if (num1 != "" && num2 != "") {
        if (num1 != "0" && num2 == "0" && action == "/") {
            clear();
            display("ERROR");
            return;
        }
        display(calculate(num1, action, num2));
        num1 = calculate(num1, action, num2)
        console.log(num1);
        num2 = "";
    }
    action = op.textContent;
    console.log(action);
}));

document.querySelector("#clear").addEventListener("click", () => {
    clear();
    console.log("cleared");
});

document.querySelector("#setneg").addEventListener("click", () => {
    num1 *= -1;
    result = num1;
    display(result);
})

document.querySelector(".eq").addEventListener("click", function() {
    display("");
    if (num1 != "0" && num2 == "0" && action == "/") {
        clear();
        display("ERROR");
        return;
    }
    display(calculate(num1, action, num2));
    console.log(calculate(num1, action, num2));
    num1 = calculate(num1, action, num2);
    num2 = "";
    action = "";
    calculated = true;
});