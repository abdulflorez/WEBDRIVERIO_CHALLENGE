@smoke @regression @signup-in
Feature: Authentication Sign Up and Sign In
  As a new user, I want to register an account And as a returning user, I want to log in

  Background:
    Given I am on the page practicesoftwaretesting page

  Scenario: New user registration with mandatory fields
    When I go to the Sign Up page
    And I register with the following information:
      | firstName | lastName | dob        | street     | postcode | city   | state | country  | phone        | email               | password         |
      | John      | Doe      | 01/01/1990 | 123 Elm St | 12345    | Gotham | NY    | Colombia | 573001112233 | userToTest@mail.com | Cl@veParaTest!23 |
    Then I should be redirected to the Sign In page

  Scenario: Existing user login with credentials
    When I go to the Sign In page
    And I login with email "userToTest@mail.com" and password "Cl@veParaTest!23"
    Then I should see my dashboard
    And I should see a dropdown with the username "John Doe" that displays the following information:
      | My account   |
      | My favorites |
      | My profile   |
      | My invoices  |
      | My messages  |
      | Sign out     |