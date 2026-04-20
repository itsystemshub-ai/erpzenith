import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DashboardDeCompras() {
    const kpis = [
        { label: 'Gasto Mensual (USD)', value: '$42,850.22', trend: '12%', up: true, border: 'border-primary' },
        { label: 'Cuentas por Pagar', value: '$128,400', tag: 'Urgente', tagType: 'error', border: 'border-zinc-800' },
        { label: 'Variación Costo Promedio', value: '+4.8%', sub: 'Tendencia Anual', border: 'border-zinc-400' },
        { label: 'Estado de Órdenes', value: '85%', progress: 85, border: 'border-primary' }
    ];

    const weeklyData = [
        { label: 'Sem 01', actual: 16, projected: 24 },
        { label: 'Sem 02', actual: 28, projected: 40 },
        { label: 'Sem 03', actual: 48, projected: 32 },
        { label: 'Sem 04', actual: 52, projected: 56 },
        { label: 'Sem 05', actual: 12, projected: 20 }
    ];

    const topSuppliers = [
        { id: '01', name: 'Industrial Parts Corp', volume: '$85,000/mes' },
        { id: '02', name: 'Heavy Duty Engine S.A.', volume: '$52,200/mes' },
        { id: '03', name: 'Precision Gears Ltd', volume: '$41,800/mes' }
    ];

    const receptions = [
        { id: '#REC-99201', supplier: 'Industrial Parts Corp', category: 'MOTORES', date: '24/05/2024', val: '$12,450.00', status: 'Verificado' },
        { id: '#REC-99200', supplier: 'Heavy Duty Engine S.A.', category: 'TRANSMISIONES', date: '23/05/2024', val: '$8,900.00', status: 'Pendiente' },
        { id: '#REC-99199', supplier: 'Precision Gears Ltd', category: 'PIÑONES', date: '23/05/2024', val: '$3,120.50', status: 'Verificado' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">shopping_cart</span>
                    <span>Compras <span className="text-white/60 mx-2">|</span> Dashboard de Control</span>
                </div>
            }
        >
            <Head title="Dashboard de Compras - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Header Section */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Supply Chain Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Purchase Intelligence MOD_01</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Purchase <br/> <span className="text-stone-700">Analytics</span></h1>
                    </div>
                    <button className="bg-primary text-black px-12 py-5 rounded-[24px] text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all italic flex items-center gap-4 group">
                         <span className="material-symbols-outlined text-xl font-black group-hover:rotate-90 transition-transform">add_circle</span>
                         Generar Nueva Orden
                    </button>
                </header>

                {/* KPI Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {kpis.map((kpi, i) => (
                        <div key={i} className={`bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 border-b-[6px] ${kpi.border} shadow-3xl group hover:bg-zinc-800 transition-all duration-500 flex flex-col justify-between h-48`}>
                            <div className="flex justify-between items-start">
                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">{kpi.label}</span>
                                {kpi.tag && (
                                    <span className="bg-error/10 text-error px-4 py-1 rounded-full text-[8px] font-black tracking-widest uppercase border border-error/20">{kpi.tag}</span>
                                )}
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-end justify-between">
                                    <span className="text-3xl font-headline font-black text-white italic tracking-tighter leading-none">{kpi.value}</span>
                                    {kpi.trend && (
                                        <div className="flex items-center gap-1 text-primary">
                                            <span className="material-symbols-outlined text-sm font-black">trending_up</span>
                                            <span className="text-[10px] font-black italic">{kpi.trend}</span>
                                        </div>
                                    )}
                                </div>
                                {kpi.progress && (
                                    <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full group-hover:shadow-[0_0_15px_rgba(154,205,50,0.5)] transition-all duration-[2s]" style={{ width: `${kpi.progress}%` }}></div>
                                    </div>
                                )}
                                {kpi.sub && <span className="text-[9px] font-black text-stone-800 uppercase tracking-widest block">{kpi.sub}</span>}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Analytics Middle Section */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                    {/* Weekly Chart */}
                    <section className="xl:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 space-y-12 relative overflow-hidden group">
                         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Weekly <br/> <span className="text-primary italic">Purchase Flow</span></h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Asset Procurement Analytics</p>
                            </div>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-3">
                                    <span className="w-4 h-4 bg-primary rounded-sm italic"></span>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest">Actual Nodes</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-4 h-4 bg-zinc-800 rounded-sm italic border border-zinc-700"></span>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest">Projected Stream</span>
                                </div>
                            </div>
                        </div>

                        {/* Chart Simulation */}
                        <div className="h-64 flex items-end justify-between gap-6 px-4 relative z-10">
                            {weeklyData.map((d, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar h-full justify-end">
                                    <div className="w-full flex gap-1 items-end h-full">
                                        <div className="flex-1 bg-zinc-800/50 rounded-t-lg transition-all duration-[1s]" style={{ height: `${d.projected}%` }}></div>
                                        <div className="flex-1 bg-primary rounded-t-lg shadow-xl shadow-primary/5 group-hover/bar:bg-white transition-all duration-[1s]" style={{ height: `${d.actual}%` }}></div>
                                    </div>
                                    <span className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic">{d.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Top Suppliers */}
                    <section className="xl:col-span-4 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 space-y-10">
                        <div className="flex items-center gap-4">
                             <span className="material-symbols-outlined text-primary text-2xl font-black">factory</span>
                             <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Core <span className="text-primary italic">Suppliers</span></h3>
                        </div>
                        <div className="space-y-6">
                            {topSuppliers.map((s, i) => (
                                <div key={i} className="bg-zinc-950 p-6 rounded-[32px] border border-zinc-900 flex items-center justify-between group hover:border-primary/40 cursor-pointer transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-stone-700 font-headline font-black text-lg group-hover:text-primary transition-colors italic">{s.id}</div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest block">{s.name}</span>
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest italic">{s.volume}</span>
                                        </div>
                                    </div>
                                    <span className="material-symbols-outlined text-stone-800 group-hover:text-primary translate-x-0 group-hover:translate-x-2 transition-all">arrow_forward</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Recent Receptions Table */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                    <div className="p-10 border-b border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
                         <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none text-zinc-700 font-headline">Operations <span className="text-stone-800 italic">Reception Log</span></h3>
                         <button className="bg-zinc-950 px-8 py-3 rounded-xl border border-zinc-800 text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all italic flex items-center gap-3">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Export Reception Manifest
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 font-black text-[9px] text-stone-700 uppercase tracking-[0.4em]">
                                    <th className="px-10 py-6 border-b border-zinc-800">Node ID</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Entity Provider</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Asset Class</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-center">Entry Timestamp</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-right">Manifest Yield</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-center">Protocol Status</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {receptions.map((it, i) => (
                                    <tr key={i} className="hover:bg-zinc-950 transition-colors group">
                                        <td className="px-10 py-8 font-mono text-[11px] text-primary tracking-[0.1em] font-bold uppercase">{it.id}</td>
                                        <td className="px-10 py-8 text-[11px] font-black text-white italic uppercase tracking-widest">{it.supplier}</td>
                                        <td className="px-10 py-8">
                                            <span className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-lg text-[8px] font-black text-stone-600 uppercase tracking-widest italic">{it.category}</span>
                                        </td>
                                        <td className="px-10 py-8 text-center text-[10px] font-black text-stone-800 uppercase tracking-widest">{it.date}</td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-white text-lg tracking-tighter italic group-hover:text-primary transition-colors">{it.val}</td>
                                        <td className="px-10 py-8 text-center uppercase">
                                             <div className={`flex items-center justify-center gap-3 ${it.status === 'Verificado' ? 'text-primary' : 'text-stone-700'}`}>
                                                <div className={`w-2 h-2 rounded-full ${it.status === 'Verificado' ? 'bg-primary' : 'bg-stone-700'}`}></div>
                                                <span className="text-[9px] font-black tracking-[0.2em] italic">{it.status}</span>
                                             </div>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <button className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-stone-600 hover:text-white transition-all"><span className="material-symbols-outlined text-lg">more_vert</span></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-16 px-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-2xl uppercase leading-none italic">FORGE PROCUREMENT CORE</span>
                        <span className="text-stone-800 font-headline text-[10px] font-black uppercase tracking-[0.8em]">End-to-End Asset Acquisition Nucleus</span>
                    </div>
                    <div className="bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">System Protocol: <span className="text-primary italic uppercase tracking-[0.2em]">Optimized_Procurement_Sync</span></span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
