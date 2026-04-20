import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CentroDeReportesDeVentas() {
    const topEngines = [
        { rank: '01', name: 'V12 Core-X Turbine', rev: '$124.2M Rev.', color: 'text-primary/30' },
        { rank: '02', name: 'Hydra-Flow P6', rev: '$98.5M Rev.', color: 'text-stone-300' },
        { rank: '03', name: 'Apex Gear-Shift 4', rev: '$76.1M Rev.', color: 'text-stone-300' },
        { rank: '04', name: 'Nano-Lubricant 500', rev: '$42.8M Rev.', color: 'text-stone-300' }
    ];

    const regions = [
        { label: 'Americas', val: '$212M', active: true },
        { label: 'EMEA', val: '$148M', active: false },
        { label: 'APAC', val: '$92M', active: false },
        { label: 'Other', val: '$30M', active: false }
    ];

    const transactions = [
        { id: '#FT-882109', customer: 'General Dynamics Corp', product: 'V12 Core-X', rep: 'Elara Vance', date: 'OCT 12, 2024', rev: '$1,240,000.00', status: 'Settled' },
        { id: '#FT-882110', customer: 'Boeing Industrial', product: 'Hydra-Flow P6', rep: 'Marcus Sterling', date: 'OCT 11, 2024', rev: '$845,200.00', status: 'Settled' },
        { id: '#FT-882111', customer: 'SpaceX Heavy Fab', product: 'Apex Gear-Shift 4', rep: 'Alexander Forge', date: 'OCT 10, 2024', rev: '$2,100,500.00', status: 'Pending' },
        { id: '#FT-882112', customer: 'Tesla Gigafactory', product: 'Nano-Lubricant 500', rep: 'Elara Vance', date: 'OCT 09, 2024', rev: '$312,000.00', status: 'Settled' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">analytics</span>
                    <span>Ventas <span className="text-white/60 mx-2">|</span> Centro de Reportes</span>
                </div>
            }
        >
            <Head title="Centro de Reportes de Ventas - Industrial Forge" />

            <div className="space-y-16 pb-20 px-4">
                {/* Hero Performance Header */}
                <header className="relative flex flex-col xl:flex-row xl:items-end justify-between gap-12 mt-8">
                    <div className="space-y-8 lg:col-span-8">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Reporting Suite Suite</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Precision Output v2.4</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Annual <br/> <span className="text-stone-700">Performance</span></h1>
                        <p className="max-w-2xl text-stone-500 text-sm font-semibold uppercase leading-relaxed tracking-wide italic"> Fiscal Year 2024 industrial output analysis. High-precision telemetry reflecting a 12.4% increase in heavy machinery turnover.</p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-6 bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/5 shadow-3xl">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] mb-2">Total Yield Revenue</span>
                            <span className="text-5xl font-headline font-black text-primary italic tracking-tighter uppercase leading-none">$482.9M</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-primary/10 px-6 py-3 rounded-full flex items-center gap-3 border border-primary/10">
                                <span className="material-symbols-outlined text-primary text-xl font-black">trending_up</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">+12.4% YOY</span>
                            </div>
                            <div className="bg-zinc-900 px-6 py-3 rounded-full border border-zinc-800">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-600">Q4 PROJECTED: $142M</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Precision Filters Bar */}
                <div className="flex flex-wrap items-center gap-6 py-8 border-y border-zinc-900">
                    <div className="flex items-center gap-3 bg-zinc-950 p-2 rounded-2xl border border-zinc-900">
                        <button className="px-6 py-3 text-[10px] font-black tracking-widest uppercase bg-primary text-black rounded-xl italic">All Time</button>
                        <button className="px-6 py-3 text-[10px] font-black tracking-widest uppercase text-stone-700 hover:text-white transition-colors">Yearly</button>
                        <button className="px-6 py-3 text-[10px] font-black tracking-widest uppercase text-stone-700 hover:text-white transition-colors">Monthly</button>
                    </div>
                    <div className="h-10 w-px bg-zinc-900 mx-4 hidden lg:block"></div>
                    <div className="flex items-center gap-4">
                        {['Global Sales Reps', 'Product Category'].map((f, i) => (
                            <select key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl text-[9px] font-black uppercase tracking-[0.3em] py-3 pl-6 pr-12 focus:ring-2 focus:ring-primary text-stone-400">
                                <option>{f}</option>
                            </select>
                        ))}
                    </div>
                    <div className="ml-auto flex items-center gap-6">
                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em]">Active Filters: <span className="text-primary italic">02</span></span>
                        <button className="text-[9px] font-black text-primary uppercase tracking-[0.4em] border-b-2 border-primary/20 pb-1 hover:border-primary transition-all italic">Clear All Filters</button>
                    </div>
                </div>

                {/* Dashboard Bento Grid */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Revenue Pulse Chart */}
                    <section className="col-span-12 xl:col-span-9 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 relative overflow-hidden group">
                         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Revenue <br/> <span className="text-primary italic">Pulse</span></h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Monthly Sales Velocity / USD Millions</p>
                            </div>
                        </div>

                        {/* Chart Visualization */}
                        <div className="h-72 flex items-end justify-between gap-2 px-6 relative z-10">
                            {[40, 55, 45, 70, 60, 85, 50, 65, 75, 80, 90, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-zinc-950/50 rounded-t-2xl transition-all duration-700 group hover:bg-zinc-800 relative cursor-pointer" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                        <div className="bg-primary text-black text-[9px] font-black px-3 py-1.5 rounded-lg shadow-2xl skew-x-[-10deg]">
                                            VAL: {h}M
                                        </div>
                                    </div>
                                    {h === 85 && <div className="absolute inset-0 bg-primary/20 rounded-t-2xl border-t-4 border-primary shadow-[0_0_30px_rgba(154,205,50,0.1)]"></div>}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-8 px-6 text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] relative z-10">
                            {['JAN', 'MAR', 'MAY', 'JUL', 'SEP', 'NOV'].map(m => <span key={m}>{m}</span>)}
                        </div>

                        {/* Background Data Mesh */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(154,205,50,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(154,205,50,.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                    </section>

                    {/* Top Engines Sidebar */}
                    <section className="col-span-12 xl:col-span-3 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-10 flex flex-col justify-between group">
                        <div className="space-y-10">
                            <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-2xl font-black">precision_manufacturing</span>
                                Top Engines
                            </h3>
                            <div className="space-y-8">
                                {topEngines.map((e, i) => (
                                    <div key={i} className="flex items-center gap-6 group/item cursor-pointer">
                                        <span className={`text-4xl font-headline font-black italic tracking-tighter ${e.color}`}>{e.rank}</span>
                                        <div className="space-y-1">
                                            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] group-hover/item:text-primary transition-colors">{e.name}</h4>
                                            <p className="text-[9px] font-black text-stone-700 uppercase tracking-widest">{e.rev}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="w-full bg-zinc-950 text-stone-700 border border-zinc-800 py-4 rounded-2xl font-black text-[9px] uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all active:scale-95 italic mt-12">View Full Inventory</button>
                    </section>

                    {/* Regional Density */}
                    <section className="col-span-12 lg:col-span-6 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 relative overflow-hidden group">
                        <div className="relative z-10 space-y-10">
                            <div>
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none mb-3">Regional <br/> <span className="text-primary italic">Density</span></h3>
                                <p className="text-[9px] font-black text-primary/60 uppercase tracking-[0.4em] italic">Primary Hub: Chicago, IL // Central Logistics</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {regions.map((r, i) => (
                                    <div key={i} className={`p-6 rounded-[32px] border ${r.active ? 'bg-zinc-950/80 border-primary/20 border-l-[6px] border-l-primary' : 'bg-transparent border-zinc-800 opacity-60'}`}>
                                        <p className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] mb-2">{r.label}</p>
                                        <p className="text-3xl font-headline font-black text-white italic tracking-tighter">{r.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Background Abstract Map Decor */}
                        <div className="absolute -right-20 -top-20 opacity-10 group-hover:scale-110 transition-transform duration-[2000ms]">
                            <span className="material-symbols-outlined text-[400px] text-zinc-950" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                        </div>
                    </section>

                    {/* Sales Rep Spotlight */}
                    <section className="col-span-12 lg:col-span-6 bg-primary rounded-[56px] shadow-3xl p-12 flex flex-col justify-between group relative overflow-hidden">
                        <div className="relative z-10 flex justify-between items-start">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-headline font-black text-black uppercase tracking-tighter italic leading-none">Top <br/> <span className="opacity-40 italic">Performer</span></h3>
                                <p className="text-[9px] font-black text-black/50 uppercase tracking-[0.4em]">Q3 Sales Leader Protocol</p>
                            </div>
                            <div className="h-16 w-16 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                                <span className="material-symbols-outlined text-black text-4xl font-black italic" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                            </div>
                        </div>

                        <div className="relative z-10 flex items-center gap-10">
                             <div className="w-32 h-32 rounded-[48px] overflow-hidden border-4 border-black/10 shadow-2xl shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105">
                                <img alt="Top Performer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" />
                             </div>
                             <div className="space-y-2">
                                <h4 className="text-4xl font-headline font-black text-black uppercase tracking-tighter italic leading-tight">Elara <br/> <span className="opacity-40 italic">Vance</span></h4>
                                <span className="text-[10px] font-black text-black uppercase tracking-[0.3em] block">Senior Accounts Executive</span>
                             </div>
                        </div>

                        <div className="relative z-10 grid grid-cols-3 gap-8 border-t border-black/10 pt-8 mt-8">
                            {[
                                { l: 'Closed', v: '$12.4M' },
                                { l: 'Pipeline', v: '$4.8M' },
                                { l: 'Win Rate', v: '84%' }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                     <span className="text-[8px] font-black text-black/40 uppercase tracking-widest block">{stat.l}</span>
                                     <span className="text-xl font-headline font-black text-black italic tracking-tighter">{stat.v}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* High-Density Transaction Log */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                    <div className="p-10 border-b border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="space-y-2">
                            <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Transaction <span className="text-stone-700 italic">Log</span></h3>
                            <p className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Detailed Transaction Telemetry / Real-time Sync Hub</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center hover:text-primary transition-all text-stone-700">
                                <span className="material-symbols-outlined">filter_list</span>
                            </button>
                            <button className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center hover:text-primary transition-all text-stone-700">
                                <span className="material-symbols-outlined">file_download</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 font-black text-[10px] text-stone-700 uppercase tracking-[0.4em]">
                                    <th className="px-10 py-6 border-b border-zinc-800">Transaction ID</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Customer Entity</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Product Line</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Sales Rep</th>
                                    <th className="px-10 py-6 border-b border-zinc-800">Date Stamp</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-right">Revenue (USD)</th>
                                    <th className="px-10 py-6 border-b border-zinc-800 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {transactions.map((tx, i) => (
                                    <tr key={i} className="hover:bg-zinc-950 transition-colors group">
                                        <td className="px-10 py-8 font-mono text-[10px] text-primary tracking-[0.2em] font-bold uppercase">{tx.id}</td>
                                        <td className="px-10 py-8 text-sm font-headline font-black text-white uppercase tracking-tighter italic">{tx.customer}</td>
                                        <td className="px-10 py-8 text-[9px] font-black text-stone-700 uppercase tracking-widest">{tx.product}</td>
                                        <td className="px-10 py-8 text-[9px] font-black text-white uppercase tracking-widest italic">{tx.rep}</td>
                                        <td className="px-10 py-8 text-[9px] font-black text-stone-800 uppercase tracking-[0.1em]">{tx.date}</td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-white text-lg tracking-tighter italic group-hover:text-primary transition-colors">{tx.rev}</td>
                                        <td className="px-10 py-8 text-center">
                                            <span className={`px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-[0.3em] ${tx.status === 'Settled' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-zinc-950 text-stone-700 border-zinc-800'}`}>
                                                {tx.status}
                                            </span>
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
                        <span className="text-white font-headline font-black tracking-[0.5em] text-2xl uppercase leading-none italic">FORGE REPORTING SUITE</span>
                        <span className="text-stone-800 font-headline text-[10px] font-black uppercase tracking-[0.6em]">Annual Performance Audit Registry</span>
                    </div>
                    <div className="flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                        <span>ENTRIES: 2,841</span>
                        <div className="h-5 w-px bg-zinc-900"></div>
                        <span>STATUS: <span className="text-primary italic uppercase">All Nodes Sync</span></span>
                    </div>
                    <div className="bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">Revision: <span className="text-primary italic">2024.04.DOC</span></span>
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
