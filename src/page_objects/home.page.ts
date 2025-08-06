import { BasePage } from './base.page';

class HomePage extends BasePage {
    public get searchSubtitle(): ChainablePromiseElement {
        return $('[data-test="search-caption"]');
    }

    public get searchInput(): ChainablePromiseElement {
        return $('#search-query');
    }

    public get searchBtn(): ChainablePromiseElement {
        return $('[data-test="search-submit"]');
    }

    public get categoryFilters(): ChainablePromiseArray {
        return $$('#filters > fieldset label');
    }

    public get productCardName(): ChainablePromiseArray {
        return $$('[data-test="product-name"]');
    }
}

export const homePage = new HomePage();
