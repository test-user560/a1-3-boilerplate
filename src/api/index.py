# 이 파일은 서버에서 실행되는 서버리스 함수입니다.
# 브라우저에서 /api 주소로 요청하면 이 코드가 실행됩니다.

import json
from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        dummy_data = {
            "title": "AI 웹 서비스 빌딩",
            "description": "서버에서 가져온 더미 데이터입니다.",
        }

        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(dummy_data).encode("utf-8"))
