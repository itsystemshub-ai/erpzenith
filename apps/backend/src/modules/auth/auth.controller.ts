import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'
import { CurrentUser } from '../../common/decorators/current-user.decorator'
import { Public } from '../../common/decorators/public.decorator'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto)
  }

  @Public()
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@CurrentUser() user: any) {
    return this.authService.getProfile(user.sub)
  }
}
