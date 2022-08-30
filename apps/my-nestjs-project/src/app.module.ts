import { Module } from '@nestjs/common';
import { AuthController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
