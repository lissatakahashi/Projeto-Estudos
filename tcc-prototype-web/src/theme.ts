import { createTheme, ThemeOptions } from '@mui/material/styles';

type Mode = 'light' | 'dark';

const getDesignTokens = (mode: Mode = 'light'): ThemeOptions => ({
  spacing: 8,
  palette: {
    mode,
    primary: {
      main: '#0e7490', // brand 600-ish
      light: '#e6f6fb',
      dark: '#0c596e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f3f7fb',
    },
    background: {
      default: mode === 'dark' ? '#061421' : '#ffffff',
      paper: mode === 'dark' ? '#071826' : '#f9fafb',
    },
    text: {
      primary: mode === 'dark' ? 'rgba(255,255,255,0.92)' : '#0f1724',
      secondary: mode === 'dark' ? 'rgba(255,255,255,0.72)' : '#6b7280',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: ['Inter', 'ui-sans-serif', 'system-ui'].join(','),
    h1: {
      fontWeight: 800,
      lineHeight: 1.05,
      fontSize: '2.25rem', // ~36px (mobile)
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.5rem', // larger hero heading on desktop
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 999,
          padding: '8px 18px',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#0e7490',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0c596e',
          },
        },
        outlined: {
          borderWidth: 1,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          // paper background will use palette.paper from tokens; keep undefined here to let theme apply it
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'dark' ? '0 6px 18px rgba(2,6,23,0.18)' : '0 6px 20px rgba(2,6,23,0.04)',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export const createAppTheme = (mode: Mode = 'light') => createTheme(getDesignTokens(mode));

// default export remains the light theme for backwards compatibility
const theme = createAppTheme('light');

export default theme;
