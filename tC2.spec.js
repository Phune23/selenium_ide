const { Builder, By, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const assert = require('assert');

describe('TC2', function () {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function () {
    let service = new edge.ServiceBuilder('/usr/local/bin/msedgedriver'); // 🔹 Đặt đường dẫn EdgeDriver
    let options = new edge.Options();
    options.addArguments("--headless=new");  
    options.addArguments("--disable-gpu"); 
    options.addArguments("--no-sandbox");

    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeService(service) // 🔹 Đặt Service
      .setEdgeOptions(options)
      .build();

    vars = {};
  });

  afterEach(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it('TC2', async function () {
    await driver.get("https://webchatonline.onrender.com/signup");
    await driver.manage().window().setRect(1920, 1032);
    await driver.findElement(By.css(".btn")).click();
    
    const elements = await driver.findElements(By.xpath("//div[@role='status']"));
    assert(elements.length > 0, "Không tìm thấy thông báo lỗi");
    
    const statusText = await driver.findElement(By.xpath("//div[@role='status']")).getText();
    assert.strictEqual(statusText, "Please fill in all fields", "Thông báo lỗi không đúng");
  });
});
