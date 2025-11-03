# 03 - Prompt: Dockerizar o protótipo tcc-prototype-web

Objetivo:
Criar tudo que for preciso para rodar o protótipo `tcc-prototype-web` em Docker — tanto para desenvolvimento (modo dev com volume montado) quanto para produção (build + preview). Incluir Dockerfile multi-stage, docker-compose para desenvolvimento, `.dockerignore` e adaptar o `package.json` conforme necessário (ex.: script `start` para servir a build). Commitar as mudanças na branch `tcc-prototype-web/init`.

Requisitos que devem ser atendidos:
- Dockerfile multi-stage que permita construir a aplicação e servir a build com `vite preview`.
- `docker-compose.yml` para rodar em desenvolvimento com volume montado e porta mapeada (5173).
- `.dockerignore` para evitar copiar `node_modules`, `dist`, `.git`, etc.
- `package.json` atualizado com um script `start` apropriado para produção (preview) — ex.: `vite preview --host 0.0.0.0 --port 4173`.
- Registrar este prompt e o retorno do assistente em arquivo separado (número sequencial).

Ações realizadas (resumo do retorno do assistente):
- Adicionei `tcc-prototype-web/Dockerfile` (multi-stage) que:
  - instala dependências,
  - roda `npm run build`,
  - copia `dist` e `node_modules` para a imagem final e expõe a porta 4173;
  - comando final: `npm run start` (onde `start` usa `vite preview --host 0.0.0.0 --port 4173`).
- Adicionei `tcc-prototype-web/docker-compose.yml` configurado para desenvolvimento:
  - monta `./tcc-prototype-web` em `/app`, mantém `node_modules` do container, e executa `npm run dev -- --host 0.0.0.0`;
  - mapeia a porta `5173:5173`.
- Adicionei `tcc-prototype-web/.dockerignore` (node_modules, dist, .vscode, .git, .env, logs).
- Atualizei `tcc-prototype-web/package.json` para incluir o script `start`.
- Comitei todas as mudanças na branch `tcc-prototype-web/init`.

Como usar (local):
1) Desenvolvimento com docker-compose

```bash
cd tcc-prototype-web
docker compose up --build
```

Acessar: http://localhost:5173

2) Build de produção e rodar o container (exemplo)

```bash
# build image
docker build -t tcc-prototype-web:latest .
# run container (expõe 4173)
docker run -p 4173:4173 tcc-prototype-web:latest
```

Notas / observações:
- O `docker-compose.yml` está pensado para facilitar desenvolvimento (hot-reload via Vite). Em alguns sistemas (macOS), pode ser necessário ajustar permissões ou usar polling para watch; usar variáveis de ambiente (ex.: CHOKIDAR_USEPOLLING) se necessário.
- O `Dockerfile` usa `vite preview` para servir a build; se preferir usar um servidor estático leve (ex.: `serve` ou `http-server`) posso trocar a configuração.
- Não fiz push para o remoto (apenas commit local). Se desejar, posso empurrar a branch.

Data: 03-11-2025
Autor: Automação (registro)
