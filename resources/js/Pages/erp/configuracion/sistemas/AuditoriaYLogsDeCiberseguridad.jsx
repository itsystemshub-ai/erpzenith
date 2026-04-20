import React from 'react';
import { Link, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AuditoriaYLogsDeCiberseguridad() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline">
                    <span className="material-symbols-outlined">history_edu</span>
                    <span>Seguridad y Auditoría</span>
                </div>
            }
        >
            <Head title="Auditoría y Logs de Ciberseguridad" />

            <div className="space-y-8 pb-12">
                {/* Header Section */}
                <div className="relative overflow-hidden bg-zinc-900/50 backdrop-blur-md p-8 rounded-2xl flex flex-col md:flex-row justify-between items-end gap-6 border-l-8 border-primary shadow-2xl">
                    <div className="z-10">
                        <span className="text-primary font-headline font-bold text-xs tracking-widest uppercase mb-2 block">Level 4 Authorization Required</span>
                        <h1 className="text-4xl font-headline font-bold text-white uppercase tracking-tighter leading-none mb-4">Security Audit & Activity Logs</h1>
                        <p className="text-stone-400 font-body text-sm max-w-xl leading-relaxed">
                            Continuous monitoring of system-wide interactions. All cryptographic hashes and IP handshakes are recorded. Authorized access only. Unauthorized tampering triggers immediate lockout.
                        </p>
                    </div>
                    <div className="flex gap-4 z-10">
                        <div className="bg-zinc-950 p-4 min-w-[120px] rounded-xl border border-outline-variant/30">
                            <span className="text-[10px] text-stone-500 font-bold uppercase block mb-1">Live Events</span>
                            <span className="text-2xl font-headline font-bold text-primary">1,204</span>
                        </div>
                        <div className="bg-zinc-950 p-4 min-w-[120px] rounded-xl border border-outline-variant/30">
                            <span className="text-[10px] text-stone-500 font-bold uppercase block mb-1">Risk Score</span>
                            <span className="text-2xl font-headline font-bold text-amber-500">LOW</span>
                        </div>
                    </div>
                    {/* Subtle tech background element */}
                    <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                        <span className="material-symbols-outlined text-[200px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                    </div>
                </div>

                {/* Search & Filters */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
                    <div className="md:col-span-2 relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">search</span>
                        <input 
                            className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary pl-10 pr-4 py-3 rounded-xl font-headline text-xs tracking-widest uppercase placeholder:text-stone-400" 
                            placeholder="SEARCH LOGS BY USER, IP, OR ACTION..." 
                            type="text"
                        />
                    </div>
                    <div>
                        <select className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary py-3 rounded-xl font-headline text-xs tracking-widest uppercase appearance-none">
                            <option>ALL SEVERITY</option>
                            <option>CRITICAL</option>
                            <option>WARNING</option>
                            <option>INFO</option>
                        </select>
                    </div>
                    <button className="bg-zinc-950 text-white font-headline text-xs tracking-widest uppercase py-3 rounded-xl hover:bg-zinc-900 transition-all border border-outline-variant/30 flex items-center justify-center gap-2 active:scale-95">
                        <span className="material-symbols-outlined text-sm">filter_list</span>
                        Apply Filters
                    </button>
                </section>

                {/* Audit Log Table */}
                <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-950 text-stone-400 font-headline text-[10px] tracking-widest uppercase">
                                    <th className="px-6 py-4 font-bold border-b border-outline-variant/20">Timestamp / Auth ID</th>
                                    <th className="px-6 py-4 font-bold border-b border-outline-variant/20">User Identity</th>
                                    <th className="px-6 py-4 font-bold border-b border-outline-variant/20">Network Vector</th>
                                    <th className="px-6 py-4 font-bold border-b border-outline-variant/20">System Action</th>
                                    <th className="px-6 py-4 font-bold border-b border-outline-variant/20">Payload Delta (JSON)</th>
                                    <th className="px-6 py-4 font-bold border-b border-outline-variant/20 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="font-body text-sm divide-y divide-outline-variant/10">
                                {/* Row 1 */}
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-on-surface">2023-10-24 14:22:01</span>
                                            <span className="text-[10px] text-stone-500 font-mono tracking-tighter uppercase">AUTH_X99_221</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <span className="material-symbols-outlined text-primary text-sm">person</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold">admin.valencia</span>
                                                <span className="text-[10px] text-stone-500 uppercase">Superuser</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="font-mono text-xs bg-surface-container px-2 py-1 rounded border border-outline-variant/30">192.168.***.***</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="font-headline text-xs font-bold tracking-tight bg-zinc-950 text-primary px-2 py-1 rounded border border-primary/30 uppercase">LOGIN_SUCCESS</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="bg-surface-container p-2 rounded-lg border-l-2 border-primary text-[10px] font-mono leading-tight max-w-[200px]">
                                            <span className="text-stone-400">OLD:</span> null<br/>
                                            <span className="text-on-surface font-bold">NEW:</span> {"{\"session_id\":\"S_881\"}"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="bg-surface-container-low/20 hover:bg-surface-container-low transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-on-surface">2023-10-24 14:15:44</span>
                                            <span className="text-[10px] text-stone-500 font-mono tracking-tighter uppercase">AUTH_P01_990</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 bg-error/10 rounded-lg flex items-center justify-center">
                                                <span className="material-symbols-outlined text-error text-sm">warning</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold">inventory.mgr</span>
                                                <span className="text-[10px] text-stone-500 uppercase">Standard Access</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="font-mono text-xs bg-surface-container px-2 py-1 rounded border border-outline-variant/30">201.248.***.***</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="font-headline text-xs font-bold tracking-tight bg-error/10 text-error px-2 py-1 rounded border border-error/30 uppercase">DELETE_PRODUCT</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="bg-surface-container p-2 rounded-lg border-l-2 border-error text-[10px] font-mono leading-tight max-w-[200px]">
                                            <span className="text-stone-400">OLD:</span> {"{\"pid\":\"CMA-502\"}"}<br/>
                                            <span className="text-on-surface font-bold">NEW:</span> null
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <span className="material-symbols-outlined text-stone-400">visibility</span>
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-on-surface">2023-10-24 13:58:12</span>
                                            <span className="text-[10px] text-stone-500 font-mono tracking-tighter uppercase">AUTH_X99_101</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <span className="material-symbols-outlined text-primary text-sm">person</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold">sys.architect</span>
                                                <span className="text-[10px] text-stone-500 uppercase">Root</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="font-mono text-xs bg-surface-container px-2 py-1 rounded border border-outline-variant/30">LOCAL_LOOPBACK</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="font-headline text-xs font-bold tracking-tight bg-amber-500/10 text-amber-500 px-2 py-1 rounded border border-amber-500/30 uppercase">CONFIG_CHANGE</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="bg-surface-container p-2 rounded-lg border-l-2 border-amber-500 text-[10px] font-mono leading-tight max-w-[200px]">
                                            <span className="text-stone-400">OLD:</span> {"{\"encryption\":\"AES128\"}"}<br/>
                                            <span className="text-on-surface font-bold">NEW:</span> {"{\"encryption\":\"AES256\"}"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <span className="material-symbols-outlined text-amber-500">info</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Table Footer/Pagination */}
                    <div className="bg-zinc-950 px-6 py-4 flex items-center justify-between border-t border-outline-variant/20 text-stone-400">
                        <span className="text-[10px] font-headline font-bold uppercase">Showing 3 of 1,204 active audit records</span>
                        <div className="flex gap-4">
                            <button className="hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <div className="flex items-center gap-2">
                                <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded">1</span>
                                <span className="text-[10px] font-bold px-2 py-1 hover:text-primary cursor-pointer">2</span>
                                <span className="text-[10px] font-bold px-2 py-1 hover:text-primary cursor-pointer">3</span>
                            </div>
                            <button className="hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Forensic Tools */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between group hover:border-primary/50 transition-all shadow-xl">
                        <div>
                            <h3 className="font-headline font-bold uppercase text-xs tracking-widest text-white mb-4">Integrity Verification</h3>
                            <p className="text-stone-500 text-xs mb-6 leading-relaxed">Run a cryptographic hash check against all logs to ensure no tampering has occurred.</p>
                        </div>
                        <button className="w-full bg-zinc-950 text-white font-headline text-[10px] tracking-widest uppercase py-3 rounded-xl hover:bg-primary transition-all border border-outline-variant/30 flex items-center justify-center gap-2">
                           <span className="material-symbols-outlined text-sm">fingerprint</span>
                           Run SHA-256 Hash Audit
                        </button>
                    </div>
                    <div className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between group hover:border-amber-500/50 transition-all shadow-xl">
                        <div>
                            <h3 className="font-headline font-bold uppercase text-xs tracking-widest text-white mb-4">Export Forensics</h3>
                            <p className="text-stone-500 text-xs mb-6 leading-relaxed">Download activity logs in encrypted CSV or JSON formats for legal or compliance review.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="bg-zinc-950 text-stone-300 font-headline text-[10px] font-bold uppercase py-3 rounded-xl hover:bg-zinc-800 transition-all border border-outline-variant/30">CSV</button>
                            <button className="bg-zinc-950 text-stone-300 font-headline text-[10px] font-bold uppercase py-3 rounded-xl hover:bg-zinc-800 transition-all border border-outline-variant/30">JSON</button>
                        </div>
                    </div>
                    <div className="bg-zinc-950 p-6 rounded-2xl border border-primary/30 shadow-[0_0_50px_rgba(154,205,50,0.1)]">
                        <h3 className="font-headline font-bold uppercase text-xs tracking-widest text-primary mb-4">IP Blocklist Status</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-[10px] font-headline uppercase">
                                <span className="text-stone-400">Active Blocks</span>
                                <span className="text-white">42 Nodes</span>
                            </div>
                            <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[42%] shadow-[0_0_10px_#9acd32]"></div>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-headline uppercase">
                                <span className="text-stone-400">Last Synced</span>
                                <span className="text-white">3 mins ago</span>
                            </div>
                            <button className="w-full mt-4 text-primary text-[10px] font-bold uppercase underline underline-offset-4 hover:text-white transition-colors">Manage Global Blocklist</button>
                        </div>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
