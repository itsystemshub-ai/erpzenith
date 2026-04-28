import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeActivosFijos() {
    const assets = [
        { code: 'AF-00214', name: 'Torno CNC Precision X-900', category: 'Maquinaria Pesada', date: '12/05/2021', initialValue: '$125,000.00', method: 'Línea Recta', depAcum: '$31,250.00', bookValue: '$93,750.00' },
        { code: 'AF-00245', name: 'Montacargas Caterpillar 5T', category: 'Equipos de Almacén', date: '15/09/2022', initialValue: '$45,500.00', method: 'Línea Recta', depAcum: '$8,450.00', bookValue: '$37,050.00' },
        { code: 'AF-00289', name: 'Camión Distribución ISUZU NLR', category: 'Vehículos', date: '03/01/2023', initialValue: '$68,200.00', method: 'Línea Recta', depAcum: '$6,820.00', bookValue: '$61,380.00' },
        { code: 'AF-00312', name: 'Compresor Aire Industrial 500L', category: 'Herramientas', date: '22/11/2023', initialValue: '$12,900.00', method: 'Línea Recta', depAcum: '$430.00', bookValue: '$12,470.00' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
                    <span>Finanzas <span className="text-white/60 mx-2">|</span> Gestión de Activos Fijos</span>
                </div>
            }
        >
            <Head title="Gestión de Activos Fijos" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Industrial Asset Management</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            FIXED <br/><span className="text-stone-700">ASSETS</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            MAYOR DE REPUESTO LA CIMA, C.A. • Registro de Maquinaria y Equipos
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-5 bg-zinc-950 text-stone-700 font-black text-[9px] uppercase tracking-[0.3em] border border-white/5 rounded-2xl hover:text-white transition-all shadow-inner">
                            Exportar Protocol_PDF
                        </button>
                        <button className="px-10 py-5 bg-primary text-black font-black text-[9px] uppercase tracking-[0.3em] rounded-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            <span className="material-symbols-outlined text-sm font-black">add</span> Registrar Nodo Activo
                        </button>
                    </div>
                </header>

                {/* Dashboard Widgets Bento */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl flex flex-col justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-8 italic">Valor Total Activos</p>
                        <div>
                            <p className="text-4xl font-headline font-black text-white italic tracking-tighter decoration-double underline">$1,240,500.00</p>
                            <div className="flex items-center gap-2 text-primary mt-4">
                                <span className="material-symbols-outlined text-sm font-black animate-bounce">trending_up</span>
                                <span className="text-[9px] font-black uppercase tracking-widest">+4.2% vs Prev_Year</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner flex flex-col justify-between group">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-800 mb-8 italic">Depreciación Acumulada</p>
                        <div>
                            <p className="text-3xl font-headline font-black text-stone-500 italic tracking-tighter">$412,280.45</p>
                            <p className="text-[10px] text-stone-900 font-black uppercase tracking-widest mt-4">33.2% Global Threshold</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 relative rounded-[56px] overflow-hidden bg-zinc-950 p-12 shadow-3xl group">
                         <div className="absolute inset-0 bg-industrial-mesh opacity-10"></div>
                         <div className="relative z-10 flex flex-col justify-between h-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8 italic">Depreciación Mensual_Projection</span>
                            <div className="flex items-end gap-3">
                                <span className="text-6xl font-headline font-black text-white italic tracking-tighter">-$12,450</span>
                                <span className="text-[10px] font-black text-stone-800 uppercase tracking-widest pb-3">USD / Delta</span>
                            </div>
                            <div className="mt-10 space-y-4">
                                <div className="flex items-center justify-between text-[8px] font-black text-stone-800 uppercase tracking-[0.3em]">
                                    <span>Fiscal Period: Q3 Console</span>
                                    <span>Progress: 65%</span>
                                </div>
                                <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden shadow-inner">
                                    <div className="h-full bg-primary w-[65%] shadow-[0_0_15px_#9acd32]"></div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Inventory Matrix Section */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    
                    <div className="relative z-10 p-10 bg-zinc-950/40 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 italic">Inventario de Nodos Activos</h3>
                        <div className="flex gap-6 flex-1 max-w-xl">
                            <div className="flex-1 bg-zinc-900 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-inner group/search border border-white/5">
                                <span className="material-symbols-outlined text-stone-800 text-lg group-focus-within/search:text-primary transition-colors">search</span>
                                <input className="bg-transparent border-none focus:ring-0 text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 placeholder:text-stone-900 w-full" placeholder="FILTER BY NODE CODE OR ASSET TYPE..."/>
                            </div>
                            <button className="material-symbols-outlined p-4 bg-zinc-900 rounded-2xl text-stone-800 hover:text-primary transition-all shadow-inner border border-white/5">filter_list</button>
                        </div>
                    </div>

                    <div className="relative z-10 overflow-x-auto p-10">
                        <table className="w-full text-left border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                    <th className="px-10 py-6">Código Nodo</th>
                                    <th className="px-10 py-6">Descripción Activo</th>
                                    <th className="px-10 py-6">Adquisición</th>
                                    <th className="px-10 py-6 text-right">Valor_Ini</th>
                                    <th className="px-10 py-6">Protocolo</th>
                                    <th className="px-10 py-6 text-right">Amort_Acum</th>
                                    <th className="px-10 py-6 text-right">Neto_Libros</th>
                                    <th className="px-10 py-6"></th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {assets.map((a, i) => (
                                    <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row">
                                        <td className="px-10 py-8 first:rounded-l-[32px] font-mono text-stone-500 tracking-widest">{a.code}</td>
                                        <td className="px-10 py-8">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-white font-headline text-lg uppercase tracking-tight group-hover/row:text-primary transition-colors">{a.name}</span>
                                                <span className="text-[8px] text-stone-800 uppercase font-black tracking-widest italic">{a.category}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-stone-600 italic">{a.date}</td>
                                        <td className="px-10 py-8 text-right text-stone-400 tabular-nums">{a.initialValue}</td>
                                        <td className="px-10 py-8">
                                            <span className="bg-zinc-900 text-stone-800 text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/5 shadow-inner italic">
                                                {a.method}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 text-right text-error tabular-nums">{a.depAcum}</td>
                                        <td className="px-10 py-8 text-right text-primary font-headline text-xl italic tracking-tighter tabular-nums decoration-solid underline decoration-primary/20 underline-offset-8">
                                            {a.bookValue}
                                        </td>
                                        <td className="px-10 py-8 text-right last:rounded-r-[32px]">
                                            <button className="p-4 bg-zinc-900 rounded-2xl text-stone-700 hover:text-white hover:scale-110 transition-all border border-white/5 shadow-inner">
                                                <span className="material-symbols-outlined text-2xl">visibility</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="relative z-10 p-10 bg-zinc-950/40 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] italic">Showing 4 of 128 Global Nodes</span>
                        <div className="flex gap-4">
                            <button className="w-14 h-14 bg-zinc-950 rounded-2xl border border-white/5 flex items-center justify-center text-stone-700 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-2xl">chevron_left</span>
                            </button>
                            <button className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-black font-black font-headline text-lg italic shadow-2xl">01</button>
                            <button className="w-14 h-14 bg-zinc-950 rounded-2xl border border-white/5 flex items-center justify-center text-stone-700 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Operations Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 group hover:border-primary/20 transition-all shadow-inner relative overflow-hidden">
                        <div className="relative z-10 flex items-start gap-6">
                            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-700">
                                <span className="material-symbols-outlined text-primary text-3xl font-black">calendar_month</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-3 italic">Cierre Mensual</h4>
                                <p className="text-[10px] text-stone-800 font-black uppercase leading-relaxed mb-6">Generar asientos automáticos de depreciación para el período actual.</p>
                                <button className="text-[9px] font-black uppercase text-primary border-b-2 border-primary/20 hover:border-primary transition-all tracking-[0.2em] inline-flex items-center gap-2">
                                    Procesar Ahora <span className="material-symbols-outlined text-xs">bolt</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 group hover:border-white/20 transition-all shadow-inner relative overflow-hidden">
                        <div className="relative z-10 flex items-start gap-6">
                            <div className="w-16 h-16 bg-stone-900 flex items-center justify-center rounded-2xl group-hover:bg-zinc-900 transition-all duration-700">
                                <span className="material-symbols-outlined text-stone-600 text-3xl font-black">barcode_scanner</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-3 italic">Auditoría Física</h4>
                                <p className="text-[10px] text-stone-800 font-black uppercase leading-relaxed mb-6">Sincronizar etiquetas QR de activos con la base de datos central.</p>
                                <button className="text-[9px] font-black uppercase text-stone-300 border-b-2 border-stone-800 hover:border-white transition-all tracking-[0.2em]">Iniciar Escaneo</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary-container p-10 rounded-[48px] shadow-3xl group relative overflow-hidden">
                         <div className="absolute inset-0 bg-industrial-mesh opacity-10"></div>
                         <div className="relative z-10 flex items-start gap-6">
                            <div className="w-16 h-16 bg-on-primary-container text-primary-container flex items-center justify-center rounded-2xl group-hover:rotate-12 transition-transform duration-700">
                                <span className="material-symbols-outlined text-3xl font-black">analytics</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-on-primary-container mb-3 italic">Reporte Fiscal</h4>
                                <p className="text-[10px] text-on-primary-container/60 font-black uppercase leading-relaxed mb-6">Resumen detallado para declaración de ISLR anual.</p>
                                <button className="text-[9px] font-black uppercase text-on-primary-container bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-all tracking-[0.2em]">Descargar Protocol_XLSX</button>
                            </div>
                         </div>
                    </div>
                </section>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">precision_manufacturing</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">ASSET MANAGEMENT LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <span>Asset Pool: Heavy Machinery Matrix</span>
                             <span className="w-1 h-1 bg-stone-900 rounded-full"></span>
                             <span>Physical Audit 100% Trusted</span>
                         </div>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
