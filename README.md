# site-institucional-vendas

Projeto iniciado pelo orquestrador global com workflow `web_app`.

## Ordem de leitura inicial

- `project_brief.yaml`: briefing estruturado e politica de memoria.
- `04-solution-research.md`: sintese aprovada da pesquisa obrigatoria.
- `01-roadmap.md`: trilhas, marcos e criterios de saida.
- `00-user-guide.md`: status curto, ponto de parada e referencia atual da interface.
- `02-mentalmap.md`: decisoes, aprovacoes e mudancas de direcao.
- `03-prompts-guide.md`: regras e prompts para acionar o agente.

## Resumo atual

- Frontend ativo: construcao autoral do site REDSCALE do zero, em HTML e CSS, com evolucao incremental de cima para baixo.
- Escopo atual do frontend: base global da home e primeiro desenho do header com logo textual e casca arredondada.
- Estado atual: o projeto nao usa mais espelhos, templates Webflow ou assets de sites terceiros como base ativa.

## Estrutura atual do frontend

- `app/frontend/index.html`: estrutura atual da home em construcao.
- `app/frontend/styles.css`: estilos globais e componentes visuais iniciais do site.
- `app/frontend/main.js`: microinteracoes e animacoes do header.
- `app/frontend/assets/fonts/AspektaVF.woff2`: fonte local usada no logo.

Importante:

- A implementacao atual esta sendo feita do zero e deve seguir as decisoes registradas em `00-user-guide.md` e `02-mentalmap.md`.
- Mudancas visuais relevantes precisam atualizar a memoria do projeto no mesmo ciclo.

## Como visualizar o site localmente

Nao abra `index.html` diretamente no navegador. Use um servidor HTTP local para evitar problemas com assets e fontes.

### 1. Sincronize o ambiente

```powershell
uv sync
```

O projeto deve usar apenas `uv` para ambiente e execucao local; nao depende de `pyenv`.

### 2. Suba o servidor local

```powershell
uv run python app/frontend/dev_server.py
```

macOS / Linux:

```sh
uv run python app/frontend/dev_server.py
```

### 3. Abra no navegador

```text
http://127.0.0.1:8000
```

Para parar o servidor, use `Ctrl + C`.

## Checklist rapido de checagem

| # | O que conferir |
|---|----------------|
| 1 | Background global branco em `#ffffff` |
| 2 | Header com casca retangular arredondada, centralizada na largura util |
| 3 | Logo textual `Redscale` em `25px`, com fonte `Aspekta` local, cor `#262626` e tracking negativo |
| 4 | CSS carregando corretamente a partir de `app/frontend/styles.css` |
| 5 | JS carregando corretamente a partir de `app/frontend/main.js` |
| 6 | Proxima area de main ainda vazia, pronta para receber os blocos seguintes da home |

## Validacao local

No momento, a validacao e visual/manual porque a nova home esta sendo reconstruida do zero e ainda nao existe suite de testes em `tests/`.

Use o servidor local acima e confira o checklist rapido a cada novo ciclo de UI.

O servidor local em `app/frontend/dev_server.py` envia headers de `no-store`, entao o navegador tende a carregar sempre a versao atual de `index.html` e `styles.css` sem depender de query string de cache-busting.
