import { ENDPOINTS } from '../env_config/endpoint';
import { envConfig } from '../env_config/env.config';
import { dashboardPage } from '../page_objects/dashboard.page';
import { loginPage } from '../page_objects/login.page';
import { chaiExpect } from '../utils/chai';
import { BaseOperations } from './base.operations';

class LoginOperations extends BaseOperations {
    public async login(access: { email: string; password: string }): Promise<void> {
        await loginPage.emailInput.setValue(access.email);
        await loginPage.passwordInput.setValue(access.password);
        await loginPage.sibmitLoginBtn.click();
        await loginPage.waitForPageLoad(`${envConfig.baseUrl}${ENDPOINTS.dashboardPage}`);
        await dashboardPage.favoriteLink.waitForDisplayed();
        chaiExpect(await dashboardPage.favoriteLink.isDisplayed()).equals(true);
    }

    public async validateLoginPageVisible(): Promise<void> {
        await loginPage.waitForPageLoad(`${envConfig.baseUrl}${ENDPOINTS.loginPage}`);
        await loginPage.emailInput.waitForDisplayed();
        chaiExpect(await loginPage.emailInput.isDisplayed()).equals(true);
    }
}

export const loginOperations = new LoginOperations();
