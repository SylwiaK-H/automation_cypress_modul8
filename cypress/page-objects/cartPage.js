import { Product } from "./homePage";


const productName = '.product-name'
const remoweItemButton = '.remove'
const emptyCartAlert = '.cart-empty.woocommerce-info'
const goToPaymentsButton = '.wc-proceed-to-checkout'

class CartPage {

    checkThatAddedProductIsInCart(product) {
        cy.contains('.product-name', product.Name).should('exist')
    }

    removeItemFromCart() {
        cy.get(remoweItemButton).click()
    }

    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should('exist')
    }

    clickGoToPaymentsButton() {
        cy.get(goToPaymentsButton).click()
    }

    clickGoToCartFromProductButton() {
        cy.get('.added_to_cart.wc-forward', { timeout: 10000 }).should('be.visible').click()
    }

}
export default CartPage;