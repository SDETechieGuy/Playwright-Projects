// @ts-check
import { test, expect } from '@playwright/test';

test.only('Login and find first product on the page',async({page}) => {
//TODO: Remove username and password and then checkin  
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("input#userEmail").fill("sdettechie@gmail.com");
  await page.locator("input#userPassword").fill("AI#Tech$Imag!1ne");
  await page.locator("input#login").click();
  expect(await page.locator("i[class*='sign-out']").isVisible());
  console.log(await page.locator("div.card-body b").first().textContent());
});
