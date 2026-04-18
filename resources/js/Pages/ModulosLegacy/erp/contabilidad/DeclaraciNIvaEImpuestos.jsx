import React from 'react';
import { Link } from '@inertiajs/react';

export default function DeclaraciNIvaEImpuestos() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-zinc-50 font-['Space_Grotesk'] uppercase tracking-tight">FINANCE_ENGINE</span>
<div className="hidden md:flex gap-6">
<a className="text-amber-400 font-bold border-b-2 border-amber-500 font-['Space_Grotesk'] uppercase tracking-tight py-1" href="#">Taxes</a>
<a className="text-zinc-400 hover:bg-zinc-800/50 transition-colors font-['Space_Grotesk'] uppercase tracking-tight py-1 px-2 rounded" href="#">Dashboard</a>
<a className="text-zinc-400 hover:bg-zinc-800/50 transition-colors font-['Space_Grotesk'] uppercase tracking-tight py-1 px-2 rounded" href="#">Reports</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined text-zinc-400 p-2 cursor-pointer hover:bg-zinc-800/50 transition-colors rounded">notifications</span>
</div>
<div className="relative group">
<span className="material-symbols-outlined text-zinc-400 p-2 cursor-pointer hover:bg-zinc-800/50 transition-colors rounded">settings</span>
</div>
<div className="h-8 w-8 rounded-full overflow-hidden border border-zinc-700">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a professional male administrator in a dark suit with a focused expression, high-end editorial lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHhhgFnG5WvD4qADS0zQk7ab3O30OV-fZ3s7Jnf30RbzhaUEYld0rkP6xVvJun78bPyoNkQyCIzzH5INOCndn-jbrU0XChDfKp0XNURFbsKRa8UPzlHWppTKF15efc3DFocCltSOkR6Jv5-UsY-cC5vQnfNWsjk4LpR7SeD55F3C6Ci_K1JxyLrE7D8aKF_pnAAYS8OKZ3HSUfz-8i1sh05ozKmCpnpSdv9SF233YrcZrSQHoRTvhm6seqXr_5qW4pMhm6Ft2pa6k"/>
</div>
</div>
</nav>
{/* Comentario remanente */}
<aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-zinc-950 border-r border-zinc-800 py-8 gap-4 z-40 shadow-[40px_0_40px_-40px_rgba(0,0,0,0.1)]">
<div className="px-6 mb-8">
<h2 className="text-lg font-black text-zinc-50 font-['Space_Grotesk']">Industrial ERP</h2>
<p className="text-xs uppercase tracking-widest text-amber-500 font-medium">Finance Module</p>
</div>
<div className="flex flex-col gap-1 px-3">
<a className="flex items-center gap-3 px-3 py-3 rounded text-zinc-400 hover:bg-zinc-800 transition-all duration-200 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-3 rounded text-zinc-400 hover:bg-zinc-800 transition-all duration-200 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span> Reports
            </a>
<a className="flex items-center gap-3 px-3 py-3 rounded bg-amber-500/10 text-amber-400 border-r-4 border-amber-500 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider" href="#">
<span className="material-symbols-outlined">account_balance</span> Taxes
            </a>
<a className="flex items-center gap-3 px-3 py-3 rounded text-zinc-400 hover:bg-zinc-800 transition-all duration-200 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider" href="#">
<span className="material-symbols-outlined">receipt_long</span> Expenses
            </a>
