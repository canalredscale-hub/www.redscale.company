# 00 User Guide

Este arquivo e um log curto de retomada. Ele nao e um manual para usuario final; serve para dizer onde estamos e onde paramos no projeto.

## Estado atual

- Onde estamos: o site foi zerado para recomecar do zero, de cima para baixo, com implementacao incremental guiada por perguntas.
- Ultima aprovacao: a secao `Sobre` passa a absorver as duas colunas inferiores como parte do bloco, com gap interno aproximado de `2cm`, enquanto o espacamento entre secoes independentes sobe para aproximadamente `5cm`.
- Proximo passo: desenvolver o conteudo proprio da secao `Nossos Servicos`, usando o bloco introdutorio novo como ponto de partida.
- Onde paramos: home com header, hero textual sem grafico, faixa de video ainda compondo o hero, secao `Sobre` atualizada com nova copy e nova secao `Nossos Servicos` aberta logo abaixo em `app/frontend/index.html`, `app/frontend/styles.css` e `app/frontend/main.js`.

## Referencia atual da interface

Este trecho e a referencia textual da interface atual. Sempre que houver alteracao visual, estrutural ou de copy relevante no site, este trecho tambem deve ser atualizado no mesmo ciclo.

### Regras globais atuais

- Quando uma medida for informada em `cm`, o projeto deve aplicar o equivalente visual aproximado em pixels.
- O gutter global lateral do site e de aproximadamente `38px` em cada lado.
- Por enquanto, a implementacao deve priorizar desktop. A responsividade mobile sera ajustada depois que o site todo estiver concluido.
- Os elementos devem ser o mais independentes possivel em CSS, para que ajustes de medidas em um bloco nao vazem para outro.
- O background global do site e `#FFFFFF`.
- A cor padrao dos textos do site e `#044040`.
- A fonte oficial de escrita de texto do projeto e `Neue Helvetica Georgian 65 Medium`; `Aspekta` fica reservada para titulos e `IBM Plex Sans` para navegacao, labels e CTAs.
- Entre secoes independentes do site deve haver um espacamento vertical aproximado de `5cm`; a faixa de video abaixo do hero continua sendo tratada como parte do proprio hero.

### Home atual, em ordem de leitura

1. Header principal no topo.
   Posicao: alinhado ao topo com `62px` de respiro superior, respeitando o recuo global lateral de aproximadamente `38px`.
   Estrutura atual: header organizado em 3 colunas com logo a esquerda, capsula central fixa no centro e CTA a direita; a capsula central usa fundo branco com opacidade aproximada de `65%` em `rgba(255, 255, 255, 0.65)` sem cor visivel na borda, com blur suave, sem sombra projetada, cantos totalmente arredondados, largura de aproximadamente `484px`, padding lateral interno de `18px`, altura minima de `66px` e centralizacao horizontal na pagina.
   Conteudo atual: logo textual `Redscale` alinhado a esquerda fora do retangulo central, cinco links centrais de menu dentro da capsula fixa (`Home`, `Sobre`, `Servicos`, `Produtos`, `Redsights`) e CTA direito `Fale com a gente` alinhado a direita fora da capsula; os tres blocos estao no mesmo eixo vertical.
   Estilo do logo: fonte sans `Aspekta` carregada localmente em `app/frontend/assets/fonts/AspektaVF.woff2`, fallback `IBM Plex Sans`, peso `500`, tamanho `29px`, letras aproximadas com tracking `-0.05em`, texto em `#262626` e um quadrado vermelho supereliptico de `14px` antes do `R`, mais proximo da letra, com lados levemente curvados para fora e leve deslocamento vertical para baixo em `5px`.
   Estilo do menu: fonte `IBM Plex Sans`, tamanho `18px`, tom de cinza `#4F5757`, letras ligeiramente mais proximas por tracking negativo, com duas camadas animadas, sem setas na camada inferior, centralizado por `flex` dentro da capsula com `gap: 40px`; no hover, a camada base sobe primeiro, a camada inferior so entra depois que a base ja saiu da mascara, o texto final entra em vermelho `#8C1F28` e permanece nesse estado enquanto o item segue ativo, em vez de voltar sozinho para a cor anterior ao fim da animacao.
   Estilo do CTA direito: retangulo com cantos mais arredondados, base fixa `#F2F2F2`, pastilha interna menor `#8C1F28` com `58px` de largura base no lado esquerdo e cantos mais arredondados, seta branca SVG centralizada no estado base e ancorada a esquerda durante a expansao, diagonais mais longas e mais respiro a esquerda da base, texto `Fale com a gente` em `IBM Plex Sans`, tamanho `18px`, sem negrito, cor `#8C1F28` no estado normal e `#F2F2F2` no hover; o botao tem `66px` de altura, no hover a seta atual sai completamente para a direita antes da nova entrar pela esquerda, o texto sobe junto sem deixar a borda inferior do texto antigo aparente, e a pastilha vermelha agora expande com easing mais suave e duracao um pouco maior em todos os CTA compartilhados, mantendo um vao vertical nas bordas; no mouseout o texto volta ao estado inicial enquanto a seta anterior so retorna depois que a seta nova some.

