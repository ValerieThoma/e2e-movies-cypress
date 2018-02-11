describe('movies paginate', () => {
    beforeEach( () => {
        cy.visit('https://yegor-sytnyk.github.io/movies-list/')
    })
    it('has right nav',() => {
        cy.get('.text-right').should('have.length', 1)
            .children().should('have.length', 1)
    })
    
    context('pagination', () => {
        beforeEach( () => {
            cy.visit('https://yegor-sytnyk.github.io/movies-list/')
        })
        
        it('paginates to page 2', () => {
            cy.get('.pagination').within( () => {
                cy.get('a').eq(2)
                    .click({force:true})         
            })
            cy.get('.title').should('contain', 'Before Midnight')
         
        })
        
        it('paginates to the last page', () =>{
            cy.get('.pagination > li > a').eq(8)
                .click({force:true})
            cy.get('.title').should('contain', 'V for Vendetta')    
        })

    })

});