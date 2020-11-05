class DashboardPage {

    constructor() {
        this.pimButton = '#menu_pim_viewPimModule';
        this.addButton = '#menu_pim_addEmployee';
        this.menuButton = '#menu_pim_viewPimModule';
    }

    login = (username, password) => {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }

    goToAddEmployee = () => {
        cy.get(this.addButton).click({ force: true });
    }
}

export default new DashboardPage();