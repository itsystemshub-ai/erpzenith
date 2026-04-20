import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DashboardDeInventario() {
    const movements = [
        { type: 'ENTRY', id: 'FAC-2024-0092', desc: 'Main Bearing Set V8 Heavy Duty', qty: 45, status: 'VERIFIED', color: 'text-primary' },
        { type: 'EXIT', id: 'REM-2024-0412', desc: 'Turbocharger GT-45 Gen 2', qty: 12, status: 'VERIFIED', color: 'text-error' },
        { type: 'ADJUST', id: 'ADJ-2024-0015', desc: 'Valve Spring Industrial Grade', qty: -2, status: 'PENDING', color: 'text-amber-500' },
        { type: 'ENTRY', id: 'FAC-2024-0091', desc: 'Cylinder Head Gasket (Copper)', qty: 120, status: 'VERIFIED', color: 'text-primary' }
    ];

    const stockItems = [
        { id: 'TP-9001-H', name: 'Main Bearing Set V8 Heavy Duty', stock: '424 Units', cost: '$ 142.50', total: '$ 60,420.00' },
        { id: 'TC-450-G2', name: 'Turbocharger GT-45 Gen 2', stock: '12 Units', cost: '$ 1,850.00', total: '$ 22,200.00', low: true },
        { id: 'PG-1120-C', name: 'Piston Ring Set 120mm', stock: '88 Units', cost: '$ 45.20', total: '$ 3,977.60' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">inventory_2</span>
                    <span>Inventario <span className="text-white/60 mx-2">|</span> Operaciones de Stock</span>
                </div>
            }
        >
            <Head title="Dashboard de Inventario - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Tactical Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Asset Logistics Node</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Stock Operations Control</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Inventory <br/> <span className="text-stone-700">Analytics</span></h1>
                    </div>
                    
                    <div className="flex flex-col items-end gap-4 shadow-2xl">
                         <div className="bg-zinc-900 border border-zinc-800 px-8 py-4 rounded-3xl italic">
                            <span className="text-[9px] font-black text-stone-600 block uppercase tracking-[0.4em]">Integrated Subsystem</span>
                            <span className="text-primary font-black text-[10px] uppercase tracking-widest italic">Art. 177 ISLR COMPLIANCE_SYNC</span>
                         </div>
                    </div>
                </header>

                {/* Performance Metrics Console */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 border-l-[12px] border-l-primary relative overflow-hidden group shadow-3xl">
                        <div className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] mb-8 italic">Total Asset Valuation</div>
                        <div className="text-4xl font-headline font-black text-white italic tracking-tighter leading-none mb-2">$ 1.428.550<span className="text-stone-700">.00</span></div>
                        <div className="text-[10px] text-primary font-black uppercase tracking-widest italic">Weighted Average Cost (WAC)</div>
                        <span className="material-symbols-outlined absolute top-6 right-8 text-white/5 text-6xl font-black italic group-hover:scale-110 transition-transform">database</span>
                    </div>
                    
                    <div className="bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 border-l-[12px] border-l-blue-500/50 relative overflow-hidden group shadow-3xl">
                        <div className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] mb-8 italic">Inventory Turnover</div>
                        <div className="text-6xl font-headline font-black text-white italic tracking-tighter leading-none mb-2">4.2x</div>
                        <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest italic tracking-[0.1em]">FY 2024 Cycle Performance</div>
                        <span className="material-symbols-outlined absolute top-6 right-8 text-white/5 text-6xl font-black italic group-hover:rotate-180 transition-transform">sync_alt</span>
                    </div>

                    <div className="bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 border-l-[12px] border-l-amber-500/50 relative overflow-hidden group shadow-3xl">
                        <div className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] mb-8 italic">Low Stock Threshold</div>
                        <div className="text-6xl font-headline font-black text-amber-500 italic tracking-tighter leading-none mb-2">28</div>
                        <div className="text-[10px] text-stone-700 font-black uppercase tracking-widest italic">Operational Nodes Alert</div>
                        <span className="material-symbols-outlined absolute top-6 right-8 text-amber-500/10 text-6xl font-black italic group-hover:scale-125 transition-transform">warning</span>
                    </div>

                    <div className="bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 border-l-[12px] border-l-error relative overflow-hidden group shadow-3xl">
                        <div className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] mb-8 italic">Stock Out Critical</div>
                        <div className="text-6xl font-headline font-black text-error italic tracking-tighter leading-none mb-2">12</div>
                        <div className="text-[10px] text-stone-700 font-black uppercase tracking-widest italic">Procurement Immediate Req</div>
                        <span className="material-symbols-outlined absolute top-6 right-8 text-error/10 text-6xl font-black italic group-hover:rotate-12 transition-transform">error</span>
                    </div>
                </section>

                {/* Operations & Registry Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                    <div className="xl:col-span-8 space-y-10">
                        {/* Transactional Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <button className="bg-primary text-black p-10 rounded-[40px] flex flex-col items-start gap-8 hover:bg-white transition-all group shadow-xl active:scale-95 shadow-primary/5">
                                <span className="material-symbols-outlined text-4xl font-black italic group-hover:rotate-90 transition-transform">add_box</span>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] italic">Register Ingestion</span>
                            </button>
                            <button className="bg-zinc-900 border border-zinc-800 text-white p-10 rounded-[40px] flex flex-col items-start gap-8 hover:border-primary transition-all group active:scale-95">
                                <span className="material-symbols-outlined text-4xl font-black italic text-stone-700 group-hover:text-primary">edit_document</span>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] italic">Stock Adjustment</span>
                            </button>
                            <button className="bg-zinc-900 border border-zinc-800 text-white p-10 rounded-[40px] flex flex-col items-start gap-8 hover:border-primary transition-all group active:scale-95">
                                <span className="material-symbols-outlined text-4xl font-black italic text-stone-700 group-hover:text-primary">event_available</span>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] italic">Audit Count</span>
                            </button>
                        </div>

                        {/* Recent Activity Ledger */}
                        <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden flex flex-col min-h-[450px]">
                            <div className="p-10 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/20">
                                <h3 className="text-xl font-headline font-black uppercase tracking-widest italic text-white leading-none">Activity Stream <span className="text-stone-700 italic">| Flux Tracking</span></h3>
                                <button className="text-[10px] font-black text-primary uppercase tracking-[0.3em] hover:text-white transition-colors italic">Access All Logs</button>
                            </div>
                            
                            <div className="overflow-x-auto flex-1">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-zinc-950/30 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                                            <th className="px-10 py-6">Protocol Type</th>
                                            <th className="px-10 py-6">Document Ref</th>
                                            <th className="px-10 py-6">Asset Descriptor</th>
                                            <th className="px-10 py-6 text-right">Delta Qty</th>
                                            <th className="px-10 py-6 text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800/30">
                                        {movements.map((m, i) => (
                                            <tr key={i} className="hover:bg-zinc-950/50 transition-colors group">
                                                <td className={`px-10 py-6 text-[11px] font-black uppercase italic tracking-widest ${m.color}`}>{m.type}</td>
                                                <td className="px-10 py-6 font-mono text-[11px] text-stone-500 font-bold uppercase tracking-widest group-hover:text-white transition-colors">{m.id}</td>
                                                <td className="px-10 py-6 text-[12px] font-black text-stone-400 group-hover:text-white transition-colors italic uppercase">{m.desc}</td>
                                                <td className="px-10 py-6 text-right font-headline font-black text-xl text-white italic tracking-tighter">{m.qty}</td>
                                                <td className="px-10 py-6 text-center">
                                                    <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border italic ${m.status === 'VERIFIED' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>{m.status}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    {/* Registry & Vault Sidebar */}
                    <aside className="xl:col-span-4 space-y-10">
                        {/* Legal Compliance Vault */}
                        <section className="bg-zinc-900 border border-outline-variant/10 shadow-3xl rounded-[56px] p-10 relative overflow-hidden group border-l-[12px] border-l-primary/10">
                             <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                             <h3 className="text-[11px] font-black uppercase tracking-[0.6em] text-white italic mb-10 border-b border-zinc-800 pb-6 block">Legal Compliance Vault</h3>
                             
                             <div className="space-y-4 relative z-10">
                                {['Libro Diario', 'Libro Mayor', 'Libro de Inventarios', 'Libro Compras/Ventas'].map((book) => (
                                    <button key={book} className="w-full flex justify-between items-center px-6 py-4 bg-zinc-950/50 hover:bg-zinc-950 border border-zinc-800/50 hover:border-primary transition-all text-stone-700 hover:text-white rounded-[24px]">
                                        <span className="text-[10px] font-black uppercase tracking-widest italic">{book}</span>
                                        <span className="material-symbols-outlined text-sm font-black italic">download</span>
                                    </button>
                                ))}
                             </div>
                             
                             <div className="mt-8 pt-6 border-t border-zinc-800">
                                <p className="text-[9px] font-black text-stone-700 uppercase leading-loose italic tracking-[0.05em]">Data synchronization compliant with Art. 177 of the Income Tax Law and SENIAT Provisions for heavy industry.</p>
                             </div>
                        </section>

                        {/* Analytic Mix Doughnut */}
                        <section className="bg-zinc-900 border border-outline-variant/10 shadow-3xl rounded-[56px] p-10 text-center space-y-10 group">
                             <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-700 italic border-b border-zinc-800 pb-4">Asset Distribution</h3>
                             
                             <div className="relative w-56 h-56 mx-auto">
                                <div className="absolute inset-0 rounded-full border-[16px] border-zinc-950" style={{background: 'conic-gradient(#9acd32 0% 45%, #496800 45% 70%, #5f5e5e 70% 85%, #18181b 85% 100%)'}}></div>
                                <div className="absolute inset-6 rounded-full bg-zinc-900 flex flex-col items-center justify-center border border-zinc-800 group-hover:scale-105 transition-transform">
                                    <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest italic">Inventory Units</span>
                                    <span className="text-5xl font-headline font-black text-white italic tracking-tighter">8.420</span>
                                </div>
                             </div>

                             <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                                    <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest italic">Engine Mix (45%)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 bg-[#496800] rounded-full"></span>
                                    <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest italic">Trans (25%)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 bg-tertiary rounded-full"></span>
                                    <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest italic">Suspension (15%)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 bg-stone-900 border border-zinc-800 rounded-full"></span>
                                    <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest italic">Others (15%)</span>
                                </div>
                             </div>
                        </section>
                    </aside>
                </div>

                {/* Vertical Stock Ledger List */}
                <section className="space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="h-px flex-1 bg-zinc-900"></div>
                        <h3 className="text-2xl font-headline font-black text-white italic tracking-tighter uppercase leading-none tracking-[0.2em]">Operational Asset Inventory</h3>
                    </div>
                    
                    <div className="space-y-4">
                        {stockItems.map((item, i) => (
                            <div key={i} className="bg-zinc-900 border border-outline-variant/10 rounded-[40px] p-8 flex flex-col md:flex-row items-center gap-10 hover:bg-zinc-950 transition-all group cursor-pointer shadow-2xl">
                                <div className="w-20 h-20 bg-zinc-950 rounded-3xl flex items-center justify-center border border-zinc-800 text-stone-800 group-hover:text-primary group-hover:border-primary transition-all">
                                    <span className="material-symbols-outlined text-4xl italic font-black">token</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic leading-none">{item.id}</span>
                                        {item.low && <span className="bg-amber-500/10 text-amber-500 text-[8px] font-black px-3 py-1 rounded-full uppercase italic border border-amber-500/20">Threshold Breach</span>}
                                    </div>
                                    <div className="text-2xl font-headline font-black text-white uppercase italic tracking-tight group-hover:translate-x-2 transition-transform">{item.name}</div>
                                </div>
                                <div className="flex gap-16 text-right">
                                    <div className="space-y-1">
                                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.3em] italic block">Current Stock</span>
                                        <span className={`text-2xl font-headline font-black italic tracking-tighter ${item.low ? 'text-amber-500' : 'text-white'}`}>{item.stock}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.3em] italic block">Unit Value</span>
                                        <span className="text-2xl font-headline font-black text-white italic tracking-tighter">{item.cost}</span>
                                    </div>
                                    <div className="space-y-1 border-l border-zinc-800 pl-10">
                                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.3em] italic block">Aggregate Asset Value</span>
                                        <span className="text-2xl font-headline font-black text-primary italic tracking-tighter">{item.total}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <button className="w-full py-8 border-4 border-dashed border-zinc-900 rounded-[48px] text-[11px] font-black text-stone-800 uppercase tracking-[0.8em] italic hover:border-primary hover:text-white transition-all shadow-inner">
                    Load 12 more entity nodes...
                </button>

                {/* Industrial Metadata Footer */}
                <footer className="mt-20 pt-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-4 gap-16 px-6">
                    <div className="space-y-6">
                        <h4 className="text-white font-black font-headline text-2xl italic uppercase tracking-tighter leading-none opacity-20 italic">TITAN_ERP_CORE</h4>
                        <p className="text-[10px] font-black text-stone-800 leading-loose uppercase tracking-widest italic">High-Performance Industrial Enterprise Resource Planning. Optimized for the Venezuelan automotive aftermarket and strategic supply chain nodes.</p>
                    </div>
                    <div className="space-y-6">
                        <h5 className="text-[11px] font-black text-stone-500 uppercase tracking-[0.6em] italic">Operations Center</h5>
                        <p className="text-[10px] font-black text-stone-800 uppercase italic tracking-widest leading-loose">
                            Zona Industrial Municipal Norte<br/>
                            Valencia, Edo. Carabobo 2001<br/>
                            VENEZUELA_HQ
                        </p>
                    </div>
                    <div className="space-y-6">
                         <h5 className="text-[11px] font-black text-stone-500 uppercase tracking-[0.6em] italic">Contact Protocol</h5>
                         <p className="text-[10px] font-black text-stone-800 uppercase italic tracking-widest leading-loose">
                            Phone: +58 241 800-TITAN<br/>
                            Support: 24/7 Logistics Desk_ACTIVE
                        </p>
                    </div>
                    <div className="text-right flex flex-col justify-end gap-2">
                        <h5 className="text-[11px] font-black text-stone-500 uppercase tracking-[0.4em] italic mb-4">Regulatory Compliance</h5>
                        <div className="text-primary font-headline text-[13px] font-black italic tracking-[0.2em] uppercase leading-none italic">MAYOR DE REPUESTO LA CIMA, C.A.</div>
                        <div className="text-stone-800 font-mono text-[10px] font-black italic tracking-widest leading-none">RIF: J-40308741-5</div>
                        <span className="text-[9px] font-black text-stone-900 uppercase tracking-[0.1em] mt-4 italic">© 2024 Titan Systems Group LLC. ALL RIGHTS RESERVED.</span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
