import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  
  await page.goto('https://playwright.dev/', {timeout: 60000});

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/, {timeout: 60000});
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/'  ,{timeout: 60000});

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click( {timeout: 60000});

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible( {timeout: 60000});
});