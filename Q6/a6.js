"use strict";
// Question6:Write a program that calculte the Body Mass Index(BMI) and categorized it
function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / height (m) squared
    const bmi = weight / (height * height);
    return bmi;
}
const bmii = calculateBMI(50, 5);
let category;
if (bmii < 18.5) {
    category = "Underweight";
}
else if (bmii >= 18.5 && bmii < 24.9) {
    category = "Normal weight";
}
else if (bmii >= 24.9 && bmii < 29.9) {
    category = "Overweight";
}
else {
    category = "Obese";
}
console.log(`Your BMI is ${bmii.toFixed(2)}, which falls under the category of ${category}.`);
const bmi = calculateBMI(50, 5);
