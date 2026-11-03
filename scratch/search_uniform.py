import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'PragyaSchoolERP/1.0 (https://zynapte-pragya.vercel.app; education erp)'}

def search_files(q):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|size|extmetadata"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if 'query' in data and 'pages' in data['query']:
                for p in data['query']['pages'].values():
                    info = p['imageinfo'][0]
                    u = info['url']
                    title = p['title']
                    if u.lower().endswith(('.jpg', '.jpeg', '.png')):
                        print(f"TITLE: {title}")
                        print(f"URL: {u}")
    except Exception as e:
        print(e)

search_files('"school uniform" India')
