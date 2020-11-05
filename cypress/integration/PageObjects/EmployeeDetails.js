class EmployeeDetailsPage {

    constructor() {
        this.idInput = '#personal_txtEmployeeId';
        this.nameInput = '#personal_txtEmpFirstName';
        this.lastnameInput = '#personal_txtEmpLastName';
        this.maleOption = '#personal_optGender_1';
        this.femaleOption = '#personal_optGender_2';
        this.nationalitySelect = '#personal_cmbNation';
        this.nicknameInput = '#personal_txtEmpNickName';
        this.maritalSelect = '#personal_cmbMarital';
        this.birthInput = '#personal_DOB';
        this.saveButton = '#btnSave';
        this.employeListButton = '#menu_pim_viewEmployeeList';
    }

    editEmployee = (gender, nationality, nickname, marital, birth) => {
        cy.get(this.saveButton).click();
        (gender == 'M') ? cy.get(this.maleOption).check() : cy.get(this.femaleOption).check();
        cy.get(this.nationalitySelect).select(nationality);
        cy.get(this.maritalSelect).select(marital);
        cy.get(this.nicknameInput).type(nickname);
        cy.get(this.birthInput).type(birth);
        cy.get(this.saveButton).click();
    }

    employeeListClick = () => {
        cy.get(this.employeListButton).click({ force: true });
    }

    validateEmployeeId = (id) => {
        cy.get(this.idInput).should('have.value', id);
    }

    validateEmployeeName = (name) => {
        cy.get(this.nameInput).should('have.value', name);
    }

    validateEmployeeLastname = (lastname) => {
        cy.get(this.lastnameInput).should('have.value', lastname);
    }
}

export default new EmployeeDetailsPage();