const { test, expect } = require('@playwright/test')//import
test('date picker', async ({ page }) => {
  
await page.goto('https://testautomationpractice.blogspot.com/')
//await page.locator("//input[@id='datepicker']").fill("05/19/2024")
await page.locator("//input[@id='datepicker']").click()
const year="2024"
const mnt="October"
const day="15"
while (true) {
    const currentmnt = await page.locator("//span[@class='ui-datepicker-month']").textContent();
    const currentyear = await page.locator("//span[@class='ui-datepicker-year']").textContent();

    if (currentyear === year && currentmnt === mnt) {
        break;
    }

    // Check if we need to navigate forward or backward in the calendar
    if (currentyear < year || (currentyear === year && new Date(`${mnt} 1, ${year}`) > new Date(`${currentmnt} 1, ${currentyear}`))) {
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click();
    } else {
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click();
    }
}

//await page.click(`//a[@class='ui-state-default'][text()='${day}']`);
//await page.click("//a[@class='ui-state-default'][text()='${day}']`)
  await page.click(`//a[@class='ui-state-default'][text()='${day}']`)

  
   
  //working  
  /*
const datez=await page.$$(".ui-state-default")
for(const dt of datez)
    {
        if(await dt.textContent()==day)
            {
                await dt.click()
                break
            }
    }*/
await page.waitForTimeout(5000)

})