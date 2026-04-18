import React from 'react';
import { Link } from '@inertiajs/react';

export default function DashboardDeComprasErp() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="fixed h-screen w-64 left-0 top-0 bg-stone-900 text-stone-500 font-medium z-40 hidden md:flex flex-col py-8 gap-4 shadow-2xl">
<div className="px-6 mb-8">
<h1 className="text-lime-400 font-black tracking-tighter text-xl uppercase leading-none">MAYOR DE REPUESTO<br/>LA CIMA</h1>
<div className="mt-4 pt-4 border-t border-stone-800">
<p className="text-lime-400 font-bold text-xs font-headline">COMPRAS_MOD</p>
<p className="text-[10px] text-stone-500">V1.0.2_ACTIVE</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center px-6 py-3 gap-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-headline uppercase text-sm tracking-widest">Indicadores</span>
</a>
<a className="flex items-center px-6 py-3 gap-3 bg-stone-950 text-lime-400 border-l-4 border-lime-400 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-headline uppercase text-sm tracking-widest">Facturación</span>
</a>
<a className="flex items-center px-6 py-3 gap-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-headline uppercase text-sm tracking-widest">Libro SENIAT</span>
</a>
<a className="flex items-center px-6 py-3 gap-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">factory</span>
<span className="font-headline uppercase text-sm tracking-widest">Proveedores</span>
</a>
<a className="flex items-center px-6 py-3 gap-3 text-stone-500 hover:bg-stone-800 hover:text-stone-200 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-headline uppercase text-sm tracking-widest">Cuentas por Pagar</span>
</a>
</nav>
<div className="px-6 mt-auto flex flex-col gap-4">
<button className="w-full bg-stone-800 text-stone-200 py-3 font-headline text-xs uppercase tracking-widest border border-stone-700 hover:bg-stone-700 transition-colors">
                Soporte Técnico
            </button>
<a className="flex items-center gap-3 text-stone-500 hover:text-error transition-colors pb-4" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-headline uppercase text-xs tracking-widest">Cerrar Sesión</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<main className="flex-1 md:ml-64 min-h-screen flex flex-col">
{/* Comentario remanente */}
<header className="sticky top-0 z-50 bg-stone-950/80 backdrop-blur-xl flex justify-between items-center w-full px-6 py-4">
<div className="flex items-center gap-8">
<span className="text-2xl font-bold tracking-tighter text-lime-400 font-headline uppercase">METALLIC_CORE_ERP</span>
<nav className="hidden lg:flex gap-6 items-center font-headline uppercase tracking-tighter text-sm">
<a className="text-stone-400 hover:text-lime-200 transition-colors" href="#">Dashboard</a>
<a className="text-lime-400 border-b-2 border-lime-400 pb-1" href="#">Inventario</a>
<a className="text-stone-400 hover:text-lime-200 transition-colors" href="#">Reportes</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center bg-stone-900 px-3 py-1.5 rounded-sm">
<span className="material-symbols-outlined text-stone-500 text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-xs text-stone-300 w-40 placeholder:text-stone-600 font-headline" placeholder="BUSCAR REPUESTO..." type="text"/>
</div>
<div className="flex gap-2">
<button className="p-2 text-stone-400 hover:text-lime-400"><span className="material-symbols-outlined">notifications</span></button>
<button className="p-2 text-stone-400 hover:text-lime-400"><span className="material-symbols-outlined">settings</span></button>
</div>
<button className="bg-primary text-on-primary px-6 py-2 font-headline font-bold uppercase text-xs tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
                    Nueva Factura
                </button>
