# 00 User Guide

Este arquivo e um log curto de retomada. Ele nao e um manual para usuario final; serve para dizer onde estamos e onde paramos no projeto.

## Estado atual

- Onde estamos: o site foi zerado para recomecar do zero, de cima para baixo, com implementacao incremental guiada por perguntas.
- Ultima aprovacao: unificar todos os squircles com o do logo, atualizar o apoio lateral do hero, renomear os labels de `Sobre` e `Servicos` e refinar os cards de `Metodo`.
- Proximo passo: revisar copy e densidade visual das novas secoes institucionais antes de entrar em refinamento responsivo e aprofundamento de ecossistemas.
- Onde paramos: home com header, hero textual, faixa de video, `Sobre`, `Servicos`, `CTA com imagem` na mesma altura do video do hero, `Metodo` com destaque no titulo, destaque no subtexto e tres quadros de jornada, `Produtos`, `Redsights` e fechamento institucional em `#contato`, com o squircle unificado ao do logo e a logica de pintura tipografica compartilhada em `app/frontend/paint-animations.css`.

## Referencia atual da interface

Este trecho e a referencia textual da interface atual. Sempre que houver alteracao visual, estrutural ou de copy relevante no site, este trecho tambem deve ser atualizado no mesmo ciclo.

### Regras globais atuais

- Quando uma medida for informada em `cm`, o projeto deve aplicar o equivalente visual aproximado em pixels.
- O gutter global lateral do site e de aproximadamente `38px` em cada lado.
- Por enquanto, a implementacao deve priorizar desktop. A responsividade mobile sera ajustada depois que o site todo estiver concluido.
- Os elementos devem ser o mais independentes possivel em CSS, para que ajustes de medidas em um bloco nao vazem para outro.
- O background global do site e `#F2F2F2`.
- A cor padrao dos textos do site e `#044040`.
- A fonte oficial de escrita de texto do projeto e `Neue Helvetica Georgian 65 Medium`; `Aspekta` fica reservada para titulos e `IBM Plex Sans` para navegacao, labels e CTAs.
- Entre secoes independentes do site deve haver um espacamento vertical aproximado de `5cm`; a faixa de video abaixo do hero continua sendo tratada como parte do proprio hero.

### Home atual, em ordem de leitura

1. Header principal no topo.
   Posicao: alinhado ao topo com `62px` de respiro superior, respeitando o recuo global lateral de aproximadamente `38px`.
   Estrutura atual: header organizado em 3 colunas com logo a esquerda, capsula central fixa no centro e CTA a direita; a capsula central usa fundo `#F2F2F2` com opacidade aproximada de `72%` em `rgba(242, 242, 242, 0.72)` sem cor visivel na borda, com blur suave, sem sombra projetada, cantos totalmente arredondados, largura de aproximadamente `484px`, padding lateral interno de `18px`, altura minima de `66px` e centralizacao horizontal na pagina.
   Conteudo atual: logo textual `Redscale` alinhado a esquerda fora do retangulo central, cinco links centrais de menu dentro da capsula fixa (`Home`, `Sobre`, `Servicos`, `Produtos`, `Redsights`) e CTA direito `Entre em contato` alinhado a direita fora da capsula; os tres blocos estao no mesmo eixo vertical.
   Estilo do logo: fonte sans `Aspekta` carregada localmente em `app/frontend/assets/fonts/AspektaVF.woff2`, fallback `IBM Plex Sans`, peso `500`, tamanho `29px`, letras aproximadas com tracking `-0.05em`, texto em `#262626` e um quadrado vermelho supereliptico de `14px` antes do `R`, mais proximo da letra, com lados levemente curvados para fora e leve deslocamento vertical para baixo em `5px`.
   Estilo do menu: fonte `IBM Plex Sans`, tamanho `18px`, tom de cinza `#4F5757`, letras ligeiramente mais proximas por tracking negativo, com duas camadas animadas, sem setas na camada inferior, centralizado por `flex` dentro da capsula com `gap: 40px`; no hover, a camada base sobe primeiro, a camada inferior so entra depois que a base ja saiu da mascara, o texto final entra em vermelho `#8C1F28` e permanece nesse estado enquanto o item segue ativo, em vez de voltar sozinho para a cor anterior ao fim da animacao. Em comportamento, `Home` agora rola suavemente ate o topo quando a tela ativa ja e a home, usando easing progressivo; fora da home, o clique simplesmente carrega a home no topo. O link `Sobre` passa a alinhar a home cerca de `1,5cm` acima do inicio da secao `Sobre`, inclusive quando a navegacao chega por hash.
   Estilo do CTA direito: retangulo com cantos mais arredondados, base fixa `#F2F2F2`, pastilha interna menor `#8C1F28` com `58px` de largura base no lado esquerdo e cantos mais arredondados, seta branca SVG centralizada no estado base e ancorada a esquerda durante a expansao, diagonais mais longas e mais respiro a esquerda da base, texto `Entre em contato` em `IBM Plex Sans`, tamanho `18px`, sem negrito, cor `#8C1F28` no estado normal e `#F2F2F2` no hover; o botao tem `66px` de altura, no hover a seta atual sai completamente para a direita antes da nova entrar pela esquerda, o texto sobe junto sem deixar a borda inferior do texto antigo aparente, e a pastilha vermelha agora expande com easing mais suave e duracao um pouco maior em todos os CTA compartilhados, mantendo um vao vertical nas bordas; no mouseout o texto volta ao estado inicial enquanto a seta anterior so retorna depois que a seta nova some.

