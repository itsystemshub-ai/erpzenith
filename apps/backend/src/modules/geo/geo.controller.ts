import { Controller, Get, Param } from '@nestjs/common'
import { GeoService } from './geo.service'
import { Public } from '../../common/decorators/public.decorator'

@Controller('geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Public()
  @Get('regiones')
  getRegiones() { return this.geoService.getRegiones() }

  @Public()
  @Get('estados/all')
  getAllEstados() { return this.geoService.getAllEstados() }

  @Public()
  @Get('estados/:regionId')
  getEstados(@Param('regionId') regionId: string) { return this.geoService.getEstados(regionId) }

  @Public()
  @Get('municipios/:estadoId')
  getMunicipios(@Param('estadoId') estadoId: string) { return this.geoService.getMunicipios(estadoId) }
}
