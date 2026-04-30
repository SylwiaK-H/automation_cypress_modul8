import { Product } from "./homePage";

const productName = '.product-name'
const remoweItemButton = '.remove'
const emptyCartAlert = '.cart-empty.woocommerce-info'

class CartPage {

    checkThatAddedProductIsInCart() {
        cy.get(productName).contains(Product.HoodieWithZipper.Name).should('exist')
    }

    removeItemFromCart() {
        cy.get(remoweItemButton).click()
    }

    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should('exist')
    }

}
export default CartPage;