import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";
import OrderPage from "../page-objects/orderPage";

const zobaczKoszyk = '.added_to_cart.wc-forward'


describe('my first scenario', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    before(function () {
        cy.fixture('product.json').as('itemsData')
    })

    it('should order a product from the shop', function() {
        homePage.visitPage()
        homePage.addProductToCart(this.itemsData.Polo)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(this.itemsData.Polo)
        cartPage.clickGoToPaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOnBuyButton()
        orderPage.checkIfOrderIsPlacedCorrectly()


    })
})