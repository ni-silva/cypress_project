import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { loginElements } from '../elements/login';
import { products } from '../elements/products';

Given("the website is accessed", () => {
    cy.visit('/');
    cy.title(true);
});

When("I fill out login page with a valid user", () => {
    cy.get(loginElements.usernameInput).type(Cypress.env('valid_username'));
    cy.get(loginElements.passwordInput).type(Cypress.env('valid_password'));
    cy.get(loginElements.loginButton).click();
});

When("I fill out login page with an invalid user", () => {
    cy.get(loginElements.usernameInput).type(Cypress.env('invalid_username'));
    cy.get(loginElements.passwordInput).type(Cypress.env('invalid_password'));
    cy.get(loginElements.loginButton).click();
});

Then("I should be logged", () => {
    cy.get(products.title).contains('Products');
});

Then("I should get an error message", () => {
    cy.get(loginElements.errorMessage).contains('Epic sadface: Username and password do not match any user in this service')
});

And("not be logged in", () => {
    cy.get(loginElements.loginButton).should('be.visible');
});