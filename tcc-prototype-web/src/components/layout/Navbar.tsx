import React from 'react';

const Navbar: React.FC = () => {
  const toggleTheme = () => {
    const el = document.documentElement;
    const current = el.getAttribute('data-theme');
    el.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', el.getAttribute('data-theme') || 'light');
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
        <div className="flex items-center gap-4">
          <a href="/" aria-label="Home" className="font-bold text-lg">tcc-prototype</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="/pomodoro" className="text-sm">Pomodoro</a>
          <a href="/shop" className="text-sm">Loja</a>
          <button onClick={toggleTheme} aria-label="Alternar tema" className="ml-4 px-3 py-1 border rounded">Tema</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
