const { test, expect } = require('@playwright/test')//import
import { loginpage } from './pagez/loginpage'
import { product } from './pagez/product'
import { cart } from './pagez/cart'


test('login', async ({ page }) => {

    //login
const login=new loginpage(page)
await login.gotoLoginpage()
await login.login('pavanol','test@123')
await page.waitForTimeout(5000)


//product
const product_cart=new product(page)
await product_cart.addtocart()
await product_cart.cartbtn()
await page.waitForTimeout(5000) 


//verify & order
const buyorder=new cart(page)
await buyorder.buy()
await buyorder.order()
await page.waitForTimeout(5000)
 }) 