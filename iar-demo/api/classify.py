import json
from http.server import BaseHTTPRequestHandler


# -------------------------------
# Core Classification Logic
# -------------------------------

HIGH_RISK_CATEGORIES = {
    "Customer Data System",
    "Production Environment",
}

HIGH_RISK_ROLES = {
    "Admin",
    "Super Admin",
}


def classify_access_request(system_category: str, access_level: str):
    """
    Core risk classification function.
    This is what pytest tests in CI.
    """

    is_high_risk = (
        system_category in HIGH_RISK_CATEGORIES
        or access_level in HIGH_RISK_ROLES
    )

    # ============================================================
    # ✅ CORRECT LOGIC (DEFAULT — SHOULD PASS ALL TESTS)
    # ============================================================

    response = {
        "risk": "HIGH" if is_high_risk else "LOW",
        "outcome": (
            "PENDING_MANAGER_REVIEW"
            if is_high_risk
            else "AUTO_APPROVED"
        ),
    }


    # ============================================================
    # ❌ DEMO BUG — UNCOMMENT THIS BLOCK TO BREAK CI
    # ============================================================

    # response = {
    #     "risk": "HIGH" if is_high_risk else "LOW",
    #     # ❌ INTENTIONAL SECURITY BUG:
    #     # All requests are auto-approved, even high-risk ones.
    #     "outcome": "AUTO_APPROVED",
    # }








    return response


# -------------------------------
# HTTP Handler (used by Vercel)
# -------------------------------

class handler(BaseHTTPRequestHandler): # pragma: no cover
    def do_POST(self): # pragma: no cover
        try:
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode("utf-8"))

            system_category = data.get("systemCategory", "")
            access_level = data.get("accessLevel", "")

            result = classify_access_request(system_category, access_level)

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(result).encode("utf-8"))

        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(
                json.dumps({"error": str(e)}).encode("utf-8")
            )
