import React from 'react';
import { Link } from '@inertiajs/react';

export default function DashboardAdministraciNCentral() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-full z-50 h-screen w-64 flex flex-col border-r-0 bg-stone-950 dark:bg-black font-['Space_Grotesk'] uppercase tracking-tight">
<div className="p-6">
<div className="text-xl font-bold tracking-tighter text-lime-400 dark:text-lime-300">LA CIMA</div>
<div className="text-[10px] text-stone-500 mt-1">ADMIN FORGE v2.4</div>
</div>
<nav className="flex-1 mt-4">
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 bg-stone-900 text-lime-400 border-l-4 border-lime-500" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="text-sm font-bold">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50" href="#">
<span className="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
<span className="text-sm">Module Health</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span className="text-sm">User Access</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50" href="#">
<span className="material-symbols-outlined" data-icon="database">database</span>
<span className="text-sm">DB Management</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span className="text-sm">Audit Logs</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-sm">Settings</span>
</a>
</nav>
<div className="mt-auto p-4 border-t border-stone-800/50">
<button className="w-full py-3 bg-stone-900 text-stone-300 text-xs font-bold border border-stone-700 hover:bg-red-900/20 hover:text-red-400 transition-all uppercase tracking-widest mb-4">
                System Lock
            </button>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-stone-500 hover:text-stone-300 text-xs transition-colors" href="#">
<span className="material-symbols-outlined text-sm" data-icon="support_agent">support_agent</span>
<span>Support</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-stone-500 hover:text-stone-300 text-xs transition-colors" href="#">
<span className="material-symbols-outlined text-sm" data-icon="logout">logout</span>
<span>Logout</span>
</a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<header className="fixed top-0 right-0 left-0 h-16 z-40 bg-stone-950/80 backdrop-blur-md flex justify-between items-center pl-64 pr-8">
<div className="flex items-center gap-8">
<h2 className="text-lg font-black tracking-widest text-white font-headline">MAYOR DE REPUESTO LA CIMA, C.A.</h2>
<nav className="hidden md:flex gap-6 font-['Space_Grotesk'] uppercase text-sm">
<a className="text-lime-400 font-bold border-b-2 border-lime-500 pb-1" href="#">Global View</a>
<a className="text-stone-500 hover:text-stone-200 transition-colors" href="#">System Health</a>
<a className="text-stone-500 hover:text-stone-200 transition-colors" href="#">Security Ops</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-sm">search</span>
<input className="bg-stone-900 border-none text-stone-300 text-xs py-2 pl-10 pr-4 w-48 focus:ring-1 focus:ring-lime-500/50" placeholder="CMD_SEARCH..." type="text"/>
</div>
<div className="flex items-center gap-4 text-lime-500">
<button className="material-symbols-outlined hover:text-amber-500 transition-colors" data-icon="notifications_active">notifications_active</button>
<button className="material-symbols-outlined hover:text-amber-500 transition-colors" data-icon="terminal">terminal</button>
<div className="h-8 w-8 bg-stone-800 rounded-sm overflow-hidden border border-stone-700">
<img alt="Admin Avatar" data-alt="professional corporate headshot of a system administrator in a dark studio setting with moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNxb8fQct9sHnPDbIkzyS8X-P7ZeoX2LNR5IknxIosezUCS3tr1MAvDvtY7BxB1j0OI7NlnxcHT8EUN5U0nfOVczW3P61zO-vX5cyic_irCoRI26K_KlqLb-SpSJN4jQbbT7nhHsn-4RbvOY20FwGMrK5MnqpDwe6Ut2ivdQIerQokK1j8H-KmEtZM6i5ZX4tdIiXAZ18vLm6ZVCGThp0D6-iQEtmK2dXLfcAI2EYu28G5HlqtZ26PoI8abw3Xq8D7LPugCe-XFBQ"/>
</div>
<button className="bg-red-950 text-red-500 text-[10px] font-bold px-3 py-1 border border-red-900/50 hover:bg-red-600 hover:text-white transition-all uppercase">
                    Emergency Shutdown
                </button>
