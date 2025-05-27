import { BasePage } from './base.page';

class HomePage extends BasePage {
    public get searchSubtitle() {
        return $('[data-test="search-caption"]');
    }

    public get searchInput() {
        return $('#search-query');
    }

    public get searchBtn() {
        return $('[data-test="search-submit"]');
    }

    public get categoryFilters() {
        return $$('#filters > fieldset label');
    }

    public get productCardName() {
        return $$('[data-test="product-name"]');
    }
}

export const homePage = new HomePage();
