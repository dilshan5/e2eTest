const {I} = inject();

module.exports = {
    // setting locators
    pageUrl: '/basket/',
    cartTotal: {css: 'div.highlight-2.summary-total-price'},
    productTitle: {css: 'span.product--title'},
    voucherCode: {css: 'input.vouchercode'},
    voucherError: {css: 'p.error.font-red.highlight-3'}, //locate voucher error message
    checkOutButton: {css: 'button.a-button.a-button--green.a-button--large.right'}
}
