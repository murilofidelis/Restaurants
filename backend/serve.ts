import * as jsonServer from 'json-server';
import { Express } from 'express';
import * as fs from 'fs';
import * as https from 'https';

import { handleAuthenctication } from './auth'
import { hadleAuthorization } from './authz'

const server: Express = jsonServer.create();
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', handleAuthenctication);
server.use('/orders', hadleAuthorization);

server.use(router)// Use default router

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem'),
};

https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running in https://localhost:3001');
});
