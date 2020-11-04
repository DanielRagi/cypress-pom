class LoginPage {

    constructor() {
        this.usernameInput = '#txtUsername';
        this.passwordInput = '#txtPassword';
        this.loginButton = '#btnLogin';
    }

    login = (username, password) => {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }
}

export default new LoginPage();