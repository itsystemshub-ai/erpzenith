import React from 'react';
import { Link } from '@inertiajs/react';

export default function CentroAyudaSoporteTCnico() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-3 w-full">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-stone-900 dark:text-white tracking-tighter uppercase font-['Space_Grotesk']">INDUSTRIAL FORGE ERP</span>
<div className="hidden md:flex gap-6">
<a className="text-stone-500 dark:text-stone-400 font-medium font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">Dashboard</a>
<a className="text-stone-500 dark:text-stone-400 font-medium font-['Space_Grotesk'] uppercase tracking-tight hover:text-lime-500 transition-colors" href="#">Analytics</a>
<a className="text-lime-600 dark:text-lime-400 font-bold border-b-2 border-lime-600 font-['Space_Grotesk'] uppercase tracking-tight" href="#">Support</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-sm">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-highest border-none rounded-none text-xs font-label tracking-widest focus:ring-2 focus:ring-primary w-64" placeholder="BUSCAR MANUALES..." type="text"/>
</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-on-surface">notifications</span></button>
<button className="p-2 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-on-surface">settings</span></button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User Profile Avatar" data-alt="close up professional headshot of a technical system administrator with a focused expression in a modern office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlalmvnTTm_DBu0vqaCqTSP6ISH_kdXoshdKf6H-TiEdbbOlyqxnbxsOJC0UykFuycGx3q-SSh4y6PwZw4mPR-dqoZ_Z0KR2LHc8ojeB05VbMy5gm1TXz-jFh9_B14EZr5_EJLRyaKxeuemLNWfdsEhaO4OlLWR7yZUfskOKgvWRA_TStN6jBdHVbe6wUWBg_U14wbVHgjN3q8OdqcDX4k4ncHg-wHnHzSGEd9RbOqyhBX2MM7I3fweOSaCAn6mWrf29-Cg2WlNgw"/>
</div>
</div>
</div>
</nav>
{/* Comentario remanente */}
<main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
{/* Comentario remanente */}
<header className="relative mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-8">
<div className="inline-block px-3 py-1 bg-primary text-on-primary text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">Knowledge Base v4.2</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] text-on-surface">CENTRO DE<br/><span className="text-primary">SOPORTE</span> TÉCNICO</h1>
<p className="mt-6 text-lg text-secondary max-w-xl font-body">Portal de capacitación y asistencia para el personal de <span className="font-bold text-on-background">MAYOR DE REPUESTO LA CIMA, C.A.</span> Optimiza tu flujo de trabajo con nuestra documentación técnica.</p>
</div>
<div className="md:col-span-4 flex flex-col gap-4">
<div className="bg-surface-container-low p-6 rounded-none relative overflow-hidden">
<div className="relative z-10">
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">Estado del Sistema</span>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-lime-500 animate-pulse"></span>
<span className="text-sm font-bold uppercase tracking-tight">OPERATIVO AL 100%</span>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-8xl" >check_circle</span>
</div>
</div>
</div>
</header>
{/* Comentario remanente */}
<section className="mb-20">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-bold uppercase tracking-tight">Manuales por Módulo</h2>
<p className="text-secondary text-sm uppercase tracking-widest">Documentación Técnica Detallada</p>
</div>
<button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
                    Ver todos los módulos <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
{/* Comentario remanente */}
<div className="md:col-span-2 lg:col-span-2 bg-surface-container-lowest p-8 group hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-on-primary">inventory_2</span>
<h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-on-primary mb-2">Inventario</h3>
<p className="text-sm text-secondary group-hover:text-on-primary/80 mb-6">Gestión de stock, almacenes y repuestos pesados.</p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-on-primary border-b border-primary group-hover:border-on-primary pb-1" href="#">Descargar PDF</a>
</div>
{/* Comentario remanente */}
<div className="md:col-span-2 lg:col-span-2 bg-surface-container-lowest p-8 group hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-on-primary">point_of_sale</span>
<h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-on-primary mb-2">Ventas</h3>
<p className="text-sm text-secondary group-hover:text-on-primary/80 mb-6">Facturación, preventa y notas de entrega industriales.</p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-on-primary border-b border-primary group-hover:border-on-primary pb-1" href="#">Leer manual</a>
</div>
{/* Comentario remanente */}
<div className="md:col-span-4 lg:col-span-2 row-span-2 relative bg-stone-900 overflow-hidden min-h-[300px]">
<img alt="Video Tutorials" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="modern industrial factory workshop with engineers working on high tech engine components with cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5MGrguqHGUFiN9CKr-ZIaeATnnLbjWrerKKF4Jb43SyPX0bpOrh54OVuADX_bawcdHqBuex86aZ_WZNobEjrcCYkveBOr7GpFKlHth2CTmHDk2OegxEqJmqJmXzHHssWscyvaW1LIq0LhFqawrvixC66dfTVE5psaB6C2YYCSuijWKwOV2TZGwZFIkgDzC_ys8eIgJspsb5VCWdgAEr_AeRg5z0-VtRkGrWG07Cj1w77SJ126gSYu9gdtHRRNTdY_w_szBhLHlbU"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent p-8 flex flex-col justify-end">
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-on-primary" >play_arrow</span>
</div>
<h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">Video Tutoriales</h3>
<p className="text-sm text-stone-300">Guías visuales paso a paso del sistema ERP Forge.</p>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-2 lg:col-span-2 bg-surface-container-lowest p-8 group hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-on-primary">payments</span>
<h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-on-primary mb-2">Finanzas</h3>
<p className="text-sm text-secondary group-hover:text-on-primary/80 mb-6">Cuentas por cobrar y conciliación bancaria.</p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-on-primary border-b border-primary group-hover:border-on-primary pb-1" href="#">Consultar</a>
</div>
{/* Comentario remanente */}
<div className="md:col-span-2 lg:col-span-2 bg-surface-container-lowest p-8 group hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-on-primary">groups</span>
<h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-on-primary mb-2">RRHH</h3>
<p className="text-sm text-secondary group-hover:text-on-primary/80 mb-6">Gestión de nómina y asistencia del personal.</p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-on-primary border-b border-primary group-hover:border-on-primary pb-1" href="#">Ver guía</a>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<h2 className="text-4xl font-bold uppercase tracking-tighter leading-none mb-6">Preguntas<br/>Frecuentes</h2>
<p className="text-secondary text-sm font-body mb-8">Respuestas rápidas a las dudas operativas más comunes detectadas en planta.</p>
<div className="p-6 border-l-4 border-primary bg-surface-container-low">
<p className="text-sm italic text-on-surface-variant">"La precisión en el registro de datos es la base de nuestra eficiencia logística."</p>
<span className="text-[10px] font-bold uppercase tracking-widest block mt-2 text-primary">— Control de Sistemas</span>
</div>
</div>
<div className="lg:col-span-8 space-y-4">
<div className="bg-surface-container p-6 flex justify-between items-center cursor-pointer hover:bg-surface-container-high transition-colors">
<span className="font-bold uppercase tracking-tight text-sm">¿Cómo anular una factura emitida por error?</span>
<span className="material-symbols-outlined text-primary">add</span>
</div>
<div className="bg-surface-container-highest p-6">
<div className="flex justify-between items-center mb-4">
<span className="font-bold uppercase tracking-tight text-sm text-primary">¿Cómo reponer stock de un almacén secundario?</span>
<span className="material-symbols-outlined text-primary">remove</span>
</div>
<p className="text-sm text-secondary leading-relaxed font-body">
                        Debe dirigirse al módulo de <span className="font-bold text-on-background">Inventario &gt; Transferencias</span>. Seleccione el almacén de origen "Principal" y el destino correspondiente. Ingrese los códigos de las piezas y valide la firma digital del responsable de almacén.
                    </p>
