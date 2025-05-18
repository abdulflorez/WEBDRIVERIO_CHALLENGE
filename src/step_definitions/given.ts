import { Given } from '@wdio/cucumber-framework';
import { homeOperations } from '../operations/home.operations';

Given('I am on the page practicesoftwaretesting page', async () => {
    await homeOperations.visit();
});
