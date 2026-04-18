import React from 'react';
import { Link } from '@inertiajs/react';

export default function GestorDeBaseDeDatosYEsquemas() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="fixed top-0 left-0 w-full h-16 bg-stone-950/80 backdrop-blur-md flex justify-between items-center pl-64 pr-8 z-40">
<div className="flex items-center gap-8">
<span className="text-lg font-black tracking-widest text-white font-headline">MAYOR DE REPUESTO LA CIMA, C.A.</span>
<nav className="flex gap-6">
<a className="text-stone-500 hover:text-stone-200 font-headline uppercase text-sm" href="#">Global View</a>
<a className="text-stone-500 hover:text-stone-200 font-headline uppercase text-sm" href="#">System Health</a>
<a className="text-stone-500 hover:text-stone-200 font-headline uppercase text-sm" href="#">Security Ops</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded">
<span className="material-symbols-outlined text-lime-500 text-sm">terminal</span>
<span className="text-stone-300 font-headline text-xs tracking-widest">SYS_ROOT: ENABLED</span>
</div>
<button className="material-symbols-outlined text-stone-400 hover:text-amber-500 transition-colors">notifications_active</button>
<button className="bg-primary hover:opacity-80 text-on-primary font-headline uppercase text-xs font-bold px-4 py-2 transition-all">Emergency Shutdown</button>
</div>
</header>
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-screen w-64 flex flex-col border-r-0 bg-stone-950 dark:bg-black z-50">
<div className="p-6">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 bg-lime-500 flex items-center justify-center">
<span className="material-symbols-outlined text-black font-bold">precision_manufacturing</span>
</div>
<h1 className="text-xl font-bold tracking-tighter text-lime-400 dark:text-lime-300 font-headline uppercase">LA CIMA</h1>
</div>
<p className="text-[10px] text-stone-500 font-headline tracking-[0.2em]">ADMIN FORGE v2.4</p>
</div>
<nav className="flex-grow mt-4 overflow-y-auto">
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors font-headline uppercase tracking-tight text-sm" href="#">
<span className="material-symbols-outlined text-lg">analytics</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors font-headline uppercase tracking-tight text-sm" href="#">
<span className="material-symbols-outlined text-lg">health_and_safety</span> Module Health
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors font-headline uppercase tracking-tight text-sm" href="#">
<span className="material-symbols-outlined text-lg">admin_panel_settings</span> User Access
            </a>
<a className="flex items-center gap-3 px-4 py-3 bg-stone-900 text-lime-400 border-l-4 border-lime-500 font-headline uppercase tracking-tight text-sm" href="#">
<span className="material-symbols-outlined text-lg">database</span> DB Management
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors font-headline uppercase tracking-tight text-sm" href="#">
<span className="material-symbols-outlined text-lg">history_edu</span> Audit Logs
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-800/50 hover:text-lime-200 transition-colors font-headline uppercase tracking-tight text-sm" href="#">
<span className="material-symbols-outlined text-lg">settings</span> Settings
            </a>
</nav>
<div className="p-4 border-t border-stone-800">
<button className="w-full py-2 bg-stone-900 text-stone-300 font-headline text-xs uppercase tracking-widest border border-stone-700 hover:bg-stone-800 transition-colors">System Lock</button>
</div>
<div className="p-2 space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-stone-500 hover:text-stone-300 text-xs font-headline uppercase" href="#">
<span className="material-symbols-outlined text-sm">support_agent</span> Support
            </a>
<a className="flex items-center gap-3 px-4 py-2 text-stone-500 hover:text-error text-xs font-headline uppercase" href="#">
<span className="material-symbols-outlined text-sm">logout</span> Logout
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 mt-16 p-8 min-h-screen">
{/* Comentario remanente */}
<div className="flex justify-between items-end mb-10">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold font-headline tracking-tighter uppercase">Cluster Alpha-9</span>
<span className="text-stone-400 text-xs font-headline">/ ROOT / DATABASE / MANAGEMENT</span>
</div>
<h2 className="text-5xl font-headline font-extrabold uppercase tracking-tighter text-on-surface">DB Engine Forge</h2>
</div>
<div className="flex gap-4">
<button className="bg-surface-container-high hover:bg-surface-container-highest px-6 py-3 font-headline text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm">upload_file</span> Schema Migrations
                </button>
