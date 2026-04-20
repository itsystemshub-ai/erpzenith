import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CentroDeReportesDeCompras() {
    const supplierPerformance = [
        { name: 'Precision Machining Co.', uptime: '98.2%', trend: 'up', color: 'primary' },
        { name: 'Alloy Steel Foundry Ltd.', uptime: '84.5%', trend: 'down', color: 'error' },
        { name: 'Hydraulic Systems Inc.', uptime: '92.0%', trend: 'up', color: 'primary' }
    ];

    const apAging = [
        { label: 'Current', value: '$412.5K', color: 'text-primary' },
        { label: '1-30 Days', value: '$128.2K', color: 'text-white' },
        { label: '31-60 Days', value: '$45.0K', color: 'text-white' },
        { label: '60+ Days', value: 'CRITICAL: $12.4K', color: 'text-error' }
    ];

    const categories = [
        { name: 'Raw Metallurgy', vol: '42.5 Tons', val: '$642,000', status: 'Stable', sColor: 'bg-lime-500/10 text-lime-500' },
        { name: 'Precision Tooling', vol: '840 Units', val: '$285,120', status: 'Escalating', sColor: 'bg-error/10 text-error' },
        { name: 'Hydraulic Components', vol: '122 Assemblies', val: '$154,200', status: 'Contracted', sColor: 'bg-zinc-800 text-stone-400' },
        { name: 'Abrasives & Finishing', vol: '12 Pallets', val: '$45,800', status: 'Stable', sColor: 'bg-lime-500/10 text-lime-500' }
    ];

    const pendingOrders = [
        { id: 'PO-88219-B', status: 'In Transit (Overseas)', eta: '48H', icon: 'sailing' },
        { id: 'PO-89100-D', status: 'Awaiting QC Sign-off', eta: 'STATION 4', icon: 'emergency', error: true },
        { id: 'PO-88542-C', status: 'Released for Pickup', eta: 'READY', icon: 'local_shipping', active: true },
        { id: 'PO-90012-A', status: 'Manufacturing Phase', eta: '65% COMP', icon: 'settings_backup_restore' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black">analytics</span>
                    <span>Compras <span className="text-white/60 mx-2">|</span> Centro de Reportes</span>
                </div>
            }
        >
            <Head title="Centro de Reportes de Compras - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Protocol Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8 border-b border-zinc-900 pb-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Procurement Intelligence</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">V2.4 Precision Engine</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Purchases <br/> <span className="text-primary italic">Reporting</span></h1>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="bg-zinc-900/50 p-8 rounded-[40px] border border-zinc-800 flex flex-col items-end min-w-[240px]">
                            <span className="text-[10px] font-black text-stone-700 uppercase tracking-widest italic mb-2">Total Monthly Spend</span>
                            <span className="text-3xl font-headline font-black text-white italic tracking-tighter leading-none">$1,420,890.00</span>
                        </div>
                        <div className="bg-primary p-8 rounded-[40px] shadow-2xl shadow-primary/10 flex flex-col items-end min-w-[200px]">
                            <span className="text-[10px] font-black text-black uppercase tracking-widest italic mb-2">Pending Orders</span>
                            <span className="text-3xl font-headline font-black text-black italic tracking-tighter leading-none">142 UNIT</span>
                        </div>
                    </div>
                </header>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Supplier Performance Metrics */}
                    <section className="md:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 flex flex-col gap-10 group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-20 translate-x-20 blur-3xl"></div>
                        
                        <div className="flex justify-between items-start relative z-10">
                            <div className="flex gap-4 items-center">
                                <div className="w-2 h-10 bg-primary"></div>
                                <h3 className="text-2xl font-headline font-black uppercase tracking-tighter italic text-white leading-none">Supplier <span className="text-stone-700 italic">Performance Index</span></h3>
                            </div>
                            <button className="text-[10px] font-black text-primary tracking-[0.4em] uppercase border-b border-primary italic hover:pb-1 transition-all">Deep Analysis</button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10">
                            {supplierPerformance.map((s, i) => (
                                <div key={i} className="space-y-4">
                                    <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest block h-8">{s.name}</span>
                                    <div className="h-1.5 bg-zinc-950 rounded-full w-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-[2s] ${s.color === 'primary' ? 'bg-primary' : 'bg-error'}`} style={{ width: s.uptime }}></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-headline font-black uppercase tracking-tighter text-white italic">{s.uptime} Uptime</span>
                                        <span className={`material-symbols-outlined text-lg font-black italic ${s.trend === 'up' ? 'text-primary' : 'text-error'}`}>{s.trend === 'up' ? 'trending_up' : 'trending_down'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mini Map Visual */}
                        <div className="h-64 bg-zinc-950 rounded-[40px] relative items-center justify-center overflow-hidden group/map border border-zinc-900">
                            <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover/map:grayscale-0 group-hover/map:opacity-100 transition-all duration-1000 scale-110" src="https://images.unsplash.com/photo-1544717305-27a734ef1904?auto=format&fit=crop&q=80&w=1200" alt="Global logistics network visualization" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 z-10 bg-zinc-900/90 backdrop-blur-xl p-8 rounded-3xl border-l-[6px] border-primary flex justify-between items-center">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-500 italic">Core Logistics Status</p>
                                    <p className="text-xl font-headline font-black uppercase text-white tracking-widest italic leading-none">3 Active Shipments En Route</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-3xl font-black animate-pulse">sailing</span>
                            </div>
                        </div>
                    </section>

                    {/* AP Aging Summary */}
                    <section className="md:col-span-4 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-full border-2 border-primary/5 rounded-[56px] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                        
                        <div className="space-y-10 relative z-10">
                            <h3 className="text-2xl font-headline font-black uppercase tracking-tighter italic text-white leading-none">AP Aging <br/> <span className="text-stone-700 italic">Summary</span></h3>
                            <div className="space-y-6">
                                {apAging.map((age, i) => (
                                    <div key={i} className="flex justify-between items-end border-b border-zinc-800 pb-4 group/item hover:border-zinc-500 transition-colors">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 italic">{age.label}</span>
                                        <span className={`text-xl font-headline font-black italic tracking-tighter text-white ${age.color}`}>{age.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-12 pt-10 border-t border-zinc-800 relative z-10 space-y-8">
                            <div className="flex gap-4 items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></div>
                                <p className="text-[9px] font-black text-stone-700 uppercase tracking-widest leading-relaxed">Urgent Attention: Vendor ID #8812 - Logistics Net 60 Contract Violation Detected</p>
                            </div>
                            <button className="w-full py-6 bg-primary text-black font-black font-headline text-xs uppercase tracking-[0.4em] rounded-3xl hover:scale-[1.02] active:scale-95 transition-all italic shadow-2xl shadow-primary/20">Process Settlements</button>
                        </div>
                    </section>

                    {/* Cost Variation Analysis */}
                    <section className="md:col-span-5 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 flex flex-col gap-10 group overflow-hidden">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary text-2xl font-black italic">analytics</span>
                            <h3 className="text-xl font-headline font-black uppercase tracking-tighter italic text-white leading-none">Cost <span className="text-stone-700 italic">Variance Trend</span></h3>
                        </div>
                        
                        <div className="flex-1 flex items-end gap-2 min-h-[200px]">
                            {[40, 55, 45, 75, 90, 100].map((h, i) => (
                                <div key={i} className="w-full relative group/vitem h-full flex flex-col justify-end">
                                    <div className={`w-full rounded-t-xl transition-all duration-700 ${i === 5 ? 'bg-primary shadow-[0_0_20px_rgba(154,205,50,0.3)]' : 'bg-zinc-800 group-hover/vitem:bg-zinc-700'}`} style={{ height: `${h}%` }}></div>
                                    <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-widest transition-opacity duration-300 opacity-0 group-hover/vitem:opacity-100 ${i === 5 ? 'text-primary' : 'text-stone-600'}`}>
                                        {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-zinc-950 p-8 rounded-[32px] border border-zinc-900 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 italic font-headline">Avg. Part Cost Impact</span>
                                <span className="text-xl font-headline font-black text-white italic">+14.2% YoY</span>
                            </div>
                            <p className="text-[9px] font-black text-stone-700 uppercase leading-relaxed tracking-widest italic">Primary driver: Raw material surcharge in Cast Alloy segment detected by node ALPHA-04.</p>
                        </div>
                    </section>

                    {/* Purchase History by Category */}
                    <section className="md:col-span-7 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden flex flex-col">
                        <div className="p-12 pb-6">
                            <h3 className="text-xl font-headline font-black uppercase tracking-tighter italic text-white leading-none">Purchase <span className="text-stone-700 italic">Categorization</span></h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-zinc-950/30 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                                        <th className="px-12 py-6">Asset Category</th>
                                        <th className="px-12 py-6 text-center">Batch Volume</th>
                                        <th className="px-12 py-6 text-right">Manifest Value</th>
                                        <th className="px-12 py-6 text-right">Protocol Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800/50">
                                    {categories.map((c, i) => (
                                        <tr key={i} className="hover:bg-zinc-950/50 transition-colors group">
                                            <td className="px-12 py-8 font-headline font-black uppercase italic text-stone-400 group-hover:text-white transition-colors">{c.name}</td>
                                            <td className="px-12 py-8 text-center text-[11px] font-black text-white italic tracking-widest">{c.vol}</td>
                                            <td className="px-12 py-8 text-right font-headline font-black text-white text-xl tracking-tighter italic group-hover:text-primary transition-colors">{c.val}</td>
                                            <td className="px-12 py-8 text-right">
                                                <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border border-current italic ${c.sColor}`}>{c.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                {/* Pending Orders Status Block */}
                <section className="bg-zinc-900 rounded-[64px] border border-outline-variant/10 shadow-3xl p-16 overflow-hidden relative group">
                    <div className="absolute -right-20 top-0 opacity-[0.03] select-none pointer-events-none scale-150 rotate-[-15deg] group-hover:opacity-[0.05] transition-opacity duration-1000">
                        <span className="text-[20rem] font-black leading-none font-headline tracking-tighter text-white uppercase italic">FORGE</span>
                    </div>
                    
                    <div className="relative z-10 grid grid-cols-1 xl:grid-cols-3 gap-20 items-center">
                        <div className="space-y-10">
                            <span className="material-symbols-outlined text-6xl text-primary font-black italic">precision_manufacturing</span>
                            <div className="space-y-4">
                                <h2 className="text-4xl font-headline font-black uppercase tracking-tighter italic text-white leading-[0.9]">Pending Purchase <br/> <span className="text-primary italic">Order Streams</span></h2>
                                <p className="text-[11px] font-black text-stone-700 uppercase tracking-widest leading-relaxed italic max-w-sm">Real-time telemetry of all currently open requisition cycles from RFQ to final dock arrival. 14 orders currently flagged for "Fast Track" priority node Alpha.</p>
                            </div>
                        </div>

                        <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {pendingOrders.map((ord, i) => (
                                <div key={i} className={`p-8 rounded-[40px] border flex flex-col justify-between h-48 group/card transition-all duration-500 cursor-pointer ${ord.active ? 'bg-primary border-primary' : 'bg-zinc-950 border-zinc-900 hover:border-zinc-700'}`}>
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <p className={`text-[9px] font-black uppercase tracking-[0.3em] italic ${ord.active ? 'text-black/60' : 'text-stone-700'}`}>{ord.status}</p>
                                            <h4 className={`text-2xl font-headline font-black italic tracking-tighter uppercase ${ord.active ? 'text-black' : 'text-white group-hover/card:text-primary'}`}>{ord.id}</h4>
                                        </div>
                                        <span className={`material-symbols-outlined text-3xl font-black italic transition-transform group-hover/card:rotate-12 ${ord.active ? 'text-black' : ord.error ? 'text-error' : 'text-zinc-800 group-hover/card:text-primary'}`}>{ord.icon}</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.4em] italic ${ord.active ? 'text-black' : 'text-stone-600'}`}>{ord.eta}</span>
                                        <div className={`w-12 h-0.5 rounded-full ${ord.active ? 'bg-black/20' : 'bg-zinc-900'}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-16 px-4">
                    <div className="flex gap-12 items-center">
                        <div className="flex flex-col gap-2">
                             <span className="text-[10px] font-black text-stone-800 uppercase tracking-[0.6em] italic">Server Core Access Nodes</span>
                             <div className="flex gap-4">
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] italic">ALPHA-01: OPTIMIZED</span>
                                <span className="text-stone-800 text-[10px] font-black uppercase tracking-[0.2em] italic">BETA_SYNC: 99.9%</span>
                             </div>
                        </div>
                    </div>
                    <span className="text-stone-900 font-headline text-[10px] font-black uppercase tracking-[1em] italic">FORGE REPORTING SUITE V2.4-A</span>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
