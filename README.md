# Redscale Company v2 - guia de manutenção

Este projeto é um site estático localizado em `app/frontend`. As páginas usam HTML, CSS e JavaScript puros, com identificação de blocos por `data-placeholder-ref`. Para alterações pontuais, trate esses placeholders como a principal referência de localização.

## Regras gerais

- Faça alterações pequenas e direcionadas. Não refatore estrutura, nomes de classes, fontes, cores ou grids sem pedido explícito.
- Quando o pedido trouxer texto entre colchetes, por exemplo `[abc]`, o conteúdo final deve ser apenas `abc`, sem os colchetes.
- Preserve placeholders existentes sempre que o pedido for de layout, texto, largura ou posição.
- Ao remover um grupo, confirme se há filhos dentro dele. Se houver, mova os filhos para o novo contêiner pedido antes de remover o wrapper.
- Se o pedido disser "sem mover nada", altere apenas estrutura de placeholder/wrapper, mantendo classes, ordem visual e conteúdo.
- Ao criar novas páginas, reutilize header, footer, classes, fontes, cores e padrões de páginas existentes. Não invente linguagem visual nova.
- Imagens de referência devem ser seguidas com alta fidelidade: posição, proporção, formas e detalhes visuais devem se manter próximos ao original.
- Não faça `git reset`, `git checkout --` ou limpeza destrutiva de alterações existentes.
- Versionamento do projeto: use commits curtos que reflitam as alterações feitas e faça push a cada alteração quando a etapa de versionamento/publicação for solicitada.
- Antes de finalizar, rode checagens simples: links locais, `node --check app/frontend/main.js` e HTTP 200 no HTML alterado quando o servidor local estiver ativo.

## Estrutura principal

- `app/frontend/home.html`: página inicial.
- `app/frontend/greenscale.html`: página interna Greenscale.
- `app/frontend/numbear.html`: página interna Numbear.
- `app/frontend/stockhandle.html`: página interna Stockhandle.
- `app/frontend/solucoes.html`: página de soluções.
- `app/frontend/redsights.html`: índice editorial Redsights.
- `app/frontend/redsights-radar1.html`: artigo Redsights Radar.
- `app/frontend/contato.html`: página de contato.
- `app/frontend/styles.css`: estilos globais e regras responsivas.
- `app/frontend/main.js`: interações, transição de página, FAQ, newsletter, inspector e filtros Redsights.
- `app/frontend/assets/images`: imagens.
- `app/frontend/assets/videos`: vídeos.

## Como rodar localmente

Use o servidor estático do projeto:

```powershell
python app/frontend/dev_server.py --host 127.0.0.1 --port 8000
```

URLs principais:

- `http://127.0.0.1:8000/home.html`
- `http://127.0.0.1:8000/greenscale.html`
- `http://127.0.0.1:8000/numbear.html`
- `http://127.0.0.1:8000/stockhandle.html`
- `http://127.0.0.1:8000/solucoes.html`
- `http://127.0.0.1:8000/redsights.html`
- `http://127.0.0.1:8000/contato.html`

## Sistema visual

- Fonte base: `"IBM Plex Sans"`.
- Fonte de títulos editoriais: `"Aspekta"` quando já usada pela regra local.
- Fonte auxiliar em textos específicos: `"Montserrat"`.
- Fontes devem ser carregadas localmente por `@font-face` em `styles.css`; não use Google Fonts nas páginas para evitar troca visual depois do primeiro render.
- Background principal das páginas editoriais: `#f2f2f2`.
- Cor institucional Redscale: `#8c1f28`.
- Texto escuro principal: `#050505` ou `#1a1b1f`.
- Painel escuro editorial: variável `--dark-editorial-panel-bg`.
- Cartões e mosaicos usam raio de borda moderado, normalmente `16px` ou `18px`.

## Variáveis e recuos

As variáveis ficam no início de `styles.css`.

- `--editorial-edge-space`: recuo lateral padrão de seções editoriais, `clamp(18px, 2vw, 28px)`.
- `--editorial-left-rail`: trilho fino usado para alinhar conteúdo com a marca no header, `clamp(6px, 1.1vw, 14px)`.
- `--editorial-left-rail-tablet`: trilho para tablet, `clamp(8px, 1.4vw, 12px)`.
- `--editorial-shell-width`: largura editorial de referência, `1280px`.
- `--editorial-contact-shell-width`: largura de contato, `1140px`.

Padrões de distância:

- Primeira seção abaixo do header: `margin-top: var(--header-first-section-gap)`, com `--header-first-section-gap: 0.5cm`.
- Este padrão é obrigatório para qualquer nova página: o primeiro `section` de `main.editorial-home` ou `main.split-article-page` deve manter exatamente `0.5cm` de distância visual abaixo do header, usando a variável `--header-first-section-gap`.
- Distância comum entre última seção e `footer1`: `margin-bottom: 2.5cm`.
- Mosaico copiado abaixo de um texto em projetos: `margin-top: 1cm`.
- Bloco `element140`: deve ficar dentro de `element121`, como parte do painel escuro de contato.

