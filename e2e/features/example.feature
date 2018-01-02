@Facebook @Login
Feature: Login Facebook

  Scenario:
    When I go to "Facebook"."url"
    When I type "Facebook"."test_email" in "Facebook"."Email"
    When I type "Facebook"."test_password" in "Facebook"."Password"
    And I click "Facebook"."Login"
    And I wait for 5000 ms
    Then the title should be "Log in to Facebook | Facebook"
