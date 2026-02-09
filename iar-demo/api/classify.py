import json
from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode("utf-8"))

            system_category = data.get("systemCategory", "")
            access_level = data.get("accessLevel", "")

            high_risk_categories = {
                "Customer Data System",
                "Production Environment",
            }

            high_risk_roles = {
                "Admin",
                "Super Admin",
            }

            is_high_risk = (
                system_category in high_risk_categories
                or access_level in high_risk_roles
            )

            response = {
                "risk": "HIGH" if is_high_risk else "LOW",
                "outcome": "PENDING_MANAGER_REVIEW"
                if is_high_risk
                else "AUTO_APPROVED",
            }

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(response).encode("utf-8"))

        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(
                json.dumps({"error": str(e)}).encode("utf-8")
            )
