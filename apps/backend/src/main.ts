import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ThrottlerGuard, ThrottlerStorage } from '@nestjs/throttler'
import helmet from 'helmet'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true })

  // Security: Helmet para headers HTTP seguros
  app.use(helmet())

  // Rate limiting: 10 requests por segundo por IP
  const storageService = new ThrottlerStorage()
  app.useGlobalGuards(new ThrottlerGuard([{ ttl: 1000, limit: 10 }], storageService, app.get('Reflector')))

  // Aumentar límite para importaciones Excel grandes
  app.use(require('express').json({ limit: '50mb' }))
  app.use(require('express').urlencoded({ limit: '50mb', extended: true }))

  // CORS para Vercel
  app.enableCors({
    origin: true,
    credentials: true,
  })

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

  const config = new DocumentBuilder()
    .setTitle('ERP ZENITH API')
    .setDescription('API del Sistema ERP ZENITH para Venezuela')
    .setVersion('6.0')
    .addBearerAuth()
    .build()
  SwaggerModule.setup('api/docs', app, SwaggerModule.createDocument(app, config))

  const port = process.env.PORT || 3001
  await app.listen(port)
  console.log(`🚀 ERP ZENITH Backend corriendo en puerto ${port}`)
  console.log(`📚 Swagger docs: http://localhost:${port}/api/docs`)
  console.log(`🔒 Security: Helmet + Rate Limiting (10 req/s) activados`)
}

// Export for Vercel serverless
export const handler = async (req: any, res: any) => {
  const app = await NestFactory.create(AppModule, { bodyParser: true })
  app.use(helmet())
  const storageService = new ThrottlerStorage()
  app.useGlobalGuards(new ThrottlerGuard([{ ttl: 1000, limit: 10 }], storageService, app.get('Reflector')))
  app.use(require('express').json({ limit: '50mb' }))
  app.use(require('express').urlencoded({ limit: '50mb', extended: true }))
  app.enableCors({ origin: true, credentials: true })
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  await app.init()
  app.getHttpAdapter().getInstance()(req, res)
}

// Start server for local development
if (process.env.NODE_ENV !== 'production') {
  bootstrap()
}
