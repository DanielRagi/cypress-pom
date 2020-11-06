class LoginPage {

    constructor() {
        this.usernameInput = '#txtUsername';
        this.passwordInput = '#txtPassword';
        this.loginButton = '#btnLogin';
    }

    setUserName = (username) => {
        cy.get(this.usernameInput).type(username);
    }

    setPassword = (password) => {
        cy.get(this.passwordInput).type(password);
    }

    clickLogin = () => {
        cy.get(this.loginButton).click();
    }

    login = (username, password) => {
        this.setUserName(username);
        this.setPassword(password);
        this.clickLogin();
    }
}

export default new LoginPage();