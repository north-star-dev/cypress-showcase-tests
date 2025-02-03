import {Page, PageAssertions} from '../interfaces';
import {LoginForm} from '../components/login/login-form';
import {SignUpForm} from '../components/login/sign-up-form';

class LoginPage extends Page<LoginPage> {
    private readonly assertions: LoginPageAssertions
    private readonly loginFormComponent: LoginForm;
    private readonly signUpFormComponent: SignUpForm;
    private readonly loginErrorLocator: string;

    constructor() {
        super();
        this.assertions = new LoginPageAssertions(this);
        this.loginFormComponent = new LoginForm('main.MuiContainer-root');
        this.signUpFormComponent = new SignUpForm('main.MuiContainer-root');
        this.loginErrorLocator = 'div[data-test="signin-error"]';
    }

    get expect() {
        return this.assertions;
    }

    get loginForm() {
        return this.loginFormComponent;
    }

    get signUpForm() {
        return this.signUpFormComponent;
    }

    get loginError() {
        return cy.get(this.loginErrorLocator);
    }
}

class LoginPageAssertions extends PageAssertions<LoginPage> {
    constructor(page: LoginPage) {
        super(page);
    }

    toHaveLoginError(error: string) {
        this.page.loginError.should('be.visible');
        this.page.loginError.should('have.text', error);
    }
}

export default new LoginPage();
