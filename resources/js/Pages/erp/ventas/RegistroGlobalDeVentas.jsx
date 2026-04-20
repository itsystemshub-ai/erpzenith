import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function RegistroGlobalDeVentas() {
    const paymentMethods = [
        { label: 'Efectivo', sub: 'USD / Cash', val: '$2,450.00', pct: '17%', icon: 'payments' },
        { label: 'Transferencia', sub: 'Local Bank / Wire', val: '$8,120.00', pct: '57%', icon: 'account_balance' },
        { label: 'Zelle / Digital', sub: 'Digital Payments', val: '$3,633.50', pct: '26%', icon: 'currency_exchange' }
    ];

    const transactions = [
        { id: '#TN-90212', type: 'Mostrador', customer: 'Suministros Industriales S.A.', concept: 'Venta de repuestos motor CAT3406', method: 'Transferencia', amt: '$1,240.00', status: 'Settled' },
        { id: '#TN-90213', type: 'POS', customer: 'Cliente Final D. Lopez', concept: 'Filtros de aire y aceite x4', method: 'Efectivo', amt: '$125.50', status: 'Settled' },
        { id: '#TN-90214', type: 'Crédito', customer: 'Logística del Norte S.R.L.', concept: 'Mantenimiento preventivo flota A2', method: 'Factura 30 Días', amt: '$4,890.00', status: 'Pending' },
        { id: '#TN-90215', type: 'Mostrador', customer: 'Constructora Delta', concept: 'Válvulas de escape reforzadas', method: 'Zelle', amt: '$2,100.00', status: 'Settled' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">payments</span>
                    <span>Ventas <span className="text-white/60 mx-2">|</span> Registro Global</span>
                </div>
            }
        >
            <Head title="Registro Global de Ventas - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Global Dashboard Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Operations Log Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Bitácora de Operaciones v3.2</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Global <br/> <span className="text-stone-700">Sales Log</span></h1>
                    </div>
                </header>

                {/* Hero Metrics Overview */}
                <section className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 flex flex-col justify-between relative overflow-hidden group">
                        <div className="relative z-10 space-y-4">
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic mb-2 block">Acumulado Mensual Auditado</span>
                            <h3 className="text-6xl md:text-8xl font-headline font-black text-white tracking-tighter italic leading-none">$428,590.00</h3>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary font-black">trending_up</span>
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">+12.4% PERFORMANCE OVER PREV_MONTH</span>
                            </div>
                        </div>
                        {/* Background Abstract Data Pattern */}
                        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[300px] text-zinc-950 absolute -right-20 -bottom-20 scale-150 rotate-12">monitoring</span>
                        </div>
                    </div>
                    
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                         {[
                             { l: 'Ventas Hoy', v: '$14,203.50', s: 'POS ACTIVE', c: 'text-primary', bc: 'border-primary' },
                             { l: 'Pendiente Cobro', v: '$8,940.00', s: 'CREDIT LIMIT REACHED', c: 'text-stone-700', bc: 'border-zinc-800' }
                         ].map((m, i) => (
                            <div key={i} className={`bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 border-l-[6px] ${m.bc} shadow-3xl space-y-4`}>
                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] block">{m.l}</span>
                                <span className={`text-4xl font-headline font-black italic tracking-tighter block ${m.c}`}>{m.v}</span>
                                <div className="bg-zinc-950 px-4 py-1.5 rounded-full border border-zinc-800 w-fit">
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest">{m.s}</span>
                                </div>
                            </div>
                         ))}
                    </div>
                </section>

                {/* Sub-Level Analytics */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Payment Methods */}
                    <section className="col-span-12 xl:col-span-5 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 space-y-10">
                        <div className="flex items-center gap-4">
                             <span className="material-symbols-outlined text-primary text-2xl font-black">receipt_long</span>
                             <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Yield <span className="text-primary italic">Distribution</span></h3>
                        </div>
                        <div className="space-y-8">
                            {paymentMethods.map((m, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                                            <span className="material-symbols-outlined text-stone-700 group-hover:text-primary transition-colors">{m.icon}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] block">{m.label}</span>
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest">{m.sub}</span>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <span className="text-lg font-headline font-black text-white italic tracking-tighter block">{m.val}</span>
                                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">{m.pct} TOTAL</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Daily Tendency Chart */}
                    <section className="col-span-12 xl:col-span-7 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 relative overflow-hidden group">
                         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Daily <br/> <span className="text-primary italic">Tendency</span></h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">7-Day Operational Velocity Log</p>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button className="bg-primary text-black px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest italic">Day</button>
                                <button className="bg-zinc-950 text-stone-700 border border-zinc-800 px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">Week</button>
                            </div>
                        </div>

                        {/* Chart Visualization */}
                        <div className="h-48 flex items-end justify-between gap-4 px-6 relative z-10">
                            {[40, 65, 45, 85, 55, 75, 95].map((h, i) => (
                                <div key={i} className={`flex-1 rounded-t-xl transition-all duration-[1.5s] delay-[${i * 100}ms] group/bar relative cursor-pointer ${h > 80 ? 'bg-primary shadow-[0_0_30px_rgba(154,205,50,0.1)]' : 'bg-zinc-950/80 hover:bg-zinc-800'}`} style={{ height: `${h}%` }}>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-black text-white text-[9px] font-black px-3 py-1 rounded-lg">
                                        VAL: {h * 150}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-8 px-6 text-[9px] font-black text-stone-800 uppercase tracking-[0.2em] relative z-10 font-headline italic">
                            {['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'HOY'].map(d => <span key={d}>{d}</span>)}
                        </div>
                    </section>
                </div>

                {/* Detailed Operations Log Table */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                    <div className="p-10 border-b border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-8">
                         <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none text-zinc-700">Transaction <span className="text-stone-800 italic">Registry Log</span></h3>
                         <div className="flex gap-4">
                            <button className="bg-zinc-950 px-8 py-3 rounded-xl border border-zinc-800 text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all italic flex items-center gap-3">
                                <span className="material-symbols-outlined text-lg">filter_list</span>
                                Filtrar Resultados
                            </button>
                            <button className="bg-zinc-950 px-8 py-3 rounded-xl border border-zinc-800 text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all italic flex items-center gap-3">
                                <span className="material-symbols-outlined text-lg">download</span>
                                Export CSV Manifest
                            </button>
                         </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 font-black text-[9px] text-stone-700 uppercase tracking-[0.4em]">
                                    <th className="px-10 py-6 border-b border-zinc-800">Operation ID</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Node Type</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Customer Specification</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Asset Protocol</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-right">Yield Value (USD)</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {transactions.map((tx, i) => (
                                    <tr key={i} className="hover:bg-zinc-950 transition-colors group">
                                        <td className="px-10 py-8 font-mono text-[11px] text-primary tracking-[0.1em] font-bold uppercase">{tx.id}</td>
                                        <td className="px-10 py-8">
                                            <span className={`px-4 py-1.5 rounded-lg border text-[8px] font-black tracking-[0.2em] uppercase ${
                                                tx.type === 'Mostrador' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                tx.type === 'POS' ? 'bg-primary/10 text-primary border-primary/20' :
                                                'bg-amber-500/10 text-amber-500 border-amber-500/20'
                                            }`}>
                                                {tx.type}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 space-y-1">
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest block italic leading-none">{tx.customer}</span>
                                            <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest">{tx.concept}</span>
                                        </td>
                                        <td className="px-10 py-8 text-[9px] font-black text-stone-800 uppercase tracking-widest italic">{tx.method}</td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-white text-lg tracking-tighter italic group-hover:text-primary transition-colors">{tx.amt}</td>
                                        <td className="px-10 py-8 text-center uppercase">
                                             <span className={`material-symbols-outlined text-xl italic ${tx.status === 'Settled' ? 'text-primary' : 'text-stone-700'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                                {tx.status === 'Settled' ? 'check_circle' : 'schedule'}
                                             </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="p-10 bg-zinc-950/20 flex justify-between items-center text-[9px] font-black text-stone-800 uppercase tracking-[0.4em]">
                        <span>Registry Stream: 4 of 142 Active Connections</span>
                        <div className="flex gap-4">
                            {['chevron_left', 'chevron_right'].map(i => (
                                <button key={i} className="w-10 h-10 border border-zinc-800 rounded-xl flex items-center justify-center hover:text-white transition-all">
                                    <span className="material-symbols-outlined">{i}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-16 px-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-2xl uppercase leading-none italic">FORGE GLOBAL REGISTRY</span>
                        <span className="text-stone-800 font-headline text-[10px] font-black uppercase tracking-[0.8em]">End-to-End Sales Synchronization Nucleus</span>
                    </div>
                    <div className="bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">Node Registry Status: <span className="text-primary italic uppercase">All_Sales_Settled_Sync</span></span>
                    </div>
                </footer>
            </div>

            {/* Contextual FAB */}
            <button className="fixed bottom-10 right-10 w-20 h-20 bg-primary text-black rounded-[24px] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group shadow-primary/20">
                <span className="material-symbols-outlined text-4xl font-black">point_of_sale</span>
                <span className="absolute right-full mr-8 bg-black text-white text-[9px] font-black px-6 py-2 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap uppercase tracking-[0.3em] italic border border-zinc-800">Launch POS Terminal Node</span>
            </button>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
