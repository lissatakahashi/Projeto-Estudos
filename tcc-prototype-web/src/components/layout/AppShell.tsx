import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <a href="#conteudo-principal" className="skip-link" aria-label="Pular para o conteúdo principal">
      <span className="skip-icon" aria-hidden>
        {/* keyboard/shortcut icon (SVG) */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
          <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 11h.01M12 11h.01M16 11h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="skip-label">Pular para o conteúdo principal</span>
    </a>
    <Navbar />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default AppShell;
