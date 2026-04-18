import React from 'react';
import { Link } from '@inertiajs/react';

export default function EstructuraYFlujosDeAprobaciN() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-screen w-64 flex flex-col border-r-0 bg-stone-950 dark:bg-black z-50 font-['Space_Grotesk'] uppercase tracking-tight">
<div className="p-6">
<h1 className="text-xl font-bold tracking-tighter text-lime-400 dark:text-lime-300">LA CIMA</h1>
<p className="text-[10px] text-stone-500 tracking-[0.2em] mt-1">ADMIN FORGE v2.4</p>
</div>
<nav className="flex-1 mt-4">
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined">analytics</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined">health_and_safety</span>
<span>Module Health</span>
</a>
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 bg-stone-900 text-lime-400 border-l-4 border-lime-500 scale-[0.98] transition-transform duration-150" href="#">
<span className="material-symbols-outlined">admin_panel_settings</span>
<span>User Access</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined">database</span>
<span>DB Management</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined">history_edu</span>
<span>Audit Logs</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-lime-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
<div className="mt-auto p-4 flex flex-col gap-2">
<button className="w-full py-2 bg-stone-900 text-stone-300 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all border border-stone-800">
                System Lock
            </button>
<div className="flex flex-col border-t border-stone-800 pt-4">
<a className="flex items-center gap-3 px-4 py-2 text-stone-500 hover:text-stone-300 text-xs transition-colors" href="#">
<span className="material-symbols-outlined text-sm">support_agent</span>
<span>Support</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-stone-500 hover:text-red-400 text-xs transition-colors" href="#">
<span className="material-symbols-outlined text-sm">logout</span>
<span>Logout</span>
</a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 min-h-screen flex flex-col">
{/* Comentario remanente */}
<header className="fixed top-0 right-0 left-64 h-16 bg-stone-950/80 backdrop-blur-md flex justify-between items-center px-8 z-40">
<div className="flex items-center gap-8">
<span className="text-lg font-black tracking-widest text-white uppercase">MAYOR DE REPUESTO LA CIMA, C.A.</span>
<nav className="hidden lg:flex gap-6 font-['Space_Grotesk'] uppercase text-sm tracking-tight">
<a className="text-stone-500 hover:text-stone-200 transition-colors" href="#">Global View</a>
<a className="text-stone-500 hover:text-stone-200 transition-colors" href="#">System Health</a>
<a className="text-lime-400 font-bold border-b-2 border-lime-500 pb-1" href="#">Security Ops</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="relative flex items-center bg-stone-900 px-3 py-1.5 rounded-sm">
<span className="material-symbols-outlined text-stone-500 text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-[10px] text-stone-300 font-mono w-48 uppercase" placeholder="SEARCH SYSTEM..." type="text"/>
</div>
<div className="flex gap-4">
<button className="material-symbols-outlined text-lime-500 hover:text-amber-500 transition-colors">notifications_active</button>
<button className="material-symbols-outlined text-lime-500 hover:text-amber-500 transition-colors">terminal</button>
</div>
<button className="bg-red-950 text-red-500 border border-red-900 px-4 py-1.5 text-[10px] font-black uppercase tracking-tighter hover:bg-red-900 hover:text-red-200 transition-all opacity-80 active:opacity-100">
                    Emergency Shutdown
                </button>
<img alt="Admin Avatar" className="w-8 h-8 rounded-full border-2 border-stone-800" data-alt="Professional headshot of a system administrator in technical attire, neutral lighting, high contrast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2eCKDVIr57X-gwAXgMEMfzOlJhFeDsDhpSGE0BlTF3xQ3H9j8NRRjXeKagDacywzT9lvdkb72wdtw2txh8vUvCqtjvz7enDniPK1A4Sjy-wK0c9uTd8ymJzU8C0H5tMhzXGJENMDfCnq5BgvpmRmYTREHAMABa3vXx53AYG6T_TaU8BjooKpY3cYhjNm4FTlypDbBx6-G7a57Cx-Kq87ZNcwsMdpa7xlepaMQD6S1hSxBVf11p1iRyhDytOKkQ2zAnIH9k27a0c"/>
</div>
</header>
{/* Comentario remanente */}
<section className="mt-16 p-8 flex flex-col gap-8 flex-1">
{/* Comentario remanente */}
<div className="flex justify-between items-end">
<div>
<h2 className="text-4xl font-black uppercase tracking-tight text-on-surface">Organizational Forge</h2>
<p className="text-secondary font-medium tracking-tight mt-1">DEPARTMENTAL STRUCTURE &amp; APPROVAL TOPOLOGY</p>
</div>
<div className="flex gap-4">
<button className="px-6 py-2 bg-surface-container-high text-on-surface font-bold uppercase text-xs flex items-center gap-2 hover:scale-[1.02] transition-transform">
<span className="material-symbols-outlined text-sm">download</span> Export Schema
                    </button>
