import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const CookieBanner: React.FC = () => {
  const storageKey = 'privacyConsent';
  const [accepted, setAccepted] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return localStorage.getItem(storageKey) === 'true';
    } catch {
      return false;
    }
  });

  const accept = () => {
    try {
      localStorage.setItem(storageKey, 'true');
      setAccepted(true);
    } catch (e) {
      // Silently fail if localStorage is not available
      // eslint-disable-next-line no-console
      console.warn('LocalStorage não disponível:', e);
    }
  };

  if (accepted) return null;

  return (
    <Box
      component="div"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      sx={{
        position: 'fixed',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(92vw,960px)',
        zIndex: (theme) => theme.zIndex.snackbar + 1,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2,
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography id="cookie-banner-title" variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
            Privacidade e Dados Locais
          </Typography>
          <Typography id="cookie-banner-description" variant="body2" color="text.secondary">
            Usamos armazenamento local para salvar suas preferências e progresso. Nenhum dado é enviado para servidores externos neste protótipo.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
          <Link component={RouterLink} to="/privacy" underline="hover" sx={{ fontSize: '0.9rem' }}>
            Saiba mais
          </Link>
          <Button onClick={accept} variant="contained" color="primary" sx={{ whiteSpace: 'nowrap' }}>
            Aceitar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CookieBanner;
