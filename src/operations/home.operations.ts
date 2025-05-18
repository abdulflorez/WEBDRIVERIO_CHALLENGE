import { envConfig } from '../env_config/env.config';
import { homePage } from '../page_objects/home.page';
import { BaseOperations } from './base.operations';

class HomeOperations extends BaseOperations {
    public async visit() {
        await this.navigateTo(envConfig.baseUrl);
        await homePage.categoryFilters[0].waitForClickable();
    }
}
export const homeOperations = new HomeOperations();
