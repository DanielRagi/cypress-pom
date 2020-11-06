class AddEmployeePage {

    constructor() {
        this.nameInput = '#firstName';
        this.lastnameInput = '#lastName';
        this.idInput = '#employeeId';
        this.saveButton = '#btnSave';
    }

    setName = (name) => {
        cy.get(this.nameInput).type(name);
    }

    setLastname = (lastname) => {
        cy.get(this.lastnameInput).type(lastname);
    }

    saveId = () => {
        cy.get(this.idInput).then(($input) => {
            this.employeeId = $input.val();
        })
    }

    clickSave = () => {
        cy.get(this.saveButton).click();
    }

    createEmployee = (name, lastname) => {
       this.setName(name);
       this.setLastname(lastname);
       this.saveId();
       this.clickSave();
    }

    getEmployeeId = () => {
        return this.employeeId;
    }
}

export default new AddEmployeePage();