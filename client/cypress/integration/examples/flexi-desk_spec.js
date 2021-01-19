// Testing the home page url loads and users can successfully log in
describe('Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://www.flexi-desks.com/login')
        cy.get('#email').type('test@email').should('have.value', 'test@email')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.MuiButtonBase-root').click({multiple: true })
    })
})

// Testing that the modals open upon click
describe('Testing Modal will open upon click', () => {
    it('successfully clicks and loads a modal', () => {
        cy.visit('http://www.flexi-desks.com/admin/newBookings')
        cy.contains('Desk 9').click()
    })
})

// Making sure User Access is going to the User side
describe('User access', () => {
    it('successfully loads into Users interface', () => {
        cy.visit('http://www.flexi-desks.com/login')
        cy.get('#email').type('employee@email.com').should('have.value', 'employee@email.com')
        cy.get('#password').type('pw').should('have.value', 'pw')
        cy.get('[type="checkbox"]').check()
        cy.get('.MuiButtonBase-root').click({multiple: true })
        cy.url('http://www.flexi-desks.com/user/dashboard')
    })
})

// Making sure Admin Access is going to the Admin side
describe('Admin access', () => {
    it('successfully loads into Admins interface', () => {
        cy.visit('http://www.flexi-desks.com/login')
        cy.get('#email').type('admin@email.com').should('have.value', 'admin@email.com')
        cy.get('#password').type('pw').should('have.value', 'pw')
        cy.get('[type="checkbox"]').check()
        cy.get('.MuiButtonBase-root').click({multiple: true })
        cy.url('http://www.flexi-desks.com/admin/dashboard')
    })
})
