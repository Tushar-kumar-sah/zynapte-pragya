from PIL import Image
import os

kids_path = 'public/real-photos/real-indian-school-kids.jpg'
out_path = 'public/real-student-id-photo.jpg'

if os.path.exists(kids_path):
    with Image.open(kids_path) as im:
        # crop one smiling student's face for passport photo
        w, h = im.size
        # The image has kids in uniform, let's crop a clean portrait
        crop_box = (int(w * 0.35), int(h * 0.15), int(w * 0.65), int(h * 0.55))
        cropped = im.crop(crop_box)
        cropped = cropped.resize((240, 280), Image.Resampling.LANCZOS)
        cropped.save(out_path, 'JPEG', quality=90)
        print(f"Created real student ID photo: {out_path}")
