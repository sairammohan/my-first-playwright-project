// Import 'test' (to define test cases) and 'expect' (to make assertions) from Playwright
//Git test
import { test, expect } from '@playwright/test';

// Define a test case named 'has title'
test('has title', async ({ page }) => {
  // Navigate the browser to the Playwright homepage
  await page.goto('https://playwright.dev/');

  // Assert that the page title contains the word "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

// Define a test case named 'get started link'
test('get started link', async ({ page }) => {
  // Navigate the browser to the Playwright homepage
  await page.goto('https://playwright.dev/');

  // Find the link with the accessible name 'Get started' and click it
  await page.getByRole('link', { name: 'Get started' }).click();

  // Assert that a heading with the text 'Installation' is visible on the page
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//my custom test for heading
test('Any header', async ({ page }) => {
  // Navigate the browser to the Playwright homepage
  await page.goto('https://playwright.dev/');
  // Assert that a heading with the text 'Playwright' is visible on the page
  // await page.screenshot({path:'screenshots/test1.png'});
  await expect(page.getByText('Any browser • Any platform • One API')).toBeVisible();
  //await expect(page.getByText('Powerful tooling')).toBeVisible();
});

test ('text check', async ({page}) => {

  await page.goto("https://playwright.dev/");
  await expect(page.getByRole('heading', { name: 'Powerful Tooling' })).toBeVisible();
});

/* Common Playwright Commands

Navigation

await page.goto ();

await page.goBack();

await page.goForward();

await page.reload();



Finding Elements

By role (recommended)

await page,getByRole('button', {name: 'Submit'});

//By text

await page.getByText('Welcome')

// By label

await page.getByLabel('Email')

//By placeholder

await page.getByPlaceholder('Enter your name')

*/

