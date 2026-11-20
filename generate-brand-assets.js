import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Master Icon SVG (Square 512x512)
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
    <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A5F"/>
      <stop offset="100%" stop-color="#0B1F3A"/>
    </linearGradient>
  </defs>
  
  <!-- Geometric V Symbol -->
  <g transform="translate(48, 64)">
    <!-- Navy Facet (Upper left) -->
    <path d="M 40 40 L 155 40 L 115 140 L 0 140 Z" fill="url(#navyGrad)" />
    
    <!-- Electric Blue Facet (Left main spine down to base vertex) -->
    <path d="M 155 40 L 210 175 L 145 340 L 90 205 Z" fill="url(#blueGrad)" />
    
    <!-- Teal Wing (Right wing extending upward) -->
    <path d="M 210 175 L 375 40 L 416 140 L 251 275 L 210 380 L 145 340 Z" fill="url(#tealGrad)" />
    
    <!-- Connecting Facet Anchor -->
    <path d="M 210 175 L 251 275 L 210 380 Z" fill="#0D9488" opacity="0.9" />
  </g>
</svg>`;

// Dark background version of Icon
const iconDarkBgSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="100" fill="#0B1F3A"/>
  <defs>
    <linearGradient id="blueGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <linearGradient id="tealGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
  </defs>
  <g transform="translate(48, 64)">
    <!-- Crisp White/Lighter Facet (Upper left) -->
    <path d="M 40 40 L 155 40 L 115 140 L 0 140 Z" fill="#FFFFFF" opacity="0.95" />
    <!-- Electric Blue Facet -->
    <path d="M 155 40 L 210 175 L 145 340 L 90 205 Z" fill="url(#blueGradDark)" />
    <!-- Teal Wing -->
    <path d="M 210 175 L 375 40 L 416 140 L 251 275 L 210 380 L 145 340 Z" fill="url(#tealGradDark)" />
    <!-- Anchor -->
    <path d="M 210 175 L 251 275 L 210 380 Z" fill="#0D9488" />
  </g>
</svg>`;

// 2. Primary Logo for Light Backgrounds (600 x 160)
const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 160" width="600" height="160">
  <defs>
    <linearGradient id="lBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <linearGradient id="lTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
    <linearGradient id="lNavy" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A5F"/>
      <stop offset="100%" stop-color="#0B1F3A"/>
    </linearGradient>
  </defs>
  
  <!-- V Icon scaled -->
  <g transform="translate(20, 20) scale(0.3)">
    <path d="M 40 40 L 155 40 L 115 140 L 0 140 Z" fill="url(#lNavy)" />
    <path d="M 155 40 L 210 175 L 145 340 L 90 205 Z" fill="url(#lBlue)" />
    <path d="M 210 175 L 375 40 L 416 140 L 251 275 L 210 380 L 145 340 Z" fill="url(#lTeal)" />
    <path d="M 210 175 L 251 275 L 210 380 Z" fill="#0D9488" opacity="0.9" />
  </g>
  
  <!-- Wordmark -->
  <text x="175" y="88" font-family="'Sora', 'Inter', -apple-system, sans-serif" font-size="58" font-weight="800" fill="#0B1F3A" letter-spacing="4">VELUNO</text>
  <text x="178" y="125" font-family="'Inter', -apple-system, sans-serif" font-size="16" font-weight="600" fill="#2563EB" letter-spacing="9">SOFTTECH</text>
</svg>`;

// 3. White Logo for Dark Navy Backgrounds (600 x 160)
const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 160" width="600" height="160">
  <defs>
    <linearGradient id="dBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <linearGradient id="dTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
  </defs>
  
  <!-- V Icon scaled -->
  <g transform="translate(20, 20) scale(0.3)">
    <path d="M 40 40 L 155 40 L 115 140 L 0 140 Z" fill="#FFFFFF" opacity="0.95" />
    <path d="M 155 40 L 210 175 L 145 340 L 90 205 Z" fill="url(#dBlue)" />
    <path d="M 210 175 L 375 40 L 416 140 L 251 275 L 210 380 L 145 340 Z" fill="url(#dTeal)" />
    <path d="M 210 175 L 251 275 L 210 380 Z" fill="#0D9488" />
  </g>
  
  <!-- Wordmark -->
  <text x="175" y="88" font-family="'Sora', 'Inter', -apple-system, sans-serif" font-size="58" font-weight="800" fill="#FFFFFF" letter-spacing="4">VELUNO</text>
  <text x="178" y="125" font-family="'Inter', -apple-system, sans-serif" font-size="16" font-weight="600" fill="#14B8A6" letter-spacing="9">SOFTTECH</text>
</svg>`;

