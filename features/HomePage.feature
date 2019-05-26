Feature: Business rules
  In order to Search a product
  As a person
  I want to be able to verify Home Page functionality

  @important
  Scenario: Home Page - Valid Brand Search validation
    Given I visit the web site as a guest user
    When I search for "LUNDHAGS"
    And I should be in Brand Search Landing Page
    Then Page should have "LUNDHAGS" Logo

  Scenario: Home Page - Invalid Brand Search validation
    Given I visit the web site as a guest user
    When I search for "Denim"
    And I should be in Search Landing Page
    Then Page should have search keyword as "Denim"

