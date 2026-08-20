import sharp from 'sharp';
import path from 'path';

const inputPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\56061a62-84f5-4655-9fdd-1ed2402b96ce\\.user_uploaded\\media_1787204046905.jpg';
const outputPath = 'C:\\Users\\HP\\.gemini\\antigravity\\scratch\\alfatih_ngaji_online\\public\\assets\\tutor_male.jpg';

async function processImage() {
  const metadata = await sharp(inputPath).metadata();
  console.log('Original Dimensions:', metadata.width, 'x', metadata.height);

  // The Ustadz is on the left side of the photo.
  // We extract a square region focusing on the Ustadz's face, peci, and hands.
  const cropSize = Math.floor(metadata.width * 0.72); // 72% of width
  const left = Math.floor(metadata.width * 0.02); // 2% from left
  const top = Math.floor(metadata.height * 0.28);  // 28% from top

  await sharp(inputPath)
    .extract({ left, top, width: cropSize, height: cropSize })
    .resize(800, 800)
    .toFile(outputPath);

  console.log('Successfully cropped and saved to', outputPath);
}

processImage().catch(console.error);
