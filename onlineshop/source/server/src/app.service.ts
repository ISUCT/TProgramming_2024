import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Tours API! Available endpoints: /api/status, /api/version';
  }
}