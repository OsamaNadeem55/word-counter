#! /usr/bin/env node
// Import the 'inquirer' module, which is a command line interface for node.js
import inquirer from "inquirer"

// Declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
       name: "Sentence",
       type: "input",
       message: "Enter Your Sentence to Count the Word: "

    } 

]) 

const words =  answers.Sentence.trim().split(" ")

// print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(`Your Sentence Word Count is ${words.length}`);
