const { test, expect } = require('@playwright/test')//import
test('web_tables', async ({ page }) => { 
await page.goto('https://testautomationpractice.blogspot.com/')
const table= await page.locator("#productTable")
const column= await table.locator('thead tr th')
console.log("column",await column.count())
const row= await table.locator('tbody tr')
console.log("row",await row.count())
const box=  row.filter({
    has: page.locator('td'),
    hasText:'Product 1'//to click
})
box.locator('input').check()
await page.waitForTimeout(5000)




//to read value

for(let i=0; i<await row.count(); i++){
    const rowz=row.nth(i)
    const td=row.locator('td')
    for(let j=0; j<await td.count()-1; j++){
console.log(await td.nth(j).textContent())
    }
}
})