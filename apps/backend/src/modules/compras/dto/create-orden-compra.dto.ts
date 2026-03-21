import { IsString, IsArray, ValidateNested, IsNumber, Min } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

class ItemOCDto {
  @ApiProperty()
  @IsString()
  productoId: string

  @ApiProperty()
  @IsNumber()
  @Min(1)
  cantidad: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  precioUSD: number
}

export class CreateOrdenCompraDto {
  @ApiProperty()
  @IsString()
  proveedorId: string

  @ApiProperty({ type: [ItemOCDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemOCDto)
  items: ItemOCDto[]
}
