// Question7: Write a number guessing game. Provide a selected number and a guess based on those numbers, give players cluesif their guess is highet
import promptSync from 'prompt-sync';
let prompt = require('prompt-sync')();
function numberGuessingGame() {
    const selectedNumber: number = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    let numberOfGuesses: number = 0;
    let isCorrect: boolean = false;

    while (!isCorrect) {
        const guessInput: string | null = prompt("Enter your guess (between 1 and 100):");

        if (!guessInput) {
            console.log("Please enter a valid number between 1 and 100.");
            continue;
        }

        const guess: number = parseInt(guessInput);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            continue;
        }

        numberOfGuesses++;

        if (guess === selectedNumber) {
            console.log(`Congratulations! You guessed the number (${selectedNumber}) correctly in ${numberOfGuesses} attempts.`);
            isCorrect = true;
        } else if (guess < selectedNumber) {
            console.log("Too low! Try guessing a higher number.");
        } else {
            console.log("Too high! Try guessing a lower number.");
        }
    }
}

numberGuessingGame();
