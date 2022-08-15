import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('latin')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  convert(@Query() thai: string ): string {
    return thai;
  }
}
