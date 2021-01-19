// Testing the home page url loads
describe('Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://www.flexi-desks.com/login')
        cy.get('#email').type('test@email').should('have.value', 'test@email')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.MuiButtonBase-root').click({multiple: true })
    })
})

//cy.get(classname) .type()

// Testing that the modals open upon click
describe('Testing Modal will open upon click', () => {
    it('successfully clicks and loads a modal', () => {
        cy.visit('http://www.flexi-desks.com/admin/newBookings')
        cy.pause
        cy.contains('Desk 9').click()
    })
})

// Making