<button className="px-6 py-2 bg-primary text-on-primary font-bold uppercase text-xs flex items-center gap-2 hover:scale-[1.02] transition-transform">
<span className="material-symbols-outlined text-sm">add</span> New Department
                    </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 flex flex-col gap-6 shadow-sm">
<div className="flex justify-between items-center">
<h3 className="headline text-xl font-bold uppercase tracking-tight">Active Departments</h3>
<span className="text-[10px] bg-primary-container px-2 py-0.5 font-black text-on-primary-container">6 MODULES DETECTED</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-[10px] uppercase font-black text-secondary tracking-widest">
<th className="p-4">Department ID</th>
<th className="p-4">Entity Name</th>
<th className="p-4">Managed By</th>
<th className="p-4">Annual Budget</th>
<th className="p-4 text-right">Utility</th>
</tr>
</thead>
<tbody className="text-sm font-medium text-on-surface">
<tr className="border-b border-surface-container transition-colors hover:bg-surface-container-low">
<td className="p-4 font-mono text-primary">DEP-VNT-01</td>
<td className="p-4">Ventas</td>
<td className="p-4 flex items-center gap-2">
<img alt="Manager" className="w-6 h-6 rounded-full" data-alt="Portrait of a business executive in professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJlRIUV_aMeyeBhsliUWLkcfpdxiUHxRFQagQ_pFnswEOff30bih_vwxa9iOVlNqw2aIV8RjNctEzWPRtqOJYTgp3PzBJgw8ObNtxqg5uFepadx0hy3NzQEOnQWtNZAuo4E6c2Dvn8gdOIwrAfUeJ6fv1GTvWrcsgI7EVMstBC5Y3daJUrQIQ9n8nfHh--NfWPt-COQHqnOiGMmIRkAcfJEWSV53GNbl9NDEJSiOiSXB1-NPYOeLP25TJp5ba4v2FcMnrxcAneVYQ"/>
                                        Ricardo M.
                                    </td>
<td className="p-4 font-mono">$2.4M</td>
<td className="p-4 text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">edit</button>
<button className="material-symbols-outlined text-secondary hover:text-error transition-colors">delete</button>
</td>
</tr>
<tr className="bg-surface-container-low/30 border-b border-surface-container transition-colors hover:bg-surface-container-low">
<td className="p-4 font-mono text-primary">DEP-FIN-02</td>
<td className="p-4">Finanzas</td>
<td className="p-4 flex items-center gap-2">
<img alt="Manager" className="w-6 h-6 rounded-full" data-alt="Portrait of a female finance director in professional studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL5Otv2XcxStCXzJzr1Hm5hK5vWhKJfCXMNQjn3clhEIZcKK2wqgqTEegAXE37rIfiEJZYWVdyfEPDD9WqRCjNFusdFRgyMsY46PMw5fzLu00VxEhzFNFxYAQcH0EEY-O6MQTTJSnCUe1AVJSv6gzVfn6hb2PrhAUSonKa_FRXffnoFL5Ilfuhb7hT5HUem-PTWgO0idxFlm8NoCm4gsomcOz1-fpoT5cUBqqDaFv7HaKQ1wKGZ2joqvZgBMs3Yue1cnNFDjmm7Hs"/>
                                        Elena G.
                                    </td>
<td className="p-4 font-mono">$1.1M</td>
<td className="p-4 text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">edit</button>
<button className="material-symbols-outlined text-secondary hover:text-error transition-colors">delete</button>
</td>
</tr>
<tr className="border-b border-surface-container transition-colors hover:bg-surface-container-low">
<td className="p-4 font-mono text-primary">DEP-ALM-03</td>
<td className="p-4">Almacén</td>
<td className="p-4 flex items-center gap-2">
<img alt="Manager" className="w-6 h-6 rounded-full" data-alt="Industrial warehouse manager portrait with high-visibility gear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTnATtUgD7dIsvFSLwget9WCdq0nxhOgarXxv2B2I1bX8zLKE8LqhtL-drdo2WbPlNwPUULGlsbqw2VWiAbbDlMNa50C0CqNVFDjsZ3IxF1EPboVx-CfAJhIouCOqH-tk8V9kZM2evpnfeqg5IRuKRUwE4hENGFSuV7AY59zC57HjlIaXuNeD4_oI6d1fWhFzA9iMQkF_kGusYCduOUy5IRVb6DepmX3zjry7HgJZWbEkARqlmUoofCkYlfY4M4AQfoEloJ4GKDr8"/>
                                        Oscar L.
                                    </td>
