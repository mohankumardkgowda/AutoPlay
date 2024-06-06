exports.product=class product{

    constructor(page){

        this.page=page
        this.productlizt="//a[normalize-space()='Samsung galaxy s6']"
        this.addcart="//a[contains(text(), 'Add to cart')]"
        this.cart="//a[normalize-space()='Cart']"

    }

    async addtocart(){
        await this.page.locator(this.productlizt).click()
        await this.page.locator(this.addcart).click()
    }
    async cartbtn(){
        await this.page.locator(this.cart).click()
    }
}