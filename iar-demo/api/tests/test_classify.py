from api.classify import classify_access_request


def test_s1_low_risk_auto_approved():
    # S1: Internal Tool + Read Only => low risk => auto-approved
    result = classify_access_request("Internal Tool", "Read Only")
    assert result["risk"] == "LOW"
    assert result["outcome"] == "AUTO_APPROVED"


def test_s2_high_risk_category_requires_manual_review():
    # S2: Production Environment => high risk => manager review
    result = classify_access_request("Production Environment", "Read Only")
    assert result["risk"] == "HIGH"
    assert result["outcome"] == "PENDING_MANAGER_REVIEW"


def test_s2_high_risk_role_requires_manual_review():
    # S2 variant: privileged role => high risk => manager review
    result = classify_access_request("Internal Tool", "Admin")
    assert result["risk"] == "HIGH"
    assert result["outcome"] == "PENDING_MANAGER_REVIEW"


def test_s4_sensitive_system_always_high_risk_example():
    # S4 in your current "brain" is represented by the sensitive category.
    # (If you later add systemName keyword rules, we can upgrade this test.)
    result = classify_access_request("Customer Data System", "Read Only")
    assert result["risk"] == "HIGH"
    assert result["outcome"] == "PENDING_MANAGER_REVIEW"
