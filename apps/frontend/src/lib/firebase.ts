// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAnalytics, type Analytics } from 'firebase/analytics'

// Tu configuración de Firebase debe estar en variables de entorno
// NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, etc.

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Validar que las variables de entorno estén configuradas
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
]

const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])

if (missingVars.length > 0) {
  console.warn(
    `⚠️  Firebase no está configurado. Faltan variables de entorno: ${missingVars.join(', ')}`
  )
  console.warn(
    '   Copia .env.example a .env.local y configura tus credenciales de Firebase'
  )
}

let app: FirebaseApp | null = null
let analytics: Analytics | null = null

// Solo inicializar Firebase si las variables de entorno están configuradas
if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY && typeof window !== 'undefined') {
  try {
    app = initializeApp(firebaseConfig)
    analytics = getAnalytics(app)
  } catch (error) {
    console.error('Error inicializando Firebase:', error)
  }
}

export { app, analytics }
export default app
