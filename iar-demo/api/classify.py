import json
from http.server import BaseHTTPRequestHandler
from typing import Dict, Set


HIGH_RISK_CATEGORIES: Set[str] = {
    "Customer Data System",
    "Production Environment",
}

HIGH_RISK_ROLES: Set[str] = {
    "Admin",
    "Super Admin",
}


def classify_access_request(system_category: str, access_level: str) -> Dict[str, str]:
    """
    Core risk classification logic.

    Inputs are strings coming from the web form:
      - system_category: e.g. "Internal Tool", "Production Environment"
      - access_level: e.g. "Read Only", "Admin"

    Output:
      - risk: "LOW" | "HIGH"
      - outcome: "AUTO_APPROVED" | "PENDING_MANAGER_REVIEW"
    """
    is_high_risk = (system_category in HIGH_RISK_CATEGORIES) or (access_level in HIGH_RISK_ROLES)

    return {
        "risk": "HIGH" if is_high_risk else "LOW",
        "outcome": "PENDING_MANAGER_REVIEW" if is_high_risk else "AUTO_APPROVED",
    }


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            raw_body = self.rfile.read(content_length)
            data = json.loads(raw_body.decode("utf-8"))

            system_category = data.get("systemCategory", "")
            access_level = data.get("accessLevel", "")

            response = classify_access_request(system_category, access_level)

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(response).encode("utf-8"))

        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
