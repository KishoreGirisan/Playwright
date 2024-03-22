import {test,expect} from '@playwright/test'
import { apiUtils } from './utils/apiUtils';
const loginpayload = {userEmail: 'testpy@gmail.com',userPassword: 'Tester-12'}

let token;

test('Call login webapi',async({page})=>{

    // const context = await request.newContext()
    const apis = new apiUtils(loginpayload)
    token = await apis.getToken()
    console.log(token)
    // const apiRequest = request.newContext()
    // const apiResponse = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',
    // {
    //     data : loginpayload
    //     // {
    //     //     userEmail: 'testpy@gmail.com',
    //     //     userPassword: 'Tester-12',
    //     // }
    // });
    // expect(apiResponse.ok()).toBeTruthy()
    // const responsejson = await apiResponse.json()
    // const token = responsejson.token
    // console.log(token)

    //set token into ui
    await page.addInitScript(setToken=>{
        window.localStorage.setItem('token',setToken)
    },token)

    //launch page
    await page.goto('https://rahulshettyacademy.com/client/')

    await page.pause()

})