"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let prompt = require('prompt-sync')();
function numberGuessingGame() {
    const selectedNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    let numberOfGuesses = 0;
    let isCorrect = false;
    while (!isCorrect) {
        const guessInput = prompt("Enter your guess (between 1 and 100):");
        if (!guessInput) {
            console.log("Please enter a valid number between 1 and 100.");
            continue;
        }
        const guess = parseInt(guessInput);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            continue;
        }
        numberOfGuesses++;
        if (guess === selectedNumber) {
            console.log(`Congratulations! You guessed the number (${selectedNumber}) correctly in ${numberOfGuesses} attempts.`);
            isCorrect = true;
        }
        else if (guess < selectedNumber) {
            console.log("Too low! Try guessing a higher number.");
        }
        else {
            console.log("Too high! Try guessing a lower number.");
        }
    }
}
numberGuessingGame();
