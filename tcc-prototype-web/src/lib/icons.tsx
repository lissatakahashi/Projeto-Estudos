import React from 'react';

export const Target: React.FC<any> = (props) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="10" stroke="currentColor"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>
);
export const Trophy: React.FC<any> = (props) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}><path d="M7 3h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V3z" stroke="currentColor"/></svg>
);
export const BarChart3: React.FC<any> = (props) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}><rect x="3" y="12" width="4" height="9" fill="currentColor"/><rect x="10" y="7" width="4" height="14" fill="currentColor"/><rect x="17" y="3" width="4" height="18" fill="currentColor"/></svg>
);

export const CheckCircle = (props: any) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
export const Gift = (props: any) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}><rect x="3" y="7" width="18" height="12" stroke="currentColor"/><path d="M12 7v12" stroke="currentColor"/></svg>
);
export const Settings = (props: any) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="3" stroke="currentColor"/></svg>
);
export const Clock = (props: any) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default {};
