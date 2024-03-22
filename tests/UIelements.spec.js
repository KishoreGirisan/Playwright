import {test,expect} from '@playwright/test'

test('Workingw ith UI elements',async({page})=>{
//navigate to url
await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')

//set data - month day and year
await page.locator('.react-date-picker__inputGroup').click()
await page.locator('.react-calendar__navigation__label__labelText').click() //click month
await page.locator('.react-calendar__navigation__label__labelText').click() //click year

const month = 'April';
const day = 16
const year = 2024

await page.locator('div button').getByText(year).click()
await page.locator('button abbr[aria-label*="'+month+'"]').click()
await page.locator('button abbr[aria-label*="'+day+'"]').click()


//assert
// await page.pause()

})

test.only('Visible',async({page})=>{

    //visible check
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
await page.locator('input[value="Hide"]').click()
await expect(page.locator('.inputs.displayed-class')).toBeHidden()

//mouseover
await page.locator('#mousehover').hover()

//handle alert
// console.log(page.on('dialog', dialog=>dialog.message()))
page.on('dialog', dialog=>dialog.accept())
await page.locator('#alertbtn').click()

//frames
const frame = page.frameLocator('#courses-iframe')
console.log(await frame.locator('li a[href="learning-path"]:visible').textContent())

// await page.pause()
})