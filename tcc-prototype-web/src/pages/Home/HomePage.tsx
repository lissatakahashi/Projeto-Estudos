import React from 'react';

const HomePage: React.FC = () => {
  const [accepted, setAccepted] = React.useState(() => localStorage.getItem('lgpd_accepted') === 'true');

  const accept = () => {
    localStorage.setItem('lgpd_accepted', 'true');
    setAccepted(true);
  };

  return (
    <div>
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-4">Foco com Pomodoro + Gamificação</h1>
        <p className="text-lg mb-6">Um protótipo para estudar foco, recompensas e evolução.</p>
        <a href="/pomodoro" className="inline-block bg-primary text-white px-6 py-3 rounded" aria-label="Começar agora">Começar agora</a>
      </section>

      <section className="py-8 grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">Foque sem distrações</div>
        <div className="p-4 border rounded">Recompensas que motivam</div>
        <div className="p-4 border rounded">Histórico e evolução</div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Como funciona</h2>
        <ol className="list-decimal pl-6">
          <li>Pomodoro</li>
          <li>Recompensa</li>
          <li>Personalize</li>
          <li>Revise seu progresso</li>
        </ol>
      </section>

      <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border p-4 rounded shadow-lg" role="region" aria-label="LGPD banner">
        <p>Usamos armazenamento local para preferências e progresso. Sem backend neste protótipo.</p>
        {!accepted && (
          <div className="mt-2">
            <button onClick={accept} className="mr-2 px-3 py-1 bg-primary text-white rounded">Aceitar</button>
            <a href="/privacy" className="underline">Saiba mais</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
