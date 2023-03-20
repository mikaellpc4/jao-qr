/// <reference types="cypress" />

import validJSON from "../fixtures/home/validInputs.json";

const { name, github, linkedin } = validJSON;

describe("Test Employee", () => {
  beforeEach(() => {
    cy.readFile("cypress/fixtures/employee/url.txt").then((url) => {
      cy.visit(url);
    });
  });
  it("Should have a QRCode", () => {
    cy.get("svg").should("be.visible");
  });
  it("Should have the correct employee data", () => {
    // Check if the employee name is correct
    cy.get("h3").contains(name);

    // Check if the links in the buttons are correct
    cy.get(".buttonLink").each((buttonLink) => {
      cy.wrap(buttonLink)
        .invoke("attr", "href")
        .then((href) => {
          cy.wrap(href).should("satisfy", (link) => {
            const isValidLink = link === github || link === linkedin;
            return isValidLink;
          });
        });
    });
  });
});
