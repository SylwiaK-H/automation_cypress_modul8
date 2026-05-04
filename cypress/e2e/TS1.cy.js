import CartPage from "../page-objects/cartPage";
import HomePage, { Product } from '../page-objects/homePage'
import AccountPage from "../page-objects/myAccountPage";
import { faker } from "@faker-js/faker";


describe('my first scenario', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();
    const cartPage = new CartPage();

    beforeEach(function () {
        cy.fixture("users.json").as("userData");
        cy.fixture("product.json").as("itemsData");
    });

    beforeEach(() => {
        homePage.visitPage();
    });


    it('should login to the application', function () {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernameFieldWithEmail(this.userData.email)
        accountPage.fillPasswordField(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyAccountNavigation()

    })

    it('should not login to the application', function () {
        accountPage.visitPage()
        accountPage.fillUsernameFieldWithEmail(faker.internet.email())
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorAfterWrongLogin()

    })

    it('should add product to cart and delete it from there', function() {
        homePage.visitPage()
        homePage.addProductToCart((this.itemsData.Polo))
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(this.itemsData.Polo)
        cartPage.removeItemFromCart();
        cartPage.checkThatCartIsEmpty()
    })

})