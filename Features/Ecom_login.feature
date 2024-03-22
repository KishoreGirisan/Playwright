Feature: Login to eCommerce page
    @Regression
    Scenario: Login
        Given login for "rahulshettyacademy" and "learning" passed
        When login is succesfull
        Then Verify customer landed on login page
    @login
    Scenario Outline: Login
        Given login for "<username>" and "<password>" passed
        Examples:
            | username            | password  |
            | rahulshettyacademy  | learning  |
            | test                | tester    |