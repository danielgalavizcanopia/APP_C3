// src/modules/User/infrastructure/routes/UserRoutes.ts
import { Router } from 'express';
import { asyncWrapper } from '../../../../utils/asyncWrapper';
import { UserController } from '../../../../controllers/UserControllers';

export class UserRoutes {
  static register(router: Router): void {
    const userRouter = Router();

    router.use('/users', userRouter);

    const controller = new UserController();

    userRouter.get('/getUsers', asyncWrapper(controller.getUsers));
    userRouter.post('/setUsers', asyncWrapper(controller.setUsers));
  }
}