const {I, brandSearchResultPage} = inject();

When('I should be in Brand Search Landing Page', () => {
    I.seeInCurrentUrl(brandSearchResultPage.pageUrl);
});

// verify Brand page
Then('Page should have {string} Logo', async (brandName) => {
    let textValue = await I.grabTextFrom(brandSearchResultPage.brandLogoTitle); //get brandLogo-subtitle
    let logoBrandName = textValue.toString().toLowerCase();
    I.assertEqual(true, logoBrandName.includes(brandName.toLowerCase()), "Invalid Brand Logo Displayed.")
});