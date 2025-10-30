# Proteção da Branch main, Governança de Repositório e Boas Práticas no GitHub

## O que é a proteção da branch main?
A proteção da branch `main` é um conjunto de regras e restrições aplicadas à principal ramificação de um repositório Git, geralmente utilizada como referência estável do projeto. Essas regras impedem alterações diretas, exigindo revisões, aprovações e validações automáticas antes que qualquer modificação seja incorporada à branch principal.

### Exemplos de regras de proteção:
- Proibição de push direto na branch main
- Exigência de pull requests para alterações
- Revisão obrigatória de código por outros membros
- Execução de testes automatizados antes do merge
- Exigência de status de CI/CD aprovado

## O que é governança de repositório?
Governança de repositório refere-se ao conjunto de práticas, políticas e processos que garantem a organização, segurança, qualidade e rastreabilidade do desenvolvimento em um repositório. Inclui definição de papéis, controle de acesso, revisão de código, padronização de processos e documentação clara.

## Como aplicar governança e proteção no GitHub?
No GitHub, a governança é implementada por meio de configurações de branch protection, permissões de equipe, templates de pull request, políticas de revisão e integração contínua. Para proteger a branch main:
1. Acesse as configurações do repositório (Settings > Branches)
2. Crie ou edite uma regra de proteção para a branch main
3. Ative as opções desejadas (revisão obrigatória, status checks, proibição de force push, etc.)
4. Defina quem pode aprovar e mesclar alterações

## Uso recomendado durante o desenvolvimento
- Nunca faça push direto na branch main
- Sempre crie branches de feature, bugfix ou hotfix a partir da main
- Abra pull requests para propor alterações
- Solicite revisão de código de outros membros
- Aguarde a aprovação e a passagem dos testes automáticos antes do merge
- Mantenha a branch main sempre estável e pronta para produção

Essas práticas garantem maior segurança, qualidade e colaboração no desenvolvimento do projeto.