2. Hero textual principal.
   Posicao: logo abaixo do header, com espacamento vertical aproximado de `7cm` em relacao ao head montado e recuo extra de aproximadamente `122px` a esquerda aplicado apenas nesta secao; o texto auxiliar da direita usa um limite quase espelhado, agora fechado em `right: 103px`, para quebrar um pouco mais tarde.
   Estrutura atual: um `h1` grande em duas frases/blocos a esquerda, e na direita um squircle pequeno com recuo seguido por um texto auxiliar generico mais abaixo; o grafico anterior foi removido sem reposicionar os demais elementos do fold.
   Conteudo atual: `Cresca melhor.` na primeira linha e `Produza mais.` na linha de baixo.
   Estilo atual: fonte `Aspekta` com fallback `IBM Plex Sans`, peso `500`, tamanho responsivo entre `47px` e `87px`, tracking negativo `-0.05em`, line-height `1`, primeira frase em `#262626` e segunda frase em `#8C1F28`, com largura `max-width: 620px`.
   Elemento direito atual: um squircle SVG igual ao do logo, em `14px` por `14px`, `#8C1F28`, com o bloco inteiro posicionado a partir do centro real da tela por `left: calc(50vw - (var(--page-gutter) + 95px) + 125px)` e `top: 17px`, mantendo alinhamento a esquerda; sua largura e definida pelo espaco restante ate `right: 103px`, abrindo um pouco mais a area util para a copy quebrar mais tarde. Abaixo dele ha o texto `Para haver crescimento e necessario um aumento na producao, ou seja, na produtividade. Nao necessariamente fazer mais - fazer melhor. Nossos produtos, servicos, metodologias e insights te ajudam a chegar la.` em `Neue Helvetica Georgian 65 Medium`, `15px`, cor `#044040`, `line-height: 1.3`, em peso normal, com `margin-top: 33px`, ocupando `100%` dessa largura.

3. Faixa de video abaixo do hero.
   Posicao: imediatamente abaixo do hero, dentro do `main`, com espacamento superior de `72px` e respeitando o mesmo gutter global lateral de aproximadamente `38px`.
   Estrutura atual: uma secao `media-loop` com frame unico arredondado, video MP4 local em autoplay mudo e loop, uma camada de sombra/gradiente sutil na base direita e um CTA sobreposto no canto inferior direito.
   Asset atual: `app/frontend/assets/videos/7593885-hd_1920_1080_25fps.mp4`, copiado de `C:\Users\raulv\OneDrive\Videos\7593885-hd_1920_1080_25fps.mp4`.
   Estilo atual do frame: largura de `100%` da area util do `main`, altura responsiva em `clamp(420px, 46vw, 620px)`, `border-radius: 26px`, `overflow: hidden` e video preenchendo toda a moldura com `object-fit: cover`.
   CTA atual sobre o video: mesmo componente visual do header, posicionado em `right: 32px` e `bottom: 32px`, agora com o texto `Veja nossos servicos`, mantendo por enquanto o link `#contato`, a mesma base `#F2F2F2` e a mesma expansao vermelha suavizada do CTA do header.

