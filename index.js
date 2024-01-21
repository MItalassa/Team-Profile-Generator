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

// Create a function to ask the user to add a new team member or complete the file
};
function completeTeam() {
    inquirer
        .prompt([
            {
            type: 'list',
            name: 'what-next',
            message: 'Would you like to add a new engineer or intern in your team? Or is your team complete?',
            choices: ['Engineer', 'Intern', 'My team is complete!'],
            },
        ])
        .then((val) =>{
            if (val.what-next === 'Engineer') {
                addEngineer();
            }
            if (val.what-next === 'Intern') {
                addIntern();
            }
            else {
                MyTeamPage();
            }
        });

};

// Create a function in user choose to add a new Engineer



