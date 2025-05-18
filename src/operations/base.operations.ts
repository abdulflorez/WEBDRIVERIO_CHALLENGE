import { headerComp } from '../page_objects/components/header.comp';
import { homePage } from '../page_objects/home.page';
import { loginPage } from '../page_objects/login.page';
import { registrationPage } from '../page_objects/registration.page';
import { chaiExpect } from '../utils/chai';

export class BaseOperations {
    public async navigateTo(url: string) {
        await browser.url(url);
        await homePage.waitForPageLoad(url);
    }

    public async goToSignInPage() {
        await headerComp.signInLink.click();
        await loginPage.emailInput.waitForClickable();
    }

    public async goToSignUpPage() {
        await headerComp.signInLink.click();
        await loginPage.emailInput.waitForClickable();
        await loginPage.registerAccountLink.click();
        await registrationPage.firstNameInput.waitForClickable();
    }

    public async validateLoggedUser(expectedFullname: string, expectedMenuOptions: string[]) {
        const userFullname = await headerComp.userAccountDropdown.getText();

        await headerComp.userAccountDropdown.click();
        chaiExpect(userFullname).contain(expectedFullname);
        for (const [i, expectedOption] of expectedMenuOptions.entries()) {
            const menuOptionText = await headerComp.userAccountOptions[i].getText();
            chaiExpect(menuOptionText).contain(expectedOption);
        }
    }
}
