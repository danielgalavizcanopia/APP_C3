// src/shared/ServiceContainer.ts

/** REPOSITORIOS */
import { UserRepositoryImpl } from '../modules/User/infrastructure/repository/UserRepositoryImpl';
import { LoginRepositoryImpl } from '../modules/login/infrastructure/repository/LoginRepositoryImpl';

/** CASOS DE USO - USER */
import { getUsers } from '../modules/User/application/Bin/getUsers';
import { setUsers } from '../modules/User/application/Bin/setUsers';
import { LoginUseCase } from '../modules/login/application/LoginUseCase';
import { RefreshTokenUseCase } from '../modules/login/application/RefreshTokenUseCase';

/** CASOS DE USO - AUTH */

// === INSTANCIAS ÚNICAS ===
const userRepository = new UserRepositoryImpl();
const loginRepository = new LoginRepositoryImpl(userRepository);

export const ServiceContainer = {
  user: {
    getUsers: new getUsers(userRepository),
    setUsers: new setUsers(userRepository)
  },
  auth: {
    loginUseCase: new LoginUseCase(loginRepository),
    refreshTokenUseCase: new RefreshTokenUseCase(loginRepository)
  }
};