import LoginPage from '../../pageobjects/pages/login-page';
import {User} from '../../data/interfaces';

export default class Login {
    private static navigateIfNeeded() {
        cy.url().then(url => {
            if (!url.startsWith(process.env.BASE_URL)) {
                cy.visit('/');
            }
        });
    }

    static login(user: User) {
        // Login with random user
        Login.navigateIfNeeded();
        LoginPage.loginForm.login(user);
    }
}
