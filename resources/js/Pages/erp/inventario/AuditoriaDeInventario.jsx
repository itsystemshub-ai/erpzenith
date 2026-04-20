import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AuditoriaDeInventario() {
    const [showSupervisorModal, setShowSupervisorModal] = useState(false);

    const auditItems = [
        { id: 'KIT-3422-MX', shelf: 'Estante A-12', name: 'Bomba de Agua Toyota Hilux 2.5', theoretical: 24, physical: 18, diff: -6, critical: true },
        { id: 'FILT-900-OIL', shelf: 'Estante A-04', name: 'Filtro Aceite Premium Genérico', theoretical: 150, physical: 150, diff: 0, critical: false },
        { id: 'FR-8821-PAD', shelf: 'Estante A-09', name: 'Pastillas de Freno Delanteras Ford Explorer', theoretical: 42, physical: 44, diff: 2, critical: false },
        { id: 'RAD-400-ALU', shelf: 'Estante A-15', name: 'Radiador Aluminio Chevrolet Silverado 2018', theoretical: 8, physical: null, diff: 'Pending', critical: false }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">inventory</span>
                    <span>Inventario <span className="text-white/60 mx-2">|</span> Auditoría Física de Almacén</span>
                </div>
            }
        >
            <Head title="Auditoría de Inventario - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Tactical Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Warehouse Audit Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Blind Count Node</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Physical <br/> <span className="text-stone-700">Audit</span></h1>
                    </div>
                    
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 border border-zinc-800 text-white px-8 py-5 rounded-[24px] font-black uppercase tracking-[0.4em] text-[10px] hover:border-primary transition-all italic flex items-center gap-4 group">
                             <span className="material-symbols-outlined text-stone-700 group-hover:text-primary transition-colors italic">download</span>
                             Export PDF Ledger
                        </button>
                        <button className="bg-primary text-black px-10 py-5 rounded-[24px] font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all italic shadow-2xl shadow-primary/5 active:scale-95 flex items-center gap-4 group">
                             <span className="material-symbols-outlined group-hover:rotate-180 transition-transform italic">sync_alt</span>
                             Sync & Reconcile
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                    {/* Selection Panel & Session Stats */}
                    <aside className="xl:col-span-4 space-y-10">
                        {/* Audit Parameters */}
                        <section className="bg-zinc-900 border border-outline-variant/10 shadow-3xl rounded-[56px] p-10 relative overflow-hidden group border-l-[12px] border-l-primary">
                             <h3 className="text-xl font-headline font-black uppercase tracking-widest text-white italic mb-10 border-b border-zinc-800 pb-6 block">Audit Parameters</h3>
                             
                             <div className="space-y-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Target Aisle / Zone</label>
                                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white text-[11px] font-black uppercase tracking-widest focus:ring-2 focus:ring-primary appearance-none italic">
                                        <option>AISLE A - ENGINE & TRANSMISSION</option>
                                        <option>AISLE B - SUSPENSION & BRAKES</option>
                                        <option>AISLE C - ELECTRICAL & LIGHTING</option>
                                        <option>AISLE D - BODY & ACCESSORIES</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Criticality Threshold</label>
                                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white text-[11px] font-black uppercase tracking-widest focus:ring-2 focus:ring-primary appearance-none italic">
                                        <option>UNIVERSAL INVENTORY</option>
                                        <option>HIGH TURNOVER ASSETS</option>
                                        <option>PREMIUM VALUE ENTITIES</option>
                                    </select>
                                </div>
                                <button className="w-full py-5 border-2 border-primary text-primary hover:bg-primary hover:text-black rounded-[24px] font-black uppercase tracking-[0.4em] text-[10px] transition-all italic shadow-2xl shadow-primary/5 active:scale-95">INITIATE ZONE AUDIT</button>
                             </div>
                        </section>

                        {/* Session Analytics */}
                        <section className="bg-zinc-950 border border-outline-variant/10 shadow-3xl rounded-[56px] p-10 relative overflow-hidden group border-l-[12px] border-l-stone-800">
                             <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
                             <h3 className="text-[11px] font-black uppercase tracking-[0.6em] text-stone-500 italic mb-8 border-b border-zinc-800 pb-4 block">Session Telemetry</h3>
                             
                             <div className="space-y-10 relative z-10">
                                <div className="flex justify-between items-end scale-110 origin-left px-4">
                                     <div className="text-6xl font-headline font-black text-white italic tracking-tighter">42<span className="text-stone-800">/120</span></div>
                                     <div className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic mb-2">Items Resolved</div>
                                </div>
                                
                                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
                                     <div className="bg-primary h-full w-[35%] shadow-[0_0_20px_#9acd32]"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                     <div className="bg-zinc-900/50 p-6 rounded-[32px] border border-zinc-800/50 shadow-inner group-hover:-translate-y-1 transition-transform">
                                         <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest italic block mb-2">Discrepancy Rate</span>
                                         <span className="text-xl font-headline font-black text-error italic tracking-tighter">12%</span>
                                     </div>
                                     <div className="bg-zinc-900/50 p-6 rounded-[32px] border border-zinc-800/50 shadow-inner group-hover:-translate-y-1 transition-transform delay-75">
                                         <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest italic block mb-2">Net Value Delta</span>
                                         <span className="text-xl font-headline font-black text-white italic tracking-tighter">-$420.00</span>
                                     </div>
                                </div>
                             </div>
                             
                             <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/5 text-[160px] font-black italic group-hover:scale-110 transition-transform">analytics</span>
                        </section>
                    </aside>

                    {/* Main Entry Panel */}
                    <div className="xl:col-span-8 space-y-10">
                        <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden flex flex-col min-h-[600px]">
                            <div className="p-10 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/20">
                                <h3 className="text-xl font-headline font-black uppercase tracking-widest italic text-white leading-none">Blind Count Entry <span className="text-stone-700 italic">| Physical Sync</span></h3>
                                <div className="flex items-center gap-4 bg-error/10 text-error px-6 py-2 rounded-full border border-error/20 animate-pulse">
                                    <span className="material-symbols-outlined text-lg font-black italic">warning</span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] italic">3 Critical Discrepancies Detected</span>
                                </div>
                            </div>
                            
                            <div className="overflow-x-auto flex-1">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-zinc-950/30 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                                            <th className="px-10 py-6">Asset ID / Node</th>
                                            <th className="px-10 py-6">Descriptor</th>
                                            <th className="px-10 py-6 text-center">Protocol Theoretical</th>
                                            <th className="px-10 py-6 w-48 text-center">Physical Count</th>
                                            <th className="px-10 py-6 text-right">Delta Sync</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800/30 font-bold italic">
                                        {auditItems.map((item, i) => (
                                            <tr key={i} className="hover:bg-zinc-950/50 transition-colors group">
                                                <td className="px-10 py-8">
                                                    <div className="text-[11px] font-black text-white font-mono uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{item.id}</div>
                                                    <div className="text-[9px] font-black text-stone-700 uppercase italic tracking-widest">{item.shelf}</div>
                                                </td>
                                                <td className="px-10 py-8 text-[12px] font-black text-stone-400 group-hover:text-white transition-colors uppercase leading-tight italic">{item.name}</td>
                                                <td className="px-10 py-8 text-center">
                                                    <span className="bg-zinc-950/80 px-4 py-1.5 rounded-full text-[10px] font-black text-stone-500 uppercase italic border border-zinc-800">{item.theoretical} units</span>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <input type="number" defaultValue={item.physical} placeholder="--" className={`w-full bg-zinc-950 border-2 font-headline font-black text-center py-3 text-xl rounded-2xl italic tracking-tighter transition-all focus:ring-0 ${item.critical ? 'border-error/30 text-error focus:border-error' : 'border-zinc-800 text-primary focus:border-primary placeholder:text-stone-900 grayscale focus:grayscale-0'}`} />
                                                </td>
                                                <td className="px-10 py-8 text-right font-headline font-black text-2xl italic tracking-tighter">
                                                    {item.diff === 'Pending' ? (
                                                        <span className="text-[10px] font-black text-stone-800 uppercase tracking-widest">Awaiting Count</span>
                                                    ) : (
                                                        <div className="flex items-center justify-end gap-3">
                                                            <span className={item.diff < 0 ? 'text-error' : 'text-primary'}>{item.diff > 0 && '+'}{item.diff}</span>
                                                            <span className={`material-symbols-outlined text-lg ${item.diff < 0 ? 'text-error animate-bounce' : 'text-primary'}`}>{item.diff === 0 ? 'check_circle' : (item.diff < 0 ? 'error' : 'trending_up')}</span>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Operational Capabilities Table */}
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 group hover:border-primary/30 transition-all cursor-pointer shadow-3xl">
                                <div className="w-16 h-16 bg-zinc-950 rounded-3xl flex items-center justify-center text-primary border border-zinc-800 group-hover:scale-110 transition-transform shadow-xl mb-6"><span className="material-symbols-outlined text-3xl font-black italic">qr_code_scanner</span></div>
                                <h4 className="text-[12px] font-black text-white uppercase italic tracking-widest mb-2">Mass Scan Protocol</h4>
                                <p className="text-[9px] font-black text-stone-700 uppercase italic leading-loose">Automate high-volume blind count entry via industrial edge peripherals.</p>
                            </div>
                            <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 group hover:border-error/30 transition-all cursor-pointer shadow-3xl" onClick={() => setShowSupervisorModal(true)}>
                                <div className="w-16 h-16 bg-zinc-950 rounded-3xl flex items-center justify-center text-error border border-zinc-800 group-hover:scale-110 transition-transform shadow-xl mb-6"><span className="material-symbols-outlined text-3xl font-black italic">verified_user</span></div>
                                <h4 className="text-[12px] font-black text-white uppercase italic tracking-widest mb-2">Supervisor Override</h4>
                                <p className="text-[9px] font-black text-stone-700 uppercase italic leading-loose">Reconcile assets exceeding 5% variance via secure supervisor credentials.</p>
                            </div>
                            <div className="bg-zinc-950 p-10 rounded-[48px] border-4 border-dashed border-zinc-900 group hover:border-primary/20 transition-all cursor-pointer shadow-inner">
                                <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-black shadow-xl mb-6 group-hover:translate-y-[-5px] transition-transform"><span className="material-symbols-outlined text-3xl font-black italic">history</span></div>
                                <h4 className="text-[12px] font-black text-white uppercase italic tracking-widest mb-2">Historical Ledger</h4>
                                <p className="text-[9px] font-black text-stone-700 uppercase italic leading-loose">Access past Aisle A audits to identify reoccurring asset leakage patterns.</p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Industrial Infrastructure Footer */}
                <footer className="mt-20 pt-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-4 gap-16 px-6">
                    <div className="space-y-6">
                        <div className="text-white font-headline font-black tracking-[-0.1em] text-3xl opacity-10 italic mb-4 uppercase">Forge_Logistics_Audit</div>
                        <p className="text-[10px] font-black text-stone-800 leading-loose uppercase tracking-widest italic max-w-sm">Precision physical reconciliation for high-performance industrial supply chains. Total asset transparency node.</p>
                    </div>
                    <div className="space-y-6">
                         <h5 className="text-[11px] font-black text-stone-500 uppercase tracking-[0.6em] italic">Session Metadata</h5>
                         <p className="text-[10px] font-black text-stone-800 uppercase italic tracking-widest leading-loose">
                            Audit ID: TF-2024-AISLE_A<br/>
                            Status: ACTIVE_TRACKING<br/>
                            Compliance: ISLR Art. 177 Perpetual
                        </p>
                    </div>
                    <div className="col-span-1 md:col-span-2 text-right flex flex-col justify-end gap-2 grayscale">
                        <div className="text-primary font-headline text-[13px] font-black italic tracking-[0.2em] uppercase leading-none italic mb-2">MAYOR DE REPUESTO LA CIMA, C.A.</div>
                        <div className="text-stone-800 font-mono text-[10px] font-black italic tracking-widest leading-none">RIF: J-40308741-5 | VALENCIA_VE_HUB</div>
                        <span className="text-[9px] font-black text-stone-900 uppercase tracking-[0.1em] mt-4 italic">© 2024 Titan Systems Group LLC. ALL PHYSICAL COUNT PROTOCOLS ACTIVE.</span>
                    </div>
                </footer>
            </div>

            {/* Supervisor Modal Overlay */}
            {showSupervisorModal && (
                <div className="fixed inset-0 bg-stone-950/90 backdrop-blur-3xl z-[100] flex items-center justify-center p-6 animate-in fade-in duration-500">
                    <div className="bg-zinc-900 border-t-[12px] border-t-error rounded-[56px] shadow-3xl max-w-xl w-full p-16 space-y-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-error/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-6 text-error">
                                <span className="material-symbols-outlined text-5xl font-black italic">lock_open</span>
                                <h3 className="text-4xl font-headline font-black uppercase tracking-tighter italic">Auth Override</h3>
                            </div>
                            <p className="text-[13px] font-black text-stone-700 uppercase italic leading-loose tracking-widest">Critical variance detected in <span className="text-white">3 high-value asset nodes</span>. Input supervisor clearance token to authorize physical-to-theoretical reconciliation.</p>
                        </div>

                        <div className="space-y-8 relative z-10">
                            <input type="password" placeholder="••••••••" className="w-full bg-zinc-950 border-none rounded-3xl py-10 text-white text-center text-4xl tracking-[0.5em] focus:ring-4 focus:ring-error/20 transition-all font-mono placeholder:text-stone-900 shadow-inner" />
                            <div className="grid grid-cols-2 gap-6">
                                <button className="bg-zinc-800 text-stone-500 py-6 rounded-[32px] font-black uppercase tracking-[0.4em] text-[11px] italic hover:bg-zinc-700 transition-all active:scale-95" onClick={() => setShowSupervisorModal(false)}>ABORT RECON</button>
                                <button className="bg-error text-white py-6 rounded-[32px] font-black uppercase tracking-[0.4em] text-[11px] italic shadow-2xl shadow-error/20 hover:scale-105 active:scale-95 transition-all">AUTHORIZE DELTA</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Persistent FAB for Action Sync */}
            <button className="fixed bottom-12 right-12 w-24 h-24 bg-primary text-black rounded-full shadow-3xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group shadow-primary/20">
                <span className="material-symbols-outlined text-4xl font-black italic group-hover:rotate-180 transition-transform">save</span>
                <span className="absolute -top-1 -right-1 bg-error text-white w-8 h-8 rounded-full border-4 border-black text-[10px] font-black flex items-center justify-center italic shadow-xl">3</span>
            </button>
        </AuthenticatedLayout>
    );
}
