import React from 'react';
import { Link } from '@inertiajs/react';

export default function GestiNDeCuentasPorCobrar() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="text-xl font-bold tracking-tighter text-zinc-50 font-headline uppercase">FINANCE_ENGINE</span>
</div>
<div className="flex-1 max-w-md mx-8">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-zinc-500">search</span>
<input className="w-full bg-zinc-900 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary" placeholder="Buscar cliente o factura..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-zinc-400 hover:bg-zinc-800 transition-colors rounded-lg">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-zinc-400 hover:bg-zinc-800 transition-colors rounded-lg">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-zinc-700">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional male administrator in a high-tech office environment, cool cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZfATICRO-DikxPkqc9ZpWIWqA3JmSaArxhdO5Rzk3kBvtAssxFgBr0hImhzwcaPSt7s0YzUCBmEV9RT_qnRJSbWZKsMKItP5m0AfyrLuq76PHXNffCUzKKAHWbOyY7bd4aEDEvrkh5HrdOcvoWVXydapCENGQeAqIwG80dRnc-MofuAm5nKcbnpH8DNBXfpL1_nMUgln2vClCTwbc0-pdAdImP4Y4pImWIIsk6U8o9vHJytNZw-A4ZPWGxTkljgSKiH4-nV5P5JI"/>
</div>
</div>
</nav>
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-zinc-900 border-r border-zinc-800 flex flex-col py-8 gap-4 z-40">
<div className="px-6 mb-8">
<h2 className="text-lg font-black text-zinc-50 font-headline uppercase">Industrial ERP</h2>
<p className="text-[10px] text-amber-500 font-headline tracking-[0.2em] uppercase">Finance Module</p>
</div>
<nav className="flex flex-col gap-1 px-3">
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-headline text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 bg-amber-500/10 text-amber-400 border-r-4 border-amber-500 font-headline text-sm uppercase tracking-wider transition-all" href="#">
<span className="material-symbols-outlined">payments</span> Accounts Receivable
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-headline text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span> Financial Reports
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-headline text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all" href="#">
<span className="material-symbols-outlined">receipt_long</span> Expenses
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-headline text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all" href="#">
<span className="material-symbols-outlined">analytics</span> Budgets
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 font-headline text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all" href="#">
<span className="material-symbols-outlined">account_balance</span> Taxes
            </a>
</nav>
<div className="mt-auto px-6">
<button className="w-full bg-gradient-primary text-white font-headline text-xs font-bold py-4 px-4 rounded-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
                New Transaction
            </button>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800 px-3 flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-2 text-zinc-600 font-headline text-xs uppercase tracking-wider hover:text-zinc-300" href="#">
<span className="material-symbols-outlined text-sm">settings</span> Settings
            </a>
<a className="flex items-center gap-3 px-4 py-2 text-zinc-600 font-headline text-xs uppercase tracking-wider hover:text-zinc-300" href="#">
<span className="material-symbols-outlined text-sm">help</span> Support
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 mt-16 p-8">
<header className="mb-10 flex justify-between items-end">
<div>
<h1 className="text-4xl font-black uppercase tracking-tighter text-zinc-50 mb-2">Cuentas por Cobrar</h1>
<p className="text-zinc-500 font-body max-w-xl uppercase text-xs tracking-widest">MAYOR DE REPUESTO LA CIMA, C.A. • Gestión de Cartera y Cobranzas</p>
</div>
<div className="flex gap-4">
<div className="bg-zinc-900 p-4 border-l-4 border-primary">
<p className="text-[10px] text-zinc-500 uppercase tracking-widest font-headline">Cartera Total</p>
<p className="text-2xl font-black text-primary-container">$482,950.00</p>
</div>
<div className="bg-zinc-900 p-4 border-l-4 border-error">
<p className="text-[10px] text-zinc-500 uppercase tracking-widest font-headline">Cartera Vencida</p>
<p className="text-2xl font-black text-error">$124,300.00</p>
</div>
</div>
</header>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6 mb-12">
{/* Comentario remanente */}
<div className="col-span-8 bg-zinc-900/50 p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl">analytics</span>
</div>
<h3 className="font-headline text-sm uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-2">
<span className="w-2 h-2 bg-primary"></span> Antigüedad de Saldos
                </h3>
<div className="grid grid-cols-4 gap-4">
<div className="bg-zinc-900 p-6 border-b-2 border-zinc-800">
<span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Al día</span>
<span className="text-xl font-bold">$358,650</span>
<div className="w-full bg-zinc-800 h-1 mt-4">
<div className="bg-primary h-full w-[74%]"></div>
</div>
</div>
<div className="bg-zinc-900 p-6 border-b-2 border-zinc-800">
<span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">30 Días</span>
<span className="text-xl font-bold">$62,100</span>
<div className="w-full bg-zinc-800 h-1 mt-4">
<div className="bg-amber-500 h-full w-[13%]"></div>
</div>
</div>
<div className="bg-zinc-900 p-6 border-b-2 border-zinc-800">
<span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">60 Días</span>
<span className="text-xl font-bold">$41,800</span>
<div className="w-full bg-zinc-800 h-1 mt-4">
<div className="bg-orange-600 h-full w-[9%]"></div>
</div>
</div>
<div className="bg-zinc-900 p-6 border-b-2 border-error">
<span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">90+ Días</span>
<span className="text-xl font-bold text-error">$20,400</span>
<div className="w-full bg-zinc-800 h-1 mt-4">
<div className="bg-error h-full w-[4%]"></div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-4 bg-primary text-on-primary p-8 flex flex-col justify-between">
<div>
<h3 className="font-headline text-lg font-bold uppercase tracking-widest mb-2">Registrar Cobro</h3>
<p className="text-xs opacity-80 font-body">Asiente pagos recibidos y aplique a facturas pendientes de forma inmediata.</p>
</div>
<button className="w-full bg-zinc-950 text-white font-headline text-xs font-bold py-4 px-4 rounded-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-900 transition-all">
<span className="material-symbols-outlined text-sm">add_card</span> Seleccionar Factura
                </button>
