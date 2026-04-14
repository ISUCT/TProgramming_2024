import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/status')
  getStatus() {
    return {
      status: 'OK',
      message: 'Tours API is running',
      timestamp: new Date().toISOString()
    };
  }

  @Get('api/version')
  getVersion() {
    return {
      version: '1.0.0',
      name: 'Tours API'
    };
  }
}