import { CreateUserRequest } from "../domain-exceptions/CreateUserRequest";

export interface UserRepository {
  getUsers(): Promise<CreateUserRequest[]>;
  setUsers(user: CreateUserRequest): Promise<void>;
  findByEmail(Email: string): Promise<CreateUserRequest | null>;
  saveRefreshToken(Iduser: number, refreshToken: string): Promise<void>;
  invalidateRefreshToken(refreshToken: string): Promise<void>;
}