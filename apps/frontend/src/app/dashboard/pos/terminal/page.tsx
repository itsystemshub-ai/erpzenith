'use client'
// Terminal POS Pro — redirige al POS principal unificado
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TerminalPOSRedirect() {
  const router = useRouter()
  useEffect(() => { router.replace('/dashboard/pos') }, [router])
  return null
}
