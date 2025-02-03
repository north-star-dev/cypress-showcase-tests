import {Page, PageAssertions} from '../interfaces';
import SideNavigation from '../components/main/side-navigation';
import Header from '../components/main/header';
import Transactions from '../components/main/transactions';
import UserSettings from '../components/main/user-settings';

class MainPage extends Page<MainPage> {
    private readonly assertions: MainPageAssertions;

    private readonly sideNavComponent = SideNavigation
    private readonly headerNavComponent = Header

    private readonly transactionsComponent: Transactions;
    private readonly userSettingsComponent: UserSettings;

    constructor() {
        super();
        this.assertions = new MainPageAssertions(this);
        this.transactionsComponent = new Transactions('main[data-test="main"]');
        this.userSettingsComponent = new UserSettings('main[data-test="main"]');
    }

    get expect() {
        return this.assertions;
    }

    get sideMenu() {
        return this.sideNavComponent;
    }

    get headerMenu() {
        return this.headerNavComponent;
    }

    get transactions() {
        return this.transactionsComponent;
    }

    get userSettings() {
        return this.userSettingsComponent;
    }
}

export class MainPageAssertions extends PageAssertions<MainPage> {
    constructor(page: MainPage) {
        super(page);
    }
}

export default new MainPage();
