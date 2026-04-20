import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function EstadoDeSaludDelSistemaYMantenimiento() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline">
                    <span className="material-symbols-outlined">health_and_safety</span>
                    <span>Estado y Salud del Sistema</span>
                </div>
            }
        >
            <Head title="Estado de Salud del Sistema" />

            <div className="space-y-8 pb-12">
                {/* Hero Status */}
                <div className="relative overflow-hidden bg-zinc-900/50 backdrop-blur-md p-12 rounded-2xl border-l-4 border-primary shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>power_settings_new</span>
                    </div>
                    <div className="relative z-10">
                        <p className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-2">Operational Health Indicator</p>
                        <h2 className="font-headline text-5xl font-black uppercase tracking-tighter mb-4 text-white">All Systems: <span className="text-primary">Nominal</span></h2>
                        <div className="flex items-center gap-6 mt-8">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Uptime (30d)</span>
                                <span className="font-headline text-2xl font-bold text-white">99.98%</span>
                            </div>
                            <div className="w-px h-10 bg-zinc-800"></div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Avg Latency</span>
                                <span className="font-headline text-2xl font-bold text-white">42ms</span>
                            </div>
                            <div className="ml-auto">
                                <button className="bg-error hover:bg-error/90 text-white font-bold py-4 px-8 flex items-center gap-3 transition-all active:scale-95 group rounded-xl">
                                    <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">report_problem</span>
                                    <span className="uppercase tracking-widest text-xs">Incident Report</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bento Status Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Module: Inventory */}
                    <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between group hover:bg-zinc-900 transition-all hover:border-primary/50 cursor-pointer shadow-xl">
                        <div className="flex justify-between items-start mb-8">
                            <span className="material-symbols-outlined text-stone-500 group-hover:text-primary">inventory_2</span>
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#9acd32]"></div>
                        </div>
                        <div>
                            <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-on-surface group-hover:text-white">Inventario</h3>
                            <p className="text-[10px] uppercase tracking-widest text-stone-500">Last Synced: 2m ago</p>
                        </div>
                    </div>
                    {/* Module: Sales */}
                    <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between group hover:bg-zinc-900 transition-all hover:border-primary/50 cursor-pointer shadow-xl">
                        <div className="flex justify-between items-start mb-8">
                            <span className="material-symbols-outlined text-stone-500 group-hover:text-primary">point_of_sale</span>
                            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#9acd32]"></div>
                        </div>
                        <div>
                            <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-on-surface group-hover:text-white">Ventas</h3>
                            <p className="text-[10px] uppercase tracking-widest text-stone-500">Live Transaction Stream</p>
                        </div>
                    </div>
                    {/* Module: Logistics (Warning State) */}
                    <div className="bg-surface-container-lowest p-6 rounded-2xl border-b-4 border-amber-500 border-x border-t border-outline-variant/30 flex flex-col justify-between group hover:bg-zinc-900 transition-all hover:border-amber-500/50 cursor-pointer shadow-xl">
                        <div className="flex justify-between items-start mb-8">
                            <span className="material-symbols-outlined text-amber-500">local_shipping</span>
                            <div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]"></div>
                        </div>
                        <div>
                            <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-on-surface group-hover:text-white">Logística</h3>
                            <p className="text-[10px] uppercase tracking-widest text-amber-500">High Latency Detected</p>
                        </div>
                    </div>
                    {/* Module: Finance */}
                    <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between group hover:bg-zinc-900 transition-all hover:border-primary/50 cursor-pointer shadow-xl">
                        <div className="flex justify-between items-start mb-8">
                            <span className="material-symbols-outlined text-stone-500 group-hover:text-primary">payments</span>
                            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#9acd32]"></div>
                        </div>
                        <div>
                            <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-on-surface group-hover:text-white">Finanzas</h3>
                            <p className="text-[10px] uppercase tracking-widest text-stone-500">Secure Ledger Verified</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Logs & Maintenance */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Maintenance Log */}
                    <div className="lg:col-span-2">
                        <div className="flex justify-between items-end mb-6">
                            <h3 className="font-headline text-2xl font-black uppercase tracking-tighter text-on-surface">Maintenance History</h3>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Audit Trail v2.4</span>
                        </div>
                        <div className="bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-outline-variant/30 overflow-hidden shadow-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-zinc-950 text-stone-400 font-headline text-[10px] tracking-widest uppercase">
                                        <th className="p-4 font-bold border-b border-outline-variant/20">Date/Time</th>
                                        <th className="p-4 font-bold border-b border-outline-variant/20">Module/System</th>
                                        <th className="p-4 font-bold border-b border-outline-variant/20">Action Type</th>
                                        <th className="p-4 font-bold border-b border-outline-variant/20">Technician</th>
                                        <th className="p-4 font-bold border-b border-outline-variant/20">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10 text-stone-300">
                                    <tr className="hover:bg-zinc-800/50 transition-colors group">
                                        <td className="p-4 font-label text-xs">2023-10-24 04:00</td>
                                        <td className="p-4 font-label text-xs text-white font-bold">Main DB Cluster</td>
                                        <td className="p-4 font-label text-xs text-stone-400 italic">Scheduled Optimization</td>
                                        <td className="p-4 font-label text-xs uppercase">SYS-ADM-01</td>
                                        <td className="p-4">
                                            <span className="text-[9px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">Success</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-zinc-800/50 transition-colors group">
                                        <td className="p-4 font-label text-xs">2023-10-22 18:15</td>
                                        <td className="p-4 font-label text-xs text-white font-bold">API Gateway</td>
                                        <td className="p-4 font-label text-xs text-stone-400 italic">Emergency Hotfix</td>
                                        <td className="p-4 font-label text-xs uppercase">DEV-SEC-09</td>
                                        <td className="p-4">
                                            <span className="text-[9px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">Success</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-zinc-800/50 transition-colors group">
                                        <td className="p-4 font-label text-xs">2023-10-21 02:00</td>
                                        <td className="p-4 font-label text-xs text-white font-bold">Inventario Node</td>
                                        <td className="p-4 font-label text-xs text-stone-400 italic">Hardware Migration</td>
                                        <td className="p-4 font-label text-xs uppercase">INF-OPS-04</td>
                                        <td className="p-4">
                                            <span className="text-[9px] font-bold uppercase tracking-widest bg-zinc-800 text-stone-400 px-2 py-1 rounded">Deferred</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-zinc-800/50 transition-colors group">
                                        <td className="p-4 font-label text-xs">2023-10-18 11:30</td>
                                        <td className="p-4 font-label text-xs text-white font-bold">RRHH Portal</td>
                                        <td className="p-4 font-label text-xs text-stone-400 italic">Security Patch 8.1</td>
                                        <td className="p-4 font-label text-xs uppercase">AUT-SYS-01</td>
                                        <td className="p-4">
                                            <span className="text-[9px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded">Success</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Live Performance Visualizer */}
                    <div>
                        <h3 className="font-headline text-2xl font-black uppercase tracking-tighter text-on-surface mb-6">Traffic Load</h3>
                        <div className="bg-zinc-900/50 backdrop-blur-md p-8 rounded-2xl border border-outline-variant/30 h-[320px] flex flex-col justify-end shadow-2xl">
                            <div className="flex items-end gap-1.5 h-full mb-4">
                                {[20, 35, 45, 30, 60, 85, 95, 75, 40, 25, 35, 50].map((h, i) => (
                                    <div 
                                        key={i}
                                        className={`flex-1 rounded-t-sm transition-all duration-500 ${h > 70 ? 'bg-primary shadow-[0_0_15px_#9acd32]' : 'bg-zinc-800 group-hover:bg-zinc-700'}`} 
                                        style={{ height: `${h}%` }}
                                    ></div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-stone-500">Peak Load</p>
                                    <p className="font-headline text-lg font-bold text-white">842 req/s</p>
                                </div>
                                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Maintenance Schedule */}
                <div className="mt-12 bg-primary/5 p-8 border border-primary/20 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="material-symbols-outlined text-primary">calendar_clock</span>
                            <span className="uppercase tracking-widest text-[10px] font-bold text-primary">Upcoming Window</span>
                        </div>
                        <h4 className="font-headline text-2xl font-black uppercase text-white">Core Engine Upgrade - v3.0 Staging</h4>
                    </div>
                    <div className="flex flex-col items-center px-8 border-x border-outline-variant/20">
                        <span className="text-[10px] uppercase tracking-widest text-stone-500">Days Remaining</span>
                        <span className="font-headline text-4xl font-black text-white">04</span>
                    </div>
                    <div className="flex-1 text-right">
                        <p className="text-stone-400 text-xs mb-4 leading-relaxed">Scheduled for Saturday, Oct 28 at 02:00 AM UTC. Expected downtime: 15 minutes.</p>
                        <button className="text-primary hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest border-b border-primary pb-1">Review Technical Blueprint</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
