#!/usr/bin/env sh
set -eu

SKIP_LAUNCH=0
for arg in "$@"; do
    case "$arg" in
        --skip-launch)
            SKIP_LAUNCH=1
            ;;
        *)
            echo "Argumento nao suportado: $arg" >&2
            exit 2
            ;;
    esac
done

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
ROOT=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)
FRONTEND_ROOT="$ROOT/app-teste/frontend"

if [ ! -f "$FRONTEND_ROOT/home.html" ]; then
    echo "O arquivo app-teste/frontend/home.html nao foi encontrado." >&2
    exit 1
fi

show_next_steps() {
    echo "Projeto atual: frontend de teste em app-teste/frontend."
    echo "Preview local: python bootstrap/dev_server.py --web-root app-teste/frontend --port 8000"
    echo "URL: http://127.0.0.1:8000/"
    echo "Arquivos principais: app-teste/frontend/home.html, app-teste/frontend/contato.html, app-teste/frontend/styles.css, app-teste/frontend/main.js."
}

if [ "$SKIP_LAUNCH" -eq 1 ]; then
    show_next_steps
    exit 0
fi

if ! command -v python >/dev/null 2>&1; then
    echo "O comando 'python' nao foi encontrado no PATH." >&2
    exit 1
fi

cd "$ROOT"
echo "Iniciando preview do frontend atual em http://127.0.0.1:8000/"
python ./bootstrap/dev_server.py --web-root app-teste/frontend --port 8000
