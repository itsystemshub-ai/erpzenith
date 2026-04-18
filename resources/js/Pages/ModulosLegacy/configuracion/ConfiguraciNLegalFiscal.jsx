import React from 'react';
import { Link } from '@inertiajs/react';

export default function ConfiguraciNLegalFiscal() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-stone-100 dark:bg-stone-950 border-r border-stone-200/50 dark:border-stone-800/50 flex flex-col h-full py-6 z-50">
<div className="px-6 mb-10">
<h1 className="font-['Space_Grotesk'] font-black text-stone-900 dark:text-stone-50 text-2xl tracking-tighter">TRUCKPRO</h1>
<p className="text-[10px] text-lime-600 dark:text-lime-400 font-bold uppercase tracking-widest mt-1">Industrial ERP System</p>
</div>
<nav className="flex-1 px-4 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out cursor-pointer rounded">
<span className="material-symbols-outlined text-lg">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out cursor-pointer rounded">
<span className="material-symbols-outlined text-lg">inventory_2</span>
<span className="font-medium text-sm">Inventory</span>
</div>
{/* Comentario remanente */}
<div className="flex items-center gap-3 px-3 py-2 bg-lime-600/10 text-lime-700 dark:text-lime-400 font-bold transition-all duration-200 ease-in-out cursor-pointer rounded">
<span className="material-symbols-outlined text-lg">gavel</span>
<span className="font-medium text-sm">SENIAT Compliance</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out cursor-pointer rounded">
<span className="material-symbols-outlined text-lg">conveyor_belt</span>
<span className="font-medium text-sm">Warehouse</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out cursor-pointer rounded">
<span className="material-symbols-outlined text-lg">local_shipping</span>
<span className="font-medium text-sm">Orders</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out cursor-pointer rounded">
<span className="material-symbols-outlined text-lg">analytics</span>
<span className="font-medium text-sm">Reporting</span>
</div>
</nav>
<div className="px-4 mt-auto pt-6 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out cursor-pointer rounded">
<span className="material-symbols-outlined text-lg">dns</span>
<span className="font-medium text-sm">System Status</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out cursor-pointer rounded">
<span className="material-symbols-outlined text-lg">help_outline</span>
<span className="font-medium text-sm">Support</span>
</div>
<div className="mt-4 px-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-lime-600 flex items-center justify-center text-white font-bold text-xs">A12</div>
<div className="overflow-hidden">
<p className="text-xs font-bold text-stone-900 dark:text-stone-50 truncate">Industrial Ops</p>
<p className="text-[10px] text-stone-500">Warehouse A-12</p>
</div>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 min-h-screen">
{/* Comentario remanente */}
<header className="w-full sticky top-0 z-40 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<div className="bg-stone-200 dark:bg-stone-800 h-8 w-64 rounded flex items-center px-3 gap-2">
<span className="material-symbols-outlined text-stone-400 text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-xs w-full text-stone-300" placeholder="Search legal records..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-lime-600 text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-tight flex items-center gap-2 hover:bg-lime-500 transition-colors">
<span className="material-symbols-outlined text-sm">warning</span>
                    Legal Alert
                </button>
<div className="flex gap-2">
<span className="material-symbols-outlined text-stone-500 cursor-pointer p-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded">settings</span>
<span className="material-symbols-outlined text-stone-500 cursor-pointer p-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded">notifications</span>
<span className="material-symbols-outlined text-stone-500 cursor-pointer p-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded">account_circle</span>
</div>
</div>
</header>
{/* Comentario remanente */}
<div className="p-8 max-w-7xl mx-auto">
{/* Comentario remanente */}
<div className="mb-10">
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-lime-500 font-bold mb-2">
<span>Compliance</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span>Legal Configuration</span>
</div>
<h1 className="text-4xl font-bold uppercase tracking-tighter text-stone-50">MAYOR DE REPUESTO LA CIMA, C.A.</h1>
<p className="text-stone-400 mt-1 font-body">Official configuration panel for SENIAT fiscal alignment and documented adjustments.</p>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-7 bg-surface-container-low p-8 rounded-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-600/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
<h2 className="text-xl font-bold uppercase tracking-tight mb-8 flex items-center gap-3">
<span className="material-symbols-outlined text-lime-500">fingerprint</span>
                        Fiscal Identification
                    </h2>
<div className="grid grid-cols-2 gap-8">
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 font-bold">RIF Number</label>
<div className="bg-surface-container-highest p-4 rounded text-xl font-mono text-stone-100 tracking-wider">
                                J-40308741-5
                            </div>
</div>
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 font-bold">Contribuyente Especial</label>
<div className="flex items-center h-[60px]">
<div className="bg-lime-600 text-black px-4 py-2 rounded font-black text-sm uppercase tracking-tighter flex items-center gap-2">
<span className="material-symbols-outlined text-sm" >check_circle</span>
                                    Active / YES
                                </div>
