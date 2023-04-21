it('Login page', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test123')
    cy.get('[type="submit"]').click()
})