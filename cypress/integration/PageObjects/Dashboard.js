class DashboardPage {

    constructor() {
        this.pimButton = '#menu_pim_viewPimModule';
        this.pimButton = '#menu_pim_addEmployee';
    }

    login = (username, password) => {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }
}

export default new DashboardPage();