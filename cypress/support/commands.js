import { LOGIN_ELEMENTS } from '../e2e/elements/login';

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.get(LOGIN_ELEMENTS.usernameInput).type(email);
    cy.get(LOGIN_ELEMENTS.passwordInput).type(password);
    cy.get(LOGIN_ELEMENTS.loginButton).click();
    cy.url().should('include', '/inventory.html');
});
