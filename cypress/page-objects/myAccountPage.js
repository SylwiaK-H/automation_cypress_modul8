import Urls from "./urls";

const usernameEmailField = '#username'
const passwordFeild = '#password'
const loginButton = 'button[name="login"]'
const errorMessage = '.woocommerce-error'
const myAccountNavigation = '.woocommerce-MyAccount-navigation'
const errorAfterWrongLogin = 'ul[role="alert"]'

class AccountPage {

    fillUsernameFeildWithEmail(email) {
        cy.get(usernameEmailField).type(email)
    }

    fillPasswordFeild(password) {
        cy.get(passwordFeild).type(password)
    }

    clickLoginButton() {
        cy.get(loginButton).click()
    }

    checkVisibilityOfMyAccountNavigation() {
        cy.get(myAccountNavigation).should('be.visible')
    }

    checkVisibilityOfErrorWrongLogin() {
        cy.get(errorAfterWrongLogin).should('be.visible')
    }

    visitPage() {
        const urls = new Urls
        urls.visitMyAccountPage()
    }


}
export default AccountPage;