import re
from pathlib import Path

root = Path(__file__).resolve().parents[1] / "frontend" / "app"
for p in root.rglob("page.tsx"):
    t = p.read_text(encoding="utf-8")
    t2 = re.sub(
        r'<ContentPageLoader ([^=]+)="([^"]+)" />',
        r'<ContentPageLoader slug="\2" />',
        t,
    )
    if t2 != t:
        p.write_text(t2, encoding="utf-8")
        print(p)
