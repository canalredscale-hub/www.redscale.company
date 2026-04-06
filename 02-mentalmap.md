# 02 Mentalmap

## Como usar

- Registre aqui planejamentos aprovados, mudanças de direção, decisões e racional.
- Cada entrada deve apontar para a fase do `01-roadmap.md` que foi impactada.
- Use este arquivo como histórico de aprovação; o status curto fica em `00-user-guide.md`.

## Registro inicial

### 2026-04-01T12:29:16.814919+00:00 - Criação do projeto

- Decisão aprovada: iniciar o projeto em modo híbrido com workflow `web_app`.
- Objetivo inicial aprovado: Começar a trabalhar o esqueleto do site de acordo com pesquisas, referências e direcionamento comercial validado.
- Resultado final esperado aprovado: Ter um site atualizado e instalável como app no Windows ou macOS, com home institucional, CTAs estratégicos e landing pages de alta conversão levando ao checkout de produtos como planilhas, templates, treinamentos, consultorias, SaaS e ofertas relacionadas.
- Pesquisa obrigatória aprovada: Pesquisa híbrida aprovada indicando que a fundação do projeto deve nascer como produto web-first com home institucional e landing pages em arquitetura PWA, checkout hospedado e backend mínimo para leads e webhooks, preservando a futura expansão para área /app e produtos SaaS sem sacrificar segurança, SEO, observabilidade, governança e readiness operacional.
- Registros essenciais do workflow: jornada crítica do usuário; primeira experiência ou tela; backend mínimo correspondente; autenticação e sessão
- Processos adicionais informados: Nenhum adicional informado

### Respostas extras do workflow

- Qual é a primeira experiência crítica do usuário?: A home institucional pronta, com CTAs apontando para outras páginas que ainda estarão em construção.
- Existe autenticação ou área logada já no início?: Não. A primeira versão não nasce com login, sessão, perfis de acesso ou área privada.

### Implicações registradas da pesquisa

- Iniciar com fundação web/PWA e evitar app desktop nativo no primeiro ciclo.
- Tratar home institucional e sistema de CTAs como o primeiro marco real de entrega.
- Usar checkout hospedado com webhooks validados para reduzir risco e acelerar a ida ao ar.
- Publicar a primeira versão com SEO técnico, acessibilidade básica, analytics e monitoramento desde o início.
- Modelar entidades mínimas de ofertas, landing pages, leads, consentimentos e eventos de conversão.
- Preparar a estrutura para futura expansão para /app e ofertas SaaS sem misturar tudo no MVP.
- Registrar rollback, governança de mudanças e operação comercial como parte do roadmap base.

### 2026-04-01T10:42:42.5061935-03:00 - Reconstrução de contexto e referência visual

- Fase impactada: Marco 2. Fundação robusta e escalável.
- Evidência registrada: leitura de `project_brief.yaml`, `04-solution-research.md`, `01-roadmap.md`, `00-user-guide.md` e `02-mentalmap.md`, com confirmação de que o repositório ainda está em scaffold e sem implementação funcional em `app/frontend` e `app/backend`.
- Direcao discutida na epoca: usar referencia visual externa para orientar narrativa e densidade de secoes, decisao posteriormente descartada em favor da construcao autoral do zero.
- Leitura da referência: hero amplo, prova social cedo, blocos de benefícios, seção comparativa/especificações, depoimento, passos de adoção e CTA final.
- Decisões ainda pendentes antes de executar: provedor de checkout, formato do backend mínimo, primeiras ofertas com landing page própria, identidade visual adaptada para a marca REDSCALE, prova social real e mensagens-chave por segmento.
- Próximo movimento coerente: quebrar o Marco 2 em entregas curtas para arquitetura base, mapa de rotas, home institucional inicial e contratos mínimos de CTA, lead e checkout.

### 2026-04-01T10:42:42.5061935-03:00 - Fechamento de decisões do primeiro ciclo e entrega do esqueleto

- Fase impactada: Marco 2. Fundação robusta e escalável.
- Decisões aprovadas: Mercado Pago como provedor inicial; backend mínimo permanece no próprio site; o site inteiro entra no ciclo de 7 dias; a referência pode ser seguida de perto no primeiro corte; `trusted by`, `cases` e `depoimentos` ficam como placeholders.
- Implementação entregue: criação de home e páginas essenciais em `app/frontend` com base estática em HTML/CSS/JS, cobrindo `index.html`, `ofertas.html`, `templates.html`, `consultoria.html`, `treinamentos.html`, `software.html` e `contato.html`.
- Apoio operacional entregue na epoca: preview local, teste estrutural e registro do backend minimo. Esses artefatos foram posteriormente removidos ou substituidos durante o reset da base autoral.
- Limite explícito desta entrega: sem hospedagem, sem integrações de checkout, sem captura real de lead, sem analytics e sem identidade final REDSCALE.
- Próximo movimento coerente: revisar visual, conteúdo e hierarquia das páginas; substituir a linguagem provisória por posicionamento próprio da REDSCALE; então abrir o ciclo de hospedagem e integrações comerciais.

### 2026-04-02T18:10:00-03:00 - Reset definitivo do frontend para construcao autoral

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: abandonar o espelhamento de template externo e reconstruir o site do zero, de cima para baixo, com validacao incremental por bloco.
- Implementacao entregue: a superficie ativa voltou a ser uma base propria em `app/frontend/index.html` e `app/frontend/styles.css`, sem dependencias de `_site/` ou paginas espelhadas.
- Proximo movimento coerente: manter a documentacao e os scripts alinhados a essa nova direcao e remover referencias operacionais a mirrors, `docs/` inexistente e testes que ainda nao foram recriados.

### 2026-04-02T19:19:57-03:00 - Ajustes visuais iniciais de header e background

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: o background global do site passa a ser `#FFFFFF`; o logo textual `Redscale` no header passa a ter `25px`; o header ganha uma casca retangular centralizada com cantos arredondados.
- Implementacao entregue: atualizacao de `app/frontend/styles.css` para ajustar fundo, tipografia do logo e shell arredondada do header, com wrapper correspondente em `app/frontend/index.html`.
- Proximo movimento coerente: definir menu, CTA e distribuicao interna do header dentro da nova casca visual, mantendo a construcao incremental de cima para baixo.

### 2026-04-02T21:54:59-03:00 - Refinamento da casca do header

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir a largura da casca do header em aproximadamente `4cm`, aplicar background `#F2F2F2` no retangulo e alinhar os elementos internos ao centro.
- Implementacao entregue: ajuste em `app/frontend/styles.css` com largura `calc(100% - 151px)`, `justify-content: center`, `align-items: center` e cor de fundo da shell em `#F2F2F2`.
- Proximo movimento coerente: evoluir a composicao do header com menu e CTA preservando centralizacao visual, legibilidade e proporcao da nova casca.
### 2026-04-02T22:00:49-03:00 - Compactacao da shell do header e realinhamento do logo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir mais a largura da casca do header em aproximadamente `3cm`, diminuir a altura em aproximadamente `1cm` sem alterar tipografia, e alinhar o logo proximo da borda esquerda do retangulo.
- Implementacao entregue: `app/frontend/styles.css` passou a usar `--header-width-reduction: 264px`, `min-height: 34px`, `justify-content: flex-start` e `padding: 0 24px` na shell do header.
- Proximo movimento coerente: definir menu e CTA respeitando a nova altura compacta e o logo ancorado a esquerda.
### 2026-04-02T22:15:24-03:00 - Restauracao da altura da shell do header

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: restaurar a altura da casca do header para a medida anterior, sem mexer na largura mais estreita, na cor `#F2F2F2` nem no alinhamento do logo a esquerda.
- Implementacao entregue: `app/frontend/styles.css` voltou a usar `min-height: 72px` em `.site-header__shell`.
- Proximo movimento coerente: definir os proximos itens do header mantendo a altura restaurada.
### 2026-04-02T22:24:48-03:00 - Menu central e alinhamento vertical do logo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: alinhar o meio da altura do texto do logo ao meio da altura do retangulo e adicionar no centro da shell os menus `Sobre`, `Servicos`, `Produtos` e `Redsights`.
- Implementacao entregue: `app/frontend/index.html` recebeu uma navegacao central e um spacer estrutural; `app/frontend/styles.css` passou a organizar o header em grid de tres colunas com logo a esquerda, menu no centro e coluna vazia a direita para preservar a centralizacao real dos links.
- Proximo movimento coerente: definir CTA ou elemento de apoio na coluna direita sem quebrar a centralizacao do menu.

### 2026-04-02T23:09:49-03:00 - Tipografia dos menus e preenchimento da shell

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: menus centrais em IBM Plex Sans com cerca de `27px`, letras levemente mais proximas e preenchimento do retangulo mais opaco/visivel.
- Implementacao entregue: import de `IBM Plex Sans` em `app/frontend/index.html`, ajuste dos links para `font-size: 27px` e `letter-spacing: -0.05em`, cor da shell reforcada para `#E8E8E8`, e correcao do texto `Servicos` via entidade HTML.
- Proximo movimento coerente: revisar espacamento entre links e preparar o CTA da direita.

