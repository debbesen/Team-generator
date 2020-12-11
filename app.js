const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");




const newEmployee = []

const getPosition = [{
    type: "list",
    name: "role",
    message: "which employee would you like to add",
    choices: [
        "Intern",
        "Manager", 
        "Engineer",
        "Done"
    ]

}];

function promptQuestion(){
    inquirer.prompt(getPosition).then(answers => {
        console.log(answers)
        switch (answers.role){
            case "Manager":
                return newManager();
                break;

            case "Intern":
                return newIntern();
                break;

            case "Engineer":
                return newEngineer();
                break;

            case "Done":
                return imDone();
                break;

        }

    });
};
promptQuestion();



function newIntern() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Team members name?"
    },
    {
        type: "input",
        name: "id",
        message: "id number:"

    },
    {
        type: "input",
        name: "email",
        message: "Email address:"

    },
    {
        type: "input",
        name: "school",
        message: "School Name:"

    }


    ]).then(answers => {
        const manager = new Intern(answers.name, answers.id, answers.email, answers.school)
        newEmployee.push(intern)
        promptQuestion();
    })
};




function newEngineer() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Team members name?"
    },
    {
        type: "input",
        name: "id",
        message: "id number:"

    },
    {
        type: "input",
        name: "email",
        message: "Email address:"

    },
    {
        type: "input",
        name: "github",
        message: "Enter GitHub:"

    }


    ]).then(answers => {
        const manager = new Engineer(answers.name, answers.id, answers.email, answers.github)
        newEmployee.push(engineer)
        promptQuestion();
    })
};



function newManager() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Team members name?"
    },
    {
        type: "input",
        name: "id",
        message: "id number:"

    },
    {
        type: "input",
        name: "email",
        message: "Email address:"

    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter Office Number:"

    }


    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNuber)
        newEmployee.push(manager)
        promptQuestion();
    })
};

function imDone() {
    renderHTML();
    console.log(newEmployee)
    
}


function renderHTML(){
fs.writeFile(outputPath, render(newEmployee), function(err, data) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  
  })};

