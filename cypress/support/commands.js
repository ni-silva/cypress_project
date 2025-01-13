import { loginElements } from '../e2e/elements/login';

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.get(loginElements.usernameInput).type(email);
    cy.get(loginElements.passwordInput).type(password);
    cy.get(loginElements.loginButton).click();
    cy.url().should('include', '/inventory.html');
});
