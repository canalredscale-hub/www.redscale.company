from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    web_root = Path(__file__).resolve().parent
    server = ThreadingHTTPServer(("127.0.0.1", 8000), NoCacheHandler)
    print(f"Serving {web_root} at http://127.0.0.1:8000")
    try:
        import os

        os.chdir(web_root)
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
