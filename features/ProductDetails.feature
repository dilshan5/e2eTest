Feature: Business rules - PDP
  In order to Search a product
  As a person
  I want to be able to verify product details

  @important
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