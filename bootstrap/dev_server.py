import argparse
import os
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


BOOTSTRAP_ROOT = Path(__file__).resolve().parent
INSPECTOR_CSS = BOOTSTRAP_ROOT / "dev-inspector.css"
INSPECTOR_JS = BOOTSTRAP_ROOT / "dev-inspector.js"


class NoCacheHandler(SimpleHTTPRequestHandler):
    web_root = Path.cwd()
    inject_inspector = False

    def translate_path(self, path):
        request_path = path.split("?", 1)[0].split("#", 1)[0]

        if request_path in ("", "/"):
            request_path = "/home.html"

        return str(self.web_root / request_path.lstrip("/"))

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self):
        request_path = self.path.split("?", 1)[0].split("#", 1)[0]

        if request_path == "/__redscale-dev-inspector.css":
            self._send_bootstrap_asset(INSPECTOR_CSS, "text/css; charset=utf-8")
            return

        if request_path == "/__redscale-dev-inspector.js":
            self._send_bootstrap_asset(INSPECTOR_JS, "text/javascript; charset=utf-8")
            return

        super().do_GET()

    def send_head(self):
        request_path = self.path.split("?", 1)[0].split("#", 1)[0]
        translated_path = Path(self.translate_path(self.path))

        if (
            self.inject_inspector
            and request_path.endswith(".html")
            and translated_path.is_file()
        ):
            return self._send_html_with_inspector(translated_path)

        return super().send_head()

    def _send_bootstrap_asset(self, asset_path, content_type):
        if not asset_path.is_file():
            self.send_error(HTTPStatus.NOT_FOUND, "Bootstrap asset not found")
            return

        content = asset_path.read_bytes()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def _send_html_with_inspector(self, html_path):
        content = html_path.read_text(encoding="utf-8")
        inspector_head = '<link rel="stylesheet" href="/__redscale-dev-inspector.css" data-local-inspector>'
        inspector_body = '<script src="/__redscale-dev-inspector.js" defer data-local-inspector></script>'

        if inspector_head not in content:
            content = content.replace("</head>", f"    {inspector_head}\n  </head>", 1)

        if inspector_body not in content:
            content = content.replace("</body>", f"    {inspector_body}\n  </body>", 1)

        encoded = content.encode("utf-8")
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)
        return None


def main():
    parser = argparse.ArgumentParser(description="Serve o frontend Redscale sem cache.")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", default=8000, type=int)
    parser.add_argument("--web-root", default="app/frontend")
    parser.add_argument("--inject-inspector", action="store_true")
    args = parser.parse_args()

    project_root = BOOTSTRAP_ROOT.parent
    web_root = Path(args.web_root)

    if not web_root.is_absolute():
        web_root = project_root / web_root

    web_root = web_root.resolve()

    if not (web_root / "home.html").is_file():
        raise FileNotFoundError(f"home.html nao encontrado em {web_root}")

    os.chdir(web_root)
    NoCacheHandler.web_root = web_root
    NoCacheHandler.inject_inspector = args.inject_inspector

    server = ThreadingHTTPServer((args.host, args.port), NoCacheHandler)
    print(f"Serving {web_root} at http://{args.host}:{args.port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
