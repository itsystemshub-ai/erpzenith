import React from 'react';
import { Link } from '@inertiajs/react';

export default function GeneraciNLibrosLegales() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-stone-100 dark:bg-stone-950 border-r border-stone-200/50 dark:border-stone-800/50 flex flex-col h-full py-6 z-50">
<div className="px-6 mb-8">
<h2 className="font-['Space_Grotesk'] font-black text-stone-900 dark:text-stone-50 text-2xl tracking-tighter">TRUCKPRO</h2>
<p className="text-[10px] text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest">Industrial Ops</p>
</div>
<div className="px-4 mb-6">
<div className="flex items-center gap-3 p-3 rounded-lg bg-stone-200 dark:bg-stone-900/50">
<img alt="User Profile" className="w-10 h-10 rounded-sm" data-alt="close-up profile photo of a professional warehouse manager in an industrial setting, soft cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvoOWembbu1AHwNgar1CNdf5Mi1ulkwg9g07Vvl-1mNSzaKMkon0Rrq2Ley0bTJMKQ4fl_sBbqqiWPqXMxGpNKie1Rpb-_pLWmrkw3yPvbRCqE4nBoJS2EM0mapINexFbk4u345RsE3PphgJnCxadfojYrEX0R0Hxds8VMfIDg2F57iKkcIv_hug6D_g9ojqIhCZidmpshfyrW7vYzBIrTiK6Qu2LiczIrxOYfMPD1y3CiQuS4IS3Kg7Kue4ifKKZUdOuqXCb7skY"/>
<div>
<p className="font-['Inter'] text-sm font-bold text-stone-900 dark:text-stone-50">Warehouse A-12</p>
<p className="text-xs text-stone-500">System Admin</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1 px-3">
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">inventory_2</span> Inventory
            </a>
<a className="flex items-center gap-3 px-4 py-3 bg-lime-600/10 text-lime-700 dark:text-lime-400 font-bold transition-all duration-200 ease-in-out font-['Inter'] text-sm" href="#">
<span className="material-symbols-outlined">gavel</span> SENIAT Compliance
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">conveyor_belt</span> Warehouse
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">local_shipping</span> Orders
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">analytics</span> Reporting
            </a>
</nav>
<div className="mt-auto px-3 border-t border-stone-200 dark:border-stone-800 pt-4">
<a className="flex items-center gap-3 px-4 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 text-xs transition-all" href="#">
<span className="material-symbols-outlined text-sm">dns</span> System Status
            </a>
<a className="flex items-center gap-3 px-4 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 text-xs transition-all" href="#">
<span className="material-symbols-outlined text-sm">help_outline</span> Support
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 flex-1 flex flex-col min-h-screen relative overflow-hidden">
{/* Comentario remanente */}
<header className="w-full sticky top-0 z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl flex justify-between items-center px-8 h-16 w-full">
<div className="flex items-center gap-8">
<h1 className="font-['Space_Grotesk'] uppercase tracking-tight text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50">Libros Legales</h1>
<div className="hidden md:flex items-center bg-stone-200/50 dark:bg-stone-800/50 rounded px-3 py-1.5 gap-2">
<span className="material-symbols-outlined text-stone-400 text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-xs w-48 text-stone-300" placeholder="Buscar registros..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-1.5 bg-lime-600 text-white font-bold text-[10px] uppercase tracking-widest rounded hover:bg-lime-700 transition-all active:scale-95">
                    Legal Alert
                </button>
<div className="flex items-center gap-2 text-stone-500">
<span className="material-symbols-outlined hover:text-lime-400 cursor-pointer transition-colors">notifications</span>
<span className="material-symbols-outlined hover:text-lime-400 cursor-pointer transition-colors">settings</span>
<span className="material-symbols-outlined hover:text-lime-400 cursor-pointer transition-colors">account_circle</span>
</div>
</div>
</header>
{/* Comentario remanente */}
<section className="p-8 space-y-8 max-w-7xl mx-auto w-full">
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
<div className="md:col-span-2">
<div className="flex items-center gap-4 mb-2">
<div className="h-[2px] w-12 bg-lime-600"></div>
<span className="text-lime-500 font-headline uppercase tracking-widest text-xs font-bold">Compliance Generator v4.2</span>
</div>
<h2 className="text-5xl font-headline font-bold text-white uppercase leading-none tracking-tighter">
                        MAYOR DE REPUESTO LA CIMA, C.A.
                    </h2>
<p className="text-stone-500 mt-4 max-w-xl font-body text-sm leading-relaxed">
                        Precision reporting module for SENIAT industrial compliance. Ensure all fiscal books are generated according to regional tax authority standards with validated digital signatures.
                    </p>
</div>
<div className="bg-surface-container-low dark:bg-stone-900/50 p-6 rounded-lg border-l-4 border-lime-600">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-lime-400">calendar_month</span>
<span className="text-[10px] bg-lime-600/20 text-lime-400 px-2 py-0.5 rounded font-bold">ACTIVE FISCAL</span>
</div>
<h4 className="text-stone-400 text-xs font-bold uppercase tracking-widest">Current Fiscal Month</h4>
<p className="text-2xl font-headline font-bold text-white uppercase tracking-tight">OCTUBRE 2023</p>
<button className="w-full mt-4 py-2 bg-error text-white font-headline text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95">
                        Close Fiscal Month
                    </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Comentario remanente */}
