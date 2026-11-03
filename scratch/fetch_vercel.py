import urllib.request
import re

url = 'https://zynapte-pragya.vercel.app/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    print('Fetched HTML, length:', len(html))
    css_files = re.findall(r'href=["\']([^"\']+\.css)["\']', html)
    print('CSS links:', css_files)
    with open('scratch/vercel_index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    for css in css_files:
        full_css_url = urllib.parse.urljoin(url, css)
        print('Downloading CSS from:', full_css_url)
        css_req = urllib.request.Request(full_css_url, headers={'User-Agent': 'Mozilla/5.0'})
        css_content = urllib.request.urlopen(css_req).read().decode('utf-8')
        print('CSS length:', len(css_content))
        with open('scratch/vercel_app.css', 'w', encoding='utf-8') as f:
            f.write(css_content)
except Exception as e:
    print('Error:', e)
