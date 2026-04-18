import React from 'react';
import { Link } from '@inertiajs/react';

export default function RegistroDeFacturaDeCompra() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<aside className="bg-stone-900 h-screen w-64 left-0 top-0 fixed flex flex-col h-full py-8 gap-4 shadow-2xl z-40">
<div className="px-6 mb-8">
<h1 className="text-lime-400 font-black text-xl tracking-tighter headline">COMPRAS_MOD</h1>
<p className="text-stone-500 text-[10px] font-mono tracking-widest">V1.0.2_ACTIVE</p>
</div>
<nav className="flex-1 flex flex-col">
<a className="flex items-center gap-3 px-6 py-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 ease-in-out font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Indicadores</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 bg-stone-950 text-lime-400 border-l-4 border-lime-400 transition-all duration-200 ease-in-out font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Facturación</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 ease-in-out font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span>Libro SENIAT</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 ease-in-out font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="factory">factory</span>
<span>Proveedores</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 ease-in-out font-space-grotesk font-medium" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Cuentas por Pagar</span>
</a>
</nav>
<div className="px-6 mt-auto">
<button className="w-full py-3 bg-stone-800 text-lime-400 text-sm font-bold uppercase tracking-wider rounded-lg border border-lime-400/20 hover:bg-stone-700 transition-colors">
                Soporte Técnico
            </button>
<div className="mt-6 flex items-center gap-3 text-stone-500 hover:text-stone-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-space-grotesk font-medium">Cerrar Sesión</span>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 flex-1 flex flex-col min-h-screen">
{/* Comentario remanente */}
<header className="bg-stone-950/80 backdrop-blur-xl flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="text-2xl font-bold tracking-tighter text-lime-400 uppercase headline">METALLIC_CORE_ERP</div>
<nav className="hidden md:flex gap-6">
<a className="font-space-grotesk uppercase tracking-tighter text-stone-400 hover:text-lime-200 transition-colors" href="#">Dashboard</a>
<a className="font-space-grotesk uppercase tracking-tighter text-stone-400 hover:text-lime-200 transition-colors" href="#">Inventario</a>
<a className="font-space-grotesk uppercase tracking-tighter text-lime-400 border-b-2 border-lime-400 pb-1" href="#">Reportes</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-500 text-sm" data-icon="search">search</span>
<input className="bg-stone-900 border-none text-stone-300 text-xs py-2 pl-9 pr-4 rounded-sm focus:ring-1 focus:ring-lime-400 w-64" placeholder="BUSCAR REGISTROS..." type="text"/>
</div>
<div className="flex items-center gap-4 text-stone-400">
<span className="material-symbols-outlined cursor-pointer hover:text-lime-400" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-lime-400" data-icon="settings">settings</span>
<div className="h-8 w-8 bg-stone-800 rounded-full flex items-center justify-center overflow-hidden border border-stone-700">
<img alt="User profile" className="h-full w-full object-cover" data-alt="close-up portrait of a professional engineer in a dark industrial uniform looking forward with a serious expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-fKbbdp0Q_44-_PovpNQ9jcMe-3_K-jvtGbCMTadmppmwtXl30MiGJEGEB9ZYXtmc2FxUZlMEp83GsOk5BFYJf51i8nYfs9M2zSG4-N0zMmDTYc3-Nuy65E1B0Z9RV0_inlJQyyAHYlqtl3NYl6hyxew6Nxnf4Jmrg3LXh3Lbyw9rlyyA_RYHJstNg6xoAoAwsFL1HoSoaRtb7R-JOrvIuS5xhOmTy_rry6O_hQwQramBTKCRlN_clfe88YJZIF2nazOUyUKUmZ8"/>
</div>
</div>
<button className="bg-lime-400 text-stone-950 font-bold px-4 py-2 text-xs uppercase tracking-tighter hover:bg-lime-300 transition-colors active:scale-95 duration-100">
                    Nueva Factura
                </button>
