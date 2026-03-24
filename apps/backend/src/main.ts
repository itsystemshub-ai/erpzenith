import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import helmet from 'helmet'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true })

  // Security: Helmet para headers HTTP seguros
  app.use(helmet())

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
  console.log(`🔒 Security: Helmet activado`)
}

// Export for Vercel serverless
export const handler = async (req: any, res: any) => {
  const app = await NestFactory.create(AppModule, { bodyParser: true })
  app.use(helmet())
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