2. Hero textual principal.
   Posicao: logo abaixo do header, com espacamento vertical aproximado de `7cm` em relacao ao head montado e recuo extra de aproximadamente `122px` a esquerda aplicado apenas nesta secao; o texto auxiliar da direita usa um limite quase espelhado, agora fechado em `right: 103px`, para quebrar um pouco mais tarde.
   Estrutura atual: um `h1` grande em duas frases/blocos a esquerda, e na direita um squircle pequeno com recuo seguido por um texto auxiliar generico mais abaixo; o grafico anterior foi removido sem reposicionar os demais elementos do fold.
   Conteudo atual: `Cresca melhor.` na primeira linha e `Produza mais.` na linha de baixo.
   Estilo atual: fonte `Aspekta` com fallback `IBM Plex Sans`, peso `500`, tamanho responsivo entre `47px` e `87px`, tracking negativo `-0.05em`, line-height `1`, primeira frase em `#044040` e segunda frase em `#8C1F28`, com largura `max-width: 620px`. Cada linha agora recebe uma pintura ciclica por recorte horizontal: o loop sempre comeca com `7s` no estado base, depois pinta `Cresca melhor.`, em seguida pinta `Produza mais.`, sustenta o estado destacado por `7s`, retroage em ordem inversa e recomeca. A primeira linha passa do verde-escuro para o vermelho, enquanto a segunda faz o caminho inverso, pintando em `#044040`. A logica compartilhada de recorte e tempos fica centralizada em `app/frontend/paint-animations.css`.
   Elemento direito atual: um squircle SVG igual ao do logo, em `14px` por `14px`, `#8C1F28`, com o bloco inteiro deslocado cerca de `1cm` mais para a esquerda por `left: calc(50vw - (var(--page-gutter) + 95px) + 87px)` e ajustado para `top: 39px`, para alinhar melhor a base final desse bloco com a frase `Produza mais.`. Sua largura continua definida pelo espaco restante ate `right: 103px`. Abaixo dele ha o texto `Ajudamos pessoas, equipes e empresas a elevar a produtividade com o uso consciente da tecnologia.` em `Neue Helvetica Georgian 65 Medium`, `15px`, cor base `#262626` e `line-height: 1.3`, agora sem destaques internos em vermelho.

3. Faixa de video abaixo do hero.
   Posicao: imediatamente abaixo do hero, dentro do `main`, com espacamento superior de `72px` e respeitando o mesmo gutter global lateral de aproximadamente `38px`.
   Estrutura atual: uma secao `media-loop` com frame unico arredondado, video MP4 local em autoplay mudo e loop, uma camada de sombra/gradiente sutil na base direita e um CTA sobreposto no canto inferior direito.
   Asset atual: `app/frontend/assets/videos/redscale-1.mp4`, copiado de uma pasta local de videos no Windows.
   Estilo atual do frame: largura de `100%` da area util do `main`, altura responsiva em `clamp(420px, 46vw, 620px)`, `border-radius: 26px`, `overflow: hidden` e video preenchendo toda a moldura com `object-fit: cover`.
   CTA atual sobre o video: mesmo componente visual do header, posicionado em `right: 32px` e `bottom: 32px`, agora com o texto `Veja nossos servicos`, mantendo por enquanto o link `#contato`, a mesma base `#F2F2F2` e a mesma expansao vermelha suavizada do CTA do header.

