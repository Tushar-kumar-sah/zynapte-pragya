from PIL import Image

p = 'public/real-photos/real-teacher-students-hnahthial-opt.jpg'
with Image.open(p) as im:
    w, h = im.size
    # Girl in front row with tie: around x: 0.15 to 0.30, y: 0.28 to 0.60
    # Let's crop girl with tie (front left)
    crop_box = (int(w * 0.16), int(h * 0.28), int(w * 0.32), int(h * 0.58))
    cropped = im.crop(crop_box)
    cropped = cropped.resize((240, 290), Image.Resampling.LANCZOS)
    cropped.save('public/real-student-id-ananya.jpg', 'JPEG', quality=92)
    print('Cropped ananya student ID photo')
