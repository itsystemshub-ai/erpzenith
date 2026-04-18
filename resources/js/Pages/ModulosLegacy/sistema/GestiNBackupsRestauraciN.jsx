import React from 'react';
import { Link } from '@inertiajs/react';

export default function GestiNBackupsRestauraciN() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="bg-stone-950/80 backdrop-blur-xl text-lime-500 font-['Space_Grotesk'] uppercase tracking-tight docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-6 py-3">
<div className="text-xl font-bold text-lime-400 tracking-tighter">TITAN INDUSTRIAL ERP</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-8 text-sm">
<a className="text-stone-400 hover:text-stone-100 transition-colors" href="#">OPERACIONES</a>
<a className="text-stone-400 hover:text-stone-100 transition-colors" href="#">REPORTES</a>
<a className="text-lime-400 font-bold border-b-2 border-lime-400" href="#">Administración</a>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined cursor-pointer hover:bg-stone-800/50 p-2 rounded transition-colors" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:bg-stone-800/50 p-2 rounded transition-colors" data-icon="settings">settings</span>
<span className="material-symbols-outlined cursor-pointer hover:bg-stone-800/50 p-2 rounded transition-colors" data-icon="help_outline">help_outline</span>
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-lime-500/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkQMnpSFtyqrthlNiY6UGGcrH1gvN5ylid-AKK-W8DdM-F95zs0mfFuoR6FTvnKxrS9Mh3431mKbY4qRt9INag7heozq9Djtuw7BFeT0vSzxJ2hDd-vK2NV1CaSuDmr1H0b2qhftmV5Af_hHym4dQ6HIesmgQ4RjgINt2wKEdNxHuXL2_ZPEOnhPCHuN_rIB-RrH6lgMrTf7rGuZfEuPcj6lGhHADGFUAzsS5bUw6ib3COmK672VnXpOTelQ4wia8_v4-oDMa_rso"/>
</div>
</div>
</nav>
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-full flex flex-col pt-16 bg-stone-900 dark:bg-stone-950 h-screen w-64 border-r border-stone-800/50 shadow-[40px_0_40px_-20px_rgba(0,0,0,0.3)] z-40 hidden md:flex">
<div className="px-6 py-8 flex flex-col gap-1">
<h2 className="text-stone-200 font-black font-['Inter'] text-sm tracking-wide">ADMINISTRACIÓN</h2>
<p className="text-stone-500 text-[10px] font-mono">V2.4.0-STABLE</p>
</div>
<nav className="flex-1 px-2">
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="group">group</span>
<span className="font-medium text-sm">Usuarios</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="verified_user">verified_user</span>
<span className="font-medium text-sm">Roles</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="database">database</span>
<span className="font-medium text-sm">Base de Datos</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="manage_search">manage_search</span>
<span className="font-medium text-sm">Auditoría</span>
</a>
<a className="bg-stone-800/50 text-lime-400 border-l-4 border-lime-500 px-4 py-3 flex items-center gap-3 active:opacity-80 transition-all" href="#">
<span className="material-symbols-outlined text-xl" data-icon="settings_backup_restore">settings_backup_restore</span>
<span className="font-medium text-sm">Backups</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="settings_input_component">settings_input_component</span>
<span className="font-medium text-sm">Parámetros</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined text-xl" data-icon="account_tree">account_tree</span>
<span className="font-medium text-sm">Flujos</span>
</a>
</nav>
<div className="p-4 border-t border-stone-800/50">
<button className="w-full bg-lime-500 text-stone-950 font-bold py-3 text-xs tracking-widest uppercase hover:bg-lime-400 transition-colors">
                EJECUTAR DIAGNÓSTICO
            </button>
