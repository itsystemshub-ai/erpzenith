import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001'

// Helper para construir la URL completa
function buildBackendUrl(path: string[] | undefined, search: string): string {
  // Filtrar segmentos vacíos y construir el path
  const cleanPath = (path || []).filter(p => p && p !== 'api').join('/')
  const pathname = cleanPath ? `/${cleanPath}` : ''
  return `${BACKEND_URL}${pathname}${search}`
}

// Helper para manejar errores
function handleError(error: unknown): NextResponse {
  console.error('Backend error:', error)
  const message = error instanceof Error ? error.message : 'Backend unavailable'
  return NextResponse.json(
    { error: 'Service unavailable', message },
    { status: 503 }
  )
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  try {
    const { path } = await params
    const url = buildBackendUrl(path, request.nextUrl.search)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers.get('Authorization') && { Authorization: request.headers.get('Authorization')! }),
      },
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return handleError(error)
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  try {
    const { path } = await params
    const url = buildBackendUrl(path, request.nextUrl.search)
    const body = await request.json()

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers.get('Authorization') && { Authorization: request.headers.get('Authorization')! }),
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return handleError(error)
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  try {
    const { path } = await params
    const url = buildBackendUrl(path, request.nextUrl.search)
    const body = await request.json()

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers.get('Authorization') && { Authorization: request.headers.get('Authorization')! }),
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return handleError(error)
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  try {
    const { path } = await params
    const url = buildBackendUrl(path, request.nextUrl.search)

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers.get('Authorization') && { Authorization: request.headers.get('Authorization')! }),
      },
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return handleError(error)
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  try {
    const { path } = await params
    const url = buildBackendUrl(path, request.nextUrl.search)
    const body = await request.json()

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers.get('Authorization') && { Authorization: request.headers.get('Authorization')! }),
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    return handleError(error)
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
