class AddEmployeePage {

    constructor() {
        this.nameInput = '#firstName';
        this.lastnameInput = '#lastName';
        this.idInput = '#employeeId';
        this.saveButton = '#btnSave';
    }

    createEmployee = (name, lastname) => {
        cy.get(this.nameInput).type(name);
        cy.get(this.lastnameInput).type(lastname);
        cy.get(this.idInput).then(($input) => {
            this.employeeId = $input.val();
        })
        cy.get(this.saveButton).click();
    }

    getEmployeeId = () => {
        return this.employeeId;
    }
}

export default new AddEmployeePage();