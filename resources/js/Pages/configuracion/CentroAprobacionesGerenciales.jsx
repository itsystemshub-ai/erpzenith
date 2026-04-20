import React from 'react';
import { Link } from '@inertiajs/react';

export default function CentroAprobacionesGerenciales() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-3 w-full">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-stone-900 dark:text-white tracking-tighter uppercase font-['Space_Grotesk']">INDUSTRIAL FORGE ERP</span>
<div className="hidden md:flex gap-6">
<a className="text-stone-500 dark:text-stone-400 font-medium font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">Dashboard</a>
<a className="text-stone-500 dark:text-stone-400 font-medium font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">Analytics</a>
<a className="text-stone-500 dark:text-stone-400 font-medium font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">Support</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">notifications</button>
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">settings</button>
<button className="material-symbols-outlined text-secondary hover:text-primary transition-colors">help</button>
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a professional male executive in a neutral studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0yfdhljV_6FxoNTOK2-WxhsgRbwxAJAzGN4YAYYRcv9d0K76e-IgFr76q59nZfxfaQmg612FCg9SfVgcUeMhef297V3N0IneO6v9we4qgrB-RuWEzzyHraVILIVGVOzj11_306UwjsLmOPtd0irFUxrDkwwWHbLD_0419KRig1MMFzP-Xh8mG8c6uRj7VF27haswWcd-RE-K9kZ0xMjwipG_HxbopgxPM4Zj8NKyqTHfdeFUSkjsjnZEMNmmpt0GpORQW6u9JcSQ"/>
</div>
</div>
</nav>
{/* Comentario remanente */}
<aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 z-40 bg-stone-50 dark:bg-stone-900 flex-col h-full py-6 shadow-[4px_0px_24px_rgba(0,0,0,0.04)]">
<div className="px-6 mb-10">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-white text-sm" >factory</span>
</div>
<span className="font-['Space_Grotesk'] font-black text-stone-900 dark:text-white tracking-tighter">FORGE SYSTEMS</span>
</div>
<p className="font-['Inter'] font-semibold uppercase text-[10px] tracking-widest text-secondary">High-Performance ERP</p>
</div>
<nav className="flex-1 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">inventory_2</span> Inventario
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">point_of_sale</span> Ventas
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">shopping_cart</span> Compras
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">payments</span> Finanzas
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">account_balance</span> Contabilidad
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">groups</span> RRHH
            </a>
<a className="flex items-center gap-3 px-3 py-3 bg-lime-500/10 text-lime-700 dark:text-lime-400 border-r-4 border-lime-600 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">admin_panel_settings</span> Administración
            </a>
</nav>
<div className="px-6 mt-6">
<button className="w-full bg-primary text-on-primary py-3 px-4 font-bold uppercase text-xs tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
                TECHNICAL REPORT
            </button>
</div>
<div className="mt-auto px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">security</span> Security
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-lg">logout</span> Log Out
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:ml-64 pt-24 pb-12 px-8 min-h-screen">
{/* Comentario remanente */}
<header className="mb-12 relative">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-5xl font-black uppercase tracking-tight text-on-surface mb-2">Administración Central</h1>
<p className="text-lg text-secondary font-medium uppercase tracking-widest flex items-center gap-2">
<span className="w-4 h-[2px] bg-primary"></span> Bandeja de Entrada de Aprobaciones
                    </p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-high px-6 py-4 flex flex-col items-center">