// 4. OpenGraph Social Sharing Image (1200 x 630)
const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1F3A"/>
      <stop offset="60%" stop-color="#08162B"/>
      <stop offset="100%" stop-color="#050E1B"/>
    </linearGradient>
    <linearGradient id="ogBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <linearGradient id="ogTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Subtle grid pattern -->
  <g stroke="#2563EB" stroke-opacity="0.08" stroke-width="1">
    <line x1="0" y1="100" x2="1200" y2="100" />
    <line x1="0" y1="200" x2="1200" y2="200" />
    <line x1="0" y1="300" x2="1200" y2="300" />
    <line x1="0" y1="400" x2="1200" y2="400" />
    <line x1="0" y1="500" x2="1200" y2="500" />
    <line x1="200" y1="0" x2="200" y2="630" />
    <line x1="400" y1="0" x2="400" y2="630" />
    <line x1="600" y1="0" x2="600" y2="630" />
    <line x1="800" y1="0" x2="800" y2="630" />
    <line x1="1000" y1="0" x2="1000" y2="630" />
  </g>

  <!-- Glowing background orb -->
  <circle cx="1000" cy="180" r="300" fill="#2563EB" opacity="0.12" filter="blur(80px)"/>
  <circle cx="200" cy="450" r="250" fill="#14B8A6" opacity="0.1" filter="blur(70px)"/>

  <!-- Logo Lockup -->
  <g transform="translate(100, 110)">
    <g transform="scale(0.35)">
      <path d="M 40 40 L 155 40 L 115 140 L 0 140 Z" fill="#FFFFFF" opacity="0.95" />
      <path d="M 155 40 L 210 175 L 145 340 L 90 205 Z" fill="url(#ogBlue)" />
      <path d="M 210 175 L 375 40 L 416 140 L 251 275 L 210 380 L 145 340 Z" fill="url(#ogTeal)" />
      <path d="M 210 175 L 251 275 L 210 380 Z" fill="#0D9488" />
    </g>
    <text x="180" y="85" font-family="'Sora', 'Inter', sans-serif" font-size="64" font-weight="800" fill="#FFFFFF" letter-spacing="4">VELUNO</text>
    <text x="184" y="128" font-family="'Inter', sans-serif" font-size="18" font-weight="600" fill="#14B8A6" letter-spacing="10">SOFTTECH</text>
  </g>

  <!-- Tagline & Value Prop -->
  <text x="100" y="340" font-family="'Sora', 'Inter', sans-serif" font-size="52" font-weight="700" fill="#FFFFFF" letter-spacing="-1">
    Software that moves business forward.
  </text>
  <text x="100" y="410" font-family="'Inter', sans-serif" font-size="24" font-weight="400" fill="#94A3B8" letter-spacing="0">
    Custom Software · Web Applications · Connected Systems · Automation
  </text>

  <!-- Badges row -->
  <g transform="translate(100, 480)">
    <rect width="180" height="44" rx="8" fill="#112240" stroke="#1E3A5F" stroke-width="1.5"/>
    <text x="90" y="27" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="600" fill="#60A5FA" text-anchor="middle">VELUNO WEB</text>

    <rect x="200" width="200" height="44" rx="8" fill="#112240" stroke="#1E3A5F" stroke-width="1.5"/>
    <text x="300" y="27" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="600" fill="#14B8A6" text-anchor="middle">VELUNO PRODUCTS</text>

    <rect x="420" width="200" height="44" rx="8" fill="#112240" stroke="#1E3A5F" stroke-width="1.5"/>
    <text x="520" y="27" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="600" fill="#60A5FA" text-anchor="middle">VELUNO SYSTEMS</text>

    <rect x="640" width="190" height="44" rx="8" fill="#112240" stroke="#1E3A5F" stroke-width="1.5"/>
    <text x="735" y="27" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="600" fill="#14B8A6" text-anchor="middle">VELUNO GROWTH</text>

    <rect x="850" width="170" height="44" rx="8" fill="#112240" stroke="#1E3A5F" stroke-width="1.5"/>
    <text x="935" y="27" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="600" fill="#60A5FA" text-anchor="middle">VELUNO CARE</text>
  </g>
