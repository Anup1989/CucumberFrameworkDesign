package Utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver {

	public static SeleniumDriver seleniumdriver;

	public static WebDriver driver;

	public static WebDriverWait waitDriver;

	public static Properties prop;

	public final static int TIMEOUT = 30;
	public final static int PAGE_LOAD_TIMEOUT = 10;

	public SeleniumDriver() {

		prop = new Properties();

		try {
			FileInputStream ip = new FileInputStream(
					"/Users/anupkapale/eclipse-workspace/CucumberFrameworkDesign/src/main/java/Utils/Config.Properties");
			try {
				prop.load(ip);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.setProperty("webdriver.chrome.driver", "/Users/anupkapale/Downloads/chromedriver");

		driver = new ChromeDriver();

		waitDriver = new WebDriverWait(driver, TIMEOUT);

		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);

	}

	public static void OpenUrl() {
		driver.get(prop.getProperty("url"));
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public static void SetUpDriver() {

		if (seleniumdriver == null) {
			seleniumdriver = new SeleniumDriver();
		}

	}

	public static void tearDown() {
		if (driver != null) {
			driver.close();
			driver.quit();
		}
		seleniumdriver = null;
	}

}
