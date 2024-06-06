const { test, expect } = require('@playwright/test')//import
test('upload file', async ({ page }) => {
  
await page.goto('https://tus.io/demo')
await page.waitForSelector("//input[@id='P0-0']");

  // Upload the file
  await page.locator("//input[@id='P0-0']").setInputFiles('tests/Uploadfile/errorfile.pdf');
  //await page.locator("//input[@id='P0-0']").setInputFiles(['tests/Uploadfile/errorfile.pdf','tests\Uploadfile\textfile.pdf']);
//multiple file

await page.waitForTimeout(5000)
await page.locator("//input[@id='P0-0']").setInputFiles([]);//to remove file
await page.waitForTimeout(5000)
})