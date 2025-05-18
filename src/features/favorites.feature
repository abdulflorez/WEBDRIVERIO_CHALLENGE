@regression @favorites
Feature: Add and remove a favorite product
    As a shopper, I want to favorite items for later

    Background:
        Given I am on the page practicesoftwaretesting page

    Scenario: Add and remove a favorite product
        When I navigate to the product details page for "Product B"
        And I add "Product B" to my favorites
        Then "Product B" appears in my Favorites list
        When I remove "Product B" from my favorites
        Then "Product B" is no longer in my Favorites list
