import { IsString, IsOptional, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class RegisterDto {
  @ApiProperty({ example: 'Juan Pérez' })
  @IsString()
  name: string

  @ApiProperty({ example: 'juanperez' })
  @IsString()
  username: string

  @ApiProperty({ example: 'MiPassword123!' })
  @IsString()
  @MinLength(8)
  password: string

  @ApiProperty({ example: 'cuid_empresa', required: false })
  @IsString()
  @IsOptional()
  empresaId?: string
}
