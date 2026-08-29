const fs = require('fs');
const path = require('path');

const filesToCopy = [
  'index.html',
  'script.js',
  'styles.css',
  'manifest.json',
  'favicon.svg',
  'sw.js',
  'recovery_script.js',
  'config.js',
  'tailwind.min.js',
  'lucide.min.js'
];

const destDir = path.join(__dirname, 'www');

console.log('Building web assets for Capacitor...');

// Create www directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Ensure capacitor.js is copied from node_modules for vanilla JS usage without a bundler
const capSrc = path.join(__dirname, 'node_modules', '@capacitor', 'core', 'dist', 'capacitor.js');
const capDest = path.join(destDir, 'capacitor.js');
if (fs.existsSync(capSrc)) {
  fs.copyFileSync(capSrc, capDest);
  console.log(`[OK] Copied: capacitor core -> www/capacitor.js`);
} else {
  console.warn(`[WARN] capacitor.js not found in node_modules!`);
}

// Copy files
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[OK] Copied: ${file} -> www/${file}`);
  } else {
    console.warn(`[WARN] File not found: ${file}`);
  }
});

// Copy assets folder recursively
const assetsSrc = path.join(__dirname, 'assets');
const assetsDest = path.join(destDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
  console.log(`[OK] Copied assets folder -> www/assets`);
}

// Regenerate config.js with remote API URL if env var is set
const cloudApiUrl = process.env.CLOUD_API_URL || process.env.VITE_CLOUD_API_URL || '';
if (cloudApiUrl) {
  const configContent = `window.__CLOUD_API_URL__ = ${JSON.stringify(cloudApiUrl.replace(/\/+$/, ''))};\n`;
  fs.writeFileSync(path.join(destDir, 'config.js'), configContent);
  console.log(`[OK] config.js → CLOUD_API_URL=${cloudApiUrl}`);
}

console.log('Build completed successfully!');
