const { test, expect } = require('@playwright/test')//import
test.only('alert ok', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
page.on('dialog', async dialog=>{//enabling dialog window handler
    expect(dialog.type()).toContain("alert")
    await dialog.accept()
})
await page.waitForTimeout(5000)
await page.click("//button[normalize-space()='Alert']")//open alert button
await page.waitForTimeout(5000)
}
)
test('alert ok and cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    //enabling dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Press a button!")
        //await dialog.accept()
        await dialog.dismiss()
    })
    await page.click("//button[normalize-space()='Confirm Box']")
    await page.waitForTimeout(5000)   
    }
    )
    
    test('prompt dialog', async ({ page }) => {
  
        await page.goto('https://testautomationpractice.blogspot.com/')
        //enabling dialog window handler
        page.on('dialog', async dialog=>{
            expect(dialog.type()).toContain("prompt")
            expect(dialog.message()).toContain("Please enter your name:")
            await dialog.accept("abc")
            
        })
        
        await page.click("//button[normalize-space()='Prompt']")
      //  await expect(page.locator("//p[@id='demo']")).toHaveText("How are you today?")
        await expect(page.locator("//p[@id='demo']")).toContainText("How are you today?")
        await page.waitForTimeout(5000)
           
        
        }
        )
    