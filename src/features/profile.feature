@regression @profile
Feature: Update user profile information
    As a logged-in user, I want to update my profile details

    Background:
        Given I am on the page practicesoftwaretesting page

    Scenario: Update user profile information
        When I navigate to my Profile page
        And I update my first name to "Jane" and phone to "+573009998877"
        Then I should see a confirmation "Profile updated successfully"
        And my Profile page displays first name "Jane" and phone "+573009998877"
