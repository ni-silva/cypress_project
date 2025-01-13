import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { loginElements } from '../elements/login';
import { products } from '../elements/products';

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
    cy.get(loginElements.usernameInput).type(validUsername);
    cy.get(loginElements.passwordInput).type(validPassword);
    cy.get(loginElements.loginButton).click();
});

When("I fill out login page with an invalid user", () => {
    cy.get(loginElements.usernameInput).type(invalidUsername);
    cy.get(loginElements.passwordInput).type(invalidPassword);
    cy.get(loginElements.loginButton).click();
});

Then("I should be logged in", () => {
    cy.get(products.title).contains('Products');
});

Then("I should get an error message", () => {
    cy.get(loginElements.errorMessage).contains('Epic sadface: Username and password do not match any user in this service')
});

And("not be logged in", () => {
    cy.get(loginElements.loginButton).should('be.visible');
});