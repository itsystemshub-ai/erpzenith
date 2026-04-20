import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function EstadoDeResultados() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">analytics</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Estado de Resultados</span>
                </div>
            }
        >
            <Head title="Estado de Resultados" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] italic">Estado de Resultados (P&G)</h2>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            MAYOR DE REPUESTO <br/><span className="text-stone-700">LA CIMA, C.A.</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            PERÍODO FISCAL 2023 | ESTRUCTURA NIIF (IFRS) | INDUSTRIAL ENGINE V4
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-4 bg-zinc-900 px-8 py-5 text-stone-300 font-headline font-black text-[10px] uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-2xl border border-white/5 shadow-2xl active:scale-95">
                            <span className="material-symbols-outlined text-lg">download</span>
                            EXPORT PDF
                        </button>
                        <button className="flex items-center gap-4 bg-primary px-8 py-5 text-black font-headline font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(154,205,50,0.3)] rounded-2xl active:scale-95">
                            <span className="material-symbols-outlined text-lg">table_view</span>
                            EXPORT EXCEL
                        </button>
                    </div>
                </header>

                {/* Financial Summary Bento */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Utility Bruta Highlight */}
                    <div className="bg-zinc-900/50 backdrop-blur-xl p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                        <p className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] mb-4">Utilidad Bruta Nodes</p>
                        <div className="flex items-baseline gap-4">
                            <h3 className="text-4xl font-headline font-black text-white tracking-tighter italic">$1,452,890.00</h3>
                            <span className="text-primary text-[10px] font-black font-headline uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">+14% SIGMA</span>
                        </div>
                        <div className="mt-8 w-full bg-zinc-950 h-2 rounded-full overflow-hidden shadow-inner">
                            <div className="bg-primary h-full w-[68%] shadow-[0_0_10px_#9acd32]"></div>
                        </div>
                    </div>
                    {/* Operating Margin */}
                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between">
                        <div>
                            <p className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] mb-4">Margen Operacional</p>
                            <h3 className="text-5xl font-headline font-black text-white italic tracking-tighter">32.4%</h3>
                        </div>
                        <p className="text-[9px] text-stone-800 mt-6 uppercase font-black tracking-widest italic border-t border-white/5 pt-4">Optimizado Según Art. 177 Fiscal Node</p>
                    </div>
                    {/* Net Profit Prediction */}
                    <div className="bg-primary p-10 rounded-[48px] shadow-[0_0_50px_rgba(154,205,50,0.2)] flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-10"></div>
                        <div className="relative z-10">
                            <p className="text-[9px] font-black text-black uppercase tracking-[0.4em] mb-4">Utilidad Neta Disponible</p>
                            <h3 className="text-4xl font-headline font-black text-black tracking-tighter italic">$628,430.22</h3>
                        </div>
                        <div className="flex items-center gap-2 mt-6 relative z-10">
                            <span className="material-symbols-outlined text-lg text-black font-black">verified</span>
                            <span className="text-[9px] text-black font-black uppercase tracking-[0.2em] opacity-60">POST-ISLR (34% CRITICAL)</span>
                        </div>
                    </div>
                </div>

                {/* Detailed Report Table */}
                <div className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="overflow-x-auto min-h-[600px] p-8">
                        <table className="w-full text-left border-separate border-spacing-y-3">
                            <thead>
                                <tr className="bg-zinc-950/40 text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                    <th className="px-8 py-6 first:rounded-l-3xl">Código Ledger</th>
                                    <th className="px-8 py-6">Descripción de Partida</th>
                                    <th className="px-8 py-6 text-right">Valor Delta (USD)</th>
                                    <th className="px-8 py-6 text-right last:rounded-r-3xl">% INC Node</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {/* SECTION: INCOME */}
                                <tr className="bg-zinc-950/20">
                                    <td className="py-4 px-8 text-[9px] font-black text-primary uppercase tracking-[0.4em]" colSpan="4 italic">INGRESOS OPERACIONALES</td>
                                </tr>
                                <tr className="hover:bg-zinc-950 transition-all duration-300 group/row">
                                    <td className="px-8 py-6 first:rounded-l-3xl">
                                        <span className="text-stone-600 font-mono tracking-widest uppercase">4.1.01.01</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-white uppercase tracking-tight group-hover/row:text-primary transition-colors">Ventas Netas De Repuestos Industriales</span>
                                    </td>
                                    <td className="px-8 py-6 text-right font-mono text-white italic tabular-nums">$4,250,000.00</td>
                                    <td className="px-8 py-6 text-right text-[10px] text-stone-700 font-black last:rounded-r-3xl">100%</td>
                                </tr>
                                <tr className="hover:bg-zinc-950 transition-all duration-300 group/row">
                                    <td className="px-8 py-6 first:rounded-l-3xl">
                                        <span className="text-stone-600 font-mono tracking-widest uppercase">4.1.01.05</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-white uppercase tracking-tight group-hover/row:text-primary transition-colors">Servicios De Mecánica De Precisión</span>
                                    </td>
                                    <td className="px-8 py-6 text-right font-mono text-white italic tabular-nums">$180,450.00</td>
                                    <td className="px-8 py-6 text-right text-[10px] text-stone-700 font-black last:rounded-r-3xl">4.2%</td>
                                </tr>
                                
                                {/* SECTION: COGS */}
                                <tr className="bg-zinc-950/20">
                                    <td className="py-4 px-8 text-[9px] font-black text-primary uppercase tracking-[0.4em]" colSpan="4 italic">COSTO DE VENTAS (ART. 177)</td>
                                </tr>
                                <tr className="hover:bg-zinc-950 transition-all duration-300 group/row">
                                    <td className="px-8 py-6 first:rounded-l-3xl text-stone-800 uppercase tracking-widest font-mono">5.1.01.10</td>
                                    <td className="px-8 py-6 text-stone-500 uppercase tracking-tight group-hover/row:text-stone-300 transition-colors">Inventario Inicial De Mercancía</td>
                                    <td className="px-8 py-6 text-right font-mono text-stone-400 tabular-nums">$950,000.00</td>
                                    <td className="px-8 py-6 text-right text-[10px] text-stone-900 last:rounded-r-3xl">--</td>
                                </tr>
                                <tr className="hover:bg-zinc-950 transition-all duration-300 group/row">
                                    <td className="px-8 py-6 first:rounded-l-3xl text-stone-800 uppercase tracking-widest font-mono">5.1.01.20</td>
                                    <td className="px-8 py-6 text-stone-500 uppercase tracking-tight group-hover/row:text-stone-300 transition-colors">Compras Netas Nacionales/Importadas</td>
                                    <td className="px-8 py-6 text-right font-mono text-stone-400 tabular-nums">$2,650,000.00</td>
                                    <td className="px-8 py-6 text-right text-[10px] text-stone-900 last:rounded-r-3xl">--</td>
                                </tr>
                                <tr className="hover:bg-zinc-950 transition-all duration-300 group/row border-b border-white/5">
                                    <td className="px-8 py-6 first:rounded-l-3xl text-stone-800 uppercase tracking-widest font-mono">5.1.01.99</td>
                                    <td className="px-8 py-6 text-stone-500 uppercase tracking-tight group-hover/row:text-stone-300 transition-colors">Inventario Final De Mercancía</td>
                                    <td className="px-8 py-6 text-right font-mono text-error tabular-nums">($622,440.00)</td>
                                    <td className="px-8 py-6 text-right text-[10px] text-stone-900 last:rounded-r-3xl">--</td>
                                </tr>

                                {/* TOTAL BRUTA */}
                                <tr className="bg-zinc-950/80 border-t-2 border-primary/20">
                                    <td className="py-8 px-8 text-sm font-black text-white uppercase tracking-[0.3em]" colSpan="2">UTILIDAD BRUTA EN VENTAS</td>
                                    <td className="py-8 px-8 text-right text-2xl font-headline font-black text-primary italic tracking-tighter tabular-nums">$1,452,890.00</td>
                                    <td className="py-8 px-8 text-right text-[11px] font-black text-stone-700 last:rounded-r-3xl tracking-widest">32.8% SIGMA</td>
                                </tr>

                                {/* SECTION: OPEX */}
                                <tr className="bg-zinc-950/20">
                                    <td className="py-4 px-8 text-[9px] font-black text-primary uppercase tracking-[0.4em]" colSpan="4 italic">GASTOS OPERACIONALES</td>
                                </tr>
                                <tr className="hover:bg-zinc-950 transition-all duration-300 group/row">
                                    <td className="px-8 py-6 first:rounded-l-3xl text-stone-800 uppercase tracking-widest font-mono">6.1.01.00</td>
                                    <td className="px-8 py-6 text-stone-500 uppercase tracking-tight group-hover/row:text-stone-300 transition-colors">Gastos De Personal Y Prestaciones</td>
                                    <td className="px-8 py-6 text-right font-mono text-stone-300 tabular-nums">$320,000.00</td>
                                    <td className="px-8 py-6 text-right text-[10px] text-stone-800 last:rounded-r-3xl italic">7.2%</td>
                                </tr>
                                <tr className="hover:bg-zinc-950 transition-all duration-300 group/row">
                                    <td className="px-8 py-6 first:rounded-l-3xl text-stone-800 uppercase tracking-widest font-mono">6.1.05.00</td>
                                    <td className="px-8 py-6 text-stone-500 uppercase tracking-tight group-hover/row:text-stone-300 transition-colors">Mantenimiento De Planta E Industrial</td>
                                    <td className="px-8 py-6 text-right font-mono text-stone-300 tabular-nums">$85,000.00</td>
                                    <td className="px-8 py-6 text-right text-[10px] text-stone-800 last:rounded-r-3xl italic">1.9%</td>
                                </tr>

                                {/* FINAL NET */}
                                <tr className="bg-primary font-black">
                                    <td className="py-10 px-8 text-lg font-headline font-black text-black uppercase tracking-[0.2em] rounded-bl-[48px]" colSpan="2">UTILIDAD NETA DEL EJERCICIO</td>
                                    <td className="py-10 px-8 text-right text-4xl font-headline font-black text-black italic tracking-tighter tabular-nums">$628,577.22</td>
                                    <td className="py-10 px-8 text-right text-xs font-black text-black/60 rounded-br-[48px] tracking-[0.4em]">14.2% NET NODE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Technical Disclaimers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 items-end">
                    <div className="p-10 bg-zinc-950 rounded-[48px] border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <h4 className="text-[9px] font-black text-primary uppercase tracking-[0.5em] mb-6 flex items-center gap-3 relative z-10">
                            <span className="material-symbols-outlined text-lg">analytics</span>
                            NOTAS COMPLEMENTARIAS
                        </h4>
                        <p className="text-[11px] text-stone-600 leading-loose font-black uppercase tracking-tight relative z-10 italic">
                            Este reporte ha sido generado bajo los estándares internacionales de información financiera (NIIF). El costo de ventas incluye los ajustes por desvalorización de inventarios obsoletos según las políticas internas de gestión de almacén Zenith Engine Core.
                        </p>
                    </div>
                    <div className="flex flex-col justify-end items-end gap-6 px-10 opacity-30 hover:opacity-100 transition-opacity">
                        <div className="w-64 h-1 bg-stone-900 rounded-full shadow-inner"></div>
                        <div className="text-right space-y-2">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.6em]">DEPARTAMENTO DE FINANZAS</p>
                             <p className="text-[9px] font-mono text-stone-800 font-black tracking-widest uppercase italic">Generated: 24 MAY 2024 - 14:35 UTC // S-ID: 772-XQ-PG</p>
                        </div>
                    </div>
                </div>
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
