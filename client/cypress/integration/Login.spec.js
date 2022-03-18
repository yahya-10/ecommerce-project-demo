describe("Login form submission", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  it("Should find the login form", () => {
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("test12345");
    cy.get("#submit-btn").submit();
  });
});
