import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeBackupsYRestauracion() {
    const backupLogs = [
        { date: '2023-10-24', time: '14:02:11 GMT-5', hash: '#af82..192x', size: '124.8 MB', type: 'Manual', status: 'SUCCESS' },
        { date: '2023-10-23', time: '04:00:00 GMT-5', hash: '#bf11..722q', size: '119.2 MB', type: 'Auto', status: 'SUCCESS' },
        { date: '2023-10-22', time: '04:00:00 GMT-5', hash: '#cc09..918p', size: '118.5 MB', type: 'Auto', status: 'FAIL' },
        { date: '2023-10-21', time: '18:45:22 GMT-5', hash: '#ee21..001z', size: '112.4 MB', type: 'Manual', status: 'SUCCESS' }
    ];

    const controls = [
        { label: 'Backup Diario', active: true },
        { label: 'Respaldo Semanal', active: false },
        { label: 'Cifrado AES-256', active: true }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">settings_backup_restore</span>
                    <span>Sistemas <span className="text-white/60 mx-2">|</span> Gestión de Backups y Restauración</span>
                </div>
            }
        >
            <Head title="Gestión de Backups y Restauración" />

            <div className="space-y-12 pb-12">
                {/* Header & Primary Actions */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-primary font-headline font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Data Redundancy Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Ironclad Storage v2.4</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Backup <br/> <span className="text-stone-700">Management</span></h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest border border-outline-variant/10 hover:bg-zinc-800 transition-all flex items-center gap-3 active:scale-95">
                            <span className="material-symbols-outlined text-lg">history</span> All Archives
                        </button>
                        <button className="bg-primary text-black px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                            <span className="material-symbols-outlined text-lg font-black">bolt</span> Execute Backup
                        </button>
                    </div>
                </header>

                {/* Bento Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Health Status Card */}
                    <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                            <span className="material-symbols-outlined text-[100px] text-white">storage</span>
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <span className="text-primary font-black text-[9px] uppercase tracking-[0.4em] mb-4 block">System Integrity</span>
                                <h3 className="font-headline text-6xl font-black text-white tracking-tighter mb-2">94.2%</h3>
                                <p className="text-stone-500 text-xs font-medium uppercase tracking-widest">Operational Redundancy Health</p>
                            </div>
                            <div className="mt-10 flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping shadow-[0_0_10px_rgba(154,205,50,0.8)]"></div>
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] font-mono">System Synchronized</span>
                            </div>
                        </div>
                    </div>

                    {/* Storage Metrics Card */}
                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="relative z-10">
                            <span className="text-primary font-black text-[9px] uppercase tracking-[0.4em] mb-6 block">LocalStorage Utilization</span>
                            <div className="flex items-end gap-3 mb-6">
                                <h3 className="font-headline text-6xl font-black text-white tracking-tighter leading-none text-highlight">3.8</h3>
                                <span className="text-stone-700 font-headline font-black text-2xl mb-1 tracking-widest">/ 5.0 GB</span>
                            </div>
                            <div className="h-3 bg-zinc-900 rounded-full border border-outline-variant/5 p-1 shadow-inner">
                                <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(154,205,50,0.3)] transition-all duration-1000" style={{ width: '76%' }}></div>
                            </div>
                        </div>
                        <p className="relative z-10 text-stone-600 text-[10px] font-black uppercase tracking-[0.2em] mt-8">Asignación para estados temporales transaccionales</p>
                    </div>

                    {/* Next Schedule Card */}
                    <div className="bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary border-y border-r border-outline-variant/10 shadow-3xl flex flex-col justify-between group">
                        <div className="relative z-10">
                            <span className="text-primary font-black text-[9px] uppercase tracking-[0.4em] mb-4 block">Next Automated Pulse</span>
                            <h3 className="font-headline text-5xl font-black text-white tracking-tighter mb-2">04:00 AM</h3>
                            <p className="text-stone-500 text-xs font-medium uppercase tracking-widest italic">Daily Structural Snapshot</p>
                        </div>
                        <div className="flex items-center gap-6 mt-10">
                            <div className="flex -space-x-3">
                                {['D', 'L', 'M', 'X'].map((day, i) => (
                                    <div key={day} className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-zinc-900 text-[10px] font-black shadow-xl transition-all ${
                                        i >= 2 ? 'bg-primary text-black z-20 scale-110' : 'bg-zinc-800 text-stone-600'
                                    }`}>
                                        {day}
                                    </div>
                                ))}
                            </div>
                            <div className="h-4 w-px bg-zinc-800"></div>
                            <span className="text-stone-700 text-[9px] uppercase font-black tracking-[0.3em]">Next Cycle: Monday</span>
                        </div>
                    </div>
                </div>

                {/* Configuration Sections */}
                <div className="grid grid-cols-12 gap-10">
                    {/* Control Hub Sidebar */}
                    <div className="col-span-12 xl:col-span-4 flex flex-col gap-10">
                        {/* Scheduling Settings */}
                        <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl">
                            <h3 className="text-lg font-headline font-black text-white uppercase tracking-tight mb-10 flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
                                Task Scheduler
                            </h3>
                            <div className="space-y-6">
                                {controls.map((ctrl, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 bg-zinc-950 rounded-3xl border border-outline-variant/5 shadow-inner group/item hover:border-primary/20 transition-all">
                                        <span className="text-[11px] font-black text-white uppercase tracking-tight group-hover/item:text-primary transition-colors">{ctrl.label}</span>
                                        <div className={`w-12 h-6 rounded-full relative transition-all cursor-pointer ${ctrl.active ? 'bg-primary' : 'bg-zinc-800'}`}>
                                            <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${ctrl.active ? 'right-1 bg-black shadow-lg' : 'left-1 bg-stone-600'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 bg-zinc-950 py-5 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 border border-outline-variant/5 hover:border-primary hover:text-white transition-all shadow-xl active:scale-95">
                                Modify Logic Parameters
                            </button>
                        </div>

                        {/* Disaster Recovery Warning Zone */}
                        <div className="bg-zinc-950 p-10 rounded-[48px] border-2 border-red-900/20 shadow-3xl relative overflow-hidden group">
                           <div className="absolute inset-0 bg-red-950/5 group-hover:bg-red-950/10 transition-colors"></div>
                            <div className="relative z-10 flex flex-col h-full space-y-6">
                                <h3 className="text-lg font-headline font-black text-error uppercase tracking-tight flex items-center gap-4">
                                    <span className="material-symbols-outlined">report</span>
                                    Disaster Recovery
                                </h3>
                                <p className="text-stone-600 text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed">
                                    Inicie el protocolo de restauración de punto anterior. Esta acción sobrescribirá los datos actuales del sistema global.
                                </p>
                                <button className="w-full py-5 bg-red-950/20 border border-red-900/50 text-error font-black text-xs uppercase tracking-widest hover:bg-red-900 hover:text-white transition-all rounded-3xl flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
                                    <span className="material-symbols-outlined font-black">settings_backup_restore</span>
                                    RETORE CHECKPOINT
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Activity Ledger Table */}
                    <article className="col-span-12 xl:col-span-8 bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter">Activity Archives</h3>
                                <div className="flex gap-4">
                                    <div className="flex items-center bg-zinc-950 px-6 py-2 rounded-full border border-outline-variant/5 text-[9px] font-black text-stone-700 uppercase tracking-widest">
                                        Filter: All Records
                                    </div>
                                </div>
                            </div>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-zinc-950/80 text-stone-700 font-headline text-[9px] tracking-[0.4em] uppercase">
                                            <th className="px-6 py-5 font-black">Timestamp / Entropy</th>
                                            <th className="px-6 py-5 font-black">ID Hash (SHA256)</th>
                                            <th className="px-6 py-5 font-black">Payload Size</th>
                                            <th className="px-6 py-5 font-black">Input Vector</th>
                                            <th className="px-6 py-5 font-black text-right">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-black">
                                        {backupLogs.map((log, i) => (
                                            <tr key={i} className="border-b border-outline-variant/5 hover:bg-zinc-950/30 transition-colors group/row">
                                                <td className="px-6 py-6">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-white font-mono tracking-widest">{log.date}</span>
                                                        <span className="text-[9px] text-stone-700 font-mono tracking-tighter uppercase">{log.time}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6 font-mono text-[10px] text-stone-500 tracking-widest uppercase">{log.hash}</td>
                                                <td className="px-6 py-6 text-white font-mono tracking-tighter">{log.size}</td>
                                                <td className="px-6 py-6">
                                                    <span className="text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-lg border border-zinc-950 bg-zinc-950/50 text-stone-600">
                                                        {log.type}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-6 text-right">
                                                    <div className={`flex items-center justify-end gap-3 text-[9px] font-black uppercase tracking-[0.4em] ${
                                                        log.status === 'SUCCESS' ? 'text-primary' : 'text-error animate-pulse'
                                                    }`}>
                                                        <span className={`w-2.5 h-2.5 rounded-full ${log.status === 'SUCCESS' ? 'bg-primary' : 'bg-error'}`}></span>
                                                        {log.status}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Technical Specs Footer */}
                            <div className="mt-12 flex flex-wrap gap-10 items-center border-t border-zinc-950 pt-10">
                                {[
                                    { icon: 'verified', label: 'Integrity Check', val: 'OK: 100%' },
                                    { icon: 'cloud_sync', label: 'Cloud Mirror S3', val: 'CONNECTED' },
                                    { icon: 'security', label: 'Encryption Protocol', val: 'AES-GCM 256' }
                                ].map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{spec.icon}</span>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black text-stone-600 uppercase tracking-widest leading-none mb-1">{spec.label}</span>
                                            <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">{spec.val}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>

                {/* Industrial Footer */}
                <footer className="mt-24 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 px-4">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none italic">TITAN ERP CORE</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Heavy-Duty Redundancy & Cold Storage Topology</span>
                    </div>
                    <div className="flex items-center gap-10">
                        <div className="bg-zinc-950 p-6 rounded-3xl border border-outline-variant/10 shadow-2xl flex items-center gap-6">
                             <span className="text-[40px] font-headline font-black text-stone-900 leading-none select-none tracking-tighter">T-ERP</span>
                             <div className="h-10 w-px bg-zinc-800"></div>
                             <span className="text-[9px] text-stone-700 font-black uppercase tracking-[0.5em] max-w-[120px]">Disaster Recovery Policy Certified</span>
                        </div>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .text-highlight {
                    text-shadow: 0 0 40px rgba(154, 205, 50, 0.4);
                }
            `}} />
        </AuthenticatedLayout>
    );
}
