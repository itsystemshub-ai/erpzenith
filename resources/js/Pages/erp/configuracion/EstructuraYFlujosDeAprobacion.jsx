import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function EstructuraYFlujosDeAprobacion() {
    const departments = [
        { id: 'DEP-VNT-01', name: 'Ventas', manager: 'Ricardo M.', budget: '$2.4M', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJlRIUV_aMeyeBhsliUWLkcfpdxiUHxRFQagQ_pFnswEOff30bih_vwxa9iOVlNqw2aIV8RjNctEzWPRtqOJYTgp3PzBJgw8ObNtxqg5uFepadx0hy3NzQEOnQWtNZAuo4E6c2Dvn8gdOIwrAfUeJ6fv1GTvWrcsgI7EVMstBC5Y3daJUrQIQ9n8nfHh--NfWPt-COQHqnOiGMmIRkAcfJEWSV53GNbl9NDEJSiOiSXB1-NPYOeLP25TJp5ba4v2FcMnrxcAneVYQ' },
        { id: 'DEP-FIN-02', name: 'Finanzas', manager: 'Elena G.', budget: '$1.1M', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL5Otv2XcxStCXzJzr1Hm5hK5vWhKJfCXMNQjn3clhEIZcKK2wqgqTEegAXE37rIfiEJZYWVdyfEPDD9WqRCjNFusdFRgyMsY46PMw5fzLu00VxEhzFNFxYAQcH0EEY-O6MQTTJSnCUe1AVJSv6gzVfn6hb2PrhAUSonKa_FRXffnoFL5Ilfuhb7hT5HUem-PTWgO0idxFlm8NoCm4gsomcOz1-fpoT5cUBqqDaFv7HaKQ1wKGZ2joqvZgBMs3Yue1cnNFDjmm7Hs' },
        { id: 'DEP-ALM-03', name: 'Almacén', manager: 'Oscar L.', budget: '$3.8M', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTnATtUgD7dIsvFSLwget9WCdq0nxhOgarXxv2B2I1bX8zLKE8LqhtL-drdo2WbPlNwPUULGlsbqw2VWiAbbDlMNa50C0CqNVFDjsZ3IxF1EPboVx-CfAJhIouCOqH-tk8V9kZM2evpnfeqg5IRuKRUwE4hENGFSuV7AY59zC57HjlIaXuNeD4_oI6d1fWhFzA9iMQkF_kGusYCduOUy5IRVb6DepmX3zjry7HgJZWbEkARqlmUoofCkYlfY4M4AQfoEloJ4GKDr8' }
    ];

    const approvalSteps = [
        { level: 'Trigger Event', title: 'Purchase Requisition > $1,000', status: 'ACTIVE', color: 'bg-primary' },
        { level: 'Level 01 Review', title: 'Direct Supervisor Approval', status: 'WAITING', color: 'bg-zinc-600' },
        { level: 'Level 02 Validation', title: 'Finance Dept. Verification', status: 'WAITING', color: 'bg-zinc-600' },
        { level: 'Final Execution', title: 'System Disbursement', status: 'PENDING', color: 'bg-zinc-900' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">schema</span>
                    <span>Org Structure <span className="text-white/60 mx-2">|</span> Approval Topology</span>
                </div>
            }
        >
            <Head title="Estructura y Flujos de Aprobación" />

            <div className="space-y-12 pb-12">
                {/* Page Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-primary font-headline font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Operational Forge</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Approval Logic v4.0</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Hierarchical <br/> <span className="text-stone-700">Topology</span></h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest border border-outline-variant/10 hover:bg-zinc-800 transition-all flex items-center gap-3 active:scale-95">
                            <span className="material-symbols-outlined text-lg">download</span> Export Schema
                        </button>
                        <button className="bg-primary text-black px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                            <span className="material-symbols-outlined text-lg font-black">add</span> New Department
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-10">
                    {/* Departments CRUD Table */}
                    <article className="col-span-12 lg:col-span-7 bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                        <div className="absolute top-0 right-10 p-10 opacity-[0.02] rotate-12 pointer-events-none">
                            <span className="material-symbols-outlined text-[120px] text-white">corporate_fare</span>
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter">Active Departments</h3>
                                <span className="text-[9px] bg-primary/20 px-4 py-1.5 font-black text-primary rounded-full tracking-[0.3em] uppercase border border-primary/10">6 MODULES DETECTED</span>
                            </div>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-separate border-spacing-y-3">
                                    <thead>
                                        <tr className="text-[9px] uppercase font-black text-stone-600 tracking-[0.4em]">
                                            <th className="px-6 py-4">Department ID</th>
                                            <th className="px-6 py-4">Entity Name</th>
                                            <th className="px-6 py-4">Managed By</th>
                                            <th className="px-6 py-4">Annual Budget</th>
                                            <th className="px-6 py-4 text-right">Utility</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-black">
                                        {departments.map((dept, i) => (
                                            <tr key={dept.id} className="group/row transition-all hover:translate-x-2">
                                                <td className="px-6 py-5 bg-zinc-950 rounded-l-[24px] border-y border-l border-outline-variant/5 text-primary font-mono tracking-widest">{dept.id}</td>
                                                <td className="px-6 py-5 bg-zinc-950 border-y border-outline-variant/5 text-white uppercase tracking-tighter">{dept.name}</td>
                                                <td className="px-6 py-5 bg-zinc-950 border-y border-outline-variant/5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20 shadow-xl">
                                                            <img src={dept.avatar} alt={dept.manager} className="w-full h-full object-cover" />
                                                        </div>
                                                        <span className="text-stone-500 uppercase tracking-tight">{dept.manager}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5 bg-zinc-950 border-y border-outline-variant/5 font-mono text-white tracking-widest">{dept.budget}</td>
                                                <td className="px-6 py-5 bg-zinc-950 rounded-r-[24px] border-y border-r border-outline-variant/5 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <button className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-stone-600 hover:text-primary hover:border-primary/50 transition-all border border-outline-variant/5">
                                                            <span className="material-symbols-outlined text-lg">edit</span>
                                                        </button>
                                                        <button className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-stone-600 hover:text-error hover:border-error/50 transition-all border border-outline-variant/5">
                                                            <span className="material-symbols-outlined text-lg">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>

                    {/* Approval Chain Visualization */}
                    <article className="col-span-12 lg:col-span-5 bg-zinc-950 rounded-[48px] p-10 border border-outline-variant/10 shadow-3xl relative overflow-hidden flex flex-col group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter mb-12">Approval Chains</h3>
                            
                            <div className="flex-1 relative border-l-2 border-dashed border-zinc-800 ml-6 pl-12 py-4 space-y-10">
                                {approvalSteps.map((step, i) => (
                                    <div key={i} className="relative group/step">
                                        <div className={`absolute -left-[61px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${step.color} ring-8 ring-zinc-950 shadow-[0_0_20px_rgba(154,205,50,0.2)] z-20 group-hover/step:scale-125 transition-transform`}></div>
                                        <div className="bg-zinc-900/50 p-6 rounded-[28px] border border-outline-variant/5 shadow-2xl relative overflow-hidden group-hover/step:border-primary/20 transition-all">
                                            <div className="relative z-10">
                                                <p className={`text-[9px] font-black uppercase tracking-[0.4em] mb-2 ${step.status === 'ACTIVE' ? 'text-primary' : 'text-stone-600'}`}>{step.level}</p>
                                                <p className="text-sm font-black text-white uppercase tracking-tight">{step.title}</p>
                                                {step.status === 'WAITING' && <p className="text-[8px] text-stone-700 font-black uppercase tracking-widest mt-3">SLA: 24h Threshold</p>}
                                            </div>
                                            {step.status === 'ACTIVE' && (
                                                <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* RACI Assignment Matrix */}
                    <article className="col-span-12 bg-zinc-900 rounded-[48px] p-12 border border-outline-variant/10 shadow-3xl overflow-hidden group relative">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
                            <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter leading-none">RACI Assignment Matrix</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { k: 'R', l: 'Responsible', c: 'border-primary text-primary' },
                                    { k: 'A', l: 'Accountable', c: 'border-zinc-700 text-stone-500' },
                                    { k: 'C', l: 'Consulted', c: 'border-zinc-700 text-stone-500' },
                                    { k: 'I', l: 'Informed', c: 'border-zinc-700 text-stone-500' }
                                ].map(badge => (
                                    <div key={badge.k} className={`flex items-center gap-3 px-4 py-1.5 border rounded-full ${badge.c}`}>
                                        <span className="text-[10px] font-black">{badge.k}</span>
                                        <span className="text-[8px] font-black uppercase tracking-widest">{badge.l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-separate border-spacing-2">
                                <thead>
                                    <tr className="bg-zinc-950/50">
                                        <th className="p-6 rounded-l-3xl border border-outline-variant/5 text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] w-1/4">Process Activity</th>
                                        {['General Manager', 'Finance Lead', 'HR Admin', 'IT Ops', 'Logistics'].map(role => (
                                            <th key={role} className="p-6 border border-outline-variant/5 text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] text-center">{role}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="text-xs font-black">
                                    {[
                                        { act: 'Strategic Budget Planning', vals: ['A', 'R', 'C', 'I', 'C'] },
                                        { act: 'Inventory Procurement', vals: ['I', 'C', 'I', 'C', 'R/A'] },
                                        { act: 'Security Audit Protocol', vals: ['I', 'A', 'I', 'R', 'C'] },
                                        { act: 'Employee Onboarding', vals: ['I', 'I', 'R/A', 'C', 'I'] }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-zinc-950/20 transition-colors">
                                            <td className="p-6 bg-zinc-950/30 rounded-l-3xl border border-outline-variant/5 text-white uppercase tracking-tighter">{row.act}</td>
                                            {row.vals.map((v, j) => (
                                                <td key={j} className={`p-6 border border-outline-variant/5 text-center font-headline font-black text-lg ${v.includes('R') || v.includes('A') ? 'text-primary' : 'text-stone-700'}`}>
                                                    {v}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </article>

                    {/* Budget Monitor & Quick Actions */}
                    <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-zinc-950 rounded-[48px] p-12 border border-outline-variant/10 shadow-3xl group">
                            <h3 className="text-2xl font-headline font-black text-primary uppercase tracking-tighter mb-10">Budget Consumption Monitor</h3>
                            <div className="space-y-10">
                                {[
                                    { label: 'Ventas (DEP-VNT-01)', pct: 72, color: 'bg-primary' },
                                    { label: 'Almacén (DEP-ALM-03)', pct: 91, color: 'bg-amber-500', warning: true },
                                    { label: 'Finanzas (DEP-FIN-02)', pct: 34, color: 'bg-blue-400' }
                                ].map((bar, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-center px-2">
                                            <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.2em]">{bar.label}</span>
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${bar.warning ? 'text-amber-500 animate-pulse' : 'text-primary'}`}>
                                                {bar.pct}% {bar.warning ? 'Warning' : 'Consumed'}
                                            </span>
                                        </div>
                                        <div className="h-4 bg-zinc-900 rounded-full overflow-hidden border border-outline-variant/5 shadow-inner p-1">
                                            <div className={`h-full rounded-full ${bar.color} shadow-[0_0_15px_rgba(154,205,50,0.2)]`} style={{ width: `${bar.pct}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex-1 bg-primary rounded-[40px] p-10 flex items-center justify-between group cursor-pointer hover:rotate-1 transition-all active:scale-95 shadow-3xl">
                                <div className="flex items-center gap-8">
                                    <div className="w-20 h-20 bg-black/10 rounded-3xl flex items-center justify-center border border-black/5 shadow-inner">
                                        <span className="material-symbols-outlined text-5xl text-black font-black">schema</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/60 mb-2">Topology View</p>
                                        <p className="text-3xl font-headline font-black text-black uppercase tracking-tighter leading-none">Interactive <br/> Org Chart 3D</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-4xl text-black font-black group-hover:translate-x-4 transition-transform">east</span>
                            </div>
                            
                            <div className="flex-1 bg-zinc-900 rounded-[40px] p-10 flex items-center justify-between group cursor-pointer border border-outline-variant/5 hover:bg-zinc-800 transition-all active:scale-95 shadow-3xl">
                                <div className="flex items-center gap-8 text-white">
                                    <div className="w-20 h-20 bg-zinc-950 rounded-3xl flex items-center justify-center border border-outline-variant/5 shadow-xl">
                                        <span className="material-symbols-outlined text-5xl text-stone-600 font-black">history</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 mb-2">System Audit Log</p>
                                        <p className="text-2xl font-headline font-black uppercase tracking-tighter leading-none">Topology Change <br/> History (Last 24h)</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-4xl text-stone-700 font-black group-hover:scale-125 transition-transform">description</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secure Footer */}
                <footer className="mt-24 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-800 text-center md:text-left leading-relaxed">
                        © 2024 MAYOR DE REPUESTO LA CIMA, C.A.<br/>
                        <span className="text-stone-900">ALL RIGHTS RESERVED. PRECISION SYSTEM INTERFACE.</span>
                    </p>
                    <div className="flex items-center gap-6 bg-zinc-950 px-8 py-3 rounded-full border border-outline-variant/5 shadow-2xl">
                        <div className="w-3 h-3 rounded-full bg-primary animate-ping shadow-[0_0_15px_rgba(154,205,50,0.8)]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Secure Link Established</span>
                        <div className="h-4 w-px bg-zinc-800"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 font-mono tracking-widest">v4.0.2-STITCH</span>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
