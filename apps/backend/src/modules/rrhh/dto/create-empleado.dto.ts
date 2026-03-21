import { IsString, IsEmail, IsNumber, IsDateString, Min } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateEmpleadoDto {
  @ApiProperty()
  @IsString()
  cedula: string

  @ApiProperty()
  @IsString()
  nombre: string

  @ApiProperty()
  @IsString()
  apellido: string

  @ApiProperty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsString()
  cargo: string

  @ApiProperty()
  @IsString()
  departamento: string

  @ApiProperty()
  @IsNumber()
  @Min(0)
  salarioUSD: number

  @ApiProperty()
  @IsDateString()
  fechaIngreso: string
}
