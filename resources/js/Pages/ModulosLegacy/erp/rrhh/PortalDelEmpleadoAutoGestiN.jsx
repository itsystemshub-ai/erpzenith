import React from 'react';
import { Link } from '@inertiajs/react';

export default function PortalDelEmpleadoAutoGestiN() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50 flex justify-between items-center h-16 px-6 w-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="text-2xl font-bold tracking-tighter text-lime-400 font-['Space_Grotesk'] uppercase tracking-tight">TITAN INDUSTRIAL ERP</div>
<div className="hidden md:flex gap-8">
<a className="text-stone-400 hover:text-stone-100 transition-all duration-200 font-['Space_Grotesk'] uppercase tracking-tight" href="#">Inventario</a>
<a className="text-stone-400 hover:text-stone-100 transition-all duration-200 font-['Space_Grotesk'] uppercase tracking-tight" href="#">Ventas</a>
<a className="text-stone-400 hover:text-stone-100 transition-all duration-200 font-['Space_Grotesk'] uppercase tracking-tight" href="#">Bancos</a>
<a className="text-lime-400 border-b-2 border-lime-400 pb-1 font-['Space_Grotesk'] uppercase tracking-tight" href="#">RRHH</a>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-400 hover:bg-stone-800/50 transition-all duration-200 p-2 rounded active:scale-95 duration-75">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-stone-400 hover:bg-stone-800/50 transition-all duration-200 p-2 rounded active:scale-95 duration-75">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="text-stone-400 hover:bg-stone-800/50 transition-all duration-200 p-2 rounded active:scale-95 duration-75">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</nav>
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-full w-64 z-40 bg-stone-900 flex flex-col pt-20 pb-6">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded bg-stone-800 flex items-center justify-center overflow-hidden border border-stone-700">
<img alt="Usuario Industrial" className="w-full h-full object-cover" data-alt="Close-up profile of a worker wearing safety glasses and a hard hat in a modern manufacturing facility environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6sqOCBZCcM9Cs7nu4tr5B44z4xO4oaMNqOBm5_qOCsoZm4T6d6gdHuu2cxOZNg6SA0BxpE65gY41z1ZfNuQ4M0Q4iDPMfv-bMr337L1EPSxQnMvGJFOrLGAE_JNnhgRF27FrNRHq_3pSkbb3Nt2XrUHv-hoUuNFF0mrcT0DKXlnNf8EJ9wvnF0Ntp0rt_vXvDPxsfNj95eSmQag-h6tvHxajvV7X7MSeWqE1NEF1W8rInYVb4FV8MWpk38DCfG9HFPvqufcelNbs"/>
</div>
<div>
<p className="text-lime-500 font-headline text-xs font-bold tracking-widest uppercase">OPERACIONES</p>
<p className="text-stone-400 text-[10px] uppercase font-medium">Terminal Central</p>
</div>
</div>
<nav className="flex-grow space-y-1">
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200 font-['Inter'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">storefront</span> E-Commerce
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200 font-['Inter'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">inventory_2</span> Inventario
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200 font-['Inter'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">cancel_presentation</span> Ventas
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 hover:text-stone-100 transition-colors duration-200 font-['Inter'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">account_balance</span> Bancos
            </a>
<a className="bg-lime-900/20 text-lime-400 border-r-4 border-lime-500 px-4 py-3 flex items-center gap-3 font-['Inter'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">badge</span> Portal Empleado
            </a>
</nav>
<div className="px-4 mt-6">
<button className="w-full bg-primary py-2 text-on-primary font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                NUEVA ACTA
            </button>
</div>
<div className="mt-auto border-t border-stone-800 pt-4">
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 transition-colors duration-200 font-['Inter'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">support_agent</span> Soporte
            </a>
<a className="text-stone-400 px-4 py-3 flex items-center gap-3 hover:bg-stone-800 transition-colors duration-200 font-['Inter'] font-medium text-sm" href="#">
<span className="material-symbols-outlined">logout</span> Cerrar Sesión
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="pl-64 pt-16 min-h-screen">
<div className="max-w-7xl mx-auto p-8">
{/* Comentario remanente */}
<header className="mb-12 relative overflow-hidden bg-stone-950 p-10 text-white rounded-lg">
<div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none">
<img alt="Industrial Blueprint" className="w-full h-full object-cover" data-alt="Technical schematic diagram of an engine part with precise lines and measurements on a dark technical background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKF4RI8MZ9lzBxzxXJA23LBJG2OXjpDJYlb9Qk1-Wdmc15k3TJFbWlklBLM0y88og-ar1IVvNLOFvhtEMKbn67wO3OLLHVO6jvD8JWKSjBmypWeiP8TCykybzmCAu4XREgb7ZvYb_G5674wt673fP3roJPagIPRJlEqSAgP1DF_5VPX-yqM9usEfuy35prd8UUUnuuJK-_kHTdyWGTEasPKuI0MRdEVvNPt3NnEtfwS_Qc2KZaWOnh0HE8aNsirb-ZEJIFxsbv-Vg"/>
</div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 bg-lime-500 text-stone-950 font-bold text-[10px] tracking-widest uppercase mb-4">Panel del Trabajador</span>
<h1 className="text-5xl font-black uppercase tracking-tighter mb-2 leading-none">BIENVENIDO, CARLOS ORTEGA</h1>
<p className="text-stone-400 font-body text-lg max-w-xl">ID: TITAN-74492 | Operador Senior de Maquinaria Pesada | Planta Central</p>
</div>
</header>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
{/* Comentario remanente */}
<div className="md:col-span-4 bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[220px]">
<div>
<p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Días de Vacaciones</p>
<h2 className="text-6xl font-black text-primary leading-tight">18 <span className="text-lg font-medium text-stone-400 uppercase tracking-normal">Disponibles</span></h2>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary" ></div>
</div>
<span className="text-[10px] font-bold text-stone-400">60%</span>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-8 bg-surface-container p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Garantía Prestaciones Sociales (Art. 142)</p>
<h2 className="text-4xl font-black text-on-surface tracking-tighter">USD $12.450,82</h2>
</div>
<button className="bg-surface-container-highest p-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors">
<span className="material-symbols-outlined">receipt_long</span>
</button>
</div>
<div className="grid grid-cols-3 gap-4 mt-8 border-t border-stone-300 pt-6">
<div>
<p className="text-[10px] text-stone-400 uppercase font-bold">Acumulado Trimestral</p>
<p className="text-sm font-black">$1.200,00</p>
</div>
<div>
<p className="text-[10px] text-stone-400 uppercase font-bold">Antigüedad</p>
<p className="text-sm font-black">4 Años, 2 Meses</p>
</div>
<div>
<p className="text-[10px] text-stone-400 uppercase font-bold">Última Actualización</p>
<p className="text-sm font-black">30 SEP 2023</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Comentario remanente */}
<div className="lg:col-span-2">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-black uppercase tracking-tight">ÚLTIMOS RECIBOS DE NÓMINA</h3>
<a className="text-primary text-xs font-bold uppercase tracking-widest hover:underline" href="#">Ver Historial</a>
</div>
<div className="bg-surface-container-lowest overflow-hidden">
<div className="divide-y divide-surface-container">
{/* Comentario remanente */}
<div className="p-5 flex items-center justify-between group hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-stone-400">description</span>
</div>
<div>
<p className="font-black text-sm uppercase tracking-tighter">QUINCENA 2 - OCTUBRE 2023</p>
<p className="text-xs text-stone-500 uppercase tracking-widest">Abonado el 30/10/2023</p>
</div>
</div>
<div className="flex items-center gap-6">
<p className="font-black text-lime-700">$1.450,22</p>
<button className="bg-stone-950 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors">DESCARGAR</button>
</div>
</div>
{/* Comentario remanente */}
<div className="p-5 flex items-center justify-between group hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-stone-400">description</span>
</div>
<div>
<p className="font-black text-sm uppercase tracking-tighter">QUINCENA 1 - OCTUBRE 2023</p>
<p className="text-xs text-stone-500 uppercase tracking-widest">Abonado el 15/10/2023</p>
</div>
</div>
<div className="flex items-center gap-6">
<p className="font-black text-lime-700">$1.450,22</p>
<button className="bg-stone-950 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors">DESCARGAR</button>
</div>
</div>
{/* Comentario remanente */}
<div className="p-5 flex items-center justify-between group hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-stone-400">description</span>
</div>
<div>
<p className="font-black text-sm uppercase tracking-tighter">QUINCENA 2 - SEPTIEMBRE 2023</p>
<p className="text-xs text-stone-500 uppercase tracking-widest">Abonado el 30/09/2023</p>
</div>
</div>
<div className="flex items-center gap-6">
<p className="font-black text-lime-700">$1.485,50</p>
<button className="bg-stone-950 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors">DESCARGAR</button>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="lg:col-span-1">
<h3 className="text-2xl font-black uppercase tracking-tight mb-6">SOLICITAR PERMISOS</h3>
<div className="bg-stone-900 p-8 text-white">
<form action="#" className="space-y-6">
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Tipo de Permiso</label>
<select className="w-full bg-stone-800 border-none text-white focus:ring-2 focus:ring-primary h-12 text-sm">
<option>Día de Vacaciones</option>
<option>Permiso Médico</option>
<option>Asuntos Personales</option>
<option>Familiar</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Desde</label>
<input className="w-full bg-stone-800 border-none text-white focus:ring-2 focus:ring-primary h-12 text-sm px-4" type="date"/>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Hasta</label>
<input className="w-full bg-stone-800 border-none text-white focus:ring-2 focus:ring-primary h-12 text-sm px-4" type="date"/>
</div>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Justificación (Opcional)</label>
<textarea className="w-full bg-stone-800 border-none text-white focus:ring-2 focus:ring-primary text-sm p-4" rows="3"></textarea>
</div>
<button className="w-full bg-lime-500 py-4 text-stone-950 font-black uppercase tracking-widest hover:bg-lime-400 transition-all active:scale-95" type="submit">
                                ENVIAR SOLICITUD
                            </button>
</form>
</div>
<div className="mt-6 p-4 border border-stone-200 bg-surface-container-low">
<div className="flex items-center gap-3 text-stone-500">
<span className="material-symbols-outlined">info</span>
<p className="text-[10px] font-medium leading-relaxed uppercase tracking-tight">Las solicitudes de permisos médicos requieren cargar el justificante en un plazo máximo de 48h.</p>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-20 pt-8 border-t border-stone-200 flex justify-between items-center text-stone-400 text-[10px] font-bold uppercase tracking-widest">
<div>© 2023 TITAN INDUSTRIAL ERP - SECCIÓN RRHH V4.2</div>
<div className="flex gap-6">
<a className="hover:text-stone-950" href="#">Políticas de Empresa</a>
<a className="hover:text-stone-950" href="#">Reglamento Interno</a>
<a className="hover:text-stone-950" href="#">Seguridad Industrial</a>
</div>
</footer>
</div>
</main>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-stone-950 text-lime-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all z-50">
<span className="material-symbols-outlined">chat</span>
</button>

        </div>
    );
};