<button className="bg-primary text-on-primary hover:opacity-90 px-6 py-3 font-headline text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm">backup</span> Global Backup
                </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-6">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 flex flex-col justify-between group">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xs font-headline text-secondary uppercase tracking-[0.2em] mb-1">Engine Integrity</h3>
<p className="text-3xl font-headline font-bold text-primary tracking-tighter">99.98%</p>
</div>
<span className="material-symbols-outlined text-lime-500 text-3xl group-hover:scale-110 transition-transform">verified</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-stone-500 font-label uppercase">Referential Checks</span>
<span className="text-on-surface font-bold">1,204 PASSED</span>
</div>
<div className="w-full bg-surface-container h-1.5 overflow-hidden">
<div className="bg-primary h-full w-[99%]"></div>
</div>
<div className="flex justify-between items-center text-xs pt-1">
<span className="text-stone-500 font-label uppercase">Foreign Key Orphans</span>
<span className="text-error font-bold">0 DETECTED</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 text-white p-6 relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-xs font-headline text-stone-500 uppercase tracking-[0.2em] mb-6">Environment Metadata</h3>
<div className="space-y-4">
<div className="flex flex-col">
<span className="text-[10px] text-lime-400 font-headline tracking-widest mb-1 uppercase">PostgreSQL Core</span>
<span className="text-lg code-font text-stone-100">v15.3.0_build82</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-lime-400 font-headline tracking-widest mb-1 uppercase">Total Dimensions</span>
<span className="text-lg code-font text-stone-100">42 Tables / 18 Viewports</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-lime-400 font-headline tracking-widest mb-1 uppercase">Storage Footprint</span>
<span className="text-lg code-font text-stone-100">1.84 GB</span>
</div>
</div>
</div>
<div className="absolute -right-10 -bottom-10 opacity-10">
<span className="material-symbols-outlined text-[160px]">storage</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-8">
<div className="bg-surface-container-lowest h-full flex flex-col">
<div className="p-6 border-b border-surface-container flex justify-between items-center bg-surface-container-low">
<div className="flex items-center gap-4">
<h3 className="text-sm font-headline font-black uppercase tracking-widest">Active Schema Tables</h3>
<div className="flex items-center gap-2 bg-white px-3 py-1 text-xs border border-surface-container">
<span className="material-symbols-outlined text-sm text-stone-400">search</span>
<input className="border-none focus:ring-0 p-0 text-xs font-headline tracking-wider placeholder:text-stone-300 w-32" placeholder="FILTER BY NAME..." type="text"/>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-white transition-colors" title="Export JSON">
<span className="material-symbols-outlined text-lg">download</span>
</button>
<button className="p-2 hover:bg-white transition-colors" title="Visual Query Builder">
<span className="material-symbols-outlined text-lg">schema</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-surface-container">
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500">Table Name</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500">Fields</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500">Rows</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500">Last Sync</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr className="hover:bg-primary-container/10 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">table_rows</span>
<span className="code-font text-sm font-bold">usuarios</span>
</div>
</td>
<td className="px-6 py-4 code-font text-xs text-stone-500">id, user_uuid, auth_hash, last_ip</td>
<td className="px-6 py-4 code-font text-xs">842</td>
<td className="px-6 py-4 text-xs font-label text-stone-500 uppercase">2m ago</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-lime-100 text-lime-700 uppercase">Synced</span>
</td>
</tr>
<tr className="hover:bg-primary-container/10 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">table_rows</span>
<span className="code-font text-sm font-bold">productos</span>
</div>
</td>
<td className="px-6 py-4 code-font text-xs text-stone-500">sku, part_no, stock_lvl, supplier_id</td>
<td className="px-6 py-4 code-font text-xs">15,204</td>
<td className="px-6 py-4 text-xs font-label text-stone-500 uppercase">5m ago</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-lime-100 text-lime-700 uppercase">Synced</span>
</td>
</tr>
<tr className="hover:bg-primary-container/10 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">table_rows</span>
<span className="code-font text-sm font-bold">ventas</span>
</div>
</td>
<td className="px-6 py-4 code-font text-xs text-stone-500">order_id, client_fk, total, tax_v</td>
<td className="px-6 py-4 code-font text-xs">128,490</td>
<td className="px-6 py-4 text-xs font-label text-stone-500 uppercase">LIVE</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 uppercase">Writing...</span>
</td>
</tr>
<tr className="hover:bg-primary-container/10 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">table_rows</span>
<span className="code-font text-sm font-bold">almacen_logs</span>
</div>
</td>
<td className="px-6 py-4 code-font text-xs text-stone-500">log_id, shelf_id, event_type, ts</td>
<td className="px-6 py-4 code-font text-xs">1.2M</td>
<td className="px-6 py-4 text-xs font-label text-stone-500 uppercase">12h ago</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-stone-200 text-stone-600 uppercase">Archived</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12">
<div className="bg-surface-container-high p-1 border-t-4 border-stone-900">
<div className="grid grid-cols-12">
{/* Comentario remanente */}
<div className="col-span-12 md:col-span-3 bg-white p-6 border-r border-surface-container">
<h4 className="text-xs font-headline font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">settings_input_component</span> Node Selector
                            </h4>
