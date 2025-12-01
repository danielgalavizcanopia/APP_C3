import { LoginService } from "../app/pages/publico/services/login.service";
import { authGuardService } from "./authGuard.service";
import { ProjectsService } from "./projects/projects.service";
import { UtilApiService } from "./UtilApi.service";


export const SERVICE_PROVIDERS = [
  UtilApiService,
  LoginService,
  authGuardService,

  /**PROJECT SERVICE */
  ProjectsService
];
