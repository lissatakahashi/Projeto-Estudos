import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders H1, finds 2 CTAs in Hero, 3 benefit cards and CookieBanner', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    // Verifica o H1 principal
    const heading = screen.getByRole('heading', { level: 1, name: /Foco com Pomodoro/i });
    expect(heading).toBeTruthy();
    expect(heading.id).toBe('conteudo-principal');

    // Verifica os 2 CTAs principais no Hero
    expect(screen.getByRole('link', { name: /Começar agora/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Conheça a metodologia/i })).toBeTruthy();

    // Verifica os 3 cards de benefícios
    expect(screen.getByRole('heading', { level: 3, name: /Foco concentrado/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 3, name: /Recompensas/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 3, name: /Progresso visível/i })).toBeTruthy();

    // Verifica o CookieBanner
    expect(screen.getByRole('dialog')).toBeTruthy();
    expect(screen.getByText(/Usamos armazenamento local/i)).toBeTruthy();
  });
});

