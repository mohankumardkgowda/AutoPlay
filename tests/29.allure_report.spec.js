//npm i -D @playwright/test allure-playwright             to inztall allure
//npm install -g allure-commandline --save-dev            to inztall cli for allure
//allure generate my-allure-results -o allure-report --clean    to generate allure report

//allure open allure-report      open allrre report

const { test, expect } = require('@playwright/test')//import
test('tezt1',async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await expect(page.locator("//input[@id='name']")).toBeEditable()
})

test('tezt2',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator("//input[@id='nameuuu']")).toBeEditable()
})


test('tezt3',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
})

test('tezt4',async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
})