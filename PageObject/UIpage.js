import {expect} from '@playwright/test'
class UIpage 
{

    constructor(page)
    {
        this.page = page
        this.username = this.page.locator("#username")
        this.password = this.page.locator("#password")
        this.submit = this.page.locator('input[type="submit"]')
    }

    async getPlayUIelements()
    {
       await this.page.locator('input[value="user"]').click()
       await this.page.locator('#okayBtn').click()
       await expect(this.page.locator('input[value="user"]')).toBeChecked()
       await this.page.locator('select.form-control').selectOption('teach')
    }

    async launchUrl()
    {
        await this.page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
    }

    async login(userName,passWord)
    {
        await this.username.fill(userName)
        await this.password.fill(passWord)
        await this.getPlayUIelements()
        await this.submit.click()
    }
    


}

module.exports = {UIpage}