import HomePage from "../page-objects/homePage";
import AccountPage from "../page-objects/myAccountPage";
import { faker } from '@faker-js/faker';



describe('my first scenario', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();

    before(function () {
        cy.fixture('users').as('userData')
    })

    it('should login to the application', function () {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernameFeildWithEmail(this.userData.email)
        accountPage.fillPasswordFeild(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyAccountNavigation()
    })

    it('should not login to te application', function () {
        accountPage.visitPage()
        accountPage.fillUsernameFeildWithEmail(faker.internet.email())
        accountPage.fillPasswordFeild(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorWrongLogin()
    })
})