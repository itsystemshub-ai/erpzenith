import React from 'react';
import { Link } from '@inertiajs/react';

export default function BalanceGeneral() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 border-r-0 bg-zinc-900 flex flex-col py-8 gap-4 shadow-[40px_0_40px_-40px_rgba(0,0,0,0.1)] z-40 hidden md:flex">
<div className="px-6 mb-6">
<h1 className="text-lg font-black text-zinc-50 uppercase tracking-tighter">Industrial ERP</h1>
<p className="text-[10px] text-amber-500 font-bold uppercase tracking-[0.2em]">Finance Module</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center px-6 py-3 text-zinc-400 hover:bg-zinc-800 transition-all duration-200 group" href="#">
<span className="material-symbols-outlined mr-3">dashboard</span>
<span className="font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider">Dashboard</span>
</a>
<a className="flex items-center px-6 py-3 bg-amber-500/10 text-amber-400 border-r-4 border-amber-500 transition-all duration-200" href="#">
<span className="material-symbols-outlined mr-3">account_balance_wallet</span>
<span className="font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider">Financial Reports</span>
</a>
<a className="flex items-center px-6 py-3 text-zinc-400 hover:bg-zinc-800 transition-all duration-200" href="#">
<span className="material-symbols-outlined mr-3">payments</span>
<span className="font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider">Accounts Receivable</span>
</a>
<a className="flex items-center px-6 py-3 text-zinc-400 hover:bg-zinc-800 transition-all duration-200" href="#">
<span className="material-symbols-outlined mr-3">receipt_long</span>
<span className="font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider">Expenses</span>
</a>
<a className="flex items-center px-6 py-3 text-zinc-400 hover:bg-zinc-800 transition-all duration-200" href="#">
<span className="material-symbols-outlined mr-3">analytics</span>
<span className="font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider">Budgets</span>
</a>
<a className="flex items-center px-6 py-3 text-zinc-400 hover:bg-zinc-800 transition-all duration-200" href="#">
<span className="material-symbols-outlined mr-3">account_balance</span>
<span className="font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider">Taxes</span>
</a>
</nav>
<div className="px-6 mt-auto">
<button className="w-full bg-primary py-3 text-xs font-bold uppercase tracking-widest text-white hover:scale-105 transition-transform">
                New Transaction
            </button>
<div className="mt-6 flex flex-col gap-2 opacity-50">
<a className="flex items-center text-[10px] uppercase font-bold tracking-widest" href="#">
<span className="material-symbols-outlined text-sm mr-2">settings</span> Settings
                </a>
