#!/usr/bin/env sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
ROOT=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)
cd "$ROOT"

if [ ! -d "$ROOT/tests" ]; then
    echo "Nenhuma suite em tests/ encontrada. Validacao automatizada ainda nao foi recriada nesta fase da reconstrucao do frontend."
    exit 0
fi

LOCAL_UV="$ROOT/.tooling/uv/uv"

if [ -x "$LOCAL_UV" ]; then
    exec "$LOCAL_UV" run python -m unittest discover -s tests -q
fi

if command -v uv >/dev/null 2>&1; then
    exec uv run python -m unittest discover -s tests -q
fi

exec python -m unittest discover -s tests -q
