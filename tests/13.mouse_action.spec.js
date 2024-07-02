const { test, expect } = require('@playwright/test')//import
test('mouze', async ({ page }) => {
  
await page.goto('https://demo.opencart.com/')



const ele= await page.locator("//a[normalize-space()='Desktops']")
const element= await page.locator("//a[normalize-space()='PC (0)']")
ele.hover()
element.hover()

await ele.click({ele:'right'})

await page.waitForTimeout(5000)
})



test.only('mouze double click', async ({ page }) => {
  
    await page.goto('https://testautomationpractice.blogspot.com/')
    const cli= await page.locator("//button[normalize-space()='Copy Text']")
    
    await cli.dblclick()
    

    await page.waitForTimeout(5000)
    })