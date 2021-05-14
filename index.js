// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeMarkdown = 

console.log('Hello');

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    }
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// // Function call to initialize app
init()
.then(function(data) {
    generateMarkdown(data);
    console.log(generateMarkdown(data))
})
