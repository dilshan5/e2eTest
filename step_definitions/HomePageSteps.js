const {I, homePage} = inject();


Given('I visit the web site as a guest user', () => {
    I.amOnPage('/');
    I.seeTitleEquals(homePage.pageTitle);
    // I.say("I visit the web site as a guest user",'blue');
});

When('I search for {string}', (searchString) => {
    I.click(homePage.headerPanel.searchIcon);
    I.wait(5);// wait for search textBox to be clickable
    I.fillField(homePage.headerPanel.searchField, searchString);
    I.wait(5); // wait for icon to be clickable
    I.click(homePage.headerPanel.searchIcon);
    //  I.say("I search for"+searchString,'blue');
});


Then('I Navigate to {string} Footer links', (cusService) => {
    I.scrollPageToBottom();
    switch (cusService) {
        case 'Payment & Shipping':
            I.click("Payment & Shipping");
            break;
        case 'FAQs & Help':
            I.click("FAQs & Help");
            break;
        case 'Contact us':
            I.click("Contact us");
            break;
        case 'Returns':
            I.click("Returns");
            break;
        case 'Customer info':
            I.click("Customer info");
            break;
        case 'Complaints':
            I.click("Complaints");
            break;
        default:
            I.say("Invalid Footer Link", 'blue');
    }
});

Then('I verify the {string} Page', (cusService) => {
    switch (cusService) {
        case 'Payment & Shipping':
            I.seeInCurrentUrl('/delivery-and-payment/');
            break;
        case 'FAQs & Help':
            I.seeInCurrentUrl('/faq/');
            break;
        case 'Contact us':
            I.seeInCurrentUrl('/contact/');
            break;
        case 'Returns':
            I.seeInCurrentUrl('/return/');
            break;
        case 'Customer info':
            I.seeInCurrentUrl('/customer-information/');
            break;
        case 'Complaints':
            I.seeInCurrentUrl('/complaints/');
            break;
        default:
            I.say("Invalid Footer Link", 'blue');
    }
});