</div>
</header>
{/* Comentario remanente */}
<div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
{/* Comentario remanente */}
<div className="flex justify-between items-end">
<div>
<h2 className="text-4xl font-black uppercase tracking-tighter headline text-on-surface">Registro de Compra</h2>
<p className="text-secondary font-medium uppercase text-xs tracking-widest mt-1">Suministros Industriales &amp; Gestión de Activos</p>
</div>
<div className="text-right">
<div className="bg-surface-container-highest px-4 py-2 inline-block">
<span className="text-[10px] text-tertiary block font-bold uppercase">Estado Fiscal</span>
<span className="text-primary font-bold text-sm">ART. 177 ISLR CUMPLIMIENTO</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-8 space-y-6">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
<div className="grid grid-cols-2 gap-8">
<div className="space-y-4">
<label className="block text-[10px] font-bold uppercase text-tertiary tracking-widest">Selección de Proveedor</label>
<div className="relative">
<select className="w-full bg-surface-container-high border-none rounded-sm py-4 px-4 text-sm font-bold focus:ring-2 focus:ring-primary appearance-none">
<option>SIDERÚRGICA DEL SUR C.A. - J-12345678-9</option>
<option>REPUESTOS INDUSTRIALES TITÁN - J-87654321-0</option>
<option>ENGRANAJES &amp; MOTORES VZLA - J-11223344-5</option>
</select>
<span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined pointer-events-none" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
</div>
</div>
<div className="space-y-4">
<label className="block text-[10px] font-bold uppercase text-tertiary tracking-widest">Nro Factura de Proveedor</label>
<input className="w-full bg-surface-container-high border-none rounded-sm py-4 px-4 text-sm font-mono focus:ring-2 focus:ring-primary" placeholder="FT-000000" type="text"/>
</div>
<div className="space-y-4">
<label className="block text-[10px] font-bold uppercase text-tertiary tracking-widest">Fecha de Emisión</label>
<div className="relative">
<input className="w-full bg-surface-container-high border-none rounded-sm py-4 px-4 text-sm focus:ring-2 focus:ring-primary" type="date"/>
</div>
</div>
<div className="space-y-4">
<label className="block text-[10px] font-bold uppercase text-tertiary tracking-widest">Fecha de Recepción / Almacén</label>
<div className="relative">
<input className="w-full bg-surface-container-high border-none rounded-sm py-4 px-4 text-sm focus:ring-2 focus:ring-primary" type="date"/>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden">
<div className="px-8 py-6 flex justify-between items-center border-b border-surface-container">
<h3 className="headline font-bold uppercase text-sm tracking-widest text-on-surface">Detalle de Repuestos y Materiales</h3>
<button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter hover:text-on-primary-container transition-colors">
<span className="material-symbols-outlined text-lg" data-icon="add_circle">add_circle</span>
                                Insertar Fila
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low">
<tr>
<th className="px-8 py-4 text-[10px] font-bold uppercase text-tertiary tracking-widest">SKU / Código</th>
<th className="px-4 py-4 text-[10px] font-bold uppercase text-tertiary tracking-widest">Descripción Técnica</th>
<th className="px-4 py-4 text-[10px] font-bold uppercase text-tertiary tracking-widest">Cantidad</th>
<th className="px-4 py-4 text-[10px] font-bold uppercase text-tertiary tracking-widest text-right">Precio Unitario</th>
<th className="px-8 py-4 text-[10px] font-bold uppercase text-tertiary tracking-widest text-right">Subtotal</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-8 py-5">
<input className="bg-transparent border-none p-0 w-full font-mono text-sm focus:ring-0" type="text" value="BRG-2024-X1"/>
</td>
<td className="px-4 py-5">
<input className="bg-transparent border-none p-0 w-full text-sm focus:ring-0" type="text" value="Rodamiento de Bolas Alta Velocidad 6205-2Z"/>
</td>
<td className="px-4 py-5">
<input className="bg-transparent border-none p-0 w-20 text-sm focus:ring-0" type="number" value="12"/>
</td>
<td className="px-4 py-5 text-right font-mono text-sm">
                                            45.50
                                        </td>
<td className="px-8 py-5 text-right font-bold text-sm">
                                            546.00
                                        </td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
<td className="px-8 py-5">
<input className="bg-transparent border-none p-0 w-full font-mono text-sm focus:ring-0" type="text" value="VLV-IND-99"/>
</td>
<td className="px-4 py-5">
<input className="bg-transparent border-none p-0 w-full text-sm focus:ring-0" type="text" value="Válvula de Compuerta Acero Inoxidable 2''"/>
</td>
<td className="px-4 py-5">
<input className="bg-transparent border-none p-0 w-20 text-sm focus:ring-0" type="number" value="2"/>
</td>
<td className="px-4 py-5 text-right font-mono text-sm">
                                            1,280.00
                                        </td>
