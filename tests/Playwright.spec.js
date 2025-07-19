// @ts-check
import { test, expect } from '@playwright/test';

test('Rahul Shetty Website Incorrect Login Assertion Page Context TC 1', async ({ page }) => {
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

test('Rahul Shetty Website correct Login Assertion Page Context TC 2', async ({ page }) => {
  const usernme = page.locator("input#username");//locators dont need await as we aren't performing any actions
  const passwd = page.locator("input#password");
  const submitbtn = page.locator("input[type='submit']");
  const cardlocator = page.locator(".card-body a");

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log("Title of Rahul shetty website when loaded is:"+ await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await usernme.fill("rahulshetty");
  await passwd.fill("learning");
  await page.locator("input#terms").click();
  await page.locator("input[type='submit']").click();
  await usernme.fill("");//This will empty the usernme field
  await usernme.fill("rahulshettyacademy");
  await page.locator("input[type='submit']").click();
  console.log(await cardlocator.nth(2).textContent());
  console.log(await cardlocator.first().textContent());
  console.log("All Card titles: "+await cardlocator.allTextContents());
  //div[text='Incorrect username/password.']
});


test('Browser Context TC 3', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  console.log("Title of Google browser when loaded is:"+await page.title());
  await expect(page).toHaveTitle("Google");
});
