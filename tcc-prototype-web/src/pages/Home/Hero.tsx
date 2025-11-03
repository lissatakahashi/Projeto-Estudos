import React from 'react';
import { motion } from '../../lib/motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]">
        <div className="grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              id="conteudo-principal"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink mb-4"
            >
              Foco com Pomodoro + Gamificação
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.25 }}
              className="text-lg text-muted max-w-prose mb-6"
            >
              Use ciclos focados e recompensas simples para criar hábitos reais e mensuráveis.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.25 }}
            >
              <Link
                to="/pomodoro"
                className="inline-flex items-center justify-center bg-brand-600 text-brand-contrast px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              >
                Começar agora
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center border border-muted/30 text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/5 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              >
                Conheça a metodologia
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="order-first md:order-last flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.25 }}
            aria-hidden={true}
          >
            {/* Simple SVG placeholder illustration (decorative) */}
            <svg
              width="360"
              height="240"
              viewBox="0 0 360 240"
              fill="none"
              className="w-full max-w-[520px] mx-auto aspect-[4/3] rounded-2xl bg-[color:var(--card)]"
            >
              <rect x="0" y="0" width="360" height="240" rx="16" fill="var(--color-card)" />
              <circle cx="80" cy="80" r="28" fill="var(--color-brand-600)" />
              <rect x="130" y="60" width="180" height="18" rx="6" fill="#e6eef8" />
              <rect x="130" y="90" width="120" height="14" rx="6" fill="#f1f5f9" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
