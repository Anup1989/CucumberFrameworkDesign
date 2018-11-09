package runner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.testng.annotations.BeforeClass;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin = { "json:target/RunnerTest/cucumber.json", "pretty",
		"html:target/RunnerTest/cucumber.html","com.cucumber.listener.ExtentCucumberFormatter" }, features = "src/test/resources/Features", glue = "StepDefinations", monochrome = true, dryRun = false

)

public class RunnerTest extends AbstractTestNGCucumberTests {

	@BeforeClass
	public static void Setup() {
		
		SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy_hhmmss");
		Date curDate = new Date();
		String strDate= sdf.format(curDate);
		String fileName=System.getProperty("user.dir")+"/target/Extent_Reports"+strDate+".html";
		File newfile= new File(fileName);
		
		
		ExtentCucumberFormatter.initiateExtentCucumberFormatter(newfile, false);
		
		ExtentCucumberFormatter.loadConfig(new File("src/test/resources/"));
		
		ExtentCucumberFormatter.addSystemInfo("Browser Name", "chrome");
		
		ExtentCucumberFormatter.addSystemInfo("Browser Version", "V69.0");
		
		ExtentCucumberFormatter.addSystemInfo("Selenium version", "v3.14.0");
		
		//You can add system information using a hash map
		
		Map systeminfo = new HashMap();
		systeminfo.put("Cucumber version", "v1.2.3");
		systeminfo.put("Extent Cucumber Reporter version", "v1.1.0");
		ExtentCucumberFormatter.addSystemInfo(systeminfo);
		
	}
	
}
