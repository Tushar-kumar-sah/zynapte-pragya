import urllib.request
import json
import subprocess
import time
import base64
import os

# Check port
port = 3000
for p in [3000, 3001, 5173]:
    try:
        urllib.request.urlopen(f"http://localhost:{p}", timeout=1)
        port = p
        print(f"Found active Vite server on port {port}")
        break
    except Exception as e:
        pass

# Launch headless chrome with remote debugging
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
debug_port = 9223

proc = subprocess.Popen([
    chrome_path,
    f"--remote-debugging-port={debug_port}",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1280,1400",
    f"http://localhost:{port}/#core-modules"
])

time.sleep(2)

try:
    # Query targets
    targets_url = f"http://localhost:{debug_port}/json"
    req = urllib.request.urlopen(targets_url)
    targets = json.loads(req.read().decode())
    target = next(t for t in targets if t.get("type") == "page")
    ws_url = target["webSocketDebuggerUrl"]

    import asyncio
    import websockets

    async def capture():
        async with websockets.connect(ws_url) as ws:
            # Wait for render and scroll
            await ws.send(json.dumps({
                "id": 1,
                "method": "Runtime.evaluate",
                "params": {
                    "expression": """
                    (() => {
                        const el = document.querySelector('.core-modules-integration-ribbon');
                        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
                    })()
                    """
                }
            }))
            await ws.recv()
            await asyncio.sleep(1.5)

            # Screenshot ribbon & role showcase
            await ws.send(json.dumps({
                "id": 2,
                "method": "Page.captureScreenshot",
                "params": {"format": "png"}
            }))
            res = await ws.recv()
            data = json.loads(res)["result"]["data"]
            
            out_path = r"C:\Users\sah05\.gemini\antigravity\brain\74102ae1-3e00-459a-bf7a-359ebfd6f78a\verify_ribbon_and_role_showcase.png"
            with open(out_path, "wb") as f:
                f.write(base64.b64decode(data))
            print(f"Screenshot saved to {out_path}")

            # Also click 'TEACHERS' tab to verify dynamic role switching
            await ws.send(json.dumps({
                "id": 3,
                "method": "Runtime.evaluate",
                "params": {
                    "expression": """
                    (() => {
                        const btns = Array.from(document.querySelectorAll('.role-pill-btn'));
                        const teacherBtn = btns.find(b => b.textContent.includes('TEACHERS'));
                        if (teacherBtn) teacherBtn.click();
                    })()
                    """
                }
            }))
            await ws.recv()
            await asyncio.sleep(1)

            await ws.send(json.dumps({
                "id": 4,
                "method": "Page.captureScreenshot",
                "params": {"format": "png"}
            }))
            res2 = await ws.recv()
            data2 = json.loads(res2)["result"]["data"]
            out_path2 = r"C:\Users\sah05\.gemini\antigravity\brain\74102ae1-3e00-459a-bf7a-359ebfd6f78a\verify_role_showcase_teacher.png"
            with open(out_path2, "wb") as f:
                f.write(base64.b64decode(data2))
            print(f"Teacher tab screenshot saved to {out_path2}")

    asyncio.run(capture())

finally:
    proc.terminate()
