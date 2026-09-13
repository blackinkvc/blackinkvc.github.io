#!/usr/bin/env python3
"""Check that every study page has an ASCII URL.

GitHub Pages will not serve pages whose URL path contains non-ASCII
characters (e.g. a Chinese filename used as the permalink). A study file
with a Chinese filename is fine ONLY IF it declares an ASCII `permalink`
in its front matter. This script enforces that.

Exit code 0 = all good, 1 = at least one study would 404.
"""
import os
import re
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STUDIES = os.path.join(REPO, "_studies")
SKIP = {"README.md", "_template.md"}


def read_front_matter(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    if not text.startswith("---"):
        return {}
    end = text.find("\n---", 3)
    if end == -1:
        return {}
    fm = {}
    for line in text[3:end].strip("\n").splitlines():
        m = re.match(r"^([A-Za-z_]+):\s*(.*)$", line)
        if m:
            fm[m.group(1)] = m.group(2).strip().strip('"').strip("'")
    return fm


def main():
    if not os.path.isdir(STUDIES):
        print("no _studies directory; nothing to check.")
        return 0

    bad = []
    ok = 0
    for fn in sorted(os.listdir(STUDIES)):
        if not fn.endswith(".md") or fn in SKIP:
            continue
        fm = read_front_matter(os.path.join(STUDIES, fn))
        permalink = (fm.get("permalink") or "").strip()
        url = permalink or f"/studies/{fn[:-3]}/"
        if not url.endswith("/"):
            url += "/"
        try:
            url.encode("ascii")
            ascii_ok = True
        except UnicodeEncodeError:
            ascii_ok = False
        if ascii_ok:
            ok += 1
        else:
            slug = re.sub(r"[^a-zA-Z0-9]+", "-", fn[:-3]).strip("-").lower() or "my-study"
            bad.append((fn, url, slug))

    print(f"checked {ok + len(bad)} study file(s): {ok} ok, {len(bad)} bad.")
    if not bad:
        return 0

    print("\nERROR: 下面这些 study 的 URL 含非 ASCII 字符，GitHub Pages 会返回 404。")
    print("修复：给该文件 front matter 加一行 ASCII permalink（文件名可以继续用中文）：\n")
    for fn, url, slug in bad:
        print(f"  {fn}")
        print(f"    当前 URL : {url}   ← 含中文，会 404")
        print(f"    请加一行 : permalink: /studies/{slug}/\n")
    return 1


if __name__ == "__main__":
    sys.exit(main())
