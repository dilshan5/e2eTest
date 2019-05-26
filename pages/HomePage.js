const {I} = inject();

module.exports = {
    // setting locators
    pageTitle: 'Outdoor Gear & Clothing | Outdoor Online Shop | Bergfreunde.eu',
    // Header panel locators
    headerPanel: {
        searchForm: {css: 'div.searchbox'},
        searchField: {css: 'input.searchfield.show-for-small-only'},
        searchIcon: 'input[type="button"]',
        addToCartIcon: {css: 'i.icon.basket'},
        goToCartButton: {css: 'a.a-button.a-button--green.right'}
    }
}