<div className="space-y-3">
<div className="bg-surface-container-low p-3 border-l-2 border-primary">
<p className="text-[10px] text-stone-400 font-headline uppercase mb-1">Source Table</p>
<p className="code-font text-xs font-bold">ventas.main</p>
</div>
<div className="bg-surface p-3 flex items-center justify-between">
<span className="code-font text-xs">INNER JOIN</span>
<span className="material-symbols-outlined text-sm text-stone-300">link</span>
</div>
<div className="bg-surface-container-low p-3 border-l-2 border-primary-container">
<p className="text-[10px] text-stone-400 font-headline uppercase mb-1">Target Table</p>
<p className="code-font text-xs font-bold">usuarios.profile</p>
</div>
<div className="pt-6">
<button className="w-full bg-stone-900 text-white font-headline text-[10px] uppercase tracking-[0.2em] py-3 hover:bg-primary transition-colors">Execute Forge</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 md:col-span-9 bg-surface p-8 relative min-h-[400px] overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" ></div>
<div className="flex items-center justify-center h-full relative">
{/* Comentario remanente */}
<div className="flex gap-16 items-center">
{/* Comentario remanente */}
<div className="w-48 bg-white border border-surface-container shadow-xl">
<div className="bg-stone-900 text-white px-3 py-1 flex justify-between items-center">
<span className="code-font text-[10px] font-bold">ventas</span>
<span className="material-symbols-outlined text-xs">drag_handle</span>
</div>
<div className="p-3 space-y-2">
<div className="flex justify-between items-center text-[10px] code-font">
<span className="text-primary font-bold">id (PK)</span>
<span className="text-stone-400">INT4</span>
</div>
<div className="flex justify-between items-center text-[10px] code-font">
<span className="text-on-surface">order_no</span>
<span className="text-stone-400">STR</span>
</div>
<div className="flex justify-between items-center text-[10px] code-font bg-primary-container/10">
<span className="text-on-surface font-bold">client_id (FK)</span>
<span className="text-stone-400">INT4</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="flex flex-col items-center gap-1">
<div className="h-[2px] w-16 bg-primary relative">
<div className="absolute -left-1 -top-1 w-2 h-2 bg-primary rotate-45"></div>
<div className="absolute -right-1 -top-1 w-2 h-2 bg-primary rotate-45"></div>
</div>
<span className="text-[9px] font-headline font-black bg-white px-2 border border-primary text-primary">1:N</span>
</div>
{/* Comentario remanente */}
<div className="w-48 bg-white border border-surface-container shadow-xl">
<div className="bg-primary text-on-primary px-3 py-1 flex justify-between items-center">
<span className="code-font text-[10px] font-bold uppercase">usuarios</span>
<span className="material-symbols-outlined text-xs">drag_handle</span>
</div>
<div className="p-3 space-y-2">
<div className="flex justify-between items-center text-[10px] code-font">
<span className="text-primary font-bold">id (PK)</span>
<span className="text-stone-400">INT4</span>
</div>
<div className="flex justify-between items-center text-[10px] code-font">
<span className="text-on-surface">full_name</span>
<span className="text-stone-400">STR</span>
</div>
<div className="flex justify-between items-center text-[10px] code-font">
<span className="text-on-surface">email</span>
<span className="text-stone-400">STR</span>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="absolute bottom-6 left-6 flex gap-2">
<button className="bg-white/90 backdrop-blur px-3 py-1.5 border border-surface-container text-[10px] font-headline font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all">
<span className="material-symbols-outlined text-sm">zoom_in</span> Focus
                                </button>