</div>
</div>
</header>
{/* Comentario remanente */}
<main className="pt-24 pl-72 pr-8 pb-12">
{/* Comentario remanente */}
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-4xl font-black uppercase tracking-tighter text-on-surface">System Overview</h1>
<p className="text-secondary text-sm mt-1 uppercase font-medium tracking-widest">Administrative Forge / Engine Room</p>
</div>
<div className="flex gap-4">
<div className="bg-primary-container/10 border-l-4 border-primary px-6 py-3 flex items-center gap-4">
<div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
<div>
<div className="text-[10px] text-primary font-bold uppercase tracking-widest">Status Engine</div>
<div className="text-on-surface font-bold">System Integrity: OPTIMAL</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-8 bg-surface-container-lowest p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<span className="material-symbols-outlined text-surface-container-highest text-8xl opacity-10 rotate-12 select-none" data-icon="settings_input_component">settings_input_component</span>
</div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface">Core Infrastructure Health</h3>
<div className="flex gap-2">
<span className="bg-surface-container-high px-2 py-1 text-[10px] font-bold">Uptime: 99.99%</span>
<span className="bg-surface-container-high px-2 py-1 text-[10px] font-bold">Latency: 14ms</span>
</div>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="bg-surface-container-low p-4">
<div className="text-xs text-secondary uppercase font-bold mb-2">CPU Cluster</div>
<div className="text-3xl font-headline font-bold text-on-surface">24%</div>
<div className="w-full bg-surface-container-high h-1 mt-4">
<div className="bg-primary h-full w-[24%]"></div>
</div>
</div>
<div className="bg-surface-container-low p-4">
<div className="text-xs text-secondary uppercase font-bold mb-2">Memory Load</div>
<div className="text-3xl font-headline font-bold text-on-surface">61%</div>
<div className="w-full bg-surface-container-high h-1 mt-4">
<div className="bg-amber-500 h-full w-[61%]"></div>
</div>
</div>
<div className="bg-surface-container-low p-4">
<div className="text-xs text-secondary uppercase font-bold mb-2">Active Users</div>
<div className="text-3xl font-headline font-bold text-on-surface">842</div>
<div className="text-[10px] text-primary mt-2 flex items-center gap-1 font-bold">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span> +12%
                            </div>
</div>
<div className="bg-surface-container-low p-4">
<div className="text-xs text-secondary uppercase font-bold mb-2">IO Ops</div>
<div className="text-3xl font-headline font-bold text-on-surface">1.2k</div>
<div className="text-[10px] text-secondary mt-2 flex items-center gap-1 font-bold">
<span className="material-symbols-outlined text-xs" data-icon="sync">sync</span> SYNC_STABLE
                            </div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-4 bg-surface-container-lowest p-8 border-r-8 border-amber-500/20">
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-6">Storage Matrix</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] font-bold uppercase text-secondary mb-2">
<span>Main Warehouse DB</span>
<span>4.2 / 5.0 GB</span>
</div>
<div className="w-full bg-surface-container-high h-2">
<div className="bg-amber-500 h-full w-[84%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase text-secondary mb-2">
<span>Attachment Repository</span>
<span>12.8 / 50 GB</span>
</div>
<div className="w-full bg-surface-container-high h-2">
<div className="bg-primary h-full w-[25%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase text-secondary mb-2">
<span>Local Cache Index</span>
<span>256 / 512 MB</span>
</div>
<div className="w-full bg-surface-container-high h-2">
<div className="bg-primary h-full w-[50%]"></div>
</div>
</div>
</div>
<div className="mt-12 bg-surface-container p-4 rounded-sm">
<div className="text-[10px] text-secondary uppercase font-bold mb-1">Last Maintenance Scan</div>
<div className="text-sm font-bold text-on-surface">TODAY, 04:20 AM</div>
<button className="mt-3 w-full text-[10px] font-bold uppercase py-2 border border-outline-variant hover:bg-surface-container-high transition-colors">Clear Expired Cache</button>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 grid grid-cols-4 gap-6">
<button className="group bg-surface-container-highest hover:bg-primary transition-all p-6 text-left relative overflow-hidden">
<span className="material-symbols-outlined text-4xl text-on-surface group-hover:text-white transition-colors" data-icon="cloud_upload">cloud_upload</span>
<div className="mt-4">
<div className="text-sm font-bold uppercase group-hover:text-white transition-colors">Initiate Backup</div>
<div className="text-[10px] text-secondary group-hover:text-white/70 uppercase">Full System Snapshot</div>
</div>
</button>
<button className="group bg-surface-container-highest hover:bg-primary transition-all p-6 text-left">
<span className="material-symbols-outlined text-4xl text-on-surface group-hover:text-white transition-colors" data-icon="settings_backup_restore">settings_backup_restore</span>
<div className="mt-4">
<div className="text-sm font-bold uppercase group-hover:text-white transition-colors">Restore Point</div>
<div className="text-[10px] text-secondary group-hover:text-white/70 uppercase">Revert to Stable Version</div>
</div>
</button>
<button className="group bg-surface-container-highest hover:bg-amber-600 transition-all p-6 text-left">
<span className="material-symbols-outlined text-4xl text-on-surface group-hover:text-white transition-colors" data-icon="construction">construction</span>
<div className="mt-4">
<div className="text-sm font-bold uppercase group-hover:text-white transition-colors">Maintenance Mode</div>
<div className="text-[10px] text-secondary group-hover:text-white/70 uppercase">Toggle Public Access</div>
</div>
</button>
<button className="group bg-surface-container-highest hover:bg-stone-900 transition-all p-6 text-left">
<span className="material-symbols-outlined text-4xl text-on-surface group-hover:text-white transition-colors" data-icon="description">description</span>
<div className="mt-4">
<div className="text-sm font-bold uppercase group-hover:text-white transition-colors">Generate Report</div>
<div className="text-[10px] text-secondary group-hover:text-white/70 uppercase">Export PDF Audit</div>
</div>
</button>
</div>
{/* Comentario remanente */}
<div className="col-span-12 bg-surface-container-lowest overflow-hidden">
<div className="bg-stone-900 px-6 py-3 flex justify-between items-center">
<h3 className="text-xs font-bold text-lime-400 uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="developer_board">developer_board</span> Real-time Audit Terminal
                    </h3>
