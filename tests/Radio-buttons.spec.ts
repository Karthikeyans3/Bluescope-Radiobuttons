import {test,expect}from '@playwright/test'
test.describe('radio-buttons',() => {
    test('select and verify button',async({page})=>{
        await page.goto('https://practice.expandtesting.com/radio-buttons');
        const blueRadioButton = 'input[value="blue"]';
        const redRadioButton = 'input[value="red"]';
        const yellowRadioButton = 'input[value="yellow"]';
        const blackRadioButton = 'input[value="black"]';
        const greenRadioButton = 'input[value="green"]';
        
        // check for bluebutton

        expect(await page.isChecked(blueRadioButton)).toBeTruthy();
        expect(await page.isChecked(redRadioButton)).toBeFalsy();
        expect(await page.isChecked(yellowRadioButton)).toBeFalsy();
        expect(await page.isChecked(blackRadioButton)).toBeFalsy();
        expect(await page.isChecked(greenRadioButton)).toBeFalsy();
        
        // check for redbutton

        expect(await page.isChecked(blueRadioButton)).toBeFalsy();
        expect(await page.isChecked(redRadioButton)).toBeTruthy();
        expect(await page.isChecked(yellowRadioButton)).toBeFalsy();
        expect(await page.isChecked(blackRadioButton)).toBeFalsy();
        expect(await page.isChecked(greenRadioButton)).toBeFalsy();

        // check for yellowbutton
        
        expect(await page.isChecked(blueRadioButton)).toBeFalsy();
        expect(await page.isChecked(redRadioButton)).toBeFalsy();
        expect(await page.isChecked(yellowRadioButton)).toBeTruthy();
        expect(await page.isChecked(blackRadioButton)).toBeFalsy();
        expect(await page.isChecked(greenRadioButton)).toBeFalsy();

        // check for blackbutton

        expect(await page.isChecked(blueRadioButton)).toBeFalsy();
        expect(await page.isChecked(redRadioButton)).toBeFalsy();
        expect(await page.isChecked(yellowRadioButton)).toBeFalsy();
        expect(await page.isChecked(blackRadioButton)).toBeTruthy();
        expect(await page.isChecked(greenRadioButton)).toBeFalsy();

        // check for greenbutton

        expect(await page.isChecked(blueRadioButton)).toBeFalsy();
        expect(await page.isChecked(redRadioButton)).toBeFalsy();
        expect(await page.isChecked(yellowRadioButton)).toBeFalsy();
        expect(await page.isChecked(blackRadioButton)).toBeFalsy();
        expect(await page.isChecked(greenRadioButton)).toBeTruthy();
    });
});