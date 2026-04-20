import React from 'react';
import { Link } from '@inertiajs/react';

export default function ConfiguraciNDeParMetrosGlobales() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-full z-50 h-screen w-64 flex flex-col border-r-0 bg-stone-950 dark:bg-black font-['Space_Grotesk'] uppercase tracking-tight">
<div className="p-6">
<h1 className="text-xl font-bold tracking-tighter text-lime-400 dark:text-lime-300">LA CIMA</h1>
<p className="text-[10px] text-stone-500 tracking-widest mt-1">ADMIN FORGE v2.4</p>
</div>
<nav className="flex-1 mt-4">
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="text-xs">Dashboard</span>
</a>
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
<span className="text-xs">Module Health</span>
</a>
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span className="text-xs">User Access</span>
</a>
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined" data-icon="database">database</span>
<span className="text-xs">DB Management</span>
</a>
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
<span className="text-xs">Audit Logs</span>
</a>
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 bg-stone-900 text-lime-400 border-l-4 border-lime-500 Active: scale-[0.98] transition-transform duration-150" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-xs">Settings</span>
</a>
</nav>
<div className="p-4 bg-stone-900 mt-auto">
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
<span className="text-xs">Support</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="text-xs">Logout</span>
</a>
</div>
</aside>
<div className="flex-1 ml-64 flex flex-col overflow-hidden">
{/* Comentario remanente */}
<header className="flex justify-between items-center w-full pl-8 pr-8 docked full-width top-0 h-16 bg-stone-950/80 backdrop-blur-md z-40">
<div className="flex items-center gap-8">
<span className="text-lg font-black tracking-widest text-white uppercase font-headline">MAYOR DE REPUESTO LA CIMA, C.A.</span>
<nav className="hidden md:flex gap-6">
<a className="text-stone-500 hover:text-stone-200 font-['Space_Grotesk'] uppercase text-sm transition-colors" href="#">Global View</a>
<a className="text-stone-500 hover:text-stone-200 font-['Space_Grotesk'] uppercase text-sm transition-colors" href="#">System Health</a>
<a className="text-lime-400 font-bold border-b-2 border-lime-500 pb-1 font-['Space_Grotesk'] uppercase text-sm" href="#">Security Ops</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-4 mr-4 text-stone-400">
<span className="material-symbols-outlined cursor-pointer hover:text-amber-500 transition-colors" data-icon="notifications_active">notifications_active</span>
<span className="material-symbols-outlined cursor-pointer hover:text-amber-500 transition-colors" data-icon="terminal">terminal</span>
</div>
<button className="bg-error px-4 py-1 text-[10px] text-white font-bold uppercase tracking-tighter hover:opacity-80 transition-opacity">Emergency Shutdown</button>
<img alt="Admin Avatar" className="w-8 h-8 rounded-full border border-stone-700" data-alt="Close-up professional portrait of a tech administrator with serious expression in high-contrast industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMLQhYgbw7r0xWbmfrggbB3SnwSUZJhCOEoSdAIOSrFzjLU_kAs9gvqWOuV3GldvVPexdVbVLbF22PJHL09otbl3tNpPS0bV_ntsT5FVwv2J-hGAH22JprHQcO5Tv6CubfxmRIbcT0lsKfz_1ln-JD8SEKJfIE67GC8hOK61W3qQKyS8Of6ovjEo7c3Jo1UcOYkxn2WDFHF_7mXlSi0Xhifh6hB6VV97IPJ3tbEv3gGKAaMV9_9PFKsAx5yeDgZ5GQOraABZBnEis"/>
</div>
</header>
{/* Comentario remanente */}
<main className="flex-1 overflow-y-auto p-8 space-y-8">
{/* Comentario remanente */}
<section className="relative">
<div className="absolute -left-8 top-0 h-full w-1 bg-primary"></div>
<h2 className="text-4xl font-black uppercase tracking-tighter text-on-surface font-headline">Configuración del Sistema</h2>
<p className="text-secondary uppercase text-xs tracking-[0.2em] mt-2">Engineered Precision / Global Parameters</p>
</section>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-6">
{/* Comentario remanente */}
<div className="col-span-2 md:col-span-1 bg-surface-container-lowest p-6 rounded-lg group transition-all hover:bg-surface-container">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="currency_exchange">currency_exchange</span>
<span className="text-[10px] bg-primary-container px-2 py-0.5 font-bold text-on-primary-container rounded">LIVE</span>
</div>
<h3 className="text-lg font-bold font-headline uppercase mb-4">Currency Matrix</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-surface-container-low rounded">
<span className="label-md text-secondary">Primary (USD)</span>
<span className="font-mono font-bold">$ 1.00</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-low rounded border-l-4 border-primary">
<span className="label-md text-secondary">Secondary (VES)</span>
<input className="bg-transparent border-none text-right font-mono font-bold focus:ring-0 p-0 w-24" type="text" value="36.42"/>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-2 md:col-span-1 bg-surface-container-lowest p-6 rounded-lg group transition-all hover:bg-surface-container">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="account_balance">account_balance</span>
</div>
<h3 className="text-lg font-bold font-headline uppercase mb-4">Tax Structure</h3>
<div className="space-y-4">
<div>
<label className="text-[10px] uppercase text-secondary font-bold mb-1 block">IVA General Rate</label>
<div className="flex items-center gap-2">
<input className="flex-1 bg-surface-container-highest border-none focus:ring-2 focus:ring-primary rounded p-3 text-sm font-bold" type="text" value="16.00"/>
<span className="font-bold text-primary">%</span>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded">
<span className="text-xs font-bold uppercase">Special Taxpayer (SPE)</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-secondary-container rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-2 bg-stone-900 p-8 rounded-lg text-white">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-lime-500 rounded-sm">
<span className="material-symbols-outlined text-black" data-icon="terminal" data-weight="fill" >terminal</span>
</div>
<div>
<h3 className="text-xl font-bold font-headline uppercase leading-tight">SENIAT Auth Protocol</h3>
<p className="text-stone-500 text-[10px] uppercase tracking-widest">Electronic Invoicing Integration</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase text-stone-400 font-bold">API KEY / USERNAME</label>
<input className="w-full bg-stone-800 border-none text-lime-400 focus:ring-1 focus:ring-lime-500 rounded p-3 font-mono text-sm" type="text" value="CIMA_ADMIN_V3_PROD"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase text-stone-400 font-bold">Auth Certificate (P12)</label>
<div className="w-full bg-stone-800 border border-dashed border-stone-600 rounded p-3 flex justify-between items-center cursor-pointer hover:bg-stone-700 transition-colors">
<span className="text-xs text-stone-400">cima_cert_2024.p12</span>
<span className="material-symbols-outlined text-stone-500" data-icon="verified">verified</span>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 rounded-lg">
<h3 className="text-sm font-bold font-headline uppercase mb-6 flex items-center gap-2">
<span className="w-4 h-[2px] bg-primary"></span> Visual Identity
                        </h3>
