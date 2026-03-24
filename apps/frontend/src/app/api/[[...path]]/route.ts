import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ThrottlerGuard } from '@nestjs/throttler'
import helmet from 'helmet'
import { AppModule } from '../src/app.module'

let app: INestApplication

async function getNestApp() {
  if (!app) {
    app = await NestFactory.create(AppModule, { bodyParser: true })
    app.use(helmet())
    app.useGlobalGuards(new ThrottlerGuard([{ ttl: 1000, limit: 10 }]))
    app.use(require('express').json({ limit: '50mb' }))
    app.use(require('express').urlencoded({ limit: '50mb', extended: true }))
    app.enableCors({ origin: true, credentials: true })
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
    await app.init()
  }
  return app
}

export default async function handler(req: any, res: any) {
  const nestApp = await getNestApp()
  const adapter = nestApp.getHttpAdapter()
  adapter.getInstance()(req, res)
}
