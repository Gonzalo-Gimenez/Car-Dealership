from pathlib import Path
from rembg import new_session, remove
from PIL import Image

src = Path(r"c:\Users\Gonza\Documents\Gonza\Portfolio\Proyectos\aurelia\frontend\public\vehicles")
dst = src / "cut"
dst.mkdir(exist_ok=True)
skip = {"hero-home.png", "promo-cla.png", "promo-cle-cabrio.png", "promo-glc-coupe.png"}
session = new_session("u2net")

for p in sorted(src.glob("*.png")):
    if p.name in skip:
        continue
    out = dst / p.name
    img = Image.open(p).convert("RGBA")
    cut = remove(img, session=session)
    cut.save(out)
    print("ok", p.name)