### 2026-04-02T23:23:34-03:00 - Reajuste da fonte dos menus centrais

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir o tamanho da fonte dos menus centrais para `19px`, mantendo IBM Plex Sans e tracking levemente negativo.
- Implementacao entregue: `app/frontend/styles.css` passou a usar `font-size: 19px` em `.site-header__nav-link`.
- Proximo movimento coerente: revisar o balanceamento visual entre logo, menu e futura CTA da direita.
### 2026-04-02T23:39:17-03:00 - Microajuste vertical do logo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deslocar o logo textual cerca de `0,2cm` para cima, em um ajuste visual pequeno, sem alterar menu ou tipografia.
- Implementacao entregue: `.site-header__logo` em `app/frontend/styles.css` recebeu `transform: translateY(-8px)`.
- Proximo movimento coerente: revisar visualmente a relacao vertical entre logo, menu e casca do header.
### 2026-04-02T23:39:46-03:00 - Reajuste fino da fonte do menu central

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir em mais `2px` o tamanho da fonte do menu central.
- Implementacao entregue: `app/frontend/styles.css` passou a usar `font-size: 17px` em `.site-header__nav-link`.
- Proximo movimento coerente: revisar proporcao entre menu, logo e altura da shell.
### 2026-04-02T23:40:39-03:00 - Retorno parcial do logo para baixo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: mover o logo `7px` para baixo em relacao ao ajuste anterior.
- Implementacao entregue: `.site-header__logo` em `app/frontend/styles.css` passou de `transform: translateY(-8px)` para `transform: translateY(-1px)`.
- Proximo movimento coerente: validar visualmente o alinhamento vertical entre logo e menu central.
### 2026-04-02T23:41:39-03:00 - Efeito espelhado na shell do header

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deixar o background do retangulo com `90%` de opacidade e acabamento espelhado.
- Implementacao entregue: `.site-header__shell` passou a usar `rgba(242, 242, 242, 0.9)`, `backdrop-filter`, brilho interno e sombra externa sutil; a borda ficou mais clara para reforcar o efeito de vidro.
- Proximo movimento coerente: avaliar contraste e legibilidade do menu sobre a shell transluscida.
### 2026-04-02T23:46:55-03:00 - Hover animado nos menus centrais

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: ao passar o mouse sobre cada item do menu central, o texto atual deve subir e o mesmo texto com uma seta para cima deve entrar de baixo.
- Implementacao entregue: cada link em `app/frontend/index.html` recebeu duas linhas de texto dentro de um track vertical, e `app/frontend/styles.css` passou a animar `transform: translateY(-50%)` no hover/focus com mascara por `overflow: hidden`.
- Proximo movimento coerente: revisar timing da animacao e evoluir o CTA da direita com a mesma linguagem de motion.
### 2026-04-02T23:50:35-03:00 - Correcao de vazamento visual na animacao do menu

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: no estado normal, a mascara dos links centrais deixava aparecer ao mesmo tempo a parte de baixo do texto base e a parte de cima do texto duplicado.
- Decisao aprovada: manter visivel apenas o texto base em estado normal e acionar a troca para a versao com seta somente em hover, focus ou click.
- Implementacao entregue: `app/frontend/index.html` ganhou classes distintas para a camada base e a camada hover; `app/frontend/styles.css` passou a sobrepor as duas camadas com `inline-grid` e animar cada uma separadamente com `translateY(110%)` / `translateY(-110%)`.
- Proximo movimento coerente: validar visualmente a animacao nos quatro links e refinar velocidade/distancia se necessario.
### 2026-04-02T23:53:34-03:00 - Cor da camada inferior do hover do menu

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: exibir a camada inferior animada dos menus centrais na cor `#D92525`.
- Implementacao entregue: `.site-header__nav-label--hover` em `app/frontend/styles.css` passou a usar `color: #d92525`.
- Proximo movimento coerente: validar contraste e sensacao visual da troca de estado do menu.
### 2026-04-03T00:00:26-03:00 - Seta para baixo no hover e CTA direito no header

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: a camada inferior animada dos menus centrais deve usar seta para baixo; no lado direito do header deve existir um CTA retangular de cantos quadrados, com fundo na cor do logo e texto `Comece um Projeto`, alinhado horizontalmente ao logo.
- Implementacao entregue: `app/frontend/index.html` trocou `&uarr;` por `&darr;` e substituiu o spacer da direita por `.site-header__cta`; `app/frontend/styles.css` passou a estilizar o CTA com fundo `var(--brand-red)`, texto branco e `justify-self: end`.
- Proximo movimento coerente: validar proporcao do CTA em relacao a logo/menu e criar a secao de destino `#contato`.
### 2026-04-03T00:01:41-03:00 - Cor do texto do CTA direito

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter o CTA direito na fonte IBM Plex Sans, igual aos menus centrais, e ajustar a cor do texto para `#F2F2F2`.
- Implementacao entregue: `.site-header__cta` em `app/frontend/styles.css` passou a usar `color: #f2f2f2`, preservando `font-family: "IBM Plex Sans", sans-serif`.
- Proximo movimento coerente: revisar proporcao e estados de hover do CTA direito.
### 2026-04-03T10:43:06-03:00 - Header com logo/CTA fora da capsula e menu fixo no scroll

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: mudar o logo para uma fonte serifada em peso medium com letras mais proximas, posicionar logo a esquerda e CTA a direita fora do retangulo central, reduzir o retangulo central em mais aproximadamente `5cm`, manter apenas esse retangulo fixo ao descer a pagina, e remover as setas da segunda camada do hover do menu preservando a mesma cor da camada base.
- Implementacao entregue: `app/frontend/index.html` separou logo, shell central e CTA em tres elementos irmaos; `app/frontend/styles.css` mudou o logo para `Cormorant Garamond` 500 com tracking mais negativo, ampliou `--header-width-reduction` para `453px`, fixou `.site-header__shell` com `position: fixed`, removeu as setas da segunda camada do menu e unificou sua cor com `var(--text-color)`.
- Proximo movimento coerente: testar scroll com as futuras secoes da home e ajustar proporcoes laterais do logo/CTA se necessario.
### 2026-04-03T10:48:08-03:00 - CTA direito com pastilha expansivel

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: alterar o texto do CTA para `Toque para chamar`, deixar o botao com cantos ligeiramente arredondados, usar uma base `#F2F2F2` com um bloco menor `#8C1F28` a esquerda, e no hover expandir esse bloco ate preencher toda a forma.
- Implementacao entregue: `app/frontend/index.html` separou o CTA em `.site-header__cta-fill` e `.site-header__cta-label`; `app/frontend/styles.css` criou a base clara, a pastilha vermelha arredondada e a animacao de expansao no hover/focus, com inversao da cor do texto.
- Proximo movimento coerente: validar visualmente o hover do CTA e definir o destino real do link de chamada/contato.
### 2026-04-03T10:50:19-03:00 - Alinhamento vertical entre logo, menu fixo e CTA

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: logo a esquerda, menu central fixo e CTA a direita devem ficar alinhados verticalmente no mesmo eixo.
- Implementacao entregue: removido o `transform: translateY(-1px)` de `.site-header__logo` em `app/frontend/styles.css`, preservando o menu central com `position: fixed` e o CTA a direita no fluxo do header.
- Proximo movimento coerente: validar o alinhamento visual no navegador e ajustar apenas se houver diferenca optica residual por tipografia.
### 2026-04-03T10:53:22-03:00 - Centralizacao vertical do menu e nova reducao da capsula

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: os textos do menu central devem ficar no meio da altura do retangulo, e a largura da capsula central deve diminuir em mais aproximadamente `5cm`.
- Implementacao entregue: `app/frontend/styles.css` passou `--header-width-reduction` para `642px`, adicionou `min-height: 72px` em `.site-header__nav` e `.site-header__nav-link`, trocou `.site-header__nav-link` para `inline-flex` com `align-items: center`, e ajustou `line-height: 1`.
- Proximo movimento coerente: validar visualmente a centralizacao dos textos e a nova largura da capsula no viewport desktop.
### 2026-04-03T10:57:29.5579695-03:00 - Correcao visivel da largura da capsula e centralizacao dos links

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: a reducao anterior da largura da capsula nao ficou perceptivel e os textos do menu ainda nao estavam perfeitamente centralizados nos dois eixos dentro do retangulo.
- Decisao aprovada: travar a capsula central em uma largura visualmente menor e centralizar cada link do menu horizontal e verticalmente, preservando a animacao de troca de camada no hover.
- Implementacao entregue: `app/frontend/styles.css` passou a usar `--header-shell-width: 480px` com `width: min(...)` na capsula, definiu a barra de menu com `height: 72px`, reduziu a altura clicavel mascarada do link para `20px`, e centralizou `nav-track` e `nav-label` com `place-items` / `justify-content`.
- Proximo movimento coerente: validar no navegador se a capsula agora ficou na largura desejada e ajustar o valor fixo se ainda precisar de mais compactacao.
### 2026-04-03T11:00:15.1393818-03:00 - Largura fixa explicita da capsula e distribuicao uniforme do menu

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: a capsula ainda parecia manter a mesma largura no navegador, mesmo apos a mudanca anterior.
- Decisao aprovada: abandonar a largura com `min()` e usar largura fixa explicita menor, com `max-width` separado apenas para seguranca em telas menores; distribuir os quatro links em faixas iguais para reforcar a centralizacao dentro do retangulo.
- Implementacao entregue: `app/frontend/styles.css` passou a usar `width: 430px` e `max-width: calc(100vw - (var(--page-gutter) * 2))` na capsula, reduziu o padding interno para `20px`, zerou o `gap` do menu e tornou cada link um bloco flexivel com `flex: 1 1 0` e `height: 100%`.
- Proximo movimento coerente: validar se a nova largura finalmente corresponde ao que foi pedido e, se necessario, fazer um ultimo ajuste fino em pixels ja sobre essa base fixa.
### 2026-04-03T11:04:55.8443323-03:00 - Confirmacao de superficie ativa e capsula por largura de conteudo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Evidencia registrada: checagem de estrutura e resposta HTTP local confirmou que o frontend ativo continua sendo apenas `app/frontend/index.html` e `app/frontend/styles.css`; nao existe pasta adicional de build para publicar ou sincronizar.
- Problema observado: apesar de o CSS servido ja carregar a largura fixa nova, a percepcao visual da capsula ainda permanecia larga por causa da distribuicao interna do menu.
- Decisao aprovada: trocar a capsula de largura fixa para largura determinada pelo proprio conteudo do menu, com padding lateral menor e gap controlado entre links, preservando a centralizacao do conjunto.
- Implementacao entregue: `app/frontend/styles.css` removeu a largura fixa da shell, passou a usar `display: inline-flex`, `padding: 0 18px`, `max-width` apenas como seguranca, `gap: 24px` no menu e links sem `flex` expansivo.
- Proximo movimento coerente: validar visualmente a nova capsula shrink-to-fit e, a partir dela, fazer apenas microajustes de gap e padding se ainda precisar de mais compactacao.
### 2026-04-03T11:08:08.5673303-03:00 - Teste visual do logo para validar a superficie servida

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Contexto: como as ultimas alteracoes de largura nao estavam sendo percebidas no navegador, foi pedido um teste visual mais evidente diretamente na marca do header.
- Decisao aprovada: retornar o logo para `Playfair Display` e adicionar um pequeno circulo na cor da marca, posicionado a esquerda do `R` e ligeiramente abaixo da metade da altura do texto.
- Implementacao entregue: `app/frontend/index.html` passou a carregar `Playfair Display` pelo Google Fonts e `app/frontend/styles.css` trocou a familia tipografica do logo, adicionou `padding-left` e desenhou o circulo com `::before`.
- Proximo movimento coerente: verificar se o novo logo aparece no navegador; se nao aparecer, tratar isso como evidencia forte de que a pagina aberta nao e a superficie `app/frontend` deste workspace.
### 2026-04-03T11:09:43.1669408-03:00 - Troca do circulo do logo para elemento real

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Evidencia registrada: a mudanca de fonte apareceu no navegador, mas o circulo desenhado por pseudo-elemento nao ficou visivel.
- Inferencia: isso indica que a superficie servida esta correta, porque a folha de estilo atual foi carregada; o problema ficou restrito ao detalhe de implementacao do circulo.
- Decisao aprovada: substituir o pseudo-elemento por um `span` real dentro do logo para tornar o marcador inequívoco no DOM e facilitar a validacao visual.
- Implementacao entregue: `app/frontend/index.html` passou a renderizar `.site-header__logo-dot` e `.site-header__logo-text`; `app/frontend/styles.css` removeu o `::before`, criou o ponto como bloco dedicado e ajustou seu deslocamento vertical com `transform`.
- Proximo movimento coerente: verificar se o ponto agora aparece; se aparecer, seguimos refinando o header normalmente sem suspeita de problema no `localhost`.
### 2026-04-03T11:13:37.4049548-03:00 - Reforco estrutural do header para visibilidade e controle

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: mesmo com HTML e CSS atuais sendo servidos corretamente, o ponto do logo nao ficou visivel e as mudancas de largura da capsula continuaram pouco perceptiveis.
- Decisao aprovada: tornar o ponto do logo um caractere explicito e reconstruir a capsula central com largura controlada por variavel e distribuicao interna em grid, para que futuros ajustes tenham efeito visual direto.
- Implementacao entregue: `app/frontend/index.html` passou a usar `&bull;` em `.site-header__logo-dot`; `app/frontend/styles.css` converteu a shell para `display: flex` com `width: min(var(--header-shell-width), ...)`, definiu `--header-shell-width: 500px`, aumentou o padding interno para `22px` e trocou o menu para um grid de quatro colunas iguais.
- Proximo movimento coerente: validar no navegador se o ponto e a nova largura da capsula finalmente aparecem; a partir disso, seguir com ajuste fino de espacamento.
### 2026-04-03T11:20:18.6667102-03:00 - Alinhamento em 3 colunas, capsula menor e cache-busting do CSS

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: baixar o ponto do logo mais aproximadamente `0,1cm`, alinhar logo, capsula central e CTA no mesmo eixo vertical, reduzir a largura real da capsula e centralizar os menus dentro dela; alem disso, versionar o CSS para forcar o navegador a buscar a folha nova.
- Implementacao entregue: `app/frontend/index.html` passou a referenciar `styles.css?v=20260403-1120`; `app/frontend/styles.css` reorganizou `.site-header` em grid de 3 colunas, reduziu `--header-shell-width` para `400px`, baixou `.site-header__logo-dot` para `translateY(10px)`, centralizou o menu com `display: flex` e `gap: 28px`, e ancorou o CTA na coluna direita com `justify-self: end`.
- Proximo movimento coerente: validar visualmente a versao nova no navegador e, se ainda houver desalinhamento optico, fazer apenas ajuste fino de `top`, `gap`, `padding` ou largura da capsula.
### 2026-04-03T11:25:21.6122226-03:00 - Restauracao da mascara do hover dos menus e regra de cache-busting

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: a animacao dos menus centrais deixou de trocar visualmente a camada base pela camada hover porque as duas camadas ficaram simultaneamente visiveis dentro da area alta do link.
- Decisao aprovada: devolver a mascara de overflow para o elemento baixo `.site-header__nav-track`, manter o link com altura total apenas para centralizacao, versionar o CSS novamente e registrar cache-busting como regra de processo sempre que `styles.css` mudar.
- Implementacao entregue: `app/frontend/styles.css` removeu `overflow: hidden` de `.site-header__nav-link` e adicionou a mascara em `.site-header__nav-track`; `app/frontend/index.html` passou a usar `styles.css?v=20260403-1125`; `00-user-guide.md`, `orquestrador-projeto/workflows/04-site-construction.md` e `orquestrador-projeto/skills/04-web-design-motion-build.md` passaram a registrar a exigencia de atualizar a query string do CSS em mudancas visuais.
- Proximo movimento coerente: validar no navegador se a transicao voltou ao comportamento de troca de texto e manter o versionamento do CSS em todos os ciclos futuros.
### 2026-04-03T11:27:30.4148094-03:00 - Remocao do cache-busting manual e adocao de servidor local no-store

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: remover a regra de alterar query string do CSS a cada mudanca e manter apenas os arquivos no estado atual, evitando cache manual repetitivo durante o preview local.
- Implementacao entregue: `app/frontend/index.html` voltou a referenciar `styles.css` sem versao; foi criado `app/frontend/dev_server.py` com `SimpleHTTPRequestHandler` customizado para enviar `Cache-Control: no-store`, `Pragma: no-cache` e `Expires: 0`; `README.md`, `00-user-guide.md`, `orquestrador-projeto/workflows/04-site-construction.md` e `orquestrador-projeto/skills/04-web-design-motion-build.md` foram atualizados para usar esse fluxo sem cache-busting manual.
- Proximo movimento coerente: subir o preview com `uv run python app/frontend/dev_server.py` e validar se mudancas de CSS/HTML aparecem sem hard refresh e sem query string.
### 2026-04-03T11:34:39.7192251-03:00 - Logo com squircle vermelho e hover unidirecional no menu

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: trocar o circulo ao lado do `R` por um pequeno quadrado vermelho com cantos levemente arredondados e lados suavemente curvados para fora, mover esse elemento cerca de `3px` para cima, aumentar seu tamanho em cerca de `2px`, mudar o texto do logo para a mesma cor do menu central e ajustar o hover dos menus para subir em mao unica sem animar de volta no mouseout.
- Implementacao entregue: `app/frontend/index.html` passou a usar um SVG inline para a marca grafica e a carregar `app/frontend/main.js`; `app/frontend/styles.css` criou `.site-header__logo-mark`, mudou a cor do texto do logo para `var(--text-color)`, removeu o hover reversivel por pseudoestado e passou a controlar o deslocamento por classes JS; `app/frontend/main.js` implementou a animacao one-way com reset instantaneo invisivel apos `transitionend`.
- Proximo movimento coerente: validar no navegador a nova forma do logo e o comportamento do hover repetido nos menus centrais, ajustando apenas tamanho, offset ou easing se necessario.
### 2026-04-03T11:39:27.1059672-03:00 - CTA com seta animada, texto em negrito e preenchimento horizontal com vao

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: trocar o texto do CTA para `Toque para Chamar`, aplicar negrito, reduzir levemente a largura do background, manter a pastilha vermelha deslocada junto com essa base, inserir uma seta branca apontando para a direita dentro da pastilha, animar seta e texto com a mesma subida em mao unica do menu central, e no hover expandir a pastilha apenas na largura, preservando a altura e deixando um vao vertical nas bordas.
- Implementacao entregue: `app/frontend/index.html` ganhou trilhas duplicadas de seta e texto no CTA; `app/frontend/styles.css` reduziu o padding do botao, moveu a pastilha para `left: 5px`, reduziu sua largura base para `28px`, manteve `top: 6px` e `height: calc(100% - 12px)` no hover, expandiu apenas `width: calc(100% - 10px)`, e criou as classes de animacao one-way do CTA; `app/frontend/main.js` foi generalizado com `bindOneWayRise` para reaproveitar o comportamento em menus e CTA.
- Proximo movimento coerente: validar o hover do CTA no navegador, especialmente a sincronizacao entre seta, texto, cor e expansao horizontal da pastilha sem alterar a altura.
### 2026-04-03T11:41:56.8341338-03:00 - Logo maior, squircle mais proximo e capsula central mais fina

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar o tamanho do texto do logo e do quadrado arredondado em aproximadamente `5` pontos, aproximar o quadrado do `R` e afinar a altura do retangulo central em aproximadamente `0,3cm` na borda superior e `0,3cm` na borda inferior.
- Implementacao entregue: `app/frontend/styles.css` aumentou `.site-header__logo` para `30px`, `.site-header__logo-mark` para `14px`, reduziu o `gap` do logo para `1px`, ajustou `.site-header__shell` para `min-height: 50px`, `.site-header__nav` para `height: 50px`, e `.site-header` para `min-height: 74px` para manter o alinhamento vertical com o topo em `24px`.
- Proximo movimento coerente: validar no preview local se a nova proporcao do logo ficou equilibrada e se a capsula central mais fina preserva a legibilidade e a animacao dos menus.
### 2026-04-03T11:45:41.1672951-03:00 - CTA sem negrito, seta ancorada e altura igual a capsula

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: retirar o negrito do texto do CTA, manter a seta branca parada no mesmo ponto horizontal durante a expansao da pastilha vermelha, e igualar a altura total do CTA a altura da capsula central.
- Implementacao entregue: `app/frontend/styles.css` mudou `.site-header__cta` para `min-height: 50px` e `font-weight: 500`, ajustou `.site-header__cta-fill` para `justify-content: flex-start` com `padding-left: 7px`, e reduziu o peso visual da seta para `font-weight: 500`.
- Proximo movimento coerente: validar no hover se a seta permanece ancorada a esquerda e se o CTA ficou visualmente alinhado em altura com a capsula central.
### 2026-04-03T13:03:39.4104759-03:00 - Logo em Aspekta vermelho e capsula central translucida com menus em cinza

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: mudar a fonte do logo para `Aspekta` sans serif, deixar o texto do logo em vermelho, transformar os textos do menu central para um tom de cinza e deixar o background da capsula central transparente com blur para continuar legivel sobre secoes futuras.
- Implementacao entregue: `app/frontend/styles.css` passou o logo para `font-family: "Aspekta", "IBM Plex Sans", sans-serif`, `color: var(--brand-red)`, criou `--menu-text-color: #6e7575`, aplicou essa cor em `.site-header__nav-link` e `.site-header__nav-label--hover`, e trocou `--header-shell-bg` para `rgba(255, 255, 255, 0.14)` preservando o blur ja existente; `app/frontend/index.html` removeu `Playfair Display` do import externo; `00-user-guide.md` e `README.md` foram atualizados.
- Proximo movimento coerente: validar no preview local se `Aspekta` esta disponivel no ambiente; caso o navegador nao encontre essa fonte localmente, instalar/servir o arquivo webfont no projeto para evitar fallback involuntario em `IBM Plex Sans`.
### 2026-04-03T13:25:23.6888289-03:00 - Seta lateral no CTA e logo em tamanho/espacamento padrao

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: na animacao do CTA, a seta deve trocar horizontalmente, com a seta atual avancando para a direita e sumindo enquanto outra entra pela esquerda; o texto do logo deve voltar ao tamanho normal e, se as letras estiverem mais unidas, o espacamento deve voltar ao padrao.
- Implementacao entregue: `app/frontend/styles.css` separou o movimento da seta do CTA para `translateX(-110%)` e `translateX(110%)`, preservou o texto do CTA com animacao vertical, reduziu `.site-header__logo` para `25px` e restaurou `letter-spacing: normal`; `00-user-guide.md` foi reescrito em ASCII limpo para remover mojibake e registrar o estado atual da interface.
- Proximo movimento coerente: validar no preview local se a seta do CTA troca lateralmente sem alterar a animacao vertical do texto e se o logo recuperou a proporcao visual desejada.
### 2026-04-03T13:30:43.7849070-03:00 - Sequencia completa de saida/entrada da seta do CTA e diagonais mais longas

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: a primeira seta do CTA deve sumir inteiramente para a direita antes da proxima seta surgir pela esquerda, e o desenho da seta deve ter diagonais mais longas no bico.
- Implementacao entregue: `app/frontend/index.html` trocou os glifos `&rarr;` por SVGs inline com path `M1 8H14M9.25 3L14.25 8L9.25 13`; `app/frontend/styles.css` aumentou a area da seta para `16px`, aplicou `stroke-width: 1.8`, moveu as setas para `translateX(-150%)` / `translateX(150%)`, deu `transition-duration: 210ms` na seta e atrasou a entrada da seta hover em `210ms`; `app/frontend/main.js` passou a esperar `transitionend` da `.site-header__cta-arrow--hover` para fazer o reset invisivel.
- Proximo movimento coerente: validar no navegador se a troca lateral da seta agora ocorre em duas etapas limpas, sem sobreposicao parcial entre a seta que sai e a seta que entra.
### 2026-04-03T13:40:40.1128814-03:00 - Fonte Aspekta local, logo escuro, menu Home e capsula sem sombra

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: baixar e servir `Aspekta` localmente, ajustar o logo para `#262626`, voltar a aproximar as letras do logo, manter os menus centrais em cinza, remover a sombra do background da capsula central e acrescentar `Home` antes de `Sobre` dentro da mesma capsula translucida com blur.
- Implementacao entregue: fonte `app/frontend/assets/fonts/AspektaVF.woff2` e licenca `Aspekta-LICENSE.txt` adicionadas; `app/frontend/styles.css` ganhou `@font-face`, mudou o logo para `color: #262626` com `letter-spacing: -0.08em`, reduziu o gap do menu para `16px` e removeu o `box-shadow` da capsula; `app/frontend/index.html` passou a usar `body id="home"` e adicionou o link `Home` antes de `Sobre`.
- Proximo movimento coerente: validar se a tipografia local `Aspekta` carrega no navegador e se a capsula sem sombra continua legivel sobre secoes futuras.
### 2026-04-03T13:48:56.8902979-03:00 - CTA com hover reversivel e nova copy curta

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: o CTA deve exibir `Toque p/ chamar`; ao sair o mouse, o texto que subiu deve voltar ao estado base e a seta que avancou para a direita tambem deve retornar, sem alterar o hover em mao unica dos menus centrais.
- Implementacao entregue: `app/frontend/index.html` atualizou as duas camadas de texto do CTA; `app/frontend/main.js` passou a usar `bindReversibleRise` apenas no CTA, com `mouseenter`/`focus` para aplicar `.site-header__cta--raise` e `mouseleave`/`blur` para remover a classe; `app/frontend/styles.css` deixou o CTA retornar naturalmente pelas transicoes existentes e removeu o reset instantaneo dedicado ao CTA.
- Proximo movimento coerente: validar visualmente se texto e seta do CTA voltam no mouseout e se os links do menu central continuam com animacao one-way sem regressao.
### 2026-04-03T13:58:42.2787694-03:00 - Ajuste de mascara do texto do CTA e retorno sequencial da seta

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: no hover do CTA, a borda inferior do texto base ainda aparecia enquanto o texto duplicado entrava de baixo; na saida do mouse, a seta anterior voltava antes de a seta nova terminar de sumir.
- Decisao aprovada: aumentar a distancia de deslocamento vertical dos textos do CTA para esconder totalmente a camada base e aplicar no retorno da seta a mesma regra em duas etapas ja usada na entrada.
- Implementacao entregue: `app/frontend/styles.css` ampliou os deslocamentos verticais do texto do CTA para `140%`, adicionou `transition-delay: 210ms` na seta base em estado normal e removeu esse delay da seta base quando `.site-header__cta--raise` esta ativo, garantindo volta sequencial na remocao da classe.
- Proximo movimento coerente: validar no preview local se nao ha mais vazamento do texto antigo na mascara do CTA e se a seta retorna em duas fases limpas no mouseout.
### 2026-04-03T14:30:34.4594668-03:00 - Header mais baixo e microajuste vertical do squircle do logo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deslocar todo o conjunto do header cerca de `1cm` para baixo e subir o quadrado vermelho arredondado ao lado do `R` em `1px`.
- Implementacao entregue: `app/frontend/styles.css` aumentou o `padding-top` de `.site-header` para `62px`, moveu `.site-header__shell` para `top: 62px` e ajustou `.site-header__logo-mark` para `transform: translateY(6px)`.
- Proximo movimento coerente: validar se o novo respiro superior ficou visualmente equilibrado e se o squircle do logo esta alinhado na altura desejada em relacao ao `R`.
### 2026-04-03T14:38:54.9808577-03:00 - Alturas alinhadas, menu com entrada atrasada e refinamento de CTA/logo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: certificar que a capsula central e o CTA tenham a mesma altura/alinhamento e aumentar ambos em cerca de `0,2cm` para cima e para baixo, aplicar nos menus centrais a regra de so entrar o texto de baixo depois que o texto de cima saiu, aumentar o bloco vermelho da seta do CTA com mais espaco a esquerda e seta centralizada, subir o squircle do logo `1px` e aumentar a fonte do logo em `1px`.
- Implementacao entregue: `app/frontend/styles.css` passou `.site-header`, `.site-header__shell`, `.site-header__nav` e `.site-header__cta` para `66px`, reduziu o squircle para `translateY(5px)`, aumentou `.site-header__logo` para `26px`, aplicou `transition-delay: 210ms` na camada hover dos menus com deslocamento vertical de `140%`, aumentou a pastilha do CTA para `38px`, centralizou a seta e ampliou o padding esquerdo do botao para `62px`.
- Proximo movimento coerente: validar se a capsula e o CTA estao exatamente alinhados em altura, se os menus nao mostram sobreposicao de camadas no hover e se a nova proporcao da pastilha vermelha do CTA ficou equilibrada.
### 2026-04-03T14:41:28.8832314-03:00 - Menu central com mais espacamento, cinza mais forte e fonte maior

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar o espacamento entre os menus centrais, escurecer o cinza dos textos e subir a tipografia em `1px`.
- Implementacao entregue: `app/frontend/styles.css` mudou `--menu-text-color` para `#4F5757`, aumentou o `gap` de `.site-header__nav` para `24px` e elevou `.site-header__nav-link` para `18px`; `00-user-guide.md` foi atualizado com a nova referencia visual.
- Proximo movimento coerente: validar no navegador se o novo gap continua cabendo confortavelmente na capsula central e se o cinza mais forte preserva a leveza do header sobre o blur.
### 2026-04-03T14:44:43.6068793-03:00 - CTA mais arredondado, mais largo a esquerda e seta reancorada

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: arredondar um pouco mais os cantos do background geral do CTA e da pastilha vermelha da seta, alargar o botao aproximadamente `0,3cm` para a esquerda e desfazer a mudanca que levava a seta para o meio do texto durante a expansao.
- Implementacao entregue: `app/frontend/styles.css` aumentou `.site-header__cta` para `padding-left: 74px` e `border-radius: 14px`, mudou `.site-header__cta-fill` para `justify-content: flex-start`, `padding-left: 11px` e `border-radius: 12px`, preservando a seta centralizada no quadrado inicial e fixa a esquerda no hover expandido.
- Proximo movimento coerente: validar no preview local se a seta permanece ancorada no inicio do CTA durante toda a animacao e se os novos cantos ficaram visualmente equilibrados.
### 2026-04-03T14:50:42.0271464-03:00 - Pastilha vermelha do CTA expandida para a direita

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar a largura do background vermelho da seta no CTA em aproximadamente `0,3cm` para a direita.
- Implementacao entregue: `app/frontend/styles.css` alterou `.site-header__cta-fill` de `width: 38px` para `width: 50px`, mantendo altura, offset esquerdo, raio de borda e comportamento de expansao no hover.
- Proximo movimento coerente: validar se a pastilha maior continua equilibrada com o texto `Toque p/ chamar` e se o espaco esquerdo do CTA permanece visualmente confortavel.
### 2026-04-03T14:52:52.2447896-03:00 - Nova expansao da pastilha do CTA e recentralizacao da seta

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar a pastilha vermelha da seta em mais aproximadamente `0,2cm` e recentralizar a seta no novo tamanho.
- Implementacao entregue: `app/frontend/styles.css` mudou `.site-header__cta-fill` para `width: 58px` e `padding-left: 19px`, preservando a altura e o comportamento de hover enquanto recompensa o aumento de largura com maior deslocamento interno da seta.
- Proximo movimento coerente: validar visualmente se a seta ficou centralizada no estado base e se a pastilha maior continua proporcional ao texto do CTA.
### 2026-04-03T14:55:03.1888146-03:00 - CTA com texto em 18px e menu central mais espacado

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deixar o texto do CTA no mesmo tamanho dos menus centrais e aumentar mais o espacamento entre os menus do centro.
- Implementacao entregue: `app/frontend/styles.css` elevou `.site-header__cta` para `font-size: 18px` e aumentou `.site-header__nav` para `gap: 32px`; `00-user-guide.md` foi atualizado com a nova referencia visual.
- Proximo movimento coerente: validar se a capsula central ainda acomoda o menu com folga e se o CTA em `18px` preserva boa proporcao com a pastilha da seta.
### 2026-04-03T14:57:23.9969576-03:00 - Gap do menu central aumentado para 40px

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar o `gap` entre os menus centrais para `40px`.
- Implementacao entregue: `app/frontend/styles.css` atualizou `.site-header__nav` de `gap: 32px` para `gap: 40px`, e `00-user-guide.md` passou a refletir a nova medida.
- Proximo movimento coerente: validar se os cinco itens ainda permanecem confortaveis dentro da capsula central sem parecer comprimidos nas laterais.
### 2026-04-03T17:01:46.2350577-03:00 - Logo textual aumentado para 29px

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar o texto do logo em aproximadamente `3` pontos.
- Implementacao entregue: `app/frontend/styles.css` elevou `.site-header__logo` de `26px` para `29px`, e `00-user-guide.md` foi atualizado com a nova referencia visual do logo.
- Proximo movimento coerente: validar se a nova escala do logo continua equilibrada com a capsula central e o CTA.
### 2026-04-03T17:31:28.3499385-03:00 - Tracking manual do logo removido

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: se houver espacamento manual entre as letras do logo, remover esse ajuste e deixar o espacamento nativo da fonte.
- Implementacao entregue: `app/frontend/styles.css` trocou `letter-spacing: -0.08em` por `letter-spacing: normal` em `.site-header__logo`; `00-user-guide.md` passou a registrar o logo com espacamento natural entre letras.
- Proximo movimento coerente: validar visualmente se o wordmark continua com boa densidade e se a distancia entre o squircle e o `R` segue agradavel sem o tracking negativo.
### 2026-04-03T17:33:46.1595485-03:00 - Logo em negrito com tracking levemente fechado

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deixar o texto do logo em negrito e aproximar as letras apenas um pouco.
- Implementacao entregue: `app/frontend/styles.css` ajustou `.site-header__logo` para `font-weight: 700` e `letter-spacing: -0.02em`; `00-user-guide.md` foi sincronizado com o novo estado visual.
- Proximo movimento coerente: validar se o peso maior do logo nao passa a competir visualmente com o menu central e o CTA.
### 2026-04-03T17:36:40.6289739-03:00 - Logo sem negrito e tracking em -0.05em

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: retirar o negrito do logo e ajustar o espacamento entre letras para `-0.05em`.
- Implementacao entregue: `app/frontend/styles.css` voltou `.site-header__logo` para `font-weight: 500` e alterou `letter-spacing` para `-0.05em`; `00-user-guide.md` foi atualizado.
- Proximo movimento coerente: validar se o wordmark ficou com a densidade visual desejada e se o tracking mais fechado nao reduz legibilidade em telas desktop.
### 2026-04-03T23:20:44.4793026-03:00 - Hero textual inicial em IBM Plex Sans

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: iniciar o hero com um bloco textual grande em IBM Plex Sans, alinhado a esquerda, com espacamento aproximado de `7cm` em relacao ao header, dividido em duas frases distintas com a primeira em cinza e a segunda em `#044040`.
- Implementacao entregue: `app/frontend/index.html` recebeu a nova secao `.hero` com um `h1` em duas linhas; `app/frontend/styles.css` criou o espacamento superior de `265px`, tipografia responsiva entre `64px` e `104px`, `line-height: 0.94`, tracking `-0.06em`, cor `#767C7C` na primeira frase e `var(--text-color)` na segunda; `00-user-guide.md` foi atualizado com a nova referencia do primeiro fold.
- Proximo movimento coerente: decidir a composicao visual complementar do hero, usando os MP4 extraidos, um still frame ou uma coluna lateral/media block.
### 2026-04-03T23:24:03.1604630-03:00 - Hero alinhado a tipografia do logo e nova hierarquia de cor

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: mudar o hero para a mesma fonte e parametros do logo, reduzir a tipografia em cerca de `7` pontos, aplicar `#044040` na primeira frase e `#8C1F28` na segunda.
- Implementacao entregue: `app/frontend/styles.css` trocou `.hero__title` para `font-family: "Aspekta", "IBM Plex Sans", sans-serif`, `font-weight: 500`, `letter-spacing: -0.05em`, `line-height: 1`, `font-size: clamp(57px, 6.5vw, 97px)`, mudou `.hero__line--muted` para `var(--text-color)` e `.hero__line--accent` para `var(--brand-red)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a nova escala/hierarquia do hero preserva presenca visual sem competir com o header e se a quebra em duas linhas continua equilibrada.
### 2026-04-03T23:26:24.4175267-03:00 - Hero reduzido em mais 7px

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir o tamanho dos textos do hero em mais aproximadamente `7` pontos.
- Implementacao entregue: `app/frontend/styles.css` alterou `.hero__title` para `font-size: clamp(50px, 6vw, 90px)`, e `00-user-guide.md` foi atualizado com a nova escala responsiva.
- Proximo movimento coerente: validar se a nova escala ainda preserva impacto no primeiro fold e melhora a leitura das duas frases.
### 2026-04-03T23:27:54.8916421-03:00 - Hero reduzido em mais 15px

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: diminuir o tamanho dos textos do hero em mais aproximadamente `15` pontos.
- Implementacao entregue: `app/frontend/styles.css` alterou `.hero__title` para `font-size: clamp(35px, 5vw, 75px)`, e `00-user-guide.md` foi sincronizado com a nova escala.
- Proximo movimento coerente: validar visualmente se o hero continua com presenca suficiente no primeiro fold e se a quebra de linha segue harmonica.

### 2026-04-03T23:38:02.6363457-03:00 - Hero com novo copy, primeira linha em #262626 e escala maior

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: mudar a primeira frase do hero para `Cresca melhor.`, a segunda para `Produza mais.`, aumentar ambas em cerca de `7` pontos e aplicar `#262626` na primeira linha.
- Implementacao entregue: `app/frontend/index.html` atualizou as duas frases do `h1`; `app/frontend/styles.css` elevou `.hero__title` para `font-size: clamp(42px, 5.5vw, 82px)` e mudou `.hero__line--muted` para `#262626`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a versao mais curta do hero preserva impacto no primeiro fold e se a diferenca entre `#262626` e `#8C1F28` ficou equilibrada com o header.

