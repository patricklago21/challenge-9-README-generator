// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenseArr = ['Apache 2.0', 'GNU v3', 'MIT']

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the usage information of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the guidelines of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the test instructions of your project!');
                return false;
            }
        }
    },
    {
       type: 'list',
       name: 'license',
       message: 'Please indicate the license used for your project:',
       choices: licenseArr,
       default: 0
    }
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./utils/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};


// // TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// // Function call to initialize app
init()
.then(reply => generateMarkdown(reply))
.then(newMarkdown => writeToFile('README.md', newMarkdown))
.catch(err => {
    console.log(err);
});