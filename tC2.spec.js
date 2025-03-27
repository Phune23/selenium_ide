const { Builder, By, Key, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const assert = require('assert');

describe('TC2', function () {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function () {
    let service = new edge.ServiceBuilder('/usr/local/bin/msedgedriver');
    let options = new edge.Options();
    
    // ✅ Thêm tham số --user-data-dir để tránh xung đột
    options.addArguments("--user-data-dir=/tmp/edge_user_data");

    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeService(service)
      .setEdgeOptions(options)  // ✅ Thêm tùy chọn vào Edge
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
    assert(elements.length);
    assert(await driver.findElement(By.xpath("//div[@role='status']")).getText() == "Please fill in all fields");
  });
});
