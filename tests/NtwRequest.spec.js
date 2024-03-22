import { test, expect, request } from '@playwright/test'
import { rootCertificates } from 'tls';
let datapayload = { userEmail: "testpy@gmail.com", userPassword: "Tester-12" }
let tkn;
let responsebody = { data: [], message: "No Orders" }

test.beforeAll(async () => {
    // await page.goto('https://rahulshettyacademy.com/client/');
    //skip login by setting token
    const apiRequest = await request.newContext();
    const apiResponse = await apiRequest.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data: datapayload,
        });
    expect(apiResponse.ok()).toBeTruthy();
    const tokenNo = await apiResponse.json();
    tkn = tokenNo.token;

})

test('API get order response', async ({ page }) => {
    const apiRequest = await request.newContext();
    //set the token
    await page.addInitScript(setToken => {
        window.localStorage.setItem('token', setToken)
    }, tkn)

    await page.goto('https://rahulshettyacademy.com/client/');

    //check an order exist
    const apiResponse = await apiRequest.get('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/65ee4cb8a86f8f74dc9812eb',
        {
            headers:
            {
                Authorization: tkn,

            }
        })
    expect(apiResponse.ok()).toBeTruthy()
    const playload = await apiResponse.json()
    const orderid = playload.data[0]._id

    //check if order exist and then try a different order for the same customer == > Security check
    //    
    const getOrderResponse = await page.request.get(`https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=${orderid}`,
        {
            headers:
            {
                Authorization: tkn,
            }
        })
    expect(getOrderResponse.ok()).toBeTruthy()
    console.log(await getOrderResponse.json())

    await page.locator('text="ORDERS"').click() 

    //security check by sending wrong orderid
    await page.route(`https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=${orderid}`,
        async route => {
            await route.continue({ url : 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=65f6191ca86f8f74dca' })
        }
    )
    
    await page.locator('td button.btn.btn-primary').click() 
    // await page.pause()
    


}

)