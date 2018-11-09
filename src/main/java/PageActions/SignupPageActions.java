package PageActions;

import PageLoctores.SignupPagePOM;
import Utils.SeleniumDriver;

public class SignupPageActions extends SeleniumDriver {

	SignupPagePOM sp = new SignupPagePOM();

	public void ClickonSignInbutton() {
		sp.btnsignin.click();
	}

	public void EnterEmailAddress(String emailid) {
		sp.txtemailaddress.sendKeys(emailid);

	}

	public void CreateaccountButton() {
		sp.btncreateanaccount.click();
	}

	public void SelectGender() {
		sp.selectgender.click();
	}

	public void EnterFirstName(String firstname) {
		sp.custfirstname.sendKeys(firstname);
		System.out.println("The first name has been entered");
	}

	public void EnterLastName(String lastname) {
		sp.custlastname.sendKeys(lastname);
		System.out.println("The last name has been entered");
	}
	
	public void EnterCustPassword(String password) {
		sp.custpassword.sendKeys(password);
		System.out.println("The password has been entered");
	}
}
