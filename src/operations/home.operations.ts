import { envConfig } from '../env_config/env.config';
import { homePage } from '../page_objects/home.page';
import { chaiExpect } from '../utils/chai';
import { BaseOperations } from './base.operations';

class HomeOperations extends BaseOperations {
    public async visit() {
        await this.navigateTo(envConfig.baseUrl);
        await homePage.categoryFilters[0].waitForClickable();
    }

    public async searchProductByWord(word: string) {
        await homePage.searchInput.setValue(word);
        await homePage.searchBtn.click();
    }

    public async validateSearchingSubtitle(word: string) {
        const issubtitleUpdated = await browser.waitUntil(async () => {
            const subtitleText = await homePage.searchSubtitle.getText();
            return subtitleText.includes(word);
        });
        chaiExpect(issubtitleUpdated).equal(true);
    }

    public async validateSearchResults(expectedTextInName: string) {
        const allResultsCorrect = await browser.waitUntil(async () => {
            const cardTitles = await homePage.productCardName;
            const productNames = [];
            for (const card of cardTitles) {
                productNames.push(await card.getText());
            }
            return productNames.every((cardName) => cardName.toLowerCase().includes(expectedTextInName));
        });
        chaiExpect(allResultsCorrect).equal(true);
    }
}
export const homeOperations = new HomeOperations();
