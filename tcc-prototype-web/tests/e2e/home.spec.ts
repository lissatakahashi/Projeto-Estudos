// Playwright e2e test (kept separate so Vitest doesn't pick it up)
import { test, expect } from '@playwright/test';

test.describe('Home E2E', () => {
  test('should visit home, accept LGPD, navigate to Pomodoro, go back, open mobile menu and navigate to About', async ({ page }) => {
    // Visita a homepage
    await page.goto('http://localhost:5174/');

    // Verifica que o H1 está visível
    await expect(page.getByRole('heading', { level: 1, name: /Foco com Pomodoro/i })).toBeVisible();

    // Aceita o banner de LGPD/Cookies
    const cookieBanner = page.getByRole('dialog');
    await expect(cookieBanner).toBeVisible();
    await page.getByRole('button', { name: /Aceitar/i }).click();

    // Verifica que o banner desapareceu
    await expect(cookieBanner).not.toBeVisible();

    // Clica no botão "Começar agora" no Hero
    await page.getByRole('link', { name: /Começar agora/i }).first().click();

    // Verifica navegação para /pomodoro
    await expect(page).toHaveURL(/\/pomodoro/);

    // Volta para a página anterior
    await page.goBack();
    await expect(page).toHaveURL(/^\//);

    // Testa menu mobile (viewport pequeno)
    await page.setViewportSize({ width: 375, height: 667 });

    // Abre o menu mobile clicando no hambúrguer
    const mobileMenuButton = page.getByRole('button', { name: /Abrir menu/i });
    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();

    // Verifica que o menu mobile está aberto e navega para "Sobre"
    const mobileMenu = page.locator('#mobile-navigation');
    await expect(mobileMenu).toBeVisible();

    await page.getByRole('link', { name: /^Sobre$/i }).click();

    // Verifica navegação para /about
    await expect(page).toHaveURL(/\/about/);
  });
});
