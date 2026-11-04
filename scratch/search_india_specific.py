import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'PragyaSchoolERP/1.0 (https://zynapte-pragya.vercel.app; education erp)'}

def search(q):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|size|extmetadata"
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
                    if not title.endswith('.tif') and not title.endswith('.pdf'):
                        print(f"Title: {title} | {info.get('width')}x{info.get('height')}")
                        print(f"Desc: {desc}")
                        print(f"URL: {info.get('url')}\n")
    except Exception as e:
        print(f"Error: {e}")

search('"school in India" teacher')
search('"school in India" classroom')
search('teacher "school" India')
search('students uniform India')
search('headmaster India school')
search('principal India school')
