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
FRONTEND_ROOT="$ROOT/app/frontend"

if [ ! -f "$FRONTEND_ROOT/home.html" ]; then
    echo "O arquivo app/frontend/home.html nao foi encontrado." >&2
    exit 1
fi

show_next_steps() {
    echo "Projeto atual: frontend estatico em app/frontend."
    echo "Preview local: python app/frontend/dev_server.py --port 8000"
    echo "URL: http://127.0.0.1:8000/"
    echo "Arquivos principais: app/frontend/home.html, app/frontend/contato.html, app/frontend/styles.css, app/frontend/main.js."
}

if [ "$SKIP_LAUNCH" -eq 1 ]; then
    show_next_steps
    exit 0
fi

if ! command -v python >/dev/null 2>&1; then
    echo "O comando 'python' nao foi encontrado no PATH." >&2
    exit 1
fi

cd "$FRONTEND_ROOT"
echo "Iniciando preview do frontend atual em http://127.0.0.1:8000/"
python ./dev_server.py --port 8000
