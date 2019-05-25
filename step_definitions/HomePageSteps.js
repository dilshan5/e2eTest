const {I, homePage} = inject();


Given('I visit the web site as a guest user', () => {
    I.amOnPage('/');
    I.seeTitleEquals(homePage.pageTitle);
});

When('I search for {string}', (searchString) => {
    I.click(homePage.searchForm);
    I.waitForElement(homePage.searchField,5);
    I.fillField(homePage.searchField, searchString);
    I.wait(2);
    I.click(homePage.searchIcon);
});

