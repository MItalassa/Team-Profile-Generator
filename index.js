const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const outputTeam = [];
// first ask for manager details
function managerInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What's the manager name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What's the manager's employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What's the manager email address?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What's the manager's office number'?",
            },
])
.then((val) => {
    const manager = new Manager(val.name, val.id, val.email, val.officeNumber)
    outputTeam.push(manager)
    completeTeam()
})
};
function completeTeam() {
    inquirer
        .prompt([
            {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true,
},
function ask() {
  inquirer.prompt(questions).then((answers) => {
    output.push(answers.tvShow);
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

