import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeTicketsDeSoporte() {
    const tickets = [
        {
            id: '#TKT-4921-X',
            status: 'CRITICAL',
            module: 'Assembly Line API',
            system: 'Manufacturing Control Unit',
            priority: 'P0 - Immediate',
            lastUpdate: '14 mins ago'
        },
        {
            id: '#TKT-4918-B',
            status: 'IN_PROGRESS',
            module: 'Global Inventory Sync',
            system: 'Warehouse Mgmt System',
            priority: 'P1 - High',
            lastUpdate: '2.5 hours ago'
        },
        {
            id: '#TKT-4915-A',
            status: 'OPEN',
            module: 'Fleet Telemetry Delay',
            system: 'Logistics Engine',
            priority: 'P2 - Normal',
            lastUpdate: 'Yesterday'
        },
        {
            id: '#TKT-4912-F',
            status: 'RESOLVED',
            module: 'Payroll Export Failure',
            system: 'Financials Core',
            priority: 'P2 - Normal',
            lastUpdate: '2 days ago'
        }
    ];

    const stats = [
        { label: 'Critical Pulse', val: '03', sub: 'Active', color: 'text-error', bar: 'w-[65%]', barColor: 'bg-error' },
        { label: 'In Progress', val: '12', sub: 'Tickets', color: 'text-primary', bar: 'w-[42%]', barColor: 'bg-primary' },
        { label: 'Response Time', val: '1.2h', sub: 'Avg', color: 'text-white', bar: 'w-[88%]', barColor: 'bg-white/40' },
        { label: 'Resolution Rate', val: '94%', sub: 'Weekly', color: 'text-white', bar: 'w-[94%]', barColor: 'bg-primary' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">confirmation_number</span>
                    <span>Soporte <span className="text-white/60 mx-2">|</span> Gestión de Tickets</span>
                </div>
            }
        >
            <Head title="Gestión de Tickets de Soporte" />

            <div className="space-y-12 pb-20 px-4">
                {/* Header Section */}
                <header className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Incident Pipeline</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Support Ops v4.4</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Ticket <br/> <span className="text-stone-700">Pipeline</span></h1>
                    </div>
                    <button className="bg-primary text-black px-10 py-6 rounded-[32px] font-black text-xs uppercase tracking-[0.4em] shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 shadow-primary/20">
                        <span className="material-symbols-outlined font-black">add_task</span>
                        Create New Ticket
                    </button>
                </header>

                {/* Metrics Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                            <span className="text-zinc-950 font-headline font-black text-7xl absolute -right-4 -bottom-6 opacity-40 group-hover:scale-110 transition-transform">0{i+1}</span>
                            <div className="relative z-10 space-y-4">
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">{stat.label}</p>
                                <div className="flex items-end gap-3">
                                    <span className={`text-5xl font-headline font-black tracking-tighter italic ${stat.color}`}>{stat.val}</span>
                                    <span className={`text-[10px] font-black uppercase tracking-widest mb-2 ${stat.color === 'text-error' ? 'text-error/60' : 'text-stone-600'}`}>{stat.sub}</span>
                                </div>
                                <div className="h-1 bg-zinc-950 rounded-full mt-6 overflow-hidden">
                                     <div className={`h-full ${stat.barColor} ${stat.bar} shadow-[0_0_10px_rgba(154,205,50,0.3)] transition-all duration-1000`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Ticket Management Table */}
                <section className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                    <div className="p-10 border-b border-zinc-800 flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                        <div className="flex items-center gap-10">
                            {['Active Tickets', 'Closed Archive'].map((tab, i) => (
                                <button key={tab} className={`text-[10px] font-black uppercase tracking-[0.4em] pb-2 transition-all ${
                                    i === 0 ? 'text-primary border-b-2 border-primary' : 'text-stone-700 hover:text-white'
                                }`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-stone-700 group-focus-within:text-primary transition-colors">search</span>
                                <input className="bg-zinc-950 border-none rounded-2xl py-4 pl-14 pr-8 text-[9px] font-black uppercase tracking-[0.3em] text-primary focus:ring-1 focus:ring-primary shadow-inner placeholder:text-stone-900 w-full sm:w-72" placeholder="SEARCH ID OR MODULE..."/>
                            </div>
                            <button className="bg-zinc-950 p-4 rounded-2xl border border-outline-variant/5 text-stone-700 hover:text-primary transition-all active:scale-95">
                                <span className="material-symbols-outlined">filter_list</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-950/30">
                                    {['Ticket ID', 'Status', 'Module / System', 'Priority', 'Update', 'Action'].map(head => (
                                        <th key={head} className="px-10 py-6 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 border-b border-zinc-800">{head}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {tickets.map((tkt, i) => (
                                    <tr key={i} className="group hover:bg-zinc-950 transition-all duration-300">
                                        <td className="px-10 py-8">
                                            <span className="font-headline font-black text-white tracking-widest text-sm uppercase italic">{tkt.id}</span>
                                        </td>
                                        <td className="px-10 py-8">
                                           <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border text-[9px] font-black tracking-[0.3em] uppercase ${
                                               tkt.status === 'CRITICAL' ? 'bg-error/10 text-error border-error/20' : 
                                               tkt.status === 'IN_PROGRESS' ? 'bg-primary/10 text-primary border-primary/20' : 
                                               tkt.status === 'RESOLVED' ? 'bg-zinc-950 text-stone-400 border-zinc-800 opacity-50' : 'bg-zinc-950 text-stone-600 border-zinc-800'
                                           }`}>
                                               {tkt.status === 'CRITICAL' && <span className="w-2 h-2 bg-error rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]"></span>}
                                               {tkt.status.replace('_', ' ')}
                                           </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-sm font-headline font-black text-white uppercase tracking-tighter">{tkt.module}</span>
                                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic">{tkt.system}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className={`text-[10px] font-black uppercase tracking-widest italic ${
                                                tkt.status === 'CRITICAL' ? 'text-error animate-pulse' : 
                                                tkt.priority.includes('High') ? 'text-primary' : 'text-stone-700'
                                            }`}>{tkt.priority}</span>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className="text-[10px] font-black text-stone-700 uppercase tracking-widest">{tkt.lastUpdate}</span>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <button className="p-3 hover:bg-zinc-900 rounded-xl transition-all material-symbols-outlined text-stone-800 hover:text-white">more_horiz</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-10 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em]">Vault Registry // 4 of 128 active cases</span>
                        <div className="flex gap-4">
                            <button className="bg-zinc-950 px-8 py-3 rounded-2xl text-[9px] font-black text-stone-700 uppercase tracking-[0.3em] border border-outline-variant/5 hover:border-white transition-all active:scale-95 flex items-center gap-3 italic">
                                <span className="material-symbols-outlined text-sm">west</span> Prev
                            </button>
                            <button className="bg-zinc-950 px-8 py-3 rounded-2xl text-[9px] font-black text-primary uppercase tracking-[0.3em] border border-primary/20 hover:border-primary transition-all active:scale-95 flex items-center gap-3 italic">
                                Next <span className="material-symbols-outlined text-sm">east</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Advisory Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 border-t border-zinc-900">
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-12 rounded-[56px] border border-outline-variant/5 border-l-[12px] border-l-primary space-y-8 shadow-3xl group">
                         <div className="space-y-2">
                             <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">System <br/> <span className="text-primary italic">Intelligence</span></h3>
                             <p className="text-stone-500 text-[10px] font-black uppercase tracking-[0.4em]">Real-time Latency & Infrastructure Advisory</p>
                         </div>
                         <p className="text-stone-500 text-xs font-semibold leading-relaxed uppercase tracking-wide">
                              All core ERP modules are operating within defined latency parameters. Automated diagnostic routines have been prioritized for assembly line API nodes. No scheduled maintenance for the next 48 hours.
                         </p>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center gap-4 bg-zinc-950/50 p-4 rounded-3xl border border-outline-variant/5">
                                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(154,205,50,0.5)] animate-pulse"></span>
                                <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">DB Cluster 01: NOMINAL</span>
                            </div>
                            <div className="flex items-center gap-4 bg-zinc-950/50 p-4 rounded-3xl border border-outline-variant/5">
                                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(154,205,50,0.5)] animate-pulse"></span>
                                <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">API Gateway: ACTIVE</span>
                            </div>
                         </div>
                    </div>

                    <div className="relative rounded-[56px] overflow-hidden group shadow-3xl border border-outline-variant/10">
                        <img alt="Engineering" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                            <span className="text-primary text-[10px] font-black font-headline uppercase tracking-[0.5em] mb-4 italic">Direct Field Support</span>
                            <h3 className="text-4xl font-headline font-black text-white uppercase tracking-tighter leading-none italic">Consult Site <br/> Engineering Protocols</h3>
                        </div>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-16 px-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-2xl uppercase leading-none italic">FORGE PIPELINE</span>
                        <p className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.6em] max-w-sm leading-relaxed">Precision Infrastructure Operations for Global Resilience Architecture.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-12 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                         <div className="space-y-4">
                            <span className="text-stone-900 font-black tracking-[0.8em] block mb-2 underline pr-4 border-r border-zinc-900">IDENTITY REGISTRY</span>
                            <div className="flex justify-between gap-12"><span>RIF:</span> <span className="text-stone-600 tracking-widest">J-29384756-0</span></div>
                            <div className="flex justify-between gap-12"><span>REG:</span> <span className="text-stone-600 tracking-widest">FORGE-OPS-0441</span></div>
                         </div>
                         <div className="space-y-4 border-l border-zinc-900 pl-8">
                            <span className="text-stone-900 font-black tracking-[0.8em] block mb-2 underline pr-4 border-r border-zinc-900">INCIDENT PROTOCOL</span>
                            <div className="flex items-center gap-4 text-stone-600 group cursor-pointer hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">support_agent</span>
                                <span>+1-800-FORGE-TECH</span>
                            </div>
                            <div className="flex items-center gap-4 text-stone-600 group cursor-pointer hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">terminal</span>
                                <span>FORGE-SSH.INTERNAL.NET</span>
                            </div>
                         </div>
                    </div>
                    <div className="flex items-center gap-6 bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">System: <span className="text-primary italic">ALL PARAMETERS NOMINAL</span></span>
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
