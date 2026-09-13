#!/usr/bin/env python3
"""Generate assets/data/popular.json from GoatCounter stats.

Reads per-page view counts from GoatCounter API and merges them with the
site's article URLs (from _studies / _notes) to produce a ranking used by
the homepage "热门" column and per-column click sorting.

Env vars:
  GOATCOUNTER_CODE   - GoatCounter site code (subdomain)
  GOATCOUNTER_API_KEY - GoatCounter API token (read access)
"""
import os
import re
import json
import urllib.request
from datetime import datetime, timezone

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read_front_matter(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    if not text.startswith("---"):
        return {}
    end = text.find("\n---", 3)
    if end == -1:
        return {}
    block = text[3:end].strip("\n")
    fm = {}
    for line in block.splitlines():
        m = re.match(r'^([A-Za-z_]+):\s*(.*)$', line)
        if m:
            key, val = m.group(1), m.group(2).strip().strip('"').strip("'")
            fm[key] = val
    return fm


def collect(slug_dir, url_prefix, cat):
    """Return list of {url, title, cat} for articles in a collection dir."""
    out = []
    d = os.path.join(REPO, slug_dir)
    if not os.path.isdir(d):
        return out
    for fn in os.listdir(d):
        if not fn.endswith(".md"):
            continue
        fm = read_front_matter(os.path.join(d, fn))
        if fm.get("exclude_from_index") in ("true", "True"):
            continue
        if fn in ("README.md", "_template.md"):
            continue
        # URL = front matter permalink if set (supports Chinese filenames);
        # otherwise fall back to the filename slug.
        permalink = (fm.get("permalink") or "").strip()
        if permalink:
            url = permalink if permalink.endswith("/") else permalink + "/"
        else:
            url = f"{url_prefix}{fn[:-3]}/"
        title = fm.get("title") or fn[:-3]
        out.append({"url": url, "title": title, "cat": cat})
    return out


def fetch_counts(code, api_key):
    url = f"https://{code}.goatcounter.com/api/v0/stats/pages?period=30d&limit=500"
    req = urllib.request.Request(url)
    req.add_header("Authorization", f"Bearer {api_key}")
    req.add_header("Accept", "application/json")
    with urllib.request.urlopen(req, timeout=60) as r:
        data = json.loads(r.read().decode("utf-8"))
    counts = {}
    for row in data.get("stats", data.get("pages", [])):
        path = (row.get("path") or "").split("?")[0]
        if not path:
            continue
        # pageviews = 总点击量（更贴合“热门/点击量”语义）；缺省回退到 visitors
        counts[path] = int(row.get("pageviews") or row.get("visitors") or 0)
    return counts


def main():
    code = os.environ.get("GOATCOUNTER_CODE", "").strip()
    key = os.environ.get("GOATCOUNTER_API_KEY", "").strip()
    if not code or not key:
        print("GOATCOUNTER_CODE / GOATCOUNTER_API_KEY not set; writing empty ranking.")
        write({})
        return

    arts = []
    arts += collect("_studies", "/studies/", "studies")
    arts += collect("_notes", "/notes/", "notes")

    try:
        counts = fetch_counts(code, key)
    except Exception as e:
        print("fetch counts failed:", e)
        write({})
        return

    for a in arts:
        a["count"] = counts.get(a["url"], 0)

    by_cat = {}
    for cat in ("studies", "notes"):
        items = sorted([a for a in arts if a["cat"] == cat],
                       key=lambda x: x["count"], reverse=True)[:5]
        by_cat[cat] = items

    popular = sorted(arts, key=lambda x: x["count"], reverse=True)[:5]

    write({"by_cat": by_cat, "popular": popular})


def write(payload):
    out_dir = os.path.join(REPO, "assets", "data")
    os.makedirs(out_dir, exist_ok=True)
    payload = dict(payload)
    payload["updated"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    with open(os.path.join(out_dir, "popular.json"), "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    print("wrote assets/data/popular.json with",
          len(payload.get("popular", [])), "popular,",
          {k: len(v) for k, v in payload.get("by_cat", {}).items()})


if __name__ == "__main__":
    main()
