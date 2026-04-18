import React from 'react';
import { Link } from '@inertiajs/react';

export default function AjustesInventarioActas() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
<nav className="fixed top-0 w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center h-16 px-6">
<div className="text-2xl font-bold tracking-tighter text-lime-400 font-['Space_Grotesk'] uppercase">TITAN INDUSTRIAL ERP</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-lime-400 border-b-2 border-lime-400 pb-1 font-['Space_Grotesk'] uppercase tracking-tight text-sm" href="#">Inventario</a>
<a className="text-stone-400 hover:text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight text-sm transition-all duration-200" href="#">Ventas</a>
<a className="text-stone-400 hover:text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight text-sm transition-all duration-200" href="#">Bancos</a>
<a className="text-stone-400 hover:text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight text-sm transition-all duration-200" href="#">RRHH</a>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-400 hover:bg-stone-800/50 p-2 rounded transition-all duration-200 active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-stone-400 hover:bg-stone-800/50 p-2 rounded transition-all duration-200 active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="text-stone-400 hover:bg-stone-800/50 p-2 rounded transition-all duration-200 active:scale-95">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</nav>
<aside className="fixed left-0 top-0 h-full w-64 z-40 bg-stone-900 hidden md:flex flex-col pt-20 pb-6 border-r border-stone-800">
<div className="px-6 mb-8">
<div className="text-stone-500 text-[10px] tracking-widest uppercase mb-1">Terminal Central</div>
<div className="text-white font-headline text-lg font-bold">OPERACIONES</div>
</div>
<nav className="flex-1 px-2 space-y-1">
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined">storefront</span> E-Commerce
            </a>
<a className="bg-lime-900/20 text-lime-400 border-r-4 border-lime-500 px-4 py-3 flex items-center gap-3 font-medium text-sm" href="#">
<span className="material-symbols-outlined">inventory_2</span> Inventario
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined">cancel_presentation</span> Ventas
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined">account_balance</span> Bancos
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200 font-medium text-sm" href="#">
<span className="material-symbols-outlined">badge</span> Portal Empleado
            </a>
</nav>
<div className="px-4 mt-auto">
<button className="w-full bg-primary text-on-primary py-3 rounded-none font-headline font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-[0.98]">
<span className="material-symbols-outlined text-sm">add</span> NUEVA ACTA
            </button>
<div className="mt-6 pt-6 border-t border-stone-800 space-y-1">
<a className="text-stone-400 px-4 py-2 flex items-center gap-3 hover:text-stone-100 text-xs" href="#">
<span className="material-symbols-outlined text-sm">support_agent</span> Soporte
                </a>
<a className="text-stone-400 px-4 py-2 flex items-center gap-3 hover:text-red-400 text-xs" href="#">
<span className="material-symbols-outlined text-sm">logout</span> Cerrar Sesión
                </a>
</div>
</div>
</aside>
<main className="md:ml-64 pt-20 p-6 min-h-screen">
<div className="max-w-7xl mx-auto">
<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="inline-block px-2 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-widest mb-2">Fiscal Compliance</div>
<h1 className="text-4xl font-headline font-extrabold tracking-tighter uppercase leading-none">Ajustes de Inventario</h1>
<p className="text-secondary mt-2 max-w-xl text-sm leading-relaxed">Registro mandatorio de mermas, daños y ajustes físicos. Cumplimiento estricto con el Artículo 177 de la Ley de Impuesto Sobre la Renta (ISLR).</p>
</div>
<div className="flex gap-3">
<div className="bg-surface-container px-4 py-2 flex flex-col items-end">
<span className="text-[10px] text-secondary font-bold uppercase">Último Cierre</span>
<span className="font-headline font-bold">28 OCT 2023</span>
</div>
<div className="bg-surface-container px-4 py-2 flex flex-col items-end">
<span className="text-[10px] text-secondary font-bold uppercase">Variación Acum.</span>
<span className="font-headline font-bold text-error">-2.40%</span>
</div>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<section className="lg:col-span-8 space-y-6">
<div className="bg-surface-container-lowest p-8 shadow-sm">
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-6 bg-primary"></span>
<h2 className="font-headline font-bold text-xl uppercase tracking-tight">Nuevo Registro de Ajuste</h2>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-[10px] font-bold text-secondary uppercase tracking-wider">Tipo de Ajuste</label>
<select className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary text-sm p-3 font-medium">
<option>Merma por Operación</option>
<option>Pérdida por Daño/Rotura</option>
<option>Diferencia de Conteo Físico</option>
<option>Vencimiento de Insumo</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-[10px] font-bold text-secondary uppercase tracking-wider">Almacén de Origen</label>
<select className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary text-sm p-3 font-medium">
<option>Planta Principal - A1</option>
<option>Centro Logístico Norte</option>
<option>Depósito Externo</option>
</select>
</div>
</div>
<div className="bg-surface-container-low p-6 space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Artículos a Ajustar</h3>
<button className="text-primary text-[10px] font-bold hover:underline flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-xs">add_circle</span> AGREGAR ITEM
                                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-[10px] font-bold text-secondary uppercase border-b border-outline-variant/30">
