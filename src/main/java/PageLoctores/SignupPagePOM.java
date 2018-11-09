package PageLoctores;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Utils.SeleniumDriver;

public class SignupPagePOM extends SeleniumDriver {
	
	public SignupPagePOM() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[@title='Log in to your customer account']")
	public WebElement btnsignin;
	
	@FindBy(xpath="//input[@id='email_create']")
	public WebElement txtemailaddress;
	
	@FindBy(xpath="//button[@id='SubmitCreate']//span")
	public WebElement btncreateanaccount;
	
	@FindBy(id="id_gender1")
	public WebElement selectgender;
	
	@FindBy(xpath="//input[@id='customer_firstname']")
	public WebElement custfirstname;
	
	@FindBy(xpath="//input[@id='customer_lastname']")
	public WebElement custlastname;
	
	@FindBy(xpath="//input[@id='passwd']")
	public WebElement custpassword;
	
	@FindBy(xpath="//select[@id='days']")
	public WebElement dateofbirthDay;
	
	@FindBy(xpath="//select[@id='months']")
	public WebElement dateofbirthMonth;
	
	@FindBy(xpath="//select[@id='years']")
	public WebElement dateofbirthYear;
	
	@FindBy(xpath="//input[@id='newsletter']")
	public WebElement newsletter;
	
	@FindBy(xpath="//input[@id='company']")
	public WebElement custcompanyname;
	
	@FindBy(xpath="//input[@id='address1']")
	public WebElement custAddress;
	
	@FindBy(xpath="//input[@id='city']")
	public WebElement custCity;
	
	@FindBy(xpath="//select[@id='id_state']")
	public WebElement custState;
	
	@FindBy(xpath="//input[@id='postcode']")
	public WebElement custpostcode;
	
	
	

}
