const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'src', 'assets', 'images');
const tempDir = path.join(__dirname, 'src', 'assets', 'images_temp');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

async function compressImages() {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    
    const inputPath = path.join(dir, file);
    const outputPath = path.join(tempDir, file);
    
    console.log(`Processing: ${file}...`);
    
    try {
      const metadata = await sharp(inputPath).metadata();
      const image = sharp(inputPath);
      
      // If the image is extremely large, resize it down to max 1600px width/height while maintaining aspect ratio
      if (metadata.width > 1600 || metadata.height > 1600) {
         image.resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true });
      }
      
      // Compress
      if (file.match(/\.png$/i)) {
        await image.png({ quality: 80, compressionLevel: 8 }).toFile(outputPath);
      } else {
        await image.jpeg({ quality: 75, mozjpeg: true }).toFile(outputPath);
      }
      
      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
      
      console.log(`✅ ${file}: ${(originalSize/1024/1024).toFixed(2)}MB -> ${(newSize/1024/1024).toFixed(2)}MB (-${reduction}%)`);
      
      // Overwrite original
      fs.copyFileSync(outputPath, inputPath);
      
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err);
    }
  }
  
  // Cleanup temp dir
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log("All done!");
}

compressImages();