</svg>`;

// 5. LinkedIn Banner (1584 x 396)
const linkedinBannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1584 396" width="1584" height="396">
  <defs>
    <linearGradient id="liBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1F3A"/>
      <stop offset="60%" stop-color="#08162B"/>
      <stop offset="100%" stop-color="#050E1B"/>
    </linearGradient>
    <linearGradient id="liBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
    <linearGradient id="liTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
  </defs>
  
  <rect width="1584" height="396" fill="url(#liBg)"/>
  
  <g transform="translate(120, 90)">
    <g transform="scale(0.35)">
      <path d="M 40 40 L 155 40 L 115 140 L 0 140 Z" fill="#FFFFFF" opacity="0.95" />
      <path d="M 155 40 L 210 175 L 145 340 L 90 205 Z" fill="url(#liBlue)" />
      <path d="M 210 175 L 375 40 L 416 140 L 251 275 L 210 380 L 145 340 Z" fill="url(#liTeal)" />
      <path d="M 210 175 L 251 275 L 210 380 Z" fill="#0D9488" />
    </g>
    <text x="180" y="85" font-family="'Sora', 'Inter', sans-serif" font-size="60" font-weight="800" fill="#FFFFFF" letter-spacing="4">VELUNO</text>
    <text x="184" y="125" font-family="'Inter', sans-serif" font-size="16" font-weight="600" fill="#14B8A6" letter-spacing="10">SOFTTECH</text>
  </g>

  <text x="750" y="180" font-family="'Sora', 'Inter', sans-serif" font-size="38" font-weight="700" fill="#FFFFFF">
    Software that moves business forward.
  </text>
  <text x="750" y="230" font-family="'Inter', sans-serif" font-size="20" font-weight="400" fill="#94A3B8">
    Modern · Minimal · Enterprise · Technology-Led
  </text>
</svg>`;

async function generateAll() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write SVGs
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), logoLightSvg);
  fs.writeFileSync(path.join(publicDir, 'logo-white.svg'), logoDarkSvg);
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), iconSvg);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), iconSvg);
  fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogImageSvg);
  fs.writeFileSync(path.join(publicDir, 'linkedin-banner.svg'), linkedinBannerSvg);

  console.log('SVGs written successfully.');

  // Generate PNGs with Sharp
  await sharp(Buffer.from(logoLightSvg))
    .resize(600, 160)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Generated logo.png (600x160)');

  await sharp(Buffer.from(logoDarkSvg))
    .resize(600, 160)
    .png()
    .toFile(path.join(publicDir, 'logo-white.png'));
  console.log('Generated logo-white.png (600x160)');

  await sharp(Buffer.from(iconDarkBgSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Generated favicon.png (32x32)');

  await sharp(Buffer.from(iconDarkBgSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png (180x180)');

  await sharp(Buffer.from(iconDarkBgSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192.png'));
  console.log('Generated android-chrome-192.png (192x192)');

  await sharp(Buffer.from(iconDarkBgSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512.png'));
  console.log('Generated android-chrome-512.png (512x512)');

  await sharp(Buffer.from(ogImageSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png (1200x630)');

  await sharp(Buffer.from(linkedinBannerSvg))
    .resize(1584, 396)
    .png()
    .toFile(path.join(publicDir, 'linkedin-banner.png'));
  console.log('Generated linkedin-banner.png (1584x396)');
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
