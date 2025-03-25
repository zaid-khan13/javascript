const ps = require("prompt-sync");
const prompt = ps();

// If the bill amount is greater than or equal to $500, apply a 20% discount.
// If the bill amount is between $100 and $500, apply a 10% discount.
// If the bill amount is between $50 and $99, apply a 5% discount.
// If the bill amount is less than $50, no discount is applied.

let totalbillamount = prompt("what's the total bill in dollars?");
if (totalbillamount >= 500) {
  console.log(totalbillamount - totalbillamount * 0.2);
} else if (totalbillamount >= 100) {
  console.log(totalbillamount - totalbillamount * 0.1);
} else if (totalbillamount >= 50) {
  console.log(totalbillamount - (totalbillamount * 5) / 100);
} else if (totalbillamount < 50) {
  console.log(totalbillamount);
}

// apply a 10% discount
// totalbillamount-totalbillamount*.1

// Percentages
// Percentage is the value out of 100
// 10% is 10 out of 100, 20% is 20 out of 100
// Value from 0 - 1
// 0% = 0
// 100% = 1
// 0/100 = 0
// 100/100 = 1
// 5/100

// totalbillamount = 100
// what is 10% of 100? 100*.1 = 10
// what is 90% of 100? 100*.9 = 90

// If you need to calculate the % of a value.
// Step 1: Calculate the percentage
// Step 2: Calculate that percentage from the value.

// Step 1: What is a Percentage? Percentage of out 100.
// What is 5%? 5/100 = 0.05
// What is 50%? 50/100 = 0.5
// What is 20%? 20/100 = 0.2
// What is 10%? 10/100 = 0.1
// Percentage will always be between 0.0 and 1.0

// Step 2: What is this Percentage of the value?
// value*percentage
// What is 5% of 50?
// 50*0.05 = 2.5
// What is 10% of 100?
// 100*10/100
// 50*5/100 = 2.5
// 50*0.05 = 2.5s
