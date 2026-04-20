import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ErpDashboardForgeOps() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">dashboard</span>
                    <span>Forge ERP <span className="text-white/60 mx-2">|</span> Ops Control</span>
                </div>
            }
        >
            <Head title="ERP Dashboard - Forge Ops" />

            <div className="space-y-12 pb-20 px-4">
                {/* Operations Header */}
                <header className="relative flex flex-col xl:flex-row xl:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Fleet Overview Operations</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Precision Logistics v2.0.4</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Mayor de Repuesto <br/> <span className="text-stone-700">La Cima, C.A.</span></h1>
                        <p className="text-stone-500 font-headline text-xs font-black uppercase tracking-widest italic">RIF: J-40308741-5 • VALENCIA, VENEZUELA</p>
                    </div>
                    <div className="flex gap-4">
                         <div className="bg-zinc-900 px-8 py-4 rounded-[24px] border border-outline-variant/5 shadow-2xl flex flex-col">
                            <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] mb-1">System Uptime</span>
                            <span className="text-2xl font-headline font-black text-white italic tracking-tighter uppercase leading-none">99.98%</span>
                         </div>
                         <div className="bg-primary px-8 py-4 rounded-[24px] shadow-2xl shadow-primary/20 flex flex-col">
                            <span className="text-[9px] font-black text-black/40 uppercase tracking-[0.4em] mb-1">Infrastructure</span>
                            <span className="text-2xl font-headline font-black text-black italic tracking-tighter uppercase leading-none">OPTIMAL</span>
                         </div>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-8">
                    {/* Inventory Control - Large Module */}
                    <section className="col-span-12 xl:col-span-8 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl p-10 relative overflow-hidden group">
                        <span className="material-symbols-outlined absolute -right-6 -top-6 text-[180px] text-zinc-950 opacity-40 group-hover:rotate-12 transition-transform">inventory_2</span>
                        <div className="relative z-10 space-y-12">
                            <div className="flex justify-between items-start">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-zinc-950 rounded-2xl border border-outline-variant/5 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Inventory <span className="text-primary italic">Control</span></h3>
                                            <p className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Real-time stock movement tracking</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-[10px] font-black text-primary uppercase tracking-[0.4em] border-b-2 border-primary/50 pb-1 hover:text-white hover:border-white transition-all italic">Manage Catalog</button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {[
                                    { l: 'Active Stock', v: '14,204', s: 'Units', c: 'text-white', bc: 'border-zinc-800' },
                                    { l: 'Critical Alerts', v: '05', s: 'Items', c: 'text-error', bc: 'border-error/20' },
                                    { l: 'Turnover Rate', v: '12.4%', s: 'Monthly', c: 'text-primary', bc: 'border-primary/20' }
                                ].map((stat, i) => (
                                    <div key={i} className={`border-l-4 ${stat.bc} pl-8 py-2 space-y-2`}>
                                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">{stat.l}</span>
                                        <div className="flex items-baseline gap-2">
                                            <span className={`text-4xl font-headline font-black tracking-tighter italic ${stat.c}`}>{stat.v}</span>
                                            <span className="text-[10px] font-black text-stone-700 uppercase tracking-widest">{stat.s}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Visual Stock Chart */}
                            <div className="h-40 w-full bg-zinc-950/50 rounded-[32px] border border-outline-variant/5 flex items-end gap-2 p-6 overflow-hidden mt-8 shadow-inner">
                                {[30, 45, 60, 40, 85, 55, 30, 95, 50, 70, 40, 60, 30, 80, 50].map((h, i) => (
                                    <div key={i} 
                                        className={`flex-1 rounded-t-lg transition-all duration-700 delay-[${i * 50}ms] ${
                                            h > 80 ? 'bg-primary shadow-[0_0_15px_rgba(154,205,50,0.4)]' : 
                                            h < 40 ? 'bg-zinc-800' : 'bg-zinc-900 group-hover:bg-zinc-800'
                                        }`} 
                                        style={{ height: `${h}%` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Revenue Performance */}
                    <section className="col-span-12 xl:col-span-4 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl p-10 relative overflow-hidden group border-l-[12px] border-l-primary/20">
                        <span className="material-symbols-outlined absolute -right-6 -top-6 text-[160px] text-zinc-950 opacity-40 group-hover:rotate-12 transition-transform">trending_up</span>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <span className="bg-primary/10 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/20 italic">Revenue Analysis</span>
                                    <div className="space-y-1">
                                        <h3 className="text-4xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Yield <br/> <span className="text-primary italic">Performance</span></h3>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                     <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] block">Weekly Gross Revenue</span>
                                     <span className="text-5xl font-headline font-black text-white tracking-tighter italic">$128,450.00</span>
                                </div>
                                <div className="flex items-center gap-4 bg-zinc-950 p-6 rounded-[32px] border border-outline-variant/5">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                         <span className="material-symbols-outlined text-primary text-xl">shopping_bag</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest block">24 Pending Orders</span>
                                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">+12.4% PERFORMANCE DELTA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 bg-white text-black py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all">View Details</button>
                                <button className="w-16 h-16 bg-zinc-950 text-stone-700 border border-zinc-800 rounded-2xl flex items-center justify-center hover:text-white transition-all"><span className="material-symbols-outlined">share</span></button>
                            </div>
                        </div>
                    </section>

                    {/* Logistics Module */}
                    <section className="col-span-12 lg:col-span-4 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl p-10 space-y-10">
                        <div className="flex items-center gap-4">
                             <span className="material-symbols-outlined text-primary text-2xl shrink-0">local_shipping</span>
                             <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Incoming <span className="text-primary italic">Logistics</span></h3>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] block">Shipments in Transit (3)</span>
                                {[
                                    { id: 'CUMMINS PARTS #402', eta: '24H', active: true },
                                    { id: 'VOLVO ASSEMBLIES', eta: '4D', active: false }
                                ].map((ship, i) => (
                                    <div key={i} className={`flex items-center justify-between p-5 rounded-2xl border ${ship.active ? 'bg-zinc-950/50 border-primary/20' : 'bg-transparent border-zinc-900 opacity-60'}`}>
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest italic">{ship.id}</span>
                                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-tighter">ETA: {ship.eta}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6 border-t border-zinc-800">
                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] block mb-2">Total Pending Payments</span>
                                <span className="text-3xl font-headline font-black text-white tracking-tighter italic">$12,400.00</span>
                            </div>
                        </div>
                    </section>

                    {/* Health Module */}
                    <section className="col-span-12 lg:col-span-4 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl p-10 space-y-10">
                        <div className="flex items-center gap-4">
                             <span className="material-symbols-outlined text-primary text-2xl shrink-0">settings_suggest</span>
                             <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Infrastructure <span className="text-primary italic">Health</span></h3>
                        </div>
                        <div className="space-y-6">
                            {[
                                { l: 'Core API Status', v: 'OPERATIONAL', c: 'text-primary' },
                                { l: 'User Management', v: '12 Active Admins', c: 'text-white' },
                                { l: 'Backup Sequence', v: '45 MIN AGO', c: 'text-stone-700' }
                            ].map((row, i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-800/50 last:border-none">
                                    <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.3em]">{row.l}</span>
                                    <span className={`text-[10px] font-black uppercase tracking-widest italic ${row.c}`}>{row.v}</span>
                                </div>
                            ))}
                            <div className="pt-6">
                                <button className="w-full bg-zinc-950 text-stone-700 border border-zinc-800 py-4 rounded-2xl font-black text-[9px] uppercase tracking-[0.4em] hover:text-white hover:border-white transition-all active:scale-95 italic">Access Dev Tools Overlay</button>
                            </div>
                        </div>
                    </section>

                    {/* WIP Modules */}
                    <section className="col-span-12 lg:col-span-4 grid grid-rows-3 gap-4">
                        {[
                            { name: 'Contabilidad', sub: 'Work in Progress', icon: 'account_balance' },
                            { name: 'Finanzas', sub: 'Phase 2: Alpha Testing', icon: 'monetization_on' },
                            { name: 'RRHH', sub: 'Module Pending Release', icon: 'groups' }
                        ].map((m, i) => (
                            <div key={i} className="bg-zinc-900/50 rounded-[32px] border border-dashed border-zinc-800 p-6 flex items-center gap-6 grayscale opacity-40 group/wip hover:opacity-100 hover:grayscale-0 hover:bg-zinc-900 transition-all cursor-pointer relative overflow-hidden">
                                <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center shrink-0 border border-zinc-800">
                                    <span className="material-symbols-outlined text-stone-700 group-hover/wip:text-primary transition-colors">{m.icon}</span>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">{m.name}</h4>
                                    <p className="text-[8px] font-black text-stone-700 uppercase tracking-widest">{m.sub}</p>
                                </div>
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/wip:opacity-100 flex items-center justify-center transition-opacity">
                                     <span className="text-[8px] font-black text-primary uppercase border border-primary/20 px-3 py-1 rounded-full bg-black/80 tracking-[0.2em]">En Construcción</span>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Extended Industrial Footer */}
                <footer className="mt-24 pt-20 border-t border-zinc-900">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
                        <div className="lg:col-span-5 space-y-8">
                            <span className="text-white font-headline font-black tracking-[0.5em] text-3xl uppercase leading-none italic">FORGE ERP OPERATIONS</span>
                            <p className="text-stone-800 font-headline text-[10px] font-black uppercase tracking-[0.6em] max-w-sm leading-relaxed">Leader in high-performance industrial engine parts distribution. Engineering reliability and supply chain precision for Venezuela's heavy machinery sector.</p>
                            <div className="flex gap-6">
                                {['public', 'corporate_fare'].map(icon => (
                                    <button key={icon} className="w-12 h-12 bg-zinc-950 text-stone-700 border border-zinc-900 rounded-xl hover:text-primary transition-all flex items-center justify-center">
                                        <span className="material-symbols-outlined text-xl">{icon}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-3 space-y-8">
                            <span className="text-stone-900 font-black tracking-[0.8em] block mb-4 underline italic">HEADQUARTERS REGISTRY</span>
                            <div className="space-y-4">
                                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-relaxed">AV. 119, EDIF. MULTICENTRO PASEO EL PARRAL</p>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-widest">VALENCIA, EDO. CARABOBO</p>
                                <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic">VENEZUELA // CP 2001</p>
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-8 border-l border-zinc-900 pl-10">
                            <span className="text-stone-900 font-black tracking-[0.8em] block mb-4 underline italic">COMMUNICATIONS GRID</span>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest">Voice Terminal</span>
                                    <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">+58 424-4582766 / +58 424-4042558</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest">Data Streams</span>
                                    <p className="text-[10px] font-black text-white uppercase tracking-[0.1em]">LACIMA.REPUESTOS@GMAIL.COM</p>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.1em] italic">PEDIDOSLACIMA@GMAIL.COM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-zinc-900 gap-8">
                        <span className="text-[10px] font-black text-stone-900 uppercase tracking-[0.6em]">J-40308741-5 // ALL RIGHTS RESERVED © 2024</span>
                        <div className="flex items-center gap-10">
                            {['Privacy Policy', 'Terms of Service'].map(link => (
                                <button key={link} className="text-[10px] font-black text-stone-700 hover:text-white uppercase tracking-widest transition-colors italic">{link}</button>
                            ))}
                            <div className="h-4 w-px bg-zinc-900"></div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic group-hover:animate-pulse">POWERED BY FORGE ERP ENGINE</span>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Contextual FAB */}
            <button className="fixed bottom-10 right-10 w-20 h-20 bg-primary text-black rounded-[24px] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group shadow-primary/20">
                <span className="material-symbols-outlined text-4xl font-black group-hover:rotate-90 transition-transform duration-500">add</span>
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
