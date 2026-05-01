import argparse
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class NoCacheHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        request_path = path.split("?", 1)[0].split("#", 1)[0]

        if request_path in ("", "/"):
            path = "/home.html"

        return super().translate_path(path)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    parser = argparse.ArgumentParser(description="Serve o frontend Redscale sem cache.")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", default=8000, type=int)
    args = parser.parse_args()

    web_root = Path(__file__).resolve().parent
    os.chdir(web_root)
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
