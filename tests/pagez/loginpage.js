exports.loginpage=class loginpage{
constructor(page){//initilize variable

this.page=page
this.loginlink="//a[@id='login2']"
this.uname="//input[@id='loginusername']"
this.pwd="//input[@id='loginpassword']"
this.loginbtn="//button[@onclick='logIn()']"

    }
    async gotoLoginpage(){
        await this.page.goto('https://www.demoblaze.com/index.html')
    }
    async login(uzername,pwdvalue){
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.uname).fill(uzername)
        await this.page.locator(this.pwd).fill(pwdvalue)
        await this.page.locator(this.loginbtn).click()
    }
}