import { IsString, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ForgotPasswordDto {
  @ApiProperty({ example: 'juanperez' })
  @IsString()
  username: string

  @ApiProperty({ example: 'NuevaPass123!' })
  @IsString()
  @MinLength(8)
  newPassword: string
}
