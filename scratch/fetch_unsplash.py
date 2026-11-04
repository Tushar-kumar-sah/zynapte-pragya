import urllib.request
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def fetch_unsplash_photos(query):
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(query)}&per_page=15"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            print(f"\n=== UNSPLASH RESULTS FOR: {query} (total: {data.get('total')}) ===")
            for item in data.get('results', []):
                desc = item.get('alt_description') or item.get('description') or 'No desc'
                img_url = item['urls']['regular']
                print(f"ID: {item['id']}")
                print(f"Desc: {desc[:80]}")
                print(f"URL: {img_url}\n")
    except Exception as e:
        print(f"Error {query}: {e}")

fetch_unsplash_photos("indian teacher")
fetch_unsplash_photos("indian school uniform")
fetch_unsplash_photos("indian principal")
fetch_unsplash_photos("indian office staff")
