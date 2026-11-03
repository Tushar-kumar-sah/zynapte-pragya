import urllib.request
import urllib.parse
import json
import os
from PIL import Image

out_dir = os.path.join(os.getcwd(), 'public', 'real-photos')
os.makedirs(out_dir, exist_ok=True)

headers = {'User-Agent': 'PragyaSchoolERP/1.0 (https://zynapte-pragya.vercel.app; education erp)'}

def search_wikimedia(query, limit=5):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch={urllib.parse.quote(query)}&gsrnamespace=6&gsrlimit={limit}&prop=imageinfo&iiprop=url|size|extmetadata"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if 'query' in data and 'pages' in data['query']:
                results = []
                for p in data['query']['pages'].values():
                    info = p['imageinfo'][0]
                    u = info['url']
                    if u.lower().endswith(('.jpg', '.jpeg', '.png')):
                        results.append({
                            'title': p['title'],
                            'url': u,
                            'width': info.get('width', 0),
                            'height': info.get('height', 0)
                        })
                return results
    except Exception as e:
        print(f"Error searching {query}: {e}")
    return []

queries = [
    ("School library in India", "real-indian-library.jpg"),
    ("Students in school uniform India", "real-indian-students-uniform.jpg"),
    ("Kendriya Vidyalaya school", "real-kendriya-vidyalaya.jpg"),
    ("School assembly India", "real-school-assembly.jpg"),
    ("School laboratory India", "real-school-lab.jpg")
]

for q, target_name in queries:
    res = search_wikimedia(q, limit=4)
    print(f"Query: {q} found {len(res)} images")
    if res:
        # Pick first with good resolution
        best = sorted(res, key=lambda x: x['width'], reverse=True)[0]
        print(f"  Downloading {best['title']} -> {target_name}")
        target_path = os.path.join(out_dir, target_name)
        try:
            req = urllib.request.Request(best['url'], headers=headers)
            with urllib.request.urlopen(req) as resp, open(target_path, 'wb') as f:
                f.write(resp.read())
            print(f"  Saved {target_name} ({os.path.getsize(target_path)} bytes)")
        except Exception as e:
            print(f"  Failed: {e}")

# Optimize all images in real-photos
print("\nOptimizing images in public/real-photos...")
for f in os.listdir(out_dir):
    if f.lower().endswith(('.jpg', '.jpeg', '.png')):
        fp = os.path.join(out_dir, f)
        try:
            with Image.open(fp) as im:
                im = im.convert('RGB')
                w, h = im.size
                if w > 1200:
                    new_h = int(h * (1200 / w))
                    im = im.resize((1200, new_h), Image.Resampling.LANCZOS)
                # save with optimized quality
                im.save(fp, 'JPEG', quality=85, optimize=True)
                print(f"Optimized {f}: {im.size} ({os.path.getsize(fp)} bytes)")
        except Exception as e:
            print(f"Error optimizing {f}: {e}")
