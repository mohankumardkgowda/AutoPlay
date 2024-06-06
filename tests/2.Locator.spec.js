const { test, expect } = require('@playwright/test')//import
test('Locator', async ({ page }) => {
  
await page.goto('https://www.demoblaze.com/')
 //click on element
 await page.locator('//a[@id="itemc"][3]').click()//xpath
 await page.locator('id=login2').click()//id
 await page.locator('//input[@id="loginusername"]').fill("abc")
 await page.fill('id=loginpassword', 'xyz')// 1 more approch ************
 await page.locator('button[onclick="logIn()"]').click()//id
 const logout= await page.locator('//a[@id="logout2"]')
 await expect(logout).toBeVisible()
 await logout.click();


 await page.setViewportSize({
    width:
    hei
 })



 const link= await page.$$("//a")
 for(const linklizt of link)
    {
        const linktext= await linklizt.textContent()
        console.log(linktext)
    }
})


