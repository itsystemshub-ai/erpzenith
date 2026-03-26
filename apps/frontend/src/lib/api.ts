import axios from 'axios'
import { safeStorage } from './safeStorage'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    try {
      // Leer token del auth-storage (nuevo formato)
      const raw = window.localStorage.getItem('auth-storage')
      const token = raw ? JSON.parse(raw)?.accessToken : null
      if (token) config.headers.Authorization = `Bearer ${token}`
    } catch {}
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && typeof window !== 'undefined' && typeof document !== 'undefined') {
      try { window.localStorage.removeItem('auth-storage') } catch {}
      window.dispatchEvent(new CustomEvent('auth:session-expired'))
    }
    return Promise.reject(err)
  }
)

export default api
