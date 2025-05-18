import { BasePage } from '../base.page';

class HeaderComp extends BasePage {
    public get signInLink() {
        return $('[data-test="nav-sign-in"]');
    }

    public get userAccountDropdown() {
        return $('#menu');
    }

    public get userAccountOptions() {
        return $$('.dropdown-menu.show a');
    }
}
export const headerComp = new HeaderComp();
