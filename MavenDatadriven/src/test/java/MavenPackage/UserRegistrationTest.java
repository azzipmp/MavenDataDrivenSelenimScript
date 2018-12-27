package MavenPackage;

import java.io.File;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;


//import junit.framework.Assert;

public class UserRegistrationTest {
	public WebDriver driver;
	String path = System.getProperty("user.dir");
	public String testdatapath=path+"\\src\\test\\resources\\Registration.xlsx";

	@BeforeTest

	public void openapplication() throws InterruptedException

	{

	System.setProperty("webdriver.chrome.driver", path+"\\src\\test\\resources\\chromedriver.exe");

	driver = new ChromeDriver();

	String url = "http://newtours.demoaut.com/";

	driver.manage().window().maximize();

	driver.get(url);

	Thread.sleep(6000);

	}

	@Test(priority=0)

	public void TestingtheuserRegistration() throws InterruptedException, IOException {

	String sheetName="Sheet1";

	File fle= new File(testdatapath);

	FileInputStream inputstream= new FileInputStream(fle);

	Workbook wb= new XSSFWorkbook(inputstream);

	Sheet sht=wb.getSheet(sheetName);

	int rowcount = sht.getLastRowNum()-sht.getFirstRowNum();

	System.out.println("rowcount:"+rowcount);

	for (int row=1;row<=rowcount;row++)

	{

	Row irow = sht.getRow(row);

	driver.findElement(By.linkText("REGISTER")).click();

	Thread.sleep(2000);

	driver.findElement(By.name("firstName")).sendKeys(irow.getCell(0).getStringCellValue());

	driver.findElement(By.name("lastName")).sendKeys(irow.getCell(1).getStringCellValue());

	driver.findElement(By.name("phone")).sendKeys(irow.getCell(2).getStringCellValue());

	driver.findElement(By.name("userName")).sendKeys(irow.getCell(3).getStringCellValue());

	driver.findElement(By.name("address1")).sendKeys(irow.getCell(4).getStringCellValue());

	driver.findElement(By.name("address2")).sendKeys(irow.getCell(5).getStringCellValue());

	driver.findElement(By.name("city")).sendKeys(irow.getCell(6).getStringCellValue());

	driver.findElement(By.name("state")).sendKeys(irow.getCell(7).getStringCellValue());

	driver.findElement(By.name("postalCode")).sendKeys(irow.getCell(8).toString());

	Select drpcountry = new Select(driver.findElement(By.name("country")));

	drpcountry.selectByVisibleText(irow.getCell(9).getStringCellValue());

	driver.findElement(By.name("email")).sendKeys(irow.getCell(10).getStringCellValue());

	driver.findElement(By.name("password")).sendKeys(irow.getCell(11).getStringCellValue());

	driver.findElement(By.name("confirmPassword")).sendKeys(irow.getCell(12).getStringCellValue());

	driver.findElement(By.name("register")).click();

	Thread.sleep(2000);

	String username=irow.getCell(10).getStringCellValue();

	String expected="Note: Your user name is "+username+".";

	String actual =driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[3]/td/p[3]/a/font/b")).getText();

	//Assert.assertEquals(actual, expected);

	// driver.findElement(By.linkText("SIGN-OFF")).click();

	// Thread.sleep(2000);

	}

	}

	@Test(timeOut=5000)

	public void Testingtheflightfunctionality() throws InterruptedException {

	//code for flight

	}

	@Test(priority=2)

	public void Testinghotelfunctionaliyy() throws InterruptedException

	{

	//code for hotel

	}

	@AfterTest

	public void closeapplication()

	{

	driver.close();

	driver.quit();

	}
}
