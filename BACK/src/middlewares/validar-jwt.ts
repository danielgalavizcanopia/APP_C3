import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const validarJWT = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const header = req.header('Authorization') || '';

    if (!header) {
      res.status(401).json({
        error: 'No existe un token en la petición',
      });
      return;
    }

    const tokenParts = header.split(' ');

    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer' || !tokenParts[1]) {
      res.status(401).json({
        error: 'El token no tiene el formato correcto',
      });
      return;
    }

    const secret = process.env.CONFIG_DECRYPTION_KEY;
    if (!secret) {
      res.status(500).json({
        error: 'No se ha definido la clave secreta del token',
      });
      return;
    }

    // Verifica el token (si es inválido, lanza un error)
    jwt.verify(tokenParts[1], secret);

    next(); // continúa al siguiente middleware

  } catch (error) {
    console.error(error);
    res.status(401).json({
      error: 'Token no válido',
    });
  }
};
