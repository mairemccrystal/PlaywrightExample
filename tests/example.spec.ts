import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://automationteststore.com/index.php?rt=account/login');

  await page.locator(`#loginFrm_loginname`).fill('mairetestaccount')

  const passwordField =  page.locator("//input[@id='loginFrm_password']")

  await page.locator("//input[@id='loginFrm_password']").fill('')

  await page.locator("//button[@title='Login']").click();


  // Expect a title "to contain" a substring.
  // Waits for either confirmation dialog or load spinner.

  // create a locator
  //const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  //await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  //await getStarted.click();

  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);
});
