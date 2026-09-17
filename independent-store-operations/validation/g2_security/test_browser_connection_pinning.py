from __future__ import annotations

import ipaddress
from urllib.parse import urlsplit

from playwright.sync_api import sync_playwright

from app.security import resolve_and_validate, validate_url_syntax, choose_pinned_ip, UnsafeTarget

url = "https://example.com/"
target = resolve_and_validate(validate_url_syntax(url))
pinned = choose_pinned_ip(target.resolved_ips)
host = target.hostname

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox", f"--host-resolver-rules=MAP {host} {pinned}"])
    context = browser.new_context()

    def route_handler(route):
        u = urlsplit(route.request.url)
        if u.scheme in {"data", "blob", "about"}:
            return route.continue_()
        try:
            t = validate_url_syntax(route.request.url)
        except UnsafeTarget:
            return route.abort("blockedbyclient")
        if t.hostname != host:
            return route.abort("blockedbyclient")
        return route.continue_()

    context.route("**/*", route_handler)
    page = context.new_page()
    response = page.goto(url, wait_until="domcontentloaded", timeout=20000)
    assert response is not None and response.status == 200
    addr = response.server_addr()
    remote = addr.get("ipAddress")
    assert remote, addr
    assert ipaddress.ip_address(remote) == ipaddress.ip_address(pinned), {"pinned": pinned, "remote": remote}
    try:
        validate_url_syntax("http://127.0.0.1/x")
    except UnsafeTarget:
        pass
    else:
        raise AssertionError("private browser target accepted")
    browser.close()

print("PASS_G2_BROWSER_CONNECTION_PINNING", {"pinned": pinned, "remote": remote})
