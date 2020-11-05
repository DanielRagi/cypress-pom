import LoginPage from './PageObjects/Login';
import DashboardPage from './PageObjects/Dashboard';

describe('Test cases', () => {

    before( () => {
        Cypress.Cookies.debug(true);
        cy.clearCookies();
        cy.visit('https://opensource-demo.orangehrmlive.com');

        //Cypress.Cookies.preserveOnce('PHPSESSID', 'Loggedin');
    })

    after( () => {

    })

    beforeEach( () => {
        Cypress.Cookies.preserveOnce('PHPSESSID', 'Loggedin');
    })

    afterEach( () => {

    })

    it('Login', () => {
        var username = "Admin";
        var password = "admin123";
        LoginPage.login(username, password);
        cy.get('#welcome').contains('Welcome');
        cy.get('#welcome').should('have.text', 'Welcome Paul');
    })


    it('Add Employee', () => {
        DashboardPage.goToAddEmployee();
    })




})