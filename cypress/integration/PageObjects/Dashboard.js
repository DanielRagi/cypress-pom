class DashboardPage {

    constructor() {
        this.pimButton = '#menu_pim_viewPimModule';
        this.addButton = '#menu_pim_addEmployee';
        this.menuButton = '#menu_pim_viewPimModule';
    }

    goToAddEmployee = () => {
        cy.get(this.addButton).click({ force: true });
    }
}

export default new DashboardPage();