import { DataTable, When } from '@wdio/cucumber-framework';
import { homeOperations } from '../operations/home.operations';
import { RegistrationData } from '../types/interfaces/registration_data.interface';
import { registrationOperations } from '../operations/registration.operations';
import { loginOperations } from '../operations/login.operations';

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
