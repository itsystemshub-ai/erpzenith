import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DashboardDeAdministracionCentral() {
    const healthMetrics = [
        { label: 'CPU Cluster', val: '24%', bar: 'w-[24%]', color: 'bg-primary' },
        { label: 'Memory Load', val: '61%', bar: 'w-[61%]', color: 'bg-amber-500' },
        { label: 'Active Users', val: '842', trend: '+12%', trendColor: 'text-primary' },
        { label: 'IO Ops', val: '1.2k', status: 'SYNC_STABLE' }
    ];

    const storage = [
        { label: 'Main Warehouse DB', used: '4.2', total: '5.0', unit: 'GB', bar: 'w-[84%]', color: 'bg-amber-500' },
        { label: 'Attachment Repository', used: '12.8', total: '50', unit: 'GB', bar: 'w-[25%]', color: 'bg-primary' },
        { label: 'Local Cache Index', used: '256', total: '512', unit: 'MB', bar: 'w-[50%]', color: 'bg-primary' }
    ];

    const logs = [
        { ts: '14:22:01:002', event: 'USER_AUTH_SUCCESS', subject: 'admin_root_jvalencia', source: '192.168.1.45', severity: 'INFO', color: 'text-primary' },
        { ts: '14:21:44:910', event: 'INVENTORY_SYNC_START', subject: 'Warehouse_A_Core', source: 'Node_Cluster_7', severity: 'INFO', color: 'text-primary' },
        { ts: '14:21:12:005', event: 'DB_QUERY_WARNING', subject: 'SQL_LONG_RUNNING_PROC', source: 'DB_SRV_02', severity: 'WARN', color: 'text-amber-600' },
        { ts: '14:19:55:221', event: 'API_TOKEN_EXPIRED', subject: 'external_client_v3', source: 'Gateway_01', severity: 'ERR', color: 'text-error' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">analytics</span>
                    <span>Admin Forge <span className="text-white/60 mx-2">|</span> Central Dashboard</span>
                </div>
            }
        >
            <Head title="Dashboard de Administración Central" />

            <div className="space-y-12 pb-20 px-4">
                {/* Dashboard Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Engine Room Operations</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">System Overseer v4.2</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">System <br/> <span className="text-stone-700">Overview</span></h1>
                    </div>
                    <div className="flex gap-4 items-center bg-zinc-950 p-6 rounded-[24px] border border-outline-variant/5 shadow-2xl">
                        <div className="h-4 w-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(154,205,50,0.6)]"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Status Engine</span>
                            <span className="text-sm font-black text-white italic uppercase tracking-tighter font-headline">Integrity: NOMINAL</span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-8">
                    {/* Infrastructure Health */}
                    <section className="col-span-12 xl:col-span-8 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl p-12 relative overflow-hidden group">
                        <span className="material-symbols-outlined absolute -right-6 -top-6 text-[180px] text-zinc-950 opacity-40 group-hover:rotate-12 transition-transform">settings_input_component</span>
                        
                        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Core Infrastructure</h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.2em]">Real-time Telemetry Processing</p>
                            </div>
                            <div className="flex gap-4 pt-2">
                                <span className="bg-zinc-950 px-4 py-1.5 rounded-full border border-zinc-800 text-[9px] font-black text-stone-600 tracking-[0.2em] uppercase italic">Uptime: 99.99%</span>
                                <span className="bg-zinc-950 px-4 py-1.5 rounded-full border border-zinc-800 text-[9px] font-black text-stone-600 tracking-[0.2em] uppercase italic">Lat: 12ms</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {healthMetrics.map((m, i) => (
                                <div key={i} className="bg-zinc-950/50 p-6 rounded-[32px] border border-outline-variant/5 space-y-4 shadow-inner">
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest block">{m.label}</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-headline font-black text-white tracking-tighter italic">{m.val}</span>
                                        {m.trend && <span className={`text-[10px] font-black uppercase mb-1 ${m.trendColor}`}>{m.trend}</span>}
                                        {m.status && <span className="text-[9px] font-black text-stone-800 uppercase tracking-tighter mb-1 select-none">{m.status}</span>}
                                    </div>
                                    {m.bar && (
                                        <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                                            <div className={`h-full ${m.color} ${m.bar} shadow-[0_0_8px_rgba(154,205,50,0.3)]`}></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Storage Matrix */}
                    <section className="col-span-12 xl:col-span-4 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl p-12 border-r-[12px] border-r-amber-600/20">
                        <div className="space-y-10">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none text-right">Storage <br/> <span className="text-amber-500 italic">Matrix</span></h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.2em] text-right">Data Volume Distribution</p>
                            </div>
                            
                            <div className="space-y-8">
                                {storage.map((s, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[9px] font-black text-stone-500 uppercase tracking-[0.3em]">{s.label}</span>
                                            <span className="text-[10px] font-headline font-black text-white tracking-widest">{s.used} <span className="text-stone-700 font-label">/ {s.total} {s.unit}</span></span>
                                        </div>
                                        <div className="h-2 bg-zinc-950 rounded-full overflow-hidden shadow-inner border border-zinc-900">
                                            <div className={`h-full ${s.color} ${s.bar} shadow-[0_0_10px_rgba(245,158,11,0.3)] transition-all duration-1000`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-zinc-950 p-6 rounded-[32px] border border-outline-variant/5 mt-6 group select-none">
                                <div className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em] mb-2 italic">Last Maintenance Routine</div>
                                <div className="text-sm font-headline font-black text-white uppercase tracking-widest italic group-hover:text-primary transition-colors duration-500">TODAY // 04:20 AM</div>
                                <button className="mt-4 w-full py-3 bg-zinc-900 text-stone-700 text-[9px] font-black uppercase tracking-[0.4em] border border-zinc-800 rounded-2xl hover:text-white hover:border-white transition-all active:scale-95 italic">Clear Index Cache</button>
                            </div>
                        </div>
                    </section>

                    {/* Quick Access Grid */}
                    <section className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Initiate Backup', sub: 'Full System Snapshot', icon: 'cloud_upload', hover: 'hover:bg-primary hover:text-black group-hover:text-black' },
                            { label: 'Restore Point', sub: 'Stable Environment v4.1', icon: 'settings_backup_restore', hover: 'hover:bg-primary hover:text-black' },
                            { label: 'Maintenance Mode', sub: 'Toggle Access Layer', icon: 'construction', hover: 'hover:bg-amber-600 hover:text-black' },
                            { label: 'Export Audit', sub: 'PDF Report Generation', icon: 'description', hover: 'hover:bg-white hover:text-black' }
                        ].map((action, i) => (
                            <button key={i} className={`group bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 shadow-3xl text-left transition-all hover:scale-105 active:scale-95 ${action.hover}`}>
                                <span className="material-symbols-outlined text-4xl text-stone-800 group-hover:text-inherit transition-colors">{action.icon}</span>
                                <div className="mt-6 space-y-1">
                                    <div className="text-sm font-headline font-black uppercase tracking-tighter italic leading-none">{action.label}</div>
                                    <div className="text-[9px] font-black text-stone-700 group-hover:text-inherit/60 uppercase tracking-widest">{action.sub}</div>
                                </div>
                            </button>
                        ))}
                    </section>

                    {/* Terminal Registry */}
                    <section className="col-span-12 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                        <div className="bg-zinc-950 px-10 py-6 flex justify-between items-center border-b border-zinc-800">
                             <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-xl font-black">developer_board</span>
                                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] italic">Real-Time Audit Terminal</h3>
                             </div>
                             <div className="flex items-center gap-4 bg-zinc-900/50 px-6 py-2 rounded-full border border-zinc-800">
                                <div className="h-2 w-2 bg-primary rounded-full animate-ping"></div>
                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">STREAMS_ACTIVE</span>
                             </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-zinc-950/30">
                                        {['Timestamp', 'Event Protocol', 'Subject Identity', 'Source Node', 'Severity'].map(head => (
                                            <th key={head} className="px-10 py-6 text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] border-b border-zinc-800">{head}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800/50">
                                    {logs.map((log, i) => (
                                        <tr key={i} className="hover:bg-zinc-950 transition-colors">
                                            <td className="px-10 py-6 font-mono text-[10px] text-stone-600 tracking-widest uppercase">{log.ts}</td>
                                            <td className="px-10 py-6 text-[10px] font-black text-white uppercase tracking-[0.2em] italic">{log.event}</td>
                                            <td className="px-10 py-6 text-[10px] font-black text-stone-400 uppercase tracking-widest">{log.subject}</td>
                                            <td className="px-10 py-6 font-mono text-[10px] text-stone-700 uppercase tracking-tighter">{log.source}</td>
                                            <td className="px-10 py-6 text-right">
                                                <span className={`px-4 py-1 rounded-full border text-[9px] font-black tracking-[0.4em] uppercase ${
                                                    log.severity === 'ERR' ? 'bg-error/10 text-error border-error/20' : 
                                                    log.severity === 'WARN' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                                                    'bg-primary/10 text-primary border-primary/20'
                                                }`}>
                                                    {log.severity}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-8 bg-zinc-950/50 border-t border-zinc-800 text-center">
                            <button className="text-[9px] font-black text-stone-800 uppercase tracking-[0.5em] hover:text-white transition-all italic flex items-center gap-4 mx-auto group">
                                Load Registry History Buffer <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">keyboard_double_arrow_down</span>
                            </button>
                        </div>
                    </section>
                </div>

                {/* Industrial Corporate Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-16 px-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-2xl uppercase leading-none italic">FORGE OVERSEER</span>
                        <p className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.6em] max-w-sm leading-relaxed">Central Administrative Node for Mayor de Repuesto La Cima Industrial Resilience.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-12 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                         <div className="space-y-4">
                            <span className="text-stone-900 font-black tracking-[0.8em] block mb-2 underline pr-4 border-r border-zinc-900 italic">IDENTITY REGISTRY</span>
                            <div className="flex justify-between gap-12"><span>RIF:</span> <span className="text-stone-600 tracking-widest uppercase">J-00000000-0</span></div>
                            <div className="flex justify-between gap-12"><span>LOC:</span> <span className="text-stone-600 tracking-widest uppercase italic">Industrial Zone IV</span></div>
                         </div>
                         <div className="space-y-4 border-l border-zinc-900 pl-8">
                            <span className="text-stone-900 font-black tracking-[0.8em] block mb-2 underline pr-4 border-r border-zinc-900 italic">TECH OPS</span>
                            <div className="flex justify-between gap-12"><span>ENGINE:</span> <span className="text-white font-headline tracking-tighter">V4.22.0</span></div>
                            <div className="flex justify-between gap-12"><span>UPTIME:</span> <span className="text-primary font-headline tracking-tighter italic">99.998%</span></div>
                         </div>
                    </div>
                    <div className="flex items-center gap-6 bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">Environment: <span className="text-primary italic">CORE PRODUCTION CLUSTER</span></span>
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
