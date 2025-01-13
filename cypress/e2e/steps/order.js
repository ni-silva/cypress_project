import { When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { ORDER_ELEMENTS } from '../elements/order';
import { CHECKOUT_ELEMENTS } from '../elements/checkout';
import { faker } from '@faker-js/faker';

When("I add the following {string} to the cart", (items) => {
    cy.get(ORDER_ELEMENTS.itemCard)
    .contains(items)
    .parents(ORDER_ELEMENTS.itemDescription)
    .contains('button', 'Add to cart')
    .click();
});

When("I go to checkout and fill the form with my personal data", () => {
    cy.get(CHECKOUT_ELEMENTS.checkoutButton).contains('Checkout').click();
    cy.url().should('include', '/checkout-step-one.html');

    let fakeFirstName = faker.person.firstName();
    let fakeLastName = faker.person.lastName();
    let fakeZipCode = faker.location.zipCode();
    cy.get(CHECKOUT_ELEMENTS.firstNameInput).type(fakeFirstName);
    cy.get(CHECKOUT_ELEMENTS.lastNameInput).type(fakeLastName);
    cy.get(CHECKOUT_ELEMENTS.zipCodeInput).type(fakeZipCode);
    cy.get(CHECKOUT_ELEMENTS.continueButton).contains('Continue').click();
    cy.url().should('include', '/checkout-step-two.html');
});

When("I finalize the order", () => {
    cy.url().should('include', '/checkout-step-two.html');
    cy.get(CHECKOUT_ELEMENTS.finishButton).contains('Finish').click();
    cy.url().should('include', '/checkout-complete.html');
});

And("go to the cart page", () => {
    cy.get(ORDER_ELEMENTS.cartButton).click();
    cy.url().should('include', '/cart.html');
});

Then("I see the correct {string} in the cart", (item) => {
    cy.get(ORDER_ELEMENTS.itemCard).contains(item).should('be.visible');
});

Then("I check the {string}, {string}, {string} and {string} values at checkout are correct", (item, price, tax, total) => {
    cy.url().should('include', '/checkout-step-two.html');
    cy.get(CHECKOUT_ELEMENTS.itemCard).contains(item).should('be.visible');
    cy.get(CHECKOUT_ELEMENTS.itemCard).contains(price).should('be.visible');
    cy.get(CHECKOUT_ELEMENTS.subtotalField).contains(price).should('be.visible');
    cy.get(CHECKOUT_ELEMENTS.taxField).contains(tax).should('be.visible');
    cy.get(CHECKOUT_ELEMENTS.totalField).contains(total).should('be.visible');
});

Then("I should see the {string} final message", (message) => {
    cy.url().should('include', '/checkout-complete.html');
    cy.get(CHECKOUT_ELEMENTS.completeText).contains(message).should('be.visible');
});
