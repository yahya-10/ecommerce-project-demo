describe("Login form submission", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  it("Should find the login form", () => {
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("test12345");
    cy.get("#submit-btn").submit();

    cy.url().should("contain", "http://localhost:3000/profile");
    cy.get("#selectedSubs-div").should("not.exist");
    cy.get("#company-name").type("test test");
    cy.get("#about").type("test");
    cy.get("#first-name").type("test");
    cy.get("#last-name").type("test");
    cy.get("#email").type("test@test.com");
    cy.get("#country").type("Canada");
    cy.get("#street-address").type("street");
    cy.get("#city").type("test");
    cy.get("#state").type("test");
    cy.get("#zip").type("test");
    cy.get("#submit").submit();
    cy.get("#validate-btn").click();
    cy.get(":first-child").should("exist");
  });
});
