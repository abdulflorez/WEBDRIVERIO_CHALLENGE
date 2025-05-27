@regression @search
Feature: Search for an exact product
    As a shopper, I want to find a product by its exact name

    Background:
        Given I am on the page practicesoftwaretesting page
    @only
    Scenario: Search by exact product name returns the product
        When I search for "hammer" by its exact name
        Then A subtitle "Searched for: hammer" is displayed
        And the results show only product card "hammer" world
