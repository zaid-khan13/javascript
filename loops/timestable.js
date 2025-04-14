const ps = require("prompt-sync");
const prompt = ps();

let thenumber = prompt("please enter a number");
for (let i = 1; i <= 20; i++) {
console.log(`${thenumber} x ${i} = ${thenumber * i}`);
}

// 2x1=2
// 2x2=4
// 2x3=6
// 2x4=8
// 2x5=10
// 2x6=12
// 2x7=14
// 2x8=16
// 2x9=18
// 2x10=20


