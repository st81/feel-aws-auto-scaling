/// <reference types="cypress" />s
describe('Display AB results', () => {
    it('Show execution detail of AB', () => {
        cy.visit('/')

        var numberOfRequests = '1'
        var numberOfConcurrency = '1'

        cy.get('.number-of-request-ab')
            .type(numberOfRequests)

        cy.get('.number-of-concurrency-ab')
            .type(numberOfConcurrency)

        cy.contains('Run!').click()

        cy.get('.display-ab-results')
            .should('include.text', `Concurrency Level:      ${numberOfRequests}`)
            .should('include.text', `Complete requests:      ${numberOfConcurrency}`)
    })
})