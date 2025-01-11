import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("the website is accessed", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.title(true);
});
