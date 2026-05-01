from __future__ import annotations

import argparse
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
PROJECT_NAME = "redscale-site-institucional-vendas"
WORKFLOW_ID = "web_app"
READING_ORDER = [
    "`project_brief.yaml`: briefing estruturado e politica de memoria.",
    "`04-solution-research.md`: sintese aprovada da pesquisa obrigatoria.",
    "`01-roadmap.md`: trilhas, marcos e criterios de saida.",
    "`00-user-guide.md`: status curto de retomada, proxima acao e ponto de parada.",
    "`02-mentalmap.md`: decisoes, aprovacoes e mudancas de direcao.",
    "`03-prompts-guide.md`: regras e prompts para acionar o agente.",
]
NEXT_STEPS = [
    "Leia `00-user-guide.md` para retomar a interface atual em construcao.",
    "Leia `04-solution-research.md` antes de avancar para `01-roadmap.md`.",
    "Use `README.md` para setup e preview local do frontend.",
    "Continue a construcao com `orquestrador-projeto/workflows/04-site-construction.md` e `orquestrador-projeto/skills/04-web-design-motion-build.md`.",
]
CORE_MEMORY_FILES = [
    "00-user-guide.md",
    "01-roadmap.md",
    "02-mentalmap.md",
    "03-prompts-guide.md",
    "04-solution-research.md",
]
WORKFLOW_MEMORY_ESSENTIALS = [
    "jornada critica do usuario",
    "primeira experiencia ou tela",
    "backend minimo correspondente",
    "autenticacao e sessao",
]
ADDITIONAL_MEMORY_PROCESSES: list[str] = []
LOCAL_STRUCTURE_DIRS = [
    "`orquestrador-projeto/rules/`",
    "`orquestrador-projeto/workflows/`",
    "`orquestrador-projeto/skills/`",
]


def load_text(path: Path) -> str:
    return path.read_text(encoding="utf-8-sig")


def extract_yaml_like_scalar(text: str, key: str) -> str:
    prefix = key + ": "
    for line in text.splitlines():
        if not line.startswith(prefix):
            continue
        value = line[len(prefix) :].strip()
        if value.startswith('"') and value.endswith('"'):
            value = value[1:-1]
        return value
    return ""


def extract_section_excerpt(text: str, heading: str, limit: int = 280) -> str:
    capture = False
    parts: list[str] = []

    for line in text.splitlines():
        stripped = line.strip()
        if stripped == heading:
            capture = True
            continue
        if capture and stripped.startswith("## "):
            break
        if capture and stripped:
            parts.append(stripped)
            if len(" ".join(parts)) >= limit:
                break

    excerpt = " ".join(parts).strip()
    if len(excerpt) <= limit:
        return excerpt
    return excerpt[: limit - 3] + "..."


def extract_bullet_value(text: str, label: str) -> str:
    prefix = "- " + label + ":"
    for line in text.splitlines():
        if line.startswith(prefix):
            return line[len(prefix) :].strip()
    return ""


def extract_first_milestone_title(text: str) -> str:
    for line in text.splitlines():
        if line.startswith("### "):
            return line[4:].strip()
    return ""


def render_bullets(items: list[str]) -> str:
    return "\n".join("- " + item for item in items)


def render_numbered(items: list[str]) -> str:
    return "\n".join(f"{index}. {item}" for index, item in enumerate(items, start=1))


def format_items(items: list[str], empty_message: str) -> str:
    if not items:
        return empty_message
    return "; ".join(items)


def write_start_pack() -> Path:
    start_pack = ROOT / "agent_start_pack.md"

    project_brief = load_text(ROOT / "project_brief.yaml")
    research = load_text(ROOT / "04-solution-research.md")
    user_guide = load_text(ROOT / "00-user-guide.md")
    roadmap = load_text(ROOT / "01-roadmap.md")

    summary_lines = [
        "Projeto: " + (extract_yaml_like_scalar(project_brief, "project_name") or PROJECT_NAME),
        "Workflow: " + (extract_yaml_like_scalar(project_brief, "workflow_id") or WORKFLOW_ID),
        "Objetivo inicial: " + (extract_yaml_like_scalar(project_brief, "initial_objective") or "Consultar project_brief.yaml"),
        "Resultado final esperado: " + (extract_yaml_like_scalar(project_brief, "final_outcome") or "Consultar project_brief.yaml"),
        "Usuarios: " + (extract_yaml_like_scalar(project_brief, "users") or "Consultar project_brief.yaml"),
        "Prazo: " + (extract_yaml_like_scalar(project_brief, "deadline") or "Consultar project_brief.yaml"),
    ]
    research_lines = [
        "Status: " + (extract_yaml_like_scalar(project_brief, "research_status") or "approved"),
        "Resumo executivo: " + (extract_section_excerpt(research, "## Resumo executivo") or "Consultar 04-solution-research.md"),
    ]
    current_state_lines = [
        "Onde estamos: " + (extract_bullet_value(user_guide, "Onde estamos") or "Consultar 00-user-guide.md"),
        "Proximo passo: " + (extract_bullet_value(user_guide, "Proximo passo") or "Consultar 00-user-guide.md"),
        "Marco de referencia: " + (extract_first_milestone_title(roadmap) or "Consultar 01-roadmap.md"),
    ]
    memory_lines = [
        "Arquivos-base: " + ", ".join(CORE_MEMORY_FILES),
        "Registros essenciais do workflow: "
        + format_items(WORKFLOW_MEMORY_ESSENTIALS, "Sem registros especificos alem da memoria base."),
        "Processos adicionais informados: "
        + format_items(ADDITIONAL_MEMORY_PROCESSES, "Nenhum processo adicional informado."),
    ]
    sections = [
        "# Agent Start Pack",
        "",
        "Gerado em: " + datetime.now(timezone.utc).isoformat(),
        "",
        "## Resumo do Projeto",
        "",
        render_bullets(summary_lines),
        "",
        "## Status Aprovado da Pesquisa",
        "",
        render_bullets(research_lines),
        "",
        "## Ponto Atual de Retomada",
        "",
        render_bullets(current_state_lines),
        "",
        "## Ordem de Leitura Recomendada",
        "",
        render_numbered(READING_ORDER),
        "",
        "## Proximos Passos Canonicos",
        "",
        render_numbered(NEXT_STEPS),
        "",
        "## Memoria Essencial",
        "",
        render_bullets(memory_lines),
        "",
        "## Estrutura do Orquestrador Local",
        "",
        render_bullets(LOCAL_STRUCTURE_DIRS),
    ]
    start_pack.write_text("\n".join(sections).rstrip() + "\n", encoding="utf-8")
    return start_pack


def print_next_steps() -> None:
    print("Proximos passos canonicos:")
    for index, step in enumerate(NEXT_STEPS, start=1):
        print(f"{index}. {step}")


def start() -> int:
    start_pack = write_start_pack()
    print("Projeto: " + PROJECT_NAME)
    print("Workflow: " + WORKFLOW_ID)
    print(f"Start pack gerado em: {start_pack}")
    print_next_steps()
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Orquestrador local do projeto.")
    subparsers = parser.add_subparsers(dest="command")

    start_parser = subparsers.add_parser(
        "start",
        help="Prepara o pacote inicial do orquestrador local.",
    )
    start_parser.set_defaults(handler=lambda _args: start())
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    if not hasattr(args, "handler"):
        parser.print_help()
        return 1
    return int(args.handler(args))


if __name__ == "__main__":
    raise SystemExit(main())
