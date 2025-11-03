# Guia: Tecnologias e Ferramentas adotadas em `tcc-prototype-web`

Este guia rápido explica as escolhas de tecnologias e ferramentas que usamos no projeto tcc-prototype-web, e por que cada peça foi escolhida. O objetivo é dar um ponto de partida claro para colaboradores e para decisões futuras.

> Estrutura: visão geral -> motivos da escolha -> como rodar localmente -> links para aprofundamento.

---

## Visão geral

O protótipo `tcc-prototype-web` é uma aplicação frontend moderna construída com foco em velocidade de desenvolvimento, acessibilidade e facilidade de manutenção. As principais tecnologias usadas são:

- React 18 + TypeScript
- Vite (bundler/dev server)
- Tailwind CSS (v4) com tokens e plugin Vite
- Framer Motion para animações suaves
- Lucide-react para ícones (leve e acessível)
- Zustand para estado local simples
- React Router v6 para roteamento
- Vitest (unit tests) e Playwright (e2e)
- Axe-core (dev) para checagens de acessibilidade
- Docker multi-stage + docker-compose para dev/preview/prod workflows

---

## Por que cada escolha?

### React + TypeScript
- React é a biblioteca dominante para UIs declarativas; combina bem com Vite para desenvolvimento rápido.
- TypeScript fornece tipagem estática que reduz bugs e melhora a produtividade em código compartilhado.
- Links:
  - https://reactjs.org/
  - https://www.typescriptlang.org/

### Vite
- Tempo de inicialização e HMR extremamente rápidos (ideal para dev iterativo).
- Configuração minimalista e integração com ESM moderna.
- Optamos por Vite 5+ para aproveitar melhorias de performance.
- Link: https://vitejs.dev/

### Tailwind CSS (v4) + @tailwindcss/vite
- Tailwind acelera o desenvolvimento CSS com utilitários e tokens.
- A versão 4 moveu o plugin PostCSS para uma integração separada; usamos o plugin Vite (`@tailwindcss/vite`) para integração fluida com Vite.
- Mantemos tokens e variantes (light/dark) no `tailwind.config.ts` para consistência do design.
- Link: https://tailwindcss.com/

### Framer Motion
- Oferece uma API simples e performática para animações declarativas; ideal para micro-interações (entradas, CTAs, transições entre seções).
- Link: https://www.framer.com/motion/

### Lucide React
- Ícones modernos, leves e acessíveis. Preferimos lucide por sua simplicidade e por suportar tree-shaking.
- Link: https://lucide.dev/

### Zustand
- Estado global/local simples, sem boilerplate (alternativa leve ao Redux para este tipo de protótipo).
- Útil para temas e estado simples de UI.
- Link: https://zustand-demo.pmnd.rs/

### React Router v6
- Roteamento poderoso e declarativo, com suporte à composição de rotas e fragmentos de UI para SPAs.
- Link: https://reactrouter.com/

### Testes: Vitest + Playwright
- Vitest: execução rápida de testes unitários com compatibilidade com Vite e JSDOM.
- Playwright: testes end-to-end confiáveis em Chromium/Firefox/WebKit; usamos para smoke/e2e.
- Também adicionamos `@axe-core/react` (dev) para checagens rápidas de acessibilidade durante desenvolvimento.
- Links:
  - https://vitest.dev/
  - https://playwright.dev/
  - https://github.com/dequelabs/axe-core

### Docker / Docker Compose
- Multi-stage Dockerfile: separa etapas de deps, build e runner para imagens menores e reproduzíveis.
- Temos dois workflows `docker-compose.yml` (dev por padrão) e `docker-compose.prod.yml` (preview/runner):
  - Dev compose monta o código (`./:/app`) e usa um volume anônimo para `/app/node_modules` para evitar sobrescrever as dependências instaladas na imagem. Ele também executa um `npm ci` no container quando necessário para garantir que `devDependencies` (ex.: `@tailwindcss/vite`) existam dentro do container.
  - Prod/preview compose usa o estágio `runner` para servir os artefatos construídos (`vite build` + `vite preview`).
- Essa separação resolve problemas comuns em macOS (EACCES) e mantém o fluxo de desenvolvimento rápido com HMR.
- Links:
  - https://docs.docker.com/
  - https://docs.docker.com/compose/

---

## Como rodar (resumo rápido)

1) Desenvolvimento local (recomendado — HMR):

```bash
# roda o compose padrão (dev)
docker compose up --build
```

Isto monta o projeto na imagem e executa Vite em `--host 0.0.0.0 --port 5174`.

2) Preview / produção (servedor de build):

```bash
# usa o arquivo renomeado para preview/runner
docker compose -f docker-compose.prod.yml up --build
```

3) Rodar testes unitários e e2e:

```bash
# unit tests
npm run test

# Playwright e2e (recomendado após o server de dev estar up)
npm run e2e
npx playwright install # já executado no ambiente, mas útil se faltarem browsers
```

---

## Observações e dicas práticas

- macOS e volumes: macOS pode causar problemas de permissão em bind mounts. Nosso dev compose resolve isso temporariamente executando `chown -R node:node /app` e rodando o container como `root` para permitir que Vite escreva nos arquivos montados. Essa é uma dev convenience — não use em produção.

- Tailwind v4/plugin: a versão mais nova separou o plugin PostCSS; a integração com Vite é feita via `@tailwindcss/vite` e o `vite.config.ts` usa import dinâmico para evitar erros ESM/CJS durante builds e previews. Se atualizar Tailwind, verifique as notas de migração.

- Dependências no container: o dev compose faz `npm ci` no container para garantir que `node_modules` exista dentro do volume anônimo quando o host não forneça. Isso garante que `@tailwindcss/vite` exista no runtime do dev server.

- Acessibilidade: usamos `@axe-core/react` em modo dev para destacar problemas acessíveis rapidamente; complementamos com um skip-link e preferências de `prefers-reduced-motion`.

---

## Links e leituras recomendadas

- React: https://reactjs.org/
- TypeScript: https://www.typescriptlang.org/
- Vite: https://vitejs.dev/
- TailwindCSS: https://tailwindcss.com/
- @tailwindcss/vite (plugin): https://github.com/tailwindlabs/tailwindcss
- Framer Motion: https://www.framer.com/motion/
- Lucide: https://lucide.dev/
- Zustand: https://github.com/pmndrs/zustand
- Vitest: https://vitest.dev/
- Playwright: https://playwright.dev/
- Axe-core: https://github.com/dequelabs/axe-core
- Docker & Compose: https://docs.docker.com/

---

Se quiser, eu posso:
- Adicionar este resumo como seção no `README.md` do `tcc-prototype-web`.
- Completar com exemplos de configuração (snippets de `tailwind.config.ts`, `vite.config.ts`) ou checklist para PRs (linters/tests).