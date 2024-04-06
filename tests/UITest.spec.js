import {test,expect} from '@playwright/test';
import exp from 'constants';


test('@Web UI Automation', async({page})=>{

    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title())

    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")

    //click on radio
    await page.locator('input[value="user"]').click()
    //handle popup
    await page.locator('#okayBtn').click()
    await expect(page.locator('input[value="user"]')).toBeChecked()
    //check checkbox
    await page.locator('select.form-control').selectOption('teach')

    // await page.pause()

    await page.locator('input[type="submit"]').click()

    // console.log(await page.locator('div[style="display: block;"]').textContent())
    await expect(page.locator('.nav-link.btn.btn-primary')).toBeVisible()

    // console.log(await page.locator("h4 a").first(1).textContent())
    // await expect(page.locator("h4 a").first(1)).toHaveText("iphone X")

    console.log(await page.locator('h4 a').allTextContents())


});