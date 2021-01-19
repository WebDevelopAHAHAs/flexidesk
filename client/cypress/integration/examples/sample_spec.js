// describe('My first test', function() {
//     it('Does not do much', function () {
//         expect(true).to.equal(true)
//     })
    
// })

describe('My first test', function() {
    it('gets, types and asserts', function () {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
    
})
