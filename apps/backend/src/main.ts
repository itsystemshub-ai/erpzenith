import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  const configService = app.get(ConfigService);

  // ───────────────────────────────────────────────────────────────────────────
  // SEGURIDAD
  // ───────────────────────────────────────────────────────────────────────────
  
  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }));

  // CORS
  app.enableCors({
    origin: configService.get('FRONTEND_URL', 'http://localhost:3000'),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // ───────────────────────────────────────────────────────────────────────────
  // COMPRESIÓN
  // ───────────────────────────────────────────────────────────────────────────
  
  app.use(compression());

  // ───────────────────────────────────────────────────────────────────────────
  // VALIDACIÓN GLOBAL
  // ───────────────────────────────────────────────────────────────────────────
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // ───────────────────────────────────────────────────────────────────────────
  // PREFIJO GLOBAL
  // ───────────────────────────────────────────────────────────────────────────
  
  app.setGlobalPrefix('api/v1');

  // ───────────────────────────────────────────────────────────────────────────
  // SWAGGER (Solo en desarrollo)
  // ───────────────────────────────────────────────────────────────────────────
  
  if (configService.get('NODE_ENV') !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('ERP ZENITH API')
      .setDescription('API documentation for ERP ZENITH - Sistema ERP Profesional para Venezuela')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('auth', 'Autenticación y autorización')
      .addTag('configuracion', 'Configuración del sistema')
      .build();
    
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/docs', app, document);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // HEALTH CHECK
  // ───────────────────────────────────────────────────────────────────────────

  app.use('/health', (req, res) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: configService.get('NODE_ENV'),
      version: '1.0.0',
    });
  });

  // ───────────────────────────────────────────────────────────────────────────
  // PUERTO
  // ───────────────────────────────────────────────────────────────────────────
  
  const port = configService.get('PORT', 3001);
  await app.listen(port);
  
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 ERP ZENITH Backend - Listo para conectar            ║
║                                                           ║
║   📡 API:       http://localhost:${port}                  ║
║   📚 Swagger:   http://localhost:${port}/api/docs         ║
║   ❤️  Health:    http://localhost:${port}/health           ║
║                                                           ║
║   Entorno: ${configService.get('NODE_ENV', 'development').padEnd(42)}║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
}

bootstrap();
