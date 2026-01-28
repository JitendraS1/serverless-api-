const http = require('http');
const url = require('url');
const voucherHandler = require('./api/voucher');

// Load environment variables
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Route handling
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  
  if (path === '/api/voucher' || path === '/api/nestoria-payment-voucher/voucherData') {
    await voucherHandler(req, res);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});