const ps = require("prompt-sync");
const prompt = ps();

let base = Number(prompt("enter the base number"));
let power = Number(prompt("enter the power"));
let currentValue = base;

for (let i = 0; i < power-1; i++) {
  currentValue = currentValue * base;
  console.log(currentValue);
}

