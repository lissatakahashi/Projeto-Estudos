import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import HomePage from '../pages/Home/HomePage';

const Router: React.FC = () => (
  <AppShell>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pomodoro" element={<div>Pomodoro (placeholder)</div>} />
      <Route path="/shop" element={<div>Shop (placeholder)</div>} />
      <Route path="/inventory" element={<div>Inventory (placeholder)</div>} />
      <Route path="/history" element={<div>History (placeholder)</div>} />
      <Route path="/settings" element={<div>Settings (placeholder)</div>} />
      <Route path="/privacy" element={<div>Privacy (placeholder)</div>} />
      <Route path="/terms" element={<div>Terms (placeholder)</div>} />
      <Route path="/about" element={<div>About (placeholder)</div>} />
    </Routes>
  </AppShell>
);

export default Router;
