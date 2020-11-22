/// <reference types="cypress" />s
describe('ECS service state', () => {
    it('Should update desired count by clicking button', () => {
        cy.visit('/')

        cy.contains('Update state').click()

        cy.get('#ecs-service-state-desired-count')
            .should('include.text', 'Desired count:1')
    })

    it('Should update pending count by clicking button', () => {
        cy.visit('/')

        cy.contains('Update state').click()

        cy.get('#ecs-service-state-pending-count')
            .should('include.text', 'Pending count:0')
    })

    it('Should update running count by clicking button', () => {
        cy.visit('/')

        cy.contains('Update state').click()

        cy.get('#ecs-service-state-running-count')
            .should('include.text', 'Running count:1')
    })
})