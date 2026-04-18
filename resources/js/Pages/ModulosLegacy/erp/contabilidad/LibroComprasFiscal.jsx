import React from 'react';
import { Link } from '@inertiajs/react';

export default function LibroComprasFiscal() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="bg-stone-950/80 backdrop-blur-xl docked full-width top-0 z-50 fixed flex justify-between items-center w-full px-6 py-4 border-b border-stone-800">
<div className="text-2xl font-bold tracking-tighter text-lime-400 font-headline">METALLIC_CORE_ERP</div>
<nav className="hidden md:flex items-center gap-8 font-space-grotesk uppercase tracking-tighter">
<a className="text-stone-400 hover:text-lime-200 transition-colors" href="#">Dashboard</a>
<a className="text-stone-400 hover:text-lime-200 transition-colors" href="#">Inventario</a>
<a className="text-stone-400 hover:text-lime-200 transition-colors" href="#">Reportes</a>
</nav>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-sm">search</span>
<input className="bg-stone-900 border-none text-xs font-headline tracking-widest pl-10 pr-4 py-2 w-64 focus:ring-1 focus:ring-lime-400 text-stone-300" placeholder="BUSCAR..." type="text"/>
</div>
<button className="material-symbols-outlined text-stone-400 hover:text-lime-400 transition-colors">notifications</button>
<button className="material-symbols-outlined text-stone-400 hover:text-lime-400 transition-colors">settings</button>
<div className="h-8 w-8 bg-lime-400 flex items-center justify-center rounded-sm overflow-hidden border border-lime-500/50">
<img alt="User profile" className="w-full h-full object-cover" data-alt="Abstract geometric industrial shape icon with sharp angles and high contrast lime and black colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcskIIxv-Eg5iirmseLJuCxaC1POuHZuj3aC_xzF3mXj_EWgvUpiLau3OCrjYqwBQ6Gn7BmUvUP-zvpStUH5uCdz88MCzAmUD04ahZqLJH9MSB6QKLTMFS6w2m6keGf9s-yOdoC_9bapu4bm7KGeaTKNi3PRdXopEDvm5iq41HhAeeg8bTYAfk_IxUgpnzM6bMYiss43qPXOGMU3nMGOLkmJ0XM0uwBXVs-zufIvNV0KKuqNbm1mW0r2OLE6bNLoIIOhnVqrt1jkA"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<aside className="hidden lg:flex flex-col h-screen w-64 left-0 top-0 fixed bg-stone-900 shadow-2xl py-8 gap-4 z-40 border-r border-stone-800 pt-24">
<div className="px-6 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-800 flex items-center justify-center border border-lime-400/20">
<span className="material-symbols-outlined text-lime-400" data-icon="factory">factory</span>
</div>
<div>
<div className="text-lime-400 font-black font-headline text-sm tracking-tighter">COMPRAS_MOD</div>
<div className="text-stone-500 text-[10px] font-mono">V1.0.2_ACTIVE</div>
</div>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1 px-4">
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Indicadores</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Facturación</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-stone-950 text-lime-400 border-l-4 border-lime-400 transition-all duration-200 font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span>Libro SENIAT</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="factory">factory</span>
<span>Proveedores</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Cuentas por Pagar</span>
</a>
</nav>
<div className="mt-auto px-4 flex flex-col gap-2">
<button className="w-full py-3 border border-lime-400/30 text-lime-400 font-headline uppercase text-xs tracking-widest hover:bg-lime-400/10 transition-colors">
                Soporte Técnico
            </button>
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-error transition-colors font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Cerrar Sesión</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<main className="lg:ml-64 pt-24 pb-12 px-6 min-h-screen">
{/* Comentario remanente */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
<div className="space-y-1">
<h1 className="text-4xl font-headline font-bold uppercase tracking-tighter text-white">Libro de Compras Fiscal</h1>
<p className="text-stone-500 font-mono text-sm">CONTROL FISCAL PERIODICIDAD MENSUAL - ART. 75 RIVA</p>
</div>
<div className="flex gap-3">
<button className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-6 py-2 font-headline uppercase text-xs tracking-widest transition-all scale-95 active:scale-90 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">download</span>
                    Exportar a Excel (SheetJS)
                </button>
<button className="bg-lime-400 hover:bg-lime-300 text-stone-950 px-6 py-2 font-headline font-bold uppercase text-xs tracking-widest transition-all scale-95 active:scale-90 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">lock</span>
                    Cerrar Período Mensual
                </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-stone-900 p-6 border-l-2 border-lime-400">
<div className="text-stone-500 font-headline uppercase text-[10px] tracking-widest mb-1">Total Base Imponible</div>
<div className="text-2xl font-headline font-bold text-white">45.290,50 <span className="text-stone-500 text-xs">VED</span></div>
</div>
<div className="bg-stone-900 p-6 border-l-2 border-stone-700">
<div className="text-stone-500 font-headline uppercase text-[10px] tracking-widest mb-1">Total IVA (16%)</div>
<div className="text-2xl font-headline font-bold text-white">7.246,48 <span className="text-stone-500 text-xs">VED</span></div>
</div>
<div className="bg-stone-900 p-6 border-l-2 border-stone-700">
<div className="text-stone-500 font-headline uppercase text-[10px] tracking-widest mb-1">IVA Retenido</div>
<div className="text-2xl font-headline font-bold text-lime-400">5.434,86 <span className="text-stone-500 text-xs">VED</span></div>
</div>
<div className="bg-stone-900 p-6 border-l-2 border-lime-400/50">
<div className="text-stone-500 font-headline uppercase text-[10px] tracking-widest mb-1">Total Compras</div>
<div className="text-2xl font-headline font-bold text-white">52.536,98 <span className="text-stone-500 text-xs">VED</span></div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 shadow-2xl overflow-hidden">
<div className="p-4 border-b border-stone-800 flex justify-between items-center bg-stone-950/40">
<div className="flex gap-4">
<select className="bg-stone-800 border-none text-[10px] font-headline uppercase tracking-widest text-stone-300 focus:ring-1 focus:ring-lime-400 pr-8">
<option>Octubre 2023</option>
<option>Septiembre 2023</option>
</select>
<div className="flex items-center gap-2 px-3 py-1 bg-stone-800 text-[10px] font-headline uppercase tracking-widest text-lime-400">
<span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></span>
                        Estado: Abierto
                    </div>
</div>
<div className="text-stone-500 text-[10px] font-mono">MOSTRANDO 24 REGISTROS DE COMPRA</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-950 text-stone-400 font-headline text-[10px] uppercase tracking-widest">
<th className="px-4 py-4 font-medium border-b border-stone-800">Fecha</th>
<th className="px-4 py-4 font-medium border-b border-stone-800">RIF Proveedor</th>
<th className="px-4 py-4 font-medium border-b border-stone-800">Nombre Proveedor</th>
<th className="px-4 py-4 font-medium border-b border-stone-800">Nro Factura</th>
<th className="px-4 py-4 font-medium border-b border-stone-800">Nro Control</th>
<th className="px-4 py-4 font-medium border-b border-stone-800 text-right">Base Imponible</th>
<th className="px-4 py-4 font-medium border-b border-stone-800 text-right">IVA (16%)</th>
<th className="px-4 py-4 font-medium border-b border-stone-800">Retención</th>
<th className="px-4 py-4 font-medium border-b border-stone-800 text-right">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-800/50 font-mono text-[11px]">
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/40 transition-colors group">
<td className="px-4 py-3 text-stone-300">12/10/2023</td>
<td className="px-4 py-3 text-lime-400 font-bold">J-31456789-0</td>
<td className="px-4 py-3 text-stone-300 uppercase">Siderúrgica del Turbo C.A.</td>
<td className="px-4 py-3 text-stone-400">00045612</td>
<td className="px-4 py-3 text-stone-400">00-998811</td>
<td className="px-4 py-3 text-right text-stone-300">12.500,00</td>
<td className="px-4 py-3 text-right text-stone-300">2.000,00</td>
<td className="px-4 py-3">
<span className="bg-stone-800 px-2 py-0.5 rounded text-[9px] text-lime-400">2023100045</span>
</td>
<td className="px-4 py-3 text-right text-white font-bold">14.500,00</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-stone-950/20 hover:bg-stone-800/40 transition-colors group">
<td className="px-4 py-3 text-stone-300">15/10/2023</td>
<td className="px-4 py-3 text-lime-400 font-bold">J-00123456-7</td>
<td className="px-4 py-3 text-stone-300 uppercase">Tecnología de Motores V8</td>
<td className="px-4 py-3 text-stone-400">00008922</td>
<td className="px-4 py-3 text-stone-400">00-004512</td>
<td className="px-4 py-3 text-right text-stone-300">5.200,00</td>
<td className="px-4 py-3 text-right text-stone-300">832,00</td>
<td className="px-4 py-3">
<span className="bg-stone-800 px-2 py-0.5 rounded text-[9px] text-lime-400">2023100046</span>
</td>
<td className="px-4 py-3 text-right text-white font-bold">6.032,00</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/40 transition-colors group">
<td className="px-4 py-3 text-stone-300">18/10/2023</td>
<td className="px-4 py-3 text-lime-400 font-bold">J-40552147-1</td>
<td className="px-4 py-3 text-stone-300 uppercase">Lubricantes Industriales X</td>
<td className="px-4 py-3 text-stone-400">00012399</td>
<td className="px-4 py-3 text-stone-400">00-112233</td>
<td className="px-4 py-3 text-right text-stone-300">2.100,50</td>
<td className="px-4 py-3 text-right text-stone-300">336,08</td>
<td className="px-4 py-3">
<span className="bg-stone-800 px-2 py-0.5 rounded text-[9px] text-lime-400">2023100047</span>
</td>
<td className="px-4 py-3 text-right text-white font-bold">2.436,58</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-stone-950/20 hover:bg-stone-800/40 transition-colors group">
<td className="px-4 py-3 text-stone-300">22/10/2023</td>
<td className="px-4 py-3 text-lime-400 font-bold">G-20000001-1</td>
<td className="px-4 py-3 text-stone-300 uppercase">Alcaldía de Municipio Industrial</td>
<td className="px-4 py-3 text-stone-400">F-88120</td>
<td className="px-4 py-3 text-stone-400">N/A</td>
<td className="px-4 py-3 text-right text-stone-300">800,00</td>
<td className="px-4 py-3 text-right text-stone-300">0,00</td>
<td className="px-4 py-3 text-stone-600 italic">EXENTO</td>
<td className="px-4 py-3 text-right text-white font-bold">800,00</td>
</tr>
</tbody>
<tfoot>
<tr className="bg-stone-950 border-t-2 border-lime-400/50 font-headline uppercase text-[10px] tracking-widest text-white">
<td className="px-4 py-4 text-right font-bold" colspan="5">Totales de Período</td>
<td className="px-4 py-4 text-right font-bold border-l border-stone-800">45.290,50</td>
<td className="px-4 py-4 text-right font-bold border-l border-stone-800">7.246,48</td>
<td className="px-4 py-4 border-l border-stone-800"></td>
<td className="px-4 py-4 text-right font-bold border-l border-stone-800 text-lime-400">52.536,98</td>
</tr>
</tfoot>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6">
<div className="max-w-2xl">
<h3 className="text-xs font-headline font-bold text-stone-400 uppercase tracking-widest mb-2">Declaración de Cumplimiento</h3>
<p className="text-[10px] text-stone-500 leading-relaxed font-body">
                    Este reporte ha sido generado bajo los lineamientos establecidos en la Providencia Administrativa SNAT/2011/00071 dictada por el SENIAT. Los datos aquí contenidos reflejan la operatividad fiscal de la empresa según el Artículo 75 del Reglamento General de la Ley de Impuesto al Valor Agregado. Cualquier modificación posterior al cierre del período requerirá la emisión de una declaración sustitutiva ante el portal fiscal.
                </p>
</div>
<div className="flex items-center gap-4 bg-stone-900 p-4 border border-stone-800">
<div className="text-right">
<div className="text-[9px] text-stone-500 uppercase tracking-widest">Sello Digital de Integridad</div>
<div className="text-[10px] font-mono text-lime-400">SHA256: 8f2a...1e4c</div>
</div>
<div className="w-12 h-12 border border-stone-700 p-1">
<img alt="Digital Seal" className="w-full h-full opacity-50" data-alt="Abstract geometric QR-like code icon in lime green and charcoal gray representing a digital fiscal security seal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeycSSCDPz1Rn_yViXxosODPq4PPfcufik4ezJTpsLut0PCx8anvncDVqhhltI_Xv3ci2NS7YXEjuRX4CxsC8sYD5tNIE21S-Mejz4iEQ67w5Zj6VcBcoztCJ1Lb1D-mubVuvpbka77_jbTqTEkMIbVOT7VdbzVstM0Km_KiO_DfUIUMehhpkxf7yiRhmf7HKvVO22gpfpgLLvPqpjG-7gACrbNTbAm8tBNYJL86uSsXjOpfNIY9pXijoqVD0Aw0m0504drjhnKDM"/>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-lime-400 hover:bg-lime-300 text-stone-950 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group z-50">
<span className="material-symbols-outlined text-3xl font-bold" >add</span>
<span className="absolute right-16 bg-stone-900 text-white text-[10px] font-headline uppercase tracking-widest px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-800">Cargar Factura</span>
</button>

        </div>
    );
};
