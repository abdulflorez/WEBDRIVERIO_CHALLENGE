@regression @profile
Feature: Update user profile information
    As a logged-in user, I want to update my profile details

    Background:
        Given I am on the page practicesoftwaretesting page
        And I go to the Sign In page
        And I login with email "userToTest@mail.com" and password "Cl@veParaTest!23"

    Scenario: Update user profile information
        When I go to my Profile page
        And I update my profile information:
            | field     | value |
            | firstName | Janet |
        Then I should see a confirmation "Your profile is successfully updated!"