describe('load application', () => {
    // it('Visits Movie-list App', () => {
    //     cy.visit('https://yegor-sytnyk.github.io/movies-list/')
    // replace 'load application' with beforeEach statement
    beforeEach( () => {
        cy.visit('https://yegor-sytnyk.github.io/movies-list/')
    })

    it('react owns root', () =>{
        cy.get('#root')
            .should('be.visible')
            .children()
    })
  
    it('loads first movie',() =>  {
        cy.contains('12 Angry Men')
      })

    it('has search bar', () => {
        cy.get('[type="text"]').focus()
            .should('be.visible')   
    })

    it('input holds no value', () =>{
        cy.get('value')
            .should('not.exist')
    })  
    
    it('has button', () =>{
        cy.get('button')
            .should('be.visible')
            .and('have.id', 'sort-by-dropdown') 
    })  
      
     
})
