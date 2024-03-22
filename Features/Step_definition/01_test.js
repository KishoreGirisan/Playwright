const {Given ,When, Then } = require('@cucumber/cucumber')
const {expect} = require('@playwright/test')
const { chromium } = require('playwright');

Given('login for {string} and {string} passed',{timeout : 10*1000} ,async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    
    const browser = await chromium.launch({'headless':false});
    this.page = await browser.newPage();

    await this.page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

    console.log(await this.page.title())

    await this.page.locator("#username").fill(username)
    await this.page.locator("#password").fill(password)

    //click on radio
    await this.page.locator('input[value="user"]').click()
    //handle popup
    await this.page.locator('#okayBtn').click()
    await expect(this.page.locator('input[value="user"]')).toBeChecked()
    //check checkbox
    await this.page.locator('select.form-control').selectOption('teach')
});

When('login is succesfull', {timeout : 10*1000} ,async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.page.locator('input[type="submit"]').click()
});

Then('Verify customer landed on login page', {timeout : 10*1000} ,async function () {
    // Write code here that turns the phrase above into concrete actions
    await expect(this.page.locator('.nav-link.btn.btn-primary')).toBeVisible()
    console.log(await this.page.locator('h4 a').allTextContents())

});