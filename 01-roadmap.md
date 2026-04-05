# 01 Roadmap

## Norte do projeto

- Objetivo final: Ter um site atualizado e instalável como app no Windows ou macOS, com home institucional, CTAs estratégicos e landing pages de alta conversão levando ao checkout de produtos como planilhas, templates, treinamentos, consultorias, SaaS e ofertas relacionadas.
- Objetivo inicial: Começar a trabalhar o esqueleto do site de acordo com pesquisas, referências e direcionamento comercial validado.
- Workflow de referência: Aplicação web (`web_app`)
- Usuários: Uso interno no início e depois público externo em formato de serviço e SaaS.
- Prazo principal: 7 dias
- Pesquisa aprovada: `04-solution-research.md`

## Pesquisa que fundamenta este roadmap

- Modo: external_plus_internal
- Status: approved
- Resumo: Pesquisa híbrida aprovada indicando que a fundação do projeto deve nascer como produto web-first com home institucional e landing pages em arquitetura PWA, checkout hospedado e backend mínimo para leads e webhooks, preservando a futura expansão para área /app e produtos SaaS sem sacrificar segurança, SEO, observabilidade, governança e readiness operacional.

## Trilhas obrigatórias de fundação

### Arquitetura e limites do sistema

- Síntese: A arquitetura inicial deve privilegiar um site web-first com home institucional, rotas de landing pages e uma futura fronteira clara para /app, evitando criar desde o início uma solução desktop nativa separada. A instalabilidade em Windows e macOS pode ser atendida primeiro via PWA, reduzindo custo e acelerando o prazo de 7 dias.
- Decisões recomendadas:
  - Adotar uma casca web principal com foco em home, landing pages e catálogo de ofertas antes de expandir para área transacional mais rica.
  - Tratar a versão instalável como PWA no primeiro ciclo, deixando empacotamento de store ou wrapper desktop como etapa posterior.
  - Separar conceitualmente frontend público, backend mínimo comercial e futura área /app para não misturar conteúdo institucional com produto SaaS.
- Entregas mínimas:
  - Mapa de rotas inicial cobrindo home, páginas de oferta, páginas placeholder e futura convenção para /app.
  - Decisão documentada sobre stack web-first e limite explícito do que entra ou não no primeiro ciclo.
  - Definição do backend mínimo necessário para formulários, criação de checkout e recepção de webhooks.
- Dependências:
  - Confirmação da prioridade comercial da home institucional.
  - Escolha de framework principal para frontend e de como o backend mínimo será hospedado.
  - Definição mínima das ofertas que exigem CTA e redirecionamento para checkout.
- Critérios de saída:
  - Arquitetura inicial aprovada com fronteiras entre site institucional, landing pages, integrações comerciais e futura área /app.
  - Estratégia PWA registrada como solução inicial para instalabilidade em Windows e macOS.
  - Primeira experiência crítica conectada a contratos técnicos mínimos e navegabilidade prevista.
- Riscos a monitorar:
  - Tentar resolver site institucional, catálogo, SaaS e experiência interna de uma vez só pode inflar o escopo.
  - Escolher múltiplas superfícies técnicas cedo demais pode comprometer o prazo apertado.
  - Misturar responsabilidades de conteúdo, checkout e lógica de produto sem fronteiras claras dificulta manutenção.

### Segurança, compliance e controles de acesso

- Síntese: Mesmo sem área logada no início, haverá superfície sensível de leads, rastreamento de origem, checkout e webhooks. O desenho inicial precisa reduzir exposição usando checkout hospedado, segredos fora do código, validação de assinaturas, políticas de segurança no frontend e conformidade mínima com LGPD.
- Decisões recomendadas:
  - Usar checkout hospedado de provedor para evitar manipular dados sensíveis de cartão no site principal.
  - Registrar política de privacidade, consentimento quando aplicável e retenção mínima para leads e eventos de marketing.
  - Aplicar controles mínimos como HTTPS, CSP, gestão de segredos, validação de webhooks e logs auditáveis.
