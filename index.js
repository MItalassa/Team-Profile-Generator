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
                name: 'what_next',
                message: 'Would you like to add a new engineer or intern in your team? Or is your team complete?',
                choices: ['Engineer', 'Intern', 'My team is complete!'],
            },
        ])
        .then((val) => {
            if (val.what_next === 'Engineer') {
                engineerInfo();
            }
            if (val.what_next === 'Intern') {
                internInfo();
            }
            if (val.what_next === 'My team is complete!') {
                fs.writeFile(outputPath, render(outputTeam), function (err) {
                    if (err) throw err;
                });
                console.log('HTML file created in output folder!');
            };
        });
};

// Create a function if user choose to add a new Engineer
function engineerInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What's the engineer name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What's the engineer's employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What's the engineer email address?",
            },
            {
                type: 'input',
                name: 'GitHub',
                message: "What's the engineer's GitHub username'?",
            },
        ])
        .then((val) => {
            const engineer = new Engineer(val.name, val.id, val.email, val.GitHub)
            outputTeam.push(engineer)
            completeTeam()
        }).catch((err) => {
            console.error(err)
        })
};

// Create a function if user choose to add a new Intern
function internInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What's the intern name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What's the intern's employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What's the intern email address?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What's the intern's school'?",
            },
        ])
        .then((val) => {
            const intern = new Intern(val.name, val.id, val.email, val.school)
            outputTeam.push(intern)
            completeTeam()
        })
};
managerInfo()
