import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('has content', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/DevTools/DevProxy/Demo/demo-randomerror-js/index.html?id=1');

// expect pages contains a H1 element with the text "Hello World"
await expect(page.getByText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')).toBeVisible();

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

test('has header', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/DevTools/DevProxy/Demo/demo-randomerror-js/index.html?id=1');

    // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'sunt aut facere' })).toBeVisible();
});
test('has author', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/DevTools/DevProxy/Demo/demo-randomerror-js/index.html?id=1');

  const locator = page.locator('#byline');
  await expect(locator).toContainText('Leanne Graham');

  // Expects page to have a paragraph with the id byline and the text by Leanne Graham.
  //const paragraph = await page.locator('#byline');
  //await expect(paragraph.innerText()).toContain('by Leanne Graham');





 

});

