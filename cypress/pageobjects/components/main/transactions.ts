import {Component, ComponentAssertions} from '../../interfaces';

export default class Transactions extends Component<Transactions> {
    private readonly assertions: TransactionsAssertions

    private readonly transactionsListLocator: string;
    private readonly transactionsListItemLocator: string;

    constructor(prefix: string) {
        super(`${prefix} div.TransactionList-paper`);
        this.assertions = new TransactionsAssertions(this);
        this.transactionsListLocator = `${prefix} div[data-test="transaction-list"]`;
        this.transactionsListItemLocator = `${this.transactionsListLocator} li[data-test|="transaction-item"]`;
    }

    get expect(): TransactionsAssertions {
        return this.assertions;
    }

    get transactionItems() {
        return cy.get(this.transactionsListItemLocator);
    }
}

class TransactionsAssertions extends ComponentAssertions<Transactions> {
    constructor(transactions: Transactions) {
        super(transactions);
    }

    toHaveLengthGreaterThan(length: number) {
        this.component.transactionItems.should('have.length.greaterThan', length);
    }
}
