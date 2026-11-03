from PIL import Image
import numpy as np

img_path = r"C:/Users/sah05/.gemini/antigravity/brain/74102ae1-3e00-459a-bf7a-359ebfd6f78a/.user_uploaded/media_1793692074374_cc6bc781.png"
img = Image.open(img_path).convert('RGB')
arr = np.array(img)

# Sample several points
h, w, _ = arr.shape
print(f"Image dimensions: {w}x{h}")

samples = [
    (h // 4, w // 4),
    (h // 2, w // 2),
    (3 * h // 4, 3 * w // 4),
    (10, 10),
    (h - 10, w - 10)
]

for y, x in samples:
    r, g, b = arr[y, x]
    hex_val = f"#{r:02x}{g:02x}{b:02x}"
    print(f"Sample at ({x}, {y}): RGB=({r}, {g}, {b}) -> {hex_val}")

# Also check average color
avg_color = arr.mean(axis=(0,1))
avg_hex = f"#{int(avg_color[0]):02x}{int(avg_color[1]):02x}{int(avg_color[2]):02x}"
print(f"Average color: {avg_color} -> {avg_hex}")
