import os
from PIL import Image

d = r'C:\Users\sah05\.gemini\antigravity\brain\74102ae1-3e00-459a-bf7a-359ebfd6f78a\.user_uploaded'

files = [
    'media_1793113241566_7424cd43.png',
    'media_1793114284619_256e31e8.png',
    'media_1793192868706_f97bb3a8.png',
    'media_1793199836526_09b69248.png',
    'media_1793650983711_8e20ef0a.png',
    'media_1793651006696_76d4b8ae.png',
    'media_1793651043242_dcf1922d.png'
]

for f in files:
    p = os.path.join(d, f)
    if os.path.exists(p):
        im = Image.open(p)
        print(f, im.size, im.format)
