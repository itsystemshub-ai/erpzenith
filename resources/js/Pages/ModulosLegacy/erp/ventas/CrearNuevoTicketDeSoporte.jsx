import React from 'react';
import { Link } from '@inertiajs/react';

export default function CrearNuevoTicketDeSoporte() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 border-b-0 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-3 w-full">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-stone-900 dark:text-white tracking-tighter font-headline">INDUSTRIAL FORGE ERP</span>
<div className="hidden md:flex gap-6">
<a className="text-stone-500 dark:text-stone-400 font-medium font-headline uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">Dashboard</a>
<a className="text-stone-500 dark:text-stone-400 font-medium font-headline uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">Analytics</a>
<a className="text-lime-600 dark:text-lime-400 font-bold border-b-2 border-lime-600 font-headline uppercase tracking-tight" href="#">Support</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="professional portrait of a male engineer wearing a subtle smile with technical background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDToCoMOs6T9vAWTqQotbe2NsWJ5hRxfOv0zDVV0AwjAHKYrzwrBky8-EqEfiQJRwrzR1-3xdmo103IIhla3GeaBceJB23-RSDPhU3unf4AwgNfeX_tMNqmOTFNfu_-kdXi4IWmxwbW4_GuGBUnU8eB4SDdJsKAcWEsSHrbg8P6q3nIGI5LAJVn6Rhf5qQb2q8LAlEuN9HJcYse0rMxyne-jNnImewXQkCERREYlQjGOfTcUfZ-o7PmqCaB0jI3LJ5FRyFAMi2kccA"/>
</div>
</div>
</nav>
{/* Comentario remanente */}
<aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 z-40 bg-stone-50 dark:bg-stone-900 industrial-shadow flex-col h-full py-6 pt-20">
<div className="px-6 mb-8">
<h2 className="font-headline font-black text-stone-900 dark:text-white text-lg tracking-tighter">FORGE SYSTEMS</h2>
<p className="text-[10px] font-headline font-semibold uppercase tracking-widest text-stone-400">High-Performance ERP</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-stone-600 hover:bg-stone-200 hover:translate-x-1 transition-all duration-200 font-headline font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">inventory_2</span> Inventario
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-600 hover:bg-stone-200 hover:translate-x-1 transition-all duration-200 font-headline font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">point_of_sale</span> Ventas
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-600 hover:bg-stone-200 hover:translate-x-1 transition-all duration-200 font-headline font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">shopping_cart</span> Compras
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-600 hover:bg-stone-200 hover:translate-x-1 transition-all duration-200 font-headline font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">payments</span> Finanzas
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-600 hover:bg-stone-200 hover:translate-x-1 transition-all duration-200 font-headline font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">account_balance</span> Contabilidad
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-600 hover:bg-stone-200 hover:translate-x-1 transition-all duration-200 font-headline font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">groups</span> RRHH
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-600 hover:bg-stone-200 hover:translate-x-1 transition-all duration-200 font-headline font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">admin_panel_settings</span> Administración
            </a>
</nav>
<div className="mt-auto px-6 space-y-4">
<button className="w-full bg-primary text-on-primary font-headline font-bold uppercase text-[10px] tracking-[0.2em] py-3 px-4 flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                TECHNICAL REPORT
            </button>
<div className="pt-4 border-t border-stone-200 space-y-1">
<a className="flex items-center gap-3 py-2 text-stone-500 font-headline font-semibold uppercase text-xs tracking-widest hover:text-stone-900 transition-colors" href="#">
<span className="material-symbols-outlined text-lg">security</span> Security
                </a>
<a className="flex items-center gap-3 py-2 text-stone-500 font-headline font-semibold uppercase text-xs tracking-widest hover:text-stone-900 transition-colors" href="#">
<span className="material-symbols-outlined text-lg">logout</span> Log Out
                </a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:ml-64 pt-20 min-h-screen">
<div className="max-w-6xl mx-auto p-8">
{/* Comentario remanente */}
<header className="mb-12 relative">
<div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-container/20 -z-10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="text-accent-industrial font-headline font-black uppercase tracking-[0.3em] text-xs">Support Center</span>
<h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none mt-2">New Support <br/> Ticket</h1>
</div>
<div className="max-w-xs">
<p className="text-secondary font-body text-sm leading-relaxed border-l-2 border-accent-industrial pl-4">
                            Submit a technical inquiry or report a system anomaly. Our engineering team prioritizes tickets based on severity levels.
                        </p>
