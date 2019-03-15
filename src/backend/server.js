import http from 'http';
import fs from 'fs';
import path from 'path';

const indexHtml = fs.readFileSync(path.join(__dirname, '/../../dist/index.html'));

http.createServer((rq, rp) => {
  if (rq.url === '/') {
    rp.writeHead(200, { 'Content-Type': 'text/html' });
    rp.end(indexHtml);
  } else if (rq.url === '/bundle.js') {
    const bundleJs = fs.readFileSync(path.join(__dirname, '/../../dist/bundle.js'));
    rp.writeHead(200, { 'Content-Type': 'application/javascript' });
    rp.end(bundleJs);
  } else {
    rp.writeHead(404, { 'Content-Type': 'text/plain' });
    rp.end('Not found');
  }
}).listen(8080);

console.log('Server running at: http://127.0.0.1:8080/');
