describe('Search Bar', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i)
      .click()
      .type('Test123');
    cy.findByText(/sign in/i).click();
  });

  it('Displays users when search phrase is matching', async () => {
    cy.findByPlaceholderText(/search/i)
      .click()
      .type('Jero');
    cy.findAllByText(/jerod/i).should('exist');
  });
});