<th className="py-2">SKU / Componente</th>
<th className="py-2">Stock Actual</th>
<th className="py-2">Cant. Ajuste</th>
<th className="py-2">Nuevo Stock</th>
<th className="py-2"></th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-surface-container">
<td className="py-4">
<div className="font-bold">ENG-992-TX</div>
<div className="text-[10px] text-secondary">Válvula de Presión Hidráulica</div>
</td>
<td className="py-4">154 units</td>
<td className="py-4">
<input className="w-20 bg-white border border-outline-variant text-xs p-1" type="number" value="-2"/>
</td>
<td className="py-4 font-bold">152</td>
<td className="py-4 text-right">
<button className="text-secondary hover:text-error"><span className="material-symbols-outlined text-sm">delete</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="space-y-2">
<label className="block text-[10px] font-bold text-secondary uppercase tracking-wider">Justificación Administrativa (Art. 177 ISLR)</label>
<textarea className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary text-sm p-3" placeholder="Describa el motivo técnico del ajuste..." rows="3"></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<label className="block text-[10px] font-bold text-secondary uppercase tracking-wider">Soporte Digital (Acta PDF)</label>
<div className="border-2 border-dashed border-outline-variant bg-surface-container-low p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-3xl text-secondary mb-2">upload_file</span>
<p className="text-[10px] font-bold uppercase">Adjuntar Acta Administrativa</p>
<p className="text-[9px] text-secondary mt-1">PDF, JPG (MAX 5MB)</p>
</div>
</div>
<div className="flex flex-col justify-end gap-3">
<button className="w-full bg-primary text-on-primary py-4 font-headline font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95" type="submit">
                                        Procesar Ajuste Fiscal
                                    </button>
<button className="w-full bg-surface-container-high text-secondary py-3 font-headline font-bold uppercase tracking-widest text-xs border border-transparent hover:border-outline-variant transition-all" type="button">
                                        Guardar Borrador
                                    </button>
</div>
</div>
</form>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-lowest p-6 border-l-4 border-primary">
<span className="material-symbols-outlined text-primary mb-2">verified_user</span>
<h4 className="text-[10px] font-bold uppercase text-secondary">Integridad de Datos</h4>
<p className="text-xs mt-1">Todos los ajustes son firmados digitalmente y sellados cronológicamente.</p>
</div>
<div className="bg-surface-container-lowest p-6 border-l-4 border-primary">
<span className="material-symbols-outlined text-primary mb-2">policy</span>
<h4 className="text-[10px] font-bold uppercase text-secondary">Art. 177 ISLR</h4>
<p className="text-xs mt-1">Cumplimiento automático de libros de inventario permanentes.</p>
</div>
<div className="bg-surface-container-lowest p-6 border-l-4 border-primary">
<span className="material-symbols-outlined text-primary mb-2">analytics</span>
<h4 className="text-[10px] font-bold uppercase text-secondary">Trazabilidad Total</h4>
<p className="text-xs mt-1">Historial inmutable desde la creación hasta la aprobación contable.</p>
</div>
</div>
</section>
<section className="lg:col-span-4 space-y-6">
<div className="bg-stone-900 text-white p-6 relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-headline font-bold text-lg uppercase mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-lime-400">history</span>
                                Actas Recientes
                            </h2>
