import { BasePage } from './base.page';

class RegistrationPage extends BasePage {
    public get firstNameInput() {
        return $('#first_name');
    }

    public get lastNameInput() {
        return $('#last_name');
    }

    public get dateOfBirthInput() {
        return $('#dob');
    }

    public get streetInput() {
        return $('#street');
    }

    public get postalCodeInput() {
        return $('#postal_code');
    }

    public get cityInput() {
        return $('#city');
    }

    public get stateInput() {
        return $('#state');
    }

    public get countryInput() {
        return $('#country');
    }

    public get phoneInput() {
        return $('#phone');
    }

    public get emailInput() {
        return $('#email');
    }

    public get passwordInput() {
        return $('#password');
    }

    public get passwordStrengthLvlLabel() {
        return $('.password-strength .active');
    }

    public get submitRegistrationBtn() {
        return $('.btnSubmit');
    }
}
export const registrationPage = new RegistrationPage();
