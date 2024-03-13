Feature: Userinterface

  Background: Navigate to Game page
    Given User opens Home page
    Then Home page is opened
    When User goes to Game page
    Then Card 1 is displayed

  Scenario: Test case 1
    When Log in to the Card 1
    Then Card 2 is displayed
    When User unselect all interests
    And User choose 2 random interests

  Scenario: Test case 2
    When User accept cookies
    Then Cookies banner is not displayed

  Scenario: Test case 3
    When User hides Help form
    Then Help form is hidden

  Scenario: Test case 4
    Then Timer starts from 0
