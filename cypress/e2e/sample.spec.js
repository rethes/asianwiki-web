describe('Test User Role', () => {
  before(() => {
    cy.visit('http://localhost:3001/');
  });

  it('Navigate to hello page', () => {
    cy.get('header[class="App-header"]')
      .get('p')
      .should('contain', 'Edit src/App.tsx and save to reload');
  });
});
