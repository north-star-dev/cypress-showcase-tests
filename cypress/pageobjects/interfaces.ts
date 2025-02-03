export abstract class Component<T extends Component<T>> {
    private readonly componentPrefix: string;

    protected constructor(prefix: string) {
        this.componentPrefix = prefix;
    }

    get prefix() {
        return this.componentPrefix;
    }

    abstract get expect(): ComponentAssertions<T>;
}

export abstract class ComponentAssertions<T extends Component<T>> {
    protected constructor(protected readonly component: T) {
    }
}

export abstract class CloseableComponent<T extends CloseableComponent<T>> extends Component<T> {
    protected constructor(prefix: string) {
        super(prefix);
    }

    abstract close(): void;
}

export abstract class Page<T extends Page<T>> extends Component<T> {
    protected constructor() {
        super('');
    }

    get title() {
        return cy.title().should('not.be.empty');
    }

    get url() {
        return cy.url();
    }

    abstract get expect(): PageAssertions<T>;
}

export abstract class PageAssertions<T extends Page<T>> extends ComponentAssertions<T> {
    protected constructor(protected readonly page: T) {
        super(page);
    }

    toHaveTitle(title: string) {
        cy.title().should('eq', title);
    }

    toHaveURL(url: RegExp) {
        cy.url().should('match', url);
    }
}