<a className="flex items-center text-[10px] uppercase font-bold tracking-widest" href="#">
<span className="material-symbols-outlined text-sm mr-2">help</span> Support
                </a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:ml-64 p-4 md:p-12 min-h-screen bg-[#1a1c1c] relative overflow-hidden">
{/* Comentario remanente */}
<div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
<svg className="w-full h-full" viewbox="0 0 100 100">
<pattern height="10" id="grid" patternunits="userSpaceOnUse" width="10">
<path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
{/* Comentario remanente */}
<header className="relative z-10 mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">Reporte Oficial</span>
<span className="text-zinc-500 font-mono text-[10px]">FIN_ENG_v2.0.4</span>
</div>
<h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-4">MAYOR DE REPUESTO LA CIMA, C.A.</h1>
<p className="text-primary-container font-medium uppercase tracking-[0.3em] text-sm">Estado de Situación Financiera</p>
<p className="text-zinc-500 text-xs mt-4 font-mono uppercase">Cierre de Periodo Fiscal: 31 de Octubre, 2023 | Moneda: Unidades Monetarias (UM)</p>
</div>
<div className="mt-8 md:mt-0 flex gap-4">
<div className="text-right">
<p className="text-zinc-500 text-[10px] uppercase tracking-widest">Uptime Operativo</p>
<p className="text-2xl font-['Space_Grotesk'] font-bold text-primary-container">99.8%</p>
</div>
</div>
</header>
{/* Comentario remanente */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
<div className="bg-zinc-900/50 backdrop-blur-md p-6 border-l-4 border-primary relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-10">
<span className="material-symbols-outlined text-8xl" >trending_up</span>
</div>
<p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Total Activos</p>
<h3 className="text-3xl font-bold tracking-tighter">4.852.200,45</h3>
</div>
<div className="bg-zinc-900/50 backdrop-blur-md p-6 border-l-4 border-error relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-10">
<span className="material-symbols-outlined text-8xl" >account_balance</span>
</div>
<p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Total Pasivos</p>
<h3 className="text-3xl font-bold tracking-tighter">1.240.550,12</h3>
</div>
<div className="bg-zinc-900/50 backdrop-blur-md p-6 border-l-4 border-zinc-500 relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-10">
<span className="material-symbols-outlined text-8xl" >shield</span>
</div>
<p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Patrimonio Neto</p>
<h3 className="text-3xl font-bold tracking-tighter text-primary-container">3.611.650,33</h3>
</div>
</section>
{/* Comentario remanente */}
<div className="space-y-12 relative z-10">
{/* Comentario remanente */}
<section>
<div className="flex items-baseline gap-4 mb-4">
<h2 className="text-2xl font-bold uppercase tracking-tighter text-white">01 / Activos</h2>
<div className="h-[1px] flex-1 bg-white/10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/* Comentario remanente */}
<div className="bg-zinc-900/30 p-6">
<h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-white/5 pb-2">Activo Corriente</h3>
<table className="w-full text-xs font-mono">
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Caja y Bancos</td>
<td className="py-3 text-right tabular-nums">450.000,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Cuentas por Cobrar Comerciales</td>
<td className="py-3 text-right tabular-nums">820.500,45</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group bg-primary/5">
<td className="py-3 text-primary-container font-bold">Inventario de Repuestos (Valorizado)</td>
<td className="py-3 text-right tabular-nums font-bold">1.840.300,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">IVA Crédito Fiscal</td>
<td className="py-3 text-right tabular-nums">98.400,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Retenciones de IVA por Recuperar</td>
<td className="py-3 text-right tabular-nums">42.000,00</td>
</tr>
</tbody>
<tfoot>
<tr className="border-t-2 border-primary/20">
<td className="pt-4 text-[10px] uppercase tracking-widest text-zinc-500">Subtotal Activo Corriente</td>
<td className="pt-4 text-right text-lg font-bold tracking-tight">3.251.200,45</td>
</tr>
</tfoot>
</table>
</div>
{/* Comentario remanente */}
<div className="bg-zinc-900/30 p-6">
<h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-white/5 pb-2">Activo No Corriente</h3>
<table className="w-full text-xs font-mono">
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Propiedad, Planta y Equipo</td>
<td className="py-3 text-right tabular-nums">1.450.000,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Mobiliario y Equipos de Oficina</td>
<td className="py-3 text-right tabular-nums21">320.000,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Depreciación Acumulada</td>
<td className="py-3 text-right tabular-nums text-error">(-169.000,00)</td>
</tr>
</tbody>
<tfoot>
<tr className="border-t-2 border-primary/20">
<td className="pt-4 text-[10px] uppercase tracking-widest text-zinc-500">Subtotal Activo No Corriente</td>
<td className="pt-4 text-right text-lg font-bold tracking-tight">1.601.000,00</td>
</tr>
</tfoot>
</table>
</div>
</div>
</section>
{/* Comentario remanente */}
<section>
<div className="flex items-baseline gap-4 mb-4">
<h2 className="text-2xl font-bold uppercase tracking-tighter text-white">02 / Pasivos</h2>
<div className="h-[1px] flex-1 bg-white/10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/* Comentario remanente */}
<div className="bg-zinc-900/30 p-6">
<h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-white/5 pb-2">Pasivo Corriente</h3>
<table className="w-full text-xs font-mono">
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Cuentas por Pagar Proveedores</td>
<td className="py-3 text-right tabular-nums">680.000,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group text-primary-container">
<td className="py-3 font-bold">IVA por Pagar</td>
<td className="py-3 text-right tabular-nums font-bold">124.550,12</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Retenciones de ISLR por Pagar</td>
<td className="py-3 text-right tabular-nums">15.200,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Pasivos Laborales Acumulados</td>
<td className="py-3 text-right tabular-nums">220.800,00</td>
</tr>
</tbody>
<tfoot>
<tr className="border-t-2 border-error/20">
<td className="pt-4 text-[10px] uppercase tracking-widest text-zinc-500">Subtotal Pasivo Corriente</td>
<td className="pt-4 text-right text-lg font-bold tracking-tight">1.040.550,12</td>
</tr>
</tfoot>
</table>
</div>
{/* Comentario remanente */}
<div className="bg-zinc-900/30 p-6">
<h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-white/5 pb-2">Pasivo No Corriente</h3>
<table className="w-full text-xs font-mono">
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-3 text-zinc-400 group-hover:text-white">Préstamos Bancarios Largo Plazo</td>
<td className="py-3 text-right tabular-nums">200.000,00</td>
</tr>
</tbody>
<tfoot className="h-24">
{/* Comentario remanente */}
<tr className="border-t-2 border-error/20 align-bottom">
<td className="pt-4 text-[10px] uppercase tracking-widest text-zinc-500">Subtotal Pasivo No Corriente</td>
<td className="pt-4 text-right text-lg font-bold tracking-tight">200.000,00</td>
</tr>
</tfoot>
</table>
</div>
</div>
</section>
{/* Comentario remanente */}
<section>
<div className="flex items-baseline gap-4 mb-4">
<h2 className="text-2xl font-bold uppercase tracking-tighter text-white">03 / Patrimonio</h2>
<div className="h-[1px] flex-1 bg-white/10"></div>
</div>
<div className="bg-zinc-900/30 p-8 border border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<table className="w-full text-xs font-mono">
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-zinc-400 group-hover:text-white uppercase tracking-wider">Capital Social Suscrito y Pagado</td>
<td className="py-4 text-right tabular-nums text-sm">2.000.000,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-zinc-400 group-hover:text-white uppercase tracking-wider">Reserva Legal</td>
<td className="py-4 text-right tabular-nums text-sm">200.000,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 text-zinc-400 group-hover:text-white uppercase tracking-wider">Utilidades Acumuladas</td>
<td className="py-4 text-right tabular-nums text-sm">950.000,00</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group bg-primary/10">
<td className="py-4 text-primary-container font-bold uppercase tracking-wider">Utilidad del Ejercicio</td>
<td className="py-4 text-right tabular-nums text-sm font-bold">461.650,33</td>
</tr>
</tbody>
</table>
</div>
<div className="flex flex-col items-center justify-center p-8 bg-zinc-950/50 rounded-lg border border-primary/20">
<span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-2">Total Capital y Reservas</span>
<div className="text-5xl font-bold tracking-tighter text-primary-container mb-2">3.611.650,33</div>
<div className="flex items-center gap-2 text-zinc-500 italic text-[10px]">
<span className="material-symbols-outlined text-xs">verified</span>
                                Certificado por el departamento contable
                            </div>
</div>
</div>
</div>
</section>
</div>
{/* Comentario remanente */}
<footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-8">
<div className="flex flex-col">
<span className="text-[9px] uppercase tracking-widest font-black">Preparado por</span>
<span className="text-xs uppercase">Dpto. Contabilidad Central</span>
</div>
<div className="flex flex-col">
<span className="text-[9px] uppercase tracking-widest font-black">Revisado por</span>
<span className="text-xs uppercase">Dirección de Finanzas</span>
</div>
</div>
<div className="text-[9px] text-right max-w-sm uppercase leading-relaxed font-mono">
                Este documento es una representación técnica de la salud financiera de MAYOR DE REPUESTO LA CIMA, C.A. La integridad de los datos de inventario está vinculada directamente al sistema ERP FINANCE_ENGINE Core.
            </div>
</footer>
</main>
{/* Comentario remanente */}
<nav className="md:hidden fixed bottom-0 w-full bg-zinc-950 border-t border-white/10 flex justify-around items-center h-16 z-50">
<button className="flex flex-col items-center text-zinc-500">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[8px] uppercase font-bold mt-1">Dash</span>
</button>
<button className="flex flex-col items-center text-amber-500">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="text-[8px] uppercase font-bold mt-1">Reports</span>
</button>
<button className="flex flex-col items-center text-zinc-500">
<span className="material-symbols-outlined">payments</span>
<span className="text-[8px] uppercase font-bold mt-1">Pay</span>
</button>
<button className="flex flex-col items-center text-zinc-500">
<span className="material-symbols-outlined">receipt_long</span>
<span className="text-[8px] uppercase font-bold mt-1">Exp</span>
</button>
<button className="flex flex-col items-center text-zinc-500">
<span className="material-symbols-outlined">settings</span>
<span className="text-[8px] uppercase font-bold mt-1">Set</span>
</button>
</nav>

        </div>
    );
};
