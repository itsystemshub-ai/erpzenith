import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CentroDeReportesDeInventario() {
    const kardexItems = [
        { date: '2023-11-24 09:12', sku: 'HDPA-1002', name: 'HEAVY-DUTY PISTON ARM', type: 'PURCHASE', delta: '+450', cost: '$1,240.00', total: '$558,000.00', doc: 'PO-88210-FG', color: 'text-primary' },
        { date: '2023-11-24 11:45', sku: 'TVA-009-S', name: 'TITANIUM VALVE ASSEMBLY', type: 'SALE', delta: '-120', cost: '$2,890.50', total: '$346,860.00', doc: 'INV-441092', color: 'text-amber-600' },
        { date: '2023-11-23 16:05', sku: 'HDPA-1002', name: 'HEAVY-DUTY PISTON ARM', type: 'ADJUSTMENT', delta: '-5', cost: '$1,240.00', total: '$6,200.00', doc: 'AUDIT-X9', color: 'text-error' }
    ];

    const reorderItems = [
        { sku: 'TRB-902-X', name: 'High-Pressure Turbine Seal', stock: 2, min: 15 },
        { sku: 'GRX-44-LUB', name: 'Synthetic Gear Lubricant (50L)', stock: 5, min: 40 }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">analytics</span>
                    <span>Inventario <span className="text-white/60 mx-2">|</span> Centro de Reportes y Análisis Kinetic</span>
                </div>
            }
        >
            <Head title="Centro de Reportes de Inventario - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Analytics Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Intelligence Protocol V2.4</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Operational Data Node</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Inventory <br/> <span className="text-stone-700">Analytics</span></h1>
                        <p className="text-[12px] font-black text-stone-600 uppercase italic tracking-[0.1em] leading-relaxed max-w-xl">Valuation Logic: Art. 177 - Costo Promedio Ponderado. Real-time stock trajectory and kinetic turnover analysis.</p>
                    </div>
                    
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 border border-zinc-800 text-white px-8 py-5 rounded-[24px] font-black uppercase tracking-[0.4em] text-[10px] hover:border-primary transition-all italic flex items-center gap-4 group">
                             <span className="material-symbols-outlined text-stone-700 group-hover:text-primary transition-colors italic">picture_as_pdf</span>
                             Export PDF Report
                        </button>
                        <button className="bg-zinc-900 border border-zinc-800 text-white px-8 py-5 rounded-[24px] font-black uppercase tracking-[0.4em] text-[10px] hover:border-primary transition-all italic flex items-center gap-4 group">
                             <span className="material-symbols-outlined text-stone-700 group-hover:text-primary transition-colors italic">table_view</span>
                             Excel Spreadsheet
                        </button>
                    </div>
                </header>

                {/* Performance Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2 bg-primary group rounded-[56px] p-12 relative overflow-hidden flex flex-col justify-between shadow-3xl shadow-primary/20 border-4 border-black/10">
                        <div className="relative z-10 space-y-2">
                            <div className="text-[11px] font-black uppercase tracking-[0.4em] text-black italic opacity-60">Master Asset Valuation</div>
                            <div className="text-6xl md:text-7xl font-headline font-black text-black italic tracking-tighter leading-none">$ 4.892.450<span className="opacity-40">.00</span></div>
                        </div>
                        <div className="relative z-10 flex items-center gap-8 mt-12 bg-black/5 p-6 rounded-[32px] border border-black/5 max-w-fit">
                             <div className="flex items-center gap-2 text-black font-black text-[10px] uppercase italic">
                                <span className="material-symbols-outlined text-lg">trending_up</span>
                                +12.4% vs Q3
                             </div>
                             <div className="h-4 w-px bg-black/10"></div>
                             <div className="text-[9px] font-black text-black uppercase tracking-widest italic tracking-[0.1em]">WAC Calculation Synchronized</div>
                        </div>
                        <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-black/5 text-[240px] font-black italic group-hover:rotate-12 transition-transform">calculate</span>
                    </div>

                    <div className="bg-zinc-900 rounded-[56px] p-10 border border-outline-variant/10 group hover:border-error/30 transition-all shadow-3xl flex flex-col justify-between border-l-[12px] border-l-error">
                        <div className="space-y-2">
                             <div className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 italic">Critical Breach Nodes</div>
                             <div className="text-6xl font-headline font-black text-error italic tracking-tighter leading-none">18</div>
                        </div>
                        <div className="bg-error/10 text-error text-[9px] font-black py-2 px-4 rounded-full uppercase tracking-widest italic border border-error/20 inline-block w-fit">Immediate Action Required</div>
                    </div>

                    <div className="bg-zinc-900 rounded-[56px] p-10 border border-outline-variant/10 group hover:border-primary/30 transition-all shadow-3xl flex flex-col justify-between border-l-[12px] border-l-primary">
                        <div className="space-y-2">
                             <div className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 italic">Kinetic Turnover</div>
                             <div className="text-6xl font-headline font-black text-white italic tracking-tighter leading-none">4.2x</div>
                        </div>
                        <div className="bg-primary/10 text-primary text-[9px] font-black py-2 px-4 rounded-full uppercase tracking-widest italic border border-primary/20 inline-block w-fit">Efficiency Optimized</div>
                    </div>
                </section>

                {/* Distribution & Priority Column */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <section className="lg:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 p-12 shadow-3xl space-y-12 relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-8">
                             <h3 className="text-2xl font-headline font-black uppercase tracking-widest text-white italic leading-none">Turnover Kinetic Analysis</h3>
                             <div className="flex items-center gap-4 bg-zinc-950 px-6 py-2 rounded-full border border-zinc-800">
                                <span className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#9acd32]"></span>
                                <span className="text-[10px] font-black text-stone-600 uppercase tracking-widest italic">Volume Pipeline Flux</span>
                             </div>
                        </div>

                        {/* Bar Visualizer */}
                        <div className="h-80 flex items-end gap-3 px-6 pb-2 border-b border-zinc-800">
                             {[40, 60, 45, 85, 70, 50, 90, 55, 40, 65, 95, 60].map((h, i) => (
                                <div key={i} className={`flex-1 ${h > 80 ? 'bg-primary' : 'bg-stone-900'} rounded-t-2xl transition-all duration-1000 hover:bg-white cursor-pointer relative group/bar shadow-2xl`} style={{ height: `${h}%` }}>
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-xl text-[10px] font-black opacity-0 group-hover/bar:opacity-100 transition-opacity z-20 shadow-xl">{h}%</div>
                                </div>
                             ))}
                        </div>
                        <div className="flex justify-between px-6 text-[10px] font-black text-stone-800 uppercase tracking-[0.4em] italic leading-none">
                             {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
                        </div>
                    </section>

                    <aside className="lg:col-span-4 bg-zinc-950 rounded-[56px] border border-outline-variant/10 p-10 shadow-3xl space-y-10 border-l-[12px] border-l-stone-800">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                            <h3 className="text-xl font-headline font-black uppercase tracking-widest text-white italic leading-none">Priority Reorder</h3>
                            <span className="material-symbols-outlined text-primary font-black italic">warning</span>
                        </div>

                        <div className="space-y-8">
                            {reorderItems.map((item, i) => (
                                <div key={i} className="border-l-4 border-primary pl-6 py-2 group hover:translate-x-2 transition-transform">
                                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-700 mb-1 italic">ENTITY NODE: {item.sku}</div>
                                    <h4 className="text-[13px] font-black text-stone-200 uppercase italic mb-3 tracking-tighter leading-tight group-hover:text-primary transition-colors">{item.name}</h4>
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic">
                                        <span className="text-stone-700">Stock: <span className="text-stone-400">{item.stock} Units</span></span>
                                        <span className="text-primary">Threshold: {item.min}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full bg-zinc-900 text-white py-6 rounded-[24px] font-black uppercase tracking-[0.4em] text-[10px] hover:bg-primary hover:text-black transition-all italic shadow-2xl border border-zinc-800 shadow-inner group">
                            Generate Bulk Order Node
                            <span className="material-symbols-outlined text-sm ml-4 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                        </button>
                    </aside>
                </div>

                {/* Kardex Ledger Registry */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden flex flex-col min-h-[600px]">
                    <div className="p-10 border-b border-zinc-800 flex flex-col md:flex-row justify-between items-center bg-zinc-950/20 gap-8">
                        <div className="space-y-2">
                             <h3 className="text-2xl font-headline font-black uppercase tracking-widest italic text-white leading-none tracking-[0.2em]">Kardex Central Registry</h3>
                             <p className="text-[11px] font-black text-stone-600 uppercase italic tracking-widest">History of movements & WAC valuation protocol</p>
                        </div>
                        
                        <div className="flex gap-4">
                            <select className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white text-[10px] font-black uppercase tracking-widest appearance-none italic focus:ring-1 focus:ring-primary">
                                <option>ALL ASSET CATEGORIES</option>
                                <option>RAW COMPONENTS</option>
                                <option>FINISHED NODES</option>
                            </select>
                            <select className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white text-[10px] font-black uppercase tracking-widest appearance-none italic focus:ring-1 focus:ring-primary">
                                <option>CURRENT FISCAL CYCLE</option>
                                <option>LAST 30 LOGS</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                                    <th className="px-10 py-6">Timestamp Trace</th>
                                    <th className="px-10 py-6">Entity Identification</th>
                                    <th className="px-10 py-6">Protocol Type</th>
                                    <th className="px-10 py-6 text-right">Delta Qty</th>
                                    <th className="px-10 py-6 text-right">Unit Valor (Avg)</th>
                                    <th className="px-10 py-6 text-right italic">Aggregate Valuation</th>
                                    <th className="px-10 py-6 pr-10">Ref Document</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/30">
                                {kardexItems.map((item, i) => (
                                    <tr key={i} className="hover:bg-zinc-950/50 transition-colors group italic">
                                        <td className="px-10 py-8 text-[11px] font-black text-stone-600 uppercase tracking-widest group-hover:text-white transition-colors">{item.date}</td>
                                        <td className="px-10 py-8">
                                            <div className="text-[12px] font-black text-white italic group-hover:text-primary transition-colors">{item.name}</div>
                                            <div className="text-[9px] font-black text-stone-700 uppercase tracking-widest tracking-[0.1em]">{item.sku}</div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-widest ${item.color}`}>
                                                <span className="material-symbols-outlined text-sm font-black">{item.type === 'PURCHASE' ? 'arrow_downward' : (item.type === 'SALE' ? 'arrow_upward' : 'error')}</span>
                                                {item.type}
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-xl italic tracking-tighter text-white">{item.delta}</td>
                                        <td className="px-10 py-8 text-right text-[13px] font-black text-stone-500">{item.cost}</td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-2xl italic tracking-tighter text-white">{item.total}</td>
                                        <td className="px-10 py-8 pr-10 font-mono text-[10px] font-black text-stone-800 group-hover:text-stone-500 transition-colors uppercase tracking-[0.2em]">{item.doc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-10 bg-zinc-950/50 flex justify-between items-center border-t border-zinc-800">
                         <div className="flex gap-10 text-[10px] font-black text-stone-800 uppercase tracking-[0.3em] italic">
                            <button className="hover:text-primary transition-colors">Head</button>
                            <button className="hover:text-primary transition-colors">Previous Node</button>
                         </div>
                         <div className="flex gap-4">
                            {[1, 2, 3, '...', 42].map((p, i) => (
                                <button key={i} className={`w-10 h-10 rounded-xl font-headline font-black text-sm flex items-center justify-center transition-all ${p === 1 ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-110' : 'bg-zinc-900 text-stone-700 hover:text-white'}`}>{p}</button>
                            ))}
                         </div>
                         <div className="flex gap-10 text-[10px] font-black text-stone-800 uppercase tracking-[0.3em] italic text-right">
                            <button className="hover:text-primary transition-colors">Next Node</button>
                            <button className="hover:text-primary transition-colors">Tail</button>
                         </div>
                    </div>
                </section>

                {/* Disclosure & Compliance Grid */}
                <section className="bg-zinc-950 rounded-[56px] border border-outline-variant/10 p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-20 shadow-inner">
                    <div className="space-y-8">
                         <h4 className="text-[14px] font-black text-white uppercase tracking-[0.4em] italic border-b border-zinc-800 pb-6 w-fit">Regulatory Compliance Matrix</h4>
                         <p className="text-[12px] font-black text-stone-700 leading-loose uppercase italic tracking-[0.05em]">
                            All valuations presented in this report are deconstructed in strict adherence to <strong>Art. 177 - Weighted Average Cost (Costo Promedio Ponderado)</strong>. This methodology ensures granular asset integrity by calculating period-based averages for all industrial materials.
                         </p>
                         <p className="text-[12px] font-black text-stone-700 leading-loose uppercase italic tracking-[0.05em] opacity-60">
                            The immutable audit trajectory is maintained for every strategic transaction. Any discrepancy triggers automatic supervisor rectification protocols.
                         </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pb-10">
                        <div className="bg-zinc-900/50 p-8 rounded-[40px] border border-zinc-800/50 shadow-inner grayscale hover:grayscale-0 transition-all duration-1000 border-l-[12px] border-l-primary">
                            <div className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic mb-2">Sync Index Accuracy</div>
                            <div className="text-3xl font-headline font-black text-white italic tracking-tighter">99.82%</div>
                        </div>
                        <div className="bg-zinc-900/50 p-8 rounded-[40px] border border-zinc-800/50 shadow-inner grayscale hover:grayscale-0 transition-all duration-1000 border-l-[12px] border-l-primary">
                            <div className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic mb-2">Last Audit Reconciliation</div>
                            <div className="text-3xl font-headline font-black text-white italic tracking-tighter">OCT 30, 2023</div>
                        </div>
                        <div className="bg-zinc-900/50 p-8 rounded-[40px] border border-zinc-800/50 shadow-inner grayscale hover:grayscale-0 transition-all duration-1000 border-l-[12px] border-l-primary/10">
                            <div className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic mb-2">Node Fiscal Status</div>
                            <div className="text-3xl font-headline font-black text-primary italic tracking-tighter uppercase leading-none">Compliant</div>
                        </div>
                        <div className="bg-zinc-900/50 p-8 rounded-[40px] border border-zinc-800/50 shadow-inner grayscale hover:grayscale-0 transition-all duration-1000 border-l-[12px] border-l-primary/10">
                            <div className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic mb-2">Optimization Logic</div>
                            <div className="text-3xl font-headline font-black text-white italic tracking-tighter uppercase leading-none">Active</div>
                        </div>
                    </div>
                </section>

                {/* Industrial Infrastructure Footer */}
                <footer className="mt-20 pt-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-4 gap-16 px-6">
                    <div className="space-y-6">
                        <div className="text-white font-headline font-black tracking-[-0.1em] text-3xl opacity-10 italic mb-4 uppercase">Forge_Analytics_Terminal</div>
                        <p className="text-[10px] font-black text-stone-800 leading-loose uppercase tracking-widest italic max-w-sm">Leading distributor of high-performance heavy-duty enterprise resources across the Venezualan industrial sector.</p>
                    </div>
                    <div className="space-y-6">
                         <h5 className="text-[11px] font-black text-stone-500 uppercase tracking-[0.6em] italic">Report Metadata</h5>
                         <p className="text-[10px] font-black text-stone-800 uppercase italic tracking-widest leading-loose">
                            Logic Engine: Titan_Kinetic_V2.4<br/>
                            Auth Mode: ART_177_WAC<br/>
                            Node: VALENCIA_HUB_PRIMARY_ANALYTICS
                        </p>
                    </div>
                    <div className="col-span-1 md:col-span-2 text-right flex flex-col justify-end gap-2 grayscale">
                        <div className="text-primary font-headline text-[13px] font-black italic tracking-[0.2em] uppercase leading-none italic mb-2">MAYOR DE REPUESTO LA CIMA, C.A.</div>
                        <div className="text-stone-800 font-mono text-[10px] font-black italic tracking-widest leading-none">RIF: J-40308741-5 | VALENCIA_VE_HUB</div>
                        <span className="text-[9px] font-black text-stone-900 uppercase tracking-[0.1em] mt-4 italic">© 2024 MAYOR DE REPUESTO LA CIMA, C.A. ALL KINETIC TRAJECTORIES RECONCILED.</span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
