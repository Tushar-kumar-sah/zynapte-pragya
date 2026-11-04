from PIL import Image, ImageOps, ImageEnhance
import os

photos_dir = "public/real-photos"

def process_image(src_name, dst_name, target_size=(1200, 800), crop_box=None):
    src_path = os.path.join(photos_dir, src_name)
    dst_path = os.path.join(photos_dir, dst_name)
    if not os.path.exists(src_path):
        print(f"Source not found: {src_path}")
        return
    
    img = Image.open(src_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    if crop_box:
        img = img.crop(crop_box)
    
    img = ImageOps.fit(img, target_size, method=Image.Resampling.LANCZOS)
    img.save(dst_path, "JPEG", quality=90)
    print(f"Generated {dst_name} ({target_size[0]}x{target_size[1]})")

# 1. Principal inspecting Class 9A with students in KV uniform
process_image("kv_principal_inspection.png", "real-indian-principal-inspection.jpg", (1200, 800))

# 2. Principal at podium
process_image("kv_principal_portrait.jpg", "real-indian-principal-podium.jpg", (1000, 800))

# 3. Indian teacher with schoolgirls in uniform with ties and bags
process_image("students_teacher_kolkata.jpg", "real-indian-teacher-students.jpg", (1200, 800))

# 4. Indian students in formal uniform with blazers, crests, ties
process_image("students_joyful_kolkata.jpg", "real-indian-students-uniform.jpg", (1200, 800))

# 5. Indian teacher in classroom teaching students in uniform
process_image("indian_teacher_workshop.jpg", "real-indian-classroom-teacher.jpg", (1200, 800))

# 6. Indian school computer lab with students in uniform
process_image("real-bangalore-school-coding.jpg", "real-indian-admin-lab.jpg", (1200, 800))

# 7. Indian school assembly (DPS Megacity)
process_image("dps_megacity_students.jpg", "real-indian-school-assembly.jpg", (1200, 800))

# 8. Indian Rupee cash for fee counter
process_image("cash_india.png", "real-indian-fee-counter.jpg", (1200, 800))
