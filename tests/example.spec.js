const { test, chromium } = require('@playwright/test') // import

const randomString = Math.random().toString(36).substring(2, 11) + '@example.com'
let browser
let context
let page

test.beforeAll(async () => {
    // Create browser and context
    browser = await chromium.launch()
    context = await browser.newContext()
    page = await context.newPage()

    // Register the user
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("//a[normalize-space()='Register']").click()
    await page.locator("(//div[@class='gender'])[1]").click()
    await page.locator("//input[@id='FirstName']").fill("abcxyz")
    await page.locator("//input[@id='LastName']").fill("abcxyz")
    await page.locator("//input[@id='Email']").fill(randomString)
    await page.locator("//input[@id='Password']").fill("abcxyz")
    await page.locator("//input[@id='ConfirmPassword']").fill("abcxyz")
    await page.locator("//input[@id='register-button']").click()
    await page.waitForTimeout(3000)
    await page.locator("//input[@value='Continue']").click()
    await page.locator("(//a[normalize-space()='Log out'])[1]").click()
    
    
})

test.beforeEach(async () => {
    // Log in before each test
    
    await page.locator("//a[normalize-space()='Log in']").click()
    await page.locator("//input[@id='Email']").fill(randomString)
    await page.locator("//input[@id='Password']").fill("abcxyz")
    await page.locator("//input[@value='Log in']").click()
})

test('pagedd', async () => {
    await page.locator("(//a[normalize-space()='Books'])[1]").click()
    await page.locator("//a[normalize-space()='Computing and Internet']").click()
    await page.goBack()
    await page.locator("//select[@id='products-orderby']").selectOption({ index: 3 })
    
})

test('pagecart', async () => {
    await page.locator("(//a[normalize-space()='Computers'])[1]").click()
    await page.locator("(//img[@title='Show products in category Desktops'])[1]").click()
    await page.locator("(//input[@value='Add to cart'])[1]").click()
})

test('page rt', async () => {
    await page.locator("(//a[normalize-space()='Computers'])[1]").click()
    await page.locator("(//img[@title='Show products in category Desktops'])[1]").click()
    await page.locator("(//input[@value='Add to cart'])[1]").click()
    await page.goBack()
})
test('copypazte', async () => {
    const ele=await page.locator("(//input[@id='small-searchterms'])[1]")
   await ele.fill("abc")
   await page.keyboard.press("Control+A")
    await page.goBack()
    await page.screen
    await page.setViewportSize({
        width: 300, 
        height: 101 
    })
})

test.afterEach(async () => {
    // Log out after each test
    await page.locator("(//a[normalize-space()='Log out'])[1]").click()
})

test.afterAll(async () => {
    // Close page and browser
    await page.close()
    await context.close()
    await browser.close()
})






















//npx playwright test --headed --project=chromium example.spec.js
//npx playwright show-trace test-results\example-has-title-chromium-retry1\trace.zip
//npx playwright codegen  
//npx playwright install   
//git push 
//git commit -m "fixed commit new"      
// git add .  
//allure open allure-report   
//allure generate my-allure-results -o allure-report --clean  
//npm install -g allure-commandline --save-dev     
//npm i -D @playwright/test allure-playwright  
//npx playwright test --headed 23.tag.spec.js --project=chromium -g "(?=.*@smoke)(?=.*@sanity)"
//npx playwright test --headed 23.tag.spec.js --project=chromium -g "@smoke" 
//npx playwright show-trace test-results\12.date_picker-date-picker-chromium\trace.zip
//npx playwright test --headed 19.group.spec.js --project=chromium -g 'begin' 
//git stash  
//git stash list   
//git stash pop   
//git fetch ex_01   
// git merge ex_01  
//git checkout main     
//git branch 
//git diff --staged    
//git push origin main
//git status  
//git rebase --continue 
//git pull --rebase origin main

