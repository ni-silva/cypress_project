import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { LOGIN_ELEMENTS } from '../elements/login';
import { PRODUCTS_ELEMENTS } from '../elements/products';

const validUsername = Cypress.env('valid_username');
const validPassword = Cypress.env('valid_password');
const invalidUsername = Cypress.env('invalid_username');
const invalidPassword = Cypress.env('invalid_password');

Given("the website is accessed", () => {
    cy.visit('/');
});

Given("I am logged in", () => {
    cy.login(validUsername, validPassword);
});

When("I fill out login page with a valid user", () => {
    cy.get(LOGIN_ELEMENTS.usernameInput).type(validUsername);
    cy.get(LOGIN_ELEMENTS.passwordInput).type(validPassword);
    cy.get(LOGIN_ELEMENTS.loginButton).click();
});

When("I fill out login page with an invalid user", () => {
    cy.get(LOGIN_ELEMENTS.usernameInput).type(invalidUsername);
    cy.get(LOGIN_ELEMENTS.passwordInput).type(invalidPassword);
    cy.get(LOGIN_ELEMENTS.loginButton).click();
});

When("I visit the products page", () => {
    cy.visit('/inventory.html', { failOnStatusCode: false });

});

Then("I should be logged in", () => {
    cy.get(PRODUCTS_ELEMENTS.title).contains('Products');
});

Then("I should get an error message", () => {
    cy.get(LOGIN_ELEMENTS.errorMessage).contains('Epic sadface: Username and password do not match any user in this service')
});

Then("I should get error message I am not logged in", () => {
    cy.get(LOGIN_ELEMENTS.errorMessage).contains('You can only access \'/inventory.html\' when you are logged in').should('be.visible');
});

And("not be logged in", () => {
    cy.get(LOGIN_ELEMENTS.loginButton).should('be.visible');
});