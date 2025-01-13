Feature: Login

    Scenario: Successful login
        Given the website is accessed
        When I fill out login page with a valid user
        Then I should be logged in

    Scenario: Fail Login
        Given the website is accessed
        When I fill out login page with an invalid user
        Then I should get an error message
        And not be logged in

    Scenario: Try to access the products page without being logged in must be blocked
        Given the website is accessed
        When I visit the products page
        Then I should get error message I am not logged in
