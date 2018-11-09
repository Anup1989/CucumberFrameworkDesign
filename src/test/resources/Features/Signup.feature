#Author: your.email@your.domain.com


Feature: To check The user is able to do sign up


 
  Scenario Outline: Verify if the user is able to sign up by providing valid details
    Given Open the browser with valid URL
    Then the user lands on the Home page
    Then The user clicks on Sign in button
    And The user lands on Sign in and sign up page
    Then The user cliks on Sign up
    And Enter the <emailid>
    And close the browser
   
    Examples: 
      | emailid|
      | test1111@test.com|
      
      
      
 Scenario Outline: Verify if the user has entered all the details
 
 Given The user lands on the Sign up page
 Then The user selects gender
 And Enter <firstname> and <lastname> and <password>
 
 
Examples:
|firstname	|lastname 	|password 	|
|Test 			|User				|Test@1234	|