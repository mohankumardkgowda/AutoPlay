const { test, expect } = require('@playwright/test')//import
test('drap & drop', async ({ page }) => {
  
await page.goto('https://testautomationpractice.blogspot.com/')
const ele= await page.locator("//div[@id='draggable']")
const location= await page.locator("//div[@id='droppable']")

await ele.dragTo(location)


await page.waitForTimeout(5000)
})