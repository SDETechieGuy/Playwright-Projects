// @ts-check
import { test, expect } from '@playwright/test';

test('Page Context TC 2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log("Title of Playwright website when loaded is:"+page.title);
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('Browser Context TC 2', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  console.log("Title of Google browser when loaded is:"+await page.title);
  await expect(page).toHaveTitle("Google");
});
