import React from 'react';
import { Link } from '@inertiajs/react';

export default function ErpInventoryDashboard() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-screen w-64 z-50 flex flex-col border-r border-neutral-800 bg-neutral-950">
<div className="p-6 border-b border-neutral-900">
<div className="text-xl font-black text-white font-headline">TITAN OPS</div>
<div className="text-[10px] text-neutral-500 font-medium uppercase tracking-[0.2em]">VENEZUELA HQ</div>
</div>
<nav className="flex-1 py-6 overflow-y-auto">
<div className="px-6 mb-4 text-[10px] font-bold text-neutral-600 uppercase tracking-widest">Main Console</div>
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 bg-neutral-900 text-lime-400 border-r-4 border-lime-500 shadow-[inset_0_0_10px_rgba(154,205,50,0.1)] transition-all duration-200" href="#">
<span className="material-symbols-outlined text-lg">inventory_2</span>
<span className="font-['Inter'] text-sm font-medium uppercase tracking-widest">Inventory</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/40 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-lg">payments</span>
<span className="font-['Inter'] text-sm font-medium uppercase tracking-widest">Sales</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/40 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-lg">shopping_cart</span>
<span className="font-['Inter'] text-sm font-medium uppercase tracking-widest">Purchases</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/40 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-lg">local_shipping</span>
<span className="font-['Inter'] text-sm font-medium uppercase tracking-widest">Logistics</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/40 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-lg">analytics</span>
<span className="font-['Inter'] text-sm font-medium uppercase tracking-widest">Analytics</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/40 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined text-lg">settings</span>
<span className="font-['Inter'] text-sm font-medium uppercase tracking-widest">Settings</span>
</a>
</nav>
<div className="p-6 border-t border-neutral-900">
<button className="w-full py-3 bg-lime-500 text-neutral-950 font-bold text-xs uppercase tracking-tighter hover:bg-lime-400 transition-colors active:scale-95">
                GENERATE REPORT
            </button>
</div>
</aside>
{/* Comentario remanente */}
<header className="fixed top-0 w-full z-40 bg-neutral-900/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 ml-64 border-b border-neutral-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" >
<div className="flex items-center gap-4">
<h1 className="text-2xl font-bold tracking-tighter text-lime-500 italic font-headline uppercase">TITAN INDUSTRIAL ERP</h1>
<div className="h-6 w-px bg-neutral-800"></div>
<div className="flex items-center gap-2 px-3 py-1 bg-neutral-800/50 rounded-full border border-neutral-700/30">
<span className="w-2 h-2 rounded-full bg-lime-500"></span>
<span className="text-[10px] font-bold text-neutral-300 tracking-wider">SYSTEM ONLINE</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<input className="bg-neutral-950 border-none text-[10px] font-bold uppercase tracking-widest w-64 px-4 py-2 focus:ring-1 focus:ring-lime-500/50 text-white placeholder-neutral-600" placeholder="SEARCH ASSETS..." type="text"/>
<span className="material-symbols-outlined absolute right-3 top-2 text-neutral-600 text-sm">search</span>
</div>
<div className="flex items-center gap-4 text-neutral-400">
<button className="material-symbols-outlined hover:text-lime-400 transition-colors">notifications</button>
<button className="material-symbols-outlined hover:text-lime-400 transition-colors">settings</button>
<div className="h-8 w-8 rounded-sm bg-neutral-800 overflow-hidden border border-neutral-700">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="Close up portrait of an industrial warehouse supervisor wearing a high-vis vest in a professional office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgkiNyKsr6MQIYml9UJQ8jEVlekuZODPw9zQrTrBQSzzvByY15dEZaZyu84LIPcCncapEKCFzhenXHkodXuqJwIqp5oWVP19IptiLJiaXqdK7iBWAZF_R1pjN_IcH8k1wwmvQDtQx-PgGbqd7Y1W3KjF2M3pAEEwQ0Dt78kep3NrEhrOXvlxqnyf899crcAFXhY2TAZkTxufSgdIxDD0UaCFN1fi8bJLcFZHgiMo4zU7GHILLPbth9AFJInu4ERi2xsfKG3hspocE"/>
</div>
</div>
</div>
</header>
{/* Comentario remanente */}
<main className="ml-64 pt-24 p-8 min-h-screen">
{/* Comentario remanente */}
<section className="mb-10 flex justify-between items-end">
<div>
<h2 className="text-4xl font-black text-white font-headline tracking-tighter uppercase mb-2">Inventory Operations Control</h2>
<div className="flex items-center gap-4">
<span className="text-xs font-bold text-neutral-400 font-label tracking-widest">MAYOR DE REPUESTO LA CIMA, C.A.</span>
<span className="text-xs font-bold text-lime-500 font-label tracking-widest">RIF: J-40308741-5</span>
<span className="px-2 py-0.5 bg-neutral-800 text-[9px] font-black text-neutral-300 border border-neutral-700 uppercase">Special Taxpayer (SENIAT)</span>
</div>
</div>
<button className="flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-800 hover:border-lime-500/50 transition-all text-xs font-bold uppercase tracking-widest">
<span className="material-symbols-outlined text-sm">gavel</span>
                Legal Configuration
            </button>
