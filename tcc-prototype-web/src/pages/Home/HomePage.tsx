import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Hero from './Hero';
import FeatureGrid from './FeatureGrid';
import HowItWorks from './HowItWorks';
import StatsStrip from './StatsStrip';
import CTASection from './CTASection';
import CookieBanner from './CookieBanner';

const HomePage: React.FC = () => (
  <Box>
    <Hero />

    {/* Group benefits + how-it-works into a single rounded Paper that overlaps the hero */}
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: '32px',
            p: { xs: 3, md: 5 },
            boxShadow: '0 10px 36px rgba(2,6,23,0.04)',
            mt: { xs: 4, md: -14 },
            bgcolor: 'background.paper',
          }}
        >
          <FeatureGrid />
          <HowItWorks />
        </Paper>
      </Container>
    </Box>

    <StatsStrip />
    <CTASection />
    <CookieBanner />
  </Box>
);

export default HomePage;
