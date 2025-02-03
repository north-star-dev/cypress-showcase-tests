import {Component, ComponentAssertions} from '../../interfaces';
import {User} from '../../../data/interfaces';

export class LoginForm extends Component<LoginForm> {
    private readonly assertions: LoginFormAssertions

    private readonly usernameFieldLocator: string;
    private readonly passwordFieldLocator: string;
    private readonly rememberMeCheckboxLocator: string;
    private readonly loginButtonLocator: string;
    private readonly signUpLinkLocator: string;
    private readonly usernameHelperTextLocator: string;
    private readonly passwordHelperTextLocator: string;

    constructor(prefix: string) {
        super(`${prefix} form.SignInForm-form`);
        this.assertions = new LoginFormAssertions(this);
        this.usernameFieldLocator = `${this.prefix} input[name="username"][type="text"]`;
        this.passwordFieldLocator = `${this.prefix} input[name="password"][type="password"]`;
        this.rememberMeCheckboxLocator = `${this.prefix} input[name="remember"][type="checkbox"] + svg`;
        this.loginButtonLocator = `${this.prefix} button[type="submit"][data-test="signin-submit"]`;
        this.signUpLinkLocator = `${this.prefix} a[data-test="signup"]`;
        this.usernameHelperTextLocator = `${this.prefix} p#username-helper-text`;
        this.passwordHelperTextLocator = `${this.prefix} p#password-helper-text`;
    }

    get expect(): LoginFormAssertions {
        return this.assertions;
    }

    get username() {
        return cy.get(this.usernameFieldLocator);
    }

    get password() {
        return cy.get(this.passwordFieldLocator);
    }

    get rememberMe() {
        return cy.get(this.rememberMeCheckboxLocator);
    }

    get signUpLink() {
        return cy.get(this.signUpLinkLocator);
    }

    get loginButton() {
        return cy.get(this.loginButtonLocator);
    }

    get usernameHelperText() {
        return cy.get(this.usernameHelperTextLocator);
    }

    get passwordHelperText() {
        return cy.get(this.passwordHelperTextLocator);
    }

    fillUsername(username: string) {
        this.username.type(username);
    }

    focusUsername() {
        this.username.focus();
    }

    focusPassword() {
        this.password.focus();
    }

    fillPassword(password: string) {
        this.password.type(password);
    }

    fillCredentials(user: User) {
        this.fillUsername(user.username);
        this.fillPassword(user.password);
    }

    login(user: User) {
        this.fillCredentials(user);
        this.loginButton.click();
    }

    clickLoginButton() {
        this.loginButton.click();
    }
}

class LoginFormAssertions extends ComponentAssertions<LoginForm> {
    constructor(form: LoginForm) {
        super(form);
    }

    toHaveUsernameInput() {
        this.component.username.should('be.visible');
    }

    toHavePasswordInput() {
        this.component.password.should('be.visible');
    }

    toHaveRememberMeInput() {
        this.component.rememberMe.should('be.visible');
    }

    toHaveSignUpLink() {
        this.component.signUpLink.should('be.visible');
    }

    toNotHaveSignUpLink() {
        this.component.signUpLink.should('not.be.visible');
    }

    toHaveLoginButton() {
        this.component.loginButton.should('be.enabled');
    }

    toNotHaveLoginButton() {
        this.component.loginButton.should('not.be.enabled');
    }

    toNotHaveUsernameError() {
        this.component.usernameHelperText.should('not.exist');
    }

    toHaveUsernameError(error: string) {
        this.component.usernameHelperText.should('be.visible');
        this.component.usernameHelperText.should('have.text', error);
    }

    toNotHavePasswordError() {
        this.component.passwordHelperText.should('not.exist');
    }

    toHavePasswordError(error: string) {
        this.component.passwordHelperText.should('be.visible');
        this.component.passwordHelperText.should('have.text', error);
    }

    toHaveAllElements() {
        this.toHaveUsernameInput();
        this.toHavePasswordInput();
        this.toHaveRememberMeInput();
        this.toHaveSignUpLink();
    }

    toHaveAllNoErrors() {
        this.toNotHaveUsernameError();
        this.toNotHavePasswordError();
    }
}
