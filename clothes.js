const ps = require("prompt-sync");
const prompt = ps();

// if the bill amount is less than or equal to $800, apply a 25% discount.
// if the bill amount is greater than $300, apply a 15% discount.
// if the bill amount is less than $150, no discount is applied.

let totalbillamount = prompt("what's the total bill in dollars?");
if (totalbillamount <= 800) {
    console.log(totalbillamount - (totalbillamount *0.25));
} else if (totalbillamount > 300) {
    console.log(totalbillamount - (totalbillamount *0.15));
} else if (totalbillamount < 150) {
    console.log(totalbillamount); 
}