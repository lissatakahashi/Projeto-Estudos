# tcc-prototype-web

Protótipo paralelo (React + TypeScript + Vite) — escopo inicial.

## Como rodar

1. Instale dependências:

```bash
npm install
```

2. Rodar em desenvolvimento:

```bash
npm run dev
```

3. Testes unitários:

```bash
npm run test
```

4. E2E (Playwright):

```bash
npm run e2e
```

## Scripts importantes
- dev, build, preview
- test (vitest --run), test:watch
- lint (eslint src --ext .ts,.tsx), format (prettier --write .)
- e2e (playwright test)

## Padrões e ferramentas
- ESLint + Prettier (configuração recomendada), commitlint, husky, lint-staged
- Tailwind CSS para UI
- React Router, Zustand
- i18n preparado (pt-BR default)
- Acessibilidade: integração de @axe-core/react em desenvolvimento

## Escopo
Protótipo paralelo sem backend. Guardamos preferências e progresso em localStorage (LGPD: apenas local).
