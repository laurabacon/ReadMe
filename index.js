const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your github username?",
      name: "username",
    },
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
      name: "usage",
    },
    {
      type: "input",
      message:
        "Please describe what installations are required for your application.",
      name: "installation",
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
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
};

const gitApi = {
  async getUser(userResponses) {
    try {
      const response = await fetch(`https://api.github.com/users/${userResponses.username}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log('Request failed. Status:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
};


const writeFileAsync = util.promisify(fs.writeFile);


async function writeToFile(fileName, data) {
  if (writeToFile) {
    await writeFileAsync(fileName, data);
    console.log("Your README file has been generated!");
  } else {
    console.log("Error has occurred.");
  }
};

async function init() {
  if (init) {
    const userResponses = await questions();
    const usersInfo = await gitApi.getUser(userResponses);
    console.log("Github: ", usersInfo);
    const answers = userResponses;
    const readMeInfo = generateMarkdown(answers);
    const fileName = `output/README.md`;
    await writeToFile(fileName, readMeInfo);
  }
  else {
    console.log("error");
  }
  };

// Function call to initialize app
init();
