import {test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['Ipad Air'],
    viewport: {width: 820, height: 1180}
})

//home

test.describe('Testing for home', () => {

    test('Header Tag', async({ page }) => {
        await page.goto('http://localhost:3000')

        await expect(page.locator('h1')).toContainText('Vincent van Gogh');
    })

    
    test("Testing for padding on main", async ({ page}) =>{
        await page.goto('http://localhost:3000')

        const home = page.locator('#home');

        const checkingPadding = await home.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })

        console.log(checkingPadding);
        expect(checkingPadding).toBe("0px")
    })
})



//art

test.describe('Testing for art', () => {
    
    test("Testing for padding on buttons", async ({ page}) =>{
        await page.goto('http://localhost:3000/art')

        const textArea = page.locator('#textWrap');

        const checkingWidth = await textArea.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })

        console.log(checkingWidth);
        expect(checkingWidth).toBe("10px 30px")
    })

    test("Testing for text width on tablet", async ({ page}) =>{
        await page.goto('http://localhost:3000/art');

        await page.click("#textWrap");
        const textArea = page.locator('#titleOne');

        const checkingWidth = await textArea.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
        })

        console.log(checkingWidth);
        expect(checkingWidth).toBe("350px")
    })

})