<div className="flex items-center gap-4">
<div className="h-2 w-2 bg-lime-500 rounded-full animate-ping"></div>
<span className="text-[10px] text-stone-500 font-bold">STREAM_ACTIVE</span>
</div>
</div>
<div className="p-0">
<table className="w-full text-left">
<thead className="bg-surface-container text-[10px] font-black uppercase text-secondary">
<tr>
<th className="px-6 py-3">Timestamp</th>
<th className="px-6 py-3">Event Type</th>
<th className="px-6 py-3">Subject</th>
<th className="px-6 py-3">Source Node</th>
<th className="px-6 py-3 text-right">Severity</th>
</tr>
</thead>
<tbody className="text-xs font-medium">
<tr className="border-b border-surface-container-low hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-mono text-secondary">14:22:01:002</td>
<td className="px-6 py-4 text-on-surface font-bold">USER_AUTH_SUCCESS</td>
<td className="px-6 py-4">admin_root_jvalencia</td>
<td className="px-6 py-4 font-mono">192.168.1.45</td>
<td className="px-6 py-4 text-right"><span className="text-primary font-bold">INFO</span></td>
</tr>
<tr className="border-b border-surface-container-low hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-mono text-secondary">14:21:44:910</td>
<td className="px-6 py-4 text-on-surface font-bold">INVENTORY_SYNC_START</td>
<td className="px-6 py-4">Warehouse_A_Core</td>
<td className="px-6 py-4 font-mono">Node_Cluster_7</td>
<td className="px-6 py-4 text-right"><span className="text-primary font-bold">INFO</span></td>
</tr>
<tr className="border-b border-surface-container-low hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-mono text-secondary">14:21:12:005</td>
<td className="px-6 py-4 text-on-surface font-bold">DB_QUERY_WARNING</td>
<td className="px-6 py-4">SQL_LONG_RUNNING_PROC</td>
<td className="px-6 py-4 font-mono">DB_SRV_02</td>
<td className="px-6 py-4 text-right"><span className="text-amber-600 font-bold">WARN</span></td>
</tr>
<tr className="border-b border-surface-container-low hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-mono text-secondary">14:19:55:221</td>
<td className="px-6 py-4 text-on-surface font-bold">API_TOKEN_EXPIRED</td>
<td className="px-6 py-4">external_client_v3</td>
<td className="px-6 py-4 font-mono">Gateway_01</td>
<td className="px-6 py-4 text-right"><span className="text-error font-bold">ERR</span></td>
</tr>
</tbody>
</table>
</div>
<div className="bg-surface-container-low px-6 py-3 flex justify-center">
<button className="text-[10px] font-bold text-secondary uppercase hover:text-on-surface transition-colors flex items-center gap-2">
                        Load History Buffer <span className="material-symbols-outlined text-xs" data-icon="keyboard_double_arrow_down">keyboard_double_arrow_down</span>
</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-16 pt-12 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-start gap-8">
<div className="max-w-md">
<div className="brand-font text-2xl font-black text-on-surface mb-2">LA CIMA</div>
<p className="text-secondary text-xs leading-relaxed">
                    MAYOR DE REPUESTO LA CIMA, C.A.<br/>
                    R.I.F: J-00000000-0<br/>
                    Av. Intercomunal, Zona Industrial II, Galpón 4-B<br/>
                    Barquisimeto, Edo. Lara, Venezuela.
                </p>
</div>
<div className="flex flex-col items-end gap-2 text-right">
<div className="text-[10px] font-black uppercase text-secondary tracking-widest">Digital Infrastructure Management</div>
<div className="text-[10px] font-medium text-stone-400">© 2024 MAYOR DE REPUESTO LA CIMA. ALL RIGHTS RESERVED.</div>
<div className="flex gap-4 mt-4">
<img alt="Industrial Tech" className="h-12 w-32 object-cover grayscale opacity-20" data-alt="close-up of futuristic computer circuitry with glowing green lights and complex technical architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwE1Cy5-OPd6h6OyRvbzUecQdmvyoB8c-ogDJBPmTAtlBJUViAVv9vd_ECP0cn4hBXOeIi2-gUSpScg71FKlc1FIL1XfBiKbv4VcT_UTVSz7L5Ied-ccVx7dsYB37JbWJP9oBMNHbCyUFGtHfLTfCGnYKq07cDb3bj1OQSAhKMiKi0nwnRbQ8fXffVgvwWUS40vzIQeSgDMofhnR-zxaaKTTzCbSXchiZVhagxduGq2f9VzSEqvHNu2qFYHR7vzVwJ_ESF0hvRP2A"/>
</div>
</div>
</footer>
</main>

        </div>
    );
};
