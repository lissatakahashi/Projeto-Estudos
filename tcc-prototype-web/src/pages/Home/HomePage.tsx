import React from 'react';
import Hero from './Hero';
import FeatureGrid from './FeatureGrid';
import HowItWorks from './HowItWorks';
import StatsStrip from './StatsStrip';
import CTASection from './CTASection';
import CookieBanner from './CookieBanner';

const HomePage: React.FC = () => (
  <div>
    <Hero />
    <FeatureGrid />
    <HowItWorks />
    <StatsStrip />
    <CTASection />
    <CookieBanner />
  </div>
);

export default HomePage;
