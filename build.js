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
  'config.js'
];

const destDir = path.join(__dirname, 'www');

console.log('Building web assets for Capacitor...');

// Create www directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
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

// Regenerate config.js with remote API URL if env var is set
const cloudApiUrl = process.env.CLOUD_API_URL || process.env.VITE_CLOUD_API_URL || '';
if (cloudApiUrl) {
  const configContent = `window.__CLOUD_API_URL__ = ${JSON.stringify(cloudApiUrl.replace(/\/+$/, ''))};\n`;
  fs.writeFileSync(path.join(destDir, 'config.js'), configContent);
  console.log(`[OK] config.js → CLOUD_API_URL=${cloudApiUrl}`);
}

console.log('Build completed successfully!');
