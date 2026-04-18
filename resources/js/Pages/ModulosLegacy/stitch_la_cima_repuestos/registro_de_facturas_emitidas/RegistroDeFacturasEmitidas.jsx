import React from 'react';
import { Link } from '@inertiajs/react';

export default function RegistroDeFacturasEmitidas() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-stone-100 dark:bg-stone-950 flex flex-col h-full py-6 px-4 z-50">
<div className="mb-10 px-2">
<h1 className="font-['Space_Grotesk'] font-black text-lime-700 dark:text-lime-500 text-2xl tracking-tighter">TITAN INDUSTRIAL</h1>
<div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-900">
<p className="font-['Space_Grotesk'] font-black text-lime-700 dark:text-lime-500 uppercase text-xs tracking-widest">OPERACIONES</p>
<p className="text-stone-500 text-[10px] font-bold uppercase tracking-tighter">Planta Norte</p>
</div>
</div>
<nav className="flex-grow space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 ease-in-out text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 ease-in-out text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Ventas
            </a>
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 ease-in-out text-stone-900 dark:text-stone-50 bg-stone-200 dark:bg-stone-800 font-bold border-r-4 border-lime-500 font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
                Facturación
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 ease-in-out text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                Inventario
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 ease-in-out text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                Reportes
            </a>
</nav>
<div className="mt-auto space-y-1">
<button className="w-full mb-6 bg-primary text-on-primary py-3 px-4 rounded font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                Nueva Factura
            </button>
<a className="flex items-center gap-3 px-4 py-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 text-xs font-medium" href="#">
<span className="material-symbols-outlined text-base" data-icon="contact_support">contact_support</span>
                Soporte
            </a>
<a className="flex items-center gap-3 px-4 py-2 text-stone-600 dark:text-stone-400 hover:text-red-600 text-xs font-medium" href="#">
<span className="material-symbols-outlined text-base" data-icon="logout">logout</span>
                Cerrar Sesión
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 min-h-screen bg-surface">
{/* Comentario remanente */}
<header className="bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl flex justify-between items-center w-full px-6 h-16 sticky top-0 z-40">
<div className="flex items-center gap-8">
<h2 className="font-['Space_Grotesk'] tracking-tight uppercase text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50">REGISTRO HISTÓRICO</h2>
<div className="relative hidden lg:block">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-400 text-sm" data-icon="search">search</span>
<input className="bg-surface-container-highest border-none rounded-sm py-1.5 pl-9 pr-4 text-xs w-64 focus:ring-2 focus:ring-primary transition-all" placeholder="Buscar factura o cliente..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="h-8 w-8 rounded-full bg-stone-200 overflow-hidden ml-2">
<img alt="User profile" data-alt="professional male portrait for user profile in high-end industrial software interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbXLcVMQbeupxzelt4BVAX0W-gazqyzO0uZk24E5OcEYmxmKI0jHPoJQhOyfBc0I31QcgDkLRuu2xqLeOkr1Jkqe8b_Q9MS_vniL5bA3Xrkf-2Ju0btzE736bF7b298BNtR4tZQSY5rDy1mcvi-ovGblXc0S5kW9UcC6PvlDjXYTx9YSlJ-aFAMqtAmfbVZb5-t4diQ0mr26xUAQoeOd20PtWsmsMJgGSh0K5qIdx6JlAkePjksdd4hhywBgLHYMdo2kHYlGaICP8"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<div className="p-8">
{/* Comentario remanente */}
<div className="mb-8 flex flex-col md:flex-row md:items-end gap-6 bg-surface-container-low p-6 rounded-lg relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent"></div>
</div>
<div className="flex-1 space-y-2">
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500">Rango de Fecha</label>
<div className="flex gap-2">
<input className="bg-surface-container-lowest border-none rounded px-3 py-2 text-sm w-full focus:ring-1 focus:ring-primary shadow-sm" type="date"/>
<span className="self-center text-stone-400">/</span>
<input className="bg-surface-container-lowest border-none rounded px-3 py-2 text-sm w-full focus:ring-1 focus:ring-primary shadow-sm" type="date"/>
</div>
</div>
<div className="flex-1 space-y-2">
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500">Filtrar por Cliente</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-400 text-sm" data-icon="person">person</span>
<input className="bg-surface-container-lowest border-none rounded pl-10 pr-3 py-2 text-sm w-full focus:ring-1 focus:ring-primary shadow-sm" placeholder="Nombre o RIF..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="bg-stone-900 text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center gap-2 h-[38px]">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                        Aplicar
                    </button>
<button className="bg-surface-container-high text-stone-700 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-stone-300 transition-colors h-[38px]">
<span className="material-symbols-outlined text-sm" data-icon="refresh">refresh</span>
</button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-surface-container-lowest p-5 rounded border-l-4 border-lime-500">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Total Facturado</p>
<p className="text-2xl font-['Space_Grotesk'] font-bold text-stone-900">$284,930.00</p>
<p className="text-[10px] text-lime-600 font-bold mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span> +12% este mes
                    </p>
