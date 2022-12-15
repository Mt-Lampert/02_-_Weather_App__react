Feature: Weatherapp

  As a user
  I want to use the Weatherapp
  In order to be informed about the weather in European cities

  Scenario: Landing Page
    When I open the Landing Page
    Then I see a Search Field with a button
    And I see nothing else.


  Scenario: Requesting a Known City
    When I type in a known European City
    And I fire off the request,
    Then I see a "loading..." message
    And then I see the temperature in the middle
    And I see a symbol representing the current weather in that City
    And I see the name of the city 
    And on the bottom of the page I see a footer
    And on the footer I see a symbol and the value for 
      * the weather condition
      * humidity
      * air pressure
      * wind speed

  Scenario: Requesting an Unknown City
    When I type in an unknown European City
    And I fire off the request,
    Then I see a "loading ...." message
    And then I see a 400 error message in the center of the screen
    And I see no footer at all.

