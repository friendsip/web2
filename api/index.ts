import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Get the pathname from the request
    // On Vercel, req.url contains the full path including query string
    let pathname = req.url || '/';
    
    // Remove query string if present
    const queryIndex = pathname.indexOf('?');
    if (queryIndex !== -1) {
      pathname = pathname.substring(0, queryIndex);
    }
    
    // Normalize the pathname - remove leading slash for path.join
    let relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
    
    // Build the file path relative to dist/public
    const filePath = path.join(process.cwd(), 'dist', 'public', relativePath);
    const normalizedPath = path.normalize(filePath);

    // Security check: ensure the path is within dist/public
    const publicDir = path.join(process.cwd(), 'dist', 'public');
    if (!normalizedPath.startsWith(publicDir)) {
      return res.status(400).send('Invalid path');
    }

    // Try to serve the requested file
    if (fs.existsSync(normalizedPath) && fs.statSync(normalizedPath).isFile()) {
      const fileContent = fs.readFileSync(normalizedPath);
      const contentType = mime.lookup(normalizedPath) || 'application/octet-stream';
      res.setHeader('Content-Type', contentType);
      return res.send(fileContent);
    }

    // If it's a directory or file doesn't exist, serve index.html for client-side routing
    const indexPath = path.join(publicDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      const indexContent = fs.readFileSync(indexPath, 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      return res.send(indexContent);
    }

    res.status(404).send('Not Found');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
}
