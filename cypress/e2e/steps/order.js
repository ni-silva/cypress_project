import { When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { orderElements } from '../elements/order';

When("I add the following {string} to the cart", (items) => {
    cy.get(orderElements.itemCard)
    .contains(items)
    .parents(orderElements.itemDescription)
    .contains('button', 'Add to cart')
    .click();


});

And("go to the cart page", () => {
    cy.get(orderElements.cartButton).click();
    cy.url().should('include', '/cart.html');
});

And("I see the correct {string} in the cart", () => {

});

Then("I see the correct {string} in the cart", () => {

});
