#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome To CodewithRimsha - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit From 1 to 10):",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number.");
}
else{
    console.log("Sorry, you guess a wrong number");
}