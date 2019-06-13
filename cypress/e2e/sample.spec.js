describe('Sample text', () => {
  before(() => {
    cy.visit('http://localhost:3001/');
  });

  it('Navigate the navbar', () => {
    cy.get('.logo').should('be.visible');
    cy.get('.search-input')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Search')
  });
});
