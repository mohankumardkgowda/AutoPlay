//retries: 1,  write in config file once it fail again it executed , uzed to manage flakinezz(pazz again fail ...) tezt in execution
//npx Playwright test --headed 30.retry.spec.js --project=chromium --retries=3 
//in config file or cli
const { test, expect } = require('@playwright/test')//import
test('tezt1',async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await expect(page.locator("//input[@id='name']")).toBeEditable()
})

test.only('tezt2',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator("//input[@id='nameuuu']")).toBeEditable()
})

test('tezt3',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
})

test('tezt4',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
})