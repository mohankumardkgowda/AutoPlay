/////npx playwright codegen 
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('.oxd-userdropdown-name').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

