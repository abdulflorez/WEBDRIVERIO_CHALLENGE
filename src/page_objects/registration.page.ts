import { BasePage } from './base.page';

class RegistrationPage extends BasePage {
    public get firstNameInput(): ChainablePromiseElement {
        return $('#first_name');
    }

    public get lastNameInput(): ChainablePromiseElement {
        return $('#last_name');
    }

    public get dateOfBirthInput(): ChainablePromiseElement {
        return $('#dob');
    }

    public get streetInput(): ChainablePromiseElement {
        return $('#street');
    }

    public get postalCodeInput(): ChainablePromiseElement {
        return $('#postal_code');
    }

    public get cityInput(): ChainablePromiseElement {
        return $('#city');
    }

    public get stateInput(): ChainablePromiseElement {
        return $('#state');
    }

    public get countryInput(): ChainablePromiseElement {
        return $('#country');
    }

    public get phoneInput(): ChainablePromiseElement {
        return $('#phone');
    }

    public get emailInput(): ChainablePromiseElement {
        return $('#email');
    }

    public get passwordInput(): ChainablePromiseElement {
        return $('#password');
    }

    public get passwordStrengthLvlLabel(): ChainablePromiseElement {
        return $('.password-strength .active');
    }

    public get submitRegistrationBtn(): ChainablePromiseElement {
        return $('.btnSubmit');
    }
}
export const registrationPage = new RegistrationPage();