<div className="space-y-4">
<div className="border-l-2 border-lime-500 pl-4 py-1">
<div className="flex justify-between items-start">
<span className="text-[10px] font-bold text-lime-400 uppercase tracking-tighter">AJU-2023-089</span>
<span className="px-2 py-0.5 bg-lime-500/20 text-lime-400 text-[8px] font-bold uppercase rounded-full">Aprobado</span>
</div>
<p className="text-xs font-bold mt-1">Mermas de Producción Q3</p>
<p className="text-[10px] text-stone-400">Responsable: Ing. M. Salazar</p>
</div>
<div className="border-l-2 border-stone-600 pl-4 py-1">
<div className="flex justify-between items-start">
<span className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">AJU-2023-090</span>
<span className="px-2 py-0.5 bg-stone-700 text-stone-300 text-[8px] font-bold uppercase rounded-full">Pendiente</span>
</div>
<p className="text-xs font-bold mt-1">Ajuste Inventario Anual</p>
<p className="text-[10px] text-stone-400">Responsable: Admin Central</p>
</div>
<div className="border-l-2 border-lime-500 pl-4 py-1">
<div className="flex justify-between items-start">
<span className="text-[10px] font-bold text-lime-400 uppercase tracking-tighter">AJU-2023-087</span>
<span className="px-2 py-0.5 bg-lime-500/20 text-lime-400 text-[8px] font-bold uppercase rounded-full">Aprobado</span>
</div>
<p className="text-xs font-bold mt-1">Daño por Transporte Aéreo</p>
<p className="text-[10px] text-stone-400">Responsable: Logística Int.</p>
</div>
</div>
<button className="w-full mt-6 py-2 border border-stone-700 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors">
                                Ver Todo el Historial
                            </button>
</div>
<div className="absolute -right-10 -bottom-10 opacity-10">
<span className="material-symbols-outlined text-[160px]">description</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 shadow-sm overflow-hidden group">
<h3 className="font-headline font-bold text-sm uppercase mb-4">Métricas de Control</h3>
<div className="aspect-video bg-surface-container relative">
<img className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="Technical data visualization dashboard with line graphs showing inventory shrinkage trends in a modern dark industrial interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAwV04LJtOSEN-d15SJByiTCJIxfQOgTOlDNO4WEgmMNRfUCX_XqbdzsNDSdx_YfGn-T5i6MTHznikyQXEtnxWGZemRXxADtyOfXJ8SM58sH_FAzhGYVu1l2EpE0BN_9XOEFKvYCBWk7TwjehJEiJWHnxqJRE3S7XxYrzaRfNKA0NEY8Rpr5IZj5cJHfjwmebMema3XxKV-AzaVIOb7NMjtEImjYtJ7HxRoOtJmFBS0E5dIT8TiTIvzApEWNIT3VSB5THa2gntm2s"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-[10px] font-bold uppercase text-secondary">Tasa de Merma Industrial</p>
<p className="text-2xl font-headline font-extrabold">0.84%</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="p-3 bg-surface-container-low">
<p className="text-[9px] font-bold text-secondary uppercase">Valor Ajustes</p>
<p className="text-sm font-headline font-bold">$12,450</p>
</div>
<div className="p-3 bg-surface-container-low">
<p className="text-[9px] font-bold text-secondary uppercase">Items Afect.</p>
<p className="text-sm font-headline font-bold">428 pts</p>
</div>
</div>
</div>
<div className="bg-primary-container p-6">
<div className="flex items-start gap-4">
<div className="bg-primary p-2">
<span className="material-symbols-outlined text-white">info</span>
</div>
<div>
<h4 className="text-xs font-bold uppercase text-on-primary-container">Nota de Auditoría</h4>
<p className="text-[10px] text-on-primary-container/80 mt-1 leading-normal italic">"La falta de actas administrativas firmadas para justificar mermas superiores al 2% puede generar reparos fiscales inmediatos."</p>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
<footer className="md:ml-64 p-8 border-t border-surface-container mt-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                TITAN ERP v4.2.0 • INDUSTRIAL LICENSE • 2023
            </div>
<div className="flex gap-6">
<a className="text-[10px] font-bold text-secondary uppercase hover:text-primary" href="#">Centro de Ayuda</a>
<a className="text-[10px] font-bold text-secondary uppercase hover:text-primary" href="#">Políticas de Privacidad</a>
<a className="text-[10px] font-bold text-secondary uppercase hover:text-primary" href="#">Auditoría Logs</a>
</div>
</div>
</footer>

        </div>
    );
};
