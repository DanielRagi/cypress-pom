import LoginPage from './PageObjects/Login';
import DashboardPage from './PageObjects/Dashboard';
import AddEmployeePage from './PageObjects/AddEmployee';
import EmployeeDetailsPage from './PageObjects/EmployeeDetails';
import EmployeeListPage from './PageObjects/EmployeeList';
import EmployeeDetails from './PageObjects/EmployeeDetails';

describe('Test cases', () => {

    var name, lastname, employeeId;
    before( () => {
        cy.clearCookies();
        cy.visit('https://opensource-demo.orangehrmlive.com');
    })

    after( () => { 
        //
    })

    beforeEach( () => {
        Cypress.Cookies.preserveOnce('PHPSESSID', 'Loggedin');
    })

    afterEach( () => {
        //
    })

    it('Login', () => {
        var username = "Admin";
        var password = "admin123";
        LoginPage.login(username, password);
        cy.get('#welcome').should('to.exist');
    })


    it('Add Employee', () => {
        DashboardPage.goToAddEmployee();
        name = Math.random().toString(36).substring(7);
        lastname = Math.random().toString(36).substring(7);
        AddEmployeePage.createEmployee(name, lastname);
    })

    it('Edit Employee', () => {
        var gender = 'M';
        var nationality = 'Colombian';
        var nick = Math.random().toString(36).substring(7);
        var marital = 'Single';
        var birth = '1997-11-16';
        EmployeeDetailsPage.editEmployee(gender, nationality, nick, marital, birth);
    })

    it('Search Employee', () => {
        employeeId = AddEmployeePage.getEmployeeId();
        EmployeeDetailsPage.employeeListClick();
        EmployeeListPage.searchEmployee(employeeId);
        EmployeeListPage.validateEmployeeId(employeeId);
        EmployeeListPage.validateEmployeeName(name);
        EmployeeListPage.validateEmployeeLastname(lastname);
        EmployeeListPage.goToDetails();
    })

    it('Check values', () => {
        EmployeeDetailsPage.validateEmployeeId(employeeId);
        EmployeeDetailsPage.validateEmployeeName(name);
        EmployeeDetailsPage.validateEmployeeLastname(lastname);
    })

})