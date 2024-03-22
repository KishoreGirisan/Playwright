import {test,expect} from '@playwright/test'

test("E2E flow to buy product",async({browser})=>
{

//create browser and page context
const context = await browser.newContext();
const page = await context.newPage();

//login to page
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.locator('#username').fill('rahulshettyacademy');
await page.locator('#password').fill('learning');
await page.locator('input[name="signin"]').click();

//wait for product page
await page.locator('a.btn-primary').waitFor();

//get product details
// const productname = ['Nokia Edge','Blackberry'];
const productname = ['Nokia Edge','Blackberry']
const UI_productName = page.locator('div')
const cnt = await UI_productName.count()

for(let prod of productname)
{
    for(let i = 0;i<cnt-1;i++)
    {
        if (await UI_productName.locator('h4 a').nth(i).textContent() === prod)
        {
            await UI_productName.locator('text="Add"').nth(i).click();
            break;
        }
    }
}

//click on checkout
await page.locator('a.btn-primary').click()

//wait for product selected page to load
await page.locator('tr td').first().waitFor()

//get product name and amount 
// tr td:nth-child(1) h4 a  - text
// tr td:nth-child(3) strong - price
//tr td:nth-child(5) strong - total amount
const UI2_productName = page.locator('tr')
const cnt2 = await UI2_productName.count()

// console.log(await UI2_productName.locator('td:nth-child(1) h4 a').nth(0).textContent())
// console.log(await UI2_productName.locator('td:nth-child(1) h4 a').nth(1).textContent())
// console.log(await UI2_productName.locator('td:nth-child(3) strong').nth(0).textContent())
// console.log(await UI2_productName.locator('td:nth-child(3) strong').nth(1).textContent())
let totalamt = 0
let totalactamt = 0
for(let prod of productname)
{
    for(let i = 0;i<cnt2;i++)
    {
        if (await UI2_productName.locator('td:nth-child(1) h4 a').nth(i).textContent() === prod)
        {
            let UI_amt = await UI2_productName.locator('td:nth-child(3) strong').nth(i).textContent()
            let trimval = parseInt(UI_amt.split('.')[1].trim())
            totalamt = totalamt + trimval
            break;
        }
    }
}

//get UI total amt
let UI_act_amt = await UI2_productName.locator('td:nth-child(5) strong').textContent()
let trimUIval = parseInt(UI_act_amt.split('.')[1].trim())
totalactamt = totalactamt + trimUIval

//verify both amt is same
console.log(totalamt)
console.log(totalactamt)
expect(totalamt).toEqual(totalactamt)

//click on checkout
await page.locator('button.btn.btn-success').click()

//wait for page
await page.locator('input[value="Purchase"]').waitFor()

//enter country to search
await page.locator('#country').pressSequentially('ind')
//wait for country list to load
await page.locator('.suggestions ul').first().waitFor()

//select from country listed
const countrylist =  page.locator('.suggestions ul')
const ccnt = await countrylist.count()
console.log(ccnt)
for(let i = 0;i<ccnt;i++)
{
    if(await countrylist.locator('li a').nth(i).textContent() == 'India')
    {
        await countrylist.locator('li a').nth(i).click()
        break;
    }
}
// click on purchase
await page.locator('input[value="Purchase"]').click()

// assert succesful message 
const sucess_msg = await page.locator('.alert.alert-success').textContent()
await expect(sucess_msg).toContain('Success')

// await page.pause()

})