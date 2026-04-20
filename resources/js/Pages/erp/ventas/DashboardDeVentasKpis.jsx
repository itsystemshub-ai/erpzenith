import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DashboardDeVentasKpis() {
    const kpis = [
        { label: 'Total Sales Daily', val: '$14,280.00', trend: '+12.4%', trendLabel: 'vs yesterday', icon: 'trending_up', iconColor: 'text-primary' },
        { label: 'Monthly Revenue', val: '$428,950.00', trend: '+5.2%', trendLabel: 'vs target', icon: 'payments', iconColor: 'text-stone-500' },
        { label: 'Inventory Turnover', val: '8.4x', trend: 'Stable', trendLabel: 'annual cycle', icon: 'sync_alt', iconColor: 'text-stone-500' },
        { label: 'Active Quotations', val: '342', trend: '24', trendLabel: 'awaiting approval', icon: 'description', iconColor: 'text-stone-500' }
    ];

    const topProducts = [
        { name: 'Gaskets', units: '1,240 Units', val: '$45,200', icon: 'settings_input_component' },
        { name: 'Pistons', units: '842 Units', val: '$112,800', icon: 'dynamic_form' }
    ];

    const recentSales = [
        { id: 'TX-902341', client: 'Inversiones Navas', item: 'Engine Block Assy (V8)', status: 'Shipped', val: '$4,850.00', statusColor: 'bg-primary/10 text-primary border-primary/20' },
        { id: 'TX-902342', client: 'Logística Central', item: 'Fuel Injector Set x6', status: 'Processing', val: '$1,220.00', statusColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
        { id: 'TX-902343', client: 'Transporte Carabobo', item: 'Head Gasket Multi-Pack', status: 'Delivered', val: '$890.00', statusColor: 'bg-primary/10 text-primary border-primary/20' },
        { id: 'TX-902344', client: 'Mining Ops Corp', item: 'Turbocharger Unit T3', status: 'Shipped', val: '$3,100.00', statusColor: 'bg-primary/10 text-primary border-primary/20' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">dashboard</span>
                    <span>Ventas <span className="text-white/60 mx-2">|</span> Dashboard de KPIs</span>
                </div>
            }
        >
            <Head title="Dashboard de Ventas KPIs" />

            <div className="space-y-12 pb-20 px-4">
                {/* Header Section */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Operational Hub Monitoring</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Sales Engine v4.0</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Sales <br/> <span className="text-stone-700">Hub</span></h1>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-[24px] border border-outline-variant/5 shadow-2xl">
                        <button className="px-6 py-3 text-[10px] font-black uppercase text-primary bg-zinc-900 rounded-full italic tracking-widest">Day</button>
                        <button className="px-6 py-3 text-[10px] font-black uppercase text-stone-700 hover:text-white transition-colors tracking-widest">Week</button>
                        <button className="px-6 py-3 text-[10px] font-black uppercase text-stone-700 hover:text-white transition-colors tracking-widest">Month</button>
                    </div>
                </header>

                {/* KPI Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {kpis.map((kpi, i) => (
                        <div key={i} className="bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 shadow-3xl group hover:bg-zinc-800 transition-all duration-500 relative overflow-hidden">
                            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[100px] text-zinc-950 opacity-40 group-hover:rotate-12 transition-transform">{kpi.icon}</span>
                            <div className="relative z-10 space-y-6">
                                <div className="flex justify-between items-start">
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">{kpi.label}</span>
                                    <span className={`material-symbols-outlined text-xl ${kpi.iconColor}`}>{kpi.icon}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-4xl font-headline font-black text-white tracking-tighter italic block leading-none">{kpi.val}</span>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${kpi.trend.includes('+') ? 'text-primary' : 'text-stone-600'}`}>{kpi.trend}</span>
                                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-tighter">{kpi.trendLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Main Analytics Segment */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Performance Trend Chart */}
                    <section className="col-span-12 xl:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Performance <br/> <span className="text-primary italic">Trend</span></h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Monthly Sales Performance vs Target</p>
                            </div>
                            <div className="flex gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(154,205,50,0.5)]"></span>
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Current Year</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></span>
                                    <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.3em]">Previous Year</span>
                                </div>
                            </div>
                        </div>

                        {/* Chart Visualization */}
                        <div className="h-64 flex items-end justify-between gap-3 relative z-10">
                            {[
                                { m: 'JAN', c: 75, p: 60 },
                                { m: 'FEB', c: 80, p: 55 },
                                { m: 'MAR', c: 90, p: 70 },
                                { m: 'APR', c: 85, p: 65 },
                                { m: 'MAY', c: 100, p: 80 },
                                { m: 'JUN', c: 70, p: 50 }
                            ].map((d, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                                    <div className="w-full flex items-end gap-1.5 h-full">
                                        <div className="w-full bg-zinc-800 rounded-t-lg transition-all duration-700 hover:bg-zinc-700" style={{ height: `${d.p}%` }}></div>
                                        <div className="w-full bg-primary rounded-t-lg transition-all duration-1000 delay-300 hover:brightness-110 shadow-[0_0_20px_rgba(154,205,50,0.1)]" style={{ height: `${d.c}%` }}></div>
                                    </div>
                                    <span className="text-[9px] font-black text-stone-800 uppercase tracking-widest group-hover/bar:text-white transition-colors">{d.m}</span>
                                </div>
                            ))}
                        </div>

                        {/* Background Data Mesh */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(154,205,50,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(154,205,50,.2)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                    </section>

                    {/* Performance Sidebar */}
                    <aside className="col-span-12 xl:col-span-4 space-y-8">
                        {/* Top Products */}
                        <section className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl space-y-10">
                            <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-2xl font-black">workspace_premium</span>
                                Top Products
                            </h3>
                            <div className="space-y-6">
                                {topProducts.map((p, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer hover:translate-x-2 transition-transform">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-stone-700 group-hover:text-primary transition-colors">{p.icon}</span>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{p.name}</span>
                                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest block">{p.units}</span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">{p.val}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Elite Account */}
                        <section className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden border-l-[12px] border-l-primary/30">
                            <div className="relative z-10 space-y-8">
                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] block">Elite Account Protocol</span>
                                <div className="flex items-center gap-6">
                                    <div className="h-16 w-16 rounded-[24px] bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                                        <span className="material-symbols-outlined text-primary text-3xl font-black">stars</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Transporte <br/> <span className="text-primary italic">Carabobo</span></h4>
                                        <span className="text-[9px] font-black text-primary/60 uppercase tracking-widest block">Strategic Partner</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
                                    <div className="space-y-1">
                                        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest block">Lifetime Yield</span>
                                        <span className="text-lg font-headline font-black text-white italic tracking-tighter">$1.2M</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest block">Orders YTD</span>
                                        <span className="text-lg font-headline font-black text-white italic tracking-tighter">48</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>

                {/* Operations Registry */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                    <div className="p-10 border-b border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                         <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Recent Sales <span className="text-stone-700 italic">Operations</span></h3>
                         <button className="bg-zinc-950 px-8 py-3 rounded-full text-[9px] font-black text-primary uppercase tracking-[0.4em] border border-primary/10 hover:bg-primary hover:text-black transition-all italic">Download Manifest Registry</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 font-black text-[10px] text-stone-700 uppercase tracking-[0.4em]">
                                    <th className="px-10 py-6 border-b border-zinc-800">Reference ID</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Client Identity</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Item Specification</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-center">Status</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-right">Value (USD)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {recentSales.map((sale, i) => (
                                    <tr key={i} className="hover:bg-zinc-950 transition-colors group">
                                        <td className="px-10 py-8 font-mono text-[10px] text-primary tracking-[0.2em] font-bold uppercase">{sale.id}</td>
                                        <td className="px-10 py-8 text-sm font-headline font-black text-white uppercase tracking-tighter italic">{sale.client}</td>
                                        <td className="px-10 py-8 text-[10px] font-black text-stone-700 uppercase tracking-widest">{sale.item}</td>
                                        <td className="px-10 py-8 text-center">
                                            <span className={`px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-[0.3em] ${sale.statusColor}`}>
                                                {sale.status}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-white text-lg tracking-tighter italic group-hover:text-primary transition-colors">{sale.val}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-16 px-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-2xl uppercase leading-none italic">FORGE ENGINE SALES</span>
                        <p className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.6em] max-w-sm leading-relaxed">Supplying the mechanical backbone for Venezuela's industrial heavy-duty performance.</p>
                    </div>
                    <div className="flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                        <div className="flex items-center gap-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(154,205,50,0.5)]"></span>
                            <span>ALL MODULES OPERATIONAL</span>
                        </div>
                        <div className="h-5 w-px bg-zinc-900"></div>
                        <span>Latency: 14ms // REVISION: 2024.04</span>
                    </div>
                    <div className="bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">System: <span className="text-primary italic">REVENUE_STABLE</span></span>
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
