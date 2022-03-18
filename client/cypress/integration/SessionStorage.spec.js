describe("Check the session storage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  it("log user in", () => {
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("test12345");
    cy.get("#submit-btn").submit();
    cy.url().should("contain", "http://localhost:3000/profile");
    cy.window()
      .its("sessionStorage")
      .invoke("getItem", "token")
      .should("exist");
  });
});
