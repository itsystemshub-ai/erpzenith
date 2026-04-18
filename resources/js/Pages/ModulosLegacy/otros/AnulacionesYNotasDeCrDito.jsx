import React from 'react';
import { Link } from '@inertiajs/react';

export default function AnulacionesYNotasDeCrDito() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center h-16 px-6 w-full">
<div className="flex items-center gap-8">
<span className="text-2xl font-bold tracking-tighter text-lime-400 font-['Space_Grotesk'] uppercase tracking-tight">TITAN INDUSTRIAL ERP</span>
<div className="hidden md:flex gap-6 items-center">
<a className="font-['Space_Grotesk'] uppercase tracking-tight text-stone-400 hover:text-stone-100 transition-all duration-200" href="#">Inventario</a>
<a className="font-['Space_Grotesk'] uppercase tracking-tight text-lime-400 border-b-2 border-lime-400 pb-1" href="#">Ventas</a>
<a className="font-['Space_Grotesk'] uppercase tracking-tight text-stone-400 hover:text-stone-100 transition-all duration-200" href="#">Bancos</a>
<a className="font-['Space_Grotesk'] uppercase tracking-tight text-stone-400 hover:text-stone-100 transition-all duration-200" href="#">RRHH</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-lime-500 hover:bg-stone-800/50 transition-all duration-200 active:scale-95"><span className="material-symbols-outlined">notifications</span></button>
<button className="p-2 text-lime-500 hover:bg-stone-800/50 transition-all duration-200 active:scale-95"><span className="material-symbols-outlined">settings</span></button>
<button className="p-2 text-lime-500 hover:bg-stone-800/50 transition-all duration-200 active:scale-95"><span className="material-symbols-outlined">account_circle</span></button>
</div>
</nav>
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-full w-64 z-40 bg-stone-900 pt-20 pb-6 flex flex-col font-['Inter'] font-medium text-sm">
<div className="px-6 mb-8">
<p className="text-stone-500 text-xs tracking-widest uppercase font-bold mb-1">OPERACIONES</p>
<p className="text-lime-500 text-xs">Terminal Central</p>
</div>
<div className="flex-1 overflow-y-auto">
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">storefront</span>
<span>E-Commerce</span>
</a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span>Inventario</span>
</a>
<a className="bg-lime-900/20 text-lime-400 border-r-4 border-lime-500 px-4 py-3 flex items-center gap-3 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">cancel_presentation</span>
<span>Ventas</span>
</a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span>Bancos</span>
</a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">badge</span>
<span>Portal Empleado</span>
</a>
</div>
<div className="mt-auto pt-6 border-t border-stone-800 px-4">
<button className="w-full bg-lime-500 text-stone-950 py-3 font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-4 hover:bg-lime-400 active:scale-95 transition-all">
<span className="material-symbols-outlined" >add_circle</span>
                NUEVA ACTA
            </button>
