# Rules

Rules locais do orquestrador do projeto. Estas regras complementam `project_brief.yaml`, `04-solution-research.md` e `01-roadmap.md` com critérios operacionais de execução.

## Catálogo recomendado

### `01-memory-and-evidence.md`

- Título: Memória determinística e evidências
- Resumo: Toda etapa relevante precisa deixar rastro claro na memória essencial do projeto.
- Pontos principais:
  - Atualizar `00-user-guide.md` e `02-mentalmap.md` ao fim de cada ciclo relevante.
  - Associar decisões aprovadas ao marco correspondente do `01-roadmap.md`.
  - Registrar evidências mínimas de conclusão antes de avançar para a próxima etapa.

### `02-safe-execution.md`

- Título: Execução segura e incremental
- Resumo: Executar apenas o necessário para o marco atual, reduzindo risco de deriva e retrabalho.
- Pontos principais:
  - Ler `project_brief.yaml`, `04-solution-research.md` e `01-roadmap.md` antes de agir.
  - Quebrar trabalho grande em ciclos pequenos com critérios de saída claros.
  - Explicitar riscos, dependências e impactos de cada entrega relevante.

### `03-change-control.md`

- Título: Controle de mudanças
- Resumo: Mudanças estruturais precisam de validação e histórico de aprovação.
- Pontos principais:
  - Registrar impacto em arquitetura, operação e qualidade.
  - Amarrar mudanças ao racional documentado em `02-mentalmap.md`.
  - Definir como validar a alteração antes de considerá-la concluída.
