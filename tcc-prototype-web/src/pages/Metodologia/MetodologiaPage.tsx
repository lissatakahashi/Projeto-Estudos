import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import './metodologia.css';

const Infographic: React.FC = () => {
  return (
    <figure className="meta-infographic" aria-label="Infográfico do ciclo Pomodoro">
      <svg viewBox="0 0 600 320" role="img" aria-labelledby="pomodoroTitle pomodoroDesc" preserveAspectRatio="xMidYMid meet">
        <title id="pomodoroTitle">Ciclo Pomodoro</title>
        <desc id="pomodoroDesc">Quatro sessões de 25 minutos com pausas de 5 minutos e intervalo maior ao final.</desc>
  <rect x="0" y="0" width="600" height="320" rx="12" fill="#f7fafc" />
  {/* move whole infographic slightly down to avoid clipping */}
  <g transform="translate(0,12)">
  {/* central circle */}
  <g transform="translate(300,140)">
          <circle r="86" fill="#e6f2f7" stroke="#c7e6ef" strokeWidth="2" />
          <text x="0" y="6" textAnchor="middle" fontSize="18" fill="#075985" fontWeight={700}>Pomodoro</text>
        </g>

        {/* four pomodoros - positioned to touch the central circle (r_central 86 + r_small 28 = 114) */}
        <g fontFamily="sans-serif" fontSize="13" fill="#024" textAnchor="middle">
          {/* top */}
          <g transform="translate(300,26)">
            <circle r="28" fill="#fef3c7" stroke="#fcd34d" />
            <text y="5">25min</text>
            <text y="20" fontSize="10">Estudos</text>
          </g>
          {/* right */}
          <g transform="translate(414,140)">
            <circle r="28" fill="#fef3c7" stroke="#fcd34d" />
            <text y="5">25min</text>
            <text y="20" fontSize="10">Estudos</text>
          </g>
          {/* bottom */}
          <g transform="translate(300,254)">
            <circle r="28" fill="#fef3c7" stroke="#fcd34d" />
            <text y="5">25min</text>
            <text y="20" fontSize="10">Estudos</text>
          </g>
          {/* left */}
          <g transform="translate(186,140)">
            <circle r="28" fill="#fef3c7" stroke="#fcd34d" />
            <text y="5">25min</text>
            <text y="20" fontSize="10">Estudos</text>
          </g>
        </g>

        {/* short breaks - nudged slightly outward so they don't touch the central circle */}
        <g fontFamily="sans-serif" fontSize="12" fill="#0f172a" textAnchor="middle">
          <g transform="translate(390,77)">
            <rect x="-34" y="-16" width="68" height="24" rx="12" fill="#eef2ff" stroke="#c7d2fe" />
            <text y="4">Pausa 5min</text>
          </g>
          <g transform="translate(390,203)">
            <rect x="-34" y="-16" width="68" height="24" rx="12" fill="#eef2ff" stroke="#c7d2fe" />
            <text y="4">Pausa 5min</text>
          </g>
          <g transform="translate(210,203)">
            <rect x="-34" y="-16" width="68" height="24" rx="12" fill="#eef2ff" stroke="#c7d2fe" />
            <text y="4">Pausa 5min</text>
          </g>
        </g>

        {/* long break (slightly moved up as requested) */}
        <g transform="translate(220,84)" textAnchor="middle" fontFamily="sans-serif" fontSize="12">
          {/* slightly smaller box to match short pauses while keeping text legible */}
          <rect x="-55" y="-14" width="110" height="28" rx="12" fill="#e6fffa" stroke="#99f6e4" />
          <text y="4" fill="#064e3b" fontWeight={600} fontSize={12}>Descanso 15min</text>
        </g>
        </g>
      </svg>
      <figcaption className="sr-only">Quatro sessões de trabalho de 25 minutos separadas por pausas curtas de 5 minutos e um intervalo maior ao final do ciclo.</figcaption>
    </figure>
  );
};