4. Secao Sobre.
   Posicao: abaixo da faixa de video, separada por um espacamento vertical aproximado de `5cm`, respeitando o mesmo gutter global lateral do site.
   Estrutura atual: secao unica composta por um bloco introdutorio em duas colunas com titulo curto e um segundo paragrafo analitico logo abaixo, seguido pela esteira conceitual, pelos dois microblocos de apoio e fechada por uma forma geometrica grande ancorada no canto direito da tela.
   Estilo do identificador: quadrado arredondado vermelho com `14px` por `14px`, ao lado do texto `Sobre Nos` em `IBM Plex Sans`, `18px`, tom `#4F5757`, mesmo tamanho, fonte e cor dos textos do menu central.
   Estilo do bloco principal: frase `Somos especialistas em identificar e resolver problemas relacionados a produtividade.` em `Neue Helvetica Georgian 65 Medium`, tamanho responsivo entre `23px` e `47px`, cor `#262626`, agora com o mesmo peso visual usado em `Nossos Servicos`, tracking negativo, line-height ainda mais fechado em `0.98` e largura util reduzida para `502px`, para que `Sobre` e `Nossos Servicos` aproximem a distancia entre as quebras de linha e tragam as linhas um pouco mais para perto umas das outras.
   Texto de apoio do bloco principal: logo abaixo do titulo, alinhado ao mesmo inicio do titulo e com a quebra fechando aproximadamente na metade horizontal do CTA `Veja nossos servicos`, entra o texto `Empresas menos produtivas "made a positive contribution by losing market share and employment to more productive firms or exited altogether". Neste estudo "The power of one", a McKinsey diz que 20% das firmas que aumentaram a produtividade 1,5 vezes mais rapido que a media do mesmo segmento tambem aumentaram sua participacao de emprego, ou seja, produtividade superior e ganho de espaco caminham juntos.`; com excecao do fecho final em `#8C1F28`, o restante desse bloco usa o mesmo cinza dos textos de `Uma visao 'end-to-end' do negocio` e `Aplicacao da metodologia 'keep-it-simple'`. O hyperlink visivel agora fica como `Veja o estudo.`, sem sublinhado no estado base, passando a vermelho `#8C1F28` e negrito apenas no hover.
   Esteira conceitual atual: continua fazendo parte da propria secao `Sobre`, aparecendo abaixo do texto com margem superior aproximada de `2cm`, viewport mascarado e faixa continua animada da direita para a esquerda, formada por dois grupos duplicados para manter o loop sem salto visivel.
   Conteudo atual da esteira: palavras simbolicas do negocio `Produtividade`, `Clareza`, `Objetividade`, `Tecnologia`, `Metodo`, `Simplicidade`, `Eficiencia`, `Estrategia` e `Crescimento`.
   Estilo atual da esteira: cada palavra aparece centralizada dentro de uma caixa com cantos arredondados, largura minima de `228px`, altura minima de `205px`, fundo `#FFFFFF`, borda em cinza claro `#D9D9D9`, texto em `#262626`, tipografia `Playfair Display` em `23px` e animacao linear continua de `30s`.
   Bloco complementar atual: cerca de `2cm` abaixo da esteira surgem dois microblocos na mesma escala `h6`, alinhados na mesma altura e assumidos como parte integral da secao `Sobre`; os titulos `Uma visao 'end-to-end'` e `Orientacao por principios, sistemas e metodologia` usam `Aspekta`, enquanto os textos de apoio usam `Neue Helvetica Georgian 65 Medium` no mesmo corpo de `15px` do paragrafo analitico principal. O primeiro agora comeca alinhado ao mesmo inicio do titulo principal `Somos especialistas...` e traz o apoio cinza `Depois de planejar voos estrategicos, precisamos primeiro arrumar a casa - atualizacao dos fluxos de trabalho e comunicacao interna. Trabalhamos com VSM para ter uma visao end-to-end e definir o ponto de partida. Melhorar um fluxo de trabalho aprovado cria um efeito em cascata que se espalha e gera novos efeitos.`. O segundo foi deslocado proporcionalmente junto com o primeiro, mantendo a mesma relacao visual entre as duas colunas, e traz o apoio cinza `Nao reinventar a roda, apenas importe e adapte o que ja gerou prova de valor. Orientamos o desenvolvimento de context-specific strategies, porque o tipo de mudanca depende do ambiente organizacional e das interdependencias envolvidas. A BCG tambem observa que "apenas cerca de 25% dos esforcos de transformacao tem sucesso no curto e no longo prazo", o que reforca a importancia de escolher a metodologia certa para a situacao certa.` seguido do link visivel `Veja o estudo.` apontando para o artigo da BCG em `https://www.bcg.com/publications/2022/change-strategies-for-your-organization`; a distancia entre o fim do bloco principal e a esteira, e entre a esteira e esses dois microblocos, foi igualada para aproximadamente `2cm`.
   Elemento decorativo atual: um grande quadrado com cantos bem arredondados, em `#F2F2F2`, sem borda, girado aproximadamente `30deg` para a direita, ampliado em mais aproximadamente `10%` sobre a escala anterior e parcialmente vazando pela lateral direita, agora deslocado para baixo em cerca de `3cm`, posicionado por baixo da esteira exatamente na zona onde os cards surgem; o excesso horizontal e clipado no limite da viewport para nao gerar scroll lateral, com mais respiro inferior dentro da propria secao `Sobre` para o shape voltar a aparecer antes da abertura da secao `Nossos Servicos`.

