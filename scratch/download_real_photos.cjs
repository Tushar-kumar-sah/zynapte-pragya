const https = require('https');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'real-photos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function download(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(outDir, filename);
    const file = fs.createWriteStream(dest);
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filename).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const stat = fs.statSync(dest);
        console.log(`Saved ${filename} (${stat.size} bytes)`);
        resolve(dest);
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  // Test Unsplash direct CDN images (100% genuine real photographs)
  const testImages = [
    // 1. Modern classroom with teacher and students
    { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80', name: 'real-classroom.jpg' },
    // 2. Students studying with books and laptop
    { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80', name: 'real-students-study.jpg' },
    // 3. Exam / writing test paper
    { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80', name: 'real-exam-writing.jpg' },
    // 4. Accounting / ledger / receipts
    { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80', name: 'real-fee-accounting.jpg' },
    // 5. School campus architecture
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80', name: 'real-campus-building.jpg' },
    // 6. Teacher instructing at blackboard/whiteboard
    { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80', name: 'real-teacher-instruct.jpg' },
    // 7. Library books academics
    { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80', name: 'real-library-books.jpg' },
    // 8. Staff meeting / faculty teamwork
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80', name: 'real-staff-meeting.jpg' },
    // 9. Digital mobile communication
    { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80', name: 'real-mobile-comm.jpg' },
    // 10. Graduation / results celebration
    { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1000&q=80', name: 'real-exam-results.jpg' }
  ];

  for (const item of testImages) {
    try {
      await download(item.url, item.name);
    } catch (e) {
      console.error('Error downloading', item.name, e.message);
    }
  }
})();
