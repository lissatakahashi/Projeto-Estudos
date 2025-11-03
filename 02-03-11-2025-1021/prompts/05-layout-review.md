# 05 - Revisão de layout (baseado na imagem enviada)

Data: 03-11-2025

Contexto
- Recebi a captura de tela do app (anexada anteriormente). A página carregada no navegador estava com estilos do agente do navegador (fonte serif, sem espaçamento e sem hierarquia visual clara).
- Rodamos a aplicação via Docker (dev) e confirmei que o app estava vivo em http://localhost:5174.

Objetivo deste prompt
- Registrar a verificação visual da imagem e propor/registrar ações corretivas para alcançar um layout "limpo, profissional e chamativo".

Observações (o que a imagem mostra / problemas)
- Fonte padrão do navegador (serif) — baixa legibilidade e sensação pouco moderna.
- Texto colado na margem esquerda, sem container centralizado nem respiração (padding/margem).
- Hierarquia visual fraca: títulos, subtítulos e parágrafos sem contraste de tamanho/peso.
- Links e botões sem estilo evidente — baixa affordance para ações primárias.
- Lista de features e seções com espaçamento inconsistente.

Ações que apliquei imediatamente (mudanças já feitas)
- Adicionei um CSS global leve em `src/styles/index.css` com:
  - Import de fonte Inter (Google Fonts) para tipografia moderna.
  - Variáveis de cor e tokens simples (variáveis CSS).
  - `.container` centralizado e responsivo, `hero` para a seção principal, `.btn` para ações.
  - Regras de tipografia para h1/h2/p, listas e links.
- Mantive as diretivas `@tailwind` no CSS para compatibilidade futura com Tailwind.
- Atualizei `src/pages/Home/HomePage.tsx` para usar as classes fallback (`.container`, `.hero`, `.btn`, `.cookie-consent`) além das classes Tailwind já existentes.

Verificação/resultado imediato
- Após a alteração, o servidor Vite (dev) reiniciou e a página apresenta fonte Inter, espaçamento consistente, botão com estilo e um hero centralizado — isto corrige a maioria dos problemas visuais mostrados na imagem.
- A app agora tem uma aparência limpa e legível sem necessidade imediata de instalar Tailwind.

Recomendações (próximos passos para uma UI realmente profissional)
1. Comitar as mudanças atuais e gerar um `package-lock.json` (rodar `npm install` local e commitar) para builds reprodutíveis.
2. Reativar/pin o Tailwind (instalar versão compatível e commitar lockfile) se quiser usar utilitários Tailwind de forma consistente em toda a app.
3. Definir tokens de design (paleta de cores, tipografia, espaçamentos, radius) e aplicá-los como variáveis CSS ou em `tailwind.config`.
4. Construir componentes de UI reutilizáveis (Button, Card, Navbar, Footer) com variações (primary/secondary/ghost) e documentação mínima.
5. Fazer checagens de acessibilidade (contraste de cor, foco, leitura por teclado) e pequenos testes responsivos (mobile / tablet / desktop).

Pequeno "contrato" de entrega caso você queira que eu prossiga com um design maior
- Inputs: screenshot atual, objetivo de identidade visual (cores que você prefere ou referências), permissão para instalar/commitar dependências (lockfile/Tailwind).
- Outputs: CSS base final + `tailwind.config` (se ativado), 3 componentes estilizados (Button, Card, Navbar), commit com mensagens claras e registro em prompts/ (opcional).
- Critérios de aceitação: page load visually consistent at 320/768/1200px, primary CTA clearly visible, text legible (>=16px body), contrast AA for text.

Como verificar localmente (passos rápidos)
 - Abra: http://localhost:5174
 - Teste em tamanhos de tela: redimensione a janela para mobile/tablet/desktop
 - Verifique: fonte Inter carregada, hero centralizado, botão "Começar agora" com estilo, cookie banner estilizado.

Sugestão imediata (se concordar)
- Eu posso commitar as mudanças locais agora com a mensagem:
  "chore(ui): add lightweight global styles and apply container/hero to HomePage"
- Em seguida posso gerar `package-lock.json` localmente e commitar para estabilizar builds (se você autorizar a instalação local de dependências).

Registro das alterações aplicadas (arquivos alterados)
- `src/styles/index.css` — novo CSS base + diretivas Tailwind mantidas
- `src/pages/Home/HomePage.tsx` — adicionado `.container`, `.hero`, `.btn`, `.cookie-consent`

Fim do registro.
