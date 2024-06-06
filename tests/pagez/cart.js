exports.cart
=class cart{

    constructor(page){

        this.page=page
        this.placeorder="//button[normalize-space()='Place Order']"
        this.name="//input[@id='name']"
        this.country="//input[@id='country']"
        this.city="//input[@id='city']"
        this.card="//input[@id='card']"
        this.mnt="//input[@id='month']"
        this.yeqr="//input[@id='year']"
        this.orderbtnbuy="//button[normalize-space()='Purchase']"

    }

    async buy(){
        await this.page.locator(this.placeorder).click()
    }
    async order(){
        await this.page.locator(this.name).fill('Mohan')
        await this.page.locator(this.country).fill('Mohan')
        await this.page.locator(this.city).fill('Mohan')
        await this.page.locator(this.card).fill('Mohan')
        await this.page.locator(this.mnt).fill('Mohan')
        await this.page.locator(this.yeqr).fill('Mohan')
        await this.page.locator(this.orderbtnbuy).click()
}}