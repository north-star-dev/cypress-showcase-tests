import LoginPage from '../pageobjects/pages/login-page';
import {USERS} from '../data/users';
import MainPage from '../pageobjects/pages/main-page';

describe('User Login tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Verify Login Page details at open', () => {
        LoginPage.expect.toHaveTitle('Cypress Real World App');
        LoginPage.expect.toHaveURL(/\/signin$/);
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toHaveAllNoErrors();
        LoginPage.loginForm.expect.toHaveLoginButton();
    });

    it('Verify Login Page details after credentials enter', () => {
        LoginPage.loginForm.fillCredentials(USERS[0]);
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toHaveAllNoErrors();
        LoginPage.loginForm.expect.toHaveLoginButton();
    });

    it('Verify Login Page details after just username enter', () => {
        LoginPage.loginForm.fillUsername(USERS[0].username);
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toHaveAllNoErrors();
        LoginPage.loginForm.expect.toNotHaveLoginButton();
    });

    it('Verify Login Page empty username error message', () => {
        LoginPage.loginForm.focusUsername();
        LoginPage.loginForm.focusPassword();
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toHaveUsernameError('Username is required');
        LoginPage.loginForm.expect.toNotHavePasswordError();
        LoginPage.loginForm.expect.toNotHaveLoginButton();
    });

    it('Verify Login Page short password error message', () => {
        LoginPage.loginForm.fillUsername(USERS[0].username);
        LoginPage.loginForm.fillPassword('123');
        LoginPage.loginForm.focusUsername();
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toNotHaveUsernameError()
        LoginPage.loginForm.expect.toHavePasswordError('Password must contain at least 4 characters');
        LoginPage.loginForm.expect.toNotHaveLoginButton();
    });

    it('Verify Login', () => {
        LoginPage.loginForm.login(USERS[0]);
        MainPage.transactions.expect.toHaveLengthGreaterThan(0);
    });

    it('Verify Login with invalid password', () => {
        LoginPage.loginForm.fillUsername(USERS[0].username);
        LoginPage.loginForm.fillPassword('12345');
        LoginPage.loginForm.clickLoginButton();
        LoginPage.expect.toHaveLoginError('Username or password is invalid');
    });
});
