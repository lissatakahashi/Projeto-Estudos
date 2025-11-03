import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <a href="#main" className="skip-link">Pular para o conteúdo principal</a>
    <Navbar />
    <main id="main" className="flex-1 container mx-auto px-4 py-8">
      {children}
    </main>
    <Footer />
  </div>
);

export default AppShell;