</section>
{/* Comentario remanente */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
<div className="bg-neutral-900 p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-lime-500"></div>
<div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Total Inventory Value (Art. 177)</div>
<div className="text-3xl font-black text-white font-headline tracking-tighter mb-1">$ 1,428,550.00</div>
<div className="text-[10px] text-lime-400 font-bold uppercase">Weighted Average Cost</div>
<span className="material-symbols-outlined absolute top-4 right-4 text-neutral-800 text-4xl group-hover:text-lime-500/10 transition-colors">payments</span>
</div>
<div className="bg-neutral-900 p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Inventory Turnover Rate</div>
<div className="text-3xl font-black text-white font-headline tracking-tighter mb-1">4.2x</div>
<div className="text-[10px] text-blue-400 font-bold uppercase">FY 2024 Performance</div>
<span className="material-symbols-outlined absolute top-4 right-4 text-neutral-800 text-4xl group-hover:text-blue-500/10 transition-colors">sync_alt</span>
</div>
<div className="bg-neutral-900 p-6 relative overflow-hidden group border border-amber-900/30">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
<div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Low Stock Alerts</div>
<div className="text-3xl font-black text-white font-headline tracking-tighter mb-1">28 ITEMS</div>
<div className="text-[10px] text-amber-400 font-bold uppercase tracking-tighter">Action Required Soon</div>
<span className="material-symbols-outlined absolute top-4 right-4 text-neutral-800 text-4xl group-hover:text-amber-500/10 transition-colors">warning</span>
</div>
<div className="bg-neutral-900 p-6 relative overflow-hidden group border border-red-900/30">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
<div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Critical Stock Out</div>
<div className="text-3xl font-black text-white font-headline tracking-tighter mb-1">12 ITEMS</div>
<div className="text-[10px] text-red-400 font-bold uppercase">Immediate Procurement Required</div>
<span className="material-symbols-outlined absolute top-4 right-4 text-neutral-800 text-4xl group-hover:text-red-500/10 transition-colors">error</span>
</div>
</section>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-8 mb-10">
{/* Comentario remanente */}
<div className="col-span-8 space-y-8">
{/* Comentario remanente */}
<div className="grid grid-cols-3 gap-4">
<button className="bg-lime-500 text-neutral-950 p-4 font-bold text-xs uppercase tracking-widest flex flex-col items-start gap-4 hover:bg-lime-400 transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl">add_box</span>
                        Register Entry
                    </button>
<button className="bg-neutral-900 text-white p-4 font-bold text-xs uppercase tracking-widest flex flex-col items-start gap-4 border border-neutral-800 hover:border-lime-500/50 transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl">edit_document</span>
                        Register Adjustment
                    </button>
<button className="bg-neutral-900 text-white p-4 font-bold text-xs uppercase tracking-widest flex flex-col items-start gap-4 border border-neutral-800 hover:border-lime-500/50 transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl">event_available</span>
                        Schedule Count
                    </button>
</div>
{/* Comentario remanente */}
<div className="bg-neutral-900/50 border border-neutral-900 p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-black text-white font-headline tracking-tighter uppercase">Recent Movements</h3>
<button className="text-[10px] font-bold text-lime-500 uppercase tracking-widest hover:underline">View All Logs</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-800">
<th className="pb-3">Type</th>
<th className="pb-3">Document ID</th>
<th className="pb-3">Part Description</th>
<th className="pb-3 text-right">Quantity</th>
<th className="pb-3 text-center">Status</th>
</tr>
</thead>
<tbody className="text-xs">
<tr className="border-b border-neutral-900/50 hover:bg-neutral-800/20 transition-colors">
<td className="py-4 font-bold text-lime-500">ENTRY</td>
<td className="py-4 text-neutral-400 font-mono">FAC-2024-0092</td>
<td className="py-4 font-medium">Main Bearing Set V8 Heavy Duty</td>
<td className="py-4 text-right font-bold text-white">45</td>
<td className="py-4 flex justify-center">
<span className="px-2 py-0.5 bg-lime-500/10 text-[9px] font-bold text-lime-400 border border-lime-500/20">VERIFIED</span>
</td>
</tr>
<tr className="border-b border-neutral-900/50 hover:bg-neutral-800/20 transition-colors">
<td className="py-4 font-bold text-red-500">EXIT</td>
<td className="py-4 text-neutral-400 font-mono">REM-2024-0412</td>
<td className="py-4 font-medium">Turbocharger GT-45 Gen 2</td>
<td className="py-4 text-right font-bold text-white">12</td>
<td className="py-4 flex justify-center">
<span className="px-2 py-0.5 bg-lime-500/10 text-[9px] font-bold text-lime-400 border border-lime-500/20">VERIFIED</span>
</td>
</tr>
<tr className="border-b border-neutral-900/50 hover:bg-neutral-800/20 transition-colors">
<td className="py-4 font-bold text-amber-500">ADJUST</td>
<td className="py-4 text-neutral-400 font-mono">ADJ-2024-0015</td>
<td className="py-4 font-medium">Valve Spring Industrial Grade</td>
<td className="py-4 text-right font-bold text-white">-2</td>
<td className="py-4 flex justify-center">
<span className="px-2 py-0.5 bg-amber-500/10 text-[9px] font-bold text-amber-400 border border-amber-500/20">PENDING</span>
</td>
</tr>
<tr className="border-b border-neutral-900/50 hover:bg-neutral-800/20 transition-colors">
<td className="py-4 font-bold text-lime-500">ENTRY</td>
<td className="py-4 text-neutral-400 font-mono">FAC-2024-0091</td>
<td className="py-4 font-medium">Cylinder Head Gasket (Copper)</td>
<td className="py-4 text-right font-bold text-white">120</td>
<td className="py-4 flex justify-center">
<span className="px-2 py-0.5 bg-lime-500/10 text-[9px] font-bold text-lime-400 border border-lime-500/20">VERIFIED</span>
</td>
</tr>
<tr className="hover:bg-neutral-800/20 transition-colors">
<td className="py-4 font-bold text-red-500">EXIT</td>
<td className="py-4 text-neutral-400 font-mono">REM-2024-0411</td>
<td className="py-4 font-medium">Forged Connecting Rod Set</td>
<td className="py-4 text-right font-bold text-white">6</td>
<td className="py-4 flex justify-center">
<span className="px-2 py-0.5 bg-red-500/10 text-[9px] font-bold text-red-400 border border-red-500/20">ERROR</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-4 space-y-8">
{/* Comentario remanente */}
<div className="bg-neutral-900 p-6 border-l-4 border-lime-500">
<h3 className="text-sm font-black text-white font-headline tracking-tight uppercase mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-lime-500">description</span>
                        Legal Compliance Vault
                    </h3>
<div className="space-y-3">
<button className="w-full flex justify-between items-center px-4 py-3 bg-neutral-800/50 hover:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest text-neutral-300 transition-all border border-neutral-700/30">
<span>Libro Diario</span>
<span className="material-symbols-outlined text-sm">download</span>
</button>
<button className="w-full flex justify-between items-center px-4 py-3 bg-neutral-800/50 hover:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest text-neutral-300 transition-all border border-neutral-700/30">
<span>Libro Mayor</span>
<span className="material-symbols-outlined text-sm">download</span>
</button>
<button className="w-full flex justify-between items-center px-4 py-3 bg-neutral-800/50 hover:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest text-neutral-300 transition-all border border-neutral-700/30">
<span>Libro de Inventarios</span>
<span className="material-symbols-outlined text-sm">download</span>
</button>
<button className="w-full flex justify-between items-center px-4 py-3 bg-neutral-800/50 hover:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest text-neutral-300 transition-all border border-neutral-700/30">
<span>Compras / Ventas</span>
<span className="material-symbols-outlined text-sm">download</span>
</button>
</div>
<div className="mt-6 pt-4 border-t border-neutral-800">
<div className="text-[9px] text-neutral-500 font-bold uppercase leading-relaxed">
                            Data synchronization compliant with Art. 177 of the Income Tax Law and Seniat Provisions.
                        </div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-neutral-900 p-6">
<h3 className="text-sm font-black text-white font-headline tracking-tight uppercase mb-6">Inventory Category Mix</h3>
<div className="relative h-48 w-48 mx-auto mb-6">
{/* Comentario remanente */}
<div className="absolute inset-0 rounded-full border-[12px] border-neutral-800" ></div>
<div className="absolute inset-4 rounded-full bg-neutral-900 flex flex-col items-center justify-center">
<span className="text-xs font-bold text-neutral-500 uppercase">Total Items</span>
<span className="text-2xl font-black text-white font-headline tracking-tighter">8,420</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-lime-500"></span>
<span className="text-[10px] font-bold text-neutral-400 uppercase">Engine Parts (45%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-primary"></span>
<span className="text-[10px] font-bold text-neutral-400 uppercase">Transmission (25%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-neutral-600"></span>
<span className="text-[10px] font-bold text-neutral-400 uppercase">Suspension (15%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-neutral-800"></span>
<span className="text-[10px] font-bold text-neutral-400 uppercase">Others (15%)</span>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<section className="space-y-4">
<h3 className="text-2xl font-black text-white font-headline tracking-tighter uppercase mb-6">Stock Verification Table</h3>
<div className="space-y-[1px]">
{/* Comentario remanente */}
<div className="bg-neutral-900/80 p-4 flex items-center hover:bg-neutral-800 transition-colors">
<div className="w-16 h-16 bg-neutral-950 flex-shrink-0 flex items-center justify-center border border-neutral-800">
<span className="material-symbols-outlined text-neutral-700">settings_suggest</span>
</div>
<div className="ml-6 flex-1">
<div className="text-[10px] font-black text-lime-500 uppercase tracking-widest">Part ID: TP-9001-H</div>
<div className="text-sm font-bold text-white uppercase font-headline tracking-tight">Main Bearing Set V8 Heavy Duty</div>
</div>
<div className="grid grid-cols-3 gap-12 text-right px-12">
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Current Stock</div>
<div className="text-lg font-black text-white font-headline">424 Units</div>
</div>
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Unit Cost</div>
<div className="text-lg font-black text-white font-headline">$ 142.50</div>
</div>
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Total Value</div>
<div className="text-lg font-black text-lime-400 font-headline">$ 60,420.00</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-neutral-900/80 p-4 flex items-center hover:bg-neutral-800 transition-colors">
<div className="w-16 h-16 bg-neutral-950 flex-shrink-0 flex items-center justify-center border border-neutral-800">
<span className="material-symbols-outlined text-neutral-700">bolt</span>
</div>
<div className="ml-6 flex-1">
<div className="text-[10px] font-black text-lime-500 uppercase tracking-widest">Part ID: TC-450-G2</div>
<div className="text-sm font-bold text-white uppercase font-headline tracking-tight">Turbocharger GT-45 Gen 2</div>
</div>
<div className="grid grid-cols-3 gap-12 text-right px-12">
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Current Stock</div>
<div className="text-lg font-black text-amber-500 font-headline">12 Units</div>
</div>
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Unit Cost</div>
<div className="text-lg font-black text-white font-headline">$ 1,850.00</div>
</div>
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Total Value</div>
<div className="text-lg font-black text-lime-400 font-headline">$ 22,200.00</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-neutral-900/80 p-4 flex items-center hover:bg-neutral-800 transition-colors">
<div className="w-16 h-16 bg-neutral-950 flex-shrink-0 flex items-center justify-center border border-neutral-800">
<span className="material-symbols-outlined text-neutral-700">compress</span>
</div>
<div className="ml-6 flex-1">
<div className="text-[10px] font-black text-lime-500 uppercase tracking-widest">Part ID: PG-1120-C</div>
<div className="text-sm font-bold text-white uppercase font-headline tracking-tight">Piston Ring Set 120mm</div>
</div>
<div className="grid grid-cols-3 gap-12 text-right px-12">
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Current Stock</div>
<div className="text-lg font-black text-white font-headline">88 Units</div>
</div>
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Unit Cost</div>
<div className="text-lg font-black text-white font-headline">$ 45.20</div>
</div>
<div>
<div className="text-[10px] font-bold text-neutral-600 uppercase">Total Value</div>
<div className="text-lg font-black text-lime-400 font-headline">$ 3,977.60</div>
</div>
</div>
</div>
</div>
<button className="w-full py-4 border-2 border-dashed border-neutral-800 text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em] hover:border-lime-500 hover:text-white transition-all">
                Load 12 more products...
            </button>
</section>
{/* Comentario remanente */}
<footer className="mt-20 pt-10 border-t border-neutral-900 text-neutral-500">
<div className="grid grid-cols-4 gap-12 mb-10">
<div className="col-span-1">
<h4 className="text-white font-black font-headline uppercase tracking-tight mb-4 italic">TITAN OPS</h4>
<p className="text-[10px] font-medium leading-relaxed uppercase tracking-widest">
                        High-Performance Industrial Enterprise Resource Planning. Optimized for the Venezuelan automotive aftermarket.
                    </p>
</div>
<div>
<h5 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-4">Operations Center</h5>
<p className="text-[10px] leading-relaxed uppercase">
                        Zona Industrial Municipal Norte<br/>
                        Valencia, Edo. Carabobo 2001<br/>
                        Venezuela
                    </p>
</div>
<div>
<h5 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-4">Contact Protocol</h5>
<p className="text-[10px] leading-relaxed uppercase">
                        Phone: +58 241 800-TITAN<br/>
                        Email: ops@lacimacorp.ve<br/>
                        Support: 24/7 Logistics Desk
                    </p>
</div>
<div className="flex flex-col items-end">
<h5 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-4">Regulatory Compliance</h5>
<div className="text-right">
<div className="text-[10px] font-bold text-lime-500 uppercase">MAYOR DE REPUESTO LA CIMA, C.A.</div>
<div className="text-[10px] text-neutral-600 font-mono uppercase">RIF: J-40308741-5</div>
<div className="text-[9px] text-neutral-700 uppercase mt-2">© 2024 Titan Systems Group LLC.</div>
</div>
</div>
</div>
</footer>
</main>

        </div>
    );
};