### 2026-04-03T23:43:26.3268900-03:00 - Hero maior e com recuo extra proprio a esquerda

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar a fonte do hero em mais aproximadamente `5` pontos e adicionar cerca de `2cm` de recuo a esquerda valido somente para essa secao.
- Implementacao entregue: `app/frontend/styles.css` adicionou `padding-left: 76px` em `.hero` e elevou `.hero__title` para `font-size: clamp(47px, 5.8vw, 87px)`; `00-user-guide.md` foi atualizado com a nova posicao e escala.
- Proximo movimento coerente: validar se o offset adicional do hero cria a composicao desejada sem desalinhamento excessivo em relacao ao header e se a nova escala segue equilibrada com o primeiro fold.

### 2026-04-03T23:45:57.7712160-03:00 - Recuo esquerdo do hero ampliado em mais 0,5cm

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: recuar o hero mais aproximadamente `0,5cm` para a direita, mantendo esse ajuste valido apenas para essa secao.
- Implementacao entregue: `app/frontend/styles.css` alterou `.hero` de `padding-left: 76px` para `padding-left: 95px`; `00-user-guide.md` foi sincronizado com o novo recuo aplicado ao hero.
- Proximo movimento coerente: validar se a nova margem visual do hero cria a composicao desejada sem afastar demais a frase do eixo de leitura principal.

