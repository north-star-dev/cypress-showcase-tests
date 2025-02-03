import {Component, ComponentAssertions} from '../../interfaces';

export class SignUpForm extends Component<SignUpForm> {
    private readonly assertions: SignUpFormAssertions

    constructor(prefix: string) {
        super(`${prefix} form.SignUpForm-form`);
        this.assertions = new SignUpFormAssertions(this);
    }

    get expect(): SignUpFormAssertions {
        return this.assertions;
    }
}

class SignUpFormAssertions extends ComponentAssertions<SignUpForm> {
    constructor(form: SignUpForm) {
        super(form);
    }
}
