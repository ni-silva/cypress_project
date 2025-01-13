Feature: Order and Checkout

    Scenario Outline: Successfully order different items multiple times from the store
        Given I am logged in
        When I add the following "<Item>" to the cart
        And go to the cart page
        Then I see the correct "<Item>" in the cart
        And I see the correct "<Price>" in the cart

        When I go to checkout and fill the form with my personal data
        Then I check the "<Item>", "<Price>", "<Tax>" and "<Total>" values at checkout are correct

        When I finalize the order
        Then I should see the "Thank you for your order!" final message
        Examples:
            | Item                     | Price  | Tax   | Total  |
            | Sauce Labs Backpack      | $29.99 | $2.40 | $32.39 |
            | Sauce Labs Bolt T-Shirt  | $15.99 | $1.28 | $17.27 |
            | Sauce Labs Fleece Jacket | $49.99 | $4.00 | $53.99 |
