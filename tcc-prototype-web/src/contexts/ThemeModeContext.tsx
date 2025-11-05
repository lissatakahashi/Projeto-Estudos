import React from 'react';

export type Mode = 'light' | 'dark';

export const ThemeModeContext = React.createContext<{
  mode: Mode;
  toggleMode: () => void;
}>({ mode: 'light', toggleMode: () => {} });