- Entregas mínimas:
  - Checklist de segurança inicial para formulários, CTAs, checkout e webhooks.
  - Definição de onde ficam segredos e como serão gerenciados por ambiente.
  - Política mínima de dados pessoais e eventos críticos registrada na memória do projeto.
- Dependências:
  - Escolha do provedor de checkout.
  - Decisão sobre ferramenta de analytics e captura de leads.
  - Definição do ambiente de hospedagem e das variáveis seguras por ambiente.
- Critérios de saída:
  - Fluxos de checkout e webhook com controles mínimos documentados e prontos para implementação.
  - Tratamento inicial de dados pessoais aderente ao contexto de LGPD e à operação comercial prevista.
  - Riscos sensíveis mapeados com contramedidas objetivas antes de produção.
- Riscos a monitorar:
  - Implementar checkout customizado cedo demais aumenta risco e atrasa entrega.
  - Capturar e-mail e dados de navegação sem política definida cria passivo de privacidade.
  - Segredos, chaves e endpoints expostos comprometem a operação comercial e a confiança da marca.

### Dados, armazenamento e retenção

- Síntese: A modelagem inicial precisa ser leve, mas preparada para crescimento comercial. O núcleo inicial deve contemplar ofertas, landing pages, CTAs, leads, consentimentos, eventos de conversão, sessões de checkout e webhooks, sem armazenar dados de pagamento sensíveis localmente.
- Decisões recomendadas:
  - Persistir apenas dados comerciais e operacionais necessários para jornada, medição e suporte.
  - Separar eventos de marketing, dados de lead e eventos de pagamento para facilitar rastreabilidade e retenção.
  - Evitar armazenar qualquer dado sensível de cartão ou material desnecessário trazido pelo provedor de pagamento.
- Entregas mínimas:
  - Modelo inicial de entidades comerciais e operacionais.
  - Estratégia de retenção para leads, consentimentos e eventos de webhook.
  - Convenção para rastrear origem de tráfego, campanha e CTA sem perder auditabilidade.
- Dependências:
  - Escolha das primeiras ofertas que irão ao ar.
  - Definição do provedor de checkout e do payload útil de webhook.
  - Definição do stack de persistência da primeira fase.
- Critérios de saída:
  - Entidades mínimas aprovadas para operar home, landing pages, leads e checkout.
  - Retenção e descarte básico documentados para dados pessoais e eventos.
  - Estratégia de rastreio suficiente para acompanhar aquisição, conversão e suporte.
- Riscos a monitorar:
  - Modelagem genérica demais pode impedir mensuração comercial confiável.
  - Guardar dado demais no início aumenta complexidade e risco de conformidade.
  - Ausência de idempotência e trilha de eventos dificulta reconciliação de pagamento e suporte.

### Infraestrutura, ambientes e entrega

- Síntese: A primeira entrega precisa de infraestrutura simples e previsível, com preview, produção, domínio seguro, variáveis segregadas e rollback fácil. Pelo prazo, a recomendação é privilegiar hospedagem gerenciada e fluxo de deploy enxuto, evitando infraestrutura artesanal desnecessária.
- Decisões recomendadas:
  - Priorizar plataforma gerenciada para frontend e backend mínimo no primeiro ciclo.
  - Criar separação clara entre ambiente de preview e produção com segredos distintos.
  - Padronizar bootstrap local com uv e organização que permita evolução para múltiplos componentes depois.
- Entregas mínimas:
  - Estratégia inicial de deploy, domínio e configuração por ambiente.
  - Mapa de credenciais e segredos por ambiente.
  - Definição de rollback simples para mudanças que afetem home, landing pages ou integrações comerciais.
- Dependências:
  - Escolha de provedor de hospedagem.
  - Confirmação dos domínios e subdomínios que serão utilizados.
  - Decisão sobre onde rodam APIs mínimas e webhooks.
