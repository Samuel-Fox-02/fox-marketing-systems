// generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---
// Replace this with your actual domain when you deploy!
const BASE_URL = 'https://foxmarketingsystems.com'; 

// List all static routes for your site
const staticRoutes = [
  '/',              // Homepage
  '/about',         // About page
  '/services',      // Services page
  '/case-studies',  // Case Studies page
  '/contact',       // Contact page
  '/blog',          // Blog listing page
  // Add any other static pages you create
];

// --- SCRIPT LOGIC ---
const generateSitemap = () => {
  console.log('Generating sitemap.xml...');
  
  const sitemapEntries = staticRoutes.map(route => {
    return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</urlset>`;

  // Ensure the dist directory exists
  const distPath = path.resolve(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }

  // Write the sitemap to the dist folder
  fs.writeFileSync(path.resolve(distPath, 'sitemap.xml'), sitemap);
  console.log('sitemap.xml generated successfully!');
};

generateSitemap();