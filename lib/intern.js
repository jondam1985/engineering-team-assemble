//This is the intern class which extends the employee class

const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getRole() {
        this.role = "Intern";
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;