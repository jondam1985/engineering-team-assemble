//These funcitons build the different parts of the main html file

const manager = require("./manager");
const engineer = require("./engineer");
const intern = require("./intern");

//This function builds the initial portion of the html file
const initialHTML = (teamName) => {
    return `
<!DOCTYPE html>
   <html lang="en"> 
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <link rel="stylesheet" href=".././templates/style.css">
       <title>${teamName}</title>
   </head>
   <body>
   <header>
        <h1>Team: ${teamName}</h1>
    </header>
    <div class="team">`
}

//This function builds the Manager info div
const managerHTML = (manager) => {
    return `
    <div class="team-member">
        <div class="header">
            <h2>${manager.name}</h2>
            <div class="title">
                <img src="../templates/manager.svg" alt="" class="role-icon">
                <h2>${manager.getRole()}</h2>
            </div>
        </div>
        <div class="info">
            <h3>ID: ${manager.getId()}</h3>
            <hr>
            <h3>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h3>
            <hr>
            <h3>Office number: ${manager.officeNumber}</h3>
        </div>
    </div>`
}

//This function builds the Engineer info div
const engineerHTML = (engineer) => {
    return `
    <div class="team-member">
        <div class="header">
            <h2>${engineer.name}</h2>
            <div class="title">
                <img src="../templates/engineer.svg" alt="" class="role-icon">
                <h2>${engineer.getRole()}</h2>
            </div>
        </div>
        <div class="info">
            <h3>ID: ${engineer.getId()}</h3>
            <hr>
            <h3>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h3>
            <hr>
            <h3>Github: <a href="https:www.github.com/${engineer.github}">${engineer.github}</a></h3>
        </div>
    </div>`
}

//This function builds the Intern info div
const internHTML = (intern) => {
    return `
    <div class="team-member">
        <div class="header">
            <h2>${intern.name}</h2>
            <div class="title">
                <img src="../templates/intern.svg" alt="" class="role-icon">
                <h2>${intern.getRole()}</h2>
            </div>
        </div>
        <div class="info">
            <h3>ID: ${intern.getId()}</h3>
            <hr>
            <h3>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h3>
            <hr>
            <h3>School: ${intern.school}</h3>
        </div>
    </div>`
}

//This function writes the closing line of the html file
const finalHTML = () => {
    return `
    </div>
    </body>
</html>`
}

module.exports = {
    initialHTML: initialHTML,
    managerHTML: managerHTML,
    engineerHTML: engineerHTML,
    internHTML: internHTML,
    finalHTML: finalHTML
};
