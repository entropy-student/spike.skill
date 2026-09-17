from __future__ import annotations

import ipaddress
import socket
from types import SimpleNamespace

import scrapy
from scrapy.crawler import CrawlerProcess

from app.crawlers.pinning import clear, get
from app.crawlers.safety_middleware import SafeURLMiddleware
from app.security import UnsafeTarget, validate_url_syntax

clear()
real_getaddrinfo = socket.getaddrinfo
calls = {"n": 0}

def fake_getaddrinfo(host, port, type=0, *args, **kwargs):
    calls["n"] += 1
    ip = "8.8.8.8" if calls["n"] == 1 else "127.0.0.1"
    return [(socket.AF_INET, socket.SOCK_STREAM, 6, "", (ip, port))]

socket.getaddrinfo = fake_getaddrinfo
try:
    req = SimpleNamespace(url="https://example.com/", meta={})
    SafeURLMiddleware().process_request(req, None)
    assert get("example.com") == "8.8.8.8"
    assert fake_getaddrinfo("example.com", 443)[0][4][0] == "127.0.0.1"
    assert get("example.com") == "8.8.8.8"
finally:
    socket.getaddrinfo = real_getaddrinfo

try:
    validate_url_syntax("http://169.254.169.254/latest/meta-data")
except UnsafeTarget:
    pass
else:
    raise AssertionError("private redirect target was not rejected")

clear()
observed = {}

class ProbeSpider(scrapy.Spider):
    name = "g2_pinning_probe"
    custom_settings = {
        "ROBOTSTXT_OBEY": False,
        "CONCURRENT_REQUESTS": 1,
        "RETRY_TIMES": 0,
        "DOWNLOAD_TIMEOUT": 20,
        "LOG_LEVEL": "ERROR",
        "DOWNLOADER_MIDDLEWARES": {"app.crawlers.safety_middleware.SafeURLMiddleware": 50},
        "TWISTED_DNS_RESOLVER": "app.crawlers.pinned_resolver.PinnedResolver",
        "USER_AGENT": "ConversionLeakAuditG2PinProbe/0.2",
    }

    async def start(self):
        yield scrapy.Request("https://example.com/", callback=self.parse_probe, dont_filter=True)

    def parse_probe(self, response):
        pinned = get("example.com")
        remote = str(response.ip_address) if response.ip_address is not None else None
        observed.update({"pinned": pinned, "remote": remote, "status": response.status})

process = CrawlerProcess()
process.crawl(ProbeSpider)
process.start()

assert observed.get("status") == 200, observed
assert observed.get("pinned"), observed
assert observed.get("remote"), observed
assert ipaddress.ip_address(observed["pinned"]) == ipaddress.ip_address(observed["remote"]), observed
print("PASS_G2_SCRAPY_CONNECTION_PINNING", observed)
