//npx Playwright test --headed 19.group.spec.js --project=chromium
const { test, expect } = require('@playwright/test')//import

test.beforeAll(async() => {
    console.log('beforeAll')
})
test.afterAll(async() => {
    console.log('afterAll')
})
test.beforeEach(async() => {
    console.log('beforeEach')
})
test.afterEach(async() => {
    console.log('afterEach')
})

test.describe('begin', ()=>{
test('grouping1', async ({ page }) => {
console.log('tezt1')
})
test('grouping2', async ({ page }) => {
console.log('tezt2')
})
})
test.describe('complete', ()=>{
test('grouping3', async ({ page }) => {
console.log('tezt3')
})   
test('grouping4', async ({ page }) => {
console.log('tezt4')
})
})