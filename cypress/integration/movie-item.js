describe('movie items', () => {

    beforeEach( () => {
        cy.visit('https://yegor-sytnyk.github.io/movies-list/')
    })

    it('have movie list', () => {
        cy.get('#movie-list').should('be.visible')
            .and('have.length', 1)
            .children() 
    })
    it('have movie rows', () => {
        cy.get('.movie-row')
            .should('be.visible')
            .children('.image')
                .should('have.length', 10)
    })

    it('movie has title', () => {
        cy.get('.movie-row > .title').should('be.visible')
    })

    it('movie row displays data', () => {
        cy.get('.title')
            .find('h3').should('contain', 'a')   
    })

    it('within - image class', () => {
        cy.get('.image').within( () => {
          cy.get('img').should('have.attr', 'width', '96')
            .and('have.attr', 'height', '142')
            .and('have.attr', 'src')
            // .and('have.attr', 'alt')
            // .and('have.attr', 'title')
        })
      })
});