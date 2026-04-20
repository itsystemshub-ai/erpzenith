import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function LibroCajaYBancos() {
    const movements = [
        { date: '24/05/2024', ref: '#TRF-9023', concept: 'Pago Proveedor Acero Inox', type: 'EGRESO', amount: '-$250,000.00', status: 'check_circle' },
        { date: '24/05/2024', ref: '#CHQ-4451', concept: 'Cobro Factura #V-998 (Cliente Ind.)', type: 'INGRESO', amount: '+$180,500.00', status: 'history' },
        { date: '23/05/2024', ref: '#INT-0032', concept: 'Rendimientos Cuenta de Ahorro', type: 'INGRESO', amount: '+$12,450.00', status: 'check_circle' },
        { date: '23/05/2024', ref: '#TRF-8871', concept: 'Nómina Operarios Planta 2', type: 'EGRESO', amount: '-$412,000.00', status: 'check_circle' },
    ];

    const customers = [
        { name: 'Industrial S.A.', debt: '$1.2M', risk: 'Bajo Riesgo', status: '80% OK', colors: { primary: 'w-[80%]', secondary: 'w-[15%]', error: 'w-[5%]' }, statusColor: 'text-primary' },
        { name: 'Minera del Norte', debt: '$840k', risk: 'Alerta', status: '40% Vencido', colors: { primary: 'w-[40%]', secondary: 'w-[40%]', error: 'w-[20%]' }, statusColor: 'text-secondary' },
        { name: 'Logística Global', debt: '$3.5M', risk: 'Excelente', status: '95% OK', colors: { primary: 'w-[95%]', secondary: 'w-[5%]', error: 'w-0' }, statusColor: 'text-primary' },
        { name: 'Suministros Ferrosos', debt: '$150k', risk: 'BLOQUEADO', status: '70% >90 Días', colors: { primary: 'w-[10%]', secondary: 'w-[20%]', error: 'w-[70%]' }, statusColor: 'text-error' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">account_balance</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Libro Caja y Bancos</span>
                </div>
            }
        >
            <Head title="Libro Caja y Bancos" />

            <div className="space-y-12 pb-12">
                {/* Header & Real-Time Balances */}
                <header className="flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-white leading-none">
                                Gestión Bancaria <br/><span className="text-stone-700">& Libro Caja</span>
                            </h1>
                            <p className="text-primary font-black text-[10px] uppercase tracking-[0.4em] italic">Saldos Consolidados a Tiempo Real</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-zinc-900 border border-white/5 text-stone-200 px-8 py-5 rounded-2xl font-headline font-black uppercase text-[10px] tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-4">
                                <span className="material-symbols-outlined text-lg">file_download</span>
                                Export PDF
                            </button>
                            <button className="bg-primary text-black px-8 py-5 rounded-2xl font-headline font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(154,205,50,0.3)] flex items-center gap-4">
                                <span className="material-symbols-outlined text-lg">sync_alt</span>
                                Nueva Conciliación
                            </button>
                        </div>
                    </div>

                    {/* Bento Grid Balances */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl flex flex-col justify-between group">
                            <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest mb-4">Banco Santander - Operativo</span>
                            <div>
                                <span className="text-4xl font-headline font-black text-white tracking-tighter">$1,452,380.00</span>
                                <div className="flex items-center gap-2 text-[10px] text-primary font-black uppercase tracking-widest mt-4">
                                    <span className="material-symbols-outlined text-sm font-black">arrow_upward</span> +2.4% VS AYER
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between">
                            <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest mb-4">BBVA - Reserva</span>
                            <div>
                                <span className="text-4xl font-headline font-black text-white tracking-tighter">$845,000.50</span>
                                <div className="text-[9px] text-stone-800 font-black uppercase tracking-widest mt-4">Conciliado hace 2h</div>
                            </div>
                        </div>
                        <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between">
                            <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest mb-4">Caja Chica - Planta 1</span>
                            <div>
                                <span className="text-4xl font-headline font-black text-white tracking-tighter">$12,400.00</span>
                                <div className="flex items-center gap-2 text-[10px] text-error font-black uppercase tracking-widest mt-4">
                                    <span className="material-symbols-outlined text-sm font-black animate-pulse">warning</span> Reponer fondos
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary p-10 rounded-[48px] shadow-[0_0_50px_rgba(154,205,50,0.2)] flex flex-col justify-between">
                            <span className="text-[9px] font-black text-black uppercase tracking-widest mb-4">Consolidado Total</span>
                            <div>
                                <span className="text-4xl font-headline font-black text-black tracking-tighter">$2,309,780.50</span>
                                <div className="text-[9px] text-black font-black uppercase tracking-widest mt-4 opacity-60 italic">Auditoría 100% OK</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Movements & AI Conciliation */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                        <div className="p-10 bg-zinc-950/80 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                            <h2 className="text-2xl font-headline font-black uppercase tracking-tight text-white">Registro de Movimientos</h2>
                            <div className="relative w-full md:w-96">
                                <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-stone-700 text-lg">search</span>
                                <input className="w-full bg-zinc-900 border-none rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary focus:ring-2 focus:ring-primary/20 pl-16 py-4 shadow-inner placeholder:text-stone-800" placeholder="Filtrar por concepto..." type="text"/>
                            </div>
                        </div>
                        <div className="overflow-x-auto min-h-[500px] p-6">
                            <table className="w-full text-left border-separate border-spacing-y-3">
                                <thead>
                                    <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                        <th className="px-8 py-5 first:rounded-l-3xl">Fecha / Ref</th>
                                        <th className="px-8 py-5">Concepto Maestro</th>
                                        <th className="px-8 py-5">Tipo</th>
                                        <th className="px-8 py-5 text-right">Monto Delta</th>
                                        <th className="px-8 py-5 text-center last:rounded-r-3xl">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs font-black">
                                    {movements.map((m, i) => (
                                        <tr key={i} className="bg-zinc-950/40 hover:bg-zinc-950 transition-all duration-300 group/row">
                                            <td className="px-8 py-6 first:rounded-l-3xl">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-stone-600 font-mono tracking-widest">{m.date}</span>
                                                    <span className="text-primary font-mono text-[9px]">{m.ref}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-white uppercase tracking-tight group-hover/row:text-primary transition-colors">{m.concept}</span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/5 ${
                                                    m.type === 'INGRESO' ? 'bg-primary/20 text-primary' : 'bg-error/10 text-error'
                                                }`}>
                                                    {m.type}
                                                </span>
                                            </td>
                                            <td className={`px-8 py-6 text-right font-headline text-lg tracking-tighter ${
                                                m.type === 'INGRESO' ? 'text-primary' : 'text-error'
                                            }`}>
                                                {m.amount}
                                            </td>
                                            <td className="px-8 py-6 text-center last:rounded-r-3xl">
                                                <span className={`material-symbols-outlined text-2xl ${
                                                    m.status === 'check_circle' ? 'text-primary' : 'text-stone-800'
                                                }`}>{m.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* AI Conciliation Widget */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="bg-zinc-950 p-12 rounded-[56px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] -mt-24 -mr-24 group-hover:bg-primary/10 transition-all duration-700"></div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-lg animate-spin-slow">auto_awesome</span>
                                Conciliación Rápida AI
                            </h3>
                            <p className="text-[11px] text-stone-600 leading-relaxed mb-10 font-bold uppercase tracking-tight">
                                Hemos detectado <span className="text-white">4 movimientos bancarios</span> que coinciden con facturas pendientes de cobro en el motor industrial.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5 flex justify-between items-center group/item hover:border-primary/30 transition-all cursor-pointer shadow-inner">
                                    <div className="space-y-1">
                                        <div className="text-[8px] text-primary font-black uppercase tracking-[0.4em]">Match 98% Node</div>
                                        <div className="text-xs font-black text-white uppercase tracking-widest">Depósito $45,000.00</div>
                                    </div>
                                    <span className="material-symbols-outlined text-stone-800 group-hover/item:text-primary transition-all group-hover/item:translate-x-2">arrow_forward_ios</span>
                                </div>
                                <button className="w-full bg-primary text-black px-8 py-5 rounded-[28px] font-headline font-black uppercase text-[10px] tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all mt-6">
                                    Ejecutar Auto-Conciliación
                                </button>
                            </div>
                        </div>

                        {/* Flujo Mensual Mini Chart */}
                        <div className="bg-zinc-900 p-10 rounded-[56px] border border-outline-variant/10 shadow-3xl">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 mb-10">Flujo Industrial Mensual</h3>
                            <div className="h-32 flex items-end gap-3 px-2">
                                <div className="flex-1 bg-stone-950 h-3/4 hover:bg-stone-800 transition-all cursor-crosshair rounded-t-xl group/bar relative">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity font-black select-none z-10">$84M</div>
                                </div>
                                <div className="flex-1 bg-stone-950 h-1/2 hover:bg-stone-800 transition-all cursor-crosshair rounded-t-xl group/bar relative">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity font-black select-none z-10">$56M</div>
                                </div>
                                <div className="flex-1 bg-stone-950 h-full hover:bg-stone-800 transition-all cursor-crosshair rounded-t-xl group/bar relative">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity font-black select-none z-10">$112M</div>
                                </div>
                                <div className="flex-1 bg-stone-950 h-2/3 hover:bg-stone-800 transition-all cursor-crosshair rounded-t-xl group/bar relative">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity font-black select-none z-10">$68M</div>
                                </div>
                                <div className="flex-1 bg-primary h-5/6 shadow-[0_0_20px_rgba(154,205,50,0.3)] rounded-t-xl group/bar relative">
                                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity font-black select-none z-10">$96M</div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-6 text-[9px] text-stone-800 font-black uppercase tracking-widest font-mono">
                                <span>ENE</span><span>FEB</span><span>MAR</span><span>ABR</span><span className="text-primary font-black">MAY</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aging Report Section */}
                <section className="space-y-12">
                    <div className="flex flex-col md:flex-row justify-between items-center bg-zinc-950 p-10 rounded-[56px] border border-outline-variant/10 shadow-3xl gap-10">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-headline font-black uppercase tracking-tighter text-white mb-2">Antigüedad De Saldos</h2>
                            <p className="text-[10px] text-stone-700 font-black uppercase tracking-[0.4em] italic mb-6">Análisis de cartera vencida y riesgo industrial</p>
                            <div className="flex flex-wrap items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_#9acd32]"></div>
                                    <span className="text-[9px] font-black uppercase text-stone-600 tracking-widest">Corriente Node</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-stone-700 rounded-full"></div>
                                    <span className="text-[9px] font-black uppercase text-stone-600 tracking-widest">30-60 Días Ledger</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-error rounded-full shadow-[0_0_8px_#ba1a1a]"></div>
                                    <span className="text-[9px] font-black uppercase text-stone-600 tracking-widest">>90 Días Critical</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full md:w-auto bg-zinc-900 text-stone-200 px-10 py-5 rounded-[28px] font-headline font-black uppercase text-[10px] tracking-widest hover:bg-stone-800 transition-all border border-white/5 shadow-2xl">
                            Ver Reporte Analítico
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {customers.map((c, i) => (
                            <div key={i} className="bg-zinc-900/50 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl hover:bg-zinc-900 transition-all group overflow-hidden relative">
                                <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                                <div className="relative z-10">
                                    <div className="text-lg font-headline font-black uppercase text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{c.name}</div>
                                    <div className="text-[9px] text-stone-700 font-black uppercase tracking-widest mb-8">Total Deuda: <span className="text-stone-500">{c.debt}</span></div>
                                    <div className="flex gap-1 h-2.5 mb-6 bg-zinc-950 rounded-full overflow-hidden">
                                        <div className={`${c.colors.primary} bg-primary shadow-lg`}></div>
                                        <div className={`${c.colors.secondary} bg-stone-800`}></div>
                                        <div className={`${c.colors.error} bg-error shadow-lg`}></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-stone-800">{c.status}</span>
                                        <span className={`${c.statusColor} italic`}>{c.risk}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Integrated Risk Bar */}
                    <div className="bg-zinc-900 p-12 rounded-[56px] border border-outline-variant/10 shadow-3xl flex flex-col lg:flex-row justify-between items-center gap-12 group">
                        <div className="flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-24 uppercase">
                            <div className="space-y-2">
                                <div className="text-[9px] font-black text-stone-800 tracking-[0.4em]">Cartera Corriente Assets</div>
                                <div className="text-2xl font-headline font-black text-white italic tracking-tighter font-mono">$12,450,000.00</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-[9px] font-black text-stone-800 tracking-[0.4em]">Monto En Riesgo Crítico</div>
                                <div className="text-2xl font-headline font-black text-error italic tracking-tighter font-mono animate-pulse">$842,000.00</div>
                            </div>
                            <div className="space-y-2 text-right">
                                <div className="text-[9px] font-black text-stone-800 tracking-[0.4em]">Promedio Días Pago Industrial</div>
                                <div className="text-2xl font-headline font-black text-primary italic tracking-tighter font-mono">42 Días</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 bg-zinc-950 rounded-[32px] border border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                            <div className="text-right">
                                <div className="text-[8px] text-stone-800 font-black uppercase tracking-[0.4em] mb-1">Fiscal Integrity Hash</div>
                                <div className="text-[10px] font-mono text-primary/60 font-black tracking-widest uppercase">7F2-CC-FIN-992</div>
                            </div>
                            <span className="material-symbols-outlined text-stone-800 text-4xl group-hover:text-primary transition-colors duration-1000">verified_user</span>
                        </div>
                    </div>
                </section>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}} />
        </AuthenticatedLayout>
    );
}
