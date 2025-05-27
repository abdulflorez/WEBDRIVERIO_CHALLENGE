@regression @smoke @productDetails
Feature: View product details and add to basket
    As a shopper, I want to see product details and add items to my cart

    Background:
        Given I am on the page practicesoftwaretesting page

    Scenario: View product details and add to basket
        When I click on the product titled "Thor Hammer"
        Then I should see the product details page for "Thor Hammer" with title, price, and description
