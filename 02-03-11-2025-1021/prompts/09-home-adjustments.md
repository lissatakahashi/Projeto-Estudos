# Prompt 09 — Ajustes Home/Landing

Objetivo: Ajustar a Home/Landing do `tcc-prototype-web` para atender às diretrizes de design e acessibilidade especificadas.

Requisitos (resumo):
- Navbar com brand à esquerda (link `/`), links centrais (md+): Pomodoro, Loja, Inventário, Histórico, Sobre; direita: ThemeToggle + CTA "Começar" → `/pomodoro`. Mobile: hambúrguer abre Dialog/Sheet com foco preso; aria-controls/expanded/label corretamente aplicados.
- Hero em duas colunas (md+): esquerda H1 (máx 2 linhas), subtítulo, botões primário/ secundário; direita ilustração responsiva aria-hidden. Animações sutis com framer-motion.
- FeatureGrid: grid responsivo 1/2/3 com cards arredondados, ícone, título curto e texto 2 linhas.
- HowItWorks: 4 passos em desktop com conectores sutis.
- Structurar HomePage: Hero, FeatureGrid, HowItWorks, StatsStrip (opt), CTASection, CookieBanner; cada seção com py-16 md:py-20 e wrapper container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]; add skip-link global and id="conteudo-principal" on first heading.
- Footer: 3 colunas; CookieBanner persistente em localStorage.
- Acessibilidade: aria labels, focus order, @axe-core/react dev, contrast checks.
- Tailwind tokens: garantir cores e tipografia.
- Tests: unit test para HomePage e Playwright e2e.

Use este prompt como o registro do que foi executado.
