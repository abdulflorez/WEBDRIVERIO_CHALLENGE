import { BasePage } from './base.page';

class ProductDetailsPage extends BasePage {
    public get title(): ChainablePromiseElement {
        return $('h1[data-test="product-name"]');
    }

    public get description(): ChainablePromiseElement {
        return $('#description');
    }

    public get addToCartBtn(): ChainablePromiseElement {
        return $('#btn-add-to-cart');
    }
}
export const productDetailsPage = new ProductDetailsPage();
