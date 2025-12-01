import { CustomException } from './CustomException';
 
export class NotFoundException extends CustomException {
  constructor(message: string = 'Recurso no encontrado') {
    super(message);
  }
}