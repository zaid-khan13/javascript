const ps = require("prompt-sync");
const prompt = ps();

// if the bill amount is greater than $1500, apply a 25% discount.
// if the bill amount is between $500 and $1000, apply a 15% discount.
// if the bill amount is less than $400, no discount is applied.

let totalbillamount = prompt("what's the total bill in dollars?");
if (totalbillamount > 1500) {
    console.log(totalbillamount - (totalbillamount *0.25));
} else if (totalbillamount >= 500) {
    console.log(totalbillamount - (totalbillamount *0.15));
} else if (totalbillamount < 400) {
    console.log(totalbillamount);
}