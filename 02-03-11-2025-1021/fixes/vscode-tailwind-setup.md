# Observação — migração para MUI

Este documento descrevia como suprimir avisos do VS Code relacionados ao Tailwind CSS. O projeto foi migrado para MUI (Material UI); portanto essas instruções são hoje obsoletas. Mantemos o conteúdo abaixo apenas para referência histórica.

---

# Como remover os avisos "Unknown at rule @tailwind" no VS Code (obsoleto)

## Problema
O VS Code mostra avisos amarelos nas linhas 8, 9 e 10 do arquivo `index.css`:
```
Unknown at rule @tailwind css(unknownAtRules)
```

## Causa
O linter CSS padrão do VS Code não reconhece as diretivas específicas do Tailwind (`@tailwind`, `@apply`, `@layer`, `@screen`).

**Isso é completamente normal e não afeta o funcionamento do projeto (histórico).**

## Solução 1: Instalar a extensão oficial Tailwind CSS IntelliSense (Recomendado — histórico)

1. Abra o painel de extensões no VS Code (Cmd+Shift+X ou Ctrl+Shift+X)
2. Pesquise por "Tailwind CSS IntelliSense"
3. Instale a extensão publicada por "Tailwind Labs"
4. Recarregue o VS Code

**Benefícios (histórico):**
- Remove os avisos de "unknown at rule"
- Adiciona autocomplete para classes do Tailwind
- Mostra preview de cores ao passar o mouse
- Sugere variantes e utilities

## Solução 2: Configurar o linter CSS para ignorar regras do Tailwind (histórico)

Crie ou edite o arquivo `.vscode/settings.json` na raiz do projeto:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

Isso desabilita o aviso para **todas** as regras CSS desconhecidas (não apenas Tailwind).

## Solução 3: Desabilitar validação CSS apenas para arquivos com Tailwind (histórico)

Adicione no `.vscode/settings.json`:

```json
{
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false
}
```

**Nota:** Isso desabilita toda a validação CSS do VS Code. Use apenas se você tiver outras ferramentas de lint (como Stylelint).

## Recomendação

Como o projeto agora usa MUI, estas instruções são fornecidas somente para histórico. Não é necessário instalar Tailwind-related extensions.

## Verificação (histórica)

Após aplicar qualquer uma das soluções:
1. Recarregue o VS Code (Cmd+Shift+P → "Reload Window")
2. Abra novamente o arquivo `src/styles/index.css`
3. Os avisos amarelos devem ter desaparecido

## Nota importante

Esses avisos **NÃO afetam** (histórico):
- ✅ A compilação do projeto
- ✅ O funcionamento do Tailwind
- ✅ O build de produção
- ✅ O dev server

São apenas avisos visuais do editor que podem ser ignorados ou removidos com as configurações acima.