### 2026-04-04T09:27:08.7900587-03:00 - Grafico LTA animado acima do hero

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: adicionar acima da primeira frase do hero uma animacao que comece em branco e desenhe uma linha espessa, na mesma cor do primeiro texto, com curvas suaves e formato de LTA, alinhada ao mesmo inicio e fim horizontal do bloco textual.
- Implementacao entregue: `app/frontend/index.html` recebeu um SVG `.hero__trend` acima do `h1`; `app/frontend/styles.css` criou `.hero__chart-wrap`, `.hero__trend`, `.hero__trend-path` e `@keyframes hero-trend-draw`, usando `stroke: #262626`, `stroke-width: 14`, curva ascendente suave e animacao por `stroke-dashoffset`; `00-user-guide.md` foi atualizado com a nova camada grafica do hero.
- Proximo movimento coerente: validar no preview se a curva da LTA, espessura do traco e tempo de desenho estao com a energia visual desejada antes de posicionar video/asset complementar no primeiro fold.

### 2026-04-04T09:31:53.6260323-03:00 - Grafico do hero reposicionado, limitado a meia pagina e com eixos

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter o texto do hero onde estava, deslocar a animacao do grafico cerca de `3cm` para cima, limitar o grafico a aproximadamente metade da pagina e abrir junto um eixo X com `2024`, `2025`, `2026` e um eixo Y em `%`.
- Implementacao entregue: `app/frontend/index.html` adicionou linhas e labels SVG para os eixos X/Y e redesenhou a curva LTA em um `viewBox` mais compacto; `app/frontend/styles.css` tornou `.hero` relativo, converteu `.hero__chart-wrap` para posicao absoluta em `top: 152px`, `left: 95px` e `width: min(50vw, 590px)`, criou animacoes para os eixos/labels e manteve o `h1` sem deslocamento causado pelo grafico; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se o grafico nao encosta no titulo, se a meia largura esta proporcional e se os rotulos dos eixos estao legiveis sem roubar protagonismo das frases.

### 2026-04-04T09:36:57.4206923-03:00 - Hero com video a direita e ajuste de anos/eixo do grafico

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: ajustar o eixo X do grafico para ir de `2023` a `2026`, posicionar `hero01.mp4` no lado direito da animacao/frases, copiar esse asset para dentro da pagina do projeto, subir o grafico mais cerca de `2cm` e corrigir o corte do label `100%`.
- Implementacao entregue: `app/frontend/assets/videos/hero01.mp4` foi criado a partir de uma copia de `C:\Users\raulv\OneDrive\Videos\hero01.mp4`; `app/frontend/index.html` passou a ter `.hero__content`, `.hero__media`, `.hero__video`, adicionou o ano `2023` e reposicionou labels/axis/path do SVG; `app/frontend/styles.css` subiu `.hero__chart-wrap` para `top: 76px`, criou o grid de duas colunas do hero, limitou o titulo a `620px`, posicionou a midia a direita e ajustou o recuo do label `100%`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o video fica visualmente equilibrado com o titulo/grafico e, se necessario, ajustar largura, altura ou alinhamento vertical da midia.

