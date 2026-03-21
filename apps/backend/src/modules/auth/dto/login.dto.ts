import { IsString, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class LoginDto {
  @ApiProperty({ example: 'superdev' })
  @IsString()
  username: string

  @ApiProperty({ example: 'Zenith@Dev#2024!' })
  @IsString()
  @MinLength(6)
  password: string
}
