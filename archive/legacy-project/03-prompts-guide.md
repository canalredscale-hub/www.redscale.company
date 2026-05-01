# 03 Prompts Guide

## Regras fixas de contexto

- Antes de agir, leia `project_brief.yaml`, `04-solution-research.md`, `00-user-guide.md`, `01-roadmap.md` e `02-mentalmap.md`.
- Sempre alinhe a solicitação com as trilhas aprovadas em `04-solution-research.md` e com a fase atual do `01-roadmap.md`.
- Use `README.md` como fonte de setup e preview local enquanto o site esta em reconstrucao.
- Ao concluir um ciclo, atualize `00-user-guide.md` e registre aprovações ou mudanças em `02-mentalmap.md`.
- Use apenas a memória deste repositório como fonte de verdade do projeto.

## Ordem de leitura recomendada

- `project_brief.yaml`: briefing estruturado e política de memória.
- `04-solution-research.md`: síntese aprovada da pesquisa obrigatória.
- `01-roadmap.md`: trilhas, marcos e critérios de saída.
- `00-user-guide.md`: status curto de retomada, próxima ação e ponto de parada.
- `02-mentalmap.md`: decisões, aprovações e mudanças de direção.
- `03-prompts-guide.md`: regras e prompts para acionar o agente.

## Próximos passos canônicos

1. Leia `00-user-guide.md` para entender o estado visual atual da home.
2. Leia `04-solution-research.md` e `01-roadmap.md` para manter a execucao alinhada ao objetivo do produto.
3. Use `README.md` para subir o preview local com `uv run python app/frontend/dev_server.py`.
4. Continue a construcao do topo para baixo usando `orquestrador-projeto/workflows/04-site-construction.md` e `orquestrador-projeto/skills/04-web-design-motion-build.md`.

## Prompts úteis por etapa

### Etapa 1. Reconstrução de contexto

- Workflow local sugerido: `orquestrador-projeto/workflows/01-discovery-and-scope.md`
- Skills locais sugeridas:
  - `orquestrador-projeto/skills/01-context-rebuild.md`

```text
Leia `project_brief.yaml`, `04-solution-research.md`, `01-roadmap.md`, `00-user-guide.md` e `02-mentalmap.md`. Reconstrua o contexto atual, identifique o próximo marco e destaque o que ainda precisa ser decidido antes de executar.
```

### Etapa 2. Planejamento do marco

- Workflow local sugerido: `orquestrador-projeto/workflows/02-implementation-cycle.md`
- Skills locais sugeridas:
  - `orquestrador-projeto/skills/02-milestone-planning.md`

```text
Considere a pesquisa aprovada e a fase atual do roadmap. Quebre o próximo marco em passos curtos, com dependências, riscos, validação e atualizações necessárias de memória.
```

### Etapa 3. Execução e handoff

- Workflow local sugerido: `orquestrador-projeto/workflows/03-release-and-handoff.md`
- Skills locais sugeridas:
  - `orquestrador-projeto/skills/03-execution-cycle.md`

```text
Execute apenas o necessário para o marco atual, valide a entrega e finalize com a atualização exata de `00-user-guide.md` e `02-mentalmap.md`, além do próximo passo coerente com o roadmap.
```

### Etapa 4. Construção de site

- Workflow local sugerido: `orquestrador-projeto/workflows/04-site-construction.md`
- Skills locais sugeridas:
  - `orquestrador-projeto/skills/04-web-design-motion-build.md`

```text
Construa o site do marco atual de ponta a ponta. Comece pelo objetivo de conversão e pela arquitetura da página, defina a direção visual, proponha motion e microinterações, escolha a stack e as bibliotecas com critério, implemente a interface em HTML/CSS/JS, valide acessibilidade, responsividade, performance e SEO, e finalize com a atualização de `00-user-guide.md` e `02-mentalmap.md`.
```

## Diretriz específica do workflow

## Uso deste workflow na pesquisa

- use este workflow para fechar a jornada principal do usuário antes de detalhar o roadmap
- separe claramente frontend, backend, autenticação, sessão e integrações
- trate deploy, observabilidade, segurança e performance como parte do baseline, não como pós-escopo

## O que a pesquisa precisa fechar

- qual é a experiência crítica que sustenta o objetivo final do produto
- quais contratos e dados sustentam essa experiência com segurança e escala
- quais ambientes, controles e readiness são necessários para colocar a aplicação em produção

## Foco especializado da pesquisa

- Fechar a jornada principal do usuário a partir da home institucional e dos CTAs para landing pages.
- Separar claramente frontend público, backend mínimo comercial, integrações de checkout e futura área /app.
- Definir contratos de dados e eventos para leads, CTAs, formulários, checkout e webhooks.
- Tratar deploy, observabilidade, segurança, SEO e performance como parte do baseline do produto.

## Memória essencial do workflow

- jornada crítica do usuário
- primeira experiência ou tela
- backend mínimo correspondente
- autenticação e sessão

## Processos adicionais a registrar

- Nenhum processo adicional informado.
