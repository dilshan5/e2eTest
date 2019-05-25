const { I } = inject();

module.exports = {
    // setting locators
    productDetailSection: {css: 'div#details'},
    productTitle: {xpath: '//div[@data-codecept=\'productTitle\']'},
    productPrice: {css: 'span.js-fprice'},
    productMaterialInfo: {xpath: '//dl[@class=\'attributes\']//dt[@class=\'attr-title\']'},
    productTrustInfo: {css: 'ul.details-advantages-snippet'}// locate product trust snippet

}