<div className="w-8 h-8 bg-stone-800 rounded-full overflow-hidden border border-lime-400/30">
<img alt="User profile" className="w-full h-full object-cover" data-alt="portrait of a professional technician in a clean industrial uniform with workshop background in soft focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_mxr2VONm84ehp_nqKCROv3XKHyGLjuDs3ttLDUUTIJ3sp5xBi9OoruYjewv6JLb4pNyezkKm1DgiXx0jbYD0JjVRcDErF9EXcFnO5Olg8zeyxgviGC0XcOCLgcMOsUUoCJPuWB2GrHEooTtMvnV3n5I0YYtfkN6FLYaSsUhq-8Ih6w0p8ZCaQ1rV_l2uXAe_bIZzi-nNjFxZ_QawmiXueD3EXxFKXsi3cv29aCb05E135psZM67MQZLGMbKtaa6GXAe5I9inYVc"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
{/* Comentario remanente */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl font-black font-headline uppercase tracking-tighter text-on-surface leading-none mb-2">Módulo de Compras</h2>
<p className="text-secondary font-medium uppercase tracking-widest text-xs">Gestión de suministros y cadena de partes críticas</p>
</div>
<button className="group relative flex items-center gap-4 bg-primary px-8 py-4 overflow-hidden transition-all hover:scale-[1.02] active:scale-95">
<div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-container opacity-50 group-hover:opacity-100 transition-opacity"></div>
<span className="relative font-headline font-bold uppercase text-on-primary tracking-[0.2em] z-10">Nueva Compra</span>
<span className="material-symbols-outlined relative text-on-primary z-10" >add_circle</span>
</button>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 industrial-shadow flex flex-col justify-between border-b-4 border-lime-400 h-40">
<span className="text-secondary uppercase text-[10px] font-bold tracking-widest">Gasto Mensual (USD)</span>
<div className="flex items-end justify-between">
<span className="text-3xl font-headline font-black tracking-tighter">$42,850.22</span>
<div className="flex items-center text-primary-fixed-dim text-xs font-bold">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span>12%</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 industrial-shadow flex flex-col justify-between border-b-4 border-stone-900 h-40">
<span className="text-secondary uppercase text-[10px] font-bold tracking-widest">Cuentas por Pagar</span>
<div className="flex items-end justify-between">
<span className="text-3xl font-headline font-black tracking-tighter">$128,400</span>
<span className="bg-error-container text-on-error-container px-2 py-0.5 text-[10px] font-bold uppercase">Urgente</span>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 industrial-shadow flex flex-col justify-between border-b-4 border-stone-400 h-40">
<span className="text-secondary uppercase text-[10px] font-bold tracking-widest">Variación Costo Promedio</span>
<div className="flex items-end justify-between">
<span className="text-3xl font-headline font-black tracking-tighter">+4.8%</span>
<span className="text-secondary text-[10px] font-medium uppercase italic">Tendencia Anual</span>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 p-6 industrial-shadow flex flex-col justify-between h-40">
<span className="text-lime-400 uppercase text-[10px] font-black tracking-widest">Estado de Órdenes</span>
<div className="space-y-1">
<div className="flex justify-between text-[10px] font-headline uppercase text-stone-400">
<span>En Tránsito</span>
<span className="text-lime-400">85%</span>
</div>
<div className="w-full bg-stone-800 h-1">
<div className="bg-lime-400 h-full" ></div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Comentario remanente */}
<div className="lg:col-span-8 bg-surface-container-low p-8 rounded-sm">
<div className="flex justify-between items-center mb-10">
<h3 className="font-headline font-black uppercase text-xl tracking-tighter flex items-center gap-3">
<span className="w-2 h-8 bg-lime-400"></span>
                            Compras Semanales
                        </h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-primary"></span>
