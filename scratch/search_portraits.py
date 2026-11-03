import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'PragyaSchoolERP/1.0 (https://zynapte-pragya.vercel.app; education erp)'}

def search(q):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|size|extmetadata"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if 'query' in data and 'pages' in data['query']:
                for p in data['query']['pages'].values():
                    info = p['imageinfo'][0]
                    desc = info.get('extmetadata', {}).get('ImageDescription', {}).get('value', '')[:80]
                    print(f"[{q}] {p['title']} | {info.get('width')}x{info.get('height')} | {desc}")
                    print(f"    {info.get('url')}")
    except Exception as e:
        print(e)

search("Indian school boy")
search("Indian school girl")
search("Indian student portrait")
search("Indian teacher classroom")
