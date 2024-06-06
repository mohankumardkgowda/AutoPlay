const { test, expect } = require('@playwright/test')//import
test('page image', async ({ page }) => { 
await page.goto('https://www.demoblaze.com/')
await page.screenshot({path:'tests/image_screenshot/'+Date.now()+'page.png'})
await page.waitForTimeout(5000)
    })

test('full page image', async ({ page }) => { 
await page.goto('https://www.demoblaze.com/')
await page.screenshot({path:'tests/image_screenshot/'+Date.now()+'full_page.png',fullPage:true})
await page.waitForTimeout(5000)
    })
    
test.only('element image', async ({ page }) => {
await page.goto('https://www.demoblaze.com/')
await page.locator("//div[@id='tbodyid']//div[1]//div[1]//aimg[1]").screenshot({path:'tests/image_screenshot/'+Date.now()+'element_page.png'})
await page.waitForTimeout(5000)
     })