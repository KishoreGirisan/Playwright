const { request } = require("@playwright/test");

class apiUtils
{
    constructor(loginpayload)
    {
        this.loginpayload = loginpayload;
    }
    
    async getToken()
    {
        const newRequest = await request.newContext()
        const apiResponse = await newRequest.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data : this.loginpayload
                // {
                //     userEmail: 'testpy@gmail.com',
                //     userPassword: 'Tester-12',
                // }
            });
            // expect(apiResponse.ok()).toBeTruthy()
            const responsejson = await apiResponse.json()
            const token = responsejson.token
            console.log(token)
            return token;
    }



}
module.exports = {apiUtils}