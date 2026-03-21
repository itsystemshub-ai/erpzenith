import { Controller, Post, Get, Body, Req, Headers, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { User } from '../../common/decorators/user.decorator';

class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  mfaToken?: string;
}

class RefreshTokenDto {
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}

class ChangePasswordDto {
  @IsNotEmpty()
  @IsString()
  currentPassword: string;

  @IsNotEmpty()
  @IsString()
  newPassword: string;
}

class MfaDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto, @Req() req: Request) {
    const ip = req.ip;
    return this.authService.login(dto.email, dto.password, dto.mfaToken, ip);
  }

  @Post('refresh')
  async refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshToken(dto.refreshToken);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@User() user: any, @Headers('authorization') auth: string) {
    const token = auth.replace('Bearer ', '');
    return this.authService.logout(user.id, token);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe(@User() user: any) {
    return { user };
  }

  @Post('mfa/setup')
  @UseGuards(JwtAuthGuard)
  async setupMfa(@User() user: any) {
    return this.authService.setupMfa(user.id);
  }

  @Post('mfa/enable')
  @UseGuards(JwtAuthGuard)
  async enableMfa(@Body() dto: MfaDto, @User() user: any) {
    return this.authService.enableMfa(user.id, dto.token);
  }

  @Post('mfa/disable')
  @UseGuards(JwtAuthGuard)
  async disableMfa(@Body() dto: MfaDto, @User() user: any) {
    return this.authService.disableMfa(user.id, dto.token);
  }

  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  async changePassword(@Body() dto: ChangePasswordDto, @User() user: any) {
    return this.authService.changePassword(user.id, dto.currentPassword, dto.newPassword);
  }
}
