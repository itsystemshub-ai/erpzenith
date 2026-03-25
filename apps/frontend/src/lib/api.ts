import axios from 'axios'
import { safeStorage } from './safeStorage'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  // Solo ejecutar en cliente
  if (typeof window !== 'undefined') {
    const token = safeStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Solo manejar 401 en cliente
    if (err.response?.status === 401 && typeof window !== 'undefined') {
      safeStorage.removeItem('accessToken')
      // Usar evento personalizado en lugar de redirect directo
      window.dispatchEvent(new CustomEvent('auth:session-expired'))
    }
    return Promise.reject(err)
  }
)

export default api
