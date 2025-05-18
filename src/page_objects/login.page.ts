import { BasePage } from './base.page';

class LoginPage extends BasePage {
    public get emailInput() {
        return $('#email');
    }

    public get passwordInput() {
        return $('#password');
    }

    public get sibmitLoginBtn() {
        return $('[data-test="login-submit"]');
    }

    public get registerAccountLink() {
        return $('[data-test="register-link"]');
    }
}
export const loginPage = new LoginPage();
