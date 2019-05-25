const {I, productDisplayPage} = inject();

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
            // code block
        }
    }
});