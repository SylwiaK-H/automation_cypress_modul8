import Urls from "./urls";

const mySccountHeaderButton = '#menu-item-100'

class HomePage {

    clickMyAccountHeaderButton() {
        cy.get(mySccountHeaderButton).click()
    }

  visitPage() {
    const urls = new Urls
    urls.visitHomePage()
  }
}

export default HomePage;