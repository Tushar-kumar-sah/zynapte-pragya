from PIL import Image
import numpy as np

img1_path = r"C:/Users/sah05/.gemini/antigravity/brain/74102ae1-3e00-459a-bf7a-359ebfd6f78a/.user_uploaded/media_1793692018629_314b6022.png"
img2_path = r"C:/Users/sah05/.gemini/antigravity/brain/74102ae1-3e00-459a-bf7a-359ebfd6f78a/.user_uploaded/media_1793692074374_cc6bc781.png"

im1 = Image.open(img1_path).convert('RGB')
im2 = Image.open(img2_path).convert('RGB')

arr1 = np.array(im1)
arr2 = np.array(im2)

print("Image 1 (User screenshot) dimensions:", im1.size)
# Sample background at various y heights in image 1 (away from text, say at x=100)
for y_ratio in [0.05, 0.2, 0.4, 0.6, 0.8]:
    y = int(im1.size[1] * y_ratio)
    r, g, b = arr1[y, 100]
    print(f"Image 1 at y={y} ({int(y_ratio*100)}%): RGB=({r}, {g}, {b}) -> #{r:02x}{g:02x}{b:02x}")

print("\nImage 2 (User uploaded swatch):", im2.size)
print("Image 2 mean RGB:", arr2.mean(axis=(0,1)))
print("Image 2 min/max RGB:", arr2.min(axis=(0,1)), arr2.max(axis=(0,1)))
