class EmployeeListPage {

    constructor() {
        this.employeeNameInput = '#empsearch_employee_name_empName';
        this.employeeIdInput = '#empsearch_id';
        this.searchButton = '#searchBtn';
        this.idResult = '.odd > :nth-child(2) > a';
        this.nameResult = '.odd > :nth-child(3) > a';
        this.lastnameResult = '.odd > :nth-child(4) > a';
    }

    searchEmployee = (id) => {
        cy.get(this.employeeIdInput).type(id);
        cy.get(this.searchButton).click();
    }

    validateEmployeeId = (id) => {
        cy.get(this.idResult).should(($result) => {
            expect($result.text()).to.equal(id);
          })
    }

    validateEmployeeName = (name) => {
        cy.get(this.nameResult).should(($result) => {
            expect($result.text()).to.equal(name);
          })
    }

    validateEmployeeLastname = (lastname) => {
        cy.get(this.lastnameResult).should(($result) => {
            expect($result.text()).to.equal(lastname);
          })
    }

    goToDetails = () => {
        cy.get(this.idResult).click();
    }
}

export default new EmployeeListPage();