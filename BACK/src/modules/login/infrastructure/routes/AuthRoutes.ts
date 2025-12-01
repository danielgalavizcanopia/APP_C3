import { asyncWrapper } from '../../../../utils/asyncWrapper';
import { Router } from 'express';
import { LoginController } from '../../../../controllers/LoginController';

export class AuthRoutes {
  static register(router: Router): void {
    const authRouter = Router();
    router.use('/auth', authRouter);

    const controller = new LoginController(); // ✅ Funciona

    authRouter.post('/login', asyncWrapper(controller.login));
    authRouter.post('/logout', asyncWrapper(controller.logout));
    authRouter.get('/refresh-token', asyncWrapper(controller.refresh));
  }
}