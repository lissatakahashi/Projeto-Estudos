import React from 'react';

const StatsStrip: React.FC = () => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]">
      <div className="bg-card rounded-2xl shadow-sm p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-1">12.4k</div>
            <div className="text-sm text-muted">Sessões concluídas</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-1">1,234h</div>
            <div className="text-sm text-muted">Tempo focado</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-1">45</div>
            <div className="text-sm text-muted">Maior streak</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsStrip;
