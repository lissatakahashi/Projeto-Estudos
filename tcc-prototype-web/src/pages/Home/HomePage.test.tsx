import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders title, CTA and footer links', () => {
    render(<HomePage />);
    expect(screen.getByText(/Foco com Pomodoro/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Começar agora/i })).toBeInTheDocument();
    expect(screen.getByText(/Usamos armazenamento local/i)).toBeInTheDocument();
  });
});
