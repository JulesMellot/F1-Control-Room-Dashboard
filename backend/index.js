const http = require('http');
const fs = require('fs');
const path = require('path');

function serveStatic(res, filePath) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }
    const ext = path.extname(filePath);
    const map = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
    res.writeHead(200, {
      'Content-Type': map[ext] || 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/live') {
    const dataPath = path.join(__dirname, 'sampleData.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Failed to load sample data');
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
    });
  } else {
    const file = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(__dirname, '../frontend', file);
    serveStatic(res, filePath);
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
