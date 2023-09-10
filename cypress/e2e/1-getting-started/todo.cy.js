/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/");
});

describe("Test favourite books list app", () => {
  it("Add new book and then add to favourite", () => {
    cy.login("bropet@mail.ru", "123");

    cy.addBook("testName1", "testDescription1");

    cy.addToFavorite();
    cy.contains("Delete from favorite").should("be.visible");

    cy.logout();
  });

  it("Delete book from favourites", () => {
    cy.login("bropet@mail.ru", "123");

    cy.contains("Delete from favorite").should("be.visible");
    cy.contains("Delete from favorite").click();
    cy.contains("Add to favorite").should("be.visible");

    cy.logout();
  });

  it("Add new book and then add to favourite", () => {
    cy.login("bropet@mail.ru", "123");

    cy.addToFavorite();
    cy.contains("Delete from favorite").should("be.visible");

    cy.contains("Favorites").click();
    cy.contains("Delete from favorite").should("be.visible");
    cy.contains("Delete from favorite").click();
    cy.contains("Please add some book").should("be.visible");

    cy.logout();
  });
});
