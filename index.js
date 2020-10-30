const markdown = require('./utils/generateMarkdown')

const inquirer = require('inquirer')

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// const axios = require('axios')

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What's the name of you're README file?",
        name: "userFileName"
    },
    {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What's the title of your Project?",
        name: "title"
    },
    {
        type: "input",
        message: "What technology is needed to install your application?",
        name: "installation"
    },
    {
        type: "input",
        message: "How do you use your application?",
        name: "usage"
    },
    {
        type: "input",
        message: "What's the license for your application?",
        name: "license"
    },
    {
        type: "input",
        message: "Who all contributed to your project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "How can someone test your application?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What's your email along with some instructions to best reach you?",
        name: "contact"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', (err) => {
        if (err) throw err;
        console.log("You're README file is now ready!")
    })
}

// function to initialize program
function init() {

    inquirer
        .prompt(questions)

        .then((response)=>{
            console.log(response)
            writeToFile(`${response.userFileName}`, generateMarkdown(response))
        })
}

// function call to initialize program
init();
