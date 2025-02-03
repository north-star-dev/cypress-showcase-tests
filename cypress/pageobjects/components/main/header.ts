import {Component, ComponentAssertions} from '../../interfaces';

class Header extends Component<Header> {
    private readonly assertions: HeaderAssertions

    private readonly sideNavToggleLocator: string;
    private readonly newTransactionLinkLocator: string;

    constructor() {
        super('header');
        this.assertions = new HeaderAssertions(this);
        this.sideNavToggleLocator = `${this.prefix} button[data-test="sidenav-toggle"]`;
        this.newTransactionLinkLocator = `${this.prefix} a[data-test="nav-top-new-transaction"]`;
    }

    get expect(): HeaderAssertions {
        return this.assertions;
    }

    get sideMenuToggle() {
        return cy.get(this.sideNavToggleLocator);
    }

    get newTransactionLink() {
        return cy.get(this.newTransactionLinkLocator);
    }

    clickSideMenuToggle() {
        this.sideMenuToggle.click();
    }
}

class HeaderAssertions extends ComponentAssertions<Header> {
    constructor(nav: Header) {
        super(nav);
    }
}

export default new Header();
