class DashboardPage {

    constructor() {
        this.addButton = '#menu_pim_addEmployee';
        this.menuButton = '#menu_pim_viewPimModule';
        this.welcomeLabel = '#welcome';
    }

    validateLogin = () => {
        cy.get(this.welcomeLabel).should('to.exist');
    }

    goToAddEmployee = () => {
        cy.get(this.addButton).click({ force: true });
    }
}

export default new DashboardPage();