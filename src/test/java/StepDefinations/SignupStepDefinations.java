package StepDefinations;

import PageActions.SignupPageActions;
import Utils.SeleniumDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SignupStepDefinations extends SeleniumDriver {
	
	SignupPageActions sp = new SignupPageActions();
	
	
	@Given("^Open the browser with valid URL$")
	public void open_the_browser_with_valid_URL() throws Throwable {
		
		SeleniumDriver.OpenUrl();
	}

	@Then("^the user lands on the Home page$")
	public void the_user_lands_on_the_Home_page() throws Throwable {
		
		
		
	}

	@Then("^The user clicks on Sign in button$")
	public void the_user_clicks_on_Sign_in_button() throws Throwable {
		sp.ClickonSignInbutton();
	}

	@Then("^The user lands on Sign in and sign up page$")
	public void the_user_lands_on_Sign_in_and_sign_up_page() throws Throwable {
		
	}

	@Then("^The user cliks on Sign up$")
	public void the_user_cliks_on_Sign_up() throws Throwable {
		
	}

	@Then("^Enter the test(\\d+)@test\\.com$")
	public void enter_the_test_test_com(String emailid) throws Throwable {
		sp.EnterEmailAddress(emailid);
		
		System.out.println("The user has enetered email address");
		sp.CreateaccountButton();
		
		System.out.println("The user has created an account");
	}
	
	@Given("^The user lands on the Sign up page$")
	public void the_user_lands_on_the_Sign_up_page() throws Throwable {
	   
	}

	@Then("^The user selects gender$")
	public void the_user_selects_gender() throws Throwable {
	  sp.SelectGender();
	}

	@Then("^Enter Test and User and Test@(\\d+)$")
	public void enter_Test_and_User_and_Test(String  firstname, String lastname, String password) throws Throwable {
	  sp.EnterFirstName(firstname);
	  sp.EnterLastName(lastname);
	  sp.EnterCustPassword(password);
	}

	
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    SeleniumDriver.tearDown();
	}

}
