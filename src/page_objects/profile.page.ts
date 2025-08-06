import { BasePage } from './base.page';

class ProfilePage extends BasePage {
    public get firstNameInput(): ChainablePromiseElement {
        return $('#first_name.ng-valid');
    }

    public get lastNameInput(): ChainablePromiseElement {
        return $('#last_name.ng-valid');
    }

    public get streetInput(): ChainablePromiseElement {
        return $('#street.ng-valid');
    }

    public get postalCodeInput(): ChainablePromiseElement {
        return $('#postal_code.ng-valid');
    }

    public get cityInput(): ChainablePromiseElement {
        return $('#city.ng-valid');
    }

    public get stateInput(): ChainablePromiseElement {
        return $('#state.ng-valid');
    }

    public get countryInput(): ChainablePromiseElement {
        return $('#country.ng-valid');
    }

    public get phoneInput(): ChainablePromiseElement {
        return $('#phone.ng-valid');
    }

    public get emailInput(): ChainablePromiseElement {
        return $('#email.ng-valid');
    }

    public get currentPasswordInput(): ChainablePromiseElement {
        return $('#current-password');
    }

    public get newPasswordInput(): ChainablePromiseElement {
        return $('#new-password');
    }

    public get confirmPasswordInput(): ChainablePromiseElement {
        return $('#new-password-confirm');
    }

    public get passwordStrengthLvlLabel(): ChainablePromiseElement {
        return $('.password-strength .active');
    }

    public get updateProfileBtn(): ChainablePromiseElement {
        return $('[data-test="update-profile-submit"]');
    }

    public get successfulUpdateBaner(): ChainablePromiseElement {
        return $('.alert-success');
    }
}
export const profilePage = new ProfilePage();