</div>
<div className="mt-auto px-6">
<button className="w-full py-3 bg-amber-500 text-zinc-950 font-bold uppercase text-xs tracking-widest rounded hover:bg-amber-400 transition-colors">
                New Transaction
            </button>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:pl-64 pt-20 p-6 min-h-screen bg-[#1a1c1c]">
{/* Comentario remanente */}
<header className="mb-12 relative">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
<div>
<span className="label-md text-amber-500 font-bold uppercase tracking-[0.2em] mb-2 block">Fiscal Oversight</span>
<h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter headline-font text-white leading-none">
                        MAYOR DE REPUESTO <br/><span className="text-zinc-600">LA CIMA, C.A.</span>
</h1>
</div>
<div className="bg-zinc-900 p-4 border-l-4 border-amber-500">
<p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Tax ID (RIF)</p>
<p className="text-xl font-mono text-zinc-200">J-40592831-0</p>
</div>
</div>
</header>
{/* Comentario remanente */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
{/* Comentario remanente */}
<div className="md:col-span-2 bg-[#222424] p-8 relative overflow-hidden group">
<div className="relative z-10">
<h3 className="font-['Space_Grotesk'] uppercase text-zinc-400 tracking-wider text-sm mb-6">IVA Balance Analysis</h3>
<div className="flex justify-between items-end gap-4">
<div className="flex-1">
<p className="text-xs text-zinc-500 uppercase mb-1">Debito Fiscal</p>
<p className="text-3xl font-bold headline-font text-white">VES 425.890,00</p>
<div className="w-full bg-zinc-800 h-1 mt-4">
<div className="bg-amber-500 h-1 w-3/4"></div>
</div>
</div>
<div className="flex-1">
<p className="text-xs text-zinc-500 uppercase mb-1 text-right">Credito Fiscal</p>
<p className="text-3xl font-bold headline-font text-amber-400 text-right">VES 312.440,00</p>
<div className="w-full bg-zinc-800 h-1 mt-4">
<div className="bg-zinc-600 h-1 w-1/2 ml-auto"></div>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-between">
<p className="text-xs uppercase font-bold text-zinc-500">Calculated Differential</p>
<p className="text-lg font-bold headline-font text-white">+VES 113.450,00</p>
</div>
</div>
{/* Comentario remanente */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
</div>
{/* Comentario remanente */}
<div className="bg-zinc-900 p-8 flex flex-col justify-between border border-zinc-800/50">
<span className="material-symbols-outlined text-amber-500 text-4xl mb-4" >account_balance</span>
<div>
<h3 className="font-['Space_Grotesk'] uppercase text-zinc-500 tracking-wider text-xs mb-1">IVA Practicadas</h3>
<p className="text-2xl font-bold text-white headline-font">VES 84.120,50</p>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800">
<p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Last Update: May 24, 2024</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-zinc-900 p-8 flex flex-col justify-between border border-zinc-800/50">
<span className="material-symbols-outlined text-zinc-500 text-4xl mb-4">receipt_long</span>
<div>
<h3 className="font-['Space_Grotesk'] uppercase text-zinc-500 tracking-wider text-xs mb-1">ISLR Sufridas</h3>
<p className="text-2xl font-bold text-white headline-font">VES 12.840,00</p>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800">
<p className="text-xs text-amber-500 font-bold uppercase">View Ledger</p>
</div>
</div>
</section>
{/* Comentario remanente */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
{/* Comentario remanente */}
<section className="lg:col-span-2 bg-[#222424] p-10">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-black uppercase headline-font text-white">Formulario 00030: <span className="text-amber-500">IVA Mensual</span></h2>
<span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-[10px] uppercase font-bold tracking-[0.2em]">Period: 05-2024</span>
</div>
<div className="space-y-8">
{/* Comentario remanente */}
<div>
<div className="flex items-center gap-4 mb-4">
<div className="h-px bg-zinc-800 flex-1"></div>
<span className="text-xs font-bold text-zinc-500 uppercase">Sección A: Ventas y Debitos</span>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Ventas Internas Gravadas Alícuota General</label>
<div className="bg-zinc-950 border border-zinc-800 p-4 focus-within:border-amber-500 transition-colors">
<input className="bg-transparent border-none focus:ring-0 text-white font-mono w-full text-lg" type="text" value="2.661.812,50"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Débito Fiscal Correspondiente (16%)</label>
<div className="bg-zinc-800/30 border border-zinc-800 p-4">
<input className="bg-transparent border-none focus:ring-0 text-amber-500 font-mono w-full text-lg opacity-80" readonly="" type="text" value="425.890,00"/>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div>
<div className="flex items-center gap-4 mb-4">
<div className="h-px bg-zinc-800 flex-1"></div>
<span className="text-xs font-bold text-zinc-500 uppercase">Sección B: Compras y Créditos</span>
<div className="h-px bg-zinc-800 flex-1"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Compras Internas Gravadas Alícuota General</label>
<div className="bg-zinc-950 border border-zinc-800 p-4 focus-within:border-amber-500 transition-colors">
<input className="bg-transparent border-none focus:ring-0 text-white font-mono w-full text-lg" type="text" value="1.952.750,00"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Crédito Fiscal Correspondiente (16%)</label>
<div className="bg-zinc-800/30 border border-zinc-800 p-4">
<input className="bg-transparent border-none focus:ring-0 text-amber-400 font-mono w-full text-lg opacity-80" readonly="" type="text" value="312.440,00"/>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-zinc-950 p-8 border-l-8 border-primary mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<p className="text-xs text-zinc-500 uppercase font-black mb-1">Total Impuesto a Pagar (Antes de Retenciones)</p>
<p className="text-4xl font-bold headline-font text-white">VES 113.450,00</p>
</div>
<button className="bg-primary hover:bg-primary-container text-white hover:text-on-primary-container px-8 py-4 headline-font font-bold uppercase text-sm tracking-widest transition-all scale-100 hover:scale-[1.02] active:scale-95">
                            Submit To Seniat
                        </button>
</div>
</div>
</section>
{/* Comentario remanente */}
<aside className="space-y-6">
<div className="bg-zinc-900 overflow-hidden border border-zinc-800">
<div className="p-6 bg-zinc-800/50">
<h3 className="font-['Space_Grotesk'] uppercase text-sm font-bold text-white tracking-widest">Retenciones Sufridas (Detalle)</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-zinc-950 text-[10px] uppercase text-zinc-500 font-black">
<th className="p-4">Provider / Client</th>
<th className="p-4">Type</th>
<th className="p-4 text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="p-4">
<p className="text-xs font-bold text-zinc-200">TRANS-CARIBE, C.A.</p>
<p className="text-[10px] text-zinc-500">J-30922831-2</p>
</td>
<td className="p-4">
<span className="text-[9px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded uppercase font-bold">IVA</span>
</td>
<td className="p-4 text-right font-mono text-xs text-zinc-300">12.500,00</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="p-4">
<p className="text-xs font-bold text-zinc-200">INVERSIONES 2020</p>
<p className="text-[10px] text-zinc-500">J-29833100-1</p>
</td>
<td className="p-4">
<span className="text-[9px] bg-zinc-700 text-zinc-300 px-2 py-0.5 rounded uppercase font-bold">ISLR</span>
</td>
<td className="p-4 text-right font-mono text-xs text-zinc-300">4.200,00</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="p-4">
<p className="text-xs font-bold text-zinc-200">DISTRIBUIDORA METAL</p>
<p className="text-[10px] text-zinc-500">J-10293344-0</p>
</td>
<td className="p-4">
<span className="text-[9px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded uppercase font-bold">IVA</span>
</td>
<td className="p-4 text-right font-mono text-xs text-zinc-300">8.950,00</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="h-48 relative overflow-hidden group">
<img alt="Industrial Engine Parts" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity" data-alt="High-precision industrial engine components made of polished chrome and steel, macro shot with dramatic lighting and dark technical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuActUuQtgonLoamFibDF_OZe113ue71JMMUoVXBtDr5bGio2Pjl9B8Km5KdxrXUp1xKzzZrwLg0Acw1-qUTKiSIMBnfKP7zo6U0VfvOMllldFvW-2XTxAlx7UKAadC426lEPzXJZwO_lYndUxLRez5y54d20fcenuMil4ojO3pG12NFR8W5tHGkgFAtBhJJk6e1Xjsr4y2ENvNTkqkQip_NAufaaCyvRQJVOasuWHHTIltECZhVKUUGUSkiFlhpb7lhiWv_4BCD5lY"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c] via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-[10px] uppercase font-bold tracking-widest text-amber-500">Precision Asset Log</p>
<p className="text-xs text-white headline-font">Stock Ref: 992-XC-MAX</p>
</div>
</div>
<div className="bg-zinc-900 p-6 border-l border-zinc-800">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-zinc-500 text-sm">info</span>
<span className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Audit Status</span>
</div>
<p className="text-xs text-zinc-400 leading-relaxed italic">
                        "Documentacion verificada según normativa Gaceta Oficial N° 42.100. Todos los cálculos están sujetos a conciliación bancaria final."
                    </p>
</div>
</aside>
</div>
</main>
{/* Comentario remanente */}
<footer className="md:pl-64 p-8 border-t border-zinc-800 bg-zinc-950 mt-20">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<span className="text-xs font-bold headline-font text-zinc-500 uppercase tracking-widest">© 2024 FINANCE_ENGINE</span>
<span className="h-1 w-1 bg-zinc-700 rounded-full"></span>
<span className="text-xs text-zinc-600">SENIAT INTEGRATION ACTIVE v2.4.1</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-tighter" href="#">Support</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-tighter" href="#">Security Protocol</a>
<a className="text-xs text-zinc-500 hover:text-white uppercase tracking-tighter" href="#">Legal Documentation</a>
</div>
</div>
</footer>

```
        </div>
    );
};