<span className="text-[10px] font-bold uppercase text-secondary">Actual</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-stone-300"></span>
<span className="text-[10px] font-bold uppercase text-secondary">Proyectado</span>
</div>
</div>
</div>
<div className="flex items-end justify-between h-64 gap-4 px-4 border-b border-stone-200">
{/* Comentario remanente */}
<div className="flex-1 group relative flex flex-col items-center">
<div className="w-full bg-stone-300 h-24 absolute bottom-0"></div>
<div className="w-full bg-primary h-16 absolute bottom-0 transition-all hover:h-20 cursor-pointer"></div>
<span className="absolute -bottom-6 font-label text-[10px] font-bold text-secondary uppercase">Sem 01</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 group relative flex flex-col items-center">
<div className="w-full bg-stone-300 h-40 absolute bottom-0"></div>
<div className="w-full bg-primary h-28 absolute bottom-0 transition-all hover:h-32 cursor-pointer"></div>
<span className="absolute -bottom-6 font-label text-[10px] font-bold text-secondary uppercase">Sem 02</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 group relative flex flex-col items-center">
<div className="w-full bg-stone-300 h-32 absolute bottom-0"></div>
<div className="w-full bg-primary h-48 absolute bottom-0 transition-all hover:h-52 cursor-pointer"></div>
<span className="absolute -bottom-6 font-label text-[10px] font-bold text-secondary uppercase">Sem 03</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 group relative flex flex-col items-center">
<div className="w-full bg-stone-300 h-56 absolute bottom-0"></div>
<div className="w-full bg-primary h-52 absolute bottom-0 transition-all hover:h-60 cursor-pointer"></div>
<span className="absolute -bottom-6 font-label text-[10px] font-bold text-secondary uppercase">Sem 04</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 group relative flex flex-col items-center">
<div className="w-full bg-stone-300 h-20 absolute bottom-0"></div>
<div className="w-full bg-primary h-12 absolute bottom-0 transition-all hover:h-16 cursor-pointer"></div>
<span className="absolute -bottom-6 font-label text-[10px] font-bold text-secondary uppercase">Sem 05</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="lg:col-span-4 space-y-6">
<h3 className="font-headline font-black uppercase text-xl tracking-tighter">Top Proveedores</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 bg-surface-container-highest p-4 group hover:bg-stone-900 transition-all">
<div className="w-12 h-12 bg-stone-200 flex items-center justify-center font-headline font-bold text-stone-600 group-hover:bg-lime-400 group-hover:text-stone-900">01</div>
<div className="flex-1">
<p className="font-headline font-bold uppercase text-xs tracking-tighter group-hover:text-lime-400">Industrial Parts Corp</p>
<p className="text-[10px] text-secondary group-hover:text-stone-400">Volumen: $85,000/mes</p>
</div>
<span className="material-symbols-outlined text-stone-400 group-hover:text-lime-400">arrow_forward</span>
</div>
<div className="flex items-center gap-4 bg-surface-container-highest p-4 group hover:bg-stone-900 transition-all">
<div className="w-12 h-12 bg-stone-200 flex items-center justify-center font-headline font-bold text-stone-600 group-hover:bg-lime-400 group-hover:text-stone-900">02</div>
<div className="flex-1">
<p className="font-headline font-bold uppercase text-xs tracking-tighter group-hover:text-lime-400">Heavy Duty Engine S.A.</p>
<p className="text-[10px] text-secondary group-hover:text-stone-400">Volumen: $52,200/mes</p>
</div>
<span className="material-symbols-outlined text-stone-400 group-hover:text-lime-400">arrow_forward</span>
</div>
<div className="flex items-center gap-4 bg-surface-container-highest p-4 group hover:bg-stone-900 transition-all">
<div className="w-12 h-12 bg-stone-200 flex items-center justify-center font-headline font-bold text-stone-600 group-hover:bg-lime-400 group-hover:text-stone-900">03</div>
<div className="flex-1">
<p className="font-headline font-bold uppercase text-xs tracking-tighter group-hover:text-lime-400">Precision Gears Ltd</p>
<p className="text-[10px] text-secondary group-hover:text-stone-400">Volumen: $41,800/mes</p>
</div>
<span className="material-symbols-outlined text-stone-400 group-hover:text-lime-400">arrow_forward</span>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<section className="bg-surface-container-lowest industrial-shadow overflow-hidden">
<div className="px-8 py-6 border-b border-surface-container flex justify-between items-center">
<h3 className="font-headline font-black uppercase text-xl tracking-tighter">Recepciones Recientes</h3>
<button className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary hover:text-on-primary-container transition-colors">Exportar LOG</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-secondary font-label uppercase text-[10px] font-black tracking-[0.2em]">
<th className="px-8 py-4">ID_RECEPCION</th>
<th className="px-8 py-4">PROVEEDOR</th>
<th className="px-8 py-4">CATEGORÍA</th>
<th className="px-8 py-4">FECHA_ENTRADA</th>
<th className="px-8 py-4">VALOR_GUÍA</th>
<th className="px-8 py-4">ESTADO</th>
<th className="px-8 py-4 text-right">ACCIONES</th>
</tr>
</thead>
<tbody className="text-xs font-label">
<tr className="hover:bg-surface-container-low border-b border-surface-container-highest transition-colors">
<td className="px-8 py-4 font-bold text-on-surface">#REC-99201</td>
<td className="px-8 py-4 uppercase">Industrial Parts Corp</td>
<td className="px-8 py-4"><span className="bg-stone-200 px-2 py-1 text-[10px] font-bold">MOTORES</span></td>
<td className="px-8 py-4">24/05/2024</td>
<td className="px-8 py-4 font-headline font-bold">$12,450.00</td>
<td className="px-8 py-4">
<span className="flex items-center gap-2 text-primary font-bold uppercase text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Verificado
                                    </span>
