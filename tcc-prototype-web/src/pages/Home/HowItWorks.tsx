import React from 'react';
import { motion } from '../../lib/motion';
import { CheckCircle, Gift, Settings, Clock } from '../../lib/icons';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const steps = [
  { icon: Clock, title: 'Pomodoro', text: 'Ciclos de foco e pausa' },
  { icon: Gift, title: 'Recompensa', text: 'Complete metas para ganhar' },
  { icon: Settings, title: 'Personalize', text: 'Ajuste o timer e preferências' },
  { icon: CheckCircle, title: 'Acompanhe', text: 'Revise métricas e celebre conquistas' },
];

const HowItWorks: React.FC = () => (
  <Box component="div" sx={{ mt: { xs: 4, md: 6 } }}>
    <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
      Como funciona
    </Typography>

    <Box sx={{ position: 'relative' }}>
      <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 0, left: 0, right: 0, height: 1, borderTop: '1px dashed', borderColor: 'divider', opacity: 0.35 }} />

      <Grid container spacing={{ xs: 3, md: 4 }} sx={{ pt: { md: 3 } }}>
        {steps.map((step, i) => (
          <Grid item xs={12} md={3} key={step.title}>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Box sx={{ bgcolor: 'primary.main', color: 'background.paper', fontWeight: 700, px: 1.5, py: 0.5, borderRadius: 99, fontSize: '0.875rem' }}> {i + 1} </Box>
                  <Box sx={{ color: 'primary.main' }} aria-hidden>
                    <step.icon />
                  </Box>
                </Box>
                <Typography sx={{ fontWeight: 700 }}>{step.title}</Typography>
                <Typography variant="body2" color="text.secondary">{step.text}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default HowItWorks;
