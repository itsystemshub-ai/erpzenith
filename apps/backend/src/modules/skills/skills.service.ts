import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { exec } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';
import * as fs from 'fs';

const execAsync = promisify(exec);

export interface TasaBcvResult {
  success: boolean;
  timestamp: string;
  rates?: {
    official: { currency: string; rate: string }[];
    banks: { bank: string; purchase: string; sale: string }[];
    intervention: { date: string; week: string; rate: string };
  };
  outputFiles?: {
    tasa_1: string;
    tasa_2: string;
    tasa_3: string;
  };
  error?: string;
}

export interface SkillInfo {
  name: string;
  path: string;
  category: string;
  description: string;
  enabled: boolean;
}

@Injectable()
export class SkillsService {
  private readonly logger = new Logger(SkillsService.name);
  private readonly skillsRoot: string;
  private readonly tasaBcvPath: string;

  constructor(private configService: ConfigService) {
    this.skillsRoot = path.resolve(process.cwd(), '..', 'packages', 'skills');
    this.tasaBcvPath = path.resolve(this.skillsRoot, 'automation', 'tasa-bcv');
  }

  /**
   * Ejecuta el script de tasa BCV y obtiene las tasas de cambio
   */
  async executeTasaBcv(): Promise<TasaBcvResult> {
    const startTime = Date.now();
    this.logger.log('Iniciando ejecución de tasa-bcv...');

    try {
      // Ejecutar el script
      const { stdout, stderr } = await execAsync(
        `node --experimental-modules src/index.js`,
        {
          cwd: this.tasaBcvPath,
          timeout: 120000, // 2 minutos timeout
          encoding: 'utf-8',
        }
      );

      if (stderr) {
        this.logger.warn(`stderr: ${stderr}`);
      }

      // Leer los archivos JSON generados
      const rates = await this.readGeneratedData();

      // Verificar archivos de salida
      const outputFiles = this.getOutputFiles();

      const executionTime = Date.now() - startTime;
      this.logger.log(`tasa-bcv completado en ${executionTime}ms`);

      return {
        success: true,
        timestamp: new Date().toISOString(),
        rates,
        outputFiles,
      };
    } catch (error) {
      this.logger.error(`Error ejecutando tasa-bcv: ${error.message}`);
      return {
        success: false,
        timestamp: new Date().toISOString(),
        error: error.message,
      };
    }
  }

  /**
   * Lee los datos JSON generados por el script
   */
  private async readGeneratedData() {
    const dataPath = path.resolve(this.tasaBcvPath, 'src', 'data');

    try {
      // Leer data0.json - Tasas oficiales
      const officialPath = path.join(dataPath, 'data0.json');
      const official = fs.existsSync(officialPath)
        ? JSON.parse(fs.readFileSync(officialPath, 'utf-8'))
        : [];

      // Leer data1.json - Tasas de bancos
      const banksPath = path.join(dataPath, 'data1.json');
      const banks = fs.existsSync(banksPath)
        ? JSON.parse(fs.readFileSync(banksPath, 'utf-8'))
        : [];

      // Leer data2.json - Tasa de intervención
      const interventionPath = path.join(dataPath, 'data2.json');
      const interventionData = fs.existsSync(interventionPath)
        ? JSON.parse(fs.readFileSync(interventionPath, 'utf-8'))
        : { date: '', week: '', rate: '' };

      return {
        official,
        banks,
        intervention: interventionData,
      };
    } catch (error) {
      this.logger.warn(`Error leyendo datos: ${error.message}`);
      return {
        official: [],
        banks: [],
        intervention: { date: '', week: '', rate: '' },
      };
    }
  }

  /**
   * Obtiene la lista de archivos de salida generados
   */
  private getOutputFiles() {
    const outputPath = path.resolve(this.tasaBcvPath, 'output');
    const files = {
      tasa_1: path.join(outputPath, 'tasa_1.png'),
      tasa_2: path.join(outputPath, 'tasa_2.png'),
      tasa_3: path.join(outputPath, 'tasa_3.png'),
    };

    // Verificar existencia y tamaño
    const result: Record<string, { exists: boolean; size?: number }> = {};
    for (const [key, filePath] of Object.entries(files)) {
      const exists = fs.existsSync(filePath);
      result[key] = {
        exists,
        size: exists ? fs.statSync(filePath).size : 0,
      };
    }

    return result as unknown as {
      tasa_1: { exists: boolean; size: number };
      tasa_2: { exists: boolean; size: number };
      tasa_3: { exists: boolean; size: number };
    };
  }

