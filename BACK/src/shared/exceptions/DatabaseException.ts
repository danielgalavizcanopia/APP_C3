import { CustomException } from './CustomException';
 
export class DatabaseException extends CustomException {
  public readonly databaseError?: string;
 
  constructor(message: string, databaseError?: string) {
    super(message);
    this.databaseError = databaseError;
  }
}