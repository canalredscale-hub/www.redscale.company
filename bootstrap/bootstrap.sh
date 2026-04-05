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
cd "$ROOT"

if ! command -v uv >/dev/null 2>&1; then
    echo "O comando 'uv' nao foi encontrado." >&2
    echo "Instale o uv em macOS/Linux com a instrucao oficial da Astral:" >&2
    echo "curl -LsSf https://astral.sh/uv/install.sh | sh" >&2
    exit 1
fi

echo "Sincronizando o ambiente local do projeto"
uv sync

if [ "$SKIP_LAUNCH" -eq 0 ]; then
    echo "Iniciando o orquestrador do projeto"
    uv run orquestrador-projeto start
else
    echo "Proximos passos canonicos:"
    echo "1. Leia \`00-user-guide.md\` para retomar a interface atual em construcao."
    echo "2. Leia \`04-solution-research.md\` antes de avancar para \`01-roadmap.md\`."
    echo "3. Use \`README.md\` para setup e preview local do frontend."
    echo "4. Continue a construcao com \`orquestrador-projeto/workflows/04-site-construction.md\` e \`orquestrador-projeto/skills/04-web-design-motion-build.md\`."
fi
