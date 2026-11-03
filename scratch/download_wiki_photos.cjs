const https = require('https');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'real-photos');

function download(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(outDir, filename);
    const file = fs.createWriteStream(dest);
    
    https.get(url, {
      headers: {
        'User-Agent': 'PragyaSchoolERP/1.0 (https://zynapte-pragya.vercel.app; education erp)'
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
  const wikiImages = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Students_at_a_school_in_Bangalore%2C_India_learning_to_code_on_Progate.jpg', name: 'real-bangalore-school-coding.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Tamil_Nadu_school_kids.jpg', name: 'real-indian-school-kids.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/School_students_--_girls_--_at_a_school_in_Goa%2C_India.jpg', name: 'real-indian-schoolgirls.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Boys_teacher_and_computers_Gujarat.jpg', name: 'real-indian-teacher-computer.jpg' }
  ];

  for (const item of wikiImages) {
    try {
      await download(item.url, item.name);
    } catch (e) {
      console.error('Error downloading', item.name, e.message);
    }
  }
})();
