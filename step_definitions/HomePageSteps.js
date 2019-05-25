const {I, homePage} = inject();


Given('I visit the web site as a guest user', () => {
    I.amOnPage('/');
    I.seeTitleEquals(homePage.pageTitle);
});

When('I search for {string}', (searchString) => {
    I.click(homePage.headerPanel.searchForm);
    I.waitForElement(homePage.headerPanel.searchField, 5);
    I.fillField(homePage.headerPanel.searchField, searchString);
    I.click(homePage.headerPanel.searchIcon);
});