const MetodologiaPage: React.FC = () => {
  return (
    <main id="main" className="metodologia-root" aria-labelledby="metodologia-h1">
      <Box component="header" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1000, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Typography id="metodologia-h1" component="h1" variant="h3" sx={{ mb: 2, color: '#063047' }}>
            Metodologia Pomodoro + Gamificação
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '70ch' }}>
            Um método prático para aumentar o foco e formar hábitos através de ciclos curtos de estudo (Pomodoro) combinado com micro-recompensas e elementos de gamificação.
          </Typography>
        </Box>
      </Box>

      <Box component="section" aria-labelledby="infografico-title" sx={{ py: 6 }}>
        <Box sx={{ maxWidth: 1000, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Typography id="infografico-title" component="h2" variant="h5" sx={{ mb: 2 }}>
            O ciclo Pomodoro — visual
          </Typography>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
            <Infographic />
          </Paper>
        </Box>
      </Box>

      <Box component="section" sx={{ py: 4 }} aria-labelledby="o-que-e-title">
        <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography id="o-que-e-title" component="h3" variant="h6" sx={{ mb: 1 }}>
                O que é a metodologia Pomodoro
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Pomodoro é uma técnica de gerenciamento de tempo que usa intervalos de estudo focado (normalmente 25 minutos) seguidos por pequenas pausas (5 minutos). Após quatro ciclos, recomenda-se um intervalo maior para recuperação. É simples, mensurável e ideal para estudantes.
              </Typography>

              <Typography component="h4" variant="subtitle1" sx={{ mt: 2, mb: 1 }}>Como funciona na nossa plataforma</Typography>
              <Typography variant="body2" color="text.secondary">
                Cada Pomodoro completado concede moedas. Conquistas são desbloqueadas por consistência. Badges aparecem no perfil. As recompensas permitem personalizar seu espaço virtual — criando incentivo para manter a rotina.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card variant="outlined" sx={{ bgcolor: '#fbfdff' }}>
                <CardContent>
                  <Typography component="h4" variant="subtitle1">Gamificação – elementos</Typography>
                  <Stack component="ul" spacing={1} sx={{ pl: 2, mt: 1 }}>
                    <li>🪙 Moedas por Pomodoro concluído</li>
                    <li>🏅 Conquistas por sequências e metas</li>
                    <li>🎖️ Badges para perfis e troféus</li>
                    <li>🛍️ Loja para trocar moedas por itens</li>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box component="section" sx={{ py: 4, bgcolor: 'background.default' }} aria-labelledby="beneficios-title">
        <Box sx={{ maxWidth: 1000, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Typography id="beneficios-title" component="h3" variant="h6" sx={{ mb: 2 }}>Benefícios esperados</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="subtitle1">Mais foco</Typography>
                <Typography variant="body2" color="text.secondary">Sessões curtas reduzem procrastinação e aumentam a atenção.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="subtitle1">Engajamento</Typography>
                <Typography variant="body2" color="text.secondary">Recompensas motivam retomadas frequentes e consistência.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="subtitle1">Formação de hábitos</Typography>
                <Typography variant="body2" color="text.secondary">Micro-hábitos se acumulam com ciclos regulares e feedback imediato.</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Recomendações de uso</Typography>
            <Stack component="ul" spacing={1} sx={{ pl: 3 }}>
              <li>Use cronômetro em ambiente sem distrações.</li>
              <li>Personalize intervalos nas configurações conforme sua necessidade.</li>
              <li>Combine metas diárias pequenas e celebre conquistas.</li>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ py: 6 }} aria-labelledby="passo-a-passo-title">
        <Box sx={{ maxWidth: 1000, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Typography id="passo-a-passo-title" component="h3" variant="h6" sx={{ mb: 3 }}>Passo a passo</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <div style={{ fontSize: 28 }}>🔐</div>
                <Typography variant="subtitle2">Iniciar sessão</Typography>
                <Typography variant="body2" color="text.secondary">Crie conta ou entre.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <div style={{ fontSize: 28 }}>⏱️</div>
                <Typography variant="subtitle2">Iniciar ciclo</Typography>
                <Typography variant="body2" color="text.secondary">Comece 25 minutos de foco.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <div style={{ fontSize: 28 }}>🪙</div>
                <Typography variant="subtitle2">Completar Pomodoro</Typography>
                <Typography variant="body2" color="text.secondary">Ganhe moedas e experiência.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <div style={{ fontSize: 28 }}>🛍️</div>
                <Typography variant="subtitle2">Trocar e personalizar</Typography>
                <Typography variant="body2" color="text.secondary">Use moedas para itens e temas.</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button href="/pomodoro" variant="contained" color="primary">Ir para Pomodoro</Button>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default MetodologiaPage;
