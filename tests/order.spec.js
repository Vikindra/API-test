import {test, expect} from '@playwright/test';

test('Place order using UI', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.fill('#userEmail', 'reddy27@gmail.com');
    await page.fill('#userPassword', 'Water@27');
    await page.click('#login');
    await page.waitForLoadState('networkidle');
    const title = await page.title();
    expect(title).toBe("Let's Shop");
//    await page.waitForTimeout(50000);
    await page.locator('//*[@id="products"]/div[1]/div[2]/div[1]/div/div/button[2]').click();
    await page.locator('//button[@routerlink="/dashboard/cart"]').click();
    await page.click('text=Checkout');
    await page.click('//input[@placeholder="Select Country"]');
    await page.fill('//input[@placeholder="Select Country"]', 'India');   
    await page.selectOption('//input[@placeholder="Select Country"]', { label: 'India' });
    await page.click('text=Place Order');

});