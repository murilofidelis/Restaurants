import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const hadleAuthorization = (req: Request, resp: Response, next) => {

  const token = extractToken(req);

  if (!token) {
    resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
    resp.status(401).json({ message: 'É necessário estar autenticado' });
  } else {
    jwt.verify(token, 'meat-api-password', (error, decoded) => {
      if (decoded) {
        next();
      } else {
        resp.status(403).json({ message: 'Não autorizado' });
      }
    });
  }
}

function extractToken(req: Request): string {
  let token = undefined;
  if (req.headers && req.headers.authorization) {
    // Autorization: Bearer AAA.AAA.AAA
    const parts: string[] = req.headers.authorization.split(' ')
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }
  return token;
}
