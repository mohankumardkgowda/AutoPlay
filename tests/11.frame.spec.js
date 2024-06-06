const { test, expect } = require('@playwright/test')//import
test('alert ok', async ({ page }) => {
  
await page.goto('https://testautomationpractice.blogspot.com/')
const allframe=await page.frames()//count total frame
console.log("number of frame",allframe.length)

//move action to frame and perform action
await page.frameLocator("//div[@class='form_table']").locator("//input[@id='name']").fill("abc")




})