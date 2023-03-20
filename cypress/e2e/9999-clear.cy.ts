/// <reference types="cypress" />

describe("Clear Cache", () => {
  it("Should clear url cache", () => {
    cy.writeFile("cypress/fixtures/employee/url.txt", "");
  });
});
