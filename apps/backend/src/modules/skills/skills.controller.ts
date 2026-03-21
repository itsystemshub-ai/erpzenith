import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Res,
  HttpCode,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { SkillsService, TasaBcvResult, SkillInfo } from './skills.service';
import * as path from 'path';
import * as fs from 'fs';

@Controller('api/skills')
export class SkillsController {
  private readonly logger = new Logger(SkillsController.name);

  constructor(private readonly skillsService: SkillsService) {}

  /**
   * Endpoint principal - Ejecuta tasa BCV y devuelve las tasas
   */
  @Get('tasa-bcv')
  @HttpCode(HttpStatus.OK)
  async getTasaBcv(): Promise<TasaBcvResult> {
    this.logger.log('GET /api/skills/tasa-bcv');
    return this.skillsService.executeTasaBcv();
  }

  /**
   * Obtiene solo la tasa oficial del BCV
   */
  @Get('tasa-bcv/official')
  @HttpCode(HttpStatus.OK)
  async getOfficialRate(@Query('currency') currency: string = 'USD') {
    this.logger.log(`GET /api/skills/tasa-bcv/official?currency=${currency}`);
    const rate = await this.skillsService.getLatestOfficialRate(currency);
    return {
      success: !!rate,
      currency,
      rate: rate?.rate,
      timestamp: rate?.timestamp,
    };
  }

  /**
   * Obtiene todas las tasas de bancos
   */
  @Get('tasa-bcv/banks')
  @HttpCode(HttpStatus.OK)
  async getBankRates() {
    this.logger.log('GET /api/skills/tasa-bcv/banks');
    const rates = await this.skillsService.getBankRates();
    return {
      success: true,
      count: rates.length,
      rates,
    };
  }

  /**
   * Obtiene la tasa de intervención cambiaria
   */
  @Get('tasa-bcv/intervention')
  @HttpCode(HttpStatus.OK)
  async getInterventionRate() {
    this.logger.log('GET /api/skills/tasa-bcv/intervention');
    const rate = await this.skillsService.getInterventionRate();
    return {
      success: !!rate,
      rate,
    };
  }

  /**
   * Obtiene una imagen generada por tasa-bcv
   */
  @Get('tasa-bcv/image/:type')
  @HttpCode(HttpStatus.OK)
  async getTasaImage(
    @Param('type') type: 'tasa_1' | 'tasa_2' | 'tasa_3',
    @Res() res: Response
  ) {
    this.logger.log(`GET /api/skills/tasa-bcv/image/${type}`);

    const skillsRoot = path.resolve(process.cwd(), '..', 'packages', 'skills');
    const imagePath = path.resolve(
      skillsRoot,
      'automation',
      'tasa-bcv',
      'output',
      `${type}.png`
    );

    if (!fs.existsSync(imagePath)) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        error: `Imagen ${type}.png no encontrada. Ejecuta tasa-bcv primero.`,
      });
    }

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache por 1 hora
    return res.sendFile(imagePath);
  }

  /**
   * Lista todas las skills disponibles
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  async listSkills(@Query('category') category?: string): Promise<{ success: boolean; count: number; skills: SkillInfo[] }> {
    this.logger.log(`GET /api/skills${category ? `?category=${category}` : ''}`);
    const skills = await this.skillsService.listSkills(category);
    return {
      success: true,
      count: skills.length,
      skills,
    };
  }

  /**
   * Obtiene información de una skill específica
   */
  @Get(':category/:name')
  @HttpCode(HttpStatus.OK)
  async getSkillInfo(
    @Param('category') category: string,
    @Param('name') name: string
  ) {
    this.logger.log(`GET /api/skills/${category}/${name}`);
    const skill = await this.skillsService.getSkillInfo(category, name);

    if (!skill) {
      return {
        success: false,
        error: 'Skill no encontrada',
      };
    }

    return {
      success: true,
      skill,
    };
  }

  /**
   * Ejecuta una skill específica
   */
  @Post(':category/:name/execute')
  @HttpCode(HttpStatus.OK)
  async executeSkill(
    @Param('category') category: string,
    @Param('name') name: string
  ) {
    this.logger.log(`POST /api/skills/${category}/${name}/execute`);
    const result = await this.skillsService.executeSkill(category, name);
    return result;
  }

  /**
   * Health check del módulo de skills
   */
  @Get('health')
  @HttpCode(HttpStatus.OK)
  async healthCheck() {
    const skillsRoot = path.resolve(process.cwd(), '..', 'packages', 'skills');
    const tasaBcvPath = path.resolve(skillsRoot, 'automation', 'tasa-bcv');

    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      paths: {
        skillsRoot: {
          exists: fs.existsSync(skillsRoot),
          path: skillsRoot,
        },
        tasaBcv: {
          exists: fs.existsSync(tasaBcvPath),
          path: tasaBcvPath,
        },
      },
    };
  }
}
