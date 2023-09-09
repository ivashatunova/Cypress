/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("http://localhost:3000/");

  // cy.get("body").then((body) => {
  //   if (body.find('.card-title.h5:contains("testName1")').length === 0) {
  //     cy.login("bropet@mail.ru", "123");
  //     cy.contains("Add new").click();
  //     cy.get("#title").type("testName1");
  //     cy.get("#description").type("testDescription1");
  //     cy.get("form > .ml-2").click();
  //     cy.contains("Log out").click();
  //   }
  // });
});

// describe("Test login books list app", () => {
//   it("first test", () => {
//     cy.login("bropet@mail.ru", "123");

//     cy.contains("Favorites").should("be.visible");
//   });

//   it("second test", () => {
//     cy.login("test@test.com", "test");
//   });
// });

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
