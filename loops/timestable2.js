const ps = require("prompt-sync");
const prompt = ps();

let thenumber = prompt("please enter a number");
for (let i = 11; i>=1; -i) {
console.log(`${thenumber} x ${--i} = ${thenumber * i}`);
}

// vx10jg0
// 2x9=18
// 2x8=16
// 2x7=14
// 2x6=12
// 2x5=10
// 2x4=8
// 2x3=6
// 2x2=4
// 2x1=2