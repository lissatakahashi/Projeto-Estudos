import React from 'react';
import { motion } from '../../lib/motion';
import { CheckCircle, Gift, Settings, Clock } from '../../lib/icons';

const steps = [
  { icon: Clock, title: 'Inicie o Pomodoro', text: 'Configure ciclos de foco e pausas personalizados para seu ritmo.' },
  { icon: Gift, title: 'Ganhe recompensas', text: 'Acumule pontos ao completar sessões e conquiste badges.' },
  { icon: Settings, title: 'Personalize sua jornada', text: 'Ajuste timers, metas e recompensas conforme sua necessidade.' },
  { icon: CheckCircle, title: 'Acompanhe o progresso', text: 'Revise suas métricas, analise padrões e celebre conquistas.' },
];

const HowItWorks: React.FC = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]">
      <h2 className="text-2xl font-semibold mb-8 text-center text-ink">Como funciona</h2>
      <div className="relative">
        <div className="hidden md:block absolute top-0 left-0 right-0 h-px border-t border-dashed border-muted/40" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 md:pt-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-brand-600/10 text-brand-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {i + 1}
                </div>
                <div className="text-brand-600" aria-hidden="true">
                  <step.icon />
                </div>
              </div>
              <h4 className="font-semibold text-base mb-2 text-ink">{step.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
