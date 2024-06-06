const { test, expect } = require('@playwright/test')//import
test('input boxes', async ({ page }) => {
  
await page.goto('https://testautomationpractice.blogspot.com/')

const txt = await page.locator("//input[@id='name']")//text
await expect(txt).toBeEmpty()
txt.fill("Mohan")

//await page.locator("//input[@id='email']").fill("mohan@gmail.com")
const email = await page.locator("//input[@id='email']")//text
await expect(email).toBeEditable()
email.fill("mohan@gmail.com")

//await page.locator("//input[@id='phone']").fill("1234567890")
const num = await page.locator("//input[@id='phone']")//text
await expect(num).toBeEmpty()
num.fill("111111111111111")

//await page.locator("(//textarea[@id='textarea'])[1]").fill("yfyusbhfddsgfiudfb")
const txtfield = await page.locator("(//textarea[@id='textarea'])[1]")//text
await expect(txtfield).toBeEmpty()
txtfield.fill("yfyusbhfddsgfiudfb")

const malecheckbox = await page.locator("//input[@id='male']")//radio button
malecheckbox.check()
await expect(malecheckbox).toBeChecked()

const femalecheckbox = await page.locator("//input[@id='female']"); // Locate the radio button
await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

//await expect(femaleCheckbox).toBeUnchecked()

const box=await page.locator("//input[@id='sunday']")//check box
await box.check()
expect(box).toBeChecked()
expect(box.isChecked()).toBeTruthy()
await box.uncheck()

const f_box = await page.locator("//input[@id='friday']"); 
//expect(f_box).toBeUnchecked();
//await expect(f_box.isChecked()).toBeFalsy();
await f_box.check();


await page.locator("//select[@id='country']").selectOption(['India', 'japan', 'canada'])//dropdown
await page.waitForTimeout(5000)



})