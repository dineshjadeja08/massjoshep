const fs = require('fs');
const path = require('path');

const rootDir = 'C:/Users/VIKNESH B/OneDrive/Desktop/XenFirm/xfnew';

const dirs = [
  'src/components',
  'src/components/layout',
  'src/components/ui',
  'src/pages',
  'src/pages/services',
  'src/pages/industries',
  'src/pages/work',
  'src/pages/insights',
  'src/pages/careers',
  'src/pages/legal',
  'src/data',
  'src/lib'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(rootDir, dir), { recursive: true });
});

console.log('Directories created successfully.');
