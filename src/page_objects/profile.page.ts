import { BasePage } from './base.page';

class ProfilePage extends BasePage {
    public get firstNameInput() {
        return $('#first_name.ng-valid');
    }

    public get lastNameInput() {
        return $('#last_name.ng-valid');
    }

    public get streetInput() {
        return $('#street.ng-valid');
    }

    public get postalCodeInput() {
        return $('#postal_code.ng-valid');
    }

    public get cityInput() {
        return $('#city.ng-valid');
    }

    public get stateInput() {
        return $('#state.ng-valid');
    }

    public get countryInput() {
        return $('#country.ng-valid');
    }

    public get phoneInput() {
        return $('#phone.ng-valid');
    }

    public get emailInput() {
        return $('#email.ng-valid');
    }

    public get currentPasswordInput() {
        return $('#current-password');
    }

    public get newPasswordInput() {
        return $('#new-password');
    }

    public get confirmPasswordInput() {
        return $('#new-password-confirm');
    }

    public get passwordStrengthLvlLabel() {
        return $('.password-strength .active');
    }

    public get updateProfileBtn() {
        return $('[data-test="update-profile-submit"]');
    }

    public get successfulUpdateBaner() {
        return $('.alert-success');
    }
}
export const profilePage = new ProfilePage();
