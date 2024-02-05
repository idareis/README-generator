const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },
    {
        type: "input",
        name: "license",
        message: "Please choose a license for your project:",
        choices: ["MIT", "GPL", "Apache", "None"]
    },
    {
        type: "input",
        name: "contributions",
        message: "Please explain how others can contribute to your project:"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const outputPath = path.resolve(__dirname, fileName);
    fs.writeFileSync(outputPath, data);
}

// function to initialize program
function init() {
    inquirer.createPromptModule(questions)
        .then((answers) => {
            const fileName = "README.md";
            const generatedREADME = generateMarkdown(answers);
            writeToFile(fileName, generatedREADME);
            console.log(`${fileName} successfully generated!`);
        })
        .catch((err) => console.error(err));
}

// function call to initialize program
init();
