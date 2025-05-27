import { profilePage } from '../page_objects/profile.page';
import { registrationPage } from '../page_objects/registration.page';
import { PasswordStrengthLvl } from '../types/types/passwordStrengthLvl.type';
import { chaiExpect } from '../utils/chai';
import { BaseOperations } from './base.operations';

class ProfileOperations extends BaseOperations {
    public async updateProfileData(inputs: {
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        street?: string;
        postalCode?: string;
        city?: string;
        state?: string;
        country?: string;
        password?: {
            current: string;
            newPassword: string;
            expectedLvl?: PasswordStrengthLvl;
        };
    }) {
        for (const [inputName, valueToUpdate] of Object.entries(inputs)) {
            if (!valueToUpdate) continue;
            if (inputName === 'password' && inputs.password) {
                await profilePage.currentPasswordInput.setValue(inputs.password.current);
                await profilePage.newPasswordInput.setValue(inputs.password.newPassword);
                await profilePage.confirmPasswordInput.setValue(inputs.password.newPassword);
                const passwordLvl = await registrationPage.passwordStrengthLvlLabel.getText();
                chaiExpect(passwordLvl).to.equal(inputs.password.expectedLvl ?? 'Excellent');
            } else {
                //@ts-ignore
                await profilePage[`${inputName}Input`].setValue(valueToUpdate);
            }
        }
        await profilePage.updateProfileBtn.click();
    }

    public async validateSuccessfullyUpdatedBanner(message: string) {
        await profilePage.successfulUpdateBaner.isDisplayed();
        const succefulMesage = await profilePage.successfulUpdateBaner.getText();
        chaiExpect(succefulMesage).contain(message);
    }
}

export const profileOperations = new ProfileOperations();
