import {Component, ComponentAssertions} from '../../interfaces';

export default class UserSettings extends Component<UserSettings> {
    private readonly assertions: UserSettingsAssertions

    private readonly userSettingsFormLocator: string;
    private readonly userFirstNameFieldLocator: string;
    private readonly userLastNameFieldLocator: string;
    private readonly userEmailFieldLocator: string;
    private readonly userPhoneNumberFieldLocator: string;
    private readonly submitButtonLocator: string;
    private readonly userFirstNameHelperTextLocator: string;
    private readonly userLastNameHelperTextLocator: string;
    private readonly userEmailHelperTextLocator: string;
    private readonly userPhoneNumberHelperTextLocator: string;

    constructor(prefix: string) {
        super(`${prefix} div.UserSettingsContainer-paper`);
        this.assertions = new UserSettingsAssertions(this);
        this.userSettingsFormLocator = `${this.prefix} form[data-test="user-settings-form"]`;
        this.userFirstNameFieldLocator = `${this.userSettingsFormLocator} input#user-settings-firstName-input`;
        this.userLastNameFieldLocator = `${this.userSettingsFormLocator} input#user-settings-lastName-input`;
        this.userEmailFieldLocator = `${this.userSettingsFormLocator} input#user-settings-email-input`;
        this.userPhoneNumberFieldLocator = `${this.userSettingsFormLocator} input#user-settings-phoneNumber-input`;
        this.submitButtonLocator = `${this.userSettingsFormLocator} button[data-test="user-settings-submit"]`;
        this.userFirstNameHelperTextLocator = `${this.userSettingsFormLocator} p#user-settings-firstName-input-helper-text`;
        this.userLastNameHelperTextLocator = `${this.userSettingsFormLocator} p#user-settings-lastName-input-helper-text`;
        this.userEmailHelperTextLocator = `${this.userSettingsFormLocator} p#user-settings-email-input-helper-text`;
        this.userPhoneNumberHelperTextLocator = `${this.userSettingsFormLocator} p#user-settings-phoneNumber-input-helper-text`;
    }

    get expect(): UserSettingsAssertions {
        return this.assertions;
    }

    get userFirstName() {
        return cy.get(this.userFirstNameFieldLocator);
    }

    get userLastName() {
        return cy.get(this.userLastNameFieldLocator);
    }

    get userEmail() {
        return cy.get(this.userEmailFieldLocator);
    }

    get userPhoneNumber() {
        return cy.get(this.userPhoneNumberFieldLocator);
    }

    get submitButton() {
        return cy.get(this.submitButtonLocator);
    }

    get userFirstNameHelperText() {
        return cy.get(this.userFirstNameHelperTextLocator);
    }

    get userLastNameHelperText() {
        return cy.get(this.userLastNameHelperTextLocator);
    }

    get userEmailHelperText() {
        return cy.get(this.userEmailHelperTextLocator);
    }

    get userPhoneNumberHelperText() {
        return cy.get(this.userPhoneNumberHelperTextLocator);
    }

    fillUserFirstName(firstName: string) {
        const chainable = this.userFirstName.clear();
        if (firstName) {
            chainable.type(firstName);
        }
    }

    fillUserLastName(lastName: string) {
        const chainable = this.userLastName.clear();
        if (lastName) {
            chainable.type(lastName);
        }
    }

    fillUserEmail(email: string) {
        const chainable = this.userEmail.clear();
        if (email) {
            chainable.type(email);
        }
    }

    fillUserPhoneNumber(phoneNumber: string) {
        const chainable = this.userPhoneNumber.clear();
        if (phoneNumber) {
            chainable.type(phoneNumber);
        }
    }
}

class UserSettingsAssertions extends ComponentAssertions<UserSettings> {
    constructor(userSettings: UserSettings) {
        super(userSettings);
    }

    toHaveUserFirstNameField() {
        this.component.userFirstName.should('be.visible').should('be.enabled');
    }

    toHaveUserLastNameField() {
        this.component.userLastName.should('be.visible').should('be.enabled');
    }

    toHaveUserEmailField() {
        this.component.userEmail.should('be.visible').should('be.enabled');
    }

    toHaveUserPhoneNumberField() {
        this.component.userPhoneNumber.should('be.visible').should('be.enabled');
    }

    toHaveSubmitButton() {
        this.component.submitButton.should('be.visible').should('be.enabled');
    }

    toHaveSubmitButtonDisabled() {
        this.component.submitButton.should('be.visible').should('be.disabled');
    }

    toHaveUserFirstName(firstName: string) {
        this.component.userFirstName.should('have.value', firstName);
    }

    toHaveUserLastName(lastName: string) {
        this.component.userLastName.should('have.value', lastName);
    }

    toHaveUserEmail(email: string) {
        this.component.userEmail.should('have.value', email);
    }

    toHaveUserPhoneNumber(phoneNumber: string) {
        this.component.userPhoneNumber.should('have.value', phoneNumber);
    }

    toHaveAllElements() {
        this.toHaveUserFirstNameField();
        this.toHaveUserLastNameField();
        this.toHaveUserEmailField();
        this.toHaveUserPhoneNumberField();
        this.toHaveSubmitButton();
    }

    toHaveFirstNameError(error: string) {
        this.component.userFirstNameHelperText.should('be.visible').should('have.text', error);
    }

    toHaveLastNameError(error: string) {
        this.component.userLastNameHelperText.should('be.visible').should('have.text', error);
    }

    toHaveEmailError(error: string) {
        this.component.userEmailHelperText.should('be.visible').should('have.text', error);
    }

    toHavePhoneNumberError(error: string) {
        this.component.userPhoneNumberHelperText.should('be.visible').should('have.text', error);
    }
}
