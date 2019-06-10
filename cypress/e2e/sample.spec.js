describe('Test User Role', () => {
  before(() => {
    cy.visit('http://localhost:3001/');
  });

  it('Navigate to hello page', () => {
    cy.get('.h1-tag')
      .should('contain', 'Typescript rendering');
  });
});
