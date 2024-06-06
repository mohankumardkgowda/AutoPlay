const { test, expect } = require('@playwright/test')//import
test('assertion', async ({ page }) => {
  
await page.goto('https://demo.nopcommerce.com/register')



await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
await expect(page).toHaveTitle('nopCommerce demo store. Register')
const reg= await page.locator("//a[normalize-space()='Register']")
await expect(reg).toBeVisible()
await expect(reg).toBeEnabled()
//await expect(reg).toBeChecked()
//await expect(reg).toBeAttached()
//await expect(reg).toBeDefined()
await expect(reg).toHaveText('Automation')//exact value
await expect(reg).toContainText('Auto')//partial match
await expect(reg).toHaveValue('tezt@demo')//to verify valve that we have passed


})