"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let prompt = require('prompt-sync')();
let x = parseInt(prompt("Please enter your first value"));
let y = parseInt(prompt("Please enter your second value"));
// get input from the user.
let op = prompt("Please enter your operator");
if (op == "+") {
    console.log((x + y));
}
if (op == "-") {
    console.log((x - y));
}
if (op == "*") {
    console.log((x * y));
}
if (op == "/") {
    console.log((x / y));
}
else {
    console.log("Please enter correct operator");
}