Padrões de início de seção:

- `Padrão 01`: usado em inícios editoriais baseados em `text52`, `title10` e `text53`.
- Eyebrow do `Padrão 01`: `text52`, `text68`, `text80` e `text168` devem compartilhar família, peso, altura, tamanho, cor, gap e comportamento do label.
- Título do `Padrão 01`: `title10`, `title11`, `title12` e `title21` devem compartilhar família, peso, altura, tamanho, margem, largura e alinhamento.
- Texto de apoio do `Padrão 01`: `text53`, `text82` e `text170` devem compartilhar família, peso, altura, tamanho, margem, largura e alinhamento.
- Ao aplicar o `Padrão 01`, não altere o texto de destino; o padrão controla apenas dimensionamento e apresentação.

## Header e navegação

Header editorial padrão:

- Classe: `.editorial-header`.
- Wrapper: `.editorial-header__inner`.
- Logo: `data-placeholder-ref="logo1"`.
- O wrapper do header deve ficar centralizado, com largura pelo conteúdo, cantos arredondados e textura baseada em `--dark-editorial-panel-bg`.
- `logo1` usa `"Playfair Display"`, peso `700`, cor `#f2f2f2` e tamanho base `30px`.
- `logo2` usa `"Playfair Display"` sem alterar a cor e o tamanho definidos para o footer.

Fade de seções:

- Todas as seções diretas dentro de `main` usam fade suave conforme entram no viewport.
- A classe `has-section-reveal` deve ser aplicada no `<html>` no script do `head`, junto de `has-page-transition`, para evitar flash visual antes do CSS.
- A primeira seção de cada página deve abrir visível e já no estado final; o fade é aplicado às seções seguintes conforme o scroll.
- O JavaScript apenas adiciona `is-section-visible`; não deve reescrever textos, wrappers ou placeholders para chegar ao estado visual final.

Navegação padrão do `header1`:

- `nav1`: `PROJETOS`, aponta para `#projetos` na home e para `./home.html#projetos` em outras páginas com menu completo, usa `data-scroll-offset-target="#projetos"` e deve posicionar a tela aproximadamente `0.5cm` acima de `section1`.
- `nav2`: `SOLUÇÕES`, aponta para `./solucoes.html`.
- `nav3`: `SOBRE`, aponta para `./home.html#sobre` ou `#sobre`.
- `nav4`: `REDSIGHTS`, aponta para `./redsights.html`.
- Todas as páginas devem usar `header1` com `logo1`.
- `greenscale.html`, `numbear.html`, `stockhandle.html`, `contato.html` e `redsights.html` usam apenas a nav `Home`, apontando para `./home.html`.
- `redsights-radar1.html` usa `Home`, apontando para `./home.html`, e `Redsights`, apontando para `./redsights.html`.

## Footer

Footer padrão:

- Placeholder: `footer1`.
- Classe: `.editorial-footer`.
- Topo: `footer2`.
- Legal: `text154`.
- Marca grande final: `logo2`.
- Redes sociais: `link7` LinkedIn, `link8` Instagram, `link9` YouTube.

O footer deve vir após a última seção da página. Se a última seção parecer colada no footer, aplique `margin-bottom: 2.5cm` nessa última seção, não no próprio footer.

## Página `home.html`

- `section12` é a seção de depoimentos padrão da home.
- Em `home.html`, `section12` deve ficar entre `section6` e `section8`.
- Deve respeitar o espaçamento padrão entre seções, usando `margin-top: 2.5cm` e `margin-bottom: 2.5cm` via `.projects-testimonials-section`.

## Páginas `greenscale.html`, `numbear.html` e `stockhandle.html`

- `projeto-numbear.html` foi removida. Não recrie este arquivo; o destino antigo da Greenscale agora é `greenscale.html`.
- As três páginas internas usam o mesmo conteúdo-base de construção, com `header1`, `logo1`, nav única `Home`, `section14`, `element162` e `footer1`.
- `element162` contém o formulário de newsletter e deve manter largura ampliada em aproximadamente `2.3cm` no desktop, retornando para largura segura em mobile.
- Newsletter dessas páginas usa `https://formspree.io/f/xykopqqj`, via `data-redsights-newsletter-form`, sem troca de tela.
- Os cards da home apontam para `greenscale.html`, `numbear.html` e `stockhandle.html`.
- O card Numbear usa `assets/videos/18069237-uhd_2160_2160_24fps.mp4` em loop.
- O card Stockhandle usa `assets/images/pexels-endura-tiles-370085044-14554082.jpg`, com texto central em Aspekta e cor `#8C1F28`.

## Página `solucoes.html`

Criada usando o mesmo padrão de `redsights.html`:

- Header: `header1`.
- Seção inicial: `section14`.
- Footer: `footer1`.
- Body usa `page--home page--redsights page--solutions`.
- Hero reaproveita `.redsights-projects-hero`.

## Redsights

`redsights.html` contém:

- Header: `header1`.
- Hero editorial: `section14`.
- Lista editorial: `section15`.
- Card do artigo radar: link para `./redsights-radar1.html`.
- Imagem do artigo radar e dos cards correspondentes em `home.html` e `redsights.html`: `businessmen-working-strategic-planning.jpg`.
- Newsletter: `field4`.
- Contato Redsights: `section9`.

Newsletter:

- Form action de newsletter: `https://formspree.io/f/xykopqqj`.
- O envio é interceptado em `main.js` por `initRedsightsNewsletter`.
- Deve usar `fetch` e permanecer na mesma página, sem redirecionar para a tela de agradecimento do Formspree.

`redsights-radar1.html`:

- Página de artigo.
- Usa progresso de leitura e ações de compartilhamento em `main.js`.

## Contato

Contato principal usa:

- `section9` na home e Redsights.
- `section11` em `contato.html`.
- `element121`: painel escuro de texto.
- `image30`: vídeo/painel visual do formulário.
- `element140`: bloco da pessoa/CTA quando existir na página.
- `element140` deve ficar dentro de `element121`.
- Exceção: em `redsights.html`, dentro de `.redsights-contact-section`, `element140` fica fora de `element121`, na segunda linha do grid, abaixo dos painéis de texto e formulário. A distância vertical entre `element121`/`element130` e `element140` deve ser a mesma distância horizontal entre `element121` e `element130`; o canto direito de `element140` deve alinhar ao canto direito de `element130`. Essa exceção é exclusiva da página Redsights.
- `element118` é o avatar ou retrato associado ao bloco de pessoa.

## FAQ

O conteúdo do FAQ é centralizado em `main.js`, no objeto `FAQ_CONTENT`.

Regra:

- Alterações no FAQ devem ser feitas em `FAQ_CONTENT`, não manualmente em cada página, quando a intenção for espelhar para todas as páginas com FAQ.
- A categoria principal é `product`.
- O HTML inicial da categoria `product` deve carregar com o conteúdo final já escrito, sem depender de reescrita no carregamento.
- O script aplica perguntas/respostas nos elementos `data-faq-question` e `data-faq-answer` apenas quando o usuário troca a categoria do FAQ.

## Inspector

O inspector é controlado em `main.js`.

- Chave atual: `redscale-inspector`.
- Chave legada: `greenscale-inspector`.
- Botão: `.inspect-toggle`.
- Badge: `.inspect-badge`.
- Coordenadas: `.inspect-badge__meta` deve mostrar `posição: (x, y)` enquanto o inspector estiver ligado.
- O botão deve ser montado em todas as páginas.
- Atalho: tecla `i`, exceto quando o foco estiver em campos de texto.
- Elementos inspecionáveis vêm de `INSPECTABLE_SELECTOR`.
- O destaque visual usa `body.inspector-on [data-inspected="true"]`.

## Placeholders e edição segura

Use `data-placeholder-ref` como contrato visual. Exemplos críticos:

- `logo1`: logo no header.
- `header1`: header padrão de todas as páginas.
- `footer1`: footer editorial.
- `section14`: seção inicial das páginas internas e Redsights.
- `element162`: grupo de newsletter nas páginas `greenscale.html`, `numbear.html` e `stockhandle.html`.
- `card5`: card Greenscale na home, apontando para `greenscale.html`.
- `card6`: card Numbear na home, apontando para `numbear.html`.
- `card7`: card Stockhandle na home, apontando para `stockhandle.html`.
- `text15`: tag de serviços na home, texto atual `Sites`.
- `field1`, `field2` e `field3`: campos de formulário de contato.
- `field4`: campo de e-mail da newsletter.

Quando um placeholder for removido de uma página, confirme com busca específica no arquivo da página, não no projeto inteiro, porque o mesmo placeholder pode existir legitimamente em outra página.

## Deploy Hostinger / WordPress

- O pacote publicável é o conteúdo completo de `app/frontend`.
- Suba as páginas HTML, `styles.css`, `main.js`, `paint-animations.css`, `.htaccess`, `fonts` e `assets` para `public_html` ou para a pasta pública do domínio/subdomínio.
- `home.html` é a entrada principal configurada por `DirectoryIndex`; `index.html` existe como fallback de redirecionamento.
- Se o WordPress já tiver um `.htaccess`, preserve o backup e coloque as regras estáticas do projeto acima do bloco padrão do WordPress.
- Formulários de contato usam `https://formspree.io/f/mreyyorn`; newsletters usam `https://formspree.io/f/xykopqqj`. Ambos devem permanecer na página após envio.

## Checagens úteis

Validar JavaScript:

```powershell
node --check app/frontend/main.js
```

Validar se uma página responde no servidor local:

```powershell
(Invoke-WebRequest -UseBasicParsing 'http://127.0.0.1:8000/greenscale.html').StatusCode
```

Buscar placeholders em uma página:

```powershell
Select-String -Path 'app/frontend/greenscale.html' -Pattern 'data-placeholder-ref="element162"'
```

Em PowerShell neste workspace, se `rg` falhar por permissão, use `Select-String`.