</div>
</div>
{/* Comentario remanente */}
<section className="bg-zinc-900/30 p-1">
<div className="flex items-center justify-between p-6 bg-zinc-900">
<h3 className="font-headline text-sm font-bold uppercase tracking-widest">Cartera de Clientes</h3>
<div className="flex gap-4">
<button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-headline text-zinc-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span> Filtrar por Estado
                    </button>
<button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-headline text-zinc-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">download</span> Exportar Reporte
                    </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-900/50">
<th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Cliente</th>
<th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">RIF / ID</th>
<th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Saldo Total</th>
<th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Fact. Vencidas</th>
<th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Antigüedad Máx.</th>
<th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500">Estado</th>
<th className="px-6 py-4 text-[10px] font-headline uppercase tracking-widest text-zinc-500"></th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-6 py-5">
<div className="font-headline text-sm font-bold uppercase tracking-tight text-zinc-100">REPUESTOS EL MOTOR, C.A.</div>
<span className="text-[10px] text-zinc-500">Ventas al por mayor • Región Central</span>
</td>
<td className="px-6 py-5 font-label text-xs text-zinc-400 tracking-wider">J-31245678-0</td>
<td className="px-6 py-5 font-bold text-sm">$45,200.00</td>
<td className="px-6 py-5">
<span className="bg-zinc-800 text-zinc-300 text-[10px] font-bold px-2 py-1 uppercase">03 FACT</span>
</td>
<td className="px-6 py-5 text-zinc-400 text-xs">45 Días</td>
<td className="px-6 py-5">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-amber-500">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pendiente
                                </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors bg-error/5">
<td className="px-6 py-5">
<div className="font-headline text-sm font-bold uppercase tracking-tight text-zinc-100">SERVICIOS INTEGRALES TÉCNICOS</div>
<span className="text-[10px] text-zinc-500">Taller Autorizado • Barquisimeto</span>
</td>
<td className="px-6 py-5 font-label text-xs text-zinc-400 tracking-wider">J-40552132-1</td>
<td className="px-6 py-5 font-bold text-sm text-error">$12,850.00</td>
<td className="px-6 py-5">
<span className="bg-error/20 text-error text-[10px] font-bold px-2 py-1 uppercase border border-error/20">05 FACT</span>
</td>
<td className="px-6 py-5 text-error text-xs font-bold">94 Días</td>
<td className="px-6 py-5">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-error">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Crítico
                                </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-6 py-5">
<div className="font-headline text-sm font-bold uppercase tracking-tight text-zinc-100">INVERSIONES LA MONTAÑA</div>
<span className="text-[10px] text-zinc-500">Distribuidor Independiente</span>
</td>
<td className="px-6 py-5 font-label text-xs text-zinc-400 tracking-wider">J-29881772-5</td>
<td className="px-6 py-5 font-bold text-sm">$102,400.00</td>
<td className="px-6 py-5">
<span className="bg-zinc-800 text-zinc-300 text-[10px] font-bold px-2 py-1 uppercase">00 FACT</span>
</td>
<td className="px-6 py-5 text-zinc-400 text-xs">12 Días</td>
<td className="px-6 py-5">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Solvente
                                </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-6 py-5">
<div className="font-headline text-sm font-bold uppercase tracking-tight text-zinc-100">REPUESTOS TRUCK PARTS, S.A.</div>
<span className="text-[10px] text-zinc-500">Carga Pesada • Puerto Cabello</span>
</td>
<td className="px-6 py-5 font-label text-xs text-zinc-400 tracking-wider">J-00122938-4</td>
<td className="px-6 py-5 font-bold text-sm">$32,150.00</td>
<td className="px-6 py-5">
<span className="bg-zinc-800 text-zinc-300 text-[10px] font-bold px-2 py-1 uppercase">02 FACT</span>
</td>
<td className="px-6 py-5 text-zinc-400 text-xs">68 Días</td>
<td className="px-6 py-5">
<span className="flex items-center gap-2 text-[10px] font-bold uppercase text-orange-500">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Vencido
                                </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="p-6 bg-zinc-900 flex items-center justify-between">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest font-headline">Mostrando 4 de 128 clientes</span>
<div className="flex gap-2">
<button className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 border border-primary flex items-center justify-center bg-primary text-white">
<span className="text-xs font-bold font-headline">01</span>
</button>
<button className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors">
<span className="text-xs font-bold font-headline">02</span>
</button>
<button className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</section>
</main>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-white" data-weight="fill">add</span>
</button>

```
        </div>
    );
};
