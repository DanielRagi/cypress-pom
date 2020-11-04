import LoginPage from './PageObjects/Login';

describe('Test cases', () => {

    before( () => {
        cy.visit('https://opensource-demo.orangehrmlive.com');
    })

    after( () => {

    })

    beforeEach( () => {

    })

    afterEach( () => {

    })

    it('Login', () => {
        var username = "Admin";
        var password = "admin123";
        LoginPage.login(username, password);
    })




})