import { test, expect } from '@playwright/test';

test("test", async ({ page }) => {
  await page.goto('https://academybugs.com/find-bugs');
  await page.getByRole('link', { name: '50' }).click();
  //await page.getByRole('heading', { name: 'You found a crash bug,' }).click();
  await expect(page.locator('.academy-bug-overlay')).toContainText(
    'You found a crash bug'
  );
});