import { IsString, IsNumber, IsOptional, Min } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateProductoDto {
  @ApiProperty()
  @IsString()
  sku: string

  @ApiProperty()
  @IsString()
  nombre: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  descripcion?: string

  @ApiProperty()
  @IsString()
  categoria: string

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
