import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <a
      href="#conteudo-principal"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-brand-contrast focus:rounded-lg focus:font-semibold focus:shadow-lg"
    >
      Pular para o conteúdo principal
    </a>
    <Navbar />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default AppShell;
