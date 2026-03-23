import { IsString, IsEmail, IsNumber, IsDateString, IsOptional, Min } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

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

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  estadoGeo?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  municipio?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  direccion?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  telefono?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  estado?: string
}
