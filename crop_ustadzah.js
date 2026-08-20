import sharp from 'sharp';

const inputPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\56061a62-84f5-4655-9fdd-1ed2402b96ce\\.user_uploaded\\media_1787214783159.jpg';
const outputPath = 'C:\\Users\\HP\\.gemini\\antigravity\\scratch\\alfatih_ngaji_online\\public\\assets\\tutor_female.jpg';

async function processImage() {
  const metadata = await sharp(inputPath).metadata();
  console.log('Original Dimensions:', metadata.width, 'x', metadata.height);

  // The Ustadzah is centered in the photo.
  // Extract a square region focused on face & greeting gesture.
  const cropSize = Math.min(metadata.width, metadata.height);
  const left = Math.floor((metadata.width - cropSize) / 2);
  const top = Math.floor((metadata.height - cropSize) / 2);

  await sharp(inputPath)
    .extract({ left, top, width: cropSize, height: cropSize })
    .resize(800, 800)
    .toFile(outputPath);

  console.log('Successfully cropped and saved Ustadzah photo to', outputPath);
}

processImage().catch(console.error);
