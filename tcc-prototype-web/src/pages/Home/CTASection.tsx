import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]">
      <div className="bg-brand-600 text-brand-contrast rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-3">Pronto para começar?</h3>
        <p className="text-base text-brand-contrast/90 mb-6 max-w-2xl mx-auto">
          Inicie seu primeiro Pomodoro e comece a evoluir hoje. Transforme sua produtividade.
        </p>
        <Link
          to="/pomodoro"
          className="inline-flex items-center justify-center bg-brand-contrast text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
        >
          Iniciar Pomodoro
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
