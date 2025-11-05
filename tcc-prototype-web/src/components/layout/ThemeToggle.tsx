import React from 'react';
import { ThemeModeContext } from '../../contexts/ThemeModeContext';

const ThemeToggle: React.FC = () => {
  const { mode, toggleMode } = React.useContext(ThemeModeContext);

  return (
    <button aria-label="Alternar tema" onClick={toggleMode} className="px-2 py-1 rounded border">
      {mode === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
