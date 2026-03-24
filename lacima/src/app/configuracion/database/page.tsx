"use client";
import { useState, useEffect } from "react";
import type { DatabaseStatus } from "@/app/api/configuracion/database/route";

export default function DatabaseConfigPage() {
  const [status, setStatus] = useState<DatabaseStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  const checkConnection = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/configuracion/database");
      const data = await res.json();
      setStatus(data);
      setLastCheck(new Date());
    } catch (error) {
      setStatus({
        connected: false,
        exporting: false,
        error: "Error al verificar conexión: " + (error instanceof Error ? error.message : "Error desconocido"),
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1d9e4a] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div>
              <h1 className="text-2xl font-bold">Configuración</h1>
              <p className="text-white/80 text-sm">Estado de la Base de Datos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Connection Status Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-gray-800 text-white px-6 py-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              Estado de la Conexión
            </h2>
          </div>
          
          <div className="p-6">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1d9e4a]"></div>
                <span className="ml-3 text-gray-600">Verificando conexión...</span>
              </div>
            ) : status ? (
              <div className="space-y-4">
                {/* Connection Status */}
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${status.connected ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></div>
                  <span className={`text-lg font-semibold ${status.connected ? "text-green-600" : "text-red-600"}`}>
                    {status.connected ? "CONECTADO" : "DESCONECTADO"}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Host / Servidor</p>
                    <p className="font-mono text-gray-800 truncate">
                      {status.host || "No disponible"}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Base de Datos</p>
                    <p className="font-mono text-gray-800">
                      {status.database || "No disponible"}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Exportación de Datos</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${status.exporting ? "bg-green-500" : "bg-yellow-500"}`}></div>
                      <span className={status.exporting ? "text-green-600 font-medium" : "text-yellow-600 font-medium"}>
                        {status.exporting ? "ACTIVA" : "INACTIVA"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Última Exportación</p>
                    <p className="font-mono text-gray-800">
                      {status.lastExport ? new Date(status.lastExport).toLocaleString() : "No registrada"}
                    </p>
                  </div>
                  
                  {status.exportCount !== undefined && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Total Exportaciones</p>
                      <p className="font-mono text-gray-800 text-xl font-bold">
                        {status.exportCount}
                      </p>
                    </div>
                  )}
                </div>

                {/* Error Message */}
                {status.error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-red-800 mb-1">Mensaje del Sistema</p>
                        <p className="text-sm text-red-700">{status.error}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Success Message */}
                {status.connected && status.exporting && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-green-800 mb-1">Sistema Operativo</p>
                        <p className="text-sm text-green-700">
                          La base de datos está conectada y los datos se están exportando correctamente.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={checkConnection}
            disabled={loading}
            className="bg-[#1d9e4a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#168a3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {loading ? "Verificando..." : "Volver a Verificar"}
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Recargar Página
          </button>
        </div>

        {/* Last Check Timestamp */}
        {lastCheck && (
          <p className="text-sm text-gray-500 mt-4">
            Última verificación: {lastCheck.toLocaleString()}
          </p>
        )}
      </main>
    </div>
  );
}
