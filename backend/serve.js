const jsonServer = require('json-server');
const fs = require('fs');
const https = require('https');
const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(router)// Use default router

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem'),
};

https.createServer(options, server).listen(3000, () => {
  console.log('JSON Server is running in https://localhost:3000');
});
