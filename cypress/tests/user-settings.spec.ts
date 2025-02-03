import Login from '../services/ui/login';
import {USERS} from '../data/users';
import MainPage from '../pageobjects/pages/main-page';

describe('User Settings tests', () => {
    beforeEach(() => {
        Login.login(USERS[1]);
    });

    it('Verify User Settings Page details at open', () => {
        MainPage.sideMenu.openUserSettings();
        MainPage.userSettings.expect.toHaveAllElements();
        MainPage.userSettings.expect.toHaveUserFirstName(USERS[1].firstName);
        MainPage.userSettings.expect.toHaveUserLastName(USERS[1].lastName);
        MainPage.userSettings.expect.toHaveUserEmail(USERS[1].email);
        MainPage.userSettings.expect.toHaveUserPhoneNumber(USERS[1].phoneNumber);
    });

    it('Verify User Settings Page empty First Name error', () => {
        MainPage.sideMenu.openUserSettings();
        MainPage.userSettings.fillUserFirstName('');
        MainPage.userSettings.expect.toHaveFirstNameError('Enter a first name');
        MainPage.userSettings.expect.toHaveSubmitButtonDisabled();
    });

    it('Verify User Settings Page empty Last Name error', () => {
        MainPage.sideMenu.openUserSettings();
        MainPage.userSettings.fillUserLastName('');
        MainPage.userSettings.expect.toHaveLastNameError('Enter a last name');
        MainPage.userSettings.expect.toHaveSubmitButtonDisabled();
    });

    it('Verify User Settings Page empty Email error', () => {
        MainPage.sideMenu.openUserSettings();
        MainPage.userSettings.fillUserEmail('');
        MainPage.userSettings.expect.toHaveEmailError('Enter an email address');
        MainPage.userSettings.expect.toHaveSubmitButtonDisabled();
    });

    it('Verify User Settings Page empty Phone Number error', () => {
        MainPage.sideMenu.openUserSettings();
        MainPage.userSettings.fillUserPhoneNumber('')
        MainPage.userSettings.expect.toHavePhoneNumberError('Enter a phone number');
        MainPage.userSettings.expect.toHaveSubmitButtonDisabled();
    });
});
