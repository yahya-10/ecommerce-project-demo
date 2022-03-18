describe("Login form submission", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });
  it("Should find the login form", () => {
    cy.get("#fullName").type("test test");
    cy.get("#companyName").type("test");
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("test12345");
    cy.get("#submit").submit();
  });
});
