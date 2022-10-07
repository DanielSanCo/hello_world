import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/listaBsms')
  getBsms(): string {
    return this.appService.getBsms();
  }
  @Get('/estudoObj')
  getObjetivos(): string {
    return this.appService.getObjetivos();
  }
}