<button className="bg-white/90 backdrop-blur px-3 py-1.5 border border-surface-container text-[10px] font-headline font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all">
<span className="material-symbols-outlined text-sm">auto_graph</span> Auto-Arrange
                                </button>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest p-6 border-l-4 border-lime-500">
<div className="flex justify-between items-start mb-4">
<h4 className="text-xs font-headline font-bold uppercase tracking-widest">Import/Export JSON</h4>
<span className="material-symbols-outlined text-stone-300">save_alt</span>
</div>
<div className="space-y-4">
<div className="group relative bg-surface-container p-4 overflow-hidden">
<div className="relative z-10">
<p className="text-[10px] font-headline text-stone-500 mb-1 uppercase tracking-wider">Scheduled Export</p>
<p className="text-sm code-font font-bold">db_daily_full.json</p>
<p className="text-[10px] font-label text-lime-600 mt-2">AUTO-TRIGGERED 04:00 AM</p>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-6xl text-white opacity-20 group-hover:rotate-12 transition-transform">article</span>
</div>
<button className="w-full bg-surface-container-highest hover:bg-surface-dim py-3 text-[10px] font-headline font-bold uppercase tracking-[0.2em] transition-colors">Import Schema Template</button>
</div>
</div>
<div className="md:col-span-2 bg-stone-900 p-6 text-white flex flex-col">
<div className="flex justify-between items-center mb-4">
<h4 className="text-xs font-headline font-bold uppercase tracking-widest text-lime-400">Migration Pipeline Activity</h4>
<div className="flex gap-4 text-[10px] font-headline tracking-tighter uppercase">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-lime-500"></span> 24 Success</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-error"></span> 0 Critical</span>
</div>
</div>
<div className="flex-grow space-y-2 overflow-y-auto max-h-48 scrollbar-hide">
<div className="flex items-center gap-4 py-2 border-b border-stone-800">
<span className="code-font text-[10px] text-stone-500">2023-10-24 14:22:01</span>
<span className="code-font text-xs text-lime-500">MIGRATE</span>
<span className="code-font text-xs">CREATE_TABLE warehouse_slots_v2</span>
<span className="ml-auto text-[10px] font-label text-stone-600">ID: #4492</span>
</div>
<div className="flex items-center gap-4 py-2 border-b border-stone-800">
<span className="code-font text-[10px] text-stone-500">2023-10-24 11:05:44</span>
<span className="code-font text-xs text-lime-500">MIGRATE</span>
<span className="code-font text-xs">ADD_COLUMN users.preferences (JSONB)</span>
<span className="ml-auto text-[10px] font-label text-stone-600">ID: #4491</span>
</div>
<div className="flex items-center gap-4 py-2 border-b border-stone-800">
<span className="code-font text-[10px] text-stone-500">2023-10-23 23:59:59</span>
<span className="code-font text-xs text-stone-400">CLEANUP</span>
<span className="code-font text-xs">VACUUM ANALYZE FULL DATABASE</span>
<span className="ml-auto text-[10px] font-label text-stone-600">ID: #4490</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

        </div>
    );
};
