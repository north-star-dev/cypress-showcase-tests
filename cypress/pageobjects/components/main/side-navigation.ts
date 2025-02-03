import {CloseableComponent, ComponentAssertions} from '../../interfaces';
import Header from './header';

class SideNavigation extends CloseableComponent<SideNavigation> {
    private readonly assertions: SideNavAssertions

    private readonly balanceLocator: string;
    private readonly homeLinkLocator: string;
    private readonly userSettingsLinkLocator: string;
    private readonly bankAccountsLinkLocator: string;
    private readonly notificationLinkLocator: string;
    private readonly logOutLinkLocator: string;

    constructor() {
        super('div[data-test="sidenav"]');
        this.assertions = new SideNavAssertions(this);
        this.balanceLocator = `${this.prefix} h6[data-test="sidenav-user-balance"]`;
        this.homeLinkLocator = `${this.prefix} a[data-test="sidenav-home"]`;
        this.userSettingsLinkLocator = `${this.prefix} a[data-test="sidenav-user-settings"]`;
        this.bankAccountsLinkLocator = `${this.prefix} a[data-test="sidenav-bankaccounts"]`;
        this.notificationLinkLocator = `${this.prefix} a[data-test="sidenav-notifications"]`;
        this.logOutLinkLocator = `${this.prefix} div[data-test="sidenav-signout"]`;
    }

    get expect(): SideNavAssertions {
        return this.assertions;
    }

    get balance() {
        return cy.get(this.balanceLocator);
    }

    get homeLink() {
        return cy.get(this.homeLinkLocator);
    }

    get userSettingsLink() {
        return cy.get(this.userSettingsLinkLocator);
    }

    get bankAccountsLink() {
        return cy.get(this.bankAccountsLinkLocator);
    }

    get notificationLink() {
        return cy.get(this.notificationLinkLocator);
    }

    get logOutLink() {
        return cy.get(this.logOutLinkLocator);
    }

    close() {
        Header.clickSideMenuToggle();
    }

    openUserSettings() {
        this.userSettingsLink.click();
    }
}

class SideNavAssertions extends ComponentAssertions<SideNavigation> {
    constructor(nav: SideNavigation) {
        super(nav);
    }
}

export default new SideNavigation();
