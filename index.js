// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const mark = require('./utils/generateMarkdown');
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
        message: 'Provide a short description of the what, why and how of your project.',
    },
    // {
    //     type: 'input',
    //     name: 'deployed',
    //     message: ''
    // }
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
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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
        message: 'Add an email address.',
    }
    {
        type: 'input',
        name: 'gitHub',
        message: 'Add a link to your GitHub profile',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md", mark(answers))
    }) 
}

// Function call to initialize app
init();