</div>
<div className="p-2">
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-2 flex items-center gap-3 transition-all text-xs" href="#">
<span className="material-symbols-outlined text-lg" data-icon="support_agent">support_agent</span>
<span>Soporte</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-2 flex items-center gap-3 transition-all text-xs" href="#">
<span className="material-symbols-outlined text-lg" data-icon="logout">logout</span>
<span>Cerrar Sesión</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:ml-64 pt-6 px-4 md:px-10 pb-20">
{/* Comentario remanente */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
<div className="lg:col-span-8">
<h1 className="font-headline text-5xl font-extrabold uppercase tracking-tighter text-stone-100 mb-2 leading-none">
                    Gestión de <span className="text-lime-400">Backups</span>
</h1>
<p className="text-stone-500 font-body max-w-xl">
                    Administración de redundancia de datos y protocolos de recuperación ante desastres para infraestructuras críticas industriales.
                </p>
</div>
<div className="lg:col-span-4 flex items-end justify-end gap-3">
<button className="bg-stone-800/50 text-stone-100 px-6 py-3 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-stone-700 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="history">history</span> Historial Completo
                </button>
<button className="bg-lime-500 text-stone-950 px-6 py-3 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-lime-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(154,205,50,0.2)]">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span> Ejecutar Backup
                </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{/* Comentario remanente */}
<div className="bg-stone-900 p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="material-symbols-outlined text-stone-800 text-8xl absolute -top-4 -right-4" data-icon="storage">storage</span>
</div>
<div className="relative z-10">
<span className="text-lime-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Estado del Sistema</span>
<h3 className="font-headline text-4xl font-bold text-stone-100 mb-2">94.2%</h3>
<p className="text-stone-500 text-sm">Salud de redundancia operativa</p>
</div>
<div className="mt-6 flex items-center gap-2 text-lime-500 text-xs font-mono">
<span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
                    SISTEMA SINCRONIZADO
                </div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 p-8 flex flex-col justify-between">
<div>
<span className="text-lime-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Almacenamiento Local</span>
<div className="flex items-end gap-2 mb-4">
<h3 className="font-headline text-4xl font-bold text-stone-100 leading-none">3.8</h3>
<span className="text-stone-500 font-headline font-bold text-xl mb-1">/ 5.0 MB</span>
</div>
<div className="w-full bg-stone-800 h-1 mt-2">
<div className="bg-lime-500 h-full w-[76%]"></div>
</div>
</div>
<p className="text-stone-500 text-sm mt-4">localStorage asignado para estados temporales</p>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 p-8 flex flex-col justify-between border-l-4 border-lime-500">
<div>
<span className="text-lime-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Próximo Backup</span>
<h3 className="font-headline text-2xl font-bold text-stone-100 mb-1">04:00 AM</h3>
<p className="text-stone-500 text-sm italic">Programación Diaria Automática</p>
</div>
<div className="flex items-center gap-4 mt-6">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center border border-stone-900 text-[10px] font-bold">D</div>
<div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center border border-stone-900 text-[10px] font-bold">L</div>
<div className="w-8 h-8 rounded-full bg-lime-500 text-stone-950 flex items-center justify-center border border-stone-900 text-[10px] font-bold">M</div>
<div className="w-8 h-8 rounded-full bg-lime-500 text-stone-950 flex items-center justify-center border border-stone-900 text-[10px] font-bold">X</div>
</div>
<span className="text-stone-500 text-[10px] uppercase font-bold tracking-widest">En curso</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
{/* Comentario remanente */}
<div className="xl:col-span-1 flex flex-col gap-8">
{/* Comentario remanente */}
<div className="bg-stone-900 p-6">
<h4 className="font-headline font-bold text-stone-100 uppercase tracking-wide mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-lime-400" data-icon="calendar_month">calendar_month</span>
                        Programación
                    </h4>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-stone-800/30 hover:bg-stone-800/50 transition-colors">
<span className="text-sm font-medium">Backup Diario</span>
<div className="w-10 h-5 bg-lime-500 rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-stone-950 rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-stone-800/30 hover:bg-stone-800/50 transition-colors">
<span className="text-sm font-medium">Respaldo Semanal</span>
<div className="w-10 h-5 bg-stone-700 rounded-full relative">
<div className="absolute left-1 top-1 w-3 h-3 bg-stone-950 rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-stone-800/30 hover:bg-stone-800/50 transition-colors">
<span className="text-sm font-medium">Cifrado AES-256</span>
<div className="w-10 h-5 bg-lime-500 rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-stone-950 rounded-full"></div>
</div>
</div>
</div>
<button className="w-full mt-6 py-3 border border-stone-700 text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-lime-400 hover:border-lime-400 transition-all">
                        MODIFICAR PARÁMETROS
                    </button>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900/40 border border-red-900/30 p-6">
<h4 className="font-headline font-bold text-red-400 uppercase tracking-wide mb-4 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="emergency_home">emergency_home</span>
                        Zona de Recuperación
                    </h4>
<p className="text-stone-500 text-xs mb-6">Inicie el protocolo de restauración de punto anterior. Esta acción sobrescribirá los datos actuales.</p>
<button className="w-full py-4 bg-red-950/50 border border-red-700 text-red-500 font-black text-xs uppercase tracking-tighter hover:bg-red-900/50 transition-all flex items-center justify-center gap-3">
<span className="material-symbols-outlined" data-icon="restore">restore</span>
                        RESTAURAR PUNTO DE CONTROL
                    </button>
</div>
</div>
{/* Comentario remanente */}
<div className="xl:col-span-2">
<div className="bg-stone-900 overflow-hidden">
<div className="p-6 border-b border-stone-800 flex justify-between items-center">
<h4 className="font-headline font-bold text-stone-100 uppercase tracking-wide">Registro de Actividad</h4>
<div className="flex gap-2">
<span className="text-[10px] text-stone-500 uppercase font-bold px-2 py-1 bg-stone-800">Filtrar: Todos</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body">
<thead>
<tr className="bg-stone-800/50 text-[10px] text-stone-400 uppercase tracking-[0.2em]">
<th className="px-6 py-4 font-black">Timestamp</th>
<th className="px-6 py-4 font-black">ID Hash</th>
<th className="px-6 py-4 font-black">Tamaño</th>
<th className="px-6 py-4 font-black">Tipo</th>
<th className="px-6 py-4 font-black text-right">Estado</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-stone-800">
<tr className="hover:bg-stone-800/20 transition-colors">
<td className="px-6 py-4">
<div className="text-stone-200">2023-10-24</div>
<div className="text-[10px] text-stone-500">14:02:11 GMT-5</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-stone-400">#af82..192x</td>
<td className="px-6 py-4 font-medium">124.8 MB</td>
<td className="px-6 py-4">
<span className="text-[10px] border border-stone-700 px-2 py-1 rounded-sm text-stone-400 font-bold uppercase">Manual</span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-lime-500 font-black text-[10px] uppercase tracking-widest flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span> Éxito
                                        </span>
</td>
</tr>
<tr className="hover:bg-stone-800/20 transition-colors bg-stone-800/10">
<td className="px-6 py-4">
<div className="text-stone-200">2023-10-23</div>
<div className="text-[10px] text-stone-500">04:00:00 GMT-5</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-stone-400">#bf11..722q</td>
<td className="px-6 py-4 font-medium">119.2 MB</td>
<td className="px-6 py-4">
<span className="text-[10px] border border-stone-700 px-2 py-1 rounded-sm text-stone-400 font-bold uppercase">Auto</span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-lime-500 font-black text-[10px] uppercase tracking-widest flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span> Éxito
                                        </span>
</td>
</tr>
<tr className="hover:bg-stone-800/20 transition-colors">
<td className="px-6 py-4">
<div className="text-stone-200">2023-10-22</div>
<div className="text-[10px] text-stone-500">04:00:00 GMT-5</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-stone-400">#cc09..918p</td>
<td className="px-6 py-4 font-medium">118.5 MB</td>
<td className="px-6 py-4">
<span className="text-[10px] border border-stone-700 px-2 py-1 rounded-sm text-stone-400 font-bold uppercase">Auto</span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-red-500 font-black text-[10px] uppercase tracking-widest flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Fallo
                                        </span>
</td>
</tr>
<tr className="hover:bg-stone-800/20 transition-colors bg-stone-800/10">
<td className="px-6 py-4">
<div className="text-stone-200">2023-10-21</div>
<div className="text-[10px] text-stone-500">18:45:22 GMT-5</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-stone-400">#ee21..001z</td>
<td className="px-6 py-4 font-medium">112.4 MB</td>
<td className="px-6 py-4">
<span className="text-[10px] border border-stone-700 px-2 py-1 rounded-sm text-stone-400 font-bold uppercase">Manual</span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-lime-500 font-black text-[10px] uppercase tracking-widest flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span> Éxito
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-6 flex flex-wrap gap-8 items-center text-[10px] font-bold uppercase tracking-widest text-stone-500">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="verified">verified</span>
                        Verificación de Integridad: OK
                    </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="cloud_sync">cloud_sync</span>
                        Mirror S3: Conectado
                    </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="security">security</span>
                        Encripción: AES-GCM 256
                    </div>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<div className="fixed bottom-0 right-0 p-10 pointer-events-none opacity-10">
<span className="font-headline text-[15rem] font-black leading-none select-none">T-ERP</span>
</div>

        </div>
    );
};
