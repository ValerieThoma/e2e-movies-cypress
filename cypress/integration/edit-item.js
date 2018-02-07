describe('Connect with db', () => {
    beforeEach(() =>{
        cy.request('GET', 'https://yegor-sytnyk.github.io/movies-list/')
          .its('body')
    })
 
    context('add movie to db', () =>{
        it('opens modal window', () => {
            cy.visit('https://yegor-sytnyk.github.io/movies-list/')
            cy.get('#filter-bar > .col-sm-1 > button').click()
            cy.get('.modal-title').should('contain', 'Edit movie')
 
        })   
 
         it('adds title of movie', () => {
             cy.get('.form-group:first > .field > input')
                 .type('L.A. Story')           
         })
 
         it('adds movie year', () => {
             cy.get('.field > input').eq(1).focus().clear()
                 .type('1991')
         })
 
         it('add runtime', () => {
             cy.get('.field > input').eq(2).focus().clear()
                 .type('95')
         })
 
         it('selects genre', () => {
             cy.get('.Select--multi').trigger('mousedown')
                 // .type('{arrowdown}')
                 //researching how to properly target multi-select dropdown
         })
         
         it('adds director', () => {
             cy.get('.field > input').eq(3).focus().clear()
                 .type('Mick Jackson')
         })
         
         it('adds actors', () => {
             cy.get('textarea').eq(0).focus()
                 .type('Steve Martin, Victoria Tennant, Richard E. Grant, Marilu Henner, Sarah Jessica Parker')
         })
 
         it('adds plot synopsis', () => {
             cy.get('textarea').eq(1).focus()
                 .type('With the help of a talking freeway billboard, a wacky weatherman tries to win the heart of an English newspaper reporter, who is struggling to make sense of the strange world of early 1990s Los Angeles.')
         })
 
         it('saves new title', () => {
             cy.get('.modal-footer > button').eq(0).click()
         })
 
     it('confirms new title added', () => {
         cy.get('[type="text"]').focus()
             .type('L.A. Story')
         cy.get('button').eq(1).click()
         cy.get('.title').should('contain', 'L.A. Story')    
     })
         
    })
 })