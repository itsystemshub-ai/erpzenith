import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AuditoriaDeInventarioFisico() {
    const auditData = [
        { id: 'KIT-3422-MX', location: 'Estante A-12', title: 'Bomba de Agua Toyota Hilux 2.5', theoretical: '24 UND', count: 18, diff: -6, critical: true },
        { id: 'FILT-900-OIL', location: 'Estante A-04', title: 'Filtro Aceite Premium Genérico', theoretical: '150 UND', count: 150, diff: 0, critical: false },
        { id: 'FR-8821-PAD', location: 'Estante A-09', title: 'Pastillas de Freno Ford Explorer', theoretical: '42 UND', count: 44, diff: +2, critical: false },
        { id: 'RAD-400-ALU', location: 'Estante A-15', title: 'Radiador Aluminio Chevrolet Silverado 2018', theoretical: '8 UND', count: null, diff: null, pending: true }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline">
                    <span className="material-symbols-outlined">inventory</span>
                    <span>Auditoría de Almacén</span>
                </div>
            }
        >
            <Head title="Auditoría de Inventario Físico" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-primary font-headline font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Heavy Duty Assets</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none">Blind Count Protocol</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Toma Física <br/> <span className="text-stone-700">Conteo Ciego</span></h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-outline-variant/10 rounded-2xl hover:border-primary/50 transition-all text-[10px] font-black uppercase tracking-widest text-stone-300 active:scale-95 shadow-xl">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Exportar PDF
                        </button>
                        <button className="flex items-center gap-3 px-8 py-4 bg-primary text-black rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-[0_0_40px_rgba(154,205,50,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-lg">sync_alt</span>
                            Sincronizar y Ajustar
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-10">
                    {/* Left Column: Config & Stats */}
                    <aside className="col-span-12 lg:col-span-4 space-y-10">
                        {/* Parameters Panel */}
                        <div className="bg-zinc-900 p-10 rounded-[40px] border-l-[12px] border-l-primary border border-outline-variant/10 shadow-3xl">
                            <h3 className="font-headline font-black text-lg uppercase tracking-tight text-white mb-10 flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                PARÁMETROS DE AUDITORÍA
                            </h3>
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black text-stone-700 uppercase tracking-[0.3em] ml-2">Seleccionar Pasillo</label>
                                    <select className="w-full bg-zinc-950 border-outline-variant/10 text-stone-400 p-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-inner appearance-none focus:ring-1 focus:ring-primary border-none">
                                        <option>PASILLO A - MOTOR Y TRANSMISIÓN</option>
                                        <option>PASILLO B - SUSPENSIÓN Y FRENOS</option>
                                        <option>PASILLO C - ELÉCTRICO Y LUCES</option>
                                        <option>PASILLO D - ACCESORIOS Y CARROCERÍA</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black text-stone-700 uppercase tracking-[0.3em] ml-2">Categoría Crítica</label>
                                    <select className="w-full bg-zinc-950 border-outline-variant/10 text-stone-400 p-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-inner appearance-none focus:ring-1 focus:ring-primary border-none">
                                        <option>TODAS LAS CATEGORÍAS</option>
                                        <option>REPUESTOS DE ALTA ROTACIÓN</option>
                                        <option>VALOR ALTO (PREMIUM)</option>
                                    </select>
                                </div>
                                <button className="w-full bg-zinc-950/50 border-2 border-primary text-primary font-headline font-black py-5 rounded-2xl uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all shadow-xl active:scale-95 group">
                                    INICIAR AUDITORÍA DE ZONA
                                </button>
                            </div>
                        </div>

                        {/* Session Summary Card */}
                        <div className="bg-zinc-950 rounded-[40px] p-10 border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                                <span className="material-symbols-outlined text-[120px] text-white">browse_activity</span>
                            </div>
                            <h3 className="font-headline font-black text-xs text-primary uppercase tracking-[0.4em] mb-8">Resumen de Sesión</h3>
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-6xl font-headline font-black text-white tracking-tighter">42/120</span>
                                <span className="text-[10px] font-black text-stone-600 uppercase tracking-widest mb-3">ITEMS CONTADOS</span>
                            </div>
                            <div className="w-full bg-zinc-900 h-2 rounded-full mb-8 relative overflow-hidden shadow-inner">
                                <div className="bg-primary h-full w-[35%] rounded-full shadow-[0_0_15px_#9acd32]"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-outline-variant/5 shadow-xl">
                                    <p className="text-[9px] font-black text-stone-700 uppercase tracking-widest mb-2">Discrepancias</p>
                                    <p className="text-2xl font-headline font-black text-error tracking-tighter">12%</p>
                                </div>
                                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-outline-variant/5 shadow-xl">
                                    <p className="text-[9px] font-black text-stone-700 uppercase tracking-widest mb-2">Valor Neto Diff</p>
                                    <p className="text-2xl font-headline font-black text-white tracking-tighter">-$420.00</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Entry Panel */}
                    <section className="col-span-12 lg:col-span-8 bg-zinc-900 rounded-[40px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                        <div className="p-10 border-b border-outline-variant/5 flex justify-between items-center bg-zinc-950/30">
                            <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter">Entrada de Conteo Ciego</h3>
                            <div className="flex items-center gap-4 bg-error/10 text-error px-5 py-2 rounded-full border border-error/20 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
                                <span className="material-symbols-outlined text-sm font-black">warning</span>
                                3 diferencias críticas detectadas
                            </div>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-zinc-950/50">
                                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700">ID Repuesto</th>
                                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700">Descripción</th>
                                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 text-center">Teórico</th>
                                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 w-48 text-center text-primary">Conteo Físico</th>
                                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 text-right">Diferencia</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/5">
                                    {auditData.map((item, i) => (
                                        <tr key={i} className="group hover:bg-zinc-950/40 transition-all">
                                            <td className="px-10 py-8">
                                                <div className="text-xs font-black font-headline text-white tracking-[0.1em] uppercase group-hover:text-primary transition-colors">{item.id}</div>
                                                <div className="text-[9px] text-stone-600 font-bold uppercase tracking-widest mt-1">{item.location}</div>
                                            </td>
                                            <td className="px-10 py-8">
                                                <span className="text-sm font-black text-white uppercase tracking-tight leading-tight block max-w-[240px]">{item.title}</span>
                                            </td>
                                            <td className="px-10 py-8 text-center">
                                                <span className="bg-zinc-950 px-3 py-1.5 rounded-lg text-[10px] font-black text-stone-500 border border-outline-variant/5 shadow-inner">{item.theoretical}</span>
                                            </td>
                                            <td className="px-10 py-8">
                                                <div className="flex justify-center">
                                                    <input 
                                                        className={`w-32 bg-zinc-950 border-none rounded-xl py-3 text-center font-headline font-black text-xl shadow-inner focus:ring-2 focus:ring-primary ${
                                                            item.critical ? 'text-error' : item.pending ? 'text-stone-800' : 'text-primary'
                                                        }`} 
                                                        type="number" 
                                                        defaultValue={item.count || ''}
                                                        placeholder="--"
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-10 py-8 text-right">
                                                <div className="flex items-center justify-end gap-3">
                                                    <span className={`font-headline font-black text-xl tracking-tighter ${
                                                        item.critical ? 'text-error' : item.pending ? 'text-stone-700 italic' : 'text-primary'
                                                    }`}>
                                                        {item.pending ? 'Pendiente' : item.diff > 0 ? `+${item.diff}` : item.diff}
                                                    </span>
                                                    {!item.pending && (
                                                        <span className={`material-symbols-outlined text-lg ${item.critical ? 'text-error' : 'text-primary'}`}>
                                                            {item.critical ? 'error' : item.diff === 0 ? 'check_circle' : 'trending_up'}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Footer Action Icons */}
                        <div className="p-10 bg-zinc-950/20 border-t border-outline-variant/5 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: 'qr_code_scanner', title: 'Escanear Manual', desc: 'Use escáner industrial para entradas masivas de conteo ciego.' },
                                { icon: 'verified_user', title: 'Aprobación Supervisor', desc: 'Diferencias > 5% o $200 requieren token de seguridad.', color: 'text-error' },
                                { icon: 'history', title: 'Historial de Ajustes', desc: 'Ver auditorías pasadas para detectar patrones de merma.', filled: true }
                            ].map((action, i) => (
                                <div key={i} className="flex items-start gap-5 p-6 bg-zinc-900 rounded-3xl border border-outline-variant/5 hover:border-primary/20 transition-all cursor-pointer group shadow-xl">
                                    <div className={`p-4 bg-zinc-950 rounded-2xl border border-outline-variant/5 shadow-inner transition-transform group-hover:scale-110 ${action.color || 'text-primary'}`}>
                                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: action.filled ? "'FILL' 1" : "" }}>{action.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-black text-[10px] uppercase tracking-[0.2em] text-white mb-2">{action.title}</h4>
                                        <p className="text-[9px] text-stone-600 font-bold uppercase tracking-widest leading-relaxed">{action.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Floating Action Button */}
            <button className="fixed bottom-12 right-12 w-20 h-20 bg-primary text-black rounded-3xl shadow-[0_20px_50px_rgba(154,205,50,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
                <span className="material-symbols-outlined text-4xl font-black group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>save</span>
            </button>

            <style dangerouslySetInnerHTML={{ __html: `
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
