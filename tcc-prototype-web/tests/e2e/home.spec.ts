import { test, expect } from '@playwright/test';

test('home smoke', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByText('Foco com Pomodoro')).toBeVisible();
  await page.click('text=Aceitar');
  await page.click('text=Tema');
  await page.reload();
  await expect(page.getByText('Foco com Pomodoro')).toBeVisible();
});
