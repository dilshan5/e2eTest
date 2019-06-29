const {I} = inject();

module.exports = {
    // setting locators
    productDetailSection: {css: 'div#details'},
    productTitle: {xpath: '//div[@data-codecept=\'productTitle\']'},
    productPrice: {css: 'span.js-fprice'},
    productMaterialInfo: {xpath: '//dl[@class=\'attributes\']//dt[@class=\'attr-title\']'},
    productTrustInfo: {css: 'ul.details-advantages-snippet'},// locate product trust snippet
    productQuantity: {css: 'input.input-amount.js-input-amount'},
    addToCartButton: {css: 'span.a-icon.a-button__icon.a-button__icon--cart.a-button__icon--first'},
    productTotalPrice: {css: 'div.total-price'},
    closeCartOverlay: {css: 'a.close.close-reveal-modal'},

    //define variables
    totalPrice: '',
    prodTitle: '',

    //this method select an available product color
    selectAvailableProductColor() {
        I.click("//ul[@id='js-varlist-color']//li[contains(@class,'js-available')]");
    },

    //this method select an available product size
    selectAvailableProductSize() {
        I.scrollPageToBottom();
        I.click("//ul[@id='js-varlist-size']//li[contains(@class,'js-available')]");
    },
}
