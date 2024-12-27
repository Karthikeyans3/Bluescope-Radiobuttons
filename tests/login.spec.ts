import {test,expect} from '@playwright/test';
test.describe('loginpage',()=>{

    test("successfullogin",async({page})=>{
        await page.goto("https://login-page.com");
        await page.locator('input[name="username"]').fill('karthy');
        await page.locator('input[name="password"]').fill('karthy@12345');
        await page.locator('button[type="submit"]').click();
        // successfullogin
        await expect(page).toHaveURL("https://login-page/home.com");
        await expect(page.locator('welcome')).toContainText('welcome,karthy');
      
        test("unsuccessfullogin",async({page})=>{
            await page.goto("https://login-page.com");
            await page.locator('input[name="username"]').fill('invaliduser');
            await page.locator('input[name="password"]').fill('invalidpassword');
            await page.locator('button[type="submit"]').click();
            // unsuccessfullogin
            await expect(page.locator('error')).toBeVisible();
            await expect(page.locator('error')).toContainText('invalid username or password');    
    });
});
});