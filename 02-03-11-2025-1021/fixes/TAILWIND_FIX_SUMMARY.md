# Tailwind @apply Transform Errors - Resolution Summary

## Problem
The dev server was showing persistent Tailwind plugin overlay errors:
- "Cannot apply unknown utility class `py-16`"
- "Cannot apply unknown utility class `rounded-2xl`"
- Similar errors for other utilities used with `@apply` in CSS files

## Root Cause
The `@tailwindcss/vite` plugin in development mode was encountering `@apply` directives before the JIT engine had fully registered the utility candidates, causing pre-transform "unknown utility" errors. This is a known issue in certain Tailwind v4.x + Vite plugin combinations when using `@apply` with responsive variants or certain utilities in CSS files.

## Solution Applied
Switched from using `@apply` in CSS files to **plugin-generated component classes** defined in `tailwind.config.ts`. This is the recommended production approach and completely eliminates the transform errors.

### Changes Made

# Migração de Tailwind para MUI — Resumo

Este documento resume a migração do projeto de Tailwind CSS para MUI (Material UI).

## Motivo
Houve problemas recorrentes com transformações `@apply` e com o pipeline de CSS (Tailwind + Vite) que tornaram a manutenção mais complexa. A migração para MUI reduz dependências de build-time e fornece componentes acessíveis e tematizáveis prontos.

## O que foi alterado

- Dependências:
  - Removido Tailwind-related packages do `package.json`.
  - Adicionados `@mui/material`, `@mui/icons-material`, `@emotion/react` e `@emotion/styled`.

- Configuração:
  - `tailwind.config.ts` neutralizado (conteúdo removido).
  - `postcss.config.js` mantido vazio para evitar erros em setups que esperam esse arquivo.

- Código:
  - Removidos imports base de CSS do `src/main.tsx`.
  - Adicionado `src/theme.ts` com um tema base e `ThemeProvider` em `src/main.tsx`.
  - `src/components/layout/Navbar.tsx` reescrito para MUI (AppBar, Toolbar, Drawer, Button).

## Próximos passos recomendados

1. Atualizar `package-lock.json`: rode `npm install` localmente e commit o lockfile para que builds Docker funcionem (`npm ci` no Docker espera lockfile consistente).
2. Migrar os componentes da home (Hero, FeatureGrid, CTASection, Footer, CookieBanner) para MUI.
3. Ajustar `src/theme.ts` para casar exata paleta e espaçamentos do protótipo.
4. Remover quaisquer arquivos CSS remanescentes que não sejam necessários.

Se quiser que eu continue com a migração das seções da home agora, eu posso proceder e aplicar as mudanças seguintes.

```
