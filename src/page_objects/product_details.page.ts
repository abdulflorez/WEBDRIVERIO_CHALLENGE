import { BasePage } from './base.page';

class ProductDetailsPage extends BasePage {
    public get title() {
        return $('h1[data-test="product-name"]');
    }

    public get description() {
        return $('#description');
    }

    public get addToCartBtn() {
        return $('#btn-add-to-cart');
    }
}
export const productDetailsPage = new ProductDetailsPage();
