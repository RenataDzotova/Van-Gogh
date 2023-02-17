import {test, devices, expect} from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlArt = "http://localhost:3000/art";

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

//home
test.describe('Testing for homepage', () => {

      test('testing text alignment', async({ page }) => { 
        await page.goto(urlHome)
        
        const container = page.locator('#hOne');
    
        const grabbedDisplay = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("text-align")
        })
        console.log(grabbedDisplay);
        expect(grabbedDisplay).toBe("center");
    })
    

    test('Button', async({ page }) => { 
        await page.goto(urlHome)
        await expect(page.locator('a > button')).toHaveCount(1);
    })
})



//art
test.describe('Testing for artPage', () => {

    test('should show "Paris" when Paris button is clicked', async ({page}) => {
        await page.goto('http://localhost:3000/art');
    
        await page.click('text=Paris');
    
        const image = await page.waitForSelector('img');
        expect(await image.getAttribute('src')).toContain('Paris');
      })


      test('testing buttons direction', async({ page }) => { 
        await page.goto(urlArt)
    
        const container = page.locator('#flexBox');
    
    
        const grabbedDisplay = await container.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-direction")
        })
        console.log(grabbedDisplay);
        expect(grabbedDisplay).toBe("column");
    })
})