<td className="p-4 font-mono">$3.8M</td>
<td className="p-4 text-right">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">edit</button>
<button className="material-symbols-outlined text-secondary hover:text-error transition-colors">delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-5 bg-surface-container p-8 flex flex-col gap-6">
<h3 className="headline text-xl font-bold uppercase tracking-tight">Approval Chains</h3>
<div className="relative border-l-2 border-dashed border-primary/30 ml-4 pl-8 py-4 space-y-8">
{/* Comentario remanente */}
<div className="relative">
<div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
<div className="bg-surface-container-lowest p-4 shadow-sm border-l-4 border-primary">
<p className="text-[10px] font-black text-primary uppercase">Trigger Event</p>
<p className="text-sm font-bold mt-1 uppercase">Purchase Requisition &gt; $1,000</p>
</div>
</div>
{/* Comentario remanente */}
<div className="relative">
<div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-stone-400 ring-4 ring-background"></div>
<div className="bg-surface-container-lowest p-4 shadow-sm">
<p className="text-[10px] font-black text-secondary uppercase">Level 01 Review</p>
<p className="text-sm font-bold mt-1 uppercase">Direct Supervisor Approval</p>
<p className="text-[10px] text-secondary mt-2">SLA: 24 Hours</p>
</div>
</div>
{/* Comentario remanente */}
<div className="relative">
<div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-stone-400 ring-4 ring-background"></div>
<div className="bg-surface-container-lowest p-4 shadow-sm">
<p className="text-[10px] font-black text-secondary uppercase">Level 02 Validation</p>
<p className="text-sm font-bold mt-1 uppercase">Finance Dept. Verification</p>
<p className="text-[10px] text-secondary mt-2">Required for: DEP-VNT, DEP-ALM</p>
</div>
</div>
{/* Comentario remanente */}
<div className="relative">
<div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-stone-900 ring-4 ring-background"></div>
<div className="bg-surface-container-highest p-4 shadow-sm">
<p className="text-[10px] font-black text-on-surface uppercase">Final Execution</p>
<p className="text-sm font-bold mt-1 uppercase">System Disbursement</p>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 bg-surface-container-lowest p-8 flex flex-col gap-6 shadow-sm overflow-hidden">
<div className="flex items-center gap-4">
<h3 className="headline text-xl font-bold uppercase tracking-tight">RACI Assignment Matrix</h3>
<div className="flex gap-2">
<span className="text-[9px] px-2 py-0.5 border border-primary text-primary font-bold">R: Responsible</span>
<span className="text-[9px] px-2 py-0.5 border border-stone-300 text-secondary font-bold">A: Accountable</span>
<span className="text-[9px] px-2 py-0.5 border border-stone-300 text-secondary font-bold">C: Consulted</span>
<span className="text-[9px] px-2 py-0.5 border border-stone-300 text-secondary font-bold">I: Informed</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-[11px] uppercase tracking-wider border-t border-surface-container">
<thead>
<tr className="bg-surface-container-low">
<th className="p-4 text-left font-black w-1/4">Process Activity</th>
<th className="p-4 text-center">General Manager</th>
<th className="p-4 text-center">Finance Lead</th>
<th className="p-4 text-center">HR Admin</th>
<th className="p-4 text-center">IT Ops</th>
<th className="p-4 text-center">Logistics</th>
</tr>
</thead>
<tbody className="font-medium text-secondary">
<tr className="border-b border-surface-container">
<td className="p-4 text-on-surface font-bold">Strategic Budget Planning</td>
<td className="p-4 text-center font-black text-primary">A</td>
<td className="p-4 text-center font-black text-primary">R</td>
<td className="p-4 text-center">C</td>
<td className="p-4 text-center">I</td>
<td className="p-4 text-center">C</td>
</tr>
<tr className="border-b border-surface-container bg-surface-container-low/20">
<td className="p-4 text-on-surface font-bold">Inventory Procurement</td>
<td className="p-4 text-center">I</td>
<td className="p-4 text-center">C</td>
<td className="p-4 text-center">I</td>
<td className="p-4 text-center">C</td>
<td className="p-4 text-center font-black text-primary">R/A</td>
</tr>
<tr className="border-b border-surface-container">
<td className="p-4 text-on-surface font-bold">Security Audit Protocol</td>
<td className="p-4 text-center">I</td>
<td className="p-4 text-center font-black text-primary">A</td>
<td className="p-4 text-center">I</td>
<td className="p-4 text-center font-black text-primary">R</td>
<td className="p-4 text-center">C</td>
</tr>
<tr className="border-b border-surface-container bg-surface-container-low/20">
<td className="p-4 text-on-surface font-bold">Employee Onboarding</td>
<td className="p-4 text-center">I</td>
<td className="p-4 text-center">I</td>
<td className="p-4 text-center font-black text-primary">R/A</td>
<td className="p-4 text-center">C</td>
<td className="p-4 text-center">I</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-6 bg-stone-900 p-8 text-white">
<h3 className="headline text-xl font-bold uppercase tracking-tight text-lime-400 mb-6">Budget Consumption Monitor</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] mb-2 uppercase font-bold tracking-widest">
<span>Ventas (DEP-VNT-01)</span>
<span className="text-lime-400">72% Consumed</span>
</div>
<div className="h-2 bg-stone-800 rounded-full overflow-hidden">
<div className="h-full bg-lime-500" ></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-2 uppercase font-bold tracking-widest">
<span>Almacén (DEP-ALM-03)</span>
<span className="text-amber-500">91% Warning</span>
</div>
<div className="h-2 bg-stone-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500" ></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-2 uppercase font-bold tracking-widest">
<span>Finanzas (DEP-FIN-02)</span>
<span className="text-blue-400">34% Optimal</span>
</div>
<div className="h-2 bg-stone-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-400" ></div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
<div className="bg-primary-container p-6 flex items-center justify-between group cursor-pointer transition-all">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-3xl text-on-primary-container">schema</span>
<div>
<p className="text-xs font-black uppercase text-on-primary-container">Topology View</p>
<p className="text-sm font-medium">Render interactive org chart 3D</p>
</div>
</div>
<span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward_ios</span>
</div>
<div className="bg-surface-container-highest p-6 flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-3xl text-secondary">history</span>
<div>
<p className="text-xs font-black uppercase text-secondary">Change Log</p>
<p className="text-sm font-medium">Last modification: 2h ago by r.mercado</p>
</div>
</div>
<span className="material-symbols-outlined">description</span>
</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<footer className="mt-auto bg-stone-950 px-8 py-12 text-stone-500">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<h4 className="text-white font-black text-xl tracking-tighter uppercase mb-4">MAYOR DE REPUESTO LA CIMA, C.A.</h4>
<p className="text-xs leading-relaxed max-w-md uppercase tracking-tight">
                        Engineered for heavy-duty industrial commerce. Specialized in precision engine parts and logistical excellence. 
                        Operated under Admin Forge v2.4 protocols for maximum organizational efficiency.
                    </p>