- Critérios de saída:
  - Pipeline de entrega com preview e produção definido.
  - Segregação de configuração e segredos aprovada.
  - Procedimento básico de rollback documentado para o primeiro ciclo.
- Riscos a monitorar:
  - Configuração manual demais dificulta repetibilidade e troubleshooting.
  - Misturar segredos e variáveis entre ambientes aumenta risco de incidente.
  - Infraestrutura excessiva para o prazo atual consome tempo sem elevar valor de negócio.

### Observabilidade, logs e monitoramento

- Síntese: O projeto depende de rastrear conversão e diagnosticar falhas comerciais cedo. Mesmo no MVP, é necessário instrumentar CTA, formulário, checkout iniciado, retorno de checkout, webhook recebido, erro de página e falhas de integração para ter evidência operacional e comercial.
- Decisões recomendadas:
  - Definir eventos críticos de negócio e de operação desde a primeira versão.
  - Separar logs técnicos de erros e eventos analíticos de conversão.
  - Garantir rastreabilidade de falhas em formulários, checkout e webhooks.
- Entregas mínimas:
  - Catálogo de eventos mínimos de marketing, conversão e integração.
  - Estratégia de captura de erros de frontend e backend.
  - Critérios de alerta para falhas de checkout, formulário ou indisponibilidade relevante.
- Dependências:
  - Escolha das ferramentas de analytics e monitoramento de erros.
  - Mapeamento da jornada crítica na home e nas landing pages.
  - Definição de onde os webhooks serão processados e logados.
- Critérios de saída:
  - Eventos críticos definidos e prontos para instrumentação.
  - Logs suficientes para diagnosticar perda de lead ou falha de pagamento.
  - Mecanismo mínimo de alerta ou revisão operacional definido para eventos críticos.
- Riscos a monitorar:
  - Sem telemetria, a equipe fica cega para conversão e quebra de integração.
  - Misturar analítica de marketing com logs técnicos dificulta leitura operacional.
  - Não capturar falha de webhook ou checkout pode gerar perda silenciosa de receita.

### Qualidade, testes e validação

- Síntese: A primeira validação precisa assegurar que a home converte, carrega bem, funciona em mobile, respeita acessibilidade básica e não quebra o caminho para landing pages e checkout. Qualidade aqui envolve regressão visual e funcional, além de SEO técnico e performance essencial.
- Decisões recomendadas:
  - Validar a jornada crítica ponta a ponta desde a home até o redirecionamento comercial.
  - Aplicar checagens mínimas de acessibilidade, responsividade e Core Web Vitals.
  - Priorizar testes pequenos, objetivos e alinhados ao prazo, em vez de cobertura extensa sem foco.
- Entregas mínimas:
  - Checklist de aceite para home, CTAs, páginas placeholder e integração comercial.
  - Estratégia mínima de testes automatizados e validação manual orientada à jornada.
  - Critérios de SEO técnico e performance para a publicação inicial.
- Dependências:
  - Definição do layout base e dos principais CTAs.
  - Escolha do fluxo de checkout e da forma de captura de leads.
  - Disponibilidade de ambiente de preview para validação antes de produção.
- Critérios de saída:
  - Jornada home -> landing -> checkout ou formulário validada sem bloqueios críticos.
  - Mobile, acessibilidade básica e SEO técnico atendidos para o lançamento inicial.
  - Critérios de aceite por marco registrados no roadmap.
- Riscos a monitorar:
  - Focar só em estética pode esconder gargalos de conversão e falhas de navegação.
  - Sem validação mobile, a primeira versão pode perder grande parte do tráfego.
  - Sem smoke tests da jornada comercial, regressões simples podem comprometer receita.

### Versionamento, governança de mudanças e operação

- Síntese: O projeto precisa nascer com governança mínima para mudanças rápidas e seguras. Isso inclui convenção de branching, definição de revisão, registro de decisões, plano de rollback e rotina de suporte operacional para problemas em conteúdo, checkout ou integrações.
- Decisões recomendadas:
  - Usar uma política de mudanças simples, porém explícita, adequada ao ritmo de evolução comercial do projeto.
  - Tratar rollback e operação como parte do plano inicial, não como pós-escopo.
  - Manter memória determinística atualizada para retomada rápida e rastreabilidade de decisões.
