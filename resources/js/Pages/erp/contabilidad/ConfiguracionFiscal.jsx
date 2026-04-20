import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ConfiguracionFiscal() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">gavel</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Configuración Legal y Fiscal</span>
                </div>
            }
        >
            <Head title="Configuración Legal y Fiscal" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-primary font-black mb-4">
                        <span>Compliance Node</span>
                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                        <span className="text-stone-600">Legal Configuration</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter text-white leading-none">
                        MAYOR DE REPUESTO <br/> <span className="text-stone-700">LA CIMA, C.A.</span>
                    </h1>
                    <p className="text-stone-500 mt-6 font-medium max-w-3xl leading-relaxed">
                        Official configuration panel for SENIAT fiscal alignment and documented industrial adjustments. 
                        High-security ledger synchronization enabled.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Fiscal Data Card */}
                    <div className="md:col-span-7 bg-zinc-900 p-12 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mr-32 -mt-32 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                        <h2 className="text-2xl font-headline font-black uppercase tracking-tight mb-12 flex items-center gap-4 text-white">
                            <span className="material-symbols-outlined text-primary text-3xl">fingerprint</span>
                            Fiscal Identification
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <label className="block text-[9px] uppercase tracking-[0.4em] text-stone-600 font-black">RIF Number</label>
                                <div className="bg-zinc-950 p-6 rounded-2xl border border-white/5 text-2xl font-mono text-primary tracking-[0.2em] shadow-inner">
                                    J-40308741-5
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[9px] uppercase tracking-[0.4em] text-stone-600 font-black">Contribuyente Especial</label>
                                <div className="flex items-center h-[76px]">
                                    <div className="bg-primary text-black px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-[0_0_20px_rgba(154,205,50,0.3)]">
                                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        STATUS: ACTIVE / YES
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                <label className="block text-[9px] uppercase tracking-[0.4em] text-stone-600 font-black">Registro Mercantil Seal #</label>
                                <div className="relative group/input">
                                    <input 
                                        className="w-full bg-zinc-950/50 border-white/5 focus:border-primary focus:ring-0 p-6 rounded-2xl text-stone-100 font-headline uppercase tracking-widest text-sm transition-all" 
                                        type="text" 
                                        defaultValue="TOMO 45-A-6782-Z"
                                    />
                                    <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-stone-800 group-focus-within/input:text-primary transition-colors">verified</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[9px] uppercase tracking-[0.4em] text-stone-600 font-black">Default IVA Rate</label>
                                <div className="flex items-end gap-3 text-white">
                                    <span className="text-6xl font-black tracking-tighter text-primary">16</span>
                                    <span className="text-2xl font-black text-stone-700 mb-2">%</span>
                                    <span className="text-[9px] text-stone-700 uppercase font-black mb-3 ml-4 tracking-widest">Standard Base</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex justify-end">
                            <button className="bg-zinc-950 border border-white/10 text-white px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl active:scale-95">
                                Sync Fiscal Changes
                            </button>
                        </div>
                    </div>

                    {/* Industrial Status Widget */}
                    <div className="md:col-span-5 flex flex-col gap-10">
                        <div className="bg-zinc-950 p-12 rounded-[48px] border-l-[12px] border-primary shadow-3xl flex flex-col justify-between h-full group">
                            <div>
                                <h2 className="text-2xl font-headline font-black uppercase tracking-tight mb-10 text-white">Compliance Score</h2>
                                <div className="flex items-center gap-10 mb-12">
                                    <div className="relative w-32 h-32 flex items-center justify-center group-hover:scale-105 transition-transform">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle className="text-zinc-900" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="10"></circle>
                                            <circle className="text-primary shadow-2xl" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="36.44" strokeWidth="10" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 8px #9acd32)' }}></circle>
                                        </svg>
                                        <span className="absolute text-3xl font-headline font-black text-white">90%</span>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-stone-300 font-black uppercase tracking-tighter text-sm">Verification Health</p>
                                        <p className="text-[10px] text-stone-700 font-medium uppercase tracking-widest leading-loose">Last audit: 12 days ago. <br/>All seals valid until 2025.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 bg-zinc-900/50 rounded-3xl border border-white/5 flex items-center justify-between group/status">
                                    <span className="text-[9px] uppercase font-black text-stone-600 tracking-widest group-hover/status:text-stone-400 transition-colors">SENIAT Web Service</span>
                                    <span className="flex items-center gap-3 text-[9px] font-black text-primary">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#9acd32]"></span>
                                        CONNECTED
                                    </span>
                                </div>
                                <div className="p-6 bg-zinc-900/50 rounded-3xl border border-white/5 flex items-center justify-between group/status">
                                    <span className="text-[9px] uppercase font-black text-stone-600 tracking-widest group-hover/status:text-stone-400 transition-colors">Mermas Reporting</span>
                                    <span className="text-[9px] font-black text-white px-3 py-1 bg-zinc-950 rounded-full tracking-widest">AUTOMATIC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Soportes Documentales */}
                <div className="space-y-10">
                    <div className="flex items-center justify-between border-b border-white/5 pb-8">
                        <h2 className="text-3xl font-headline font-black uppercase tracking-tighter text-white">Documental Supports</h2>
                        <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors group">
                            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">add_circle</span>
                            Upload Official Documentation
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: 'Mermas_Q3_Inventory.pdf', type: 'PDF', date: 'Oct 24, 2023', color: 'bg-error', icon: 'description' },
                            { name: 'Sello_Mercantil_Ref.jpg', type: 'IMG', date: 'Sep 12, 2023', color: 'bg-blue-600', icon: 'image' },
                            { name: 'IVA_Adjustment_Log.pdf', type: 'PDF', date: 'Aug 05, 2023', color: 'bg-error', icon: 'description' },
                        ].map((doc, i) => (
                            <div key={i} className="bg-zinc-900 p-2 rounded-[32px] border border-outline-variant/10 group hover:border-primary/20 transition-all shadow-xl hover:-translate-y-2">
                                <div className="aspect-[3/4] bg-zinc-950 rounded-[28px] relative overflow-hidden mb-6 group-hover:shadow-[0_0_20px_rgba(154,205,50,0.1)] transition-all">
                                    <div className="absolute inset-0 bg-industrial-mesh opacity-10 group-hover:opacity-20 transition-all"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                        <span className="material-symbols-outlined text-5xl text-primary drop-shadow-[0_0_15px_#9acd32]">visibility</span>
                                    </div>
                                    <div className={`absolute top-4 left-4 ${doc.color} text-black text-[8px] font-black px-3 py-1 uppercase rounded-full shadow-lg`}>{doc.type}</div>
                                    <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                                </div>
                                <div className="px-6 pb-6">
                                    <p className="text-xs font-black text-white truncate uppercase tracking-tight">{doc.name}</p>
                                    <p className="text-[8px] text-stone-700 uppercase tracking-widest mt-2">{doc.date}</p>
                                </div>
                            </div>
                        ))}
                        
                        <div className="border-4 border-dashed border-zinc-900 rounded-[32px] flex flex-col items-center justify-center p-12 group hover:border-primary/30 transition-all cursor-pointer bg-zinc-950/20 shadow-inner">
                            <span className="material-symbols-outlined text-stone-800 text-6xl mb-6 group-hover:text-primary transition-colors group-hover:scale-110 duration-500">cloud_upload</span>
                            <p className="text-[9px] uppercase font-black text-stone-800 tracking-[0.3em] text-center max-w-[120px] group-hover:text-stone-600 transition-colors leading-relaxed">
                                Drop files to attach to legal profile
                            </p>
                        </div>
                    </div>
                </div>

                {/* Industrial Footer Logs */}
                <div className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden mt-12">
                    <div className="p-10 bg-zinc-950 border-b border-outline-variant/5">
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-stone-500">Recent Audit Adjustment Logs</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/40 text-[9px] font-black uppercase tracking-[0.4em] text-stone-800">
                                    <th className="px-10 py-6">Ref Code</th>
                                    <th className="px-10 py-6">Operation & Compliance</th>
                                    <th className="px-10 py-6">Fiscal Delta</th>
                                    <th className="px-10 py-6">Validation</th>
                                    <th className="px-10 py-6 text-right">Authorized Node</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black divide-y divide-white/5">
                                <tr className="hover:bg-zinc-950/50 transition-colors group/row">
                                    <td className="px-10 py-8 font-mono text-stone-600 tracking-widest">ADJ-00982</td>
                                    <td className="px-10 py-8 text-white uppercase tracking-tight">Inventory Merma - Heavy Engine Gaskets</td>
                                    <td className="px-10 py-8 text-error font-mono">- 4,200.00 VED</td>
                                    <td className="px-10 py-8">
                                        <span className="text-[8px] font-black bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/20 shadow-lg tracking-widest">SENIAT VERIFIED</span>
                                    </td>
                                    <td className="px-10 py-8 text-right text-stone-700 uppercase text-[9px]">R. Rodriguez [QA-NODE-04]</td>
                                </tr>
                                <tr className="bg-zinc-950/20 hover:bg-zinc-950/50 transition-colors group/row">
                                    <td className="px-10 py-8 font-mono text-stone-600 tracking-widest">ADJ-00975</td>
                                    <td className="px-10 py-8 text-white uppercase tracking-tight">IVA Correction - Secure Credit Note #88</td>
                                    <td className="px-10 py-8 text-primary font-mono">+ 1,120.00 VED</td>
                                    <td className="px-10 py-8">
                                        <span className="text-[8px] font-black bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/20 shadow-lg tracking-widest">SENIAT VERIFIED</span>
                                    </td>
                                    <td className="px-10 py-8 text-right text-stone-700 uppercase text-[9px]">ADMIN SYSTEM [SRV-01]</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