</div>
<div className="bg-surface-container-lowest p-5 rounded border-l-4 border-stone-300">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Facturas Emitidas</p>
<p className="text-2xl font-['Space_Grotesk'] font-bold text-stone-900">1,248</p>
</div>
<div className="bg-surface-container-lowest p-5 rounded border-l-4 border-red-500">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Anuladas</p>
<p className="text-2xl font-['Space_Grotesk'] font-bold text-stone-900">12</p>
<p className="text-[10px] text-red-600 font-bold mt-2">0.9% del total</p>
</div>
<div className="bg-surface-container-lowest p-5 rounded border-l-4 border-primary">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Impuestos Retenidos</p>
<p className="text-2xl font-['Space_Grotesk'] font-bold text-stone-900">$45,588.80</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest rounded overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-100/50 border-b border-stone-200">
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Fecha</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Nro Control</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Cliente</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">RIF</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500 text-right">Base Imp.</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500 text-right">IVA (16%)</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500 text-right">Total</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500 text-center">Estatus</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500 text-center">Acciones</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
{/* Comentario remanente */}
<tr className="hover:bg-stone-50 transition-colors group">
<td className="px-6 py-4 text-xs font-medium text-stone-600">24/05/2024</td>
<td className="px-6 py-4 text-xs font-bold text-stone-900 font-['Space_Grotesk']">F-0001824</td>
<td className="px-6 py-4 text-xs font-semibold text-stone-800">Aceros del Orinoco C.A.</td>
<td className="px-6 py-4 text-xs text-stone-500">J-30456214-0</td>
<td className="px-6 py-4 text-xs text-right font-mono">$12,450.00</td>
<td className="px-6 py-4 text-xs text-right font-mono">$1,992.00</td>
<td className="px-6 py-4 text-xs text-right font-bold text-stone-900 font-mono">$14,442.00</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 rounded-sm bg-lime-100 text-lime-700 text-[9px] font-black uppercase tracking-tighter">Vigente</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded hover:bg-stone-200 text-stone-600 transition-colors" title="Ver PDF">
<span className="material-symbols-outlined text-lg" data-icon="picture_as_pdf">picture_as_pdf</span>
</button>
<button className="p-1.5 rounded hover:bg-stone-200 text-stone-600 transition-colors" title="Imprimir">
<span className="material-symbols-outlined text-lg" data-icon="print">print</span>
</button>
<button className="p-1.5 rounded hover:bg-red-50 text-red-600 transition-colors" title="Anular">
<span className="material-symbols-outlined text-lg" data-icon="block">block</span>
</button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-50 transition-colors group">
<td className="px-6 py-4 text-xs font-medium text-stone-600">23/05/2024</td>
<td className="px-6 py-4 text-xs font-bold text-stone-900 font-['Space_Grotesk']">F-0001823</td>
<td className="px-6 py-4 text-xs font-semibold text-stone-800">Suministros Industriales 2000</td>
<td className="px-6 py-4 text-xs text-stone-500">J-29877452-1</td>
<td className="px-6 py-4 text-xs text-right font-mono">$4,200.00</td>
<td className="px-6 py-4 text-xs text-right font-mono">$672.00</td>
<td className="px-6 py-4 text-xs text-right font-bold text-stone-900 font-mono">$4,872.00</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 rounded-sm bg-lime-100 text-lime-700 text-[9px] font-black uppercase tracking-tighter">Vigente</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded hover:bg-stone-200 text-stone-600 transition-colors" title="Ver PDF">
<span className="material-symbols-outlined text-lg" data-icon="picture_as_pdf">picture_as_pdf</span>
</button>
<button className="p-1.5 rounded hover:bg-stone-200 text-stone-600 transition-colors" title="Imprimir">
<span className="material-symbols-outlined text-lg" data-icon="print">print</span>
</button>
<button className="p-1.5 rounded hover:bg-red-50 text-red-600 transition-colors" title="Anular">
<span className="material-symbols-outlined text-lg" data-icon="block">block</span>
</button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-red-50/20 hover:bg-red-50 transition-colors group">
<td className="px-6 py-4 text-xs font-medium text-stone-400">23/05/2024</td>
<td className="px-6 py-4 text-xs font-bold text-stone-400 font-['Space_Grotesk'] line-through">F-0001822</td>
<td className="px-6 py-4 text-xs font-semibold text-stone-400">Constructora El Faro</td>
<td className="px-6 py-4 text-xs text-stone-400">J-41123300-8</td>
<td className="px-6 py-4 text-xs text-right font-mono text-stone-400">$8,900.00</td>
<td className="px-6 py-4 text-xs text-right font-mono text-stone-400">$1,424.00</td>
<td className="px-6 py-4 text-xs text-right font-bold text-stone-400 font-mono">$10,324.00</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 rounded-sm bg-red-100 text-red-700 text-[9px] font-black uppercase tracking-tighter">Anulada</span>
</td>
<td className="px-6 py-4 text-center">
<button className="p-1.5 rounded hover:bg-stone-200 text-stone-400 transition-colors" title="Ver Log de Anulación">
<span className="material-symbols-outlined text-lg" data-icon="info">info</span>
</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-50 transition-colors group">
<td className="px-6 py-4 text-xs font-medium text-stone-600">22/05/2024</td>
<td className="px-6 py-4 text-xs font-bold text-stone-900 font-['Space_Grotesk']">F-0001821</td>
<td className="px-6 py-4 text-xs font-semibold text-stone-800">Logística Global S.A.</td>
<td className="px-6 py-4 text-xs text-stone-500">J-00122455-9</td>
<td className="px-6 py-4 text-xs text-right font-mono">$45,000.00</td>
<td className="px-6 py-4 text-xs text-right font-mono">$7,200.00</td>
<td className="px-6 py-4 text-xs text-right font-bold text-stone-900 font-mono">$52,200.00</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-1 rounded-sm bg-lime-100 text-lime-700 text-[9px] font-black uppercase tracking-tighter">Vigente</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded hover:bg-stone-200 text-stone-600 transition-colors" title="Ver PDF">
<span className="material-symbols-outlined text-lg" data-icon="picture_as_pdf">picture_as_pdf</span>
</button>
<button className="p-1.5 rounded hover:bg-stone-200 text-stone-600 transition-colors" title="Imprimir">
<span className="material-symbols-outlined text-lg" data-icon="print">print</span>
</button>
<button className="p-1.5 rounded hover:bg-red-50 text-red-600 transition-colors" title="Anular">
<span className="material-symbols-outlined text-lg" data-icon="block">block</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex items-center justify-between">
<p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Mostrando 1 a 25 de 1,248 facturas</p>
<div className="flex gap-1">
<button className="p-1 rounded bg-stone-200 text-stone-600 hover:bg-stone-300 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button className="px-3 py-1 rounded bg-primary text-on-primary text-[10px] font-bold">1</button>
<button className="px-3 py-1 rounded bg-stone-200 text-stone-600 text-[10px] font-bold hover:bg-stone-300">2</button>
<button className="px-3 py-1 rounded bg-stone-200 text-stone-600 text-[10px] font-bold hover:bg-stone-300">3</button>
<button className="p-1 rounded bg-stone-200 text-stone-600 hover:bg-stone-300 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-stone-200 pt-8">
<div className="relative group cursor-pointer overflow-hidden rounded-lg">
<img className="w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" data-alt="industrial warehouse interior with steel structures and precision machinery in a clean engineering environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCVY1zYC4PafKnqVJPrIU_t0NAo7bjoDdk-q6XQElOE7LaeoQZkgITyHOuTZ8BznLVNF6sLoyJejyNi6QojYupY6wLBXYwnVVKbJTgyRrdLbCVxrM2-7zhhCbVMDcXEPO24d9jBRnPcwnfMkNR6eCb2W0SSkjhEYjuNUjMpvjf1UVR7KFjEAH2JjtyrfIpRxpUF9xMAzc3Kmf7MQ7Soo4c73ua2xqqhAaubWTXld5objkdT2McfozhuaNC2_CEF3QqUSNQEe38r7s"/>
<div className="absolute inset-0 bg-stone-900/60 flex flex-col justify-center px-8">
<h4 className="text-lime-400 font-['Space_Grotesk'] font-bold text-lg tracking-tight">SOLICITAR REPORTE MENSUAL</h4>
<p className="text-white/80 text-xs mt-1">Generación automática de libro de ventas en formato SENIAT.</p>
</div>
</div>
<div className="space-y-4">
<h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Avisos del Sistema</h5>
<div className="flex gap-4 items-start">
<div className="bg-lime-100 p-2 rounded">
<span className="material-symbols-outlined text-lime-700 text-lg" data-icon="check_circle">check_circle</span>
</div>
<div>
<p className="text-xs font-bold text-stone-800">Conexión SENIAT Activa</p>
<p className="text-[10px] text-stone-500 mt-1">La sincronización con la plataforma fiscal se encuentra operativa y actualizada al día de hoy.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="bg-amber-100 p-2 rounded">
<span className="material-symbols-outlined text-amber-700 text-lg" data-icon="warning">warning</span>
</div>
<div>
<p className="text-xs font-bold text-stone-800">Próximo Cierre de Mes</p>
<p className="text-[10px] text-stone-500 mt-1">Faltan 7 días para el cierre fiscal de Mayo. Revise facturas pendientes por anular.</p>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all z-50 group">
<span className="material-symbols-outlined text-2xl" data-icon="download">download</span>
<span className="absolute right-full mr-4 bg-stone-900 text-white text-[10px] font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap uppercase tracking-widest">Exportar XLS</span>
</button>

        </div>
    );
};
