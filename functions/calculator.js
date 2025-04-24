const ps = require("prompt-sync");
const prompt = ps();

function add(num1, num2) {
  let res = num1 + num2;
  return res;
}

let sum = add(22, 42);

console.log(sum);

function divide(num1, num2) {
  let res = num1 / num2;
  return res;
}

let quotient = divide(10, 2);

console.log(quotient);

function multiply(num1, num2) {
  let res = num1 * num2;
  return res;
}

let product = multiply(5, 6);

console.log(product);

function subtract(num1, num2) {
  let res = num1 - num2;
  return res;
}

let difference = subtract(50, 25);

console.log(difference);

function exponent(num1, num2) {
  let res = num1 - num2;
  return res;
}

let power = exponent(5, 5);

console.log(power);

function calculator() {
  let operator = prompt(
    "please choose the function you want add, divide, multiply, subtract, exponent?"
  );

  if (operator === "add") {
    console.log("begining add");
    let num1 = Number(prompt("please enter number"));
    let num2 = Number(prompt("please enter number"));
    console.log(add(num1, num2));
    console.log("finished add");
  } else if (operator === "divide") {
    console.log("begining divide");
    let num1 = Number(prompt("please enter number"));
    let num2 = Number(prompt("please enter number"));
    console.log(divide(num1, num2));
    console.log("finished devide");
  } else if (operator === "multiply") {
    console.log("begining multiply");
    let num1 = Number(prompt("please enter number"));
    let num2 = Number(prompt("please enter number"));
    console.log(multiply(num1, num2));
    console.log("finished multiply");
  } else if (operator === "subtract") {
    console.log("begining subtract");
    let num1 = Number(prompt("please enter number"));
    let num2 = Number(prompt("please enter number"));
    console.log(subtract(num1, num2));
    console.log("finished subtract");

  } else if (operator === "exponent") {
    console.log("begining exponent");
    let base = Number(prompt("enter the base number"));
    let power = Number(prompt("enter the power"));
    let currentValue = base;
    for (let i = 0; i < power - 1; i++) {
      currentValue = currentValue * base;
      console.log(currentValue);
      
      
    }
  } else {
    console.log("invalid operator please try again");
  }

  return operator;
}

calculator();


