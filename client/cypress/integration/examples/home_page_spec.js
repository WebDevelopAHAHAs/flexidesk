// Testing the home page url loads
describe('Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://www.flexi-desks.com/login')

        cy.get('[type="checkbox"]').check()
    })
})

// Testing that the modals open upon click
describe('Testing Modal will open upon click', () => {
    it('successfully clicks and loads a modal', () => {
        cy.visit('http://www.flexi-desks.com/admin/newBookings')
        cy.pause
        cy.contains('Desk 9').click()
    })
})