4. Secao Sobre.
   Posicao: abaixo da faixa de video, separada por um espacamento vertical aproximado de `5cm`, respeitando o mesmo gutter global lateral do site.
   Estrutura atual: secao unica composta por um bloco introdutorio em duas colunas com titulo curto e um segundo paragrafo analitico logo abaixo, seguido pela esteira conceitual, pelos dois microblocos de apoio e fechada por uma forma geometrica grande ancorada no canto direito da tela.
   Estilo do identificador: squircle SVG vermelho igual ao do logo, com `14px` por `14px`, ao lado do texto `Sobre` em `IBM Plex Sans`, `18px`, tom `#4F5757`, mesmo tamanho, fonte e cor dos textos do menu central.
   Estilo do bloco principal: frase `Somos especialistas em identificar e resolver problemas relacionados a produtividade.` em `Neue Helvetica Georgian 65 Medium`, tamanho responsivo entre `23px` e `47px`, cor `#044040`, agora com o mesmo peso visual usado em `Servicos`, tracking negativo, line-height ainda mais fechado em `0.98` e largura util reduzida para `502px`, para que `Sobre` e `Servicos` aproximem a distancia entre as quebras de linha e tragam as linhas um pouco mais para perto umas das outras.
   Texto de apoio do bloco principal: logo abaixo do titulo, alinhado ao mesmo inicio do titulo e com a quebra fechando aproximadamente na metade horizontal do CTA `Veja nossos servicos`, entra o texto `Neste artigo "The power of one", a McKinsey diz que 20% das firmas que aumentaram a produtividade 1,5 vezes mais rapido que a media do mesmo segmento tambem aumentaram sua participacao de emprego, ou seja, produtividade superior e ganho de espaco caminham juntos.`. Todo o paragrafo fica no mesmo cinza dos textos de `Uma visao 'end-to-end'` e `Orientacao por principios, sistemas e metodologias`; o hyperlink passa a existir no conjunto inicial `Neste artigo`, sem mudar a cor base, e fica sublinhado apenas no hover e no focus.
   Esteira conceitual atual: continua fazendo parte da propria secao `Sobre`, aparecendo abaixo do texto com margem superior aproximada de `2cm`, viewport mascarado e faixa continua animada da direita para a esquerda, formada por dois grupos duplicados para manter o loop sem salto visivel.
   Conteudo atual da esteira: palavras simbolicas do negocio `Produtividade`, `Clareza`, `Objetividade`, `Tecnologia`, `Metodo`, `Simplicidade`, `Eficiencia`, `Estrategia` e `Crescimento`.
   Estilo atual da esteira: cada palavra aparece centralizada dentro de uma caixa com cantos arredondados, largura minima de `228px`, altura minima de `205px`, fundo `#F2F2F2`, borda em cinza claro `#D9D9D9`, texto em `#262626`, tipografia `Playfair Display` em `23px` e animacao linear continua de `30s`.
   Bloco complementar atual: cerca de `2cm` abaixo da esteira surgem dois microblocos na mesma escala `h6`, alinhados na mesma altura e assumidos como parte integral da secao `Sobre`; os titulos `Uma visao 'end-to-end'` e `Orientacao por principios, sistemas e metodologias` usam `Aspekta`, enquanto os textos de apoio usam `Neue Helvetica Georgian 65 Medium` no mesmo corpo de `15px` do paragrafo analitico principal. O primeiro agora comeca alinhado ao mesmo inicio do titulo principal `Somos especialistas...` e traz uma animacao tipografica ciclica aplicada apenas nas palavras `especialistas`, `identificar`, `resolver` e `produtividade`: o loop segue o padrao compartilhado de `7s` no estado base, entrada sequencial palavra por palavra, `7s` com todas destacadas e retroacao em ordem inversa, sempre mudando da cor base `#044040` para o vermelho `#8C1F28`. O segundo foi deslocado proporcionalmente junto com o primeiro, mantendo a mesma relacao visual entre as duas colunas, e traz o apoio cinza `Nao reinventar a roda, apenas importe e adapte o que ja gerou prova de valor. Norteamos desenvolvimento de context-specific strategies, porque o tipo de mudanca depende do ambiente organizacional e das interdependencias envolvidas.`; a distancia entre o fim do bloco principal e a esteira, e entre a esteira e esses dois microblocos, foi igualada para aproximadamente `2cm`.
   Elemento decorativo atual: um grande quadrado com cantos bem arredondados, agora em um cinza sutil `#E1E1E1`, sem borda, girado aproximadamente `30deg` para a direita, ampliado em mais aproximadamente `10%` sobre a escala anterior e parcialmente vazando pela lateral direita, agora deslocado para baixo em cerca de `3cm`, posicionado por baixo da esteira exatamente na zona onde os cards surgem; o excesso horizontal e clipado no limite da viewport para nao gerar scroll lateral, com mais respiro inferior dentro da propria secao `Sobre` para o shape voltar a aparecer antes da abertura da secao `Servicos`.