### 2026-04-04T09:40:08.5343749-03:00 - Grafico/eixos do hero com loop de recolhimento e pausa

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: a cada ciclo, a linha do grafico e os eixos devem voltar ate sumir, aguardar `1s` e reiniciar em loop continuo.
- Implementacao entregue: `app/frontend/styles.css` substituiu as animacoes one-shot `hero-axis-draw`, `hero-label-appear` e `hero-trend-draw` por `hero-axis-cycle`, `hero-label-cycle` e `hero-trend-cycle`, todas com duracao de `13200ms`, mantendo os elementos visiveis ate cerca de `10s`, recolhendo ate `92.42%` do ciclo, pausando ocultos ate `100%` e reiniciando em loop; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se o tempo total do ciclo, a velocidade do recolhimento e a pausa de `1s` ficaram naturais no primeiro fold.

### 2026-04-04T09:42:03.7063819-03:00 - Grafico do hero encurtado apenas na extremidade direita

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir a largura do grafico apenas na parte direita em aproximadamente `1,5cm`, mantendo o inicio a esquerda no mesmo lugar.
- Implementacao entregue: `app/frontend/index.html` moveu o fim do eixo X e o label `2026` de `x=560` para `x=503`, reposicionou `2024` para `x=216` e `2025` para `x=360`, e recalibrou os pontos da curva `.hero__trend-path` para terminar em `x=503` sem alterar o ponto inicial em `x=72`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar visualmente se a reducao da extremidade direita deixou mais respiro para o video sem achatar demais a leitura do grafico.

### 2026-04-04T10:47:06.3073873-03:00 - Grafico do hero menor, linha mais fina e pontos anuais animados

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: fazer a area visual do grafico terminar antes do meio da tela por meio do recuo/reducao do container, diminuir um pouco a espessura da linha e fazer surgir uma bolinha centralizada na curva sempre que o traco passar por cada ano do eixo X.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.hero__chart-wrap` para `width: min(36vw, 430px)`, diminuiu `.hero__trend-path` para `stroke-width: 11`, criou `.hero__trend-point` e quatro animacoes anuais em loop; `app/frontend/index.html` adicionou quatro `circle` nos marcos `2023`, `2024`, `2025` e `2026` alinhados ao eixo X e posicionados sobre a curva; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se os pontos aparecem exatamente quando a linha cruza cada marco e se a nova largura do grafico abriu o respiro desejado antes do meio da pagina.

### 2026-04-04T10:55:32.8620872-03:00 - Pontos anuais removidos e recuo ate o meio reduzido para 1cm

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: retirar as bolinhas do grafico do hero e diminuir o recuo antes do meio da tela para aproximadamente `1cm`.
- Implementacao entregue: `app/frontend/index.html` removeu os quatro `circle` anuais do SVG; `app/frontend/styles.css` alterou `.hero__chart-wrap` para `width: calc(50vw - 171px)` e removeu `.hero__trend-point` e os `@keyframes hero-point-*`; `00-user-guide.md` foi sincronizado com o novo comportamento e largura do grafico.
- Proximo movimento coerente: validar no preview se a borda direita do grafico agora termina perto de `1cm` antes do eixo central e se a ausencia dos pontos deixou a curva mais limpa.

### 2026-04-04T11:33:32.5751120-03:00 - Compensacao da margem interna do viewBox para mover a largura visual do grafico

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: a largura do grafico parecia nao mexer porque a curva/eixo terminam em `x=503`, enquanto o `viewBox` do SVG vai ate `600`, criando uma folga interna invisivel a direita.
- Implementacao entregue: `app/frontend/styles.css` ajustou `.hero__chart-wrap` para `width: calc((50vw - 171px) * 1.193)`, compensando a razao `600 / 503` para que a ponta direita visivel do traco se aproxime de `1cm` antes do meio da tela; `00-user-guide.md` foi sincronizado com essa correcao.
- Proximo movimento coerente: validar no navegador se a ponta do grafico agora realmente se moveu e, se necessario, ajustar o multiplicador para calibracao optica fina.

### 2026-04-04T11:35:34.6624680-03:00 - Video do hero removido e substituido por squircle vermelho

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: remover o video do lado direito do hero e colocar em seu lugar, ainda a direita na parte do meio, um pequeno quadrado arredondado vermelho igual ao elemento ao lado do logo.
- Implementacao entregue: `app/frontend/index.html` removeu o `video` e inseriu um SVG `.hero__logo-mark` com o mesmo path supereliptico do logo; `app/frontend/styles.css` converteu `.hero__media` em um container flex centralizado, ajustou `min-height` e `margin-top`, substituiu `.hero__video` por `.hero__logo-mark` e `.hero__logo-mark svg`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se o squircle esta na altura/posicao desejada na coluna direita e, se necessario, ajustar tamanho ou alinhamento optico.

### 2026-04-04T11:43:43.1580084-03:00 - Grafico do hero mais alto no eixo Y e mais curto so na direita

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar a altura util do grafico em cerca de `0,5cm`, ampliar a distancia entre `0%`, `50%` e `100%`, e diminuir a largura apenas na direita em mais aproximadamente `0,5cm`.
- Implementacao entregue: `app/frontend/index.html` alterou o SVG para `viewBox="0 0 600 240"`, moveu o eixo Y para `y1=200` e `y2=10`, reposicionou os labels Y para `18/114/204`, baixou os labels X para `y=228`, encurtou a ponta direita para `x=484`, recalibrou `2024` e `2025` para `x=210` e `x=347`, e redesenhou a curva LTA com fim em `484,24`; `app/frontend/styles.css` aumentou `.hero__trend` para `height: 199px`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a nova altura vertical nao invade o texto e se o encurtamento a direita ficou visivel sem deformar a leitura da curva.

### 2026-04-04T11:46:17.0478049-03:00 - Grafico do hero deslocado 0,4cm para a esquerda

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deslocar todo o grafico do hero aproximadamente `0,4cm` para a esquerda sem mover o bloco textual.
- Implementacao entregue: `app/frontend/styles.css` alterou `.hero__chart-wrap` de `left: 95px` para `left: 80px`, mantendo `padding-left: 95px` em `.hero`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a origem do eixo Y e da curva ficou na posicao desejada em relacao ao inicio do titulo.

### 2026-04-04T11:58:54.2101927-03:00 - Tres variacoes de montanha abstrata para escolha visual no hero

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: adicionar algumas imagens de montanha em linguagem abstrata/editorial na direita do hero para avaliacao visual, mantendo por enquanto o texto abaixo da imagem em vez de overlay para comparar melhor forma, contraste e textura.
- Implementacao entregue: `app/frontend/index.html` substituiu o squircle direito por tres `figure` com SVGs de montanha e legendas (`Topografia suave`, `Cristas estruturais`, `Neblina editorial`); `app/frontend/styles.css` converteu `.hero__media` em grid de 3 colunas, criou `.hero__mountain-card`, `.hero__mountain-image` e `.hero__mountain-label`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: escolher uma das tres direcoes visuais, decidir se o texto final ficara abaixo ou em overlay, e entao evoluir a composicao direita do hero com uma unica variante refinada.

### 2026-04-04T12:04:46.1891805-03:00 - Hero consolidado com uma unica imagem Neblina editorial e grafico mais a esquerda

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deslocar o grafico completo mais aproximadamente `0,3cm` para a esquerda e usar apenas uma imagem na direita do hero, na direcao `Neblina editorial`, aproveitando as cores do brandbook com gradientes/degrades.
- Implementacao entregue: `app/frontend/styles.css` moveu `.hero__chart-wrap` de `left: 80px` para `left: 69px`, trocou `.hero__media` para um container unico com `width: min(100%, 420px)` e removeu `.hero__mountain-label`; `app/frontend/index.html` consolidou os tres cards em uma unica composicao SVG de montanha com gradientes usando `#F2F2F2`, `#044040`, `#591C21`, `#8C1F28` e um acento sutil em `#D92525`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: decidir se a imagem final recebera texto por cima, abaixo ou se permanecera limpa como contraponto ao titulo e ao grafico.

### 2026-04-04T12:12:18.0000000-03:00 - Hero em Topografia tecnica em motion com painel maior e elevado

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: seguir com a direcao `Topografia tecnica em motion`, subindo o bloco visual da direita em cerca de `3cm` e aumentando sua area para ganhar mais presenca no primeiro fold.
- Implementacao entregue: `app/frontend/index.html` substituiu a composicao estatica `Neblina editorial` por um unico painel SVG topografico com grid, curvas de nivel, highlight em dash motion, scanline e pontos pulsantes; `app/frontend/styles.css` ampliou `.hero__media` para `width: min(100%, 500px)`, `min-height: 420px`, `margin-top: -210px`, trocou `.hero__mountain-*` por `.hero__topography-*` e criou keyframes dedicados para drift, scan e pulse; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a intensidade do motion esta premium e contida, e depois decidir se o painel recebe algum texto auxiliar ou permanece limpo.

### 2026-04-04T12:34:11.8191391-03:00 - Hero simplificado com squircle e texto auxiliar, grafico 1cm mais alto

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: subir o grafico do hero em mais aproximadamente `1cm`, retirar a midia grande da direita e voltar para o pequeno quadrado arredondado com recuo, adicionando na parte de baixo um texto generico em `IBM Plex Sans` cinza para preenchimento posterior.
- Implementacao entregue: `app/frontend/styles.css` moveu `.hero__chart-wrap` de `top: 76px` para `top: 38px`, converteu `.hero__media` para uma coluna simples com `padding-left: 72px`, `padding-top: 112px`, `width: min(100%, 360px)` e `margin-top: -96px`, removeu todos os estilos/keyframes `.hero__topography-*` e criou `.hero__media-mark` e `.hero__media-note`; `app/frontend/index.html` trocou o painel topografico por um squircle SVG igual ao do logo e por um paragrafo placeholder; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a posicao do squircle esta na altura desejada e se o texto auxiliar realmente conversa com a base da segunda frase antes de preencher o conteudo real.

### 2026-04-04T12:40:24.9252003-03:00 - Bloco direito do hero recentrado e deslocado 1cm para fora do eixo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: alinhar o squircle e o texto auxiliar no centro da tela e, a partir desse eixo, recuar o conjunto aproximadamente `1cm` para fora.
- Implementacao entregue: `app/frontend/styles.css` alterou `.hero__media` para `justify-self: center`, removeu o `padding-left`, reduziu a largura para `width: min(100%, 300px)` e adicionou `transform: translateX(38px)`, preservando `padding-top: 112px` e `margin-top: -96px`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se esse deslocamento para fora do centro esta na direcao certa ou se vale um ajuste fino maior/menor.

