import {test,expect} from '@playwright/test';

test('working with child tab',async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

    const click_link = page.locator('[href*="documents-request"]');

    const [newPage] = await Promise.all(
    [
    context.waitForEvent('page'),
    click_link.click(),
    ]
    )
    console.log(await newPage.locator('.red').innerText());

})