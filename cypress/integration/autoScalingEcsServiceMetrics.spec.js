/// <reference types="cypress" />s
describe('Auto scaling ecs service metrics', () => {
    it('Should contains CPU utilization metrics', () => {
        cy.visit('/')

        cy.contains('CPU utilization')
    })

    it('Should has update metrics button', () => {
        cy.visit('/')

        cy.contains('Update metrics').click()
    })
})