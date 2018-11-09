$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Signup.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 4,
  "name": "To check The user is able to do sign up",
  "description": "",
  "id": "to-check-the-user-is-able-to-do-sign-up",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify if the user is able to sign up by providing valid details",
  "description": "",
  "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-is-able-to-sign-up-by-providing-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Open the browser with valid URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user lands on the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The user clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user lands on Sign in and sign up page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user cliks on Sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter the \u003cemailid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-is-able-to-sign-up-by-providing-valid-details;",
  "rows": [
    {
      "cells": [
        "emailid"
      ],
      "line": 18,
      "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-is-able-to-sign-up-by-providing-valid-details;;1"
    },
    {
      "cells": [
        "test1111@test.com"
      ],
      "line": 19,
      "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-is-able-to-sign-up-by-providing-valid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Verify if the user is able to sign up by providing valid details",
  "description": "",
  "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-is-able-to-sign-up-by-providing-valid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Open the browser with valid URL",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user lands on the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The user clicks on Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user lands on Sign in and sign up page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user cliks on Sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter the test1111@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefinations.open_the_browser_with_valid_URL()"
});
formatter.result({
  "duration": 248236586358,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefinations.the_user_lands_on_the_Home_page()"
});
formatter.result({
  "duration": 348540,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefinations.the_user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 30736511269,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefinations.the_user_lands_on_Sign_in_and_sign_up_page()"
});
formatter.result({
  "duration": 24792,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefinations.the_user_cliks_on_Sign_up()"
});
formatter.result({
  "duration": 33110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 14
    }
  ],
  "location": "SignupStepDefinations.enter_the_test_test_com(String)"
});
formatter.result({
  "duration": 4793579019,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefinations.close_the_browser()"
});
formatter.result({
  "duration": 413963175,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verify if the user has entered all the details",
  "description": "",
  "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-has-entered-all-the-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "The user lands on the Sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The user selects gender",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Enter \u003cfirstname\u003e and \u003clastname\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-has-entered-all-the-details;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "password"
      ],
      "line": 31,
      "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-has-entered-all-the-details;;1"
    },
    {
      "cells": [
        "Test",
        "User",
        "Test@1234"
      ],
      "line": 32,
      "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-has-entered-all-the-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Verify if the user has entered all the details",
  "description": "",
  "id": "to-check-the-user-is-able-to-do-sign-up;verify-if-the-user-has-entered-all-the-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "The user lands on the Sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The user selects gender",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Enter Test and User and Test@1234",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SignupStepDefinations.the_user_lands_on_the_Sign_up_page()"
});
formatter.result({
  "duration": 3903218715,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefinations.the_user_selects_gender()"
});
formatter.result({
  "duration": 10117942473,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"id_gender1\"}\n  (Session info: chrome\u003d70.0.3538.77)\n  (Driver info: chromedriver\u003d2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform\u003dMac OS X 10.14.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027Anups-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:cfa:f563:2d5:f541%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565386 (45a059dc425e08..., userDataDir: /var/folders/xt/40gbcj9d3q1...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.77, webStorageEnabled: true}\nSession ID: d1afbb5e463f95d13292ad943e511221\n*** Element info: {Using\u003did, value\u003did_gender1}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat PageActions.SignupPageActions.SelectGender(SignupPageActions.java:24)\n\tat StepDefinations.SignupStepDefinations.the_user_selects_gender(SignupStepDefinations.java:58)\n\tat ✽.Then The user selects gender(Signup.feature:26)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 29
    }
  ],
  "location": "SignupStepDefinations.enter_Test_and_User_and_Test(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
});