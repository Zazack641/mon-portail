const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;
http.createServer((req, res) => {
  let filePath = path.join(dir, decodeURIComponent(req.url === '/' ? '/Mes outils pour apprendre.html' : req.url));
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    const ct = ext === '.html' ? 'text/html; charset=utf-8' : ext === '.css' ? 'text/css' : 'application/octet-stream';
    res.writeHead(200, {'Content-Type': ct});
    res.end(data);
  });
}).listen(process.env.PORT || 8766, () => console.log(`ready on ${process.env.PORT || 8766}`));
