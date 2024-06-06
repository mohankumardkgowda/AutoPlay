const { test, expect } = require('@playwright/test')//import
test.only('tezt1',async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await expect(page.locator("//input[@id='name']")).toBeEditable()
})

test('tezt2',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
})

test('tezt3',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
})

test('tezt4',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
})