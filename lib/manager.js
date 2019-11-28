//This is the manager class which extends the employee class

const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        this.role = "Manager";
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;