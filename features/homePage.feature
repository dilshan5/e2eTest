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

  Scenario: Verify Checkout Product Summary on the Cart Page
    Given I am on Product Details Page
    When I select some color
    And I select some size
    When I select quantity as 1
    And  I add to cart
    When I select quantity as 1
    And  I add to cart
    When I navigate to Add to Cart page
    And  "Product Title" should be the same as added
    Then "Total Price" should be the same as added

  Scenario: Verify the error message for invalid voucher code
    Given I am on Product Details Page
    When I select some color
    And I select some size
    When I select quantity as 1
    And  I add to cart
    And I navigate to Add to Cart page
    When I add voucher code as "NotAvailable"
    Then I should see the voucher error overlay with "Your voucher 'NotAvailable' was not approved."

  Scenario: Verify the Payment Type page
    Given I am on Product Details Page
    When I select some color
    And I select some size
    When I select quantity as 1
    And  I add to cart
    And I navigate to Add to Cart page
    And I checkout until I reach the payment type page
    Then I should see "Login Form" section on payment type page
    And I should see "Create an Account" section on payment type page