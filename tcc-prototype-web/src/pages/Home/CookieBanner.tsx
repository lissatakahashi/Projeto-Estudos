import React from 'react';
import { Link } from 'react-router-dom';

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
      console.warn('LocalStorage não disponível:', e);
    }
  };

  if (accepted) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[min(92vw,960px)] bg-surface dark:bg-card border border-black/10 dark:border-white/10 p-5 rounded-xl shadow-lg z-50"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 id="cookie-banner-title" className="font-semibold text-sm mb-1 text-ink">
            Privacidade e Dados Locais
          </h3>
          <p id="cookie-banner-description" className="text-sm text-muted">
            Usamos armazenamento local para salvar suas preferências e progresso.
            Nenhum dado é enviado para servidores externos neste protótipo.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            to="/privacy"
            className="text-sm text-brand-600 hover:text-brand-700 underline focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded px-1"
          >
            Saiba mais
          </Link>
          <button
            onClick={accept}
            className="inline-flex items-center justify-center bg-brand-600 text-brand-contrast px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 whitespace-nowrap"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
