import { Body, Controller, Logger, Post } from '@nestjs/common';
import { LogDto } from './dto/LogDto';

@Controller()
export class AppController {
  private readonly logger = new Logger();

  @Post()
  async logError(@Body() logDto: LogDto): Promise<void> {
    this.logger.log(logDto.log);
  }
}
