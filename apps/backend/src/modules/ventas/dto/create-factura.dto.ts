import { IsString, IsArray, ValidateNested, IsNumber, Min } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

class ItemFacturaDto {
  @ApiProperty()
  @IsString()
  descripcion: string

  @ApiProperty()
  @IsNumber()
  @Min(1)
  cantidad: number

  @ApiProperty()
  @IsNumber()
  @Min(0)
  precioVES: number
}

export class CreateFacturaDto {
  @ApiProperty()
  @IsString()
  clienteId: string

  @ApiProperty({ type: [ItemFacturaDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemFacturaDto)
  items: ItemFacturaDto[]
}
