// @ts-check
import { test, expect } from '@playwright/test';

test.only('Rahul Shetty Website Incorrect Login Assertoom Page Context TC 2', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log("Title of Rahul shetty website when loaded is:"+ await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await page.locator("input#username").fill("rahulshetty");
  await page.locator("input#password").fill("learning");
  await page.locator("input#terms").click();
  await page.locator("input[type='submit']").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incoect username");
  //div[text='Incorrect username/password.']  
});

test('Browser Context TC 2', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  console.log("Title of Google browser when loaded is:"+await page.title());
  await expect(page).toHaveTitle("Google");
});
