import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeCuentasPorCobrar() {
    const clients = [
        { name: 'REPUESTOS EL MOTOR, C.A.', id: 'J-31245678-0', balance: '$45,200.00', overdueFact: '03 FACT', maxAge: '45 Días', status: 'Pendiente', statusColor: 'amber' },
        { name: 'SERVICIOS INTEGRALES TÉCNICOS', id: 'J-40552132-1', balance: '$12,850.00', overdueFact: '05 FACT', maxAge: '94 Días', status: 'Crítico', statusColor: 'error' },
        { name: 'INVERSIONES LA MONTAÑA', id: 'J-29881772-5', balance: '$102,400.00', overdueFact: '00 FACT', maxAge: '12 Días', status: 'Solvente', statusColor: 'primary' },
        { name: 'REPUESTOS TRUCK PARTS, S.A.', id: 'J-00122938-4', balance: '$32,150.00', overdueFact: '02 FACT', maxAge: '68 Días', status: 'Vencido', statusColor: 'orange' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">payments</span>
                    <span>Finanzas <span className="text-white/60 mx-2">|</span> Cuentas por Cobrar</span>
                </div>
            }
        >
            <Head title="Gestión de Cuentas por Cobrar" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Accounts Receivable Module</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            COLLECTION <br/><span className="text-stone-700">LEDGER</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            MAYOR DE REPUESTO LA CIMA, C.A. • Gestión de Cartera y Cobranzas
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-zinc-900 px-8 py-5 rounded-2xl border-l-[12px] border-primary shadow-3xl">
                            <p className="text-[9px] text-stone-700 uppercase font-black tracking-widest mb-2">Cartera Total</p>
                            <p className="text-3xl font-headline font-black text-white italic tracking-tighter">$482,950.00</p>
                        </div>
                        <div className="bg-zinc-950 px-8 py-5 rounded-2xl border-l-[12px] border-error shadow-3xl">
                            <p className="text-[9px] text-stone-800 uppercase font-black tracking-widest mb-2">Cartera Vencida</p>
                            <p className="text-3xl font-headline font-black text-error italic tracking-tighter">$124,300.00</p>
                        </div>
                    </div>
                </header>

                {/* Aging Report Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8 bg-zinc-900 rounded-[56px] p-12 border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mt-32 -mr-32 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-1000"></div>
                        <span className="material-symbols-outlined absolute -right-8 -top-8 text-[12rem] text-primary opacity-5" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                        
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 mb-12 flex items-center gap-4 italic">
                            <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#9acd32]"></span>
                            Antigüedad de Saldos Matrix
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                            {[
                                { label: 'Al Día', amount: '$358,650', percentage: '74%', color: 'bg-primary' },
                                { label: '30 Días', amount: '$62,100', percentage: '13%', color: 'bg-amber-500' },
                                { label: '60 Días', amount: '$41,800', percentage: '9%', color: 'bg-orange-600' },
                                { label: '90+ Días', amount: '$20,400', percentage: '4%', color: 'bg-error' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-zinc-950/40 p-8 rounded-[32px] border border-white/5 group/stat hover:bg-zinc-950 transition-all">
                                    <span className="block text-[8px] font-black uppercase tracking-[0.4em] text-stone-800 mb-4">{stat.label}</span>
                                    <span className={`text-2xl font-headline font-black italic tracking-tighter ${stat.label === '90+ Días' ? 'text-error' : 'text-white'}`}>{stat.amount}</span>
                                    <div className="w-full bg-zinc-900 h-1.5 mt-8 rounded-full overflow-hidden shadow-inner relative">
                                        <div className={`h-full ${stat.color} shadow-lg transition-all duration-1000`} style={{ width: stat.percentage }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Action Card */}
                    <div className="lg:col-span-4 bg-primary rounded-[56px] p-12 shadow-3xl flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mt-32 -mr-32 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-black text-6xl mb-8 group-hover:rotate-12 transition-transform duration-500">add_card</span>
                            <h3 className="text-3xl font-headline font-black uppercase tracking-tighter text-black leading-none mb-6">Registrar <br/>Nuevo Cobro</h3>
                            <p className="text-[10px] font-black text-black/60 uppercase tracking-widest leading-relaxed">
                                ASINTE PAGOS RECIBIDOS Y APLIQUE <br/>A FACTURAS PENDIENTES DE <br/>FORMA INSTANTÁNEA.
                            </p>
                        </div>
                        <button className="relative z-10 w-full bg-black text-white font-black py-6 rounded-3xl text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4">
                            Seleccionar Factura <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Customer Ledger Table Section */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    
                    <div className="relative z-10 p-10 bg-zinc-950/40 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 italic">Cartera de Clientes Integrada</h3>
                        <div className="flex gap-6">
                            <button className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-stone-800 hover:text-primary transition-all p-4 bg-zinc-900 rounded-2xl border border-white/5 shadow-inner">
                                <span className="material-symbols-outlined text-sm">filter_list</span> Filtrar Estado_Node
                            </button>
                            <button className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-stone-800 hover:text-primary transition-all p-4 bg-zinc-900 rounded-2xl border border-white/5 shadow-inner">
                                <span className="material-symbols-outlined text-sm">download</span> Exportar Protocol_CSV
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 overflow-x-auto p-10">
                        <table className="w-full text-left border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                    <th className="px-10 py-6">Entidad Cliente</th>
                                    <th className="px-10 py-6">ID Fiscal</th>
                                    <th className="px-10 py-6">Saldo Total</th>
                                    <th className="px-10 py-6">Aging Status</th>
                                    <th className="px-10 py-6">Node Status</th>
                                    <th className="px-10 py-6"></th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {clients.map((c, i) => (
                                    <tr key={i} className={`bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row ${c.statusColor === 'error' ? 'border-amber-500/10' : ''}`}>
                                        <td className="px-10 py-8 first:rounded-l-[32px]">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-white font-headline text-lg uppercase tracking-tight group-hover/row:text-primary transition-colors">{c.name}</span>
                                                <span className="text-[8px] text-stone-800 uppercase font-black tracking-widest italic">Industrial Chain Node_v4</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-stone-500 font-mono tracking-widest uppercase italic">{c.id}</td>
                                        <td className={`px-10 py-8 font-headline text-xl italic tracking-tighter tabular-nums ${c.statusColor === 'error' ? 'text-error' : 'text-white'}`}>
                                            {c.balance}
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex flex-col gap-2">
                                                <span className={`${c.statusColor === 'error' ? 'bg-error/10 text-error' : 'bg-zinc-900 text-stone-500'} text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/5 text-center`}>
                                                    {c.overdueFact}
                                                </span>
                                                <span className="text-[8px] text-stone-800 uppercase font-black tracking-widest text-center italic">{c.maxAge} Max</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-3">
                                                <span className={`w-2.5 h-2.5 rounded-full shadow-[0_0_8px] ${
                                                    c.statusColor === 'primary' ? 'bg-primary shadow-primary/50' :
                                                    c.statusColor === 'amber' ? 'bg-amber-500 shadow-amber-500/50' :
                                                    c.statusColor === 'orange' ? 'bg-orange-600 shadow-orange-600/50' : 'bg-error shadow-error/50'
                                                }`}></span>
                                                <span className={`text-[9px] font-black uppercase tracking-widest italic ${
                                                    c.statusColor === 'primary' ? 'text-primary' :
                                                    c.statusColor === 'amber' ? 'text-amber-500' :
                                                    c.statusColor === 'orange' ? 'text-orange-600' : 'text-error'
                                                }`}>
                                                    {c.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-right last:rounded-r-[32px]">
                                            <button className="p-4 bg-zinc-900 rounded-2xl text-stone-700 hover:text-white hover:scale-110 transition-all border border-white/5 shadow-inner">
                                                <span className="material-symbols-outlined text-2xl font-black">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Matrix */}
                    <div className="relative z-10 p-10 bg-zinc-950/40 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] italic">Consolidated View: 4 of 128 Global Nodes</span>
                        <div className="flex gap-4">
                            <button className="w-14 h-14 bg-zinc-950 rounded-2xl border border-white/5 flex items-center justify-center text-stone-700 hover:text-primary transition-all shadow-inner">
                                <span className="material-symbols-outlined text-2xl">chevron_left</span>
                            </button>
                            <button className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-black font-black font-headline text-lg italic shadow-2xl">
                                01
                            </button>
                            <button className="w-14 h-14 bg-zinc-950 rounded-2xl border border-white/5 flex items-center justify-center text-stone-700 hover:text-primary transition-all shadow-inner">
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">precision_manufacturing</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">ACCOUNTS RECEIVABLE LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic">
                             <span>Collection Cycle: 30-60-90 Matrix</span>
                             <span className="w-1 h-1 bg-stone-900 rounded-full"></span>
                             <span>Financial Integrity Guard Valid</span>
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
