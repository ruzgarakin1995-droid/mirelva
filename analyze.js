const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'agency-flower');

async function analyze() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));
  files.sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '') || '0');
    const numB = parseInt(b.replace(/\D/g, '') || '0');
    return numA - numB;
  });

  const results = {};

  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const { info, data } = await sharp(filePath).trim().toBuffer({ resolveWithObject: true });
      const metadata = await sharp(filePath).metadata();
      
      const width = metadata.width;
      const height = metadata.height;
      const trimOffsetLeft = -info.trimOffsetLeft || 0;
      const trimOffsetTop = -info.trimOffsetTop || 0;
      
      results[file] = {
        originalWidth: width,
        originalHeight: height,
        visibleWidth: info.width,
        visibleHeight: info.height,
        leftPaddingPct: (trimOffsetLeft / width) * 100,
        topPaddingPct: (trimOffsetTop / height) * 100,
        rightPaddingPct: ((width - trimOffsetLeft - info.width) / width) * 100,
        bottomPaddingPct: ((height - trimOffsetTop - info.height) / height) * 100,
      };
    } catch (e) {
      console.log(`Error on ${file}:`, e.message);
    }
  }

  console.log(JSON.stringify(results, null, 2));
}

analyze();