- Entregas mínimas:
  - Convenção inicial de branches, revisão e aprovação.
  - Registro operacional para rollback e suporte de incidentes comerciais.
  - Rotina clara de atualização da memória essencial do projeto.
- Dependências:
  - Definição do fluxo de trabalho entre equipe interna e futuras evoluções públicas.
  - Escolha do ambiente de hospedagem e estratégia de deploy.
  - Definição de quem aprova mudanças críticas em conteúdo e integrações comerciais.
- Critérios de saída:
  - Governança mínima de mudança documentada e aplicável ao primeiro ciclo.
  - Procedimento de rollback associado a deploy e integrações sensíveis registrado.
  - Memória essencial pronta para suportar continuidade do projeto sem perda de contexto.
- Riscos a monitorar:
  - Mudanças rápidas sem governança aumentam chance de regressão em páginas de conversão.
  - Sem plano de rollback, incidentes simples podem ficar caros e demorados.
  - Sem disciplina de memória, decisões de produto e infraestrutura se perdem entre ciclos.

### Escalabilidade, performance e readiness

- Síntese: Mesmo começando com um site institucional, o objetivo final já aponta para múltiplas ofertas, fluxos de conversão e futura camada SaaS. O roadmap precisa preservar readiness para crescimento de tráfego, expansão do catálogo, aumento de integrações e evolução gradual para produto mais complexo.
- Decisões recomendadas:
  - O primeiro ciclo deve favorecer componentes reaproveitáveis e rotas expansíveis para novas ofertas.
  - Performance e SEO precisam ser tratados como requisitos de aquisição, não apenas otimização posterior.
  - A arquitetura deve permitir desacoplar gradualmente o backend quando o produto de dados e SaaS crescer.
- Entregas mínimas:
  - Critérios de readiness para aumento de tráfego, novas landing pages e mais integrações.
  - Definição dos principais gargalos prováveis de performance e aquisição.
  - Sinalização de quando faz sentido mover de backend mínimo para serviço dedicado.
- Dependências:
  - Estratégia inicial de rotas, conteúdo e componentes.
  - Instrumentação de métricas de performance e conversão.
  - Evolução do catálogo de ofertas e da futura área /app.
- Critérios de saída:
  - Pontos de expansão e limites do primeiro ciclo documentados.
  - Requisitos mínimos de performance e readiness incorporados ao roadmap.
  - Decisão registrada sobre como a base atual evolui para produtos mais complexos.
- Riscos a monitorar:
  - Arquitetura rígida demais dificulta inclusão de novas ofertas e produtos digitais.
  - Ignorar performance no início prejudica SEO, mídia paga e conversão.
  - Crescimento sem readiness operacional pode gerar dívida técnica logo nas primeiras campanhas.

## Exigências mínimas do workflow

- base de frontend e backend com contratos claros e operação previsível
- segurança, ambientes, logs e testes antes de expansão funcional
- caminho até a experiência principal com escalabilidade e manutenção consideradas

## Implicações aprovadas para priorização

- Iniciar com fundação web/PWA e evitar app desktop nativo no primeiro ciclo.
- Tratar home institucional e sistema de CTAs como o primeiro marco real de entrega.
- Usar checkout hospedado com webhooks validados para reduzir risco e acelerar a ida ao ar.
- Publicar a primeira versão com SEO técnico, acessibilidade básica, analytics e monitoramento desde o início.
- Modelar entidades mínimas de ofertas, landing pages, leads, consentimentos e eventos de conversão.
- Preparar a estrutura para futura expansão para /app e ofertas SaaS sem misturar tudo no MVP.
- Registrar rollback, governança de mudanças e operação comercial como parte do roadmap base.

## Marcos sugeridos

### Marco 1. Pesquisa aprovada e decisão arquitetural inicial

