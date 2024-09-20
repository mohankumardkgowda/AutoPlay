const { test, expect } = require('@playwright/test')//import
test('page image', async ({ page }) => { 
page.goto("https://www.facebook.com/")
await page.locator("//input[@name='email']").fill("abc")
await page.locator("//input[@type='password']").fill("xyz")
await page.locator("//button[@name='login']").click()
00000000000
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

})