</td>
<td className="px-8 py-4 text-right">
<button className="material-symbols-outlined text-stone-400 hover:text-stone-900">more_vert</button>
</td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-surface-container-low border-b border-surface-container-highest transition-colors">
<td className="px-8 py-4 font-bold text-on-surface">#REC-99200</td>
<td className="px-8 py-4 uppercase">Heavy Duty Engine S.A.</td>
<td className="px-8 py-4"><span className="bg-stone-200 px-2 py-1 text-[10px] font-bold">TRANSMISIONES</span></td>
<td className="px-8 py-4">23/05/2024</td>
<td className="px-8 py-4 font-headline font-bold">$8,900.00</td>
<td className="px-8 py-4">
<span className="flex items-center gap-2 text-stone-400 font-bold uppercase text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> Pendiente
                                    </span>
</td>
<td className="px-8 py-4 text-right">
<button className="material-symbols-outlined text-stone-400 hover:text-stone-900">more_vert</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low border-b border-surface-container-highest transition-colors">
<td className="px-8 py-4 font-bold text-on-surface">#REC-99199</td>
<td className="px-8 py-4 uppercase">Precision Gears Ltd</td>
<td className="px-8 py-4"><span className="bg-stone-200 px-2 py-1 text-[10px] font-bold">PIÑONES</span></td>
<td className="px-8 py-4">23/05/2024</td>
<td className="px-8 py-4 font-headline font-bold">$3,120.50</td>
<td className="px-8 py-4">
<span className="flex items-center gap-2 text-primary font-bold uppercase text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Verificado
                                    </span>
</td>
<td className="px-8 py-4 text-right">
<button className="material-symbols-outlined text-stone-400 hover:text-stone-900">more_vert</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* Comentario remanente */}
<footer className="mt-auto px-8 py-4 border-t border-surface-container flex justify-between text-[9px] font-bold uppercase tracking-widest text-secondary">
<span>Server Status: <span className="text-primary">Optimized</span></span>
<span>Uptime: 99.9% | Last Sync: 2 min ago</span>
<span>MAYOR DE REPUESTO LA CIMA - Internal ERP</span>
</footer>
</main>
{/* Comentario remanente */}
<nav className="md:hidden fixed bottom-0 left-0 w-full glass-nav flex justify-around items-center py-3 px-4 z-50 text-stone-400">
<a className="flex flex-col items-center gap-1" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[8px] uppercase font-bold tracking-tighter">Panel</span>
</a>
<a className="flex flex-col items-center gap-1 text-lime-400" href="#">
<span className="material-symbols-outlined" >receipt_long</span>
<span className="text-[8px] uppercase font-bold tracking-tighter">Compras</span>
</a>
<div className="relative -top-6 bg-primary p-3 rounded-full shadow-lg border-4 border-stone-900 text-on-primary">
<span className="material-symbols-outlined">add</span>
</div>
<a className="flex flex-col items-center gap-1" href="#">
<span className="material-symbols-outlined">factory</span>
<span className="text-[8px] uppercase font-bold tracking-tighter">Prov</span>
</a>
<a className="flex flex-col items-center gap-1" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-[8px] uppercase font-bold tracking-tighter">Ajustes</span>
</a>
</nav>

```
        </div>
    );
};