</div>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Comentario remanente */}
<section className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-lg shadow-sm ghost-border">
<form className="space-y-8">
{/* Comentario remanente */}
<div className="group">
<label className="block font-headline font-bold uppercase text-xs tracking-widest text-secondary mb-3 group-focus-within:text-primary transition-colors">Subject</label>
<input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary px-4 py-4 font-body text-on-surface placeholder:text-stone-400 transition-all" placeholder="e.g., Inventory synchronization delay in Main Warehouse" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Comentario remanente */}
<div className="group">
<label className="block font-headline font-bold uppercase text-xs tracking-widest text-secondary mb-3 group-focus-within:text-primary transition-colors">Module Affected</label>
<select className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary px-4 py-4 font-body text-on-surface transition-all appearance-none">
<option>Select System Module</option>
<option>Inventario</option>
<option>Ventas</option>
<option>Compras</option>
<option>Finanzas</option>
<option>Contabilidad</option>
<option>RRHH</option>
</select>
</div>
{/* Comentario remanente */}
<div className="group">
<label className="block font-headline font-bold uppercase text-xs tracking-widest text-secondary mb-3 group-focus-within:text-primary transition-colors">Severity Level</label>
<select className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary px-4 py-4 font-body text-on-surface transition-all appearance-none">
<option>Low - Minor Question</option>
<option>Medium - Performance Issue</option>
<option>High - Workflow Impeded</option>
<option className="text-error font-bold">Critical - System Down</option>
</select>
</div>
</div>
{/* Comentario remanente */}
<div className="group">
<label className="block font-headline font-bold uppercase text-xs tracking-widest text-secondary mb-3 group-focus-within:text-primary transition-colors">Detailed Description</label>
<textarea className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary px-4 py-4 font-body text-on-surface placeholder:text-stone-400 transition-all" placeholder="Provide a detailed technical explanation of the issue, including steps to reproduce..." rows="6"></textarea>
</div>
{/* Comentario remanente */}
<div>
<label className="block font-headline font-bold uppercase text-xs tracking-widest text-secondary mb-3">Supporting Documentation &amp; Screenshots</label>
<div className="border-2 border-dashed border-outline-variant bg-surface rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-4xl text-stone-300 group-hover:text-accent-industrial mb-4 transition-colors">cloud_upload</span>
<p className="font-headline font-bold uppercase text-[10px] tracking-widest text-secondary">Drag files here or <span className="text-accent-industrial">browse files</span></p>
<p className="text-[10px] text-stone-400 mt-2 font-label">MAX SIZE: 25MB (PNG, JPG, PDF, ZIP)</p>
</div>
</div>
{/* Comentario remanente */}
<div className="pt-4">
<button className="w-full bg-primary text-on-primary py-5 font-headline font-black uppercase tracking-[0.25em] text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-3" type="submit">
                                Initialize Support Ticket
                                <span className="material-symbols-outlined">send</span>
</button>
</div>
</form>
</section>
{/* Comentario remanente */}
<aside className="lg:col-span-4 space-y-8">
{/* Comentario remanente */}
<div className="bg-inverse-surface text-inverse-on-surface p-8 rounded-lg relative overflow-hidden">
<div className="absolute -right-8 -top-8 opacity-10">
<span className="material-symbols-outlined text-9xl">schedule</span>
</div>
<h3 className="font-headline font-black uppercase text-lg tracking-tight mb-6">Service Level <br/>Agreement (SLA)</h3>
<div className="space-y-4">
<div className="flex justify-between items-center py-3 border-b border-white/10">
<span className="font-headline font-bold uppercase text-[10px] tracking-widest opacity-60">CRITICAL</span>
<span className="font-headline font-black text-accent-industrial tracking-tighter">&lt; 2 HOURS</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/10">
<span className="font-headline font-bold uppercase text-[10px] tracking-widest opacity-60">HIGH</span>
<span className="font-headline font-black text-white tracking-tighter">4 - 6 HOURS</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/10">
<span className="font-headline font-bold uppercase text-[10px] tracking-widest opacity-60">MEDIUM</span>
<span className="font-headline font-black text-white tracking-tighter">12 - 24 HOURS</span>
</div>
<div className="flex justify-between items-center py-3">
<span className="font-headline font-bold uppercase text-[10px] tracking-widest opacity-60">LOW</span>
<span className="font-headline font-black text-white tracking-tighter">48 HOURS</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-primary-container p-1 rounded-lg">
<div className="bg-surface-container-lowest p-6 rounded-[0.125rem]">
<div className="flex items-start gap-4 mb-4">
<span className="material-symbols-outlined text-accent-industrial">verified_user</span>
<div>
<h4 className="font-headline font-bold uppercase text-xs tracking-widest">Global Expertise</h4>
<p className="text-xs text-secondary mt-1">Our support engineers are available 24/7 for production-halting issues.</p>
</div>
</div>
<img alt="Industrial control room" className="w-full h-32 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500" data-alt="Modern industrial control room with multiple screens and focused technician in distance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeiDNno_T8bN1U2Ihy0TTkY3g2vFi_l3S9h0u15Rm43oFVWnwnwR9tV4duLtfYI9VG2G-_PIKSH9KdqghrwP5wXiSSevisSebVC389g30GyIuwMY2sqNE39LlLrgOEuUd3BqL4pApPD4oUmyDynZRldSXaX1AiKPczSgzKWedwmS2qXDlxwGWcFlN4OrWQY6Kc5c6vLDzsLgSFJU_oz0q3bf0GZKfkMcDLQyybWwBIqUEojoj08iHba3iijLGzGRI4G2DDH32eOWM"/>
</div>
</div>
</aside>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="bg-stone-900 text-stone-400 py-16 md:ml-64">
<div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<h5 className="text-white font-headline font-black uppercase tracking-tighter text-xl mb-6">INDUSTRIAL FORGE</h5>
<p className="text-sm leading-relaxed max-w-xs">
                    Supplying the high-performance components and software solutions that power the world's most heavy-duty industries.
                </p>
</div>
<div>
<h6 className="font-headline font-bold uppercase text-xs tracking-[0.2em] text-white mb-6">Technical Support</h6>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-accent-industrial text-lg">call</span>
                        +1 (800) FORGE-TECH
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-accent-industrial text-lg">mail</span>
                        systems.support@forge-erp.com
                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-accent-industrial text-lg">location_on</span>
                        Engineering HQ - Detroit, MI
                    </li>
</ul>
</div>
<div>
<h6 className="font-headline font-bold uppercase text-xs tracking-[0.2em] text-white mb-6">Status</h6>
<div className="flex items-center gap-2 text-lime-400 text-xs font-headline font-bold uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                    All Systems Operational
                </div>
<div className="mt-8 pt-8 border-t border-stone-800">
<p className="text-[10px] uppercase tracking-widest">© 2024 Forge Systems International. High-Vis Certified.</p>
</div>
</div>
</div>
</footer>

        </div>
    );
};
