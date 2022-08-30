import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'project-types';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('login')
  async login(@Body() credentials: LoginDto) {}

  @Post('register')
  async register() {}
}