/// <reference types="Cypress" />
context('PS16 Currencly Restrictions check', () => {
    beforeEach(() => {
          // likely want to do this in a support file
      // so it's applied to all spec files
      // cypress/support/index.js

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
  })
it('DE / 100 EUR / 3 Klarna Payments should be visible', () => {
      cy.viewport(1920,1080)
      var fasterLogin = (LoginFO) => {
      cy.session (LoginFO, () => {
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/fr/home/9-test1.html')
      cy.get('[class="login"]').click()
      cy.get('[for="email"]').type((Cypress.env('FO_username')), {log: false})
      cy.get('[for="passwd"]').type((Cypress.env('FO_password')), {log: false})
      cy.get('[name="SubmitLogin"]').click()
      })
      }
      fasterLogin('LoginFO')
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/fr/home/9-test1.html')
      cy.get('[name="Submit"]').click()
      cy.get('[class="btn btn-default button button-medium"]').click()
      cy.get('.cart_navigation > .button > span').click()
      cy.get('#id_address_delivery').select('My addressDE')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('[type="checkbox"]').check('1')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('#mollie_link_klarnapaylater').should('be.visible')
      cy.get('#mollie_link_klarnasliceit').should('be.visible')
      cy.get('#mollie_link_sofort').should('be.visible')
      cy.get('b').trigger('mouseover')
      cy.get('[class="ajax_cart_block_remove_link"]').click().wait(2000)
})
it('DE / <45 EUR / Klarna Slice It. should not be visible', () => {
      cy.viewport(1920,1080)
      var fasterLogin = (LoginFO) => {
      cy.session (LoginFO, () => {
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/fr/home/9-test1.html')
      cy.get('[class="login"]').click()
      cy.get('[for="email"]').type((Cypress.env('FO_username')), {log: false})
      cy.get('[for="passwd"]').type((Cypress.env('FO_password')), {log: false})
      cy.get('[name="SubmitLogin"]').click()
      })
      }
      fasterLogin('LoginFO')
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/en/summer-dresses/7-printed-chiffon-dress.html')
      cy.get('[name="Submit"]').click()
      cy.get('[class="btn btn-default button button-medium"]').click()
      cy.get('.cart_navigation > .button > span').click()
      cy.get('#id_address_delivery').select('My addressDE')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('[type="checkbox"]').check('1')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('.paiement_block').contains('Slice it.').should('not.exist')
      cy.get('b').trigger('mouseover')
      cy.get('[class="ajax_cart_block_remove_link"]').click().wait(2000)
})
it('DE / >10000 EUR / Klarna Slice It, Klarna Pay Later, iDEAL, Bancontact, Belfius Direct Net, KBC/CBC, Credit card, SOFORT Banking, SOFORT Banking, sps, paysafecard, Przelewy 24, Gift cards should not be visible', () => {
      cy.viewport(1920,1080)
      var fasterLogin = (LoginFO) => {
      cy.session (LoginFO, () => {
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/fr/home/9-test1.html')
      cy.get('[class="login"]').click()
      cy.get('[for="email"]').type((Cypress.env('FO_username')), {log: false})
      cy.get('[for="passwd"]').type((Cypress.env('FO_password')), {log: false})
      cy.get('[name="SubmitLogin"]').click()
      })
      }
      fasterLogin('LoginFO')
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/fr/home/9-test1.html')
      cy.get('[id="quantity_wanted"]').clear().type('501')
      cy.get('[name="Submit"]').click()
      cy.get('[class="btn btn-default button button-medium"]').click()
      cy.get('.cart_navigation > .button > span').click()
      cy.get('#id_address_delivery').select('My addressDE')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('[type="checkbox"]').check('1')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('.paiement_block').contains('Slice it.').should('not.exist')
      cy.get('.paiement_block').contains('iDEAL').should('not.exist')
      cy.get('.paiement_block').contains('Carte de crédit').should('not.exist')
      cy.get('.paiement_block').contains('Payer en 3 fois sans frais').should('not.exist')
      cy.get('.paiement_block').contains('Slice it.').should('not.exist')
      cy.get('.paiement_block').contains('SOFORT').should('not.exist')
      cy.get('.paiement_block').contains('Bancontact').should('not.exist')
      cy.get('.paiement_block').contains('Przelewy24').should('not.exist')
      cy.get('.paiement_block').contains('eps').should('not.exist')
      cy.get('.paiement_block').contains('KBC/CBC').should('not.exist')
      cy.get('.paiement_block').contains('Belfius').should('not.exist')
      cy.get('.paiement_block').contains('Giropay').should('not.exist')
      cy.get('.paiement_block').contains('Gift').should('not.exist')
      cy.get('b').trigger('mouseover')
      cy.get('[class="ajax_cart_block_remove_link"]').click().wait(2000)
})
it('JPN / >1000000 JPY / PayPal should not be visible', () => {
      cy.viewport(1920,1080)
      var fasterLogin = (LoginFO) => {
      cy.session (LoginFO, () => {
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/fr/home/9-test1.html')
      cy.get('[class="login"]').click()
      cy.get('[for="email"]').type((Cypress.env('FO_username')), {log: false})
      cy.get('[for="passwd"]').type((Cypress.env('FO_password')), {log: false})
      cy.get('[name="SubmitLogin"]').click()
      })
      }
      fasterLogin('LoginFO')
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/en/home/9-test1.html')
      cy.get('#setCurrency > .current').click()
      cy.contains('JPY').click()
      cy.get('[id="quantity_wanted"]').clear().type('1000')
      cy.get('[name="Submit"]').click()
      cy.get('[class="btn btn-default button button-medium"]').click()
      cy.get('.cart_navigation > .button > span').click()
      cy.get('#id_address_delivery').select('My addressJPN')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('[type="checkbox"]').check('1')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('.paiement_block').contains('PayPal').should('not.exist')
      cy.get('b').trigger('mouseover')
      cy.get('[class="ajax_cart_block_remove_link"]').click()
})
it('FR / <35 EUR / Klarna Pay Later should not be visible', () => {
      cy.viewport(1920,1080)
      var fasterLogin = (LoginFO) => {
      cy.session (LoginFO, () => {
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/fr/home/9-test1.html')
      cy.get('[class="login"]').click()
      cy.get('[for="email"]').type((Cypress.env('FO_username')), {log: false})
      cy.get('[for="passwd"]').type((Cypress.env('FO_password')), {log: false})
      cy.get('[name="SubmitLogin"]').click().wait(2000)
      })
      }
      fasterLogin('LoginFO')
      cy.visit('https://demo.invertus.eu/clients/mollie16-test/fr/home/9-test1.html')
      cy.get('[name="Submit"]').click()
      cy.get('[class="btn btn-default button button-medium"]').click()
      cy.get('.cart_navigation > .button > span').click()
      cy.get('#id_address_delivery').select('FRANCE')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('[type="checkbox"]').check('1')
      cy.get('.cart_navigation > .button > span').click()
      cy.get('.paiement_block').contains('Pay later.').should('not.exist')
      cy.get('b').trigger('mouseover')
      cy.get('[class="ajax_cart_block_remove_link"]').click().wait(2000)
})
// it('FR / >1000 EUR / Klarna Pay Later should not be visible', () => {
//       cy.viewport(1920,1080)
//       cy.visit('https://demo.invertus.eu/clients/mollie16-test/en/home/9-test1.html')
//       cy.get('a > .material-icons').click()
//       cy.get('[class="form-control"]').type((Cypress.env('FO_username')), {log: false})
//       cy.get('[class="form-control js-child-focus js-visible-password"]').type((Cypress.env('FO_password')), {log: false})
//       cy.get('[class="btn btn-primary"]').click()
//       cy.visit('https://demo.invertus.eu/clients/mollie17-test/en/accueil/20-testproduct1.html')
//       cy.get('[id="quantity_wanted"]').clear().type('11')
//       cy.get('.add > .btn').click()
//       cy.get('.cart-content-btn > .btn-primary').click()
//       cy.get('.text-sm-center > .btn').click()
//       cy.contains('FRANCE').click()
//       cy.get('.clearfix > .btn').click()
//       cy.get('#js-delivery > .continue').click()
//       cy.get('.paiement_block').contains('Pay later.').should('not.exist')
// })
})
