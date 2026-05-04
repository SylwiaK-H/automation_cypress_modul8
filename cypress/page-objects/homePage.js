import Urls from "./urls";

    const myAccountHeaderButton = '#menu-item-100'
    const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
    const checkCartFromProductLevel = '.added_to_cart.wc-forward'
    const cartContent = '.woocommerce-Price-amount.amount'


     export const Product = {
        'HoodieWithZipper': {
            "Locator": "a[data-product_id=\"51\"]",
            "Name": "Hoodie with Zipper"
        },
        'Polo': {
            "Locator": "a[data-product_id=\"53\"]",
            "Name": "Polo"
        },
        'Sunglasses': {
            "Locator": "a[data-product_id=\"\"]",
            "Name": "Sunglasses"
        }
    }

    class HomePage {
        clickMyAccountHeaderButton() {
            cy.get(myAccountHeaderButton).click()
        }

        addProductToCart(product) {
            cy.get(dataBlockNameNew).within(() => {
            cy.get(product.Locator).click()
            })
        }

        clickGoToCartFromProductButton() {
            cy.get(checkCartFromProductLevel, { timeout: 10000 }).should('be.visible').click()
        }

        goToCartFromProductPage() {
            cy.get(cartContent).eq(0).click()
        }

        visitPage() {
            const urls = new Urls()
            urls.visitHomePage()
        }
    }

    export default HomePage;