import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlArt = "http://localhost:3000/art";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

//home

test.describe('Testing homepage', () => {

    test('Testing for background repeat', async({ page }) => { 
        await page.goto(urlHome)

        const carousel = page.locator('.home');

        const grabbedBackgroundRepeat = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-repeat")
        })
        console.log(grabbedBackgroundRepeat);
        expect(grabbedBackgroundRepeat).toBe("repeat");
    })


    test('The meta tag', async ({ page }) => { 
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="og:artist"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Vincent van Gogh")

        const metaDescriptionTwo = page.locator('meta[property="og:title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #2 - Home Page')
    })

})

//art

test.describe('Testing art page', () => {

    test('The title tag', async({ page }) => {
        await page.goto(urlArt)

        await expect(page).toHaveTitle('Art');
    })

    test('The favicon', async ({ page }) => {
        await page.goto(urlArt)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/logo.jpeg')
    })
})