5. Secao Nossos Servicos.
   Posicao: logo abaixo do fechamento da secao `Sobre`, abrindo com o novo espacamento global aproximado de `5cm`.
   Estrutura atual: mantem o bloco introdutorio em duas colunas usado em `Sobre`, com o marcador da secao (`squircle` e `Nossos Servicos`) no alinhamento anterior e apenas o texto principal recuado aproximadamente `5cm` para a direita; cerca de `2cm` abaixo dele entra uma pilha vertical interativa de quatro ofertas com divisorias finas, acompanhada por um shape proprio espelhado no lado esquerdo.
   Estilo do identificador: quadrado arredondado vermelho com `14px` por `14px`, ao lado do texto `Nossos Servicos` em `IBM Plex Sans`, `18px`, tom `#4F5757`.
   Estilo do bloco principal: replica o mesmo desenho tipografico do bloco principal de `Sobre`, agora com o texto `Produtividade melhora quando a organizacao reduz o tempo entre sinal, decisao e ajuste. Te ajudamos a cadenciar este tripe e adapta-lo a sua realidade.` e com a mesma largura util de `502px` e o mesmo line-height `0.98`, para manter consistencia entre as quebras de linha dos dois blocos; o texto segue deslocado cerca de `5cm` para a direita, enquanto o marcador da secao volta ao ponto original.
   Lista de ofertas atual: cerca de `2cm` abaixo do bloco principal aparecem `Consulting-as-a-Service`, `Management-as-a-Service`, `Device-as-a-Service` e `CRM`, todos alinhados pela esquerda a partir de um recuo deslocado mais `4cm` para a esquerda em relacao ao ajuste anterior, enquanto as divisorias acompanham esse mesmo deslocamento e continuam estendidas ate o recuo global da direita. Cada item agora recebe, no lado esquerdo do titulo, uma miniatura em recorte com cantos arredondados usando respectivamente os assets `consulting.jpg`, `management.jpg`, `device.jpg` e `crm.jpg` importados para `app/frontend/assets/images/services/`. Essa pilha usa `Aspekta` numa escala responsiva cerca de `3px` menor que `Cresca melhor.` no hero, com um sinal `+` cinza alinhado nesse extremo direito. Ao clicar em um item, apenas ele abre um espacamento vazio de aproximadamente `8,5cm` entre o titulo e a linha divisoria, enquanto o `+` gira para virar `x`; ao clicar novamente no titulo ou no proprio `x`, o espacamento fecha e o icone retorna para `+`.
   Elemento decorativo atual: um segundo quadrado com cantos bem arredondados, duplicado visualmente do shape de `Sobre`, aparece agora ancorado no lado esquerdo da secao `Nossos Servicos`, em `#F2F2F2`, sem borda, girado aproximadamente `-30deg` e ampliado na mesma escala do shape original.
### Paginas internas, estado resumido

- Nao ha paginas internas criadas nesta nova versao.
- Nao existe mais espelho ativo de site externo nesta base. O frontend atual esta sendo construido do zero.

## Como manter este arquivo

- Atualize em poucas linhas ao fim de cada ciclo relevante.
- Sempre atualize tambem a secao `Referencia atual da interface` quando houver mudanca de layout, copy, navegacao, CTA, asset visual ou ordem das secoes.
- Registre apenas status atual, ultima aprovacao, proximo passo e ponto de retomada.
- Use `02-mentalmap.md` para o historico detalhado de decisoes.

## Memoria que precisa ser acompanhada

- jornada critica do usuario
- primeira experiencia ou tela
- backend minimo correspondente
- autenticacao e sessao

## Processos adicionais informados

- Usar `uv run python app/frontend/dev_server.py` para preview local sem cache manual por query string.
- O projeto agora esta conectado ao repositorio privado `https://github.com/canalredscale-hub/site-institucional-vendas`, com branch principal `main`.
- A partir deste ponto, alteracoes relevantes podem seguir o fluxo de commit e `git push` a cada ciclo aprovado.