5. Secao Servicos.
   Posicao: logo abaixo do fechamento da secao `Sobre`, abrindo com o novo espacamento global aproximado de `5cm`.
   Estrutura atual: mantem o bloco introdutorio em duas colunas usado em `Sobre`, com o marcador da secao (`squircle` e `Servicos`) e o texto principal alinhados pela mesma regua estrutural de `Sobre`; abaixo dele entra diretamente a pilha vertical interativa de quatro ofertas com divisorias finas, acompanhada por um shape proprio espelhado no lado esquerdo.
   Estilo do identificador: squircle SVG vermelho igual ao do logo, com `14px` por `14px`, ao lado do texto `Servicos` em `IBM Plex Sans`, `18px`, tom `#4F5757`, sem halo adicional.
   Estilo do bloco principal: replica o mesmo desenho tipografico do bloco principal de `Sobre`, agora com o texto `A produtividade aumenta quando a empresa encurta o tempo entre perceber um problema, decidir e agir.` em `#044040`, com a mesma largura util de `502px`, o mesmo line-height `0.98` e a mesma ancora horizontal do texto principal e do subtexto de `Sobre`; dentro desse titulo, as expressoes `produtividade aumenta`, `encurta o tempo`, `perceber`, `decidir` e `agir` recebem o mesmo recorte animado compartilhado, mudando para `#8C1F28` em cascata, tambem com `7s` de sustentacao completa e `7s` de repouso no estado base.
   Papel institucional atual: apresentar os ecossistemas operacionais da REDSCALE em linguagem comercial, sem trocar os nomes publicos aprovados.
   Lista de ofertas atual: cerca de `2cm` abaixo do bloco principal aparecem `Consulting-as-a-Service`, `Management-as-a-Service`, `Device-as-a-Service` e `CRM`, todos alinhados pela esquerda a partir de um recuo deslocado mais `4cm` para a esquerda em relacao ao ajuste anterior, enquanto as divisorias acompanham esse mesmo deslocamento e continuam estendidas ate o recuo global da direita. Cada item recebe, no lado esquerdo do titulo, uma miniatura em recorte com cantos arredondados usando respectivamente os assets `consulting.jpg`, `management.jpg`, `device.jpg` e `crm.jpg`; ao abrir um item, o painel deixa de ser apenas vazio e passa a exibir uma copy institucional com tres tags de frente principal. Essa pilha usa `Aspekta` numa escala responsiva cerca de `3px` menor que `Cresca melhor.` no hero, com um sinal `+` cinza alinhado nesse extremo direito. Ao clicar em um item, apenas ele abre um espacamento de aproximadamente `8,5cm` entre o titulo e a linha divisoria, enquanto o `+` gira para virar `x`; ao clicar novamente no titulo ou no proprio `x`, o espacamento fecha e o icone retorna para `+`.
   Elemento decorativo atual: um segundo quadrado com cantos bem arredondados, duplicado visualmente do shape de `Sobre`, aparece agora ancorado no lado esquerdo da secao `Servicos`, em cinza sutil `#E1E1E1`, sem borda, girado aproximadamente `-30deg` e ampliado na mesma escala do shape original.

6. CTA com imagem.
   Posicao: aproximadamente `5cm` abaixo da ultima linha do bloco `CRM` em `Servicos`, antes da abertura de `Metodo`.
   Estrutura atual: um frame unico com a imagem local `cta-img.jpg`, overlay no canto superior esquerdo com squircle e um titulo empilhado em tres linhas, e um CTA no canto inferior direito usando o mesmo componente do header.
   Papel atual: criar uma pausa visual forte entre `Servicos` e `Metodo`, reforcando repertorio de execucao antes do bloco conceitual seguinte.
   Conteudo atual: imagem `app/frontend/assets/images/cta/cta-img.jpg`, palavras `Fazemos,`, `Repetimos,`, `Melhoramos` e botao `Entre em contato conosco`.
   Estilo atual: o frame usa cantos arredondados amplos, cobre toda a largura util da pagina e agora compartilha exatamente a mesma altura responsiva da faixa de video do hero (`clamp(420px, 46vw, 620px)`), aplicando um overlay mais denso para preservar legibilidade; o squircle igual ao do logo, agora em `#F2F2F2`, abre o bloco no canto superior esquerdo e o titulo usa `Aspekta` em escala grande, cor `#F2F2F2`, uma palavra por linha. No canto inferior direito entra uma copia do CTA do header, agora com o texto `Entre em contato conosco`.

