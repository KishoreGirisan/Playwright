import {test,expect} from '@playwright/test'

test("@Google UI check",async({page})=>{

await page.goto('https://www.google.com/')

await page.locator('a[aria-label*="Gmail"]').isVisible()


})