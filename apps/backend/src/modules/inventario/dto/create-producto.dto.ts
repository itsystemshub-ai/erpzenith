import { IsString, IsNumber, IsOptional, Min } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateProductoDto {
  @ApiProperty()
  @IsString()
  sku: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  tipo?: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  fabricante?: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  marca?: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  material?: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  espesor?: string

  @ApiProperty()
  @IsString()
  nombre: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  descripcion?: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  medidas?: string

  @ApiProperty({ default: 'UND' })
  @IsOptional()
  @IsString()
  unidad?: string

  @ApiProperty()
  @IsNumber()
  @Min(0)
  precioUSD: number

  @ApiProperty({ default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  stockMin?: number
}