<a className="text-stone-400 px-4 py-2 flex items-center gap-3 hover:text-stone-100 transition-colors" href="#"><span className="material-symbols-outlined">support_agent</span> Soporte</a>
<a className="text-stone-400 px-4 py-2 flex items-center gap-3 hover:text-stone-100 transition-colors" href="#"><span className="material-symbols-outlined">logout</span> Cerrar Sesión</a>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
{/* Comentario remanente */}
<header className="mb-12 relative">
<div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-container/10 blur-3xl rounded-full"></div>
<h1 className="text-5xl font-extrabold headline uppercase tracking-tight text-on-surface mb-2">Módulo de Ventas</h1>
<div className="flex items-center gap-4">
<span className="bg-primary px-3 py-1 text-on-primary text-xs font-bold tracking-widest uppercase">Anulaciones</span>
<span className="text-on-surface-variant font-label text-sm uppercase tracking-wider">Gestión de Notas de Crédito Fiscales</span>
</div>
</header>
{/* Comentario remanente */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
{/* Comentario remanente */}
<section className="lg:col-span-4 bg-surface-container-low p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">search</span>
</div>
<h2 className="text-xl font-bold headline uppercase mb-6 tracking-wide">Buscar Factura</h2>
<div className="space-y-4">
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Número de Documento</label>
<div className="relative">
<input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary py-4 px-4 font-mono text-sm" placeholder="FAC-2024-0042" type="text"/>
<button className="absolute right-2 top-2 p-2 bg-primary text-on-primary">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="pt-4 border-t border-outline-variant/20">
<p className="text-xs text-on-surface-variant mb-4 italic">Resultados recientes</p>
<div className="space-y-2">
<div className="bg-surface-container-lowest p-3 flex justify-between items-center cursor-pointer hover:bg-primary-container/5 transition-colors">
<div>
<p className="font-bold text-sm">FAC-2024-0041</p>
<p className="text-[10px] text-on-surface-variant">CLIENTE: ACERO-TEC S.A.</p>
</div>
<span className="text-primary font-bold text-xs">$12,450.00</span>
</div>
</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="lg:col-span-8 bg-surface-container-lowest p-8 border-l-4 border-primary">
<div className="flex justify-between items-start mb-8">
<div>
<h2 className="text-3xl font-bold headline uppercase tracking-tighter">Detalle de Operación</h2>
<p className="text-on-surface-variant font-label text-sm uppercase">Seleccionada: FAC-2024-0042</p>
</div>
<div className="text-right">
<p className="text-[10px] font-bold uppercase text-on-surface-variant">Total Facturado</p>
<p className="text-4xl font-bold headline text-primary tracking-tighter">$45,820.50</p>
</div>
</div>
<div className="grid grid-cols-2 gap-8 mb-8">
<div className="bg-surface-container p-6">
<label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">Motivo de Anulación</label>
<select className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary py-3 px-4 text-sm font-medium">
<option>Devolución de Mercancía</option>
<option>Error en Datos Fiscales</option>
<option>Error en Precios/Descuentos</option>
<option>Cancelación de Pedido</option>
</select>
</div>
<div className="bg-surface-container p-6">
<label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">Tipo de Nota</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="text-primary focus:ring-primary" name="nt" type="radio"/>
<span className="text-sm font-bold uppercase">Nota de Crédito</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="text-primary focus:ring-primary" name="nt" type="radio"/>
<span className="text-sm font-bold uppercase">Anulación Total</span>
</label>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mb-8 overflow-hidden">
<table className="w-full text-left">
<thead className="bg-surface-container-low">
<tr>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest">Partida / SKU</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest">Cant. Orig</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest">Cant. a Devolver</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest">Precio Unit.</th>
<th className="p-4 text-[10px] font-bold uppercase tracking-widest text-right">Subtotal</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="bg-surface border-b border-surface-container">
<td className="p-4">
<div className="font-bold">EJE-440-CROMO</div>
<div className="text-[10px] text-on-surface-variant">Eje de transmisión cromado 440mm</div>
</td>
<td className="p-4 font-mono">10 UN</td>
<td className="p-4">
<input className="w-16 bg-surface-container-highest border-none py-1 px-2 text-center text-sm font-bold text-primary" type="number" value="2"/>
</td>
<td className="p-4">$1,200.00</td>
<td className="p-4 text-right font-bold">$2,400.00</td>
</tr>
<tr className="bg-surface-container-low/30 border-b border-surface-container">
<td className="p-4">
<div className="font-bold">BRIDA-ANSI-600</div>
<div className="text-[10px] text-on-surface-variant">Brida industrial acero carbón</div>
</td>
<td className="p-4 font-mono">5 UN</td>
<td className="p-4">
<input className="w-16 bg-surface-container-highest border-none py-1 px-2 text-center text-sm font-bold text-primary" type="number" value="5"/>
</td>
<td className="p-4">$850.00</td>
<td className="p-4 text-right font-bold">$4,250.00</td>
</tr>
</tbody>
</table>
</div>
<div className="flex justify-end gap-4">
<button className="px-8 py-3 bg-surface-container-high text-on-surface font-bold uppercase tracking-wider text-sm hover:bg-surface-container-highest transition-colors">Cancelar</button>
<button className="px-8 py-3 bg-primary text-on-primary font-bold uppercase tracking-wider text-sm shadow-[0_10px_20px_-10px_rgba(73,104,0,0.5)] hover:scale-[1.02] transition-transform flex items-center gap-2">
<span className="material-symbols-outlined text-sm">receipt_long</span>
                        Generar Nota de Crédito
                    </button>
</div>
</section>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-stone-900 text-stone-100 p-6 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-lime-400" >inventory</span>
<h3 className="font-bold headline uppercase text-xs tracking-widest">Reingreso a Inventario</h3>
</div>
<p className="text-sm text-stone-400 leading-relaxed mb-6">Procesando actualización automática de stock para Terminal Central - Pasillo A4.</p>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-[10px] text-lime-500 uppercase font-bold">+7 Unidades</p>
<p className="text-xs text-stone-500">Estado: Sincronizando</p>
</div>
<span className="material-symbols-outlined text-lime-900 text-4xl">sync</span>
</div>
</div>
<div className="bg-surface-container p-6 md:col-span-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -skew-x-12 translate-x-1/2"></div>
<h3 className="font-bold headline uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">verified</span>
                    Validez Fiscal Digital
                </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="border-l-2 border-outline-variant pl-4">
<p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Folio Fiscal NC</p>
<p className="text-xs font-mono font-bold">NC-2024-8849-01</p>
</div>
<div className="border-l-2 border-outline-variant pl-4">
<p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Estatus SAT</p>
<p className="text-xs font-bold text-primary uppercase">Validado</p>
</div>
<div className="border-l-2 border-outline-variant pl-4">
<p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Timbrado</p>
<p className="text-xs font-bold">14/MAY 14:22</p>
</div>
<div className="border-l-2 border-outline-variant pl-4">
<p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Certificado</p>
<p className="text-xs font-mono">000010000005</p>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-12 h-64 w-full relative overflow-hidden rounded-lg">
<img alt="Professional industrial factory interior with high precision machining and steel structures in soft focus" className="w-full h-full object-cover grayscale opacity-30 mix-blend-multiply" data-alt="dramatic industrial factory floor with machinery and structural steel beams in soft lighting with lime green accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP-xFwXuOLFR9KrqG4Dab4TNSBBJgSVkIRB0SfP1fxKTex8r3VOjHY7TRjKP1IgwrLtTEhBIl2wTyvuokXJL2GULbftvO5R9P0HrkPIzW5DZ3xQFhbVBUpGRsU0ZkaqC5bmVEAHYGCaChAnLHqx_PyMJIdVatXzVoXw78OTl11AZtVAXAoOXwhmtxGKuV-Gx8Y68HDy2vD5Bdd6cacXULIb_ZPtjsxvMh2JwiDUlQGUv23CLwCsvlQBaO6J6GcAuOjW8V-eMizSAM"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-8">
<p className="headline font-bold text-4xl opacity-10 uppercase tracking-[0.2em]">Titan Engineering</p>
</div>
</div>
</main>
{/* Comentario remanente */}
<div className="fixed bottom-0 left-64 right-0 bg-stone-950 text-white p-4 flex justify-between items-center z-30">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></div>
<p className="text-xs font-label uppercase tracking-widest text-stone-400">Terminal Activa: <span className="text-stone-100">TX-449-OP</span></p>
</div>
<div className="flex gap-6">
<div className="text-right">
<p className="text-[10px] text-stone-500 uppercase font-bold">Último Folio Emitido</p>
<p className="text-xs font-bold text-lime-400">NC-2024-8848</p>
</div>
<div className="text-right">
<p className="text-[10px] text-stone-500 uppercase font-bold">Operador</p>
<p className="text-xs font-bold">Admin_Sist_01</p>
</div>
</div>
</div>

        </div>
    );
};
