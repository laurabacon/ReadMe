const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the name of your GitHub repo?",
      name: "repo-name",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a short description of your project.",
      name: "description",
    },
    {
      type: "input",
      message:
        "Please detail the usage and any other information needed to better understand how to use your application.",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Please describe what installations are required for your application.",
      name: "usage",
    },
    {
      type: "input",
      message: "If applicable, list other contributing developers.",
      name: "contributing",
    },
    {
      type: "input",
      message: "Please list any tests written for your application.",
      name: "testing",
    },
  ]);
};

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  try {
    await writeFileAsync(fileName, data);
    console.log("Your README file has been generated!");
  } catch (error) {
    console.log("Error has occurred.", error);
  }
}

async function init() {
  try {
    const userResponses = await questions();
    const answers = userResponses;
    const readMeInfo = generateMarkdown(answers);
    const fileName = `output/README.md`;
    await writeToFile(fileName, readMeInfo);
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();
