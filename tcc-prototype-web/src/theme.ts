import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0e7490', // brand 600-ish
      dark: '#0c596e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f3f7fb',
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
    },
    text: {
      primary: '#0f1724',
      secondary: '#6b7280',
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
      fontSize: '2.25rem', // ~36px
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
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

export default theme;
