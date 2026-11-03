const https = require('https');
const fs = require('fs');

async function fetchDd(query) {
  return new Promise((resolve) => {
    https.get('https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let html = '';
      res.on('data', c => html += c);
      res.on('end', () => {
        const matches = [...html.matchAll(/https%3A%2F%2Funsplash\.com%2Fphotos%2F([a-zA-Z0-9_-]+)/g)].map(m => decodeURIComponent(m[1]));
        const unique = [...new Set(matches)];
        resolve(unique);
      });
    }).on('error', () => resolve([]));
  });
}

(async () => {
  const queries = [
    'site:unsplash.com/photos/ "indian" "student"',
    'site:unsplash.com/photos/ "indian" "school"',
    'site:unsplash.com/photos/ "teacher" "classroom"',
    'site:unsplash.com/photos/ "student" "library"',
    'site:unsplash.com/photos/ "computer" "laboratory" "school"',
    'site:unsplash.com/photos/ "accounting" "office" "receipt"',
    'site:unsplash.com/photos/ "exam" "test" "students"',
    'site:unsplash.com/photos/ "school" "building" "campus"'
  ];

  for (const q of queries) {
    const ids = await fetchDd(q);
    console.log(q, '=>', ids.slice(0, 5));
  }
})();
