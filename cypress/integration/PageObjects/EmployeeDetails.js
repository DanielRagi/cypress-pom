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

    clickButton = () => {
        cy.get(this.saveButton).click();
    }

    setGender = (gender) => {
        (gender == 'M') ? cy.get(this.maleOption).check() : cy.get(this.femaleOption).check();
    }

    setNationality = (nationality) => {
        cy.get(this.nationalitySelect).select(nationality);
    }

    setMaritalStatus = (marital) => {
        cy.get(this.maritalSelect).select(marital);
    }

    setNickname = (nickname) => {
        cy.get(this.nicknameInput).type(nickname);
    }

    setBirth = (birth) => {
        cy.get(this.birthInput).type(birth);
    }

    editEmployee = (gender, nationality, nickname, marital, birth) => {
        this.clickButton();
        this.setGender(gender);
        this.setNationality(nationality);
        this.setMaritalStatus(marital);
        this.setNickname(nickname);
        this.setBirth(birth);
        this.clickButton();
    }

    employeeListClick = () => {
        cy.get(this.employeListButton).click({ force: true });
    }

    assertEmployeeId = (id) => {
        cy.get(this.idInput).should('have.value', id);
    }

    assertEmployeeName = (name) => {
        cy.get(this.nameInput).should('have.value', name);
    }

    assertEmployeeLastname = (lastname) => {
        cy.get(this.lastnameInput).should('have.value', lastname);
    }

    assertEmployeeMarital = (marital) => {
        cy.get(this.maritalSelect).should('have.value', marital);
    }

    assertEmployeeNationality = (nationality) => {
        cy.get(this.nationalitySelect).should('have.value', nationality);
    }

    assertEmployeeBirth = (birth) => {
        cy.get(this.birthInput).should('have.value', birth);
    }

    assertEmployeeNick = (nick) => {
        cy.get(this.nicknameInput).should('have.value', nick);
    }

    assertEmployeeGender = (gender) => {
        (gender == 'M') ? cy.get(this.maleOption).should('be.checked') : cy.get(this.femaleOption).should('be.checked');
    }
}

export default new EmployeeDetailsPage();