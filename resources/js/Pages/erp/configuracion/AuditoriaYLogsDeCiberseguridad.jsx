import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AuditoriaYLogsDeCiberseguridad() {
    const logs = [
        {
            id: 'AUTH_X99_221',
            timestamp: '2023-10-24 14:22:01',
            user: 'admin.valencia',
            role: 'Superuser',
            ip: '192.168.***.***',
            action: 'LOGIN_SUCCESS',
            actionColor: 'bg-zinc-950 text-primary',
            oldVal: 'null',
            newVal: '{"session_id":"S_881"}',
            statusIcon: 'verified_user',
            statusColor: 'text-primary'
        },
        {
            id: 'AUTH_P01_990',
            timestamp: '2023-10-24 14:15:44',
            user: 'inventory.mgr',
            role: 'Standard Access',
            ip: '201.248.***.***',
            action: 'DELETE_PRODUCT',
            actionColor: 'bg-error text-white',
            oldVal: '{"pid":"CMA-502"}',
            newVal: 'null',
            statusIcon: 'visibility',
            statusColor: 'text-stone-500'
        },
        {
            id: 'AUTH_X99_101',
            timestamp: '2023-10-24 13:58:12',
            user: 'sys.architect',
            role: 'Root',
            ip: 'LOCAL_LOOPBACK',
            action: 'CONFIG_CHANGE',
            actionColor: 'bg-zinc-950 text-amber-500',
            oldVal: '{"encryption":"AES128"}',
            newVal: '{"encryption":"AES256"}',
            statusIcon: 'info',
            statusColor: 'text-amber-500'
        }
    ];

    const forensicTools = [
        {
            title: 'Integrity Verification',
            desc: 'Run a cryptographic hash check against all logs to ensure no tampering has occurred.',
            btn: 'Run SHA-256 Hash Audit',
            icon: 'fingerprint',
            accent: 'text-primary'
        },
        {
            title: 'Export Forensics',
            desc: 'Download activity logs in encrypted CSV or JSON formats for legal or compliance review.',
            btn: 'Download SEC-ARCHIVE',
            icon: 'file_download',
            accent: 'text-amber-500'
        }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">history_edu</span>
                    <span>Seguridad <span className="text-white/60 mx-2">|</span> Auditoría y Logs de Ciberseguridad</span>
                </div>
            }
        >
            <Head title="Auditoría y Logs de Ciberseguridad" />

            <div className="space-y-12 pb-12">
                {/* SOC Header Section */}
                <header className="relative overflow-hidden bg-zinc-900 rounded-[48px] p-12 border-l-[12px] border-primary shadow-3xl group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    <div className="relative z-10 flex flex-col xl:flex-row justify-between items-end gap-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Level 4 Authorization Required</span>
                                <div className="h-px w-12 bg-white/10"></div>
                                <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em]">Cryptographic Handshake Protocol</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-[0.85]">Security Audit <br/> <span className="text-stone-700">&amp; Access Logs</span></h1>
                            <p className="text-stone-500 text-sm font-medium max-w-2xl leading-relaxed">
                                Continuous monitoring of system-wide interactions. All cryptographic hashes and IP handshakes are recorded. 
                                Unauthorized tampering triggers immediate system-wide lockout across all nodes.
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <div className="bg-zinc-950 p-8 rounded-[32px] border border-outline-variant/5 shadow-inner flex flex-col items-center min-w-[160px] group-hover:scale-105 transition-transform">
                                <span className="text-[9px] text-stone-700 font-black uppercase tracking-[0.4em] mb-2">Live Events</span>
                                <span className="text-4xl font-headline font-black text-primary tracking-tighter">1,204</span>
                            </div>
                            <div className="bg-zinc-950 p-8 rounded-[32px] border border-outline-variant/5 shadow-inner flex flex-col items-center min-w-[160px] group-hover:scale-105 transition-transform">
                                <span className="text-[9px] text-stone-700 font-black uppercase tracking-[0.4em] mb-2">Risk Score</span>
                                <span className="text-4xl font-headline font-black text-amber-500 tracking-tighter">LOW</span>
                            </div>
                        </div>
                    </div>
                    {/* Security Watermark */}
                    <div className="absolute right-0 top-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
                        <span className="material-symbols-outlined text-[240px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                    </div>
                </header>

                {/* Filter & Command Center */}
                <section className="bg-zinc-900/50 p-3 rounded-[32px] border border-outline-variant/10 backdrop-blur-xl flex flex-wrap items-center gap-6 shadow-3xl">
                    <div className="flex-1 relative min-w-[320px]">
                        <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-stone-600">search</span>
                        <input className="w-full bg-zinc-950/50 border-none rounded-2xl py-4 pl-16 pr-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary focus:ring-1 focus:ring-primary shadow-inner" placeholder="SEARCH LOGS BY USER, IP, OR CRYPTO-HASH..." type="text"/>
                    </div>
                    <div className="flex gap-4 px-4">
                        <select className="bg-zinc-950 border-none rounded-xl py-3 px-8 text-[9px] font-black uppercase tracking-widest text-stone-500 focus:ring-1 focus:ring-primary">
                            <option>ALL SEVERITY</option>
                            <option>LEVEL: CRITICAL</option>
                            <option>LEVEL: WARNING</option>
                            <option>LEVEL: INFO</option>
                        </select>
                        <button className="bg-primary text-black px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                            <span className="material-symbols-outlined text-lg font-black">filter_list</span> Apply Vectors
                        </button>
                    </div>
                </section>

                {/* Audit Log Terminal */}
                <div className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-950/80 text-stone-700 font-headline text-[9px] tracking-[0.4em] uppercase">
                                    <th className="px-8 py-6 font-black">Timestamp / Auth ID</th>
                                    <th className="px-8 py-6 font-black">User Identity</th>
                                    <th className="px-8 py-6 font-black">Network Vector</th>
                                    <th className="px-8 py-6 font-black">System Action</th>
                                    <th className="px-8 py-6 font-black">Payload Delta (JSON)</th>
                                    <th className="px-8 py-6 font-black text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {logs.map((log, i) => (
                                    <tr key={i} className="border-b border-outline-variant/5 hover:bg-zinc-950/30 transition-colors group/row">
                                        <td className="px-8 py-8">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-white font-mono tracking-widest">{log.timestamp}</span>
                                                <span className="text-[9px] text-stone-700 font-mono tracking-tighter uppercase">{log.id}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center border border-outline-variant/5 group-hover/row:border-primary/20 transition-colors shadow-inner">
                                                    <span className="material-symbols-outlined text-stone-600 text-xl">person</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-white uppercase tracking-tight">{log.user}</span>
                                                    <span className="text-[8px] text-stone-700 uppercase tracking-widest">{log.role}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-8">
                                            <span className="font-mono text-[10px] bg-zinc-950 text-stone-600 px-4 py-2 rounded-lg border border-outline-variant/5 shadow-inner tracking-widest mask-encrypted">
                                                {log.ip}
                                            </span>
                                        </td>
                                        <td className="px-8 py-8">
                                            <span className={`font-headline text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase border border-white/5 shadow-xl ${log.actionColor}`}>
                                                {log.action}
                                            </span>
                                        </td>
                                        <td className="px-8 py-8">
                                            <div className="bg-zinc-950/80 p-4 rounded-2xl border border-outline-variant/5 text-[9px] font-mono leading-relaxed max-w-[240px] shadow-inner group-hover/row:bg-zinc-950 transition-colors">
                                                <span className="text-stone-700">OLD:</span> <span className="text-stone-500">{log.oldVal}</span><br/>
                                                <span className="text-primary font-black uppercase text-[8px] mt-1 block">NEW:</span> 
                                                <span className="text-stone-200 block truncate">{log.newVal}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-8 text-right">
                                            <span className={`material-symbols-outlined text-2xl font-black ${log.statusColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                                {log.statusIcon}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Sidebar-like Footer */}
                    <div className="bg-zinc-950/80 px-8 py-5 flex items-center justify-between border-t border-outline-variant/10">
                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.5em]">Showing 03 of 1,204 active forensic records</span>
                        <div className="flex items-center gap-4">
                            <button className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-stone-700 hover:text-white transition-all border border-outline-variant/5">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-8 flex items-center justify-center bg-primary text-black rounded-lg text-[10px] font-black">1</span>
                                <span className="w-8 h-8 flex items-center justify-center text-stone-700 hover:text-white transition-colors cursor-pointer text-[10px] font-black">2</span>
                                <span className="w-8 h-8 flex items-center justify-center text-stone-700 hover:text-white transition-colors cursor-pointer text-[10px] font-black">3</span>
                            </div>
                            <button className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-stone-700 hover:text-white transition-all border border-outline-variant/5">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Forensic Toolbox */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {forensicTools.map((tool, i) => (
                        <div key={i} className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group hover:border-primary/20 transition-all">
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-lg font-headline font-black text-white uppercase tracking-tight flex items-center gap-4">
                                    <span className={`w-8 h-1 ${tool.accent === 'text-primary' ? 'bg-primary' : 'bg-amber-500'} rounded-full`}></span>
                                    {tool.title}
                                </h3>
                                <p className="text-stone-500 text-xs font-medium leading-relaxed">{tool.desc}</p>
                                <button className={`w-full bg-zinc-950 py-5 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] transition-all border border-outline-variant/5 ${
                                    tool.accent === 'text-primary' ? 'hover:bg-primary hover:text-black border-primary/20' : 'hover:bg-amber-500 hover:text-black border-amber-500/20'
                                } shadow-xl active:scale-95`}>
                                    {tool.btn}
                                </button>
                            </div>
                            <span className={`material-symbols-outlined absolute -bottom-8 -right-8 text-[140px] opacity-[0.03] group-hover:opacity-10 transition-all group-hover:scale-110 pointer-events-none ${tool.accent}`} data-icon={tool.icon}>
                                {tool.icon}
                            </span>
                        </div>
                    ))}
                    
                    {/* IP Blocklist Card */}
                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="space-y-6">
                                <h3 className="text-lg font-headline font-black text-primary uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                                    IP Blocklist Status
                                </h3>
                                <div className="space-y-4 pt-4">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em]">
                                        <span className="text-stone-700">Active Nodes</span>
                                        <span className="text-white font-mono">42 BLOCKED</span>
                                    </div>
                                    <div className="h-3 bg-zinc-900 rounded-full border border-outline-variant/5 p-0.5 shadow-inner">
                                        <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(154,205,50,0.4)]" style={{ width: '42%' }}></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em]">
                                        <span className="text-stone-700">Sync Pulse</span>
                                        <span className="text-white font-mono">3 MINS AGO</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-10 text-primary text-[10px] font-black uppercase tracking-[0.4em] underline underline-offset-[12px] hover:text-white transition-all decoration-primary/30">
                                Manage Global Firewall
                            </button>
                        </div>
                    </div>
                </section>

                {/* Secure Session Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 px-4">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none">LA CIMA SECURITY</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Heavy-Duty Digital Defense Node</span>
                    </div>
                    <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700">
                        <div className="flex flex-col gap-2">
                            <span className="text-stone-900">RIF REGISTER</span>
                            <span className="text-stone-500 font-mono tracking-widest">J-31422100-5</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-stone-900">SYSTEM CORE</span>
                            <span className="text-stone-500 font-mono tracking-widest">FORGE-SOC-99</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 bg-zinc-950 px-8 py-3 rounded-full border border-outline-variant/5 shadow-2xl">
                        <div className="flex gap-2">
                            <div className="h-1.5 w-8 bg-primary rounded-full shadow-[0_0_10px_rgba(154,205,50,0.5)]"></div>
                            <div className="h-1.5 w-4 bg-zinc-800 rounded-full"></div>
                            <div className="h-1.5 w-2 bg-zinc-800 rounded-full"></div>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-800">Secure Session Encrypted</span>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .mask-encrypted {
                    filter: blur(0px);
                    transition: filter 0.3s ease;
                }
                .mask-encrypted:hover {
                    filter: blur(0px);
                }
            `}} />
        </AuthenticatedLayout>
    );
}