<div className="lg:col-span-4 space-y-6">
<div className="bg-stone-900 border border-stone-800 p-6 space-y-6">
<h3 className="font-headline font-bold text-white uppercase tracking-widest text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-lime-400">settings_input_component</span>
                            Export Parameters
                        </h3>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Date Range Selection</label>
<div className="grid grid-cols-2 gap-2">
<div className="bg-stone-800 p-3 rounded">
<p className="text-[9px] text-stone-500 uppercase mb-1">Start Date</p>
<input className="bg-transparent border-none text-white text-xs w-full p-0 focus:ring-0" type="date" value="2023-10-01"/>
</div>
<div className="bg-stone-800 p-3 rounded">
<p className="text-[9px] text-stone-500 uppercase mb-1">End Date</p>
<input className="bg-transparent border-none text-white text-xs w-full p-0 focus:ring-0" type="date" value="2023-10-31"/>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Document Type</label>
<div className="space-y-2">
<label className="flex items-center justify-between p-3 bg-stone-800 hover:bg-stone-700/50 transition-colors cursor-pointer group">
<span className="text-xs text-stone-300 font-medium">Libro Diario</span>
<input checked="" className="rounded border-stone-600 text-lime-600 focus:ring-lime-600 bg-stone-900" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-3 bg-stone-800 hover:bg-stone-700/50 transition-colors cursor-pointer group">
<span className="text-xs text-stone-300 font-medium">Libro Mayor</span>
<input checked="" className="rounded border-stone-600 text-lime-600 focus:ring-lime-600 bg-stone-900" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-3 bg-stone-800 hover:bg-stone-700/50 transition-colors cursor-pointer group">
<span className="text-xs text-stone-300 font-medium">Libro de Inventarios</span>
<input className="rounded border-stone-600 text-lime-600 focus:ring-lime-600 bg-stone-900" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-3 bg-stone-800 hover:bg-stone-700/50 transition-colors cursor-pointer group">
<span className="text-xs text-stone-300 font-medium">Libro de Compras (IVA)</span>
<input checked="" className="rounded border-stone-600 text-lime-600 focus:ring-lime-600 bg-stone-900" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-3 bg-stone-800 hover:bg-stone-700/50 transition-colors cursor-pointer group">
<span className="text-xs text-stone-300 font-medium">Libro de Ventas (IVA)</span>
<input checked="" className="rounded border-stone-600 text-lime-600 focus:ring-lime-600 bg-stone-900" type="checkbox"/>
</label>
</div>
</div>
</div>
<button className="w-full py-4 bg-primary text-white font-headline text-sm font-bold uppercase tracking-[0.2em] shadow-lg shadow-lime-900/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
<span className="material-symbols-outlined">print_connect</span>
                            Generate Books
                        </button>
</div>
</div>
{/* Comentario remanente */}
<div className="lg:col-span-8">
<div className="bg-stone-900/30 border border-stone-800/50 rounded overflow-hidden">
<div className="px-6 py-4 border-b border-stone-800 flex justify-between items-center">
<h3 className="font-headline font-bold text-white uppercase tracking-widest text-sm">Recent Activity Log</h3>
<div className="flex gap-2">
<span className="bg-stone-800 text-stone-400 px-2 py-1 rounded text-[10px] font-bold">12 RECORDS FOUND</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body">
<thead className="bg-stone-800/50">
<tr>
<th className="px-6 py-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Timestamp</th>
<th className="px-6 py-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Document Title</th>
<th className="px-6 py-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Fiscal Period</th>
<th className="px-6 py-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Compliance Status</th>
<th className="px-6 py-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Digital Auth</th>
<th className="px-6 py-3 text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-stone-800">
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-4">
<p className="text-xs text-white font-medium">2023-10-28</p>
<p className="text-[10px] text-stone-500 uppercase">14:22:15 PM</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lime-600 text-lg">description</span>
<p className="text-xs text-white font-bold uppercase">Libro Diario</p>
</div>
</td>
<td className="px-6 py-4 text-[11px] text-stone-400">OCT-23</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-lime-600/10 text-lime-400 text-[9px] font-black uppercase tracking-tighter">
<span className="material-symbols-outlined text-[10px]" >check_circle</span>
                                                Validated
                                            </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-600/10 text-blue-400 text-[9px] font-black uppercase tracking-tighter">
<span className="material-symbols-outlined text-[10px]" >verified</span>
                                                Signed
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-stone-500 hover:text-white transition-colors">download</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-4">
<p className="text-xs text-white font-medium">2023-10-28</p>
<p className="text-[10px] text-stone-500 uppercase">14:22:10 PM</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lime-600 text-lg">folder_shared</span>
<p className="text-xs text-white font-bold uppercase">Libro Mayor</p>
</div>
</td>
<td className="px-6 py-4 text-[11px] text-stone-400">OCT-23</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-lime-600/10 text-lime-400 text-[9px] font-black uppercase tracking-tighter">
<span className="material-symbols-outlined text-[10px]" >check_circle</span>
                                                Validated
                                            </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-600/10 text-blue-400 text-[9px] font-black uppercase tracking-tighter">
