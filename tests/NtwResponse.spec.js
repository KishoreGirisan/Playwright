import {test,expect,request} from '@playwright/test'
import { rootCertificates } from 'tls';
let datapayload = {userEmail: "testpy@gmail.com", userPassword: "Tester-12"}
let tkn;
let responsebody = {data:[],message:"No Orders"}

test.beforeAll(async()=>{
    // await page.goto('https://rahulshettyacademy.com/client/');
    //skip login by setting token
    const apiRequest = await request.newContext();
    const apiResponse = await apiRequest.post('https://rahulshettyacademy.com/api/ecom/auth/login',
    {
        data : datapayload,
    });
    expect(apiResponse.ok()).toBeTruthy();
    const tokenNo = await apiResponse.json();
    tkn = tokenNo.token;

})

test('API get order response',async({page})=>
{   
    const apiRequest = await request.newContext();
    //set the token
    await page.addInitScript(setToken =>{
        window.localStorage.setItem('token',setToken)
    },tkn)

    await page.goto('https://rahulshettyacademy.com/client/');

    //check an order exist
    const apiResponse = await apiRequest.get('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/65ee4cb8a86f8f74dc9812eb',
    {
        headers :
        {
            Authorization : tkn,

        }
    })
    expect(apiResponse.ok()).toBeTruthy()
    const playload = await apiResponse.json()
    console.log(playload)

    //Mock the order response
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/65ee4cb8a86f8f74dc9812eb',
    
    async route =>{
        const response = await route.fetch();
        const body = JSON.stringify(responsebody)
        await route.fulfill(
            {
                response : body,
            }
        )
    }
    )


    //click on orders
    await page.locator('text="ORDERS"').click()
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/65ee4cb8a86f8f74dc9812eb')
    expect(page.locator('.mt-4')).toContainText('No Orders')
    // await page.pause()


}


)