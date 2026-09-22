"""
Compress and standardize the site's own photos.

Renames the four local JPGs to the `xxx-xxx-xxx-N.jpg` convention and
re-encodes them as progressive JPEGs (max edge 1600px, quality 82) so the
static site loads faster. Run once: `python scripts/optimize-images.py`.
"""
import os
from PIL import Image

SRC = os.path.join(os.path.dirname(__file__), "..", "public", "images")
MAX_EDGE = 1600
QUALITY = 82

MAPPING = [
    ("adalaj-stepwell-hero.jpg", "adalaj-stepwell-guide-1.jpg"),
    ("adalaj-stepwell-interior.jpg", "adalaj-stepwell-guide-2.jpg"),
    ("adalaj-stepwell-detail.jpg", "adalaj-stepwell-guide-3.jpg"),
    ("stepwell-carvings.jpg", "adalaj-stepwell-guide-4.jpg"),
]

for old, new in MAPPING:
    src = os.path.join(SRC, old)
    if not os.path.exists(src):
        print(f"skip (missing): {old}")
        continue
    im = Image.open(src).convert("RGB")
    w, h = im.size
    if max(w, h) > MAX_EDGE:
        if w >= h:
            im = im.resize((MAX_EDGE, round(h * MAX_EDGE / w)))
        else:
            im = im.resize((round(w * MAX_EDGE / h), MAX_EDGE))
    out = os.path.join(SRC, new)
    im.save(out, "JPEG", quality=QUALITY, progressive=True, optimize=True)
    size_kb = os.path.getsize(out) // 1024
    print(f"{new}: {im.size[0]}x{im.size[1]}, {size_kb} KB")
    os.remove(src)
    print(f"removed original: {old}")
