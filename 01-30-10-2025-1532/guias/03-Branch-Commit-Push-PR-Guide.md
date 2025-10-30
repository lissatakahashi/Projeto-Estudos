# Processo de criação de branch, commit, push e Pull Request

Este guia descreve o fluxo recomendado para criar uma branch, levar pendências de commit, realizar o commit, push e abrir um Pull Request (PR) no GitHub.

## Passos do processo
1. Crie uma nova branch descritiva para sua tarefa:
   ```sh
   git checkout -b nome_da_branch
   ```
2. Adicione as alterações pendentes:
   ```sh
   git add .
   ```
3. Faça o commit das alterações:
   ```sh
   git commit -m "mensagem descritiva do commit"
   ```
4. Envie a branch para o repositório remoto:
   ```sh
   git push --set-upstream origin nome_da_branch
   ```
5. Crie um Pull Request (PR) para a branch main no GitHub.

## Recomendações para melhorar o processo
- Use nomes de branch descritivos e padronizados.
- Faça commits pequenos e frequentes, com mensagens claras.
- Sempre revise o código antes de abrir o PR.
- Solicite revisão de outros membros do time.
- Aguarde aprovação e verificação dos testes automáticos antes do merge.
- Documente o processo no AGENTS.md para referência futura.

Esse fluxo garante rastreabilidade, colaboração e qualidade no desenvolvimento.