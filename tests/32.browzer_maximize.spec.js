/*const { test, expect } = require('@playwright/test')//import
test('maximize',async({page}) => {


  await page.setViewportSize({
        width: 1920,
        height: 1080
    })
    
    await page.evaluate(() => {//Fullscreen Browser (Chromium Only)
    document.documentElement.requestFullscreen();
});

await page.goto('https://testautomationpractice.blogspot.com/')

await expect(page.locator("//input[@id='name']")).toBeEditable()
})
*/
const { test, expect } = require('@playwright/test');

test('maximize', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Connect to the DevTools protocol
  const session = await page.context().newCDPSession(page);

  // Get the window ID
  const { windowId } = await session.send('Browser.getWindowForTarget');

  // Maximize the window
  await session.send('Browser.setWindowBounds', {
    windowId,
    bounds: {
      windowState: 'maximized'
    }
  });

  // Perform the test assertion
  await expect(page.locator("//input[@id='name']")).toBeEditable();
});

