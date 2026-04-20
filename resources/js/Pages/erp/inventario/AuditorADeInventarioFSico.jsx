import React from 'react';
import { Link } from '@inertiajs/react';

export default function AuditorADeInventarioFSico() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-stone-50 dark:bg-stone-900 shadow-[4px_0px_24px_rgba(0,0,0,0.04)] flex flex-col h-full py-6">
<div className="px-6 mb-10">
<h1 className="font-['Space_Grotesk'] font-black text-stone-900 dark:text-white text-xl tracking-tighter">FORGE SYSTEMS</h1>
<p className="font-['Inter'] font-semibold uppercase text-[10px] tracking-widest text-stone-500">High-Performance ERP</p>
</div>
<nav className="flex-1 px-4 space-y-1">
{/* Comentario remanente */}
<a className="flex items-center gap-3 px-4 py-3 bg-lime-500/10 text-lime-700 dark:text-lime-400 border-r-4 border-lime-600 font-['Inter'] font-semibold uppercase text-xs tracking-widest transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span>Inventario</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 font-['Inter'] font-semibold uppercase text-xs tracking-widest hover:translate-x-1 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="point_of_sale">point_of_sale</span>
<span>Ventas</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 font-['Inter'] font-semibold uppercase text-xs tracking-widest hover:translate-x-1 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span>Compras</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 font-['Inter'] font-semibold uppercase text-xs tracking-widest hover:translate-x-1 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Finanzas</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 font-['Inter'] font-semibold uppercase text-xs tracking-widest hover:translate-x-1 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span>Contabilidad</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 font-['Inter'] font-semibold uppercase text-xs tracking-widest hover:translate-x-1 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span>RRHH</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 font-['Inter'] font-semibold uppercase text-xs tracking-widest hover:translate-x-1 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span>Administración</span>
</a>
</nav>
<div className="mt-auto px-4 space-y-4">
<button className="w-full bg-primary text-on-primary py-3 font-['Inter'] font-bold uppercase text-[10px] tracking-widest hover:scale-105 transition-all">
                TECHNICAL REPORT
            </button>
<div className="pt-4 border-t border-stone-200 dark:border-stone-800">
<a className="flex items-center gap-3 px-4 py-2 text-stone-600 dark:text-stone-400 text-xs font-semibold uppercase tracking-widest" href="#">
<span className="material-symbols-outlined text-sm" data-icon="security">security</span>
<span>Security</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-error text-xs font-semibold uppercase tracking-widest" href="#">
<span className="material-symbols-outlined text-sm" data-icon="logout">logout</span>
<span>Log Out</span>
</a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 min-h-screen relative overflow-hidden">
{/* Comentario remanente */}
<header className="fixed top-0 left-64 right-0 z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl border-b-0 flex justify-between items-center px-8 py-4">
<div className="flex items-center gap-8">
<div className="text-xl font-black text-stone-900 dark:text-white tracking-tighter uppercase font-['Space_Grotesk']">
                    AUDITORÍA DE ALMACÉN
                </div>
<nav className="hidden md:flex gap-6">
<a className="text-lime-600 dark:text-lime-400 font-bold border-b-2 border-lime-600 font-['Space_Grotesk'] uppercase tracking-tight transition-colors" href="#">DASHBOARD</a>
<a className="text-stone-500 dark:text-stone-400 font-medium font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">ANALYTICS</a>
<a className="text-stone-500 dark:text-stone-400 font-medium font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">SUPPORT</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 material-symbols-outlined text-lg">search</span>
<input className="bg-surface-container-highest border-none pl-10 pr-4 py-1.5 text-xs font-['Inter'] w-64 focus:ring-2 focus:ring-primary" placeholder="BUSCAR REPUESTO..." type="text"/>
</div>
<div className="flex gap-2">
<span className="material-symbols-outlined text-stone-500 cursor-pointer" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-stone-500 cursor-pointer" data-icon="settings">settings</span>
<span className="material-symbols-outlined text-stone-500 cursor-pointer" data-icon="help">help</span>
</div>
<div className="h-8 w-8 rounded-full bg-stone-200 overflow-hidden ml-2">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="profile photo of a professional warehouse manager in industrial setting with soft background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3yYs7vHfbt_BndXhmiEYp3ind66J80ZMRmoCBnApOTFZ-hTIVLXY0tgYVAC50rgvdTLaAup4h_ajLKDKty2UvVUACfMU1RaB-YC9mRi9vRUwLnxkqNDNRjJdOZkXicg0QRow11C8jWZ8zQGXRivmygyQETNwiBvhI7sWe06gjRuG_yuCim7WDU87uVu4KzY49eGW3AW-bFK-rwc0keuvufLOvrxsYXNAkJQScfzeDfvsd_KNvLDBfTbTnD_1dbWZmE76qjkTwQ5E"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<div className="pt-24 px-8 pb-12">
{/* Comentario remanente */}
<div className="mb-8 flex justify-between items-end">
<div>
<div className="flex items-center gap-2 text-label-md text-secondary mb-2 uppercase tracking-widest font-bold">
<span>MAYOR DE REPUESTO LA CIMA, C.A.</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span>GESTIÓN DE INVENTARIO</span>
</div>
<h2 className="text-4xl font-black uppercase tracking-tighter text-on-surface leading-none">TOMA FÍSICA<br/><span className="text-primary-container bg-primary px-2">CONTEO CIEGO</span></h2>
</div>
<div className="flex gap-3">
<button className="bg-surface-container-high px-6 py-3 font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-transform">
<span className="material-symbols-outlined text-sm">download</span> EXPORTAR PDF
                    </button>
