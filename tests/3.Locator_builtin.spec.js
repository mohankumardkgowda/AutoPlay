const { test, expect } = require('@playwright/test')//import
test('Locator', async ({ page }) => {
  
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

const logo = await page.getByAltText('company-branding')//only for alt attribute
await expect(logo).toBeVisible()

await page.getByPlaceholder('Username').fill("Admin")//only for Placeholder attribute
const by_role = await page.getByRole('button', {type:"submit"})//by role like button, link(not prefered)
await expect(by_role).toBeVisible()
await page.getByText('Forgot your password?').click()// by linktext

})