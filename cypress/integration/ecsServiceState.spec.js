/// <reference types="cypress" />s
describe('ECS service state', () => {
    it('Should contains desired count', () => {
        cy.visit('/')

        cy.contains('Desired count: ')
    })

    it('Should contain pending count', () => {
        cy.visit('/')

        cy.contains('Pending count: ')
    })

    it('Should contain running count', () => {
        cy.visit('/')

        cy.contains('Running count: ')
    })

    it('Should update desired count by clicking button', () => {
        cy.visit('/')

        cy.contains('Update').click()

        cy.get('#ecs-service-state-desired-count')
            .should('include.text', 'Desired count: 1')
    })

    it('Should update pending count by clicking button', () => {
        cy.visit('/')

        cy.contains('Update').click()

        cy.get('#ecs-service-state-pending-count')
            .should('include.text', 'Pending count: 0')
    })

    it('Should update running count by clicking button', () => {
        cy.visit('/')

        cy.contains('Update').click()

        cy.get('#ecs-service-state-running-count')
            .should('include.text', 'Running count: 1')
    })
})