import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function BalanceGeneral() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Balance General</span>
                </div>
            }
        >
            <Head title="Balance General" />

            <div className="space-y-12 pb-12 relative">
                {/* Technical Blueprint Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none select-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Header Section */}
                <header className="relative z-10 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-10">
                    <div className="max-w-3xl space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 border border-primary/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary rounded-full">Reporte Oficial</span>
                            <span className="text-stone-700 font-mono text-[9px] uppercase tracking-widest">FIN_ENG_V2.0.4 - INDUSTRIAL NODE</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none text-white">
                            MAYOR DE REPUESTO <br/><span className="text-stone-700">LA CIMA, C.A.</span>
                        </h1>
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-sm italic">Estado de Situación Financiera</p>
                        <p className="text-stone-500 text-[10px] mt-6 font-mono uppercase tracking-widest">
                            Cierre de Periodo Fiscal: 31 de Octubre, 2023 | Moneda: Unidades Monetarias (UM)
                        </p>
                    </div>
                    <div className="hidden lg:flex gap-10">
                        <div className="text-right">
                            <p className="text-stone-800 text-[9px] uppercase tracking-[0.4em] mb-2 font-black">Uptime Operativo</p>
                            <p className="text-4xl font-headline font-black text-primary italic">99.8%</p>
                        </div>
                    </div>
                </header>

                {/* Financial Dashboard Summary */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="bg-zinc-900/50 backdrop-blur-xl p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mt-16 -mr-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                        <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-primary opacity-5" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                        <p className="text-stone-700 text-[9px] font-black uppercase tracking-[0.4em] mb-3">Total Activos</p>
                        <h3 className="text-4xl font-headline font-black tracking-tighter text-white italic">4.852.200,45</h3>
                    </div>
                    <div className="bg-zinc-900/50 backdrop-blur-xl p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 -mt-16 -mr-16 rounded-full blur-3xl group-hover:bg-error/10 transition-all duration-700"></div>
                        <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-error opacity-5" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                        <p className="text-stone-700 text-[9px] font-black uppercase tracking-[0.4em] mb-3">Total Pasivos</p>
                        <h3 className="text-4xl font-headline font-black tracking-tighter text-white">1.240.550,12</h3>
                    </div>
                    <div className="bg-zinc-950 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -mt-16 -mr-16 rounded-full blur-3xl"></div>
                        <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-primary opacity-10" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                        <p className="text-stone-800 text-[9px] font-black uppercase tracking-[0.4em] mb-3">Patrimonio Neto Consolidation</p>
                        <h3 className="text-4xl font-headline font-black tracking-tighter text-primary italic">3.611.650,33</h3>
                    </div>
                </section>

                {/* Main Balance Detailed Ledger */}
                <div className="space-y-16 relative z-10">
                    {/* SECTION: ACTIVOS */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-6">
                            <h2 className="text-3xl font-headline font-black uppercase tracking-tighter text-white">01 / Activos</h2>
                            <div className="h-px flex-1 bg-white/5 shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* Activo Corriente */}
                            <div className="bg-zinc-900/40 p-10 rounded-[48px] border border-outline-variant/10 shadow-2xl">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 mb-10 border-b border-white/5 pb-4 italic">Activo Corriente</h3>
                                <table className="w-full text-xs font-black">
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-zinc-950 transition-colors group/row">
                                            <td className="py-5 text-stone-500 group-hover/row:text-white uppercase tracking-tight">Caja y Bancos</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-white">450.000,00</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-950 transition-colors group/row">
                                            <td className="py-5 text-stone-500 group-hover/row:text-white uppercase tracking-tight">Cuentas por Cobrar Comerciales</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-white">820.500,45</td>
                                        </tr>
                                        <tr className="bg-primary/5 hover:bg-primary/10 transition-colors group/row border-l-4 border-primary">
                                            <td className="py-5 pl-4 text-primary font-black uppercase tracking-[0.1em]">Inventario de Repuestos (Valorizado)</td>
                                            <td className="py-5 pr-4 text-right font-mono tracking-widest text-primary font-black">1.840.300,00</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-950 transition-colors group/row">
                                            <td className="py-5 text-stone-500 group-hover/row:text-white uppercase tracking-tight">IVA Crédito Fiscal</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-white">98.400,00</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-950 transition-colors group/row">
                                            <td className="py-5 text-stone-500 group-hover/row:text-white uppercase tracking-tight">Retenciones Recuperables</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-white">42.000,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-10 pt-6 border-t-2 border-primary/20 flex justify-between items-center text-right">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-800">Subtotal Corriente</span>
                                    <span className="text-2xl font-headline font-black text-white italic tracking-tighter">3.251.200,45</span>
                                </div>
                            </div>
                            {/* Activo No Corriente */}
                            <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-2xl">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 mb-10 border-b border-white/5 pb-4 italic">Activo No Corriente</h3>
                                <table className="w-full text-xs font-black">
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-zinc-900 transition-colors group/row">
                                            <td className="py-5 text-stone-800 group-hover/row:text-stone-400 uppercase tracking-tight">Propiedad, Planta y Equipo</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-stone-300">1.450.000,00</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-900 transition-colors group/row">
                                            <td className="py-5 text-stone-800 group-hover/row:text-stone-400 uppercase tracking-tight">Mobiliario y Equipos</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-stone-300">320.000,00</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-900 transition-colors group/row">
                                            <td className="py-5 text-stone-800 group-hover/row:text-stone-400 uppercase tracking-tight italic">Depreciación Acumulada</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-error">(-169.000,00)</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-10 pt-6 border-t-2 border-stone-800 flex justify-between items-center text-right">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-800">Subtotal No Corriente</span>
                                    <span className="text-2xl font-headline font-black text-stone-500 tracking-tighter">1.601.000,00</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION: PASIVOS */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-6">
                            <h2 className="text-3xl font-headline font-black uppercase tracking-tighter text-white">02 / Pasivos</h2>
                            <div className="h-px flex-1 bg-white/5 shadow-inner"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* Pasivo Corriente */}
                            <div className="bg-zinc-900/40 p-10 rounded-[48px] border border-outline-variant/10 shadow-2xl">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 mb-10 border-b border-white/5 pb-4 italic">Pasivo Corriente</h3>
                                <table className="w-full text-xs font-black">
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-zinc-950 transition-colors group/row">
                                            <td className="py-5 text-stone-500 group-hover/row:text-white uppercase tracking-tight">Cuentas por Pagar Proveedores</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-white">680.000,00</td>
                                        </tr>
                                        <tr className="bg-primary/5 hover:bg-primary/10 transition-colors group/row border-l-4 border-primary">
                                            <td className="py-5 pl-4 text-primary font-black uppercase tracking-[0.1em]">IVA por Pagar (Fiscal Node)</td>
                                            <td className="py-5 pr-4 text-right font-mono tracking-widest text-primary font-black">124.550,12</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-950 transition-colors group/row text-error/60 group-hover/row:text-error">
                                            <td className="py-5 text-stone-500 group-hover/row:text-error uppercase tracking-tight">Retenciones Fiscales por Enterar</td>
                                            <td className="py-5 text-right font-mono tracking-widest">15.200,00</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-950 transition-colors group/row">
                                            <td className="py-5 text-stone-500 group-hover/row:text-white uppercase tracking-tight">Pasivos Laborales Acumulados</td>
                                            <td className="py-5 text-right font-mono tracking-widest text-white">220.800,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-10 pt-6 border-t-2 border-error/30 flex justify-between items-center text-right">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-800">Subtotal Pasivo Corriente</span>
                                    <span className="text-2xl font-headline font-black text-white italic tracking-tighter">1.040.550,12</span>
                                </div>
                            </div>
                            {/* Pasivo No Corriente */}
                            <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-2xl flex flex-col justify-between">
                                 <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 mb-10 border-b border-white/5 pb-4 italic">Pasivo No Corriente</h3>
                                    <table className="w-full text-xs font-black">
                                        <tbody className="divide-y divide-white/5">
                                            <tr className="hover:bg-zinc-900 transition-colors group/row">
                                                <td className="py-5 text-stone-800 group-hover/row:text-stone-400 uppercase tracking-tight">Préstamos Bancarios Largo Plazo</td>
                                                <td className="py-5 text-right font-mono tracking-widest text-stone-300">200.000,00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-10 pt-6 border-t-2 border-stone-800 flex justify-between items-center text-right">
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-800">Subtotal No Corriente</span>
                                    <span className="text-2xl font-headline font-black text-stone-500 tracking-tighter">200.000,00</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Patrimonial Equity Focus */}
                <div className="bg-primary p-1 rounded-[56px] shadow-[0_0_50px_rgba(154,205,50,0.2)]">
                    <div className="bg-zinc-950 rounded-[54px] p-12 lg:p-20 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                            <div className="space-y-10">
                                <h3 className="text-3xl font-headline font-black uppercase tracking-tighter text-white">03 / Patrimonio</h3>
                                <table className="w-full text-sm font-black">
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-zinc-900 transition-all group/prow">
                                            <td className="py-6 text-stone-700 group-hover/prow:text-stone-400 uppercase tracking-widest font-black">Capital Social Suscrito</td>
                                            <td className="py-6 text-right font-mono text-white tracking-widest">2.000.000,00</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-900 transition-all group/prow">
                                            <td className="py-6 text-stone-700 group-hover/prow:text-stone-400 uppercase tracking-widest font-black">Reserva Legal Industrial</td>
                                            <td className="py-6 text-right font-mono text-white tracking-widest">200.000,00</td>
                                        </tr>
                                        <tr className="hover:bg-zinc-900 transition-all group/prow">
                                            <td className="py-6 text-stone-700 group-hover/prow:text-stone-400 uppercase tracking-widest font-black">Utilidades Acumuladas Ledger</td>
                                            <td className="py-6 text-right font-mono text-white tracking-widest">950.000,00</td>
                                        </tr>
                                        <tr className="bg-primary/5 hover:bg-primary/10 transition-all group/prow border-l-8 border-primary">
                                            <td className="py-8 pl-6 text-primary font-black uppercase tracking-[0.3em]">Utilidad del Ejercicio 2023</td>
                                            <td className="py-8 pr-6 text-right font-mono text-primary font-black text-xl italic tabular-nums">461.650,33</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-col items-center justify-center p-16 bg-zinc-900/50 rounded-[48px] border-4 border-dashed border-primary/20 hover:border-primary/40 transition-all duration-700 shadow-inner group/summary">
                                <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.5em] mb-4">Total Equity Consolidation</span>
                                <div className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white italic group-hover/summary:text-primary transition-colors duration-700">3.611.650,33</div>
                                <div className="flex items-center gap-4 text-stone-800 italic text-[11px] font-black uppercase tracking-widest mt-10 p-6 bg-zinc-950 rounded-3xl border border-white/5">
                                    <span className="material-symbols-outlined text-primary text-3xl font-black animate-spin-slow">verified_user</span>
                                    CERTIFICACIÓN CONTABLE INDUSTRIAL NIVEL 4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industrial Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 opacity-30 hover:opacity-100 transition-opacity">
                    <div className="flex flex-wrap items-center gap-12">
                        <div className="space-y-2">
                             <span className="text-[9px] font-black uppercase text-stone-800 tracking-[0.5em]">Preparado Por Control</span>
                             <p className="text-xs font-black text-stone-500 uppercase">Dpto. Contabilidad Central Zenith</p>
                        </div>
                        <div className="space-y-2">
                             <span className="text-[9px] font-black uppercase text-stone-800 tracking-[0.5em]">Revisado Auditoría</span>
                             <p className="text-xs font-black text-stone-500 uppercase">Dirección de Finanzas Titan Ops</p>
                        </div>
                    </div>
                    <div className="text-[10px] text-right max-w-lg uppercase leading-relaxed font-black text-stone-800 tracking-widest italic">
                        Este documento es una representación técnica de la salud financiera de MAYOR DE REPUESTO LA CIMA, C.A. Integrada al motor financiero Zenith Engine.
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .animate-spin-slow {
                    animation: spin 10s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}} />
        </AuthenticatedLayout>
    );
}