</div>
<div className="bg-surface-container p-6 flex justify-between items-center cursor-pointer hover:bg-surface-container-high transition-colors">
<span className="font-bold uppercase tracking-tight text-sm">¿Mi clave ha expirado, cómo la recupero?</span>
<span className="material-symbols-outlined text-primary">add</span>
</div>
<div className="bg-surface-container p-6 flex justify-between items-center cursor-pointer hover:bg-surface-container-high transition-colors">
<span className="font-bold uppercase tracking-tight text-sm">¿Cómo generar el reporte de ventas del mes anterior?</span>
<span className="material-symbols-outlined text-primary">add</span>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="bg-stone-900 text-white p-8 md:p-12 relative overflow-hidden">
{/* Comentario remanente */}
<div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Reportar Incidencia</h2>
<p className="text-stone-400 max-w-md mb-8">Si el problema persiste después de consultar los manuales, abra un ticket de soporte técnico. Nuestro equipo le responderá en un plazo máximo de 2 horas.</p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<span className="material-symbols-outlined text-primary">mail</span>
<div>
<span className="block text-[10px] font-bold uppercase tracking-widest text-stone-500">Email Directo</span>
<span className="text-lg font-headline">sistemas@lacima.com.ve</span>
</div>
</div>
<div className="flex gap-4 items-start">
<span className="material-symbols-outlined text-primary">phone_in_talk</span>
<div>
<span className="block text-[10px] font-bold uppercase tracking-widest text-stone-500">Emergencias (Ext.)</span>
<span className="text-lg font-headline">405 / 406</span>
</div>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Nombre del Usuario</label>
<input className="w-full bg-stone-800 border-none text-white p-3 focus:ring-2 focus:ring-primary rounded-none" placeholder="EJ. CARLOS PÉREZ" type="text"/>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Módulo Afectado</label>
<select className="w-full bg-stone-800 border-none text-white p-3 focus:ring-2 focus:ring-primary rounded-none">
<option>SELECCIONAR MÓDULO</option>
<option>INVENTARIO</option>
<option>VENTAS</option>
<option>COMPRAS</option>
<option>ERROR GENERAL</option>
</select>
</div>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Nivel de Prioridad</label>
<div className="flex gap-4 mt-2">
<label className="flex items-center gap-2 cursor-pointer">
<input className="text-primary focus:ring-primary bg-stone-800 border-none" name="prio" type="radio"/>
<span className="text-xs uppercase font-bold tracking-tight">Baja</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="text-primary focus:ring-primary bg-stone-800 border-none" name="prio" type="radio"/>
<span className="text-xs uppercase font-bold tracking-tight">Media</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="text-primary focus:ring-primary bg-stone-800 border-none" name="prio" type="radio"/>
<span className="text-xs uppercase font-bold tracking-tight text-primary">Crítica</span>
</label>
</div>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Descripción de la Falla</label>
<textarea className="w-full bg-stone-800 border-none text-white p-3 focus:ring-2 focus:ring-primary rounded-none" placeholder="DESCRIBA EL ERROR O LA DUDA TÉCNICA DETALLADAMENTE..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-primary text-on-primary font-bold uppercase tracking-widest hover:bg-primary-container transition-colors active:scale-[0.98]" type="submit">Enviar Ticket de Soporte</button>
</form>
</div>
</section>
</main>
{/* Comentario remanente */}
<footer className="bg-surface-container-low px-6 py-8 border-t border-outline-variant/20">
<div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<span className="text-lg font-black tracking-tighter uppercase font-['Space_Grotesk'] opacity-50">FORGE SYSTEMS</span>
<span className="h-4 w-px bg-stone-300"></span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">La Cima ERP Documentation Portal © 2024</span>
</div>
<div className="flex gap-8">
<a className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary" href="#">Políticas de Seguridad</a>
<a className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary" href="#">Registro de Cambios</a>
<a className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary" href="#">Versión 4.2.1-STABLE</a>
</div>
</div>
</footer>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 h-14 w-14 bg-primary text-on-primary rounded-none flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined" >forum</span>
</button>

        </div>
    );
};
