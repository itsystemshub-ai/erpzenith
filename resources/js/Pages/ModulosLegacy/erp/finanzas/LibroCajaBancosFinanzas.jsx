import React from 'react';
import { Link } from '@inertiajs/react';

export default function LibroCajaBancosFinanzas() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="fixed top-0 w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center h-16 px-6 w-full">
<div className="text-2xl font-bold tracking-tighter text-lime-400 font-['Space_Grotesk'] uppercase">TITAN INDUSTRIAL ERP</div>
<nav className="hidden md:flex gap-8 items-center h-full">
<a className="text-stone-400 hover:text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight transition-all duration-200" href="#">Inventario</a>
<a className="text-stone-400 hover:text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight transition-all duration-200" href="#">Ventas</a>
<a className="text-lime-400 border-b-2 border-lime-400 pb-1 font-['Space_Grotesk'] uppercase tracking-tight transition-all duration-200" href="#">Bancos</a>
<a className="text-stone-400 hover:text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight transition-all duration-200" href="#">RRHH</a>
</nav>
<div className="flex items-center gap-4">
<button className="p-2 text-lime-500 hover:bg-stone-800/50 transition-all duration-200 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-lime-500 hover:bg-stone-800/50 transition-all duration-200 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="p-2 text-lime-500 hover:bg-stone-800/50 transition-all duration-200 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-full w-64 z-40 bg-stone-900 flex flex-col pt-20 pb-6">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-stone-800 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-lime-500" data-icon="account_balance">account_balance</span>
</div>
<div>
<div className="text-xs font-bold text-stone-500 tracking-widest font-['Inter'] uppercase">OPERACIONES</div>
<div className="text-sm text-stone-200 font-medium">Terminal Central</div>
</div>
</div>
<button className="w-full bg-lime-500 text-stone-950 font-bold py-2 tracking-tight transition-all hover:bg-lime-400 uppercase text-xs">
                NUEVA ACTA
            </button>
</div>
<nav className="flex-1">
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 font-['Inter'] font-medium text-sm hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="storefront">storefront</span> E-Commerce
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 font-['Inter'] font-medium text-sm hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span> Inventario
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 font-['Inter'] font-medium text-sm hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="cancel_presentation">cancel_presentation</span> Ventas
            </a>
<a className="bg-lime-900/20 text-lime-400 border-r-4 border-lime-500 px-4 py-3 flex items-center gap-3 font-['Inter'] font-medium text-sm transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span> Bancos
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 font-['Inter'] font-medium text-sm hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="badge">badge</span> Portal Empleado
            </a>
</nav>
<div className="mt-auto border-t border-stone-800 pt-4">
<a className="text-stone-400 px-4 py-2 flex items-center gap-3 font-['Inter'] font-medium text-xs hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-lg" data-icon="support_agent">support_agent</span> Soporte
            </a>
<a className="text-stone-400 px-4 py-2 flex items-center gap-3 font-['Inter'] font-medium text-xs hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-lg" data-icon="logout">logout</span> Cerrar Sesión
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 pt-24 px-8 pb-12">
{/* Comentario remanente */}
<div className="flex flex-col gap-6 mb-12">
<div className="flex justify-between items-end">
<div>
<h1 className="text-4xl font-extrabold tracking-tighter uppercase text-on-surface">Gestión Bancaria &amp; Libro Caja</h1>
<p className="text-secondary font-label text-sm uppercase tracking-widest mt-1">Saldos Consolidados a Tiempo Real</p>
</div>
<div className="flex gap-3">
<button className="bg-surface-container-high hover:bg-surface-container-highest px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="file_download">file_download</span> Exportar PDF
                    </button>
<button className="bg-primary hover:bg-primary-container text-on-primary px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="sync_alt">sync_alt</span> Nueva Conciliación
                    </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-6 flex flex-col gap-2 border-l-4 border-primary">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Banco Santander - Operativo</span>
<span className="text-3xl font-headline font-bold text-on-surface">$1,452,380.00</span>
<div className="flex items-center gap-1 text-xs text-primary font-bold">
<span className="material-symbols-outlined text-sm" data-icon="arrow_upward">arrow_upward</span> +2.4% vs ayer
                    </div>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">BBVA - Reserva</span>
<span className="text-3xl font-headline font-bold text-on-surface">$845,000.50</span>
<div className="flex items-center gap-1 text-xs text-secondary font-bold">
                        Conciliado hace 2h
                    </div>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Caja Chica - Planta 1</span>
<span className="text-3xl font-headline font-bold text-on-surface">$12,400.00</span>
<div className="flex items-center gap-1 text-xs text-error font-bold">
<span className="material-symbols-outlined text-sm" data-icon="warning">warning</span> Reponer fondos
                    </div>
