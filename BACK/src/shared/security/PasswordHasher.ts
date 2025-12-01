import bcrypt from 'bcrypt';

export class PasswordHasher {
  private static readonly SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || '12');

  static async hash(password: string): Promise<string> {
    if (!password) {
      throw new Error('Password is required');
    }
    return await bcrypt.hash(password, this.SALT_ROUNDS);
  }

   static async compare(password: string, hash: string): Promise<boolean> {
    if (!password || !hash) {
      return false;
    }
    return await bcrypt.compare(password, hash);
  }
}