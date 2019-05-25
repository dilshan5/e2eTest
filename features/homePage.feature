Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

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

  Scenario: As a customer I want to learn more about the product I am viewing
    Given I visit the web site as a guest user
    When I search for "LUNDHAGS"
    And I click on any Product Thumbnail with user reviews in search results page
    Then I should be redirected to PDP page
    And I should see product details
      | PRODUCT DETAILS       |
      | Product Description   |
      | Product Price         |
      | Product Weight        |
      | Product return policy |

