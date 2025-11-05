import React from 'react';
import { Target, Trophy, BarChart3 } from '../../lib/icons';
import { motion } from '../../lib/motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

const features = [
  {
    icon: Target,
    title: 'Foco concentrado',
    text: 'Ciclos Pomodoro com metas claras para máxima produtividade e resultados tangíveis.',
  },
  {
    icon: Trophy,
    title: 'Recompensas',
    text: 'Gamifique seu progresso com conquistas, badges e recompensas motivadores.',
  },
  {
    icon: BarChart3,
    title: 'Progresso visível',
    text: 'Acompanhe métricas detalhadas e visualize sua evolução ao longo do tempo.',
  },
];

const FeatureGrid: React.FC = () => (
  <Box component="div" sx={{ mb: { xs: 4, md: 6 } }}>
    <Typography
      variant="overline"
      display="block"
      textAlign="left"
      sx={{
        mb: 2,
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        // doubled font-size as requested (mobile/desktop)
        fontSize: { xs: '1.75rem', md: '2rem' },
        color: 'text.primary',
      }}
    >
      Benefícios
    </Typography>

    <Grid container spacing={{ xs: 3, md: 4 }}>
      {features.map((feature, i) => (
        <Grid item xs={12} sm={6} md={4} key={feature.title}>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <Card sx={{ height: '100%', p: { xs: 2, md: 3 }, borderRadius: 2, bgcolor: 'background.default' }} elevation={0}>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.main', width: 48, height: 48 }} aria-hidden>
                    <feature.icon />
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.text}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default FeatureGrid;
