import { BasePage } from './base.page';

class HomePage extends BasePage {
    public get categoryFilters() {
        return $$('#filters > fieldset label');
    }
}

export const homePage = new HomePage();
