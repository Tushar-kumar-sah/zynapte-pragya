const https = require('https');

function getWithRedirect(url) {
  https.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
  }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      const nextUrl = res.headers.location.startsWith('http') ? res.headers.location : 'https://unsplash.com' + res.headers.location;
      console.log('Redirecting to:', nextUrl);
      return getWithRedirect(nextUrl);
    }
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      console.log('Final Status:', res.statusCode);
      const m = d.match(/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g);
      console.log('Matches:', m ? m.length : 0);
      if (m) {
        const u = [...new Set(m)];
        console.log('Unique:', u.length);
        console.log(u.slice(0, 15));
      }
    });
  });
}

getWithRedirect('https://unsplash.com/s/photos/indian-student');
