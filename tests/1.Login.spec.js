const { test, expect } = require('@playwright/test')//import
test('Login', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/')
  const pageTitle = await page.title()
  console.log('Page Title:', pageTitle)
  await expect(page).toHaveTitle('STORE')
  //new merge added
  await page.waitForEvent(3000)
//workingmqqq
//
  //
}
)