<button className="bg-primary text-on-primary px-8 py-3 font-bold uppercase text-xs tracking-widest flex items-center gap-2 shadow-xl hover:scale-[1.02] transition-transform">
<span className="material-symbols-outlined text-sm">sync_alt</span> SINCRONIZAR Y AJUSTAR
                    </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 shadow-sm border-l-4 border-primary">
<h3 className="text-sm font-black uppercase tracking-widest mb-4">Parámetros de Auditoría</h3>
<div className="space-y-4">
<div>
<label className="block text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Seleccionar Pasillo</label>
<select className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary py-3 text-sm font-semibold">
<option>PASILLO A - MOTOR Y TRANSMISIÓN</option>
<option>PASILLO B - SUSPENSIÓN Y FRENOS</option>
<option>PASILLO C - ELÉCTRICO Y LUCES</option>
<option>PASILLO D - ACCESORIOS Y CARROCERÍA</option>
</select>
</div>
<div>
<label className="block text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Categoría Crítica</label>
<select className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary py-3 text-sm font-semibold">
<option>TODAS LAS CATEGORÍAS</option>
<option>REPUESTOS DE ALTA ROTACIÓN</option>
<option>VALOR ALTO (PREMIUM)</option>
</select>
</div>
<button className="w-full border-2 border-primary text-primary font-black py-3 uppercase tracking-tighter hover:bg-primary hover:text-on-primary transition-all">
                                INICIAR AUDITORÍA DE ZONA
                            </button>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-on-background text-white p-6 relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-xs font-bold text-primary-container tracking-[0.2em] uppercase mb-6">Resumen de Sesión</h3>
<div className="flex justify-between items-end mb-4">
<span className="text-4xl font-black">42/120</span>
<span className="text-[10px] font-bold text-stone-400">ITEMS CONTADOS</span>
</div>
<div className="w-full bg-stone-800 h-1 mb-6">
<div className="bg-primary-container h-full w-[35%]"></div>
</div>
<div className="flex items-center gap-4">
<div className="bg-stone-800 flex-1 p-3">
<p className="text-[9px] text-stone-400 uppercase font-bold tracking-widest">Discrepancias</p>
<p className="text-xl font-black text-error">12%</p>
</div>
<div className="bg-stone-800 flex-1 p-3">
<p className="text-[9px] text-stone-400 uppercase font-bold tracking-widest">Valor Neto Diff</p>
<p className="text-xl font-black">-$420.00</p>
</div>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-9xl">analytics</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-black uppercase tracking-tighter">Entrada de Conteo Ciego</h3>
<div className="flex items-center gap-2 bg-error-container text-on-error-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
<span className="material-symbols-outlined text-xs">warning</span>
                            Alerta: 3 diferencias críticas detectadas
                        </div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low">