### 2026-04-04T12:51:51.2390280-03:00 - Deslocamento para fora do centro reduzido para 7px

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter o bloco direito do hero centralizado, mas reduzir o recuo para fora do eixo para apenas `7px`.
- Implementacao entregue: `app/frontend/styles.css` alterou `.hero__media` de `transform: translateX(38px)` para `transform: translateX(7px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se os `7px` ja criam o desalinhamento optico desejado ou se o melhor e zerar completamente o offset.

### 2026-04-04T12:53:29.8657262-03:00 - Offset lateral do bloco direito removido

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: retirar o deslocamento lateral do squircle e do texto auxiliar, deixando o conjunto centralizado e alinhado a esquerda dentro do proprio bloco.
- Implementacao entregue: `app/frontend/styles.css` removeu `transform: translateX(7px)` de `.hero__media`; `00-user-guide.md` foi sincronizado com o novo estado sem offset.
- Proximo movimento coerente: validar se esse alinhamento neutro resolveu a leitura do bloco direito ou se ainda vale reposicionar verticalmente o squircle ou o texto.

### 2026-04-04T12:54:49.0837657-03:00 - Bloco direito do hero ancorado no centro real da viewport

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: mesmo sem offset, o squircle e o texto ainda ficavam longe do centro porque continuavam dependentes da segunda coluna do grid do hero.
- Implementacao entregue: `app/frontend/styles.css` converteu `.hero__media` em um bloco absoluto com `left: calc(50vw - (var(--page-gutter) + 95px))` e `top: 112px`, removendo `padding-top`, `margin-top` e `min-height` artificiais para ancorar o inicio do bloco no centro real da viewport; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se o inicio do bloco agora cai exatamente onde voce esperava no eixo central e, se preciso, calibrar apenas alguns pixels.

### 2026-04-04T12:58:25.5572037-03:00 - Bloco direito 1cm mais alto e titulo com quebra natural mais a direita

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: subir o squircle e o texto auxiliar em mais aproximadamente `1cm`, e deixar o titulo do hero seguir na mesma linha ate quebrar mais a direita, em vez de forcar a segunda frase em linha separada.
- Implementacao entregue: `app/frontend/styles.css` moveu `.hero__media` de `top: 112px` para `top: 74px`, ampliou `.hero__title` para `max-width: min(1040px, calc(100vw - 280px))`, mudou `.hero__line` para `display: inline` e trocou o espacamento da segunda frase para `margin-left: 0.18em`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar visualmente se a quebra natural agora acontece proximo do alinhamento desejado com o CTA e se o bloco direito subiu o suficiente.

### 2026-04-04T13:00:00.0000000-03:00 - Titulo restaurado e quebra transferida para o texto da direita

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: voltar o titulo do hero ao padrao anterior em duas linhas e aplicar a quebra mais tardia apenas ao texto da direita, subindo esse bloco mais aproximadamente `1cm`.
- Implementacao entregue: `app/frontend/styles.css` restaurou `.hero__title` para `max-width: 620px`, mudou `.hero__line` de volta para `display: block`, restaurou `.hero__line--accent` para `margin-top: 12px`, subiu `.hero__media` de `top: 74px` para `top: 36px` e ampliou sua area para `width: min(100%, 460px)` com `.hero__media-note` em `max-width: 460px`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a largura nova do texto da direita segura a quebra no ponto visual desejado em relacao ao CTA.

### 2026-04-04T13:10:07.0931604-03:00 - Bloco direito mais alto, mais a direita e com quebra mais tardia

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deslocar o bloco direito do hero mais aproximadamente `0,5cm` para cima, cerca de `3cm` para a direita, e expandir um pouco o limite de quebra do texto auxiliar.
- Implementacao entregue: `app/frontend/styles.css` moveu `.hero__media` de `top: 36px` para `top: 17px`, ajustou `left` para `calc(50vw - (var(--page-gutter) + 95px) + 113px)`, ampliou a area para `width: min(100%, 520px)` e passou `.hero__media-note` para `max-width: 520px`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se essa nova posicao ainda conversa bem com o eixo do CTA e se a largura maior do texto nao invade demais o respiro do hero.

### 2026-04-04T13:11:58.9731071-03:00 - Inicio do bloco direito deslocado mais 1,5cm para a direita

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: mover o inicio dos elementos da direita do hero mais aproximadamente `1,5cm` para a direita.
- Implementacao entregue: `app/frontend/styles.css` alterou `.hero__media` de `left: calc(50vw - (var(--page-gutter) + 95px) + 113px)` para `left: calc(50vw - (var(--page-gutter) + 95px) + 170px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se esse novo ponto de partida do bloco direito ficou no alinhamento desejado ou se ainda pede microajuste fino.

### 2026-04-04T13:16:22.8405723-03:00 - Quebra do texto auxiliar preservada apos deslocar o bloco direito

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Problema observado: ao mover o inicio do bloco direito do hero para a direita, o limite de quebra do texto auxiliar acompanhou junto e alterou a leitura planejada.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.hero__media` e `.hero__media-note` de `520px` para `463px`, preservando o mesmo ponto visual de quebra anterior enquanto mantem o inicio do bloco em `left: calc(50vw - (var(--page-gutter) + 95px) + 170px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a largura compensada devolve exatamente a quebra esperada ou se ainda precisa de um ajuste fino de poucos pixels.

### 2026-04-04T13:41:38.2741513-03:00 - Hero inteiro deslocado mais 1,5cm para a direita

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: mover todos os elementos do hero mais aproximadamente `1,5cm` para a direita.
- Implementacao entregue: `app/frontend/styles.css` alterou `.hero` de `padding-left: 95px` para `152px`, moveu `.hero__chart-wrap` de `left: 69px` para `126px` e reposicionou `.hero__media` de `left: calc(50vw - (var(--page-gutter) + 95px) + 170px)` para `left: calc(50vw - (var(--page-gutter) + 95px) + 227px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se o novo eixo do hero ainda conversa bem com o header e se o bloco da direita nao ficou proximo demais da borda visual do fold.

### 2026-04-04T13:43:39.0093817-03:00 - Rebalanceamento fino entre o lado esquerdo e o lado direito do hero

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: voltar o lado direito do hero aproximadamente `0,8cm` e voltar o lado esquerdo aproximadamente `0,3cm`.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.hero` de `padding-left: 152px` para `141px`, moveu `.hero__chart-wrap` de `left: 126px` para `115px` e reposicionou `.hero__media` de `left: calc(50vw - (var(--page-gutter) + 95px) + 227px)` para `left: calc(50vw - (var(--page-gutter) + 95px) + 197px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se o novo equilibrio entre os dois lados do hero ficou natural ou se ainda pede microajuste de poucos pixels.

### 2026-04-04T13:45:49.7337765-03:00 - Novo microajuste do equilibrio lateral do hero

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: voltar o lado direito do hero aproximadamente `0,3cm` e voltar o lado esquerdo aproximadamente `0,2cm`.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.hero` de `padding-left: 141px` para `133px`, moveu `.hero__chart-wrap` de `left: 115px` para `107px` e reposicionou `.hero__media` de `left: calc(50vw - (var(--page-gutter) + 95px) + 197px)` para `left: calc(50vw - (var(--page-gutter) + 95px) + 186px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se esse ajuste fino fechou o equilibrio visual do hero antes de seguir para o texto auxiliar ou para a proxima secao.

### 2026-04-04T13:47:17.6103445-03:00 - Hero refinado com recuo maior no lado esquerdo e menor no direito

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: voltar o lado direito do hero aproximadamente `0,1cm` e voltar o lado esquerdo aproximadamente `0,3cm`.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.hero` de `padding-left: 133px` para `122px`, moveu `.hero__chart-wrap` de `left: 107px` para `96px` e reposicionou `.hero__media` de `left: calc(50vw - (var(--page-gutter) + 95px) + 186px)` para `left: calc(50vw - (var(--page-gutter) + 95px) + 182px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se o eixo esquerdo voltou ao alinhamento ideal com o titulo e se o bloco direito ainda sustenta o equilibrio do fold.

### 2026-04-04T13:47:17.6103445-03:00 - Quebra do texto da direita espelhada pelo mesmo gap do titulo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: fazer o texto auxiliar da direita quebrar usando no lado direito a mesma distancia visual existente entre o recuo global esquerdo e o inicio das frases do hero.
- Implementacao entregue: `app/frontend/styles.css` manteve `.hero` em `padding-left: 122px`, passou `.hero__media` a usar `right: 122px` e `width: auto`, removeu o limite fixo de `463px`, tornou `.hero__media-note` responsavel por ocupar `100%` da largura disponivel sem `max-width`, e deixou `.hero__chart-wrap` amarrado ao mesmo eixo do titulo por `left: calc(122px - 26px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a nova quebra espelhada do texto direito ficou no ponto exato desejado ou se ainda pede um ajuste fino de poucos pixels.

### 2026-04-04T14:04:30.9312697-03:00 - Texto institucional aplicado no bloco auxiliar direito do hero

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: substituir o texto placeholder do lado direito do hero por uma copy institucional inicial apresentando a ideia de crescimento, produtividade e apoio da Redscale.
- Implementacao entregue: `app/frontend/index.html` trocou o placeholder de `.hero__media-note` pela copy `A equipe Redscale entendeu que para haver crescimento e necessario um aumento na producao, ou seja, na produtividade. Nao necessariamente fazer mais - fazer melhor. Nossos produtos, servicos, metodologias e insights te ajudam a chegar la.`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar a leitura da nova copy no fold e decidir se ela permanece como texto corrido ou se vale quebrar em duas unidades de mensagem.

### 2026-04-04T14:07:42.5535032-03:00 - Copy do bloco direito encurtada, em negrito e com quebra mais tardia

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir a copy do texto direito para a versao sem a abertura sobre a equipe, deixar esse texto em negrito e expandir o limite de quebra em aproximadamente `0,3cm`.
- Implementacao entregue: `app/frontend/index.html` atualizou `.hero__media-note` para `Para haver crescimento e necessario um aumento na producao, ou seja, na produtividade. Nao necessariamente fazer mais - fazer melhor. Nossos produtos, servicos, metodologias e insights te ajudam a chegar la.`; `app/frontend/styles.css` mudou `.hero__media` de `right: 122px` para `111px` e elevou `.hero__media-note` para `font-weight: 700`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a nova copy ganha o peso editorial desejado ou se ainda pede ajuste de largura, entrelinha ou tamanho.

### 2026-04-04T14:16:38.6450051-03:00 - Texto auxiliar do hero voltou ao peso normal e ganhou mais largura util

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: retirar o negrito do texto auxiliar da direita do hero e expandir um pouco mais o limite para quebra de linha.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.hero__media` de `right: 111px` para `103px`, abrindo mais largura util para a copy, e devolveu `.hero__media-note` de `font-weight: 700` para `400`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se essa largura adicional ja resolve a quebra desejada ou se ainda vale mais um microajuste antes de evoluir o restante do fold.

### 2026-04-04T14:18:27.2351153-03:00 - Travessao aplicado e texto auxiliar da direita reposicionado para cima

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: trocar o hifen simples da copy do bloco direito por travessao e deslocar essa parte do texto aproximadamente `1cm` para cima.
- Implementacao entregue: `app/frontend/index.html` substituiu `fazer mais - fazer melhor` por `fazer mais &mdash; fazer melhor`; `app/frontend/styles.css` reduziu `.hero__media-note` de `margin-top: 86px` para `48px`, subindo o texto sem mover o squircle; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a nova proximidade entre squircle e texto ficou equilibrada ou se ainda pede um ajuste fino de poucos pixels.

### 2026-04-04T14:20:07.7354264-03:00 - Texto auxiliar da direita subiu mais 0,5cm

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deslocar o texto do lado direito mais aproximadamente `0,5cm` para cima, sem mover o squircle.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.hero__media-note` de `margin-top: 48px` para `29px`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se a distancia entre o squircle e o texto agora ficou no ponto desejado ou se ainda pede microajuste.

### 2026-04-04T15:13:40.9223009-03:00 - Texto auxiliar da direita desceu 0,1cm

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deslocar o texto do lado direito aproximadamente `0,1cm` para baixo, sem mover o squircle.
- Implementacao entregue: `app/frontend/styles.css` aumentou `.hero__media-note` de `margin-top: 29px` para `33px`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar se esse microajuste fechou a distancia ideal entre o squircle e a copy antes de seguir para o restante do hero.

### 2026-04-04T21:23:31.0286397-03:00 - Faixa de video ampla adicionada abaixo do hero com CTA reutilizavel

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter o hero como esta por enquanto e criar abaixo dele uma faixa ampla de video em loop, respeitando os recuos globais, com um CTA sobreposto no canto inferior direito copiando o mesmo componente do header.
- Implementacao entregue: `app/frontend/assets/videos/7593885-hd_1920_1080_25fps.mp4` foi copiado de `C:\Users\raulv\OneDrive\Videos\7593885-hd_1920_1080_25fps.mp4`; `app/frontend/index.html` extraiu o CTA para a base reutilizavel `site-cta`, manteve o header usando esse componente e adicionou a nova `section.media-loop` com `video`, `media-loop__shade` e CTA sobreposto; `app/frontend/styles.css` moveu a aparencia/interacao do botao para `.site-cta*`, criou a faixa de video com `margin-top: 72px`, `height: clamp(420px, 46vw, 620px)`, `border-radius: 26px`, `object-fit: cover` e gradiente sutil na base direita; `app/frontend/main.js` passou a aplicar a animacao do CTA em qualquer `.site-cta`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: revisar a copy do CTA sobre o video e decidir qual sera a proxima secao da home abaixo dessa faixa.

### 2026-04-04T21:41:14.3726591-03:00 - Capsula do header alargada e menu com estado final em vermelho

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: alargar a capsula fixa do centro aproximadamente `0,3cm` para cada lado para conter melhor os menus, remover a cor visivel da borda e fazer o texto final da animacao dos menus centrais entrar em `#8C1F28`.
- Implementacao entregue: `app/frontend/styles.css` trocou `--header-shell-width` de `400px` para `423px`, zerou a cor visivel da borda com `--header-border: transparent` e mudou `.site-header__nav-label--hover` de `var(--menu-text-color)` para `var(--brand-red)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a nova largura da capsula resolve completamente o respiro lateral dos menus e, a partir disso, seguir para o proximo refinamento da home.

### 2026-04-04T22:06:02.7438538-03:00 - Capsula do header alargada mais 0,3cm para cada lado

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: ampliar mais a capsula fixa central do header aproximadamente `0,3cm` para cada lado, preservando o restante do comportamento atual.
- Implementacao entregue: `app/frontend/styles.css` aumentou `--header-shell-width` de `423px` para `446px`; `00-user-guide.md` foi sincronizado com a nova largura aproximada do retangulo arredondado.
- Proximo movimento coerente: validar no preview se o novo ganho lateral fechou o enquadramento ideal dos menus antes de seguir para o proximo ajuste visual.

### 2026-04-04T22:09:24.5176054-03:00 - Menu central do header permanece vermelho apos a subida

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter o texto do menu central em `#8C1F28` depois que a animacao termina, em vez de deixar o item voltar sozinho para a cor anterior enquanto ainda estiver ativo.
- Implementacao entregue: `app/frontend/main.js` mudou `bindOneWayRise` para manter a classe elevada ativa apos o `transitionend`, preservando o estado visual do item enquanto o cursor ou foco continuam no link, e so fazer o reset invisivel na saida; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a permanencia do vermelho fechou o comportamento desejado do menu antes de seguir para os proximos refinamentos da home.

### 2026-04-04T22:10:41.4537153-03:00 - Capsula do header alargada mais 0,5cm para cada lado

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: ampliar novamente a capsula fixa central do header aproximadamente `0,5cm` para cada lado, preservando o restante do comportamento atual.
- Implementacao entregue: `app/frontend/styles.css` aumentou `--header-shell-width` de `446px` para `484px`; `00-user-guide.md` foi sincronizado com a nova largura aproximada do retangulo arredondado.
- Proximo movimento coerente: validar no preview se esse novo ganho lateral fechou a largura ideal da capsula antes de seguir para o proximo ajuste visual.

### 2026-04-04T22:16:11.5788409-03:00 - CTAs do header e do video receberam textos distintos

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: trocar o CTA do header para `Inicie um Projeto` e o CTA sobre o video para `Conheca nossa Filosofia`, mantendo o mesmo componente visual compartilhado.
- Implementacao entregue: `app/frontend/index.html` atualizou as duas camadas de texto do CTA do header para `Inicie um Projeto` e as duas camadas do CTA da faixa de video para `Conheca nossa Filosofia`; `00-user-guide.md` foi sincronizado com as novas copies.
- Proximo movimento coerente: validar no preview o encaixe visual das novas copies dentro do componente antes de seguir para a proxima secao da home.

### 2026-04-04T22:21:56.8351780-03:00 - Novas copies aplicadas ao CTA do header e da faixa de video

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: trocar o CTA do header para `Fale com a gente` e o CTA sobre o video para `Veja nossos servicos`, preservando o mesmo componente visual compartilhado.
- Implementacao entregue: `app/frontend/index.html` atualizou as duas camadas de texto do CTA do header para `Fale com a gente` e as duas camadas do CTA da faixa de video para `Veja nossos servi&ccedil;os`; `00-user-guide.md` foi sincronizado com as novas copies.
- Proximo movimento coerente: validar no preview o encaixe visual das novas copies dentro do componente antes de seguir para a proxima secao da home.

### 2026-04-04T22:54:49.9046313-03:00 - Grafico do hero removido e secao Sobre adicionada com ritmo vertical de 2,5cm

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: retirar o grafico do hero sem deslocar os demais elementos do fold, considerar a faixa de video abaixo como parte do proprio hero e aplicar entre secoes independentes um espacamento vertical aproximado de `2,5cm`, usando esse intervalo para introduzir a secao `Sobre` abaixo do video.
- Implementacao entregue: `app/frontend/index.html` removeu o bloco `hero__chart-wrap` e adicionou a nova `section.about` abaixo da faixa de video, com identificador `Sobre N&oacute;s` e o texto `Nossa Filosofia consiste em um ecossistema horizontal para aumentar a produtividade que mistura um forte senso de objetividade, com aplica&ccedil;&otilde;es pr&aacute;ticas e metodologia keep-life-simple.`; `app/frontend/styles.css` criou `--section-gap: 95px`, preservou o posicionamento atual do hero, removeu os estilos e keyframes do grafico antigo e montou a secao `Sobre` em duas colunas com gap aproximado de `5cm`, marca arredondada vermelha e tipografia grande em `IBM Plex Sans`; `00-user-guide.md` foi sincronizado com a nova regra de espacamento e com a nova ordem das secoes.
- Proximo movimento coerente: validar no preview se o peso tipografico e o espacamento lateral da secao `Sobre` ficaram equilibrados com o hero expandido antes de seguir para a proxima secao da home.

### 2026-04-04T23:08:25.9934508-03:00 - Copy longa institucional aplicada na secao Sobre

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: substituir a frase curta da secao `Sobre` por uma copy institucional mais completa sobre produtividade, produtos, cursos, treinamentos, consultoria especializada, relatorios trimestrais e plano de acao.
- Implementacao entregue: `app/frontend/index.html` atualizou o bloco `.about__title` para `Nosso prop&oacute;sito &eacute; elevar a produtividade de pessoas ou do neg&oacute;cio como um todo. Para isso, oferecemos produtos, cursos, treinamentos adaptados a sua realidade e uma consultoria especializada. Na parte de Consultoria, temos um time dedicado a assuntos t&eacute;cnicos e complexos, e outro time conectado 24h nas atualiza&ccedil;&otilde;es do mercado, e traduzimos estas informa&ccedil;&otilde;es em relat&oacute;rios trimestrais e um plano de a&ccedil;&atilde;o simples para atingir o seu objetivo.`; `00-user-guide.md` foi sincronizado com a nova copy longa.
- Proximo movimento coerente: validar no preview a leitura e o ritmo visual da copy longa dentro da largura atual da secao `Sobre` antes de seguir para a proxima secao da home.

### 2026-04-04T23:13:01.9424075-03:00 - Identificador do Sobre normalizado e bloco principal reduzido

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deixar o marcador da secao `Sobre` como um quadrado arredondado normal, alinhar `Sobre Nos` com a tipografia do menu central e reduzir o texto principal em aproximadamente 7 pontos.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.about__mark` de `52px x 14px` para `14px x 14px`, ajustou `.about__label` para `18px`, `letter-spacing: -0.05em` e `line-height: 1`, no mesmo tom `#4F5757` do menu central, e baixou `.about__title` de `clamp(38px, 4.4vw, 62px)` para `clamp(31px, 3.9vw, 55px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o novo contraste entre o identificador e a copy principal da secao `Sobre` ficou no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-04T23:16:36.2546332-03:00 - Capsula fixa do header sem blur e com branco quase transparente

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: retirar o efeito blur da capsula fixa por tras dos menus centrais e deixar o fundo na mesma familia do background global, quase transparente.
- Implementacao entregue: `app/frontend/styles.css` ajustou `--header-shell-bg` de `rgba(255, 255, 255, 0.14)` para `rgba(255, 255, 255, 0.15)` e removeu `backdrop-filter` / `-webkit-backdrop-filter` de `.site-header__shell`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o novo acabamento da capsula ficou limpo o suficiente sem perder leitura no topo antes de seguir para o proximo refinamento da home.

### 2026-04-04T23:21:13.2027044-03:00 - Opacidade da capsula fixa do header aumentada para cerca de 65%

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter a capsula fixa sem blur, mas aumentar a opacidade do branco para perto de `65%`.
- Implementacao entregue: `app/frontend/styles.css` alterou `--header-shell-bg` de `rgba(255, 255, 255, 0.15)` para `rgba(255, 255, 255, 0.65)`; `00-user-guide.md` foi sincronizado com o novo nivel de transparencia.
- Proximo movimento coerente: validar no preview se essa nova densidade da capsula chegou no ponto desejado antes de seguir para o proximo refinamento da home.

### 2026-04-05T00:17:50.6275170-03:00 - Blur suave recolocado na capsula fixa do header

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: recolocar o blur na capsula fixa por tras dos menus centrais, preservando a opacidade branca atual.
- Implementacao entregue: `app/frontend/styles.css` voltou a aplicar `backdrop-filter: blur(14px) saturate(140%)` e `-webkit-backdrop-filter: blur(14px) saturate(140%)` em `.site-header__shell`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o blur voltou na intensidade desejada com a opacidade atual antes de seguir para o proximo refinamento da home.

### 2026-04-05T11:42:14.3776820-03:00 - Hero alinhado ao tom do Sobre e secao Sobre refinada

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: pintar a primeira frase do hero com o mesmo tom do texto principal da secao `Sobre`, trocar o identificador para `O que Resolvemos` e reduzir o texto principal do `Sobre` em aproximadamente 5 pontos, com entrelinha ligeiramente mais fechada.
- Implementacao entregue: `app/frontend/index.html` atualizou `.about__label` para `O que Resolvemos`; `app/frontend/styles.css` mudou `.hero__line--muted` para `var(--text-color)`, reduziu `.about__title` de `clamp(31px, 3.9vw, 55px)` para `clamp(26px, 3.5vw, 50px)` e ajustou seu `line-height` de `1.04` para `1.02`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o hero e a secao `Sobre` agora compartilham melhor a mesma familia tonal e se a nova escala do bloco principal ficou no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T11:43:39.6289314-03:00 - Copy do Sobre simplificada para a versao curta institucional

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: substituir o texto principal da secao `Sobre` por `O time Redscale trabalha desenvolvendo solucoes para aumentar a produtividade do negocio atraves do uso consciente da tecnologia.`
- Implementacao entregue: `app/frontend/index.html` atualizou `.about__title` para `O time Redscale trabalha desenvolvendo solu&ccedil;&otilde;es para aumentar a produtividade do neg&oacute;cio atrav&eacute;s do uso consciente da tecnologia.`
- Proximo movimento coerente: validar no preview o peso e a presenca da nova copy curta da secao `Sobre` antes de seguir para a proxima secao da home.

### 2026-04-05T11:57:35.5623823-03:00 - Tipografia do Sobre e do texto lateral do hero migrada para Neue Helvetica Georgian

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aplicar `Neue Helvetica Georgian 65 Medium` ao bloco principal da secao `Sobre` e ao texto auxiliar a direita do hero, reduzindo o bloco principal do `Sobre` em mais aproximadamente 3 pontos.
- Implementacao entregue: `app/frontend/styles.css` criou `--editorial-sans` com `Neue Helvetica Georgian 65 Medium` como familia principal, aplicou essa variavel em `.hero__media-note` e `.about__title`, e reduziu `.about__title` de `clamp(26px, 3.5vw, 50px)` para `clamp(23px, 3.2vw, 47px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a nova familia tipografica realmente esta disponivel no ambiente e se a reducao do bloco principal do `Sobre` chegou no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T12:04:27.0692670-03:00 - Hero e Sobre alinhados no tom `#262626`

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: voltar a primeira frase do hero para `#262626`, pintar o texto auxiliar a direita do hero com o mesmo tom do bloco principal do `Sobre` e deixar esse bloco principal tambem em `#262626`.
- Implementacao entregue: `app/frontend/styles.css` mudou `.hero__line--muted` para `#262626`, trocou `.hero__media-note` de `#4F5757` para `#262626` e mudou `.about__title` de `var(--text-color)` para `#262626`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o novo alinhamento cromatico entre hero e secao `Sobre` ficou equilibrado antes de seguir para a proxima secao da home.

### 2026-04-05T12:07:14.4988158-03:00 - Bloco principal do Sobre ficou bold e passou a quebrar mais cedo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: deixar o texto principal da secao `Sobre` em bold e antecipar a quebra de linha em aproximadamente `4cm`.
- Implementacao entregue: `app/frontend/styles.css` alterou `.about__title` de `font-weight: 400` para `700` e reduziu seu `max-width` de `980px` para `829px`, forçando a quebra mais cedo; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o novo peso e o novo ponto de quebra do bloco principal do `Sobre` ficaram no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T12:08:54.9787765-03:00 - Recuo geral entre sessoes ampliado para 3,5cm

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar o recuo vertical entre secoes independentes para aproximadamente `3,5cm`, aplicando esse novo intervalo na entrada da secao `Sobre` apos o video.
- Implementacao entregue: `app/frontend/styles.css` alterou `--section-gap` de `95px` para `133px`, ampliando o espacamento usado em `.about`; `00-user-guide.md` foi sincronizado com a nova regra global e com a nova posicao da secao `Sobre`.
- Proximo movimento coerente: validar no preview se o novo respiro entre a faixa de video e a secao `Sobre` chegou no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T12:10:41.6539688-03:00 - Bloco principal do Sobre suavizado e com quebra ainda mais cedo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter o destaque em negrito no bloco principal da secao `Sobre`, mas com menos forca visual, e antecipar a quebra em mais aproximadamente `4cm`.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.about__title` de `font-weight: 700` para `600` e baixou seu `max-width` de `829px` para `678px`, forcando a quebra ainda mais cedo; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o novo peso e a nova largura util do bloco principal do `Sobre` chegaram no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T12:12:42.3851290-03:00 - Bloco principal do Sobre mais leve e com quebra bem mais recuada

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter o destaque em negrito no bloco principal da secao `Sobre`, mas suavizar um pouco mais sua forca visual e ampliar em mais aproximadamente `4cm` o recuo de quebra.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.about__title` de `font-weight: 600` para `550` e baixou seu `max-width` de `678px` para `526px`, forçando a copy a fechar bem antes; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se esse semi-bold mais leve e a quebra mais antecipada chegaram no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T12:15:50.8501243-03:00 - Esteira conceitual adicionada abaixo do Sobre e texto lateral do hero recolorido

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: criar abaixo do `Sobre` uma nova secao em formato de esteira animada, com palavras simbolicas do negocio surgindo da direita para a esquerda dentro de caixas transparentes com borda em `#044040`, e pintar o texto auxiliar do hero nesse mesmo tom.
- Implementacao entregue: `app/frontend/index.html` adicionou a secao `idea-belt` com duas copias da mesma faixa de palavras para permitir loop continuo; `app/frontend/styles.css` criou o utilitario `.visually-hidden`, recoloriu `.hero__media-note` para `var(--text-color)` e adicionou os estilos de marquee, boxes arredondados transparentes e keyframes de deslocamento horizontal da nova secao; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a velocidade, a densidade e o acabamento da nova esteira chegaram no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T12:18:29.6463262-03:00 - Bloco principal do Sobre mais afastado e com peso mais suave

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: expandir o recuo do bloco principal da secao `Sobre` em mais aproximadamente `3cm` para a direita e reduzir um pouco mais a forca do bold.
- Implementacao entregue: `app/frontend/styles.css` ampliou o `column-gap` da secao `.about` de `189px` para `302px`, deslocando mais o texto principal para a direita, e reduziu `.about__title` de `font-weight: 550` para `500`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o novo afastamento lateral e o peso tipografico mais leve chegaram no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T12:26:41.6700828-03:00 - Esteira incorporada ao Sobre e montanha decorativa ancorada a direita

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: considerar a esteira de cards como parte da propria secao `Sobre`, aumentar a altura dos cards em mais aproximadamente `3cm`, pintar o texto interno deles em `#262626` e adicionar uma montanha em `#044040` por baixo do texto e da esteira, podendo furar o gutter global ate encostar no lado direito da tela.
- Implementacao entregue: `app/frontend/index.html` moveu a `idea-belt` para dentro da secao `about`, transformou seu titulo oculto em `h3` interno e adicionou um SVG decorativo `.about__mountain`; `app/frontend/styles.css` converteu `.about` em um container relativo com `padding-bottom` para acomodar a composicao, criou `.about__intro` para manter a abertura em duas colunas, elevou `.idea-belt__item` de `92px` para `205px`, trocou a cor do texto dos cards para `#262626` e posicionou a montanha em `var(--text-color)` no canto direito com `right: calc(-1 * var(--page-gutter))`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a nova proporcao vertical dos cards e a area ocupada pela montanha decorativa chegaram no ponto desejado antes de seguir para a proxima secao da home.

### 2026-04-05T12:32:30.3914402-03:00 - Montanha do Sobre afunilada, mais alta e reposicionada na entrada da esteira

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir a largura da montanha decorativa do `Sobre`, elevar seu pico em mais aproximadamente `6cm` e reposiciona-la no background da area direita onde os cards da esteira surgem.
- Implementacao entregue: `app/frontend/index.html` redesenhou o SVG `.about__mountain` para uma silhueta mais estreita com pico muito mais alto; `app/frontend/styles.css` moveu a montanha de `bottom: 0` para `top: 176px`, reduziu sua largura de `min(56vw, 780px)` para `min(34vw, 470px)` e aumentou sua altura para `clamp(392px, 42vw, 528px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a montanha agora realmente marca o ponto de entrada da esteira sem pesar demais o lado direito da secao `Sobre`.

### 2026-04-05T12:40:27.8424470-03:00 - Montanha do Sobre substituida por bloco arredondado inclinado

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: descartar a montanha decorativa do `Sobre` e substitui-la por um grande quadrado com cantos bem arredondados, girado aproximadamente `30deg` para a direita, aparecendo apenas em parte no lado direito, sem borda e com preenchimento `#F2F2F2`; os cards da esteira devem receber fundo `#FFFFFF`.
- Implementacao entregue: `app/frontend/index.html` removeu o SVG `.about__mountain` e o trocou por um `div.about__shape`; `app/frontend/styles.css` alterou `.idea-belt__item` de `background: transparent` para `#ffffff` e criou `.about__shape` com `width: clamp(360px, 34vw, 520px)`, `aspect-ratio: 1`, `border-radius: 106px`, `background: #f2f2f2`, `transform: rotate(30deg)` e posicionamento parcial para fora da tela por `right: calc(-1 * var(--page-gutter) - 146px)`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o bloco arredondado inclinado esta entrando no campo visual na proporcao certa e se o fundo branco dos cards ficou equilibrado sobre ele.

### 2026-04-05T12:43:49.0030713-03:00 - Vazamento do shape do Sobre limitado a viewport sem scroll lateral

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: manter o shape do `Sobre` vazando pela direita, mas cortar esse excesso no limite da viewport para eliminar qualquer scroll horizontal.
- Implementacao entregue: `app/frontend/styles.css` adicionou `overflow-x: clip` em `html, body`, permitindo que o shape continue ultrapassando visualmente o gutter, mas sem aumentar a largura rolavel da pagina; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o corte na viewport resolveu o scroll horizontal sem interferir no posicionamento do shape nem em outros blocos com overflow controlado.

### 2026-04-05T12:47:03.0432085-03:00 - Cards do Sobre migrados para Playfair e shape ampliado em 30%

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aplicar `Playfair Display` aos textos dos cards da esteira do `Sobre` e ampliar o shape geometrico vazado da direita em aproximadamente `30%`, mantendo sua mesma proporcao e rotacao.
- Implementacao entregue: `app/frontend/index.html` passou a carregar `Playfair Display` junto com `IBM Plex Sans` no Google Fonts; `app/frontend/styles.css` trocou `.idea-belt__item` de `font-family: "IBM Plex Sans", sans-serif` para `font-family: "Playfair Display", Georgia, serif` e ampliou `.about__shape` com `transform: rotate(30deg) scale(1.3)` e `transform-origin: center center`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a nova tipografia editorial dos cards e a escala maior do shape enriqueceram a secao `Sobre` sem comprometer legibilidade nem ritmo visual.

### 2026-04-05T12:52:49.0730137-03:00 - Shape do Sobre ampliado mais 10% e deslocado 3cm para baixo

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: aumentar o shape geometrico vazado do `Sobre` em mais aproximadamente `10%` sobre o estado atual e desloca-lo para baixo em aproximadamente `3cm`.
- Implementacao entregue: `app/frontend/styles.css` moveu `.about__shape` de `top: 122px` para `top: 235px` e ampliou sua escala de `scale(1.3)` para `scale(1.43)`, preservando `rotate(30deg)` e o mesmo recorte lateral; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a nova massa visual do shape ficou melhor distribuida na base direita da secao `Sobre` sem invadir demais a leitura da esteira.

### 2026-04-05T16:40:57.3529859-03:00 - Sobre com bordas claras, peso refinado e duas frases de efeito

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reforcar apenas um pouco o peso do texto principal do `Sobre`, clarear as bordas dos cards da esteira e criar, cerca de `3,5cm` abaixo deles, duas frases de efeito em alinhamentos distintos.
- Implementacao entregue: `app/frontend/styles.css` elevou `.about__title` de `font-weight: 500` para `530`, trocou a borda de `.idea-belt__item` para `#d9d9d9` e criou o bloco `.about__echoes` com duas linhas em `Playfair Display`; `app/frontend/index.html` adicionou as frases `Clareza para decidir.` e `Simplicidade para crescer.` logo abaixo da esteira; a primeira foi alinhada ao recuo do bloco principal do `Sobre` e a segunda recebeu um offset calculado a partir do canto direito da capsula fixa do header; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a hierarquia das duas novas frases ficou forte sem competir demais com a esteira nem com o texto principal do `Sobre`.

### 2026-04-05T18:05:28.6519649-03:00 - Frases do Sobre reduzidas para escala h3 e com nova copy

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir o novo bloco de frases do `Sobre` para uma escala de `h3` e trocar a copy para `Uma visao 'end-to-end' do negocio` e `Aplicando o conceito 'keep-it-simple'`.
- Implementacao entregue: `app/frontend/index.html` atualizou as duas frases do bloco `.about__echoes`; `app/frontend/styles.css` reduziu `.about__echo` de `clamp(44px, 4.4vw, 72px)` para `clamp(26px, 2.7vw, 38px)`, ajustou `line-height` para `1.02` e ampliou a largura util da segunda frase de `340px` para `420px`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a nova escala h3 deixou o bloco de frases mais complementar ao `Sobre` sem perder presenca editorial.

### 2026-04-05T18:06:42.6958123-03:00 - Segunda frase do bloco complementar do Sobre atualizada

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: trocar a segunda frase do bloco complementar do `Sobre` para `Aplicacao da metodologia 'keep-it-simple'`.
- Implementacao entregue: `app/frontend/index.html` atualizou a segunda linha de `.about__echoes`; `00-user-guide.md` foi sincronizado com a nova copy e com o estado atual do bloco.
- Proximo movimento coerente: validar no preview se a nova frase encaixou bem na largura e no alinhamento ja definidos para a segunda linha.

### 2026-04-05T18:07:44.5991813-03:00 - Bloco complementar do Sobre reduzido para h5 em IBM Plex Sans

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir as duas frases complementares do `Sobre` para uma escala de `h5` e trocar sua tipografia para `IBM Plex Sans`.
- Implementacao entregue: `app/frontend/styles.css` trocou `.about__echo` de `Playfair Display` para `IBM Plex Sans`, reduziu `font-size` de `clamp(26px, 2.7vw, 38px)` para `clamp(18px, 1.9vw, 24px)` e ajustou `line-height` para `1.08`; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o bloco complementar agora funciona melhor como apoio ao `Sobre`, sem competir com o texto principal nem com a esteira.

### 2026-04-05T18:10:30.4222465-03:00 - Bloco complementar do Sobre reduzido para h6 e alinhado na mesma altura

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: reduzir as duas frases complementares do `Sobre` para uma escala de `h6` e alinhar ambas na mesma altura.
- Implementacao entregue: `app/frontend/styles.css` reduziu `.about__echo` de `clamp(18px, 1.9vw, 24px)` para `clamp(14px, 1.3vw, 18px)`, ajustou `line-height` para `1.12`, transformou as frases em elementos absolutamente posicionados no mesmo `top: 0` e trocou o deslocamento da segunda de `margin-top` para `left`, preservando seus dois alinhamentos horizontais; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se o novo bloco complementar esta fino o suficiente e se os dois textos ficaram realmente nivelados sem parecer artificiais.

### 2026-04-05T20:15:59.6372836-03:00 - Bloco complementar do Sobre ganhou textos de apoio e foi trazido para a esquerda

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: puxar os dois titulos do bloco complementar do `Sobre` cerca de `1cm` para a esquerda e adicionar abaixo de cada um um texto de apoio em cinza, mantendo a mesma fonte e o mesmo tamanho tipografico.
- Implementacao entregue: `app/frontend/index.html` transformou cada frase de `.about__echoes` em um mini-bloco com `about__echo-title` e `about__echo-copy`, aplicando as novas copies institucionais; `app/frontend/styles.css` ampliou a altura util de `.about__echoes`, criou a separacao entre titulo em `#262626` e apoio em cinza `#8B9191`, manteve ambos em `IBM Plex Sans` na escala `h6` e deslocou os dois blocos aproximadamente `1cm` para a esquerda; `00-user-guide.md` foi sincronizado com o novo estado.
- Proximo movimento coerente: validar no preview se a nova densidade de texto continua leve o bastante e se o bloco da direita ainda conversa bem com a referencia horizontal da capsula fixa do header.

### 2026-04-05T21:09:32.5607618-03:00 - Textos de apoio do Sobre passaram a quebrar antes e o bloco da direita foi equalizado

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: fazer os textos cinza do bloco complementar do `Sobre` quebrarem cerca de `0,5cm` antes da largura do titulo e fazer o bloco da direita respeitar a mesma largura-base do bloco da esquerda.
- Implementacao entregue: `app/frontend/styles.css` adicionou `max-width: calc(100% - 19px)` em `.about__echo-copy` para antecipar a quebra dos textos de apoio e ampliou `.about__echo--right` de `480px` para `504px`, ajustando tambem o limite de posicionamento para manter a mesma regua do bloco esquerdo; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se as quebras dos textos de apoio ficaram mais elegantes sem apertar demais a leitura no bloco da direita.

### 2026-04-05T23:16:26.6651109-03:00 - Textos de apoio do Sobre passaram a quebrar mais 2cm antes

- Fase impactada: Marco 3. Capacidades minimas do workflow `web_app`.
- Decisao aprovada: recuar ainda mais a quebra dos textos de apoio do bloco complementar do `Sobre`, em mais aproximadamente `2cm` sobre o ajuste anterior.
- Implementacao entregue: `app/frontend/styles.css` ampliou o recuo interno de quebra em `.about__echo-copy`, mudando `max-width` de `calc(100% - 19px)` para `calc(100% - 95px)` para antecipar mais a quebra das duas colunas de apoio; `00-user-guide.md` foi sincronizado.
- Proximo movimento coerente: validar no preview se a quebra mais fechada continua confortavel para leitura e se o balanço entre as duas colunas permaneceu elegante.

### 2026-04-05T18:10:30.4222465-03:00 - Repositorio privado conectado e fluxo de push habilitado

- Fase impactada: Governanca de projeto e continuidade operacional.
- Decisao aprovada: criar um repositorio privado no GitHub para este projeto e passar a trabalhar com `git push` a cada alteracao relevante.
- Implementacao entregue: o diretorio local foi inicializado em git, recebeu commit inicial na branch `main`, o remoto `origin` foi conectado ao repositorio privado `https://github.com/canalredscale-hub/site-institucional-vendas` e o primeiro push foi concluido; `README.md` tambem foi corrigido de `http://localhost:8000` para `http://127.0.0.1:8000`, e `00-user-guide.md` foi sincronizado com o novo fluxo.
- Proximo movimento coerente: seguir os proximos ciclos de UI com commits intencionais e push do `main` sempre que um bloco aprovado fechar.
