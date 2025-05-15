import { When } from '@wdio/cucumber-framework';

When('I navigate to the Sign Up page', () => {
    console.log('This is a when method');
});

When('I login with email {string} and password {string}', () => {
    console.log('This is a when method');
});

When('I register with the following information:', () => {
    console.log('This is a when method');
});
