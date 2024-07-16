// Packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter a project title",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a project description",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter your project installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter your project usage information",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter your project contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter your project test instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a project license",
    choices: [
      "none",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause Simplified Licence",
      "BSD 3-Clause New or Revised License",
      "Boost Software License 1.0",
      "Creative Commons Zero V1.0 Universal",
      "Eclipse Public License 1.0",
      "GNU Affero General Public License v2.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  },
];

// Write to README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File created successfully");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const readmeData = generateMarkdown(answers);
    writeToFile("README.md", readmeData);
  });
}

// Function call to initialize app
init();
