import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CTASection: React.FC = () => (
  <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
    <Container>
      <Paper
        elevation={0}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 3,
          p: { xs: 4, md: 6 },
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Pronto para começar?
        </Typography>
        <Typography variant="body1" sx={{ color: 'primary.contrastText', opacity: 0.95, mb: 3, maxWidth: 720, mx: 'auto' }}>
          Inicie seu primeiro Pomodoro e comece a evoluir hoje. Transforme sua produtividade.
        </Typography>

        <Button
          component={RouterLink}
          to="/pomodoro"
          variant="contained"
          color="inherit"
          sx={{
            bgcolor: 'primary.contrastText',
            color: 'primary.main',
            px: 4,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 700,
            '&:hover': { bgcolor: 'white' },
            boxShadow: 'none',
          }}
        >
          Iniciar Pomodoro
        </Button>
      </Paper>
    </Container>
  </Box>
);

export default CTASection;
