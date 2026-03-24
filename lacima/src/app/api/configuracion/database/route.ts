import { NextResponse } from "next/server";

export interface DatabaseStatus {
  connected: boolean;
  host?: string;
  database?: string;
  exporting: boolean;
  lastExport?: string;
  exportCount?: number;
  error?: string;
  backendStatus?: string;
}

// Check database connection through backend health endpoint
async function checkDatabaseConnection(): Promise<DatabaseStatus> {
  const backendUrl = process.env.BACKEND_URL || "http://localhost:3001";
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(`${backendUrl}/api/health`, {
      method: "GET",
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const data = await response.json();
      return {
        connected: data.database === 'connected',
        host: backendUrl,
        database: "neondb",
        exporting: true,
        backendStatus: data.status,
      };
    }
    
    return {
      connected: false,
      exporting: false,
      error: `Backend respondió con estado ${response.status}`,
    };
  } catch (error) {
    return {
      connected: false,
      exporting: false,
      error: error instanceof Error ? error.message : "Error al conectar con el backend",
      host: backendUrl,
    };
  }
}

export async function GET() {
  const status = await checkDatabaseConnection();
  return NextResponse.json(status);
}
