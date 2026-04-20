import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestorDeBaseDeDatosYEsquemas() {
    const tables = [
        { name: 'usuarios', fields: 'id, user_uuid, auth_hash, last_ip', rows: '842', sync: '2m ago', status: 'Synced' },
        { name: 'productos', fields: 'sku, part_no, stock_lvl, supplier_id', rows: '15,204', sync: '5m ago', status: 'Synced' },
        { name: 'ventas', fields: 'order_id, client_fk, total, tax_v', rows: '128,490', sync: 'LIVE', status: 'Writing...' },
        { name: 'almacen_logs', fields: 'log_id, shelf_id, event_type, ts', rows: '1.2M', sync: '12h ago', status: 'Archived' }
    ];

    const pipeline = [
        { ts: '2023-10-24 14:22:01', action: 'MIGRATE', desc: 'CREATE_TABLE warehouse_slots_v2', id: '#4492' },
        { ts: '2023-10-24 11:05:44', action: 'MIGRATE', desc: 'ADD_COLUMN users.preferences (JSONB)', id: '#4491' },
        { ts: '2023-10-23 23:59:59', action: 'CLEANUP', desc: 'VACUUM ANALYZE FULL DATABASE', id: '#4490' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">database</span>
                    <span>Sistemas <span className="text-white/60 mx-2">|</span> Gestor de Base de Datos y Esquemas</span>
                </div>
            }
        >
            <Head title="Gestor de Base de Datos" />

            <div className="space-y-12 pb-12">
                {/* Header & Engine Status */}
                <header className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-16 px-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Cluster Alpha-9: ONLINE</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">DB Engine Forge v2.4</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Engine <br/> <span className="text-stone-700">Forge OPS</span></h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest border border-outline-variant/10 hover:bg-zinc-800 transition-all flex items-center gap-3 active:scale-95">
                            <span className="material-symbols-outlined text-lg">upload_file</span> Schema Migrations
                        </button>
                        <button className="bg-primary text-black px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                            <span className="material-symbols-outlined text-lg font-black">backup</span> Global Backup
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-10">
                    {/* Integrity & Metadata Column */}
                    <div className="col-span-12 lg:col-span-4 space-y-10">
                        {/* Health Card */}
                        <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl group">
                            <div className="flex justify-between items-start mb-10">
                                <div className="space-y-2">
                                    <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] leading-none">Engine Integrity</h3>
                                    <p className="text-6xl font-headline font-black text-primary tracking-tighter">99.98%</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-stone-500">Referential Sanity</span>
                                        <span className="text-white">1,204 PASSED</span>
                                    </div>
                                    <div className="h-3 bg-zinc-950 rounded-full p-1 border border-outline-variant/5 shadow-inner">
                                        <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(154,205,50,0.5)] transition-all duration-1000" style={{ width: '99%' }}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest pt-2">
                                    <span className="text-stone-700">Foreign Orphans</span>
                                    <span className="text-primary tracking-widest">0 DETECTED</span>
                                </div>
                            </div>
                        </div>

                        {/* Specs Card */}
                        <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                           <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                            <div className="relative z-10 space-y-10">
                                <h3 className="text-[11px] font-black text-white uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                    Environment Metadata
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        { label: 'PostgreSQL Core', val: 'v15.3.0_build82', icon: 'terminal' },
                                        { label: 'Total Dimensions', val: '42 Tables / 18 Views', icon: 'schema' },
                                        { label: 'Storage Footprint', val: '1.84 GB', icon: 'hard_drive' }
                                    ].map((spec, i) => (
                                        <div key={i} className="flex flex-col gap-2 group/item">
                                            <span className="text-[9px] text-stone-700 font-black tracking-[0.4em] uppercase leading-none">{spec.label}</span>
                                            <div className="flex items-center gap-4">
                                                <span className="material-symbols-outlined text-primary text-xl opacity-20 group-hover/item:opacity-100 transition-opacity">{spec.icon}</span>
                                                <span className="text-xl font-mono text-white tracking-widest uppercase">{spec.val}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[180px] text-stone-950 opacity-20 rotate-12 group-hover:rotate-0 transition-transform pointer-events-none">storage</span>
                        </div>
                    </div>

                    {/* Table Explorer */}
                    <div className="col-span-12 lg:col-span-8">
                         <article className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden h-full flex flex-col group transition-all duration-500">
                            <div className="p-10 border-b border-outline-variant/5 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-zinc-950/30">
                                <div className="flex items-center gap-6">
                                    <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter leading-none">Active Schemas</h3>
                                    <div className="h-4 w-px bg-zinc-800"></div>
                                    <div className="relative group/search">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-stone-700 text-sm group-focus-within/search:text-primary transition-colors">search</span>
                                        <input className="bg-zinc-950 border-none rounded-2xl py-3 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner placeholder:text-stone-800 w-48 focus:w-64 transition-all duration-500" placeholder="FILTER BY NAME..." type="text"/>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-stone-700 hover:text-white border border-outline-variant/5 shadow-xl transition-all active:scale-90" title="Export JSON">
                                        <span className="material-symbols-outlined">download</span>
                                    </button>
                                    <button className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-stone-700 hover:text-primary border border-outline-variant/5 shadow-xl transition-all active:scale-90" title="Visual Forge Builder">
                                        <span className="material-symbols-outlined">schema</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 overflow-x-auto overflow-y-auto max-h-[600px] scrollbar-hide p-4">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="text-stone-700 font-headline text-[9px] tracking-[0.4em] uppercase">
                                            <th className="px-8 py-6 font-black">Table Vector</th>
                                            <th className="px-8 py-6 font-black">Logical Fields</th>
                                            <th className="px-8 py-6 font-black">Rows</th>
                                            <th className="px-8 py-6 font-black">Last Sync</th>
                                            <th className="px-8 py-6 font-black text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-black">
                                        {tables.map((table, i) => (
                                            <tr key={i} className="border-b border-outline-variant/5 hover:bg-zinc-950/40 transition-all group/row">
                                                <td className="px-8 py-8">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center border border-outline-variant/5 group-hover/row:border-primary/30 transition-colors shadow-inner">
                                                            <span className="material-symbols-outlined text-stone-700 text-xl group-hover/row:text-primary transition-colors">table_rows</span>
                                                        </div>
                                                        <span className="text-white font-mono tracking-widest uppercase group-hover/row:translate-x-2 transition-transform">{table.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-8 text-stone-600 font-mono text-[9px] tracking-tight uppercase max-w-[200px] truncate">{table.fields}</td>
                                                <td className="px-8 py-8 text-stone-400 font-mono tracking-widest">{table.rows}</td>
                                                <td className="px-8 py-8 text-stone-700 font-mono text-[9px] tracking-[0.2em]">{table.sync}</td>
                                                <td className="px-8 py-8 text-right">
                                                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border shadow-xl ${
                                                        table.status === 'Synced' ? 'bg-primary/10 text-primary border-primary/20' : 
                                                        table.status === 'Archived' ? 'bg-zinc-800 text-stone-600 border-zinc-700/50' :
                                                        'bg-amber-500/10 text-amber-500 border-amber-500/20'
                                                    }`}>
                                                        {table.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Visual Query Builder Representation */}
                <section className="bg-zinc-950 rounded-[64px] border border-outline-variant/10 shadow-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5 group-hover:opacity-10 transition-opacity"></div>
                    <div className="grid grid-cols-12 relative z-10">
                        {/* Control Panel */}
                        <div className="col-span-12 lg:col-span-3 bg-zinc-900/80 backdrop-blur-3xl p-12 border-r border-outline-variant/5 flex flex-col justify-between">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <h4 className="text-[11px] font-black text-white uppercase tracking-[0.5em] mb-10 flex items-center gap-4">
                                        <span className="material-symbols-outlined text-primary">hub</span>
                                        Node Projection
                                    </h4>
                                    <div className="space-y-6">
                                        <div className="bg-zinc-950 p-6 rounded-3xl border-l-4 border-primary border-y border-r border-primary/10 group/node hover:bg-zinc-800 transition-colors shadow-inner">
                                            <p className="text-[8px] text-stone-800 font-mono uppercase mb-2">Primary Node</p>
                                            <p className="font-mono text-xs text-white tracking-widest uppercase">ventas.main</p>
                                        </div>
                                        <div className="flex items-center justify-center p-3 opacity-20">
                                            <span className="material-symbols-outlined text-stone-500">link</span>
                                        </div>
                                        <div className="bg-zinc-950 p-6 rounded-3xl border-l-4 border-amber-500 border-y border-r border-amber-500/10 group/node hover:bg-zinc-800 transition-colors shadow-inner">
                                            <p className="text-[8px] text-stone-800 font-mono uppercase mb-2">Relative Reference</p>
                                            <p className="font-mono text-xs text-white tracking-widest uppercase">usuarios.profile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-black py-6 rounded-[32px] font-black text-[10px] uppercase tracking-[0.4em] shadow-xl hover:scale-105 active:scale-95 transition-all mt-16">
                                Execute Forge Query
                            </button>
                        </div>

                        {/* Interactive Canvas Mockup */}
                        <div className="col-span-12 lg:col-span-9 p-20 min-h-[500px] flex items-center justify-center bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden">
                             {/* Floating Background Icons */}
                             <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-3xl group-hover:opacity-20 transition-opacity">
                                 <span className="material-symbols-outlined text-[400px] text-primary select-none pointer-events-none">schema</span>
                             </div>

                             <div className="relative flex items-center gap-32">
                                {/* Table Node 1 */}
                                <div className="w-64 bg-zinc-900 rounded-[32px] border border-outline-variant/10 shadow-3xl overflow-hidden hover:scale-105 transition-transform duration-500 group/table shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                    <div className="bg-zinc-950 px-6 py-4 flex justify-between items-center border-b border-primary/20">
                                        <span className="text-[10px] font-black text-white tracking-widest uppercase">ventas</span>
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div className="flex justify-between items-center text-[10px] uppercase tracking-tighter">
                                            <span className="text-primary font-black">id [PK]</span>
                                            <span className="text-stone-700 font-mono">INT4</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] uppercase tracking-tighter">
                                            <span className="text-stone-300">order_no</span>
                                            <span className="text-stone-700 font-mono">VARCHAR</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] uppercase tracking-tighter bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                            <span className="text-white font-black">client_id [FK]</span>
                                            <span className="text-primary font-mono italic">INT4</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Flow Line */}
                                <div className="relative h-px w-32 bg-primary/20 group-hover:bg-primary transition-colors flex items-center justify-center">
                                    <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-primary rotate-45 animate-pulse"></div>
                                    <div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-primary rotate-45"></div>
                                    <span className="text-[9px] font-black bg-zinc-900 border border-primary/30 text-primary px-3 py-1 rounded-full absolute -top-8 uppercase tracking-[0.2em] shadow-2xl">1:N Relationship</span>
                                </div>

                                {/* Table Node 2 */}
                                <div className="w-64 bg-zinc-900 rounded-[32px] border border-outline-variant/10 shadow-3xl overflow-hidden hover:scale-105 transition-transform duration-500 group/table shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                    <div className="bg-primary px-6 py-4 flex justify-between items-center">
                                        <span className="text-[10px] font-black text-black tracking-widest uppercase">usuarios</span>
                                        <span className="material-symbols-outlined text-black/40 text-xl">account_circle</span>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div className="flex justify-between items-center text-[10px] uppercase tracking-tighter">
                                            <span className="text-primary font-black">id [PK]</span>
                                            <span className="text-stone-700 font-mono">INT4</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] uppercase tracking-tighter">
                                            <span className="text-stone-300">full_name</span>
                                            <span className="text-stone-700 font-mono">STR_128</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] uppercase tracking-tighter">
                                            <span className="text-stone-300">email</span>
                                            <span className="text-stone-700 font-mono">STR_256</span>
                                        </div>
                                    </div>
                                </div>
                             </div>

                             {/* Canvas Tools */}
                             <div className="absolute bottom-10 left-10 flex gap-4">
                                <button className="bg-zinc-950/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-outline-variant/10 text-[9px] font-black text-stone-700 uppercase tracking-widest hover:text-white hover:border-primary transition-all flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm">zoom_in</span> Optic Zoom
                                </button>
                                <button className="bg-zinc-950/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-outline-variant/10 text-[9px] font-black text-stone-700 uppercase tracking-widest hover:text-white hover:border-primary transition-all flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm">auto_fix</span> Auto Topology
                                </button>
                             </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Stats & Activity Pipeline */}
                <footer className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* JSON Handling */}
                    <div className="md:col-span-4 bg-zinc-900 rounded-[48px] p-12 border border-outline-variant/10 shadow-3xl group flex flex-col justify-between">
                        <div className="space-y-8">
                             <div className="flex justify-between items-start">
                                <h4 className="text-[11px] font-black text-white uppercase tracking-[0.5em] leading-none mb-10">Schema Export IO</h4>
                                <span className="material-symbols-outlined text-primary text-3xl opacity-20">cloud_download</span>
                             </div>
                             <div className="bg-zinc-950 p-8 rounded-[32px] border border-outline-variant/5 shadow-inner relative overflow-hidden group/archive">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover/archive:translate-y-2 transition-transform">
                                    <span className="material-symbols-outlined text-6xl text-white">article</span>
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <p className="text-[8px] font-black text-stone-800 uppercase tracking-widest">Scheduled Structure Export</p>
                                    <p className="text-lg font-mono text-white tracking-tighter uppercase leading-none truncate">db_daily_full.json</p>
                                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] pt-4">Auto-Triggered: 04:00 AM</p>
                                </div>
                             </div>
                        </div>
                        <button className="w-full mt-10 bg-zinc-950 border border-outline-variant/5 py-4 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 hover:text-white hover:bg-zinc-800 transition-all shadow-2xl active:scale-95">
                            Import Schema Template
                        </button>
                    </div>

                    {/* Pipeline Activity */}
                    <div className="md:col-span-8 bg-zinc-950 rounded-[48px] p-12 border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                         <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                         <div className="relative z-10 h-full flex flex-col">
                            <div className="flex justify-between items-center mb-10 pb-6 border-b border-outline-variant/5">
                                <h3 className="text-[11px] font-black text-white uppercase tracking-[0.6em] italic">Migration Pipeline Live</h3>
                                <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.2em]">
                                    <span className="flex items-center gap-2 text-primary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> 24 SUCCESS
                                    </span>
                                    <span className="flex items-center gap-2 text-stone-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span> 0 CRITICAL
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 overflow-y-auto max-h-[300px] scrollbar-hide pr-2">
                                {pipeline.map((p, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-center gap-6 py-5 px-6 bg-zinc-900/10 rounded-2xl border border-outline-variant/5 hover:bg-zinc-900 transition-colors group/pipeline">
                                        <span className="text-[10px] font-mono text-stone-700 tracking-widest">{p.ts}</span>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] min-w-[80px]">{p.action}</span>
                                        <span className="text-xs font-mono text-stone-500 uppercase tracking-tight group-hover/pipeline:text-white transition-colors">{p.desc}</span>
                                        <span className="ml-auto text-[9px] font-black text-stone-800 uppercase tracking-widest">ID {p.id}</span>
                                    </div>
                                ))}
                            </div>
                         </div>
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
