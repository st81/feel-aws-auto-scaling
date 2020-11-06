/// <reference types="cypress" />s
describe('Header spec', () => {
    it('Has header string', () => {
        cy.visit('/')

        cy.contains('Feel AWS Auto Scaling')
    })
})