const fs = require('fs');
const path = require('path');

const filesToCopy = [
  'index.html',
  'script.js',
  'styles.css',
  'manifest.json',
  'favicon.svg',
  'sw.js',
  'recovery_script.js'
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

console.log('Build completed successfully!');
