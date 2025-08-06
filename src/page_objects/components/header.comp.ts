import { BasePage } from '../base.page';

class HeaderComp extends BasePage {
    public get signInLink(): ChainablePromiseElement {
        return $('[data-test="nav-sign-in"]');
    }

    public get userAccountDropdown(): ChainablePromiseElement {
        return $('#menu');
    }

    public get userAccountOptions(): ChainablePromiseArray {
        return $$('.dropdown-menu.show a');
    }
}
export const headerComp = new HeaderComp();
