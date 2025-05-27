# @regression @smoke @basket
# Feature: Modify items in the shopping basket
#     As a shopper, I want to update quantities and remove items in my cart

#     Background:
#         Given I am on the page practicesoftwaretesting page

#     Scenario: Modify items in the shopping basket
#         Given I have 1 unit of "Product A" in my basket
#         When I view the Basket page
#         And I increase the quantity of "Product A" to 2
#         Then the basket shows 2 units of "Product A" and the total price is updated
