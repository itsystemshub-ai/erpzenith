import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function EstadoDeSaludYSistemaDeMantenimiento() {
    const modules = [
        { name: 'Inventario', status: 'NOMINAL', icon: 'inventory_2', sync: '2m ago', active: true },
        { name: 'Ventas', status: 'NOMINAL', icon: 'point_of_sale', sync: 'Live Stream', active: true },
        { name: 'Logística', status: 'WARNING', icon: 'local_shipping', sync: 'High Latency', active: false, warning: true },
        { name: 'Finanzas', status: 'NOMINAL', icon: 'payments', sync: 'Verified', active: true }
    ];

    const maintenanceHistory = [
        { date: '2023-10-24 04:00', module: 'Main DB Cluster', action: 'Scheduled Optimization', tech: 'SYS-ADM-01', result: 'Success' },
        { date: '2023-10-22 18:15', module: 'API Gateway', action: 'Emergency Hotfix', tech: 'DEV-SEC-09', result: 'Success' },
        { date: '2023-10-21 02:00', module: 'Inventario Node', action: 'Hardware Migration', tech: 'INF-OPS-04', result: 'Deferred' },
        { date: '2023-10-18 11:30', module: 'RRHH Portal', action: 'Security Patch 8.1', tech: 'AUT-SYS-01', result: 'Success' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">health_and_safety</span>
                    <span>Sistemas <span className="text-white/60 mx-2">|</span> Salud del Sistema y Mantenimiento</span>
                </div>
            }
        >
            <Head title="Estado de Salud del Sistema" />

            <div className="space-y-12 pb-12">
                {/* Hero Status Section */}
                <header className="relative overflow-hidden bg-zinc-900 rounded-[48px] p-12 border-l-[12px] border-primary shadow-3xl group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    <div className="relative z-10 flex flex-col xl:flex-row justify-between items-center gap-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Engine Status: ONLINE</span>
                                <div className="h-px w-12 bg-white/10"></div>
                                <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em]">Real-time Health Monitoring</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-[0.85]">All Systems: <br/> <span className="text-primary italic">Nominal</span></h1>
                            <div className="flex items-center gap-10 pt-4">
                                <div className="space-y-1">
                                    <span className="text-[9px] text-stone-700 font-black uppercase tracking-[0.4em]">Uptime (30d)</span>
                                    <p className="text-3xl font-headline font-black text-white tracking-widest">99.98%</p>
                                </div>
                                <div className="h-10 w-px bg-zinc-800"></div>
                                <div className="space-y-1">
                                    <span className="text-[9px] text-stone-700 font-black uppercase tracking-[0.4em]">Avg Latency</span>
                                    <p className="text-3xl font-headline font-black text-white tracking-widest">42ms</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <button className="bg-error text-white px-10 py-6 rounded-[32px] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group/btn">
                                <span className="material-symbols-outlined text-2xl group-hover/btn:rotate-12 transition-transform">report_problem</span>
                                Report Incident
                            </button>
                        </div>
                    </div>
                    {/* Pulsing Glow */}
                    <div className="absolute top-0 right-0 p-16 opacity-10 animate-pulse">
                        <span className="material-symbols-outlined text-[200px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>power_settings_new</span>
                    </div>
                </header>

                {/* Module Health Grid */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {modules.map((mod, i) => (
                        <div key={i} className={`bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between group hover:bg-zinc-800 transition-all ${mod.warning ? 'border-b-4 border-amber-500' : ''}`}>
                            <div className="flex justify-between items-start mb-10">
                                <span className={`material-symbols-outlined text-3xl transition-colors ${mod.warning ? 'text-amber-500' : 'text-stone-700 group-hover:text-primary'}`}>{mod.icon}</span>
                                <div className={`h-3 w-3 rounded-full ${mod.warning ? 'bg-amber-500' : 'bg-primary'} ${mod.active ? 'animate-pulse shadow-[0_0_10px_rgba(154,205,50,0.5)]' : ''}`}></div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter">{mod.name}</h3>
                                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${mod.warning ? 'text-amber-500' : 'text-stone-700'}`}>
                                    {mod.sync}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                <div className="grid grid-cols-12 gap-10">
                    {/* Maintenance Ledger */}
                    <article className="col-span-12 lg:col-span-8 bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex justify-between items-end mb-10">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter">Maintenance History</h3>
                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.5em]">Audit Trail v4.0.2</span>
                            </div>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-zinc-950/80 text-stone-700 font-headline text-[9px] tracking-[0.4em] uppercase">
                                            <th className="px-6 py-5 font-black">Date / Time</th>
                                            <th className="px-6 py-5 font-black">Module / System</th>
                                            <th className="px-6 py-5 font-black">Action Type</th>
                                            <th className="px-6 py-5 font-black">Technician</th>
                                            <th className="px-6 py-5 font-black text-right">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-black">
                                        {maintenanceHistory.map((item, i) => (
                                            <tr key={i} className="border-b border-outline-variant/5 hover:bg-zinc-950/30 transition-colors group/row">
                                                <td className="px-6 py-6 text-stone-500 font-mono tracking-widest">{item.date}</td>
                                                <td className="px-6 py-6 text-white uppercase tracking-tight">{item.module}</td>
                                                <td className="px-6 py-6 text-stone-600 italic font-medium uppercase tracking-widest text-[10px]">{item.action}</td>
                                                <td className="px-6 py-6 text-stone-500 font-mono uppercase text-[10px] tracking-widest">{item.tech}</td>
                                                <td className="px-6 py-6 text-right">
                                                    <span className={`text-[8px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-white/5 shadow-xl ${
                                                        item.result === 'Success' ? 'bg-primary/10 text-primary' : 'bg-zinc-800 text-stone-600'
                                                    }`}>
                                                        {item.result}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>

                    {/* Traffic Visualization */}
                    <article className="col-span-12 lg:col-span-4 bg-zinc-950 rounded-[48px] p-10 border border-outline-variant/10 shadow-3xl relative overflow-hidden flex flex-col group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter mb-12">Traffic Pulse</h3>
                            <div className="flex-1 flex items-end gap-2 mb-10 min-h-[240px] px-2">
                                {[20, 35, 45, 30, 60, 85, 95, 75, 40, 25, 35, 50].map((h, i) => (
                                    <div key={i} className={`flex-1 rounded-t-xl transition-all duration-700 ${i > 4 && i < 8 ? 'bg-primary shadow-[0_0_15px_rgba(154,205,50,0.3)]' : 'bg-zinc-800'}`} style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="pt-8 border-t border-zinc-900 flex justify-between items-center">
                                <div>
                                    <p className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] mb-2 leading-none">Global Peak Load</p>
                                    <p className="text-3xl font-headline font-black text-white tracking-widest">842 req/s</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Upcoming Maintenance Banner */}
                <section className="bg-primary/5 rounded-[48px] p-12 border border-primary/20 flex flex-col lg:flex-row items-center gap-12 group hover:bg-primary/10 transition-colors shadow-3xl">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4 text-primary">
                            <span className="material-symbols-outlined text-3xl font-black">calendar_clock</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] leading-none">Upcoming Maintenance Window</span>
                        </div>
                        <h4 className="text-3xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter italic">Core Engine Upgrade <br/> <span className="text-primary tracking-widest text-2xl md:text-3xl">v5.1 Staging Phase</span></h4>
                    </div>
                    <div className="flex flex-col items-center px-16 border-x border-zinc-800/50">
                        <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] mb-3">Days Remaining</span>
                        <span className="text-7xl font-headline font-black text-white tracking-tighter">04</span>
                    </div>
                    <div className="flex-1 lg:text-right space-y-6">
                        <p className="text-stone-500 text-xs font-semibold uppercase tracking-widest leading-relaxed">
                            Scheduled for Saturday, Oct 28 at 02:00 AM UTC. <br className="hidden lg:block" /> Expected global downtime: 15 minutes.
                        </p>
                        <button className="text-primary text-[10px] font-black uppercase tracking-[0.4em] underline underline-offset-[12px] hover:text-white transition-all decoration-primary/30">
                            Review Technical Blueprint
                        </button>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 px-4">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none">FORGE SYSTEMS</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Heavy-Duty OS for Distributed Industrial Commerce</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700">
                        {['Privacy_Shield', 'Service_SLA', 'ISO_27001', 'Cloud_Secure'].map(link => (
                            <span key={link} className="hover:text-white cursor-pointer transition-colors px-2">{link}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-6 bg-zinc-950 px-8 py-3 rounded-full border border-outline-variant/5 shadow-2xl">
                        <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(154,205,50,0.5)]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-800">ISO-9001 COMPLIANT NODE</span>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