- Objetivo: Fechar as decisões macro que reduzem retrabalho antes da execução.
- Dependências:
  - briefing consolidado
  - workflow confirmado
  - pesquisa híbrida aprovada
- Critérios de saída:
  - 04-solution-research.md aprovado
  - questões abertas classificadas em bloquear / acompanhar / justificar como não aplicável
  - roadmap alinhado ao objetivo final

### Marco 2. Fundação robusta e escalável

- Objetivo: Implementar a base transversal de robustez e operação do projeto.
- Dependências:
  - Arquitetura e limites do sistema
  - Segurança, compliance e controles de acesso
  - Dados, armazenamento e retenção
  - Infraestrutura, ambientes e entrega
  - Observabilidade, logs e monitoramento
  - Qualidade, testes e validação
  - Versionamento, governança de mudanças e operação
  - Escalabilidade, performance e readiness
- Critérios de saída:
  - trilhas obrigatórias de fundação com responsáveis e critérios de saída definidos
  - segurança, observabilidade, qualidade e operação refletidas no plano
  - dependências externas críticas identificadas

### Marco 3. Capacidades mínimas do workflow `web_app`

- Objetivo: Transformar a pesquisa especializada do workflow em entregas executáveis.
- Dependências:
  - base de frontend e backend com contratos claros e operação previsível
  - segurança, ambientes, logs e testes antes de expansão funcional
  - caminho até a experiência principal com escalabilidade e manutenção consideradas
- Critérios de saída:
  - Iniciar com fundação web/PWA e evitar app desktop nativo no primeiro ciclo.
  - Tratar home institucional e sistema de CTAs como o primeiro marco real de entrega.
  - Usar checkout hospedado com webhooks validados para reduzir risco e acelerar a ida ao ar.
  - Publicar a primeira versão com SEO técnico, acessibilidade básica, analytics e monitoramento desde o início.
  - Modelar entidades mínimas de ofertas, landing pages, leads, consentimentos e eventos de conversão.
  - Preparar a estrutura para futura expansão para /app e ofertas SaaS sem misturar tudo no MVP.
  - Registrar rollback, governança de mudanças e operação comercial como parte do roadmap base.

### Marco 4. Hardening, escala e readiness

- Objetivo: Concluir o caminho até um projeto operacionalmente robusto.
- Dependências:
  - fundação operacional disponível
  - primeiro incremento funcional validado
- Critérios de saída:
  - estratégia de escala e performance explicitada
  - versionamento, entrega, rollback e monitoramento definidos
  - objetivo final encaminhado para: Ter um site atualizado e instalável como app no Windows ou macOS, com home institucional, CTAs estratégicos e landing pages de alta conversão levando ao checkout de produtos como planilhas, templates, treinamentos, consultorias, SaaS e ofertas relacionadas.

## Sinais aprovados no briefing

- Qual é a primeira experiência crítica do usuário?: A home institucional pronta, com CTAs apontando para outras páginas que ainda estarão em construção.
- Existe autenticação ou área logada já no início?: Não. A primeira versão não nasce com login, sessão, perfis de acesso ou área privada.

## Dependências e riscos principais

- Restrições: A definir.
- Riscos iniciais: Prazo apertado.
- Compliance e segurança: Necessidade de segurança adequada para envolver checkout.

## Memória essencial do workflow

- jornada crítica do usuário
- primeira experiência ou tela
- backend mínimo correspondente
- autenticação e sessão

## Questões em aberto que precisam ser monitoradas

- Refinar a identidade visual própria da REDSCALE a partir do esqueleto inicial aprovado.
- Substituir placeholders de trusted by, cases e depoimentos por prova social real quando os ativos estiverem disponíveis.
- Consolidar as mensagens-chave finais por segmento para templates, consultoria, treinamentos e software.
- Definir a ordem exata de hospedagem, analytics, captura de lead e checkout Mercado Pago após validação do HTML.

## Processos adicionais a registrar

- Nenhum processo adicional informado.
