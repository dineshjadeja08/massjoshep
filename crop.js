import sharp from 'sharp';

async function processImage() {
  await sharp('public/logo.png')
    .extract({ width: 45, height: 45, left: 5, top: 4 })
    .toFile('public/favicon.png');
  console.log('done');
}
processImage();
