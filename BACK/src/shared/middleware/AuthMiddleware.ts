// src/shared/middleware/AuthMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../../middlewares/JwtService';

export class AuthMiddleware {
  static authenticate(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Access token required' });
      return;
    }
    
    const token = authHeader.substring(7);
    const payload = JwtService.verifyAccessToken(token);
    
    if (!payload) {
      res.status(401).json({ error: 'Invalid or expired token' });
      return;
    }
    
    (req as any).user = payload;
    next();
  }
}