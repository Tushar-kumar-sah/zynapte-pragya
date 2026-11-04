import urllib.request

headers = {'User-Agent': 'PragyaSchoolERP/1.0 (https://zynapte-pragya.vercel.app; education erp)'}

urls = [
    ("cash_india.png", "https://upload.wikimedia.org/wikipedia/commons/2/23/Cash_India.png"),
]

for name, url in urls:
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(f"public/real-photos/{name}", "wb") as f:
                f.write(data)
            print(f"Downloaded {name} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error {name}: {e}")
