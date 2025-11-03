import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
      borderRadius: {
        md: '8px',
      },
    },
  },
  plugins: [],
};

export default config;
