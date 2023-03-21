/// <reference types="cypress" />

const inputs = ["name", "linkedin", "github"];

import validJSON from "../fixtures/home/validInputs.json";
import invalidJSON from "../fixtures/home/invalidInputs.json";

describe("Test Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should load the home page", () => {
    cy.get("form>h1").contains("QR Code Image Generator");
    cy.get("button").contains("Generate Image").should("be.visible");
  });
  it("should have all inputs", () => {
    cy.get("form>div>div").each((item, i) => {
      cy.wrap(item).within(() => {
        cy.get("input").should("be.visible");
        cy.get("input").should("have.attr", "name", inputs[i]);
      });
    });
  });
  it("Should fail to put invalid data in inputs", () => {
    // Name can't fail
    cy.get("input[name=name]").type("John Doe");

    // Insert data in all inputs
    Object.keys(invalidJSON).forEach((input) => {
      cy.get(`input[name=${input}]`).type(invalidJSON[input]);
    });

    // Click the generate button to trigger erros
    cy.get("button").contains("Generate Image").click();

    // Check if all inputs has errors
    Object.keys(invalidJSON).forEach((input) => {
      cy.get(`input[name=${input}]`)
        .parent()
        .parent()
        .children("span")
        .should("be.visible");
    });
  });
  it("Should sucess to insert valid data on inputs", () => {
    Object.keys(validJSON).forEach((input) => {
      cy.get(`input[name=${input}]`).type(validJSON[input]);
      cy.get("button").contains("Generate Image").click();
    });

    // Saves generated link to be used for another tests
    // 30 seconds to timeout
    cy.get("svg[name=QRCode]", { timeout: 1000 * 30 })
      .parent("a")
      .invoke("attr", "href")
      .then((link) => {
        cy.writeFile("cypress/fixtures/employee/url.txt", link as string);
      });
  });
});
// cy.get("svg[name=QRCode]").click();
