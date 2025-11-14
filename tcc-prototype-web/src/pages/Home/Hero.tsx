import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from '../../lib/motion';

const Hero: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Box sx={{ maxWidth: 1120, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Typography id="conteudo-principal" component="h1" variant="h1" sx={{ mb: 2 }}>
                Foco com Pomodoro + Gamificação
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.25 }}>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '60ch', mb: 3 }}>
                Use ciclos focados e recompensas simples para criar hábitos reais e mensuráveis.
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.25 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button component={RouterLink} to="/pomodoro" variant="contained" color="primary" sx={{ px: 4 }}>
                  Começar agora
                </Button>
                <Button component={RouterLink} to="/metodologia" variant="outlined" color="inherit" sx={{ px: 4 }}>
                  Conheça a metodologia
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.25 }} aria-hidden>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <Paper elevation={0} sx={{ width: '100%', maxWidth: 520, borderRadius: 3, p: 4, bgcolor: 'background.paper' }}>
                  {/* Decorative placeholder illustration */}
                  <Box sx={{ width: '100%', height: 0, pb: '75%', position: 'relative', borderRadius: 2, overflow: 'hidden', bgcolor: 'background.default' }}>
                    <svg viewBox="0 0 360 240" fill="none" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                      <rect x="0" y="0" width="360" height="240" rx="16" fill="#f8fafc" />
                      <circle cx="80" cy="80" r="28" fill="#0e7490" />
                      <rect x="130" y="60" width="180" height="18" rx="6" fill="#e6eef8" />
                      <rect x="130" y="90" width="120" height="14" rx="6" fill="#f1f5f9" />
                    </svg>
                  </Box>
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
