import { BasePage } from './base.page';

class LoginPage extends BasePage {
    public get emailInput(): ChainablePromiseElement {
        return $('#email');
    }

    public get passwordInput(): ChainablePromiseElement {
        return $('#password');
    }

    public get sibmitLoginBtn(): ChainablePromiseElement {
        return $('[data-test="login-submit"]');
    }

    public get registerAccountLink(): ChainablePromiseElement {
        return $('[data-test="register-link"]');
    }
}
export const loginPage = new LoginPage();
