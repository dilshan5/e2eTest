const {I, homePage} = inject();


Given('I visit the web site as a guest user', () => {
    I.say('Open Home page', 'blue');
    I.amOnPage('/');
    I.seeTitleEquals(homePage.pageTitle);
});

When('I search for {string}', (searchString) => {
    I.click(homePage.searchForm);
    I.waitForVisible(homePage.searchField);
    I.fillField(homePage.searchField, searchString);
    I.wait(2);
    I.click(homePage.searchIcon);
});

