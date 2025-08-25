const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  
  // Create WebP version
  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, `${filename}.webp`));
  
  // Create optimized JPEG version
  await sharp(inputPath)
    .jpeg({ quality: 85, progressive: true })
    .toFile(path.join(outputDir, `${filename}-optimized.jpg`));
  
  // Create responsive sizes
  const sizes = [
    { width: 640, suffix: '-640w' },
    { width: 1280, suffix: '-1280w' },
    { width: 1920, suffix: '-1920w' }
  ];
  
  for (const size of sizes) {
    // WebP responsive
    await sharp(inputPath)
      .resize(size.width)
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${filename}${size.suffix}.webp`));
    
    // JPEG responsive
    await sharp(inputPath)
      .resize(size.width)
      .jpeg({ quality: 85, progressive: true })
      .toFile(path.join(outputDir, `${filename}${size.suffix}.jpg`));
  }
  
  console.log(`✅ Optimized ${filename}`);
}

// Optimize the hero image
const publicImagesDir = path.join(__dirname, '../public/images');
optimizeImage(
  path.join(publicImagesDir, 'lisbon-tram.jpg'),
  publicImagesDir
).catch(console.error);