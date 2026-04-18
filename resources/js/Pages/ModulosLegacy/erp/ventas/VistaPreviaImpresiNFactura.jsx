import React from 'react';
import { Link } from '@inertiajs/react';

export default function VistaPreviaImpresiNFactura() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="no-print bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl docked full-width top-0 sticky z-40">
<div className="flex justify-between items-center w-full px-6 h-16">
<div className="flex items-center gap-4">
<span className="text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 font-['Space_Grotesk'] uppercase">TITAN INDUSTRIAL</span>
</div>
<div className="flex items-center gap-6">
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-headline font-bold uppercase tracking-tight hover:bg-primary-container transition-colors active:scale-95 duration-150" onclick="window.print()">
<span className="material-symbols-outlined text-sm">print</span>
<span>Imprimir Factura</span>
</button>
<div className="flex items-center gap-2 text-stone-500">
<span className="material-symbols-outlined hover:bg-stone-100 p-2 cursor-pointer transition-colors">notifications</span>
<span className="material-symbols-outlined hover:bg-stone-100 p-2 cursor-pointer transition-colors">settings</span>
</div>
</div>
</div>
<div className="bg-stone-200 dark:bg-stone-800 h-[1px] w-full"></div>
</header>
<main className="flex min-h-screen">
{/* Comentario remanente */}
<aside className="no-print h-screen w-64 fixed left-0 top-0 bg-stone-100 dark:bg-stone-950 flex flex-col h-full py-6 px-4 z-30">
<div className="mb-8">
<div className="text-lime-700 dark:text-lime-500 font-['Space_Grotesk'] font-black text-lg">OPERACIONES</div>
<div className="text-xs text-stone-500 uppercase tracking-widest font-medium">Planta Norte</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-200/50 transition-all rounded" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-900 bg-stone-200 font-bold border-r-4 border-lime-500 transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-medium text-sm">Ventas</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-200/50 transition-all rounded" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-medium text-sm">Facturación</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-200/50 transition-all rounded" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-medium text-sm">Inventario</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-stone-200">
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-200/50 transition-all rounded" href="#">
<span className="material-symbols-outlined">contact_support</span>
<span className="font-medium text-sm">Soporte</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<section className="flex-1 ml-0 md:ml-64 p-4 md:p-8 flex flex-col items-center">
{/* Comentario remanente */}
<div className="print-area bg-white text-on-surface w-full max-w-[210mm] min-h-[297mm] p-8 technical-border shadow-sm mb-12 page-break relative overflow-hidden">
{/* Comentario remanente */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 pointer-events-none opacity-[0.03]">
<span className="text-[12rem] font-headline font-black uppercase">ORIGINAL</span>
</div>
{/* Comentario remanente */}
<div className="flex justify-between items-start mb-8">
<div className="w-1/2">
<h1 className="font-headline font-black text-2xl tracking-tighter mb-1">TITAN INDUSTRIAL C.A.</h1>
<p className="text-[10px] leading-tight font-mono uppercase">
                            RIF: J-12345678-9<br/>
                            AV. INTERCOMUNAL SECTOR LOS PINOS, GALPON 14-B.<br/>
                            VALENCIA, EDO. CARABOBO - VENEZUELA.<br/>
                            TELÉFONOS: (0241) 555-0199 / 555-0200<br/>
                            EMAIL: VENTAS@TITAN-INDUSTRIAL.COM
                        </p>
</div>
<div className="w-1/3 text-right">
<div className="technical-border p-2 mb-2">
<h2 className="font-headline font-bold text-lg uppercase leading-none">FACTURA</h2>
</div>
<div className="space-y-1 text-[11px] font-mono">
<p>FECHA EMISIÓN: <span className="font-bold">24/05/2024</span></p>
<p>Nro. FACTURA: <span className="font-bold">00004582</span></p>
<p className="text-error font-bold">Nro. CONTROL: 00-019284</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="technical-border p-4 mb-6">
<div className="grid grid-cols-2 gap-4 text-[11px] font-mono uppercase">
<div>
<p className="text-[9px] text-secondary mb-1">RAZÓN SOCIAL / NOMBRE:</p>
<p className="font-bold border-b border-on-surface/20 pb-1">CONSTRUCTORA DEL CENTRO, S.A.</p>
</div>
<div>
<p className="text-[9px] text-secondary mb-1">RIF / C.I.:</p>
<p className="font-bold border-b border-on-surface/20 pb-1">J-98765432-1</p>
</div>
<div className="col-span-2">
<p className="text-[9px] text-secondary mb-1">DIRECCIÓN FISCAL:</p>
<p className="font-bold border-b border-on-surface/20 pb-1">CALLE 12, EDIFICIO INDUSTRIAL BETA, PISO 2, CARACAS.</p>
</div>
<div>
<p className="text-[9px] text-secondary mb-1">TELÉFONO:</p>
<p className="font-bold border-b border-on-surface/20 pb-1">0212-999-0000</p>
</div>
<div>
<p className="text-[9px] text-secondary mb-1">CONDICIÓN DE PAGO:</p>
<p className="font-bold border-b border-on-surface/20 pb-1">CRÉDITO 15 DÍAS</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="technical-border mb-6 min-h-[400px]">
<table className="w-full text-left text-[11px] font-mono border-collapse">
<thead className="bg-surface-container-low border-b border-on-surface">
<tr>
<th className="p-2 border-r border-on-surface w-16">CÓDIGO</th>
<th className="p-2 border-r border-on-surface">DESCRIPCIÓN</th>
<th className="p-2 border-r border-on-surface text-center w-12">CANT.</th>
<th className="p-2 border-r border-on-surface text-right w-24">P. UNITARIO</th>
<th className="p-2 text-right w-24">TOTAL</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-on-surface/10">
<td className="p-2 border-r border-on-surface/10">ENG-902</td>
<td className="p-2 border-r border-on-surface/10">PISTÓN DE ALTA PRESIÓN - SERIE INDUSTRIAL TITAN</td>
<td className="p-2 border-r border-on-surface/10 text-center">4</td>
<td className="p-2 border-r border-on-surface/10 text-right">450,00</td>
<td className="p-2 text-right">1.800,00</td>
</tr>
<tr className="border-b border-on-surface/10">
<td className="p-2 border-r border-on-surface/10">SL-044</td>
<td className="p-2 border-r border-on-surface/10">EMPACADURA TÉRMICA DE NEOPRENO REFORZADO</td>
<td className="p-2 border-r border-on-surface/10 text-center">2</td>
<td className="p-2 border-r border-on-surface/10 text-right">125,50</td>
<td className="p-2 text-right">251,00</td>
</tr>
<tr className="border-b border-on-surface/10">
<td className="p-2 border-r border-on-surface/10">OIL-MAX</td>
<td className="p-2 border-r border-on-surface/10">LUBRICANTE SINTÉTICO GRADO PESADO (TAMBOR 20L)</td>
<td className="p-2 border-r border-on-surface/10 text-center">1</td>
<td className="p-2 border-r border-on-surface/10 text-right">890,00</td>
<td className="p-2 text-right">890,00</td>
</tr>
{/* Comentario remanente */}
<tr>
<td className="p-2 border-r border-on-surface/10 h-64"></td>
<td className="p-2 border-r border-on-surface/10"></td>
<td className="p-2 border-r border-on-surface/10"></td>
<td className="p-2 border-r border-on-surface/10"></td>
<td className="p-2"></td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="flex justify-end mb-8">
<div className="w-1/2 space-y-1">
<div className="flex justify-between text-[11px] font-mono">
<span>SUB-TOTAL:</span>
<span className="font-bold">2.941,00</span>
</div>
<div className="flex justify-between text-[11px] font-mono">
<span>BASE IMPONIBLE (G) 16%:</span>
<span className="font-bold">2.941,00</span>
</div>
<div className="flex justify-between text-[11px] font-mono">
<span>I.V.A. (16%):</span>
<span className="font-bold">470,56</span>
</div>
<div className="flex justify-between text-[13px] font-mono border-t border-on-surface pt-1 mt-1">
<span className="font-bold uppercase">TOTAL FACTURA:</span>
<span className="font-bold">3.411,56</span>
</div>
<div className="text-[9px] font-mono text-right text-secondary mt-2">
                            PRECIOS EXPRESADOS EN MONEDA DE CURSO LEGAL (Bs.)
                        </div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-2 gap-8 mb-8 mt-12">
<div className="text-center">
<div className="border-t border-on-surface mt-8 mx-auto w-48"></div>
<p className="text-[9px] font-mono uppercase mt-1">RECEPTOR (FIRMA Y SELLO)</p>
</div>
<div className="text-center">
<div className="border-t border-on-surface mt-8 mx-auto w-48"></div>
<p className="text-[9px] font-mono uppercase mt-1">EMISOR (FIRMA Y SELLO)</p>
</div>
</div>
{/* Comentario remanente */}
<footer className="absolute bottom-6 left-8 right-8">
<div className="dashed-divider mb-2"></div>
<div className="flex justify-between items-end text-[8px] font-mono uppercase opacity-70">
<div className="max-w-[70%]">
                            IMPRENTA EL TREBOL AZUL, C.A. RIF: J-000111222-0. PROVIDENCIA ADMINISTRATIVA No. SENIAT/INTI/2023/0014.
                            FECHA DE EMISIÓN: 10/01/2024. DESDE 00004001 HASTA 00005000.
                        </div>
<div className="text-right">
                            ORIGINAL
                        </div>
</div>
</footer>
</div>
{/* Comentario remanente */}
<div className="print-area bg-white text-on-surface w-full max-w-[210mm] min-h-[297mm] p-8 technical-border shadow-sm mb-12 page-break relative overflow-hidden">
{/* Comentario remanente */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 pointer-events-none opacity-[0.03]">
<span className="text-[10rem] font-headline font-black uppercase text-secondary">COPIA</span>
</div>
{/* Comentario remanente */}
<div className="flex justify-between items-start mb-8">
<div className="w-1/2">
<h1 className="font-headline font-black text-2xl tracking-tighter mb-1">TITAN INDUSTRIAL C.A.</h1>
<p className="text-[10px] leading-tight font-mono uppercase">RIF: J-12345678-9</p>
</div>
<div className="w-1/3 text-right">
<h2 className="font-headline font-bold text-lg uppercase leading-none mb-2">FACTURA (COPIA)</h2>
<div className="text-[11px] font-mono">
<p>Nro. FACTURA: <span className="font-bold">00004582</span></p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="technical-border p-4 mb-4">
<p className="text-[11px] font-mono"><span className="font-bold">CLIENTE:</span> CONSTRUCTORA DEL CENTRO, S.A.</p>
<p className="text-[11px] font-mono"><span className="font-bold">RIF:</span> J-98765432-1</p>
</div>
<div className="technical-border mb-4 min-h-[600px]">
<table className="w-full text-left text-[11px] font-mono border-collapse">
<thead className="bg-surface-container-low border-b border-on-surface">
<tr>
<th className="p-2 border-r border-on-surface">CÓDIGO</th>
<th className="p-2 border-r border-on-surface">DESCRIPCIÓN</th>
<th className="p-2 border-r border-on-surface text-center">CANT.</th>
<th className="p-2 text-right">TOTAL</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-on-surface/10">
<td className="p-2 border-r border-on-surface/10">ENG-902</td>
<td className="p-2 border-r border-on-surface/10">PISTÓN DE ALTA PRESIÓN - SERIE INDUSTRIAL TITAN</td>
<td className="p-2 border-r border-on-surface/10 text-center">4</td>
<td className="p-2 text-right">1.800,00</td>
</tr>
<tr className="border-b border-on-surface/10">
<td className="p-2 border-r border-on-surface/10">SL-044</td>
<td className="p-2 border-r border-on-surface/10">EMPACADURA TÉRMICA DE NEOPRENO REFORZADO</td>
<td className="p-2 border-r border-on-surface/10 text-center">2</td>
<td className="p-2 text-right">251,00</td>
</tr>
<tr className="border-b border-on-surface/10">
<td className="p-2 border-r border-on-surface/10">OIL-MAX</td>
<td className="p-2 border-r border-on-surface/10">LUBRICANTE SINTÉTICO GRADO PESADO (TAMBOR 20L)</td>
<td className="p-2 border-r border-on-surface/10 text-center">1</td>
<td className="p-2 text-right">890,00</td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<footer className="absolute bottom-6 left-8 right-8">
<div className="dashed-divider mb-2"></div>
<div className="flex justify-between items-end text-[8px] font-mono uppercase opacity-70">
<div>COPIA CONTABILIDAD - SIN VALOR FISCAL PARA EL RECEPTOR</div>
<div className="text-right">COPIA 1</div>
</div>
</footer>
</div>
{/* Comentario remanente */}
<button className="no-print fixed bottom-10 right-10 bg-primary-container text-on-primary-container h-16 w-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
<span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">download</span>
</button>
</section>
</main>
{/* Comentario remanente */}
<div className="no-print fixed bottom-6 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-4 py-2 rounded-full font-mono uppercase tracking-widest opacity-80 z-50">
        MODO VISTA PREVIA: OPTIMIZADO PARA AHORRO DE TINTA
    </div>

        </div>
    );
};
