const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public');
  const images = ['logo.jpg', 'flyers1.jpg', 'flyers2.jpg'];

  for (const imageName of images) {
    const inputPath = path.join(publicDir, imageName);
    const outputPath = path.join(publicDir, imageName.replace('.jpg', '.webp'));

    try {
      await sharp(inputPath)
        .resize(1200, 800, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✅ Optimized ${imageName} -> ${imageName.replace('.jpg', '.webp')}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }
}

optimizeImages().catch(console.error);
