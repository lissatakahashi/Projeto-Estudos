import React from 'react';
import { Target, Trophy, BarChart3 } from '../../lib/icons';
import { motion } from '../../lib/motion';

const features = [
  {
    icon: Target,
    title: 'Foco concentrado',
    text: 'Ciclos Pomodoro com metas claras para máxima produtividade e resultados tangíveis.'
  },
  {
    icon: Trophy,
    title: 'Recompensas',
    text: 'Gamifique seu progresso com conquistas, badges e recompensas motivadores.'
  },
  {
    icon: BarChart3,
    title: 'Progresso visível',
    text: 'Acompanhe métricas detalhadas e visualize sua evolução ao longo do tempo.'
  },
];

const FeatureGrid: React.FC = () => (
  <section className="py-16 md:py-20 bg-muted/5">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]">
      <h2 className="text-sm font-semibold tracking-wider text-muted uppercase mb-8 text-center">
        Benefícios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow p-6 h-full">
              <div className="flex flex-col items-start gap-3">
                <div className="text-brand-600" aria-hidden="true">
                  <feature.icon />
                </div>
                <h3 className="font-semibold text-lg text-ink">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