7. Secao Metodo.
   Posicao: aproximadamente `5cm` abaixo do CTA com imagem, como uma secao independente da narrativa de `Sobre`.
   Estrutura atual: label `Metodo`, titulo principal curto com um unico destaque animado, subtexto logo abaixo usando a mesma referencia estrutural do bloco de apoio de `Sobre` e, cerca de `2cm` abaixo dele, uma grade de tres quadros verticais com cantos arredondados.
   Papel atual: condensar o approach institucional da REDSCALE em uma declaracao curta de confianca operacional, seguida por uma explicacao objetiva de como esse metodo se forma na pratica e por uma leitura em etapas da jornada do ecossistema.
   Conteudo atual: titulo `A confianca nao vem do discurso. Vem do resultado!`, subtexto `Nosso trabalho parte de um objetivo simples: elevar a produtividade. Para isso, combinamos processos e metodos que funcionam para nos e adaptamos a sua realidade. O que entregamos nasceu de experiencia, pesquisa, muitos testes, uso recorrente e melhoria continua. Segue abaixo a jornada do heroi do nosso ecossistema:` e tres quadros numerados `01`, `02` e `03`. O primeiro traz o titulo `Vamos tomar um cafe` com a copy de kick-off rapido; os quadros `02` e `03` usam textos provisorios para preenchimento posterior.
   Estilo atual: o titulo usa a mesma largura util de `502px`, o mesmo line-height `0.98` e a mesma regua horizontal do texto principal e do subtexto de `Sobre`; a expressao `Vem do resultado!` recebe sozinha a pintura tipografica em `#8C1F28`, com um ciclo dedicado de `16s`. No subtexto, a expressao `elevar a produtividade` tambem passa a receber a mesma logica de pintura em um ciclo proprio. Logo abaixo, o apoio permanece no mesmo grid-column e no mesmo alinhamento estrutural usados por `Sobre`. A grade de jornada usa tres cards em `#E1E1E1`, sem borda visivel, squircle unificado ao do logo e numeracao no topo esquerdo, icones animados em base vermelha com linhas brancas, titulos mantidos em uma linha e textos de apoio ampliados dentro de cada quadro. A secao continua sem infografico `CAR` e sem video, funcionando apenas como bloco textual independente entre o CTA com imagem e `Produtos`.

8. Secao Produtos.
   Posicao: abaixo de `Metodo`, respeitando o mesmo espacamento vertical global aproximado de `5cm`.
   Estrutura atual: bloco introdutorio no mesmo idioma visual da home e grade de quatro cards.
   Papel atual: comunicar os ativos escalaveis da marca sem abrir ainda paginas separadas.
   Conteudo atual: `Planilhas Excel`, `Templates`, `Cursos` e `Treinamentos corporativos`.
   Estilo atual: o texto principal e o subtexto seguem a mesma regua horizontal do texto principal e do subtexto de `Sobre`.

9. Secao Redsights.
   Posicao: abaixo de `Produtos`, mantendo o mesmo ritmo vertical global.
   Estrutura atual: bloco introdutorio seguido por uma grade editorial de quatro cards.
   Papel atual: comunicar autoridade, conteudo, pesquisa e geracao de novas conversas para a marca.
   Conteudo atual: `Artigos`, `Analises`, `Estudos` e `Midia e networking`.
   Estilo atual: o texto principal e o subtexto seguem a mesma regua horizontal do texto principal e do subtexto de `Sobre`.

10. CTA final em `#contato`.
   Posicao: no fechamento da home, abaixo de `Redsights`.
   Estrutura atual: bloco institucional com fundo `#F2F2F2`, label `Proximo passo`, titulo `Agendar diagnostico`, duas linhas de orientacao e dois caminhos de navegacao.
   Papel atual: funcionar como ponto de chegada dos CTAs do header, do video e do CTA com imagem, sem inventar ainda uma operacao de formulario ou contato fora do escopo desta rodada.
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
