const {I, paymentTypePage} = inject();

Then('I should see {string} section on payment type page', (formType) => {
    I.seeInCurrentUrl(paymentTypePage.pageUrl);
    switch (formType) {
        case 'Login Form':
            I.seeElement(paymentTypePage.loginForm);
            break;
        case 'Create an Account':
            I.seeElement(paymentTypePage.createAccountButton);
            break;
        default:
            I.say("Invalid Details in Payment Type page", 'blue');
    }
});

