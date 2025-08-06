import { ENDPOINTS } from '../env_config/endpoint';
import { headerComp } from '../page_objects/components/header.comp';
import { homePage } from '../page_objects/home.page';
import { loginPage } from '../page_objects/login.page';
import { profilePage } from '../page_objects/profile.page';
import { registrationPage } from '../page_objects/registration.page';
import { chaiExpect } from '../utils/chai';

export class BaseOperations {
    public async navigateTo(url: string): Promise<void> {
        await browser.url(url);
        await homePage.waitForPageLoad(url);
    }

    public async goToSignInPage(): Promise<void> {
        await headerComp.signInLink.click();
        await loginPage.emailInput.waitForClickable();
    }

    public async goToSignUpPage(): Promise<void> {
        await headerComp.signInLink.click();
        await loginPage.emailInput.waitForClickable();
        await loginPage.registerAccountLink.click();
        await registrationPage.firstNameInput.waitForClickable();
    }

    public async goToProfilePage(): Promise<void> {
        await headerComp.userAccountDropdown.click();
        await headerComp.userAccountOptions[2].click();
        await profilePage.waitForPageLoad(ENDPOINTS.profilePage);
        await profilePage.firstNameInput.waitForClickable();
    }

    public async validateLoggedUser(expectedFullname: string, expectedMenuOptions: string[]): Promise<void> {
        const userFullname = await headerComp.userAccountDropdown.getText();

        await headerComp.userAccountDropdown.click();
        chaiExpect(userFullname).contain(expectedFullname);
        for (const [i, expectedOption] of expectedMenuOptions.entries()) {
            const menuOptionText = await headerComp.userAccountOptions[i].getText();
            chaiExpect(menuOptionText).contain(expectedOption);
        }
    }
}
