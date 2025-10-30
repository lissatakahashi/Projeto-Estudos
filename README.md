# Projeto Estudos

## 📘 Descrição
Uma pequena plataforma web gamificada para auxiliar no engajamento e na gestão do tempo durante os estudos (cronômetro Pomodoro, moedas por sessão e loja virtual). Este repositório contém o código front-end estático (HTML/CSS/JS) e documentação de processos de desenvolvimento.

## 🧩 Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript

---

## ⚙️ Como executar localmente
1. Abra o projeto no Visual Studio Code
2. Abra `index.html` no navegador (ou use a extensão Live Server)

---

## 📎 Onde está a configuração do projeto
- Não há um gerenciador de pacotes (por exemplo, `package.json`) neste repositório — o projeto é uma app estática. Arquivos importantes de configuração e documentação que governam processos e convenções estão no repositório:
	- `mcp.yaml` — arquivo de contexto/manifest (quando aplicável para ferramentas que usam esse padrão)
	- Pasta `01-30-10-2025-1532/guias` — guias de governança, fluxo Git e PR
	- Pasta `01-30-10-2025-1532/prompts` — prompts usados para gerar documentação e ações repetíveis
	- Proteção da branch `main` e regras de governança são configuradas via GitHub (Settings > Branches) e não por um arquivo do repositório.

---

## � Usando a IA como copiloto — Material de estudo e boas práticas
Este repositório inclui guias e prompts pensados para usar a IA (por exemplo, modelos de linguagem) como copiloto no desenvolvimento. Aqui estão as recomendações principais, extraídas da pasta `01-30-10-2025-1532`:

- Objetivo: Use a IA para acelerar tarefas repetitivas, gerar rascunhos de documentação, revisar trechos de código e gerar sugestões de commits/PRs — mas mantenha revisão humana antes de aplicar mudanças.

- Padronização de artefatos:
	- Ao criar pastas/arquivos de interação/documentação, siga o padrão definido em `AGENTS.md`: `NN-DD-MM-AAAA-HHMM` (NN = número sequencial).

- Fluxo Git recomendado (resumido a partir de `03-Branch-Commit-Push-PR-Guide.md`):
	1. Crie uma branch descritiva: `git checkout -b nome_da_branch`
	2. Adicione e comite alterações: `git add .` / `git commit -m "mensagem descritiva"`
	3. Envie a branch: `git push --set-upstream origin nome_da_branch`
	4. Abra Pull Request para `main` e solicite revisão.

- Governança e proteção de branch (resumo de `02-Github-Governanca-Branch-Main-Protection.md`):
	- Não fazer push direto em `main`.
	- Usar regras de proteção: revisão obrigatória, status checks (CI), proibição de force push.

- Revisão de PR (resumo de `04-Solicitar-Revisao-e-Aprovacao-PR.md`):
	- Solicite revisores com permissão de escrita.
	- Aguarde aprovação e verificação automática antes de fazer merge.

---

## 💡 Como pedir ajuda à IA (exemplos e padrão de prompts)
Use prompts claros, com contexto e exemplos esperados. Alguns pontos importantes:

- Forneça contexto mínimo: qual arquivo ou área do projeto, objetivo da tarefa e restrições (linguagem, estilo, testes, etc.).
- Peça um formato de saída (ex.: `README.md` em Markdown, commit message com 50/72 chars, changelog em bullet points).
- Inclua exemplos de comandos quando pedir automações Git.

Exemplo simples para gerar documentação a partir de uma pasta de guias:

"Leia os arquivos em `01-30-10-2025-1532/guias` e gere um README em português que resuma: 1) objetivo do repositório, 2) fluxo Git recomendado, 3) onde localizar os prompts e como reutilizá-los. Use bullets curtos e inclua links relativos para os arquivos." 

Prompt registrado (do repositório):
- "Por favor, crie um arquivo chamado AGENTS.md e já coloque essa orientação nele para quando eu pedir para criar pastas para documentação da minha interação" — isso gerou a regra de nomenclatura usada aqui.

---

## ✍️ Exemplo de uso prático (fluxo com a IA)
1. Você pede à IA: "Gere um rascunho de changelog para a branch `feature/x` com as mudanças listadas abaixo" e fornece as mudanças.
2. A IA responde com um rascunho que você revisa e edita.
3. Você cria o commit com a mensagem sugerida e abre o PR, usando a IA para gerar a descrição do PR e checklist.

Sempre verifique segurança, credenciais e efeitos colaterais antes de aplicar alterações geradas automaticamente.

---

## 📁 Referências internas
- `01-30-10-2025-1532/guias/01-AGENTS-Guide.md`
- `01-30-10-2025-1532/guias/02-Github-Governanca-Branch-Main-Protection.md`
- `01-30-10-2025-1532/guias/03-Branch-Commit-Push-PR-Guide.md`
- `01-30-10-2025-1532/guias/04-Solicitar-Revisao-e-Aprovacao-PR.md`
- `01-30-10-2025-1532/prompts/01-AGENTS-Prompt-to-create.md`
- `01-30-10-2025-1532/prompts/02-Branch-Commit-Push-PR-Prompt.md`

---

## ✅ Próximos passos sugeridos
1. Configurar proteção de branch `main` no GitHub (Settings > Branches) com: revisão obrigatória e checks de CI.
2. Padronizar templates de PR e ISSUE (opcionalmente adicionar `.github/PULL_REQUEST_TEMPLATE.md`).
3. Automatizar checks básicos (linters/testes) se o projeto crescer.

---

## Créditos
- Conteúdo gerado a partir dos guias e prompts internos na pasta `01-30-10-2025-1532`.

---

_Versão do documento: 2025-10-30 — material de estudo para uso da IA como copiloto no desenvolvimento deste projeto._
