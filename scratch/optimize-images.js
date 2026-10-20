const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');

  console.log('--- Optimizing public images ---');

  // 1. hero-portrait
  const heroPath = path.join(publicDir, 'hero-portrait.png');
  const heroMeta = await sharp(heroPath).metadata();
  console.log(`hero-portrait original: ${heroMeta.width}x${heroMeta.height} (${Math.round(fs.statSync(heroPath).size / 1024)} KB)`);

  // Backup original just in case
  const backupPath = path.join(publicDir, 'hero-portrait-original.bak');
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(heroPath, backupPath);
  }

  // Create optimized 1200px JPEG/PNG and WebP
  // Note: Since hero-portrait is a photograph, WebP or high-quality JPEG gives the absolute best fidelity/size ratio.
  const optimizedBuf = await sharp(backupPath)
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();
  
  // Overwrite hero-portrait.png with the optimized buffer (Next.js can serve it, or we can use PNG format)
  // Let's also check PNG quantization size:
  const pngBuf = await sharp(backupPath)
    .resize(1200, null, { withoutEnlargement: true })
    .png({ quality: 85, compressionLevel: 9, effort: 7 })
    .toBuffer();

  console.log(`hero-portrait as PNG: ${Math.round(pngBuf.length / 1024)} KB`);
  console.log(`hero-portrait as JPEG: ${Math.round(optimizedBuf.length / 1024)} KB`);

  // We write the PNG buffer to hero-portrait.png to preserve transparency if any:
  fs.writeFileSync(heroPath, pngBuf);

  // Also create hero-portrait.webp (even smaller, ~60KB)
  const webpBuf = await sharp(backupPath)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 88, effort: 6 })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'hero-portrait.webp'), webpBuf);
  console.log(`hero-portrait.webp generated: ${Math.round(webpBuf.length / 1024)} KB`);

  // 2. instagram.png
  const igPath = path.join(publicDir, 'instagram.png');
  if (fs.existsSync(igPath)) {
    const igBuf = await sharp(igPath)
      .resize(400, null, { withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(igPath, igBuf);
    console.log(`instagram.png optimized to: ${Math.round(igBuf.length / 1024)} KB`);
  }

  // 3. linkedin.png
  const liPath = path.join(publicDir, 'linkedin.png');
  if (fs.existsSync(liPath)) {
    const liBuf = await sharp(liPath)
      .resize(400, null, { withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(liPath, liBuf);
    console.log(`linkedin.png optimized to: ${Math.round(liBuf.length / 1024)} KB`);
  }

  // 4. preview-img.png
  const prevPath = path.join(publicDir, 'preview-img.png');
  if (fs.existsSync(prevPath)) {
    const prevBuf = await sharp(prevPath)
      .resize(1200, null, { withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(prevPath, prevBuf);
    console.log(`preview-img.png optimized to: ${Math.round(prevBuf.length / 1024)} KB`);
  }

  console.log('--- Image Optimization Complete ---');
}

run().catch(console.error);
