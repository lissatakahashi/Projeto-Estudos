# 04 - Prompt: Tentar executar o protótipo em Docker e resolver problemas do editor

Objetivo:
Tentar rodar o protótipo `tcc-prototype-web` via Docker e, antes disso, reduzir e resolver os erros que aparecem no painel "Problems" do VS Code para facilitar a execução e depuração.

Plano de ação (passos concretos):
1. Ajustes leves no projeto para reduzir erros de TypeScript no editor (sem instalar dependências):
   - Adicionar declarações mínimas de tipos (`src/env.d.ts`, `src/global.d.ts`) para ImportMeta.env e imports de imagens/CSS e jsx-runtime.
   - Ajustar `tcc-prototype-web/tsconfig.json` para incluir `types` úteis (ex.: `vite/client`, `node`) e garantir `include` de arquivos `.d.ts`.
2. Comitar essas alterações na branch `tcc-prototype-web/init`.
3. Tentar rodar o projeto com Docker (dev): `docker compose up --build` dentro de `tcc-prototype-web`.
4. Documentar todos os erros encontrados (no editor e no terminal), corrigi-los quando possível, e registrar os resultados.

Instruções para quem for reproduzir (resumo):
- Os arquivos de suporte to-do:
  - `tcc-prototype-web/tsconfig.json` (ajustado)
  - `tcc-prototype-web/src/env.d.ts` (novo)
  - `tcc-prototype-web/src/global.d.ts` (novo)

Data: 03-11-2025
Autor: Automação (registro)
