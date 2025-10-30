# Como solicitar revisão e aprovação de Pull Request no GitHub

Quando uma Pull Request (PR) está com a proteção de branch ativada, o merge só pode ser realizado após aprovação de um revisor com permissão de escrita. Siga os passos abaixo para garantir que sua PR seja revisada, aprovada e mesclada corretamente:

## Para quem abre a PR
1. **Abra a Pull Request normalmente**
   - Certifique-se de que todas as alterações estejam commitadas e a PR esteja aberta no repositório.
2. **Solicite revisão de um responsável**
   - No topo da PR, clique em "Reviewers" ou "Solicitar revisão".
   - Selecione a pessoa responsável (com permissão de escrita) para revisar sua PR.
3. **Aguarde a análise**
   - O responsável irá revisar o código, podendo aprovar, solicitar mudanças ou comentar.
4. **Faça ajustes se necessário**
   - Caso haja solicitações de alteração, realize os ajustes e faça novos commits na mesma branch. A PR será atualizada automaticamente.
5. **Aguarde a aprovação**
   - Após a aprovação, o botão de merge será liberado.
6. **Realize o merge**
   - Você ou o responsável podem concluir o merge após a aprovação.

## Para o revisor responsável
1. **Acesse a Pull Request**
   - Entre na aba "Pull requests" do repositório e selecione a PR pendente de revisão.
2. **Analise as alterações**
   - Revise o código, comentários e arquivos modificados.
3. **Aprove ou solicite mudanças**
   - Clique em "Review changes" (Revisar alterações).
   - Escolha "Approve" (Aprovar) se estiver tudo correto, ou "Request changes" (Solicitar mudanças) se necessário.
   - Deixe comentários claros e objetivos para o autor.
4. **Aguarde eventuais ajustes**
   - Se solicitou mudanças, aguarde o autor atualizar a PR e repita a revisão.
5. **Aprove e libere o merge**
   - Após aprovar, o botão de merge ficará disponível para o autor ou para você.
6. **Realize o merge se for sua responsabilidade**
   - Clique em "Merge pull request" para concluir a integração das alterações.

## Dicas
- Sempre comunique o autor sobre o status da revisão.
- Utilize comentários construtivos e objetivos.
- Certifique-se de que todos os testes e requisitos estejam atendidos antes de aprovar.

Esse processo garante qualidade, rastreabilidade e colaboração no desenvolvimento do projeto.