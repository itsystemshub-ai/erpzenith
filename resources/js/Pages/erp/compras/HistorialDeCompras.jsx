import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function HistorialDeCompras() {
    const orders = [
        { id: 'ORD-2024-0089', supplier: 'Acero Continental S.A.', rif: 'J-29384812-0', status: 'Recibido', user: 'Carlos R. Mendoza', amount: '$12,450.00', sColor: 'bg-primary/10 text-primary' },
        { id: 'ORD-2024-0092', supplier: 'Logística Global C.A.', rif: 'J-30491823-1', status: 'Pendiente', user: 'Elena Vasquez', amount: '$4,820.50', sColor: 'bg-amber-500/10 text-amber-500' },
        { id: 'ORD-2024-0075', supplier: 'Lubricantes del Sur', rif: 'J-10293485-3', status: 'Cancelado', user: 'Carlos R. Mendoza', amount: '$1,200.00', sColor: 'bg-error/10 text-error' },
        { id: 'ORD-2024-0064', supplier: 'Maquinarias Industriales', rif: 'J-00123498-5', status: 'Recibido', user: 'Admin_Global', amount: '$45,000.00', sColor: 'bg-primary/10 text-primary' }
    ];

    const insights = [
        { label: 'Total Mensual', value: '$142.8k', sub: '+12% vs last cycle', color: 'border-primary' },
        { label: 'Órdenes Pendientes', value: '24', sub: 'Action required', color: 'border-zinc-800' },
        { label: 'Eficiencia Proveedor', value: '94.2%', sub: 'Avg delivery time', color: 'border-zinc-400' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">history</span>
                    <span>Compras <span className="text-white/60 mx-2">|</span> Historial de Órdenes</span>
                </div>
            }
        >
            <Head title="Historial de Órdenes - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Protocol Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Archival Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Lifecycle Tracking Node</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Order <br/> <span className="text-stone-700">Chronicles</span></h1>
                    </div>
                </header>

                {/* Filter Control Board */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-10 flex flex-col xl:flex-row gap-10 items-end">
                    <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Temporal Range</label>
                            <div className="flex items-center gap-4">
                                <input type="date" className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white text-[11px] font-mono focus:ring-2 focus:ring-primary transition-all" />
                                <span className="text-stone-800 font-black">/</span>
                                <input type="date" className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white text-[11px] font-mono focus:ring-2 focus:ring-primary transition-all" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Provider Entity</label>
                            <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-zinc-400 text-xs focus:ring-2 focus:ring-primary transition-all font-black uppercase tracking-widest italic">
                                <option>All Entity Nodes</option>
                                <option>Acero Continental S.A.</option>
                                <option>Logística Global C.A.</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Protocol Status</label>
                            <div className="flex gap-2 p-1 bg-zinc-950 rounded-2xl border border-zinc-800">
                                {['All', 'Settled', 'Pending'].map((t) => (
                                    <button key={t} className={`flex-1 py-3 text-[10px] font-black uppercase tracking-tighter rounded-xl transition-all ${t === 'All' ? 'bg-primary text-black italic' : 'text-stone-600 hover:text-white'}`}>{t}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="bg-white text-black px-10 py-5 rounded-3xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-primary transition-all italic shadow-2xl flex items-center gap-4 h-16">
                         <span className="material-symbols-outlined text-xl font-black italic">filter_list</span>
                         Process Filters
                    </button>
                </section>

                {/* Ledger Table */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden min-h-[500px] flex flex-col">
                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                                    <th className="px-12 py-6">Order ID</th>
                                    <th className="px-12 py-6">Supplier Identity</th>
                                    <th className="px-12 py-6 text-center">Status</th>
                                    <th className="px-12 py-6">Registry Node (User)</th>
                                    <th className="px-12 py-6 text-right">Aggregate Amount</th>
                                    <th className="px-12 py-6 text-center">Operations</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {orders.map((ord, i) => (
                                    <tr key={i} className="hover:bg-zinc-950/50 group transition-all duration-300">
                                        <td className="px-12 py-8 font-mono text-[13px] text-white font-black tracking-widest">{ord.id}</td>
                                        <td className="px-12 py-8">
                                            <div className="font-headline font-black text-lg text-stone-400 group-hover:text-white transition-colors italic leading-none">{ord.supplier}</div>
                                            <div className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic">{ord.rif}</div>
                                        </td>
                                        <td className="px-12 py-8 text-center uppercase">
                                            <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border italic ${ord.sColor} border-current`}>
                                                {ord.status}
                                            </span>
                                        </td>
                                        <td className="px-12 py-8 text-[11px] font-black text-stone-500 uppercase tracking-widest italic">{ord.user}</td>
                                        <td className="px-12 py-8 text-right font-headline font-black text-2xl text-white italic tracking-tighter group-hover:text-primary transition-colors">{ord.amount}</td>
                                        <td className="px-12 py-8 text-center">
                                            <button className="bg-zinc-950 border border-zinc-800 text-[10px] font-black text-stone-600 uppercase tracking-widest px-6 py-3 rounded-xl hover:text-white hover:border-white transition-all italic">Inspect Node</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-10 border-t border-zinc-900 flex justify-between items-center bg-zinc-950/20">
                         <span className="text-[10px] font-black text-stone-800 uppercase tracking-[0.4em] italic">Archive Data: 04 of 156 Registered Nodes</span>
                         <div className="flex gap-4">
                             <button className="w-12 h-12 rounded-2xl border border-zinc-900 flex items-center justify-center text-stone-800 hover:text-white hover:border-white transition-all"><span className="material-symbols-outlined font-black">chevron_left</span></button>
                             <button className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-black font-headline font-black text-lg italic tracking-widest">01</button>
                             <button className="w-12 h-12 rounded-2xl border border-zinc-900 flex items-center justify-center text-stone-600 hover:text-white hover:border-white transition-all font-headline font-bold">02</button>
                             <button className="w-12 h-12 rounded-2xl border border-zinc-900 flex items-center justify-center text-stone-800 hover:text-white hover:border-white transition-all"><span className="material-symbols-outlined font-black">chevron_right</span></button>
                         </div>
                    </div>
                </section>

                {/* Insights Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {insights.map((ins, i) => (
                        <div key={i} className={`bg-zinc-900 p-10 rounded-[56px] border border-outline-variant/10 border-l-[12px] ${ins.color} shadow-3xl group hover:bg-zinc-800 transition-all duration-500`}>
                            <h3 className="text-[10px] uppercase font-black tracking-[0.4em] text-stone-700 italic mb-6">{ins.label}</h3>
                            <div className="flex items-baseline gap-4">
                                <span className="text-5xl font-headline font-black text-white italic tracking-tighter leading-none">{ins.value}</span>
                                <span className={`text-[10px] font-black uppercase italic ${ins.color === 'border-primary' ? 'text-primary' : ins.color === 'border-zinc-800' ? 'text-error' : 'text-stone-500'}`}>{ins.sub}</span>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-16 px-4">
                    <div className="flex gap-4 items-center">
                        <span className="material-symbols-outlined text-5xl text-stone-800 font-black italic">archive</span>
                        <div className="flex flex-col">
                            <span className="text-white font-headline font-black tracking-[0.2em] text-xl uppercase leading-none italic">Forge Archival Node</span>
                            <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[1em]">Historical Registry Manifest</span>
                        </div>
                    </div>
                    <div className="bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">Telemetry Status: <span className="text-primary italic uppercase tracking-[0.2em]">Full_Tranceability_Node_ACTIVE</span></span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
