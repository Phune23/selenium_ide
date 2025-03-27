// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const edge = require('selenium-webdriver/edge');
const service = new edge.ServiceBuilder('/usr/local/bin/msedgedriver').build();
const options = new edge.Options();

describe('TC2', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    // driver = await new Builder().forBrowser('chrome').build()
    driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .setEdgeOptions(options)
    .setEdgeService(service)
    .build();
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TC2', async function() {
    await driver.get("https://webchatonline.onrender.com/signup")
    await driver.manage().window().setRect(1920, 1032)
    await driver.findElement(By.css(".btn")).click()
    {
      const elements = await driver.findElements(By.xpath("//div[@role=\'status\']"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.xpath("//div[@role=\'status\']")).getText() == "Please fill in all fields")
  })
})
