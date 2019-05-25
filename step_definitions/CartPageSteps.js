const {I, homePage, cartPage, productDisplayPage} = inject();

When('I navigate to Add to Cart page', () => {
    I.click(homePage.headerPanel.addToCartIcon);
    I.wait(3);// wait until cart overly is visible
    I.click(homePage.headerPanel.goToCartButton);
    I.seeInCurrentUrl('/basket/')
});

When('{string} should be the same as added', async (productDetails) => {
    switch (productDetails) {
        case 'Product Title':
            let title = await I.grabTextFrom(cartPage.productTitle); //get cart product title
            let productTitle = title.toString().toLowerCase();
            I.assertEqual(true, productDisplayPage.prodTitle.toLowerCase().includes(productTitle), "Product Title mismatched...");
            break;
        case 'Total Price':
            let cartTotal = await I.grabTextFrom(cartPage.cartTotal); //get cart total price
            let cartPrice = cartTotal.toString().toLowerCase();
            I.assertEqual(true, cartPrice === productDisplayPage.totalPrice, "Total price mismatched...");
            break;
        default:
            I.say("Invalid Product Detail", 'blue');
    }
});
