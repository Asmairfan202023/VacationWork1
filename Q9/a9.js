"use strict";
// Question8: Write a simple javaSript program that checks if a person is eligible for CNIC(show message with a person name)
// Function to check eligibility for CNIC
const personName = "Ahmad Mustafa";
const personAge = 20;
if (personAge >= 18) {
    console.log(`${personName} is eligible for CNIC.`);
}
else {
    console.log(`${personName} is not eligible for CNIC yet.`);
}
