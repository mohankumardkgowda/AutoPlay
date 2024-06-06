const { test, expect } = require('@playwright/test')//import
test('soft assertion', async ({ page }) => {
  
await page.goto('https://demo.nopcommerce.com/register')



await expect(page).toHaveURL('https://demo.nopcommerce.com/register')


//await expect(page).toHaveURL('https://demo.nopcotttttttttmmerce.com/register')

await expect.soft(page).toHaveURL('https://demo.nopcotttttttttmmerce.com/register')
await expect.soft(page).toHaveTitle('nopCommtttttterce demo store. Register')
console.log('abc')
console.log('xyz')
//await expect.soft(page.getByTestId('status')).toHaveText('Success')
//await expect.soft(page.getByTestId('eta')).toHaveText('1 day')


})