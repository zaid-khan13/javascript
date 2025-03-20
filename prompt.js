// To use Prompt in node js

// 1. Install prompt-sync
//  npm install prompt-sync

// 2. import prompt-sync function
// const ps = require("prompt-sync");
// const prompt = ps();

const ps = require("prompt-sync");
const prompt = ps();

// New Grading System
// A+: 90-100
// A: 80-89
// B:70-79
// C: 60-69
// D: 50-49
// E: 40-39
// F: Fail

let studentPercentage = prompt("whats your percentage?");

if (studentPercentage >= 90) {
  console.log("A+");
} else if (studentPercentage >= 80) {
  console.log("A");
} else if (studentPercentage >= 70) {
  console.log("B");
} else if (studentPercentage > 60) {
  console.log("C");
} else if (studentPercentage > 50) {
  console.log("D");
} else if (studentPercentage > 40) {
  console.log("E");
} else {
  console.log("F");
}

// let name = prompt("What's your name?");
// console.log(`Hello ${name}`);

// let age = prompt("What's your age?");
// console.log(`${name} is ${age} years old`);



