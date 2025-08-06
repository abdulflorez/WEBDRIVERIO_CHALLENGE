import { registrationPage } from '../page_objects/registration.page';
import { RegistrationData } from '../types/interfaces/registration_data.interface';
import { chaiExpect } from '../utils/chai';
import { BaseOperations } from './base.operations';

class RegistrationOperations extends BaseOperations {
    public async fillRegistrationForm(data: RegistrationData): Promise<void> {
        await registrationPage.firstNameInput.setValue(data.firstName);
        await registrationPage.lastNameInput.setValue(data.lastName);
        await registrationPage.dateOfBirthInput.setValue(data.dob);
        await registrationPage.streetInput.setValue(data.street);
        await registrationPage.postalCodeInput.setValue(data.postcode);
        await registrationPage.cityInput.setValue(data.city);
        await registrationPage.stateInput.setValue(data.state);
        await registrationPage.countryInput.selectByVisibleText(data.country);
        await registrationPage.phoneInput.setValue(data.phone);
        await registrationPage.emailInput.setValue(data.email);
        await registrationPage.passwordInput.setValue(data.password);
        const passwordLvl = await registrationPage.passwordStrengthLvlLabel.getText();
        chaiExpect(passwordLvl).to.equal('Excellent');
        await registrationPage.submitRegistrationBtn.click();
    }
}
export const registrationOperations = new RegistrationOperations();
