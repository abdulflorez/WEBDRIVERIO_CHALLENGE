@regression @smoke @checkout
Feature: Successful checkout of items in basket
    As a shopper, I want to complete my purchase

    Background:
        Given I am on the page practicesoftwaretesting page
        
    Scenario: Successful checkout of items in basket
        Given I have at least one item in my basket
        When I proceed to checkout
        And I enter valid shipping and payment information
        And I confirm the order
        Then the order is placed successfully and I see an order number
