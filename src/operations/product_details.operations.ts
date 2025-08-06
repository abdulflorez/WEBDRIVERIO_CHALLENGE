import { productDetailsPage } from '../page_objects/product_details.page';
import { chaiExpect } from '../utils/chai';
import { BaseOperations } from './base.operations';

class ProductDetailsOperations extends BaseOperations {
    public async validateProductDetailsPage(productName: string): Promise<void> {
        await productDetailsPage.title.isClickable();
        const titleText = await productDetailsPage.title.getText();
        await productDetailsPage.description.isClickable();
        await productDetailsPage.addToCartBtn.isClickable();
        chaiExpect(titleText).contains(productName);
    }
}
export const productDetailsOperations = new ProductDetailsOperations();
