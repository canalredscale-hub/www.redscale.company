# site-institucional-vendas

Projeto iniciado pelo orquestrador global com fluxo de trabalho `web_app`.

## Ordem de leitura inicial

- `project_brief.yaml`: briefing estruturado e politica de memoria.
- `04-solution-research.md`: sintese aprovada da pesquisa obrigatoria.
- `01-roadmap.md`: trilhas, marcos e criterios de saida.
- `00-user-guide.md`: status curto, ponto de parada e referencia atual da interface.
- `02-mentalmap.md`: decisoes, aprovacoes e mudancas de direcao.
- `03-prompts-guide.md`: regras e prompts para acionar o agente.

## Resumo atual

- Frontend ativo: construcao autoral do site REDSCALE do zero, em HTML e CSS, com evolucao incremental de cima para baixo.
- Escopo atual do frontend: home institucional em pagina unica com header, hero textual, faixa de video com asset local `redscale-1.mp4`, secao `Sobre`, secao `Servicos` com lista tipografica interativa, CTA com imagem entre `Servicos` e `Metodo`, secao `Metodo`, secao `Produtos`, secao `Redsights` e CTA final em `#contato`.
- Estado atual: o projeto nao usa mais espelhos, templates Webflow ou assets de sites terceiros como base ativa.

## Estrutura atual do frontend

- `app/frontend/index.html`: estrutura atual da home em construcao.
- `app/frontend/styles.css`: estilos globais e componentes visuais iniciais do site.
- `app/frontend/paint-animations.css`: logica compartilhada das animacoes tipograficas por recorte.
- `app/frontend/main.js`: microinteracoes e animacoes do header.
- `app/frontend/assets/fonts/AspektaVF.woff2`: fonte local usada no logo.

Padrao tipografico atual:

- `Neue Helvetica Georgian 65 Medium`: fonte oficial de escrita de texto do projeto.
- `Aspekta`: fonte usada em titulos e marcas principais.
- `IBM Plex Sans`: fonte de apoio para navegacao, labels e CTAs.

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
| 1 | Background global cinza-claro em `#f2f2f2`, com os shapes de `Sobre` e `Servicos` ligeiramente mais escuros e o menu central mantendo blur sobre o mesmo tom |
| 2 | Header com casca retangular arredondada, centralizada na largura util |
| 3 | Hero textual com `Cresca melhor.` e `Produza mais.` mais a copy auxiliar a direita |
| 4 | Faixa de video com CTA sobreposto no canto inferior direito |
| 5 | Secao `Sobre` com label `Sobre`, esteira animada em `#F2F2F2` e dois blocos complementares abaixo dela |
| 6 | Secao `Servicos` exibindo a lista tipografica interativa de ofertas com miniaturas e paines de copy |
| 7 | CTA com imagem entre `Servicos` e `Metodo`, usando `cta-img.jpg`, titulo empilhado em `#F2F2F2`, squircle no mesmo desenho do logo, overlay mais denso e a mesma altura do mosaico de video do hero |
| 8 | Secao `Metodo` abaixo do CTA com imagem, com destaque em `Vem do resultado!`, destaque em `elevar a produtividade` no subtexto e tres cards de jornada em `#E1E1E1`, sem borda visivel e com textos ampliados |
| 9 | Secoes `Produtos`, `Redsights` e CTA final em `#contato` presentes na home |
| 10 | CSS carregando corretamente a partir de `app/frontend/styles.css` e `app/frontend/paint-animations.css` |
| 11 | JS carregando corretamente a partir de `app/frontend/main.js` |

## Validacao local

No momento, a validacao e visual/manual porque a nova home esta sendo reconstruida do zero e ainda nao existe suite de testes em `tests/`.

Use o servidor local acima e confira o checklist rapido a cada novo ciclo de UI.

O servidor local em `app/frontend/dev_server.py` envia headers de `no-store`, entao o navegador tende a carregar sempre a versao atual de `index.html` e `styles.css` sem depender de query string de cache-busting.
