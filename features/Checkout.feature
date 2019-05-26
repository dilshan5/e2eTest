Feature: Business rules - Checkout
  In order to Order a product
  As a person
  I want to be able to Verify Checkout functionality

  Background:
    Given I am on Product Details Page
    When I select some color
    And I select some size
    When I have select quantity as 1
    And  I add to cart

  @important
  Scenario: Verify Checkout Product Summary on the Cart Page
    Given I have select quantity as 1
    And  I add to cart
    When I have navigate to Add to Cart page
    And  "Product Title" should be the same as added
    Then "Total Price" should be the same as added

  @important
  Scenario: Verify the error message for invalid voucher code
    Given I have navigate to Add to Cart page
    When I add voucher code as "NotAvailable"
    Then I should see the voucher error overlay with "Your voucher 'NotAvailable' was not approved."

  @important
  Scenario: Verify the Payment Type page
    Given I have navigate to Add to Cart page
    And I checkout until I reach the payment type page
    Then I should see "Login Form" section on payment type page
    And I should see "Create an Account" section on payment type page