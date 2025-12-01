// src/modules/login/infrastructure/controllers/LoginController.ts
import { Request, Response } from 'express';
import { LoginUseCase } from '../modules/login/application/LoginUseCase';
import { LoginCredentials } from '../modules/login/domain/LoginCredentials';
import { AuthTokens } from '../modules/login/domain/AuthTokens';
import { RefreshTokenUseCase } from '../modules/login/application/RefreshTokenUseCase';
import { ServiceContainer } from '../shared/ServiceContainer';


export class LoginController {
  // ✅ Constructor vacío → pero usa casos de uso del contenedor
  constructor() {}

  login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { Email, PasswordHash }: LoginCredentials = req.body;

      if (!Email || !PasswordHash) {
        return res.status(400).json({
          success: false,
          message: 'Email y contraseña son requeridos'
        });
      }

      const tokens: AuthTokens = await ServiceContainer.auth.loginUseCase.execute({ Email, PasswordHash });

      res.cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: '/api/auth'
      });

      return res.status(200).json({
        success: true,
        accessToken: tokens.accessToken,
        message: 'Inicio de sesión exitoso'
      });

    } catch (error: any) {
      console.error('Error en login:', error.message);
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas'
      });
    }
  };

  logout = async (req: Request, res: Response): Promise<Response> => {
    try {
      const refreshToken = req.cookies?.refreshToken;

      if (refreshToken) {
        await ServiceContainer.auth.refreshTokenUseCase.invalidateToken(refreshToken);
      }

      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/api/auth'
      });

      return res.status(200).json({
        success: true,
        message: 'Sesión cerrada correctamente'
      });

    } catch (error: any) {
      console.error('Error en logout:', error.message);
      return res.status(500).json({
        success: false,
        message: 'No se pudo cerrar la sesión'
      });
    }
  };

  refresh = async (req: Request, res: Response): Promise<Response> => {
    try {
      const refreshToken = req.cookies?.refreshToken;

      if (!refreshToken) {
        return res.status(401).json({
          success: false,
          message: 'No hay refreshToken'
        });
      }

      const newTokens: AuthTokens = await ServiceContainer.auth.refreshTokenUseCase.execute(refreshToken);

      res.cookie('refreshToken', newTokens.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: '/api/auth'
      });

      return res.status(200).json({
        success: true,
        accessToken: newTokens.accessToken,
        message: 'Token renovado'
      });

    } catch (error: any) {
      console.error('Error renovando token:', error.message);
      return res.status(403).json({
        success: false,
        message: 'Refresh token inválido o expirado'
      });
    }
  };
}