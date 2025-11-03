import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 dark:bg-gray-800 py-6">
    <div className="container mx-auto px-4 text-sm text-gray-700 dark:text-gray-300">
      <nav aria-label="Footer">
        <a href="/pomodoro" className="mr-4">Pomodoro</a>
        <a href="/shop" className="mr-4">Loja</a>
        <a href="/inventory" className="mr-4">Inventário</a>
        <a href="/history" className="mr-4">Histórico</a>
        <a href="/settings" className="mr-4">Configurações</a>
        <a href="/privacy" className="mr-4">Privacidade</a>
        <a href="/terms" className="mr-4">Termos</a>
        <a href="/about" className="mr-4">Sobre</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
