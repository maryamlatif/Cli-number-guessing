#! /usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number.
//user input for guessing number.
//computer user input with computer generate number and show result.
const randomnum = Math.floor(Math.random() * 15 + 1);
const number = await inquirer.prompt([{
        name: "userGuessednumber",
        type: "number",
        message: "Please guess a number between 1-15"
    }]);
console.log(number);
if (number.userGuessednumber === randomnum) {
    console.log("Congratulation! you guessed a right number:)");
}
else {
    console.log("You guessed a wrong number :(");
}
