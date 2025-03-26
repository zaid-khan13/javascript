// To use Prompt in node js

// 1. Install prompt-sync
 //npm install prompt-sync

// 2. import prompt-sync function
// const ps = require("prompt-sync");
// const prompt = ps();

// 1. Ask user their body type preference


// 2. Ask user what brand they like


// 3. Ask user what model from that brand


// 4. Ask user their color choice


// 5. Log the sentence: Ok, I'll find you a {color} {brand} {model} {body type}.

const ps = require("prompt-sync");
const prompt = ps();

let bodytype = prompt("what type of bodytype you want?");

let brand = prompt("what type of brand you like?");

let model = prompt("what model you like from that brand?");

let color = prompt("what is your color choice?");
