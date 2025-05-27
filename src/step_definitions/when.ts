import { DataTable, When } from '@wdio/cucumber-framework';
import { homeOperations } from '../operations/home.operations';
import { RegistrationData } from '../types/interfaces/registration_data.interface';
import { registrationOperations } from '../operations/registration.operations';
import { loginOperations } from '../operations/login.operations';
import { profileOperations } from '../operations/profile.operations';

When('I go to the Sign In page', async () => {
    await homeOperations.goToSignInPage();
});

When('I go to the Sign Up page', async () => {
    await homeOperations.goToSignUpPage();
});

When('I login with email {string} and password {string}', async (email: string, password: string) => {
    await loginOperations.login({ email: email, password: password });
});

When('I register with the following information:', async (table: DataTable) => {
    const [data] = table.hashes() as unknown as RegistrationData[];
    await registrationOperations.fillRegistrationForm(data);
});

When('I go to my Profile page', async () => {
    await homeOperations.goToProfilePage();
});

When('I update my profile information:', async (table: DataTable) => {
    const updates = Object.fromEntries(table.raw().slice(1));
    await profileOperations.updateProfileData(updates);
});

When('I search for {string} by its exact name', async (wordToSearch: string) => {
    await homeOperations.searchProductByWord(wordToSearch);
});

When('I click on the product titled {string}', async (productName: string) => {
    await homeOperations.selectAProductByName(productName);
});
