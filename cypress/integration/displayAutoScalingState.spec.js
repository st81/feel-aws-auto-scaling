/// <reference types="cypress" />s
describe('Display auto scaling state', () => {
    it('Should display initial state as Not started', () => {
        cy.visit('/')

        cy.contains('Auto scaling state: Not started')
    })
})