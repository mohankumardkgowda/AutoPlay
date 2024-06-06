const { test, expect } = require('@playwright/test')//import
let page;

test.beforeAll(async ({ page }) => {
   // page= await browser.newPage()
await page.goto('https://www.demoblaze.com/index.html')
await page.locator("//a[@id='login2']").click()
await page.locator("//input[@id='loginusername']").fill("pavanol")
await page.locator("//input[@id='loginpassword']").fill("test@123")
await page.locator("//button[@onclick='logIn()']").click()

})
test.afterAll(async() => {

await page.locator("//a[@id='logout2']").click()
await page.waitForTimeout(5000)

})

test('tag_m_hook_product count', async() => {
  
    const product= await page.locator("//h4[@class='card-title']")
    expect(product).toHaveCount(9)

    })
    
test('tag_m_hook add to cart', async() => {
    
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()
    
    })
