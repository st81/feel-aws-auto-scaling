/// <reference types="cypress" />s
describe('Execute AB spec', () => {
    it('Has Run button', () => {
        cy.visit('/')

        cy.contains('Run!').click()
    })

    it('Has number of request for AB field', () => {
        cy.visit('/')

        cy.get('.number-of-request-ab')
            .type('10')
            .should('have.value', '10')
    })

    it('Has number of concurrency for AB field', () => {
        cy.visit('/')

        cy.get('.number-of-concurrency-ab')
            .type('10')
            .should('have.value', '10')
    })
})
