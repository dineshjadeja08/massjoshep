import sharp from 'sharp';

async function processImage() {
  const metadata = await sharp('public/logo.png').metadata();
  console.log(metadata);
}
processImage();