<span className="text-primary font-black text-3xl">12</span>
<span className="text-[10px] uppercase tracking-tighter font-bold text-secondary">Pendientes</span>
</div>
<div className="bg-surface-container-high px-6 py-4 flex flex-col items-center border-l-4 border-error">
<span className="text-error font-black text-3xl">04</span>
<span className="text-[10px] uppercase tracking-tighter font-bold text-secondary">Críticos</span>
</div>
</div>
</div>
</header>
{/* Comentario remanente */}
<section className="bg-surface-container-low p-2 mb-8 flex flex-wrap items-center gap-4">
<div className="flex-1 relative min-w-[280px]">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">search</span>
<input className="w-full bg-white border-none py-3 pl-12 pr-4 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-primary" placeholder="BUSCAR SOLICITUD O REFERENCIA..." type="text"/>
</div>
<div className="flex gap-2">
<button className="bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest border-b-2 border-primary">Todas</button>
<button className="hover:bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors">Compras</button>
<button className="hover:bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors">Inventario</button>
<button className="hover:bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors">Personal</button>
</div>
</section>
{/* Comentario remanente */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="xl:col-span-8 bg-surface-container-lowest p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-0.5 h-full bg-error/20"></div>
<div className="flex justify-between items-start mb-8">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="bg-error text-white text-[10px] px-2 py-1 font-black uppercase tracking-tighter">ALTA PRIORIDAD</span>
<span className="text-secondary text-[10px] font-bold uppercase tracking-widest">ORDEN DE COMPRA #OC-29401</span>
</div>
<h3 className="text-3xl font-black uppercase tracking-tight mb-2">Importación Motores Caterpillar 3406</h3>
<p className="text-secondary text-sm max-w-xl">Reposición de stock crítico para contratos mineros zona sur. Proveedor: HeavyEquipment Ltd (Miami).</p>
</div>
<div className="text-right">
<span className="text-4xl font-black text-on-surface">$54,200.00</span>
<p className="text-[10px] font-bold text-secondary uppercase mt-1">Total Neto (Exento IVA)</p>
</div>
</div>
<div className="grid grid-cols-3 gap-8 mb-10 py-6 border-y border-outline-variant/30">
<div>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Solicitado por</p>
<p className="font-bold text-sm">Ing. Marcos Rivas</p>
</div>
<div>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Almacén Destino</p>
<p className="font-bold text-sm">Almacén Central (Puerto Ordaz)</p>
</div>
<div>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Fecha Límite</p>
<p className="font-bold text-sm text-error">24h Restantes</p>
</div>
</div>
<div className="flex flex-wrap justify-between items-center gap-6">
<div className="flex gap-4">
<button className="bg-primary text-on-primary px-8 py-3 font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
<span className="material-symbols-outlined text-sm" >check_circle</span> Aprobar
                        </button>
<button className="bg-surface-container-high text-on-surface px-8 py-3 font-black text-xs uppercase tracking-widest border border-outline-variant/20 hover:bg-error hover:text-white transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">cancel</span> Rechazar
                        </button>
</div>
<button className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 group">
                        Ver Detalles Técnicos <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
{/* Comentario remanente */}
<div className="xl:col-span-4 bg-surface-container-lowest p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-1 font-black uppercase tracking-tighter">ACCESO SISTEMA</span>
<span className="text-secondary text-[10px] font-bold uppercase tracking-widest">NUEVO USUARIO</span>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-secondary">person</span>
</div>
<div>
<h3 className="text-xl font-black uppercase tracking-tight">Celia Ortega</h3>
<p className="text-xs font-bold text-secondary uppercase">Analista de Compras Jr.</p>
</div>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-primary text-lg" >verified_user</span> Perfil: Operador Nivel 1
                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-on-surface">
<span className="material-symbols-outlined text-primary text-lg" >lock</span> Módulos: Inventario, Compras
                        </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-primary-container text-on-primary-container py-3 font-black text-[10px] uppercase tracking-widest">Aprobar</button>
<button className="bg-surface-container-high py-3 font-black text-[10px] uppercase tracking-widest">Detalle</button>
</div>
</div>
{/* Comentario remanente */}
<div className="xl:col-span-12 bg-surface-container-high p-8 flex flex-col md:flex-row items-center gap-12 group">
<div className="w-full md:w-48 h-48 bg-white p-4 shrink-0">
<img className="w-full h-full object-cover" data-alt="Industrial machinery components laid out on a blueprint for technical inspection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7idQ8PO_25x_MgAF9Ebh6-OGGkL2vPBJ5ZFEb_hI0ZrsXWbjnd6tsbNb47yZigaOEt29RN7gH47_RuVFy7hAPXzYb_VIDu5H-l8JKy65IX4Vupj0FbHXMiGShIJztyuqdjhcKNCQS2oc0aaiazFee9rYaUPoXYnN2leGSZqVBv6AxkQv8ABxZVMl5OKGyha_RfpHbEMqh-gCGJWAMRyL3v0T7Mv0cOOiHDTmswJK4GFVkXsgPTikVZQ4pR-aeQP5GcnLr-zoBnnU"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-3 mb-4">
<span className="bg-secondary text-white text-[10px] px-2 py-1 font-black uppercase tracking-tighter">AJUSTE CRÍTICO</span>
<span className="text-secondary text-[10px] font-bold uppercase tracking-widest">INVENTARIO FISICO VS SISTEMA</span>
</div>
<h3 className="text-2xl font-black uppercase tracking-tight mb-4">Discrepancia Ejes de Transmisión (Z-40)</h3>
<div className="flex flex-wrap gap-12">
<div>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Teórico</p>
<p className="text-2xl font-black">124 Unid.</p>
</div>
<div>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Real Hallado</p>
<p className="text-2xl font-black text-error">98 Unid.</p>
</div>
<div>
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Diferencia Costo</p>
<p className="text-2xl font-black">-$2,860.00</p>
</div>
</div>
</div>
<div className="flex flex-col gap-2 w-full md:w-auto">
<button className="bg-on-surface text-white px-8 py-3 font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors">Aprobar Ajuste</button>
<button className="bg-white text-on-surface px-8 py-3 font-black text-xs uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Solicitar Recuento</button>
<button className="text-[10px] font-black uppercase tracking-widest text-secondary mt-2 text-center">Ver Reporte Auditoría</button>
</div>
</div>
{/* Comentario remanente */}
<div className="xl:col-span-12 bg-white p-8 grid grid-cols-1 md:grid-cols-4 gap-8 items-center border-l-[12px] border-primary">
<div className="col-span-1">
<span className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-2 block">CÓMPUTO DE NOMINA</span>
<h3 className="text-xl font-black uppercase tracking-tight">MES: OCTUBRE 2023</h3>
<p className="text-xs text-secondary font-medium">152 Empleados Activos</p>
</div>
<div className="col-span-1 border-l border-outline-variant/30 pl-8">
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Monto a Dispersar</p>
<p className="text-2xl font-black">$31,450.00</p>
</div>
<div className="col-span-1 border-l border-outline-variant/30 pl-8">
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Estado Revisión</p>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-primary rounded-full"></span>
<span className="text-xs font-bold uppercase">Validado por RRHH</span>
</div>
</div>
<div className="col-span-1 flex justify-end gap-3">
<button className="w-full md:w-auto bg-primary text-on-primary px-6 py-4 font-black text-xs uppercase tracking-widest">Emitir Pago</button>
<button className="bg-surface-container-high p-4 flex items-center justify-center">
<span className="material-symbols-outlined">description</span>
</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-16 flex items-center justify-between border-t-4 border-on-surface pt-6">
<span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">MOSTRANDO 04 DE 12 SOLICITUDES</span>
<button className="flex items-center gap-4 group">
<span className="text-xs font-black uppercase tracking-widest">Cargar más registros</span>
<div className="w-10 h-10 bg-on-surface text-white flex items-center justify-center group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined">add</span>
</div>
</button>
</div>
</main>
{/* Comentario remanente */}

        </div>
    );
};
