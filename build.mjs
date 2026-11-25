import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcDir = path.join(root, 'src');
const publicDir = path.join(root, 'public');
const outDir = path.join(root, 'out');

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name);
    const dstPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, dstPath);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

function walkFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

fs.rmSync(outDir, { recursive: true, force: true });
copyDir(publicDir, outDir);
copyDir(srcDir, outDir);

const requiredFiles = [
  'app-ads.txt',
  'CNAME',
  'googlee3d21d6c43012ca3.html',
  'index.html',
  'projets/index.html',
  'thetelugu/index.html',
  'thetelugu/confidentialite/index.html',
  'thetelugu/conditions/index.html',
  '404.html',
  'styles/site.css',
  'scripts/site.js',
];

for (const rel of requiredFiles) {
  const target = path.join(outDir, rel);
  if (!fs.existsSync(target)) {
    throw new Error(`Missing required build output: ${rel}`);
  }
}

const appAds = fs.readFileSync(path.join(outDir, 'app-ads.txt'), 'utf8');
if (!appAds.includes('pub-4927746832143239')) {
  throw new Error('app-ads.txt validation failed: missing AdMob publisher ID');
}

// Verify all local root-relative href/src/srcset paths in built HTML files
const htmlFiles = walkFiles(outDir).filter((file) => file.endsWith('.html'));
const assetPathRe = /\b(?:href|src)="(\/[^"#?]*)"/g;
const srcsetRe = /\bsrcset="([^"]*)"/g;

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  for (const match of html.matchAll(assetPathRe)) {
    const urlPath = match[1];
    if (urlPath === '/') continue;
    const clean = urlPath.replace(/^\/+/, '');
    const direct = path.join(outDir, clean);
    const asIndex = path.join(outDir, clean, 'index.html');
    if (!fs.existsSync(direct) && !fs.existsSync(asIndex)) {
      throw new Error(`Broken internal reference "${urlPath}" in ${path.relative(outDir, htmlFile)}`);
    }
  }
  for (const match of html.matchAll(srcsetRe)) {
    const entries = match[1].split(',').map((s) => s.trim().split(/\s+/)[0]).filter(Boolean);
    for (const candidate of entries) {
      if (!candidate.startsWith('/')) continue;
      const target = path.join(outDir, candidate.replace(/^\/+/, ''));
      if (!fs.existsSync(target)) {
        throw new Error(`Broken srcset asset "${candidate}" in ${path.relative(outDir, htmlFile)}`);
      }
    }
  }
}

console.log(`Static build complete: ${htmlFiles.length} HTML pages verified in ./out`);
