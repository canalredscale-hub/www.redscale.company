# Deploy na Hostinger com WordPress

Este site continua sendo estático. Para publicar na Hostinger em uma conta com WordPress, envie todo o conteúdo de `app/frontend` para `public_html` ou para a pasta pública do domínio/subdomínio escolhido.

Arquivos que devem subir juntos:

- Todas as páginas `.html`, incluindo `home.html`, `greenscale.html`, `numbear.html`, `stockhandle.html`, `solucoes.html`, `redsights.html`, `redsights-radar1.html`, `contato.html` e `index.html`.
- `styles.css`, `main.js`, `paint-animations.css`, `dev_server.py` não precisa subir.
- Pastas `assets` e `fonts` completas.
- `.htaccess`.

Regras de publicação:

- Mantenha `.htaccess` no mesmo diretório das páginas. Ele define `home.html` como entrada principal e rotas limpas como `/greenscale`, `/numbear`, `/stockhandle`, `/redsights` e `/contato`.
- Se já existir um `.htaccess` do WordPress em `public_html`, faça backup e insira as regras deste projeto acima do bloco padrão do WordPress.
- Os formulários de contato enviam para `https://formspree.io/f/mreyyorn` via JavaScript, sem trocar de página.
- Os formulários de newsletter enviam para `https://formspree.io/f/xykopqqj` via JavaScript, sem trocar de página.
- Depois do upload, valide no navegador: `/`, `/home.html`, `/greenscale.html`, `/numbear.html`, `/stockhandle.html`, `/contato.html`, `/redsights.html` e `/redsights-radar1.html`.