  /**
   * Obtiene la última tasa oficial del BCV
   */
  async getLatestOfficialRate(currency: string = 'USD'): Promise<{ rate: string; timestamp: string } | null> {
    try {
      const result = await this.executeTasaBcv();
      if (!result.success || !result.rates) {
        return null;
      }

      const rateEntry = result.rates.official.find(
        r => r.currency === currency
      );

      return rateEntry
        ? { rate: rateEntry.rate, timestamp: result.timestamp }
        : null;
    } catch (error) {
      this.logger.error(`Error obteniendo tasa: ${error.message}`);
      return null;
    }
  }

  /**
   * Obtiene todas las tasas de bancos
   */
  async getBankRates(): Promise<{ bank: string; purchase: string; sale: string }[]> {
    try {
      const result = await this.executeTasaBcv();
      return result?.rates?.banks || [];
    } catch (error) {
      this.logger.error(`Error obteniendo tasas de bancos: ${error.message}`);
      return [];
    }
  }

  /**
   * Obtiene la tasa de intervención cambiaria
   */
  async getInterventionRate(): Promise<{ date: string; week: string; rate: string } | null> {
    try {
      const result = await this.executeTasaBcv();
      return result?.rates?.intervention || null;
    } catch (error) {
      this.logger.error(`Error obteniendo tasa de intervención: ${error.message}`);
      return null;
    }
  }

  /**
   * Lista todas las skills disponibles
   */
  async listSkills(category?: string): Promise<SkillInfo[]> {
    const skills: SkillInfo[] = [];

    try {
      const categories = await fs.promises.readdir(this.skillsRoot, {
        withFileTypes: true,
      });

      for (const categoryDir of categories) {
        if (!categoryDir.isDirectory() || categoryDir.name === 'node_modules') {
          continue;
        }

        if (category && categoryDir.name !== category) {
          continue;
        }

        const categoryPath = path.resolve(this.skillsRoot, categoryDir.name);
        const skillsInCategory = await fs.promises.readdir(categoryPath, {
          withFileTypes: true,
        });

        for (const skillDir of skillsInCategory) {
          if (!skillDir.isDirectory()) {
            continue;
          }

          const skillPath = path.resolve(categoryPath, skillDir.name);
          const skillMdPath = path.join(skillPath, 'SKILL.md');

          let description = 'Sin descripción';
          if (fs.existsSync(skillMdPath)) {
            const content = await fs.promises.readFile(skillMdPath, 'utf-8');
            const descMatch = content.match(/description:\s*["']([^"']+)["']/);
            if (descMatch) {
              description = descMatch[1];
            }
          }

          skills.push({
            name: skillDir.name,
            path: skillPath,
            category: categoryDir.name,
            description,
            enabled: fs.existsSync(path.join(skillPath, 'package.json')),
          });
        }
      }

      return skills;
    } catch (error) {
      this.logger.error(`Error listando skills: ${error.message}`);
      return [];
    }
  }

  /**
   * Obtiene información de una skill específica
   */
  async getSkillInfo(category: string, skillName: string): Promise<SkillInfo | null> {
    try {
      const skillPath = path.resolve(this.skillsRoot, category, skillName);
      const skillMdPath = path.join(skillPath, 'SKILL.md');

      if (!fs.existsSync(skillPath)) {
        return null;
      }

      let description = 'Sin descripción';
      let content = '';
      if (fs.existsSync(skillMdPath)) {
        content = await fs.promises.readFile(skillMdPath, 'utf-8');
        const descMatch = content.match(/description:\s*["']([^"']+)["']/);
        if (descMatch) {
          description = descMatch[1];
        }
      }

      return {
        name: skillName,
        path: skillPath,
        category,
        description,
        enabled: fs.existsSync(path.join(skillPath, 'package.json')),
      };
    } catch (error) {
      this.logger.error(`Error obteniendo info de skill: ${error.message}`);
      return null;
    }
  }

  /**
   * Ejecuta una skill específica (si tiene script de ejecución)
   */
  async executeSkill(category: string, skillName: string): Promise<{ success: boolean; output: string; error?: string }> {
    try {
      const skillPath = path.resolve(this.skillsRoot, category, skillName);
      const packageJsonPath = path.join(skillPath, 'package.json');

      if (!fs.existsSync(packageJsonPath)) {
        return {
          success: false,
          output: '',
          error: 'Skill no tiene package.json',
        };
      }

      const packageJson = JSON.parse(await fs.promises.readFile(packageJsonPath, 'utf-8'));

      if (!packageJson.scripts?.start) {
        return {
          success: false,
          output: '',
          error: 'Skill no tiene script "start"',
        };
      }

      const { stdout, stderr } = await execAsync('npm start', {
        cwd: skillPath,
        timeout: 120000,
        encoding: 'utf-8',
      });

      return {
        success: true,
        output: stdout || stderr,
      };
    } catch (error) {
      this.logger.error(`Error ejecutando skill: ${error.message}`);
      return {
        success: false,
        output: '',
        error: error.message,
      };
    }
  }
}