</div>
</div>
<div className="col-span-2 space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 font-bold">Registro Mercantil Seal #</label>
<div className="relative">
<input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-lime-500 p-4 rounded text-stone-100 font-headline uppercase tracking-tight" type="text" value="TOMO 45-A-6782-Z"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-500">verified</span>
</div>
</div>
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-stone-500 font-bold">Default IVA Rate</label>
<div className="flex items-end gap-3">
<span className="text-5xl font-black tracking-tighter text-lime-400">16</span>
<span className="text-xl font-bold text-stone-500 mb-1">%</span>
<span className="text-[10px] text-stone-500 uppercase font-bold mb-2 ml-4">Standard Base</span>
</div>
</div>
</div>
<div className="mt-12 flex justify-end">
<button className="bg-stone-100 text-stone-900 px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-lime-500 hover:text-white transition-all">
                            Save Fiscal Changes
                        </button>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-5 bg-surface-container-low p-8 rounded-lg flex flex-col justify-between border-l-4 border-lime-600">
<div>
<h2 className="text-xl font-bold uppercase tracking-tight mb-4">Compliance Score</h2>
<div className="flex items-center gap-6 mb-8">
<div className="relative w-24 h-24 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-stone-800" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-width="8"></circle>
<circle className="text-lime-500" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="25.12" stroke-width="8"></circle>
</svg>
<span className="absolute text-2xl font-black text-stone-100">90%</span>
</div>
<div>
<p className="text-stone-300 font-bold uppercase tracking-tighter">Verification Health</p>
<p className="text-xs text-stone-500">Last audit: 12 days ago. <br/>All seals are valid until 2025.</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-stone-900 rounded-lg flex items-center justify-between">
<span className="text-xs uppercase font-bold text-stone-400">SENIAT Web Service</span>
<span className="flex items-center gap-2 text-xs font-bold text-lime-500">
<span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
                                CONNECTED
                            </span>
