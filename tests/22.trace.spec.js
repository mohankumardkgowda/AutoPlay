//npx playwright show-trace test-results\22.trace-trace-chromium\trace.zip
const { test, expect } = require('@playwright/test')//import
test('trace', async ({ page }) => { 
await page.goto('https://testautomationpractice.blogspot.com/')

const txt = await page.locator("//input[@id='name']")//text
await expect(txt).toBeEmpty()
await txt.fill("Mohan")
    })