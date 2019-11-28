//All dependecies and files required
const fs = require("fs");
const inquirer = require("inquirer");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const html = require("./lib/htmlBuilders");

//This function initiates the CLI app

const path = "./output/";
const fileName = process.argv[2];
const extension = ".html";

init(path, fileName, extension);

//This block creates the html file and writes the initial html code
function init(path, fileName, extension) {

    console.log(`${fileName} initiated`)

    inquirer
        .prompt([{
            name: "name",
            message: "Enter team name:",
            default: "Team Name"
        }])
        .then(answers => {
            fs.writeFile(path + fileName + extension, html.initialHTML(answers.name), function (error) {
                if (error) { throw error };
            });
            console.log(`Team: ${answers.name} started.`);
        })

        //This block takes the Manager's info and adds it to the HTML file
        .then(function createManager() {
            inquirer
                .prompt([{
                    name: "name",
                    message: "Enter team manager's name: ",
                    default: "John Doe"
                },
                {
                    name: "id",
                    message: "Enter manager's ID: ",
                    default: "12345"
                },
                {
                    name: "email",
                    message: "Enter manager's email: ",
                    default: "name@company.com"
                },
                {
                    name: "office",
                    message: "Enter manager's office number: ",
                    default: "n/a"
                }])
                .then(answers => {
                    var managerObj = new manager(answers.name, answers.id, answers.email, answers.office);
                    fs.appendFile(path + fileName + extension, html.managerHTML(managerObj), function (error) {
                        if (error) { throw error };
                    })
                    console.log(`${managerObj.name} info appended`);
                })

                //This block defines if an employee is an Engineer or an Intern
                .then(function createEmployee() {
                    inquirer
                        .prompt({
                            type: "list",
                            name: "role",
                            message: "Select employee's role",
                            choices: ["engineer", "intern"]
                        })

                        //This block gets an Engineer's info and adds it to the html file
                        .then(answers => {
                            if (answers.role === "engineer") {
                                inquirer
                                    .prompt([{
                                        name: "name",
                                        message: "Enter engineer's name: ",
                                        default: "John Doe"
                                    },
                                    {
                                        name: "id",
                                        message: "Enter engineer's ID: ",
                                        default: "12345"
                                    },
                                    {
                                        name: "email",
                                        message: "Enter engineers's email: ",
                                        default: "name@company.com"
                                    },
                                    {
                                        name: "github",
                                        message: "Enter engineer's github name: ",
                                        default: "username"
                                    },
                                    {
                                        type: "list",
                                        name: "continue",
                                        message: "Add another team member",
                                        choices: ["yes", "no"]
                                    }])
                                    .then(answers => {
                                        var engineerObj = new engineer(answers.name, answers.id, answers.email, answers.github);
                                        fs.appendFile(path + fileName + extension, html.engineerHTML(engineerObj), function (error) {
                                            if (error) { throw error };
                                        })
                                        if (answers.continue === "yes") {
                                            createEmployee();
                                        }
                                        else {
                                            console.log(`Employees info appended`);
                                            fs.appendFile(path + fileName + extension, html.finalHTML(), function (error) {
                                                if (error) { throw error };
                                            })

                                        }
                                    })
                            }
                            //This block gets an Intern's info and adds it to the html file
                            else if (answers.role === "intern") {
                                inquirer
                                    .prompt([{
                                        name: "name",
                                        message: "Enter intern's name: ",
                                        default: "John Doe"
                                    },
                                    {
                                        name: "id",
                                        message: "Enter intern's ID: ",
                                        default: "12345"
                                    },
                                    {
                                        name: "email",
                                        message: "Enter intern's email: ",
                                        default: "name@company.com"
                                    },
                                    {
                                        name: "school",
                                        message: "Enter intern's school name: ",
                                        default: "school of life"
                                    },
                                    {
                                        type: "list",
                                        name: "continue",
                                        message: "Add another team member",
                                        choices: ["yes", "no"]
                                    }])
                                    .then(answers => {
                                        var internObj = new intern(answers.name, answers.id, answers.email, answers.school);
                                        fs.appendFile(path + fileName + extension, html.internHTML(internObj), function (error) {
                                            if (error) { throw error };
                                        })
                                        if (answers.continue === "yes") {
                                            createEmployee();
                                        }
                                        else {
                                            console.log(`Employees info appended`);
                                            fs.appendFile(path + fileName + extension, html.finalHTML(), function (error) {
                                                if (error) { throw error };
                                            })
                                        }
                                    })
                            }
                        })
                })
        })
}