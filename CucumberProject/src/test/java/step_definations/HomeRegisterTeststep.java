package step_definations;

import org.openqa.selenium.WebDriver;

import java.util.HashMap;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

import step_definations.Hooks;
import cucumber.api.java.en.Then;


public class HomeRegisterTeststep {
	//WebDriver driver; 
	 String url = "http://newtours.demoaut.com/";
	
	// String ActualValue;
	 
	 public WebDriver driver;
	  


	    public HomeRegisterTeststep()
	    {
	      driver=Hooks.driver;
	       
	    }

	 
	 @Given("^Navigate to the flight application$")
	 public void navigatetotheflightapplication() throws InterruptedException, Throwable
		{
			System.out.println("navigatetoregisterpage method");
	    	System.setProperty("webdriver.chrome.driver", "C:\\chromedriver\\chromedriver.exe");
	 	   
	   // 	driver = new ChromeDriver();
	  
	    //	driver.manage().window().maximize();
	    	driver.get(url);
		
		}
	 @When("^I click on register link$")
	 public void clickonregisterlink() throws InterruptedException
	 {

		 System.out.println( "clickregisterlink");
			driver.findElement(By.linkText("REGISTER")).click();
		Thread.sleep(2000);
	 
	 }
	 @Then("^Register page should display$")
	 public void verifyregisterpagedispay()
	 {
		 String ExpectedValue = "Register: Mercury Tours";
		String ActualValue= driver.getTitle();
		System.out.println( "expected"+ExpectedValue);
		System.out.println( "actual"+ActualValue);
		Assert.assertEquals(ExpectedValue, ActualValue);
	 }
	 
	 @And("^Close the browser$")
	 public void closethebrowser()
	 {
		 driver.close();
		 driver.quit();
	 }

	  
}
