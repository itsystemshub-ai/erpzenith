"use client";

import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';

export default function Paso1ConectarPage() {
  const router = useRouter();

  // TODO: Implement file upload functionality
  // TODO: Add .accdb file dropzone
  // TODO: Add OLEDB driver detection
  // TODO: Add table extraction logic

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Paso 1 - Conectar" />
      <div className="flex-1 p-6 space-y-6 max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Conectar archivo .accdb</h2>
          <p className="text-on-surface-variant mt-1">
            Sube tu base de datos Microsoft Access para extraer las tablas disponibles.
          </p>
        </div>

        {/* Placeholder content */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">cloud_upload</span>
          <h3 className="font-bold text-on-surface text-lg">Subir archivo .accdb</h3>
          <p className="text-on-surface-variant text-sm mt-2 max-w-md">
            Arrastra y suelta tu archivo CIMA2026.accdb aquí o haz clic para buscarlo en tu equipo.
          </p>
          <button 
            className="mt-4 px-6 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary/90 transition-colors"
            onClick={() => {}}
          >
            Seleccionar archivo
          </button>
          <p className="text-xs text-outline mt-4">
            Requiere driver OLEDB de Microsoft Access instalado
          </p>
        </div>

        {/* Back button */}
        <button
          onClick={() => router.push('/dashboard/migracion')}
          className="flex items-center gap-2 text-sm text-outline hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Volver a migración
        </button>

      </div>
    </div>
  );
}
