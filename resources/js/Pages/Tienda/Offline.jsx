import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Offline() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans">
            <Head title="Sin Conexión | LA CIMA" />
            
            <div className="max-w-md w-full text-center space-y-10">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                    <span className="material-symbols-outlined text-[120px] text-primary relative z-10 animate-pulse">cloud_off</span>
                </div>
                
                <div className="space-y-4">
                    <h1 className="text-5xl font-black text-white uppercase tracking-tighter italic">Señal <span className="text-primary italic">Interrumpida</span></h1>
                    <p className="text-stone-400 font-medium leading-relaxed leading-relaxed">Su enlace con el hub logístico Zenith se ha perdido. Verifique sus protocolos de red.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <button 
                        onClick={() => window.location.reload()}
                        className="w-full bg-primary text-black font-black uppercase py-5 px-8 tracking-[0.2em] text-xs hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-3"
                    >
                        <span className="material-symbols-outlined">refresh</span>
                        Reestablecer Enlace
                    </button>
                    
                    <Link 
                        href="/modulo/tienda_virtual/index" 
                        className="text-stone-500 hover:text-primary font-black uppercase tracking-[0.2em] text-[10px] transition-all"
                    >
                        ← Volver a la Consola Base
                    </Link>
                </div>

                <div className="pt-12 border-t border-white/5 opacity-50">
                    <p className="text-[9px] text-stone-600 font-black uppercase tracking-[0.5em]">Error Code: NETWORK_FAIL_OVER_Z1</p>
                </div>
            </div>
        </div>
    );
}
