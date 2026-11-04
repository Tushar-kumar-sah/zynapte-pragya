import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'PragyaSchoolERP/1.0 (https://zynapte-pragya.vercel.app; education erp)'}

def search_awards(q):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url|size|extmetadata"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if 'query' in data and 'pages' in data['query']:
                print(f"\n=== RESULTS FOR: {q} ===")
                for p in data['query']['pages'].values():
                    info = p['imageinfo'][0]
                    desc = info.get('extmetadata', {}).get('ImageDescription', {}).get('value', '')[:120]
                    title = p['title']
                    if title.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                        print(f"Title: {title} | {info.get('width')}x{info.get('height')}")
                        print(f"Desc: {desc}")
                        print(f"URL: {info.get('url')}\n")
    except Exception as e:
        print(f"Error: {e}")

search_awards('"National Award to Teachers"')
search_awards('National Award for Teachers New Delhi')
search_awards('"Kendriya Vidyalaya" Principal')
search_awards('Principal Indian School')
