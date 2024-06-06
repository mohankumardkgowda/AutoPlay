const { test, expect,chromium } = require('@playwright/test')//import
test.only('multiple page', async()=>{
   
const browzer=await chromium.launch()
const context=await browzer.newContext()

const page=await context.newPage()
const page1=await context.newPage()

const allpage=context.pages()
console.log(allpage.length)

await page.goto("https://www.demoblaze.com/")
await expect(page).toHaveURL("https://www.demoblaze.com/")

await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})

test('auto multiple page', async()=>{
   
    const browzer=await chromium.launch()
    const context=await browzer.newContext()
    
    const page1=await context.newPage()
    
    await page1.goto("https://www.demoblaze.com/")
    await expect(page1).toHaveTitle("STORE")
    
    const pagePromise=context.waitForEvent("page")
    await page1.locator("//a[normalize-space()='Samsung galaxy s6']").click()

    const newpage=await pagePromise
    await expect(newpage).toHaveTitle("STORE")
await page1.waitForEvent(3000)
await newpage.waitForEvent(3000)    
await browzer.close()
})
    
