# Deploy na Hostinger (com WordPress instalado)

Este projeto é um site estático. O WordPress pode continuar instalado na conta, mas os arquivos deste projeto precisam estar em `public_html` (ou na pasta pública do domínio/subdomínio alvo).

## 1. O que subir

Suba o conteúdo de `app/frontend` com esta base:

- Páginas `.html` (incluindo `home.html`, `index.html`, `greenscale.html`, `numbear.html`, `stockhandle.html`, `solucoes.html`, `redsights.html`, `redsights-radar1.html`, `contato.html` e páginas de oferta).
- `styles.css`
- `main.js`
- `paint-animations.css`
- pastas `assets/` e `fonts/`
- `.htaccess`

Arquivo que não precisa subir:

- `dev_server.py`

## 2. Publicação via hPanel

1. No repositório local, compacte o conteúdo de `app/frontend` em `.zip`.
2. No hPanel, abra **Gerenciador de Arquivos** do domínio.
3. Faça backup do conteúdo atual de `public_html` (principalmente `.htaccess` existente).
4. Envie o `.zip` para `public_html`.
5. Extraia o `.zip` em `public_html`.
6. Confirme que `home.html`, `styles.css`, `main.js`, `assets/`, `fonts/` e `.htaccess` ficaram na raiz publicada.

## 3. Regra de `.htaccess`

- Mantenha o `.htaccess` do projeto na mesma pasta das páginas publicadas.
- Se houver regras padrão do WordPress, mantenha as regras deste projeto antes do bloco padrão do WordPress.
- O `.htaccess` deste projeto define `home.html` como entrada principal e mantém rotas limpas.

## 4. Checklist pós-deploy

Valide no navegador:

- `/`
- `/home.html`
- `/greenscale.html`
- `/numbear.html`
- `/stockhandle.html`
- `/solucoes.html`
- `/redsights.html`
- `/redsights-radar1.html`
- `/contato.html`

E valide também:

- navegação da header (scroll com offset correto na home),
- formulários de contato (`https://formspree.io/f/mreyyorn`),
- formulários/newsletter (`https://formspree.io/f/xykopqqj`),
- ausência de overflow horizontal em mobile.

## 5. Cache e atualização

Após upload:

1. Abra em aba anônima para evitar cache local.
2. Faça hard refresh (`Ctrl+F5` / `Cmd+Shift+R`).
3. Se usar CDN/proxy da Hostinger, limpe o cache do domínio no painel.
