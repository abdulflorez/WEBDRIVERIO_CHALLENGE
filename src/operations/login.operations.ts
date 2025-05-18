import { envConfig } from '../env_config/env.config';
import { dashboardPage } from '../page_objects/dashboard.page';
import { loginPage } from '../page_objects/login.page';
import { chaiExpect } from '../utils/chai';
import { BaseOperations } from './base.operations';

class LoginOperations extends BaseOperations {
    public async login(access: { email: string; password: string }) {
        await loginPage.emailInput.setValue(access.email);
        await loginPage.passwordInput.setValue(access.password);
        await loginPage.sibmitLoginBtn.click();
        await loginPage.waitForPageLoad(`${envConfig.baseUrl}/account`);
        chaiExpect(await dashboardPage.favoriteLink.isDisplayed()).true;
    }

    public async validateLoginPageVisible() {
        await loginPage.waitForPageLoad(`${envConfig.baseUrl}/auth/login`);
        chaiExpect(await loginPage.emailInput.isDisplayed()).true;
    }
}

export const loginOperations = new LoginOperations();