<div className="space-y-6">
<div className="flex items-center justify-between">
<span className="text-xs font-bold uppercase text-secondary">System Theme</span>
<div className="flex bg-surface-container-highest p-1 rounded-sm">
<button className="px-3 py-1 text-[10px] font-bold bg-white text-on-surface shadow-sm rounded-sm">LIGHT</button>
<button className="px-3 py-1 text-[10px] font-bold text-secondary">DARK</button>
</div>
</div>
<div>
<label className="text-[10px] uppercase text-secondary font-bold mb-3 block text-center">Company Logo Upload</label>
<div className="aspect-video bg-surface-container-low rounded-lg border-2 border-dashed border-outline-variant flex flex-col items-center justify-center group cursor-pointer hover:border-primary transition-all overflow-hidden relative">
<img alt="Company Logo placeholder" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-opacity" data-alt="Abstract minimalist industrial logo design with clean geometric lines in black and white on textured paper background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoG3GNwaIxMdhYR5ORAQq4rEt0pc8B1NMLYnqGTmwRK4W78d0NuLXCDar8OIeykPGappJBJ79x6qxNcyx2xa1JePGIpyMO8yzDaRoROkfgF2dR1D6sggAg6jgML2CLfY1eTuoBIf8_ThmRbuDGzzZfmUiZ2rHWtMI-EU4cE75jgyT4S5MMpo3s6fcDvEpyiU_0KhZUSSTV3efWzTpwp_oLabbUFDRU1A3SI9eaig-OIMhhs_FySSNF6zg3fq2HsUEfHanLIqY5zOI"/>
<span className="material-symbols-outlined text-secondary group-hover:text-primary mb-2" data-icon="cloud_upload">cloud_upload</span>
<p className="text-[10px] font-bold text-secondary uppercase">Drag file or click to browse</p>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 rounded-lg">
<h3 className="text-sm font-bold font-headline uppercase mb-6 flex items-center gap-2">
<span className="w-4 h-[2px] bg-primary"></span> Threshold Alerts
                        </h3>
<div className="space-y-4">
<div className="p-4 bg-surface-container-low rounded flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="inventory_2">inventory_2</span>
<div>
<p className="text-[10px] font-bold uppercase leading-none">Stock Warning</p>
<p className="text-[9px] text-secondary">Trigger at 15% levels</p>
</div>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-secondary-container rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
<div className="p-4 bg-surface-container-low rounded flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="payments">payments</span>
<div>
<p className="text-[10px] font-bold uppercase leading-none">Payroll Cut-off</p>
<p className="text-[9px] text-secondary">Notify 3 days before</p>
</div>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-secondary-container rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
</div>
<button className="w-full mt-6 bg-surface-container-highest py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">Global Notification Log</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-12 pt-8 border-t-0 bg-surface-container p-8 rounded-t-xl grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h4 className="font-headline font-black text-sm uppercase tracking-widest mb-4">LA CIMA CORPORATE</h4>
<p className="text-xs text-secondary leading-relaxed">
                        Calle Industrial Sur, Galpón 42-B<br/>
                        Zona Industrial II, Barquisimeto<br/>
                        Estado Lara, Venezuela.
                    </p>
</div>
<div className="flex flex-col justify-center">
<p className="text-[10px] font-bold uppercase text-secondary mb-1">Tax Registry (RIF)</p>
<p className="text-xl font-headline font-bold text-on-surface">J-30568214-0</p>
</div>
<div className="flex flex-col md:items-end justify-center">
<div className="flex gap-4 mb-4">
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="language">language</span>
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="mail">mail</span>
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="call">call</span>
</div>
<p className="text-[9px] text-secondary uppercase font-bold tracking-[0.2em]">© 2024 MAYOR DE REPUESTO LA CIMA, C.A.</p>
</div>
</footer>
</main>
</div>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform active:scale-95 z-50">
<span className="material-symbols-outlined text-3xl" data-icon="save" data-weight="fill" >save</span>
<span className="absolute right-20 bg-stone-900 text-white text-[10px] font-bold px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap pointer-events-none">Commit Parameters</span>
</button>

        </div>
    );
};
