// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title the project?',
    },
    {
        type: "input",
        name: "description",
        message: 'What is the description of the project?',
    },
    {
        type: 'input',
        name: 'table',
        message: "List a table of contents.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions?",
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Add anyone who contributed to this project?",
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add any test you have designed',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If a developer has question how can they reach you?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
