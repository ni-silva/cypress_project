Feature: Order

    Scenario Outline: Successful order multiple items from the store
        Given I am logged in
        When I add the following "<Item>" to the cart
        And go to the cart page
        Then I see the correct "<Item>" in the cart
        And I see the correct "<Price>" in the cart
        Examples:
            | Item                     | Price  |
            | Sauce Labs Backpack      | $29.99 |
            | Sauce Labs Bolt T-Shirt  | $15.99 |
            | Sauce Labs Fleece Jacket | $49.99 |
