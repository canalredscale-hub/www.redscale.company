# Deploy na Hostinger com WordPress

Este repositório entrega um site estático em `app/frontend`. O WordPress/Hostinger deve ser usado apenas como camada de hospedagem/arquivo público: o pacote publicado precisa conter os HTMLs, CSS, JS, fontes, imagens, vídeos e o `.htaccess` deste projeto.

## 1. Arquivos que entram no pacote

Crie um `.zip` com o conteúdo de `app/frontend`, mantendo os arquivos diretamente na raiz do pacote, e não dentro de uma pasta extra.

Inclua:

- Todas as páginas `.html`: `index.html`, `home.html`, `greenscale.html`, `numbear.html`, `stockhandle.html`, `solucoes.html`, `redsights.html`, `redsights-radar1.html`, `contato.html`, `planilhas-personalizadas.html`, `dashboards.html`, `automacoes.html`, `controle-de-estoque.html`, `financeiro-e-gestao.html`, `mapeamento-inicial.html`, `recursos-prontos.html` e `em-construcao.html`.
- Arquivos estáticos: `styles.css`, `main.js`, `paint-animations.css` e `.htaccess`.
- Pastas completas: `assets/` e `fonts/`.

Não é necessário publicar `dev_server.py`; ele existe apenas para pré-visualização local.

## 2. Como gerar o pacote

### Windows PowerShell

Execute na raiz do repositório:

```powershell
$package = "redscale-hostinger-package.zip"
if (Test-Path $package) { Remove-Item $package }
Compress-Archive -Path "app/frontend/*" -DestinationPath $package -Force
```

Atenção: o comando acima inclui os arquivos visíveis. Como `.htaccess` é arquivo oculto em alguns ambientes, confirme se ele entrou no `.zip`. Se não entrar, adicione-o manualmente pelo compactador do Windows ou rode:

```powershell
Compress-Archive -Path "app/frontend/.htaccess" -Update -DestinationPath "redscale-hostinger-package.zip"
```

### Linux/macOS/WSL

Execute na raiz do repositório:

```bash
cd app/frontend
zip -r ../../redscale-hostinger-package.zip . -x "dev_server.py"
cd ../..
```

## 3. Como enviar pelo painel da Hostinger

1. Acesse o painel da Hostinger.
2. Abra **Sites** e selecione o domínio da Redscale.
3. Entre em **Gerenciador de Arquivos**.
4. Abra a pasta pública do domínio, normalmente `public_html`.
5. Faça backup dos arquivos atuais antes de substituir qualquer coisa. Se existir WordPress instalado, faça backup do `.htaccess` atual.
6. Envie `redscale-hostinger-package.zip` para `public_html`.
7. Use a opção **Extrair** do Gerenciador de Arquivos.
8. Confirme que `home.html`, `styles.css`, `main.js`, `.htaccess`, `assets/` e `fonts/` ficaram diretamente dentro de `public_html`.
9. Apague o `.zip` depois da extração para evitar download público do pacote.

## 4. Como ativar junto do WordPress

O arquivo `.htaccess` deste projeto define `home.html` como entrada principal e ativa rotas limpas para as páginas estáticas. Se o WordPress já tiver um bloco próprio no `.htaccess`, mantenha o bloco `# BEGIN WordPress` / `# END WordPress` e coloque as regras da Redscale acima dele.

Modelo recomendado:

```apache
Options -Indexes
DirectoryIndex home.html index.html index.php

<IfModule mod_rewrite.c>
  RewriteEngine On

  RewriteRule ^$ home.html [L]
  RewriteRule ^home/?$ home.html [L]
  RewriteRule ^greenscale/?$ greenscale.html [L]
  RewriteRule ^numbear/?$ numbear.html [L]
  RewriteRule ^stockhandle/?$ stockhandle.html [L]
  RewriteRule ^solucoes/?$ solucoes.html [L]
  RewriteRule ^contato/?$ contato.html [L]
  RewriteRule ^redsights/?$ redsights.html [L]
  RewriteRule ^redsights-radar1/?$ redsights-radar1.html [L]
  RewriteRule ^planilhas-personalizadas/?$ planilhas-personalizadas.html [L]
  RewriteRule ^dashboards/?$ dashboards.html [L]
  RewriteRule ^automacoes/?$ automacoes.html [L]
  RewriteRule ^controle-de-estoque/?$ controle-de-estoque.html [L]
  RewriteRule ^financeiro-e-gestao/?$ financeiro-e-gestao.html [L]
  RewriteRule ^mapeamento-inicial/?$ mapeamento-inicial.html [L]
  RewriteRule ^recursos-prontos/?$ recursos-prontos.html [L]
  RewriteRule ^em-construcao/?$ em-construcao.html [L]
</IfModule>

# BEGIN WordPress
# mantenha aqui o bloco padrão gerado pelo WordPress, se existir
# END WordPress
```

Se o site estático for publicado em um subdiretório ou subdomínio separado do WordPress, use o `.htaccess` do pacote sem misturar com o bloco do WordPress.

## 5. Formulários e integrações

- Formulários de contato enviam para `https://formspree.io/f/mreyyorn` via JavaScript, sem trocar de página.
- Formulários de newsletter enviam para `https://formspree.io/f/xykopqqj` via JavaScript, sem trocar de página.
- Os campos ocultos de origem, interesse, UTM e página atual são preenchidos pelo `main.js` antes do envio.
- Os eventos client-side de conversão são disparados por `main.js` para `window.dataLayer` quando ele existir.

## 6. Validação após ativar

Depois de extrair e ativar o pacote, valide no navegador:

- `/`
- `/home.html` e `/home`
- `/contato.html` e `/contato`
- `/planilhas-personalizadas.html` e `/planilhas-personalizadas`
- `/dashboards.html` e `/dashboards`
- `/automacoes.html` e `/automacoes`
- `/controle-de-estoque.html` e `/controle-de-estoque`
- `/financeiro-e-gestao.html` e `/financeiro-e-gestao`
- `/mapeamento-inicial.html` e `/mapeamento-inicial`
- `/recursos-prontos.html` e `/recursos-prontos`
- `/greenscale.html`, `/numbear.html`, `/stockhandle.html` e `/solucoes.html`
- `/redsights.html`, `/redsights` e `/redsights-radar1.html`

Também valide:

- CSS, imagens, vídeos e fontes carregando sem erro 404.
- CTAs levando para `contato.html` com os parâmetros `origem` e `interesse`.
- Formulário de contato exibindo mensagem de sucesso na própria página.
- Newsletter exibindo mensagem de sucesso na própria página.
- Links sociais do footer abrindo em nova aba.

## 7. Pré-visualização local antes do envio

No Windows, use `open-lp.cmd` na raiz do repositório. Ele inicia o servidor local em `http://127.0.0.1:8000` e abre as páginas atualizadas principais.

Alternativa manual:

```powershell
python app/frontend/dev_server.py --host 127.0.0.1 --port 8000
```

Em seguida, abra `http://127.0.0.1:8000/home.html`.