</div>
<div className="p-4 bg-stone-900 rounded-lg flex items-center justify-between">
<span className="text-xs uppercase font-bold text-stone-400">Mermas Reporting</span>
<span className="text-xs font-bold text-stone-200">AUTOMATIC</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 mt-4">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold uppercase tracking-tighter">Soportes Documentales</h2>
<button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-500 hover:text-lime-400 transition-colors">
<span className="material-symbols-outlined">add_circle</span>
                            Upload Documentation
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Comentario remanente */}
<div className="bg-surface-container-low group hover:bg-surface-container-high transition-all p-1 rounded-lg">
<div className="aspect-[3/4] bg-stone-800 rounded relative overflow-hidden mb-4">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" data-alt="Technical PDF document scan showing legal seals and watermarks for industrial compliance reporting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXydeD9qy_DVgISl9wpYxOqMKdVlFupbZVZXAWotSePAnRDJbpeyHffy92Nm0ILrMR3GJ4yZgQ6cU1vkDwoqalPxKpIn-aeyfluGEkHnIjw-l_S9AwPQ-j4Z0aWuME2-04hfP6h5m6ohEKSA8BZaIqGaHrGBnUl42fWsX8u5vY013IgpLJVOre1gwegzGTLW6qLcBcaj4s8BTDq3A95xEbH8UKbZtGVL0uyTaqLNmXkxY0ywTO9q-pYqus33NlcFZKbKMTSYDtGfY"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-4xl text-white">visibility</span>
</div>
<div className="absolute top-3 left-3 bg-red-600 text-white text-[8px] font-black px-2 py-1 uppercase rounded-sm">PDF</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm font-bold text-stone-100 truncate">Mermas_Q3_Inventory.pdf</p>
<p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">Uploaded Oct 24, 2023</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-low group hover:bg-surface-container-high transition-all p-1 rounded-lg">
<div className="aspect-[3/4] bg-stone-800 rounded relative overflow-hidden mb-4">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" data-alt="High resolution photo of a formal legal certificate with gold foil seal and complex typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtOdIXR8feOApGOnBuLE4kcNQfY0XDtIRVrWDxr9syLm5hs34_63g2_3r9kSnRnMNIhsT1wsYBTRnFv6IvXgNL1jDX-lLukQ02n6jJ1lIHZd1N8ZImr4_VS3LCY0onc67CdwzivGkHOu1h2dbHJR87aBAimhrQN6KP9w3f7HHLigjuN88k5XXuZ9CkIvq2UCsA1D0cbSF94d_1v4Aj0hgHZu_1Fkkq8DTrFHDniKRdogZiqEzIGr3MCiZ9QOwvWJ-9jzFgaW6ONGc"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-4xl text-white">visibility</span>
</div>
<div className="absolute top-3 left-3 bg-blue-600 text-white text-[8px] font-black px-2 py-1 uppercase rounded-sm">IMAGE</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm font-bold text-stone-100 truncate">Sello_Mercantil_Ref.jpg</p>
<p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">Uploaded Sep 12, 2023</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-low group hover:bg-surface-container-high transition-all p-1 rounded-lg">
<div className="aspect-[3/4] bg-stone-800 rounded relative overflow-hidden mb-4">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" data-alt="Technical adjustment report document with data tables and highlighted values for SENIAT reporting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbX9DW78rDFaROPa7FvGswgEwNkhtjO6fMPGO2_W333UGXUj6hRf5hVP9cGofPBGqzsQgcx3Bwx91c--2mUqIwY0RA3OVVhsloYn5Ik9UuuvrRkSjbCRXwWAdCmAbVsgVFMxqU0dlxFp_vl4lKIAficVE3iXg_pgcjohe1gYWWQTLh6aBfQySCJsHkv4ayk2JOrmsrVunFdUjL3NLpXjm4YFdBQstQvwnKChIeXpnuYPkxi6otL2zI_4t-BNd0-gOC1g9wPIOEfew"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-4xl text-white">visibility</span>
</div>
<div className="absolute top-3 left-3 bg-red-600 text-white text-[8px] font-black px-2 py-1 uppercase rounded-sm">PDF</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm font-bold text-stone-100 truncate">IVA_Adjustment_Log.pdf</p>
<p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">Uploaded Aug 05, 2023</p>
</div>
</div>
{/* Comentario remanente */}
<div className="border-2 border-dashed border-stone-800 rounded-lg flex flex-col items-center justify-center p-8 group hover:border-lime-600 transition-colors cursor-pointer">
<span className="material-symbols-outlined text-stone-700 text-5xl mb-4 group-hover:text-lime-500 transition-colors">cloud_upload</span>
<p className="text-[10px] uppercase font-bold text-stone-500 tracking-widest text-center group-hover:text-stone-300">Drop files here to attach to legal profile</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 mt-8 bg-surface-container-lowest overflow-hidden">
<div className="p-6 bg-stone-900 border-b border-stone-800">
<h3 className="text-sm font-bold uppercase tracking-widest text-stone-400">Recent Adjustment Logs</h3>
</div>
<div className="w-full overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container">
<th className="px-6 py-4 text-[10px] uppercase tracking-widest text-stone-500">Ref Code</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-widest text-stone-500">Operation</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-widest text-stone-500">Fiscal Impact</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-widest text-stone-500">Status</th>
<th className="px-6 py-4 text-[10px] uppercase tracking-widest text-stone-500">Authorized By</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-800/50">
<tr className="hover:bg-lime-500/5 transition-colors">
<td className="px-6 py-4 text-xs font-mono text-stone-300">ADJ-00982</td>
<td className="px-6 py-4 text-xs font-bold text-stone-100">Inventory Merma - Engine Gaskets</td>
<td className="px-6 py-4 text-xs text-red-400">- 4,200.00 VED</td>
<td className="px-6 py-4">
<span className="text-[9px] font-black bg-lime-900/30 text-lime-400 px-2 py-1 rounded">SENIAT VERIFIED</span>
</td>
<td className="px-6 py-4 text-xs text-stone-400">R. Rodriguez (QA-04)</td>
</tr>
<tr className="bg-stone-900/30 hover:bg-lime-500/5 transition-colors">
<td className="px-6 py-4 text-xs font-mono text-stone-300">ADJ-00975</td>
<td className="px-6 py-4 text-xs font-bold text-stone-100">IVA Correction - Credit Note #88</td>
<td className="px-6 py-4 text-xs text-lime-400">+ 1,120.00 VED</td>
<td className="px-6 py-4">
<span className="text-[9px] font-black bg-lime-900/30 text-lime-400 px-2 py-1 rounded">SENIAT VERIFIED</span>
</td>
<td className="px-6 py-4 text-xs text-stone-400">Admin System</td>
</tr>
<tr className="hover:bg-lime-500/5 transition-colors">
<td className="px-6 py-4 text-xs font-mono text-stone-300">ADJ-00971</td>
<td className="px-6 py-4 text-xs font-bold text-stone-100">Damage Disposal - Warehouse A</td>
<td className="px-6 py-4 text-xs text-red-400">- 845.50 VED</td>
<td className="px-6 py-4">
<span className="text-[9px] font-black bg-stone-800 text-stone-500 px-2 py-1 rounded">PENDING SEAL</span>
</td>
<td className="px-6 py-4 text-xs text-stone-400">M. Blanco (WH-A)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<div className="fixed bottom-8 right-8 flex flex-col gap-4">
<button className="w-14 h-14 bg-lime-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all">
<span className="material-symbols-outlined text-3xl">save</span>
</button>
</div>

        </div>
    );
};
