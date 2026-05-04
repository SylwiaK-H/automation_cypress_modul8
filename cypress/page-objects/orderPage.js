import { faker } from '@faker-js/faker';

const firstName = '#billing_first_name'
const lastName = '#billing_last_name'
const countryDropDown = '#billing_country'
const address = '#billing_address_1'
const postalCode = '#billing_postcode'
const city = '#billing_city'
const phoneNumber = '#billing_phone'
const email = '#billing_email'
const buyButton = '#place_order'
const countryDropDownPoland = 'Polska'
const confirmationText = '.woocommerce-thankyou-order-received'

class OrderPage{
    fillAllRequiredFields() {
        cy.get(firstName).type(faker.person.firstName())
        cy.get(lastName).type(faker.person.lastName())
        cy.get(countryDropDown).select(countryDropDownPoland, {force: true})
        cy.get(address).type(faker.location.streetAddress())
        cy.get(postalCode).type(faker.location.zipCode('##-###'))
        cy.get(city).type(faker.location.city())
        cy.get(phoneNumber).type('+48' + ' ' + faker.number.int({min: 100, max: 999}) + ' ' + faker.number.int({min: 100, max: 999}) + ' ' + faker.number.int({min: 100, max: 999}))
        cy.get(email).type(faker.internet.email({provider: 'gmail.com'}))
    }

    clickOnBuyButton() {
        cy.get(buyButton).click()
    }

    checkIfOrderIsPlacedCorrectly() {
        cy.url({ timeout: 15000 }).should('include', '/order-received/')

        cy.contains('Dziękujemy. Otrzymaliśmy Twoje zamówienie.', { timeout: 15000 })
            .should('be.visible')
    }
}

export default OrderPage;