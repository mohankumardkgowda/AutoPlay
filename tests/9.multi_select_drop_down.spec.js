const { test, expect } = require('@playwright/test')//import
test('multi select drop down', async ({ page }) => {
  
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator("//select[@id='colors']").selectOption(['Blue','Green','Red'])
await page.waitForTimeout(5000)


   

})
