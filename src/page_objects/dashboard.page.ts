import { BasePage } from './base.page';

class DashboardPage extends BasePage {
    public get favoriteLink() {
        return $('.btn-group-vertical a:nth-child(1)');
    }
}
export const dashboardPage = new DashboardPage();
