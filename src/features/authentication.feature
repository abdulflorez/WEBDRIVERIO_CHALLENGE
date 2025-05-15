Feature: Authentication Sign Up and Sign In
  As a new user, I want to register an account And as a returning user, I want to log in

  Background:
    Given I am on the page "https://practicesoftwaretesting.com"

  Scenario: New user registration with mandatory fields
    When I navigate to the Sign Up page
    And I register with the following information:
      | firstName   | lastName | dob        | street       | postcode | city       | state     | country  | phone         | email                    | password       |
      | John        | Doe      | 01/01/1990 | 123 Elm St   | 12345    | Gotham     | NY        | Colombia | +573001112233 | user+${timestamp}@mail.com | P@ssw0rd!23    |
    Then I should see a confirmation that my account is created
    And I should be logged in to the application

  Scenario: Existing user login with credentials
    When I login with email "user@example.com" and password "P@ssw0rd!23"
    Then I should see my user dashboard or homepage
    And I should see a logout option available
