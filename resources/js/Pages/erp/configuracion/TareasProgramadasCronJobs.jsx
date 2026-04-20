import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TareasProgramadasCronJobs() {
    const tasks = [
        {
            id: 'CONT-DAILY-01',
            name: 'Cierre de Período Contable',
            desc: 'Consolidación de asientos contables y generación de balance de sumas y saldos.',
            freq: '0 0 * * *',
            lastRun: '14h ago',
            status: 'SUCCESS',
            cpu: '15%',
            tag: 'Diario',
            icon: 'account_balance_wallet'
        },
        {
            id: 'LOGS-WEEKLY-09',
            name: 'Purga de Logs de Auditoría',
            desc: 'Eliminación de registros históricos superiores a 180 días según política de privacidad.',
            freq: '0 2 * * 0',
            lastRun: '3d ago',
            status: 'SUCCESS',
            cpu: '45%',
            tag: 'Semanal',
            icon: 'cleaning_services'
        },
        {
            id: 'INV-SYNC-05',
            name: 'Sincronización de Inventario',
            desc: 'Matching de stock entre almacenes centrales y puntos de distribución externos.',
            freq: '*/5 * * * *',
            lastRun: 'Now',
            status: 'PROCESSING',
            cpu: '82%',
            tag: '5 Minutos',
            icon: 'sync_alt'
        },
        {
            id: 'REP-MONTHLY-02',
            name: 'Envío de Reportes Automáticos',
            desc: 'Distribución de KPIs de producción a la junta directiva y jefes de planta.',
            freq: '0 8 1 * *',
            lastRun: '24d ago',
            status: 'FAILED',
            cpu: '5%',
            tag: 'Mensual',
            icon: 'mail'
        }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    <span>Sistemas <span className="text-white/60 mx-2">|</span> Tareas Programadas (Cron Jobs)</span>
                </div>
            }
        >
            <Head title="Tareas Programadas (Cron Jobs)" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <header className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-16 px-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Engine Status: ACTIVE</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Cron Trigger v2.4</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Task <br/> <span className="text-stone-700">Automation</span></h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest border border-outline-variant/10 hover:bg-zinc-800 transition-all flex items-center gap-3 active:scale-95">
                            <span className="material-symbols-outlined text-lg">refresh</span> Reload States
                        </button>
                        <button className="bg-primary text-black px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                            <span className="material-symbols-outlined text-lg font-black">add</span> New Task
                        </button>
                    </div>
                </header>

                {/* Dashboard Stats */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Active Tasks', val: '12', icon: 'settings_suggest' },
                        { label: '24h Success Rate', val: '99.8%', icon: 'check_circle', accent: 'text-primary' },
                        { label: 'Next Trigger', val: '14:00:00', icon: 'timer', sub: 'SYNC_INV_01' },
                        { label: 'System Alerts', val: '0', icon: 'warning', accent: 'text-error' }
                    ].map((stat, i) => (
                        <div key={i} className={`bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group ${i === 1 ? 'border-b-4 border-primary' : ''}`}>
                            <div className="relative z-10 space-y-2">
                                <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">{stat.label}</span>
                                <div className={`text-4xl font-headline font-black tracking-tighter ${stat.accent || 'text-white'}`}>{stat.val}</div>
                                {stat.sub && <div className="text-[9px] font-black text-stone-600 uppercase tracking-widest">{stat.sub}</div>}
                            </div>
                            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[100px] text-stone-950 opacity-20 rotate-12 group-hover:rotate-0 transition-transform">{stat.icon}</span>
                        </div>
                    ))}
                </section>

                {/* Tasks List */}
                <section className="space-y-6">
                    {tasks.map((task, i) => (
                        <div key={i} className={`bg-zinc-900 rounded-[40px] p-8 border border-outline-variant/10 shadow-3xl flex flex-col xl:flex-row items-center gap-10 group hover:bg-zinc-800 transition-all ${task.status === 'PROCESSING' ? 'border-l-[12px] border-primary' : ''}`}>
                            <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center shrink-0 shadow-inner ${
                                task.status === 'PROCESSING' ? 'bg-primary/20 text-primary' : 'bg-zinc-950 text-stone-700'
                            }`}>
                                <span className={`material-symbols-outlined text-3xl ${task.status === 'PROCESSING' ? 'animate-pulse' : ''}`}>{task.icon}</span>
                            </div>
                            
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-4">
                                    <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter">{task.name}</h3>
                                    <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                                        task.status === 'PROCESSING' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-zinc-950 text-stone-600 border-outline-variant/5'
                                    }`}>
                                        {task.tag}
                                    </span>
                                </div>
                                <p className="text-stone-500 text-[11px] font-medium uppercase tracking-widest leading-none">{task.desc}</p>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 w-full xl:w-auto text-left py-6 xl:py-0 px-6 xl:px-10 border-y xl:border-y-0 xl:border-x border-outline-variant/5">
                                <div>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] mb-3 block">Frequency</span>
                                    <span className="font-mono text-xs text-white tracking-widest">{task.freq}</span>
                                </div>
                                <div>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] mb-3 block">Last Execution</span>
                                    <div className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-tight ${
                                        task.status === 'FAILED' ? 'text-error' : task.status === 'PROCESSING' ? 'text-primary animate-pulse' : 'text-stone-400'
                                    }`}>
                                        <span className={`w-2 h-2 rounded-full ${
                                            task.status === 'FAILED' ? 'bg-error shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 
                                            task.status === 'PROCESSING' ? 'bg-primary animate-ping' : 'bg-primary'
                                        }`}></span>
                                        {task.status === 'PROCESSING' ? 'In Progress' : task.status === 'FAILED' ? 'Failed' : 'Success'}
                                        <span className="text-[9px] font-normal text-stone-600 tracking-normal ml-1">({task.lastRun})</span>
                                    </div>
                                </div>
                                <div className="hidden lg:block">
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] mb-3 block">CPU Load</span>
                                    <div className="h-2 w-32 bg-zinc-950 rounded-full border border-outline-variant/5 p-0.5 shadow-inner">
                                        <div className={`h-full rounded-full transition-all duration-1000 ${
                                            parseInt(task.cpu) > 70 ? 'bg-error shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'bg-primary shadow-[0_0_10px_rgba(154,205,50,0.3)]'
                                        }`} style={{ width: task.cpu }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 shrink-0">
                                {task.status === 'PROCESSING' ? (
                                    <button className="bg-zinc-950 text-primary border border-primary/20 px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] opacity-50 cursor-not-allowed">
                                        Executing
                                    </button>
                                ) : (
                                    <button className="bg-zinc-950 text-white border border-outline-variant/10 px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-primary hover:text-black hover:border-primary transition-all active:scale-95 shadow-xl">
                                        Trigger
                                    </button>
                                )}
                                <button className="material-symbols-outlined text-stone-700 hover:text-white transition-colors text-2xl">settings_applications</button>
                                <button className="material-symbols-outlined text-stone-700 hover:text-error transition-colors text-2xl">history</button>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Footer Technical Metrics */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 px-4">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none italic">TITAN ERP AUTOMATION</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Industrial Infrastructure Automation Unit</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 text-[9px] font-black uppercase tracking-[0.6em] text-stone-700">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(154,205,50,0.5)]"></span>
                            Cron Engine: ACTIVE
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Queue Worker: High-Priority
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-stone-900 rounded-full"></span>
                            Latency: 14ms
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-zinc-950 px-8 py-3 rounded-full border border-outline-variant/5">
                        <span className="text-[10px] font-black text-stone-500 uppercase tracking-[0.4em]">Node S-412</span>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