</div>
<div>
<h5 className="text-[10px] font-black text-stone-300 uppercase tracking-widest mb-4">Legal Framework</h5>
<ul className="text-[10px] space-y-2 uppercase tracking-tight font-medium">
<li><a className="hover:text-lime-400 transition-colors" href="#">Privacy &amp; Data Governance</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Terms of Digital Operation</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Industrial Compliance 2024</a></li>
</ul>
</div>
<div>
<h5 className="text-[10px] font-black text-stone-300 uppercase tracking-widest mb-4">Registry Info</h5>
<p className="text-[10px] uppercase font-mono">RIF: J-00000000-0</p>
<p className="text-[10px] uppercase font-mono mt-1">SNC Registry: #LM-9942</p>
<div className="mt-6 flex gap-4">
<span className="material-symbols-outlined text-stone-600">verified</span>
<span className="material-symbols-outlined text-stone-600">shield</span>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-900 flex justify-between items-center">
<p className="text-[10px] uppercase tracking-widest">© 2024 LA CIMA. ALL RIGHTS RESERVED. PRECISION SYSTEM INTERFACE.</p>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></div>
<span className="text-[9px] uppercase font-bold text-lime-600">Secure Link Established</span>
</div>
</div>
</footer>
</main>

        </div>
    );
};
