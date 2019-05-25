const {I, searchResultPage} = inject();

When('I should be in Search Landing Page', () => {
    I.seeInCurrentUrl(searchResultPage.pageUrl);
});

Then('Page should have search keyword as {string}', async (keyWord) => {
    let searchValue = await I.grabTextFrom(searchResultPage.searchKeyword); //get search results
    let searchKeyword = searchValue.toString().toLowerCase();
    I.assertEqual(true, searchKeyword.includes(keyWord.toLowerCase()), "Invalid Brand Logo Displayed.")
});

When('I click on any Product Thumbnail with user reviews in search results page', () => {
    I.click(".//ul[@id='product-list']//a[contains(@class,'show-reviews')]|//a[contains(@class,'product-link')]");
});