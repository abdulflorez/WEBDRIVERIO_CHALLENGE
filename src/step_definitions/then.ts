import { DataTable, Then } from '@wdio/cucumber-framework';
import { loginOperations } from '../operations/login.operations';
import { RegistrationData } from '../types/interfaces/registration_data.interface';
import { envConfig } from '../env_config/env.config';
import { dashboardPage } from '../page_objects/dashboard.page';
import { loginPage } from '../page_objects/login.page';
import { dashboardOperations } from '../operations/dashboard.operations';

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

// Then('I should see a logout option available', () => {
//     console.log('This is a Then method');
// });
