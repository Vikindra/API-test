const{test, expect,request} = require('@playwright/test');
const loginPayload= {userEmail:"vicky27@gmail.com",userPassword:"water"}

test( 'login', async ()=>{

    const apiContext= await request.newContext();
    const loginResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginPayload} );
    await expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson= await loginResponse.json();
    const token = loginResponseJson.token;
    console.log(token);
})