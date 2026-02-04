// src/shared/ServiceContainer.ts

/** REPOSITORIOS */
import { UserRepositoryImpl } from '../modules/User/infrastructure/repository/UserRepositoryImpl';
import { LoginRepositoryImpl } from '../modules/login/infrastructure/repository/LoginRepositoryImpl';

/** CASOS DE USO - USER */
import { getUsers } from '../modules/User/Bin/application/getUsers';
import { setUsers } from '../modules/User/Bin/application/setUsers';
import { LoginUseCase } from '../modules/login/Bin/application/LoginUseCase';
import { RefreshTokenUseCase } from '../modules/login/Bin/application/RefreshTokenUseCase';

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