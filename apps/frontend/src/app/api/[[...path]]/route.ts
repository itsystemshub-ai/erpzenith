import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet'
import { AppModule } from '../../../backend/src/app.module'

// Cache the app instance for serverless function reuse
let cachedApp: INestApplication | null = null

async function createNestApp(): Promise<INestApplication> {
  if (cachedApp) {
    return cachedApp
  }

  const app = await NestFactory.create(AppModule, { bodyParser: true })
  
  app.use(helmet())
  app.use(require('express').json({ limit: '50mb' }))
  app.use(require('express').urlencoded({ limit: '50mb', extended: true }))
  app.enableCors({ origin: true, credentials: true })
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  
  await app.init()
  cachedApp = app
  
  return app
}

export async function GET(req: any, res: any) {
  const app = await createNestApp()
  app.getHttpAdapter().getInstance()(req, res)
}

export async function POST(req: any, res: any) {
  const app = await createNestApp()
  app.getHttpAdapter().getInstance()(req, res)
}

export async function PUT(req: any, res: any) {
  const app = await createNestApp()
  app.getHttpAdapter().getInstance()(req, res)
}

export async function DELETE(req: any, res: any) {
  const app = await createNestApp()
  app.getHttpAdapter().getInstance()(req, res)
}

export async function PATCH(req: any, res: any) {
  const app = await createNestApp()
  app.getHttpAdapter().getInstance()(req, res)
}

export default async function handler(req: any, res: any) {
  const app = await createNestApp()
  app.getHttpAdapter().getInstance()(req, res)
}
