const { test, expect } = require('@playwright/test')//import
test('drop_down', async ({ page }) => {//contain select tag
  
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator("//select[@id='country']").selectOption('India')
await page.w

await page.locator("//select[@id='country']").selectOption({index:5})//index, not prefered
await page.waitForTimeout(5000)

await page.locator("//select[@id='country']").selectOption(['India', 'japan', 'canada'])//dropdown
await page.waitForTimeout(5000)


const opt= await page.locator("#country option")
await expect(opt).toHaveCount(10)//validate count


const selectElement = await page.$$("#country option"); 
console.log("Number of options:", selectElement.length);//print count


const content = await page.locator("#country").textContent()
await expect(content.includes('India')).toBeTruthy()//validate value


const Element = await page.$$("#country option"); 
let status=false
for(const Elementz of Element)
    {
        console.log(await Elementz.textContent());//print element
let elementvalue=await Elementz.textContent()
        if(elementvalue.includes('India'))
            {
                console.log("included")
                status=true
                break
            }
            expect(status).toBeTruthy
    }

})

// bootstrap multi select dropdown
test('bootstrap multi select dropdown', async ({ page }) => {//not contain select tag
await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
await page.locator('.multiselect').click()

const multioptions=await page.$$('ul>li label')
for(let multioption of multioptions)
    {
        const value = await multioption.textContent()
        if(value.includes('Angular') ||value.includes('Java'))
            {
                await multioption.click()
            }
    }
})


// Handle Auto suggest/Auto complete dropdown
test('Handle Auto suggest/Auto complete dropdown', async ({ page }) => {//contain select tag
    await page.goto('https://www.redbus.in/')
    await page.locator("//input[@id='src']").fill('Delhi')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    
    const city=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    for(let opt of city){
        const vlv=await opt.textContent()
    //console.log(vlv)
    if(vlv.includes('Mayur Vihar')){
        await page.waitForTimeout(5000)
await opt.click()

break
    }
    }
     })
   
     


     //Handle hidden items in Dropdown
test.only('Handle hidden items in Dropdown', async ({ page }) => {//contain select tag
    // with the help of selectorhub degubber option we can Handle hidden items in Dropdown'
    //example weblink//https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList
     })