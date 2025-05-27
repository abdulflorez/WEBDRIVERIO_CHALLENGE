import { DataTable, Then } from '@wdio/cucumber-framework';
import { loginOperations } from '../operations/login.operations';
import { envConfig } from '../env_config/env.config';
import { dashboardPage } from '../page_objects/dashboard.page';
import { loginPage } from '../page_objects/login.page';
import { dashboardOperations } from '../operations/dashboard.operations';
import { profileOperations } from '../operations/profile.operations';
import { homeOperations } from '../operations/home.operations';
import { productDetailsOperations } from '../operations/product_details.operations';

Then('I should be redirected to the Sign In page', async () => {
    await loginOperations.validateLoginPageVisible();
});

Then('I should see my dashboard', async () => {
    await loginPage.waitForPageLoad(`${envConfig.baseUrl}/account`);
    expect(await dashboardPage.favoriteLink.isDisplayed()).toBeTruthy();
});

Then('I should see a dropdown with the username {string} that displays the following information:', async (fulname: string, table: DataTable) => {
    const expectedOptions: string[] = table.raw().map((row) => row[0]);
    await dashboardOperations.validateLoggedUser(fulname, expectedOptions);
});

Then('I should see a confirmation {string}', async (expectedText: string) => {
    await profileOperations.validateSuccessfullyUpdatedBanner(expectedText);
});

Then('A subtitle {string} is displayed', async (expectedText: string) => {
    await homeOperations.validateSearchingSubtitle(expectedText);
});

Then('the results show only product card {string} world', async (expectedText: string) => {
    await homeOperations.validateSearchResults(expectedText);
});

Then('I should see the product details page for {string} with title, price, and description', async (titleName: string) => {
    await productDetailsOperations.validateProductDetailsPage(titleName);
});
