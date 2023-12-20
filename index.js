const fs = require('fs');
const inquirer = require ('inquirer');

const generate = require('./output/generate.js');



const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your github repo?',
            name: 'repo-name'
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please provide a short description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please detail the usage and any other information needed to better understand how to use your application.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Please describe what installations are required for your application.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'If applicable, list other contributing developers.',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Please list any tests written for your application.',
            name: 'testing'
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}



// TODO: Create a function to initialize app
function init() = () => {

}




// Function call to initialize app
init();