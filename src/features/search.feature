# @regression @search
# Feature: Search for an exact product
#     As a shopper, I want to find a product by its exact name

#     Background:
#         Given I am on the page practicesoftwaretesting page

#     Scenario: Search by exact product name returns the product
#         When I search for "Product C" by its exact name
#         Then the results show only "Product C"
#         When I click on "Product C" in the results
#         Then I land on the Product C details page
