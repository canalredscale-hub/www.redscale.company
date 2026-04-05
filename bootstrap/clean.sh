#!/usr/bin/env sh
set -eu

INCLUDE_TOOLING=0
for arg in "$@"; do
    case "$arg" in
        --include-tooling)
            INCLUDE_TOOLING=1
            ;;
        *)
            echo "Argumento nao suportado: $arg" >&2
            exit 2
            ;;
    esac
done

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
ROOT=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)
cd "$ROOT"

rm -rf .venv .uv_cache .tmp_tests dist build
if [ "$INCLUDE_TOOLING" -eq 1 ]; then
    rm -rf .tooling
fi

find . -type d -name "__pycache__" -prune -exec rm -rf {} +
find . -type f \( -name "*.pyc" -o -name "*.pyo" \) -delete
find . -type d -name "*.egg-info" -prune -exec rm -rf {} +

echo "Artefatos transitorios removidos."