<span className="material-symbols-outlined text-[10px]" >verified</span>
                                                Signed
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-stone-500 hover:text-white transition-colors">download</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-4">
<p className="text-xs text-white font-medium">2023-09-30</p>
<p className="text-[10px] text-stone-500 uppercase">18:05:22 PM</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lime-600 text-lg">shopping_cart</span>
<p className="text-xs text-white font-bold uppercase">Libro de Compras</p>
</div>
</td>
<td className="px-6 py-4 text-[11px] text-stone-400">SEP-23</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-lime-600/10 text-lime-400 text-[9px] font-black uppercase tracking-tighter">
<span className="material-symbols-outlined text-[10px]" >check_circle</span>
                                                Validated
                                            </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-stone-700 text-stone-400 text-[9px] font-black uppercase tracking-tighter">
<span className="material-symbols-outlined text-[10px]">lock</span>
                                                Pending Signature
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-stone-500 hover:text-white transition-colors">download</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-4">
<p className="text-xs text-white font-medium">2023-09-30</p>
<p className="text-[10px] text-stone-500 uppercase">18:04:11 PM</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lime-600 text-lg">sell</span>
<p className="text-xs text-white font-bold uppercase">Libro de Ventas</p>
</div>
</td>
<td className="px-6 py-4 text-[11px] text-stone-400">SEP-23</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-lime-600/10 text-lime-400 text-[9px] font-black uppercase tracking-tighter">
<span className="material-symbols-outlined text-[10px]" >check_circle</span>
                                                Validated
                                            </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-stone-700 text-stone-400 text-[9px] font-black uppercase tracking-tighter">
<span className="material-symbols-outlined text-[10px]">lock</span>
                                                Pending Signature
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-stone-500 hover:text-white transition-colors">download</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
<div className="relative min-h-[300px] overflow-hidden group bg-stone-900 border border-stone-800 rounded">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-700" data-alt="industrial heavy warehouse with rows of metal shelving and professional logistics lighting, dark aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0eIaJLIqmWhvDUbWOTgQy82wcadTEPV_V9axH1q0YmHgqteQw13KN74NTdbE36ZYUuyv47M1TpZq1EcfF-OvC8a3EBGvYpg1w5VjFk3lSBj0roE3fYtERq2EY_Cy8Cs-ZxVlCZ2JIG0Hn1fKw1dWyxlJS_3DnsVdXC7Nqc_YkQgPMO5uKgVP_bBwHdzFbmR7nhLV4FWSE98hpg1-BvaGLz2DipR-y2UFS8nb9PwgIsI3c3lHJJp0jjEX-QY99cyEoTsZFVDVB0bM"/>
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="bg-lime-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Operation Status</span>
<h4 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">Active Inventory sync</h4>
<p className="text-sm text-stone-400 mt-2 max-w-sm">Global stock databases are currently synced with local SENIAT legal records. Real-time updates active.</p>
</div>
</div>
<div className="bg-stone-950 p-8 border border-stone-900 relative overflow-hidden flex flex-col justify-between">
<div className="space-y-4">
<h4 className="text-xs font-bold text-stone-500 uppercase tracking-[0.3em]">Compliance Map</h4>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-lime-400">location_on</span>
<span className="text-white font-headline text-lg uppercase tracking-widest">Valencia, Venezuela</span>
</div>
<div className="w-full h-40 bg-stone-900 rounded relative overflow-hidden">
<img alt="Map Location" className="w-full h-full object-cover opacity-40 grayscale" data-alt="abstract satellite view of an industrial city grid in monochrome black and white high contrast" data-location="Valencia, Venezuela" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA77R_c6-kNY8OEIBzPeVbFdefPWhRkDcApyLnOZw8ScojxOCrNOZ2SdU5Kp5SmElSiuyS5yfCSzi8ZgB5pHJpX6oJUpxBuocXyjgTPyXqX2VZZj5mu2e-NLA5JHBGisdZHK3XX2xOCNc46NgF6tCNjbgN9Inqe-_5I08IeihWzfFVQBEhHpHpev67J6WjmkAMUQNLC7wgfISec5bTWNkgIgvAn_yRviobrZBIDJGkuSO0_gHlIzH5XJft7CYpkEpusYiR0MpUvhB4"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-4 h-4 bg-lime-600 rounded-full animate-ping"></div>
<div className="w-2 h-2 bg-lime-400 rounded-full absolute"></div>
</div>
</div>
</div>
<div className="pt-6 flex justify-between items-end border-t border-stone-800">
<div>
<p className="text-[10px] text-stone-500 font-bold uppercase">Legal Entity RIF</p>
<p className="text-white font-headline font-bold tracking-widest">J-12345678-9</p>
</div>
<span className="material-symbols-outlined text-stone-700 text-4xl">factory</span>
</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-600/5 rounded-full blur-[100px] pointer-events-none"></div>
</main>

        </div>
    );
};
