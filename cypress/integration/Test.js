import LoginPage from './PageObjects/Login';
import DashboardPage from './PageObjects/Dashboard';
import AddEmployeePage from './PageObjects/AddEmployee';
import EmployeeDetailsPage from './PageObjects/EmployeeDetails';

describe('Test cases', () => {

    before( () => {
        Cypress.Cookies.debug(true);
        cy.clearCookies();
        cy.visit('https://opensource-demo.orangehrmlive.com');

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
        cy.get('#welcome').should('to.exist');
    })


    it('Add Employee', () => {
        DashboardPage.goToAddEmployee();
        var name = Math.random().toString(36).substring(7);
        var lastname = Math.random().toString(36).substring(7);
        AddEmployeePage.createEmployee(name, lastname);
        EmployeeDetailsPage.editEmployee('F', 'Colombian', 'jakalaka', 'Single', '1997-11-16');
    })

})