<td className="px-8 py-5 text-right font-bold text-sm">
                                            2,560.00
                                        </td>
</tr>
</tbody>
</table>
</div>
<div className="px-8 py-6 bg-surface-container-low flex justify-end gap-12">
<div className="text-right">
<p className="text-[10px] font-bold uppercase text-tertiary tracking-widest">Base Imponible Total</p>
<p className="text-xl font-black headline">3,106.00</p>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/* Comentario remanente */}
<div className="bg-stone-900 text-stone-100 p-8 rounded-lg shadow-2xl relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-lime-400 opacity-5 blur-3xl rounded-full"></div>
<h3 className="headline font-bold uppercase text-xs tracking-widest text-lime-400 mb-8 border-b border-stone-800 pb-4">Liquidación de Impuestos</h3>
<div className="space-y-6">
<div className="flex justify-between items-center">
<span className="text-stone-500 text-sm font-medium">Subtotal Operativo</span>
<span className="font-mono text-lg">3,106.00</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-stone-500 text-sm font-medium">IVA (16.00%)</span>
<span className="text-[10px] bg-stone-800 px-1.5 py-0.5 rounded text-stone-400">CRED</span>
</div>
<span className="font-mono text-lg">496.96</span>
</div>
<div className="flex justify-between items-center py-4 border-y border-stone-800">
<div>
<span className="text-lime-400/80 text-sm font-bold uppercase">Retención IVA (75%)</span>
<p className="text-[9px] text-stone-500 uppercase tracking-tighter">Sujeto a Agente de Retención</p>
</div>
<span className="font-mono text-lg text-lime-400">- 372.72</span>
</div>
<div className="pt-8">
<span className="text-[10px] font-bold uppercase text-stone-500 tracking-widest block mb-1">Total Neto a Pagar</span>
<div className="flex items-baseline justify-between">
<span className="text-stone-500 text-xl font-light">USD</span>
<span className="text-5xl font-black headline tracking-tighter text-white">3,230.24</span>
</div>
</div>
</div>
<div className="mt-10 p-4 bg-stone-950 rounded border-l-2 border-lime-400">
<div className="flex gap-3">
<span className="material-symbols-outlined text-lime-400 text-sm" data-icon="gavel">gavel</span>
<div>
<p className="text-[10px] font-bold text-stone-300 uppercase">Cumplimiento Fiscal</p>
<p className="text-[10px] text-stone-500 leading-tight mt-1">Este asiento contable genera automáticamente el comprobante de retención y el registro en el Libro de Compras según Providencia Administrativa vigente.</p>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-low p-6 rounded-lg space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary" data-icon="inventory_2">inventory_2</span>
<div>
<p className="text-[10px] font-bold uppercase text-tertiary">Impacto en Stock</p>
<p className="text-xs font-medium text-on-surface">Se cargarán +14 unidades al almacén principal</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary" data-icon="account_balance">account_balance</span>
<div>
<p className="text-[10px] font-bold uppercase text-tertiary">Asiento Contable</p>
<p className="text-xs font-medium text-on-surface">Débito: 1.01.03.01 - Crédito: 2.01.01.01</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<button className="w-full bg-primary text-on-primary py-5 rounded-lg flex items-center justify-center gap-4 hover:bg-surface-tint transition-all group active:scale-95 duration-100">
<span className="font-space-grotesk font-black uppercase tracking-widest text-lg">Procesar y Aumentar Stock</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
<p className="text-center text-[10px] font-bold uppercase text-tertiary tracking-tighter">
                        PROCESO IRREVERSIBLE TRAS VALIDACIÓN DE ALMACÉN
                    </p>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-auto px-8 py-6 border-t border-surface-container flex justify-between items-center text-tertiary">
<div className="flex gap-8 items-center">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-[10px] font-bold uppercase tracking-widest">Database Linked: LOCAL_DB_01</span>
</div>
<div className="text-[10px] font-bold uppercase tracking-widest">Timestamp: 2024-05-24 14:32:01</div>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="verified_user">verified_user</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Secure Entry Point - SSL High Encryption</span>
</div>
</footer>
</main>
{/* Comentario remanente */}

        </div>
    );
};
