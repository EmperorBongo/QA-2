
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

test("", async () => {
    
  await driver.get('http://localhost:3000/')
  
    
    await driver.findElement(By.name('movieTitle')).sendKeys("automation", Key.RETURN);
  
   
    await driver.wait(until.titleIs("automation - Google Search"), 1000);
  });
  
  test("", async () => {
    
    await driver.get('http://localhost:3000/')
  
  
    await driver.findElement(By.name('movieTile')).sendKeys("Pigeons Fly Home", Key.RETURN);
  
    const pigeonsFlyHome = await driver.findElement(By.xpath('//label[contains(),"Pigeons Fly Home")]'));
  expect(await pigeonsFlyHome.isDisplayed()).toBe(true);

  
    await driver.findElement(By.name('')).clear();
 
    await driver.findElement(By.name('')).sendKeys("", Key.RETURN);
   
    await driver.wait(until.titleIs(" - "), 1000);
  });
  
