//This is the engineer class which extends the employee class

const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        this.role = "Engineer";
        return this.role;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;