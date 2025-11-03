# 08 - Prompt: Mudança de layout — Navbar, Footer e Home (Registro)

Ação registrada: documentar o prompt e o resultado das mudanças de layout solicitadas (Navbar, Footer, AppShell skip-link, Hero, FeatureGrid, HowItWorks, StatsStrip, CTA e CookieBanner) e listar os arquivos alterados para referência.

Objetivo deste prompt: manter um registro sequencial da alteração visual/arquitetural do protótipo `tcc-prototype-web` que substitui o layout anterior e implementa a nova Home/Landing conforme especificado pela aluna.

Data: 03-11-2025
Autor: Automação (registro)

Contexto resumido da solicitação:
- Redesenhar a Home/Landing com tokens, container e seções: Hero, FeatureGrid, HowItWorks, StatsStrip, CTASection e CookieBanner.
- Substituir Navbar e Footer pela nova versão com Wordmark, rotas principais e ThemeToggle; garantir skip-link apontando para `#conteudo-principal`.
- Garantir acessibilidade mínima (skip-link, aria, foco visível, prefers-reduced-motion) e persistência de tema em localStorage.

Arquivos alterados / criados (principais):
- `src/components/layout/AppShell.tsx` — skip-link atualizado para `#conteudo-principal` e layout principal.
- `src/components/layout/Navbar.tsx` — nova implementação com links (Pomodoro, Loja, Inventário, Histórico, Sobre), ThemeToggle e CTA "Começar"; menu mobile acessível.
- `src/components/layout/Footer.tsx` — novo rodapé com 3 colunas e copyright.
- `src/components/layout/ThemeToggle.tsx` — toggle leve com persistência em localStorage.
- `src/components/ui/Button.tsx`, `Card.tsx`, `Divider.tsx` — primitives UI minimais usadas no Home.
- `src/pages/Home/HomePage.tsx` — compõe as seções da Home e inclui `id="conteudo-principal"`.
- `src/pages/Home/Hero.tsx`, `FeatureGrid.tsx`, `HowItWorks.tsx`, `StatsStrip.tsx`, `CTASection.tsx`, `CookieBanner.tsx` — novas seções implementadas.
- `src/lib/motion.tsx`, `src/lib/icons.tsx` — shims locais para animação e ícones durante desenvolvimento.
- `tailwind.config.ts`, `src/styles/index.css` — tokens, variáveis CSS, container e fallback CSS adicionados.

Resumo das ações tomadas:
1. Implementei as novas versões dos componentes de layout e Home, seguindo as especificações de acessibilidade e design tokens.
2. Adicionei pequenas primitives UI (Button, Card, Divider) para reutilização.
3. Atualizei `tailwind.config.ts` para referenciar tokens via CSS variables e adicionei fallback CSS em `src/styles/index.css`.
4. Ajustei `AppShell` para que o `main` tenha `id="conteudo-principal"` — ponto alvo do skip-link do Navbar.

Critérios de aceite desta alteração (checklist):
- [ ] Navbar exibe corretamente os links e o ThemeToggle funciona e persiste o tema.
- [ ] Skip-link aparece em foco e leva o usuário para `#conteudo-principal`.
- [ ] Hero contém H1 principal "Foco com Pomodoro" (ou texto equivalente em pt-BR), subtítulo e CTA funcional.
- [ ] 3 cards de benefícios renderizam no `FeatureGrid`.
- [ ] CookieBanner aparece até o usuário aceitar e persiste a escolha.
- [ ] A Home é navegável por teclado e respeita `prefers-reduced-motion`.

Como validar (passos sugestivos):
1. Rodar `npm install` e `npm run dev`.
2. Abrir a Home em http://localhost:5174 e navegar com Tab; confirmar skip-link e foco em `main`.
3. Verificar presença do H1, CTA e dos 3 cards.
4. Aceitar o cookie banner e recarregar para garantir persistência.
5. Alternar tema com o ThemeToggle e recarregar para confirmar persistência.
6. Rodar `npx tsc --noEmit` e `npm run test` (vitest) para garantir que não há erros de tipagem nem testes quebrados.

Notas e observações técnicas:
- Mantive shims locais para `framer-motion` e `lucide-react` durante desenvolvimento; se quiser, removo os shims após instalar as bibliotecas reais.
- Alguns estilos dependem do Tailwind — ao instalar `tailwindcss` e executar a build, a aparência final pode se ajustar; incluí fallback CSS para evitar layout totalmente quebrado caso Tailwind não esteja ativo.
- Caso queira que eu faça commit e push dessas mudanças de layout imediatamente, posso executar:

```bash
git add -A && git commit -m "feat(layout): redesign Home, Navbar, Footer and UI primitives" && git push --set-upstream origin tcc-prototype-web/init
```

Registro: este arquivo serve como o registro do prompt que descreve a mudança de layout e lista os arquivos alterados. Use-o como referência para revisão de código e descrição do PR.

---

Se quiser, ajusto o conteúdo para incluir uma mensagem de commit específica, revisão de changelog ou instruções adicionais para revisores.
