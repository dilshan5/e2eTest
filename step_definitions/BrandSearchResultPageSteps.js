const {I, brandSearchResultPage} = inject();
const assert = require('assert');

When('I should be in Brand Search Landing Page', () => {
    I.seeInCurrentUrl(brandSearchResultPage.pageUrl);
});

Then('Page should have {string} Logo', async (brandName) => {
    let textValue = await I.grabTextFrom(brandSearchResultPage.brandLogoTitle); //get brandLogo-subtitle
    let logoBrandName = textValue.toString().toLowerCase();
    I.assertEqual(true, logoBrandName.includes(brandName.toLowerCase()), "Invalid Brand Logo Displayed.")

});