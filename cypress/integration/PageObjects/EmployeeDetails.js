class EmployeeDetailsPage {

    constructor() {
        this.idInput = '#personal_txtEmployeeId';
        this.maleOption = '#personal_optGender_1';
        this.femaleOption = '#personal_optGender_2';
        this.nationalitySelect = '#personal_cmbNation';
        this.nicknameInput = '#personal_txtEmpNickName';
        this.maritalSelect = '#personal_cmbMarital';
        this.birthInput = '#personal_DOB';
        this.saveButton = '#btnSave';
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
}

export default new EmployeeDetailsPage();