</div>
<div className="bg-primary text-on-primary p-6 flex flex-col gap-2">
<span className="text-[10px] font-bold text-on-primary/70 uppercase tracking-widest">Consolidado Total</span>
<span className="text-3xl font-headline font-bold">$2,309,780.50</span>
<div className="flex items-center gap-1 text-xs text-on-primary/80 font-bold uppercase">
                        Auditoría 100% OK
                    </div>
</div>
</div>
</div>
{/* Comentario remanente */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
<div className="lg:col-span-2 space-y-4">
<div className="flex justify-between items-center">
<h2 className="text-xl font-bold uppercase tracking-tight">Registro de Movimientos</h2>
<div className="flex gap-2">
<input className="bg-surface-container-high border-none text-xs px-4 py-2 focus:ring-1 focus:ring-primary w-64" placeholder="Filtrar por concepto..." type="text"/>
</div>
</div>
<div className="bg-surface-container-lowest overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container text-secondary text-[10px] uppercase font-bold tracking-widest">
<tr>
<th className="px-4 py-3">Fecha</th>
<th className="px-4 py-3">Referencia</th>
<th className="px-4 py-3">Concepto</th>
<th className="px-4 py-3">Tipo</th>
<th className="px-4 py-3 text-right">Monto</th>
<th className="px-4 py-3 text-center">Estado</th>
</tr>
</thead>
<tbody className="text-xs font-label">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-4 py-4 text-secondary">24/05/2024</td>
<td className="px-4 py-4 font-mono">#TRF-9023</td>
<td className="px-4 py-4 font-bold">Pago Proveedor Acero Inox</td>
<td className="px-4 py-4"><span className="bg-surface-container-high px-2 py-1 text-[10px]">EGRESO</span></td>
<td className="px-4 py-4 text-right font-bold text-error">-$250,000.00</td>
<td className="px-4 py-4 text-center"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span></td>
</tr>
<tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
<td className="px-4 py-4 text-secondary">24/05/2024</td>
<td className="px-4 py-4 font-mono">#CHQ-4451</td>
<td className="px-4 py-4 font-bold">Cobro Factura #V-998 (Cliente Ind.)</td>
<td className="px-4 py-4"><span className="bg-primary-container/20 text-on-primary-container px-2 py-1 text-[10px]">INGRESO</span></td>
<td className="px-4 py-4 text-right font-bold text-primary">+$180,500.00</td>
<td className="px-4 py-4 text-center"><span className="material-symbols-outlined text-secondary text-lg" data-icon="history">history</span></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-4 py-4 text-secondary">23/05/2024</td>
<td className="px-4 py-4 font-mono">#INT-0032</td>
<td className="px-4 py-4 font-bold">Rendimientos Cuenta de Ahorro</td>
<td className="px-4 py-4"><span className="bg-primary-container/20 text-on-primary-container px-2 py-1 text-[10px]">INGRESO</span></td>
<td className="px-4 py-4 text-right font-bold text-primary">+$12,450.00</td>
<td className="px-4 py-4 text-center"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span></td>
</tr>
<tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
<td className="px-4 py-4 text-secondary">23/05/2024</td>
<td className="px-4 py-4 font-mono">#TRF-8871</td>
<td className="px-4 py-4 font-bold">Nómina Operarios Planta 2</td>
<td className="px-4 py-4"><span className="bg-surface-container-high px-2 py-1 text-[10px]">EGRESO</span></td>
<td className="px-4 py-4 text-right font-bold text-error">-$412,000.00</td>
<td className="px-4 py-4 text-center"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span></td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="space-y-6">
<div className="bg-stone-900 text-stone-100 p-6 rounded-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-sm font-bold uppercase tracking-widest text-lime-400 mb-4">Conciliación Rápida AI</h3>
<p className="text-xs text-stone-400 leading-relaxed mb-6">Hemos detectado 4 movimientos bancarios que coinciden con facturas pendientes de cobro.</p>
<div className="space-y-3">
<div className="bg-stone-800 p-3 flex justify-between items-center group cursor-pointer hover:bg-stone-700 transition-all">
<div>
<div className="text-[10px] text-stone-500 font-bold uppercase">Match 98%</div>
<div className="text-xs font-bold">Depósito $45,000.00</div>
</div>
<span className="material-symbols-outlined text-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" data-icon="arrow_forward">arrow_forward</span>
</div>
<button className="w-full bg-lime-500 text-stone-950 text-xs font-bold py-3 uppercase tracking-widest mt-2">Ejecutar Auto-Conciliación</button>
</div>
</div>
<div className="bg-surface-container p-6">
<h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Flujo Mensual</h3>
<div className="h-32 flex items-end gap-2 px-2">
<div className="flex-1 bg-primary/20 h-3/4 hover:bg-primary transition-all"></div>
<div className="flex-1 bg-primary/20 h-1/2 hover:bg-primary transition-all"></div>
<div className="flex-1 bg-primary/20 h-full hover:bg-primary transition-all"></div>
<div className="flex-1 bg-primary/20 h-2/3 hover:bg-primary transition-all"></div>
<div className="flex-1 bg-primary h-5/6"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-secondary font-bold uppercase">
<span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span>
</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="space-y-6">
<div className="flex justify-between items-center">
<div>
<h2 className="text-xl font-bold uppercase tracking-tight">Antigüedad de Saldos de Clientes</h2>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Análisis de cartera vencida y riesgo</p>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-primary"></div>
<span className="text-[10px] font-bold uppercase text-secondary">Corriente</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-secondary"></div>
<span className="text-[10px] font-bold uppercase text-secondary">30-60 Días</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-error"></div>
<span className="text-[10px] font-bold uppercase text-secondary">&gt;90 Días</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Comentario remanente */}
<div className="border-l border-surface-container-high pl-4">
<div className="text-sm font-bold uppercase mb-1">Industrial S.A.</div>
<div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-3">Total Deuda: $1.2M</div>
<div className="flex gap-1 h-2 mb-2">
<div className="w-[80%] bg-primary"></div>
<div className="w-[15%] bg-secondary"></div>
<div className="w-[5%] bg-error"></div>
</div>
<div className="flex justify-between text-[10px] font-bold">
<span className="text-primary">80% OK</span>
<span className="text-error">Bajo Riesgo</span>
</div>
</div>
{/* Comentario remanente */}
<div className="border-l border-surface-container-high pl-4">
<div className="text-sm font-bold uppercase mb-1">Minera del Norte</div>
<div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-3">Total Deuda: $840k</div>
<div className="flex gap-1 h-2 mb-2">
<div className="w-[40%] bg-primary"></div>
<div className="w-[40%] bg-secondary"></div>
<div className="w-[20%] bg-error"></div>
</div>
<div className="flex justify-between text-[10px] font-bold">
<span className="text-secondary">40% Vencido</span>
<span className="text-error">Alerta</span>
</div>
</div>
{/* Comentario remanente */}
<div className="border-l border-surface-container-high pl-4">
<div className="text-sm font-bold uppercase mb-1">Logística Global</div>
<div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-3">Total Deuda: $3.5M</div>
<div className="flex gap-1 h-2 mb-2">
<div className="w-[95%] bg-primary"></div>
<div className="w-[5%] bg-secondary"></div>
<div className="w-0 bg-error"></div>
</div>
<div className="flex justify-between text-[10px] font-bold">
<span className="text-primary">95% OK</span>
<span className="text-primary">Excelente</span>
</div>
</div>
{/* Comentario remanente */}
<div className="border-l border-surface-container-high pl-4">
<div className="text-sm font-bold uppercase mb-1">Suministros Ferrosos</div>
<div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-3">Total Deuda: $150k</div>
<div className="flex gap-1 h-2 mb-2">
<div className="w-[10%] bg-primary"></div>
<div className="w-[20%] bg-secondary"></div>
<div className="w-[70%] bg-error"></div>
</div>
<div className="flex justify-between text-[10px] font-bold">
<span className="text-error">70% &gt;90 Días</span>
<span className="text-error">BLOQUEADO</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-high p-4 flex justify-between items-center">
<div className="flex gap-8">
<div>
<div className="text-[9px] font-bold text-secondary uppercase tracking-widest">Cartera Corriente</div>
<div className="text-lg font-bold">$12,450,000.00</div>
</div>
<div>
<div className="text-[9px] font-bold text-secondary uppercase tracking-widest">Monto en Riesgo</div>
<div className="text-lg font-bold text-error">$842,000.00</div>
</div>
<div>
<div className="text-[9px] font-bold text-secondary uppercase tracking-widest">Promedio Días Pago</div>
<div className="text-lg font-bold">42 Días</div>
</div>
</div>
<button className="bg-on-surface text-surface px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all">Ver Reporte Analítico</button>
</div>
</section>
</main>
{/* Comentario remanente */}
<div className="fixed bottom-0 left-64 right-0 h-1 bg-primary/20">
<div className="h-full bg-primary w-2/3 shadow-[0_0_10px_#9acd32]"></div>
</div>

        </div>
    );
};