<th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-secondary">ID Repuesto</th>
<th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-secondary">Descripción</th>
<th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-secondary text-center">Teórico</th>
<th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-secondary w-32">Conteo Físico</th>
<th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-secondary text-right">Diferencia</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/* Comentario remanente */}
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5 px-4">
<div className="text-xs font-bold font-mono">KIT-3422-MX</div>
<div className="text-[9px] text-secondary uppercase tracking-tight">Estante A-12</div>
</td>
<td className="py-5 px-4 font-bold text-sm uppercase">Bomba de Agua Toyota Hilux 2.5</td>
<td className="py-5 px-4 text-center">
<span className="bg-surface-container px-2 py-1 text-xs font-bold text-secondary">24 UND</span>
</td>
<td className="py-5 px-4">
<input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-error font-black text-center py-2 text-error" type="number" value="18"/>
</td>
<td className="py-5 px-4 text-right">
<span className="text-error font-black">-6</span>
<span className="material-symbols-outlined text-xs text-error ml-1 align-middle">error</span>
</td>
</tr>
{/* Comentario remanente */}
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5 px-4">
<div className="text-xs font-bold font-mono">FILT-900-OIL</div>
<div className="text-[9px] text-secondary uppercase tracking-tight">Estante A-04</div>
</td>
<td className="py-5 px-4 font-bold text-sm uppercase">Filtro Aceite Premium Genérico</td>
<td className="py-5 px-4 text-center">
<span className="bg-surface-container px-2 py-1 text-xs font-bold text-secondary">150 UND</span>
</td>
<td className="py-5 px-4">
<input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary font-black text-center py-2 text-primary" type="number" value="150"/>
</td>
<td className="py-5 px-4 text-right">
<span className="text-primary font-black">0</span>
<span className="material-symbols-outlined text-xs text-primary ml-1 align-middle">check_circle</span>
</td>
</tr>
{/* Comentario remanente */}
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5 px-4">
<div className="text-xs font-bold font-mono">FR-8821-PAD</div>
<div className="text-[9px] text-secondary uppercase tracking-tight">Estante A-09</div>
</td>
<td className="py-5 px-4 font-bold text-sm uppercase">Pastillas de Freno Delanteras Ford Explorer</td>
<td className="py-5 px-4 text-center">
<span className="bg-surface-container px-2 py-1 text-xs font-bold text-secondary">42 UND</span>
</td>
<td className="py-5 px-4">
<input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary font-black text-center py-2 text-primary" type="number" value="44"/>
</td>
<td className="py-5 px-4 text-right">
<span className="text-primary font-black">+2</span>
<span className="material-symbols-outlined text-xs text-primary ml-1 align-middle">trending_up</span>
</td>
</tr>
{/* Comentario remanente */}
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5 px-4">
<div className="text-xs font-bold font-mono">RAD-400-ALU</div>
<div className="text-[9px] text-secondary uppercase tracking-tight">Estante A-15</div>
</td>
<td className="py-5 px-4 font-bold text-sm uppercase">Radiador Aluminio Chevrolet Silverado 2018</td>
<td className="py-5 px-4 text-center">
<span className="bg-surface-container px-2 py-1 text-xs font-bold text-secondary">8 UND</span>
</td>
<td className="py-5 px-4">
<input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary font-black text-center py-2" placeholder="--" type="number"/>
</td>
<td className="py-5 px-4 text-right">
<span className="text-stone-400 font-bold italic">Pendiente</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container p-6 relative">
<div className="flex items-start gap-4">
<div className="p-3 bg-white shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl">qr_code_scanner</span>
</div>
<div>
<h4 className="font-black uppercase tracking-tight text-sm mb-1">Escanear Manual</h4>
<p className="text-[10px] text-secondary leading-relaxed font-medium">Use un escáner industrial para entradas masivas de conteo ciego sin ver teóricos.</p>
</div>
</div>
</div>
<div className="bg-surface-container p-6 relative">
<div className="flex items-start gap-4">
<div className="p-3 bg-white shadow-sm">
<span className="material-symbols-outlined text-error text-3xl">verified_user</span>
</div>
<div>
<h4 className="font-black uppercase tracking-tight text-sm mb-1">Aprobación de Supervisor</h4>
<p className="text-[10px] text-secondary leading-relaxed font-medium">Las discrepancias mayores al 5% o $200 requieren token de seguridad.</p>
</div>
</div>
</div>
<div className="bg-primary/5 p-6 relative border-2 border-dashed border-primary/20">
<div className="flex items-start gap-4">
<div className="p-3 bg-primary text-on-primary shadow-sm">
<span className="material-symbols-outlined text-3xl" >history</span>
</div>
<div>
<h4 className="font-black uppercase tracking-tight text-sm mb-1">Historial de Ajustes</h4>
<p className="text-[10px] text-secondary leading-relaxed font-medium">Ver auditorías pasadas del Pasillo A para detectar patrones de merma.</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<button className="fixed bottom-10 right-10 w-16 h-16 bg-on-background text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl text-primary-container" >save</span>
</button>
</main>
{/* Comentario remanente */}
<div className="hidden fixed inset-0 bg-stone-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
<div className="bg-surface-container-lowest max-w-md w-full p-8 shadow-2xl border-t-8 border-error">
<div className="text-error flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-4xl">lock_open</span>
<h3 className="text-2xl font-black uppercase tracking-tighter">Token de Supervisor</h3>
</div>
<p className="text-sm font-medium text-secondary mb-6 leading-relaxed">Se detectaron discrepancias críticas en <span className="font-black text-on-surface">3 items de alto valor</span>. Ingrese el código de autorización para proceder con el ajuste de inventario.</p>
<div className="space-y-4">
<input className="w-full bg-surface-container-high border-none py-4 text-center text-2xl tracking-[0.5em] focus:ring-2 focus:ring-error" placeholder="••••••••" type="password"/>
<div className="grid grid-cols-2 gap-4">
<button className="bg-surface-container-highest py-3 font-bold uppercase text-[10px] tracking-widest">CANCELAR</button>
<button className="bg-error text-on-error py-3 font-bold uppercase text-[10px] tracking-widest">AUTORIZAR</button>
</div>
</div>
</div>
</div>

        </div>
    );
};
