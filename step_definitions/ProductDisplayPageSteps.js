const {I, productDisplayPage} = inject();
var pp;

Then('I should be redirected to PDP page', () => {
    I.seeElement(productDisplayPage.productDetailSection);
});

Then('I should see product details', async (table) => {
    for (const id in table.rows) {
        if (id < 1) {
            continue; // skip a header of a table
        }
        // go by row cells
        const cells = table.rows[id].cells;
        // take values
        const productDetail = cells[0].value;
        switch (productDetail) {
            case 'Product Description':
                I.seeElement(productDisplayPage.productTitle);
                break;
            case 'Product Price':
                I.seeElement(productDisplayPage.productPrice);
                break;
            case 'Product Weight':
                let materialInfo = await I.grabTextFrom(productDisplayPage.productMaterialInfo); //get material Info
                let productWeight = materialInfo.toString().toLowerCase();
                if (!(productWeight.includes("Weight:"))) {
                    I.say('Product Weight Details are not Available.', 'red'); //not throw error since weight is not mandatory
                }
                break;
            case 'Product return policy':
                let productTrustInfo = await I.grabTextFrom(productDisplayPage.productTrustInfo); //get product TrustInfo
                let returnPolicy = productTrustInfo.toString().toLowerCase();
                I.assertEqual(true, returnPolicy.includes("days returns policy"), "Product Return Policy Details are not Available.");
                break;
            default:
                I.say("Invalid Product Section", 'blue');
        }
    }
});

Given('I am on Product Details Page', () => {
    I.amOnPage('/lundhags-makke-pant-walking-trousers/');
});

When('I select some color', () => {
    productDisplayPage.selectAvailableProductColor();
});

When('I select some size', () => {
    productDisplayPage.selectAvailableProductSize();
});

When('I have select quantity as {int}', (quantity) => {
    I.fillField(productDisplayPage.productQuantity, quantity);
});

When('I add to cart', async () => {
    I.click(productDisplayPage.addToCartButton);
    I.wait(3); //wait until overlay get closed
    productDisplayPage.totalPrice = await I.grabTextFrom(productDisplayPage.productTotalPrice); //get total price
    productDisplayPage.prodTitle = await I.grabTextFrom(productDisplayPage.productTitle); //get product title

    if (I.seeElement(productDisplayPage.closeCartOverlay)) {
        I.click(productDisplayPage.closeCartOverlay);//if overlay is available then close it
        I.wait(3); //wait until overlay get closed
    }
});
