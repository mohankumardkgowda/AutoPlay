const { test, expect } = require('@playwright/test')//import
test('keyboard action', async ({ page }) => {
  
await page.goto('https://testautomationpractice.blogspot.com/')
const ele= await page.locator("//input[@id='name']")
await ele.fill("welcome")

await page.keyboard.press("Control+A")//multiple key
await page.keyboard.press("Control+C")
await page.keyboard.down("Tab")//1 key
await page.keyboard.up("Tab")
const location= await page.locator("//input[@id='email']")
await page.keyboard.press("Control+V")



})