import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeProductos() {
    const products = [
        { sku: '#CP-8842-12', name: 'Cylinder Head Gasket', detail: 'Cummins ISX Series', cat: 'Engine Seals', stock: 42, max: 50, cost: '$124.50', price: '$144.42', status: 'optimal' },
        { sku: '#PK-1102-X', name: 'Main Bearing Set', detail: 'Perkins 1104D-44TA', cat: 'Internal Parts', stock: 3, max: 20, cost: '$82.00', price: '$95.12', status: 'critical' },
        { sku: '#FP-9931-B', name: 'Fuel Injection Pump', detail: 'Bosch Heavy Duty', cat: 'Fuel Systems', stock: 8, max: 12, cost: '$1,840.00', price: '$2,134.40', status: 'optimal' },
        { sku: '#TU-4420-W', name: 'Turbocharger Assembly', detail: 'Holset HE351CW', cat: 'Air Intake', stock: 2, max: 5, cost: '$645.00', price: '$748.20', status: 'alert' },
        { sku: '#VL-0012-S', name: 'Exhaust Valve Set', detail: 'CAT 3406E Industrial', cat: 'Valve Train', stock: 1, max: 24, cost: '$18.40', price: '$21.34', status: 'critical' },
        { sku: '#OP-5521-X', name: 'Oil Pump Assembly', detail: 'Detroit Diesel Series 60', cat: 'Lubrication', stock: 12, max: 12, cost: '$312.00', price: '$361.92', status: 'optimal' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">inventory_2</span>
                    <span>Inventario <span className="text-white/60 mx-2">|</span> Gestión de Catálogo y Assets</span>
                </div>
            }
        >
            <Head title="Gestión de Productos - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Operations Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Asset Management v4.2</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Master Item Registry</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Global <br/> <span className="text-stone-700">Catalog</span></h1>
                    </div>
                    
                    <button className="bg-primary text-black px-12 py-6 rounded-[24px] font-headline font-black uppercase tracking-tighter text-xl hover:bg-white transition-all italic shadow-2xl shadow-primary/10 active:scale-95 flex items-center gap-4 group">
                         <span className="material-symbols-outlined font-black italic group-hover:rotate-90 transition-transform">add</span>
                         Initialize New Entry
                    </button>
                </header>

                {/* Tactical Filters Grid */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-zinc-900/50 rounded-[40px] border border-zinc-800 p-8 space-y-4 hover:border-primary/30 transition-colors group">
                        <div className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] italic mb-4">Domain Hierarchy</div>
                        <select className="bg-transparent border-none text-white font-headline text-2xl font-black p-0 focus:ring-0 cursor-pointer uppercase italic appearance-none w-full">
                            <option className="bg-zinc-900">All Motor Parts</option>
                            <option className="bg-zinc-900">Cylinder Heads</option>
                            <option className="bg-zinc-900">Piston Kits</option>
                        </select>
                    </div>

                    <div className="bg-zinc-900/50 rounded-[40px] border border-zinc-800 p-8 space-y-4 hover:border-primary/30 transition-colors group">
                        <div className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] italic mb-4">Manufacturer Line</div>
                        <select className="bg-transparent border-none text-white font-headline text-2xl font-black p-0 focus:ring-0 cursor-pointer uppercase italic appearance-none w-full">
                            <option className="bg-zinc-900">Any Brand Node</option>
                            <option className="bg-zinc-900">Cummins Heavy</option>
                            <option className="bg-zinc-900">Perkins Ind</option>
                        </select>
                    </div>

                    <div className="bg-zinc-900/50 rounded-[40px] border border-zinc-800 p-8 space-y-4 hover:border-amber-500/30 transition-colors group">
                        <div className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] italic mb-4">Logistics Health</div>
                        <div className="flex items-center gap-4">
                            <span className="w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]"></span>
                            <span className="text-white font-headline text-2xl font-black uppercase italic tracking-tighter">Low Stock (4)</span>
                        </div>
                    </div>

                    <div className="bg-zinc-950 rounded-[40px] border-4 border-dashed border-zinc-900 p-8 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 opacity-5 grayscale group-hover:scale-110 transition-transform duration-[10s]" style={{backgroundImage: 'radial-gradient(#496800 2px, transparent 2px)', backgroundSize: '15px 15px'}}></div>
                        <div className="text-center relative z-10">
                            <div className="text-5xl font-headline font-black text-primary italic tracking-tighter leading-none mb-1">1.402</div>
                            <div className="text-[10px] text-stone-600 font-bold uppercase tracking-[0.2em] italic">Aggregate SKU Count</div>
                        </div>
                    </div>
                </section>

                {/* Master Items Ledger */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden flex flex-col min-h-[700px]">
                    <div className="p-10 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/20">
                        <h3 className="text-xl font-headline font-black uppercase tracking-widest italic text-white leading-none">Global Asset Ledger <span className="text-stone-700 italic">| Entity Stream</span></h3>
                        <div className="flex items-center gap-4">
                             <div className="text-[10px] font-black text-stone-700 uppercase tracking-widest italic">Compliance: Per. Inv v4.2</div>
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto flex-1 custom-scrollbar">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                                    <th className="px-10 py-6">SKU Trace Code</th>
                                    <th className="px-10 py-6">Component Identity</th>
                                    <th className="px-10 py-6">Domain Category</th>
                                    <th className="px-10 py-6 text-center">Persistence Status</th>
                                    <th className="px-10 py-6 text-right">Int. Cost (USD)</th>
                                    <th className="px-10 py-6 text-right italic">Public Valor (+IVA)</th>
                                    <th className="px-10 py-6 text-center pr-10">Ops</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/30">
                                {products.map((p, i) => (
                                    <tr key={i} className={`hover:bg-zinc-950/50 transition-colors group ${p.status === 'critical' ? 'bg-error/5' : (p.status === 'alert' ? 'bg-amber-500/5' : '')}`}>
                                        <td className="px-10 py-8 font-mono text-[11px] font-black text-stone-600 group-hover:text-primary transition-colors uppercase tracking-[0.2em]">{p.sku}</td>
                                        <td className="px-10 py-8">
                                            <div className="text-sm md:text-base font-black text-white uppercase italic tracking-tighter group-hover:translate-x-2 transition-transform leading-none mb-1">{p.name}</div>
                                            <div className="text-[9px] font-black text-stone-700 uppercase italic tracking-widest">{p.detail}</div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className="bg-zinc-950 border border-zinc-800 text-[9px] font-black text-stone-500 px-4 py-1.5 rounded-full uppercase tracking-widest italic">{p.cat}</span>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-6 justify-center">
                                                <div className="w-24 bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                                                    <div className={`h-full transition-all duration-1000 ${p.status === 'critical' ? 'bg-error shadow-[0_0_10px_rgba(186,26,26,0.5)]' : (p.status === 'alert' ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-primary shadow-[0_0_10px_rgba(154,205,50,0.5)]')}`} style={{ width: `${(p.stock / p.max) * 100}%` }}></div>
                                                </div>
                                                <div className={`text-[12px] font-black italic tracking-tighter ${p.status === 'critical' ? 'text-error animate-pulse font-black italic' : 'text-stone-300'}`}>
                                                    {p.stock} <span className="text-[10px] text-stone-700 not-italic uppercase font-bold tracking-widest ml-1">/ {p.max}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-stone-400 italic text-lg tracking-tighter">{p.cost}</td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-primary italic text-xl tracking-tighter">{p.price}</td>
                                        <td className="px-10 py-8 text-center pr-10">
                                            <div className="flex items-center justify-center gap-3">
                                                <button className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 text-stone-600 hover:text-primary hover:border-primary transition-all flex items-center justify-center active:scale-90"><span className="material-symbols-outlined text-sm font-black italic">edit</span></button>
                                                <button className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 text-stone-600 hover:text-error hover:border-error transition-all flex items-center justify-center active:scale-90"><span className="material-symbols-outlined text-sm font-black italic">archive</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-10 bg-zinc-950/50 flex justify-between items-center border-t border-zinc-800">
                         <div className="text-[10px] font-black text-stone-800 uppercase tracking-[0.4em] italic">Showing 15 of 1.402 entity nodes resolved</div>
                         <div className="flex gap-4">
                            {[1, 2, 3, '...', 94].map((p, i) => (
                                <button key={i} className={`w-10 h-10 rounded-xl font-headline font-black text-sm flex items-center justify-center transition-all ${p === 2 ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-110' : 'bg-zinc-900 text-stone-700 hover:text-white'}`}>{p}</button>
                            ))}
                         </div>
                    </div>
                </section>

                {/* Financial Appraisal Summary */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <section className="md:col-span-8 bg-zinc-950 rounded-[56px] border border-outline-variant/10 p-12 shadow-inner relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-headline font-black text-white italic tracking-widest uppercase leading-none mb-1">Active Valuation</h3>
                                <p className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] italic mb-8">Live Global Warehouse Appraisal Node</p>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-5xl md:text-7xl font-headline font-black text-primary italic tracking-tighter leading-none">$ 1.452.310<span className="text-stone-800 italic">.00</span></span>
                                    <span className="text-[11px] font-black text-stone-700 uppercase tracking-widest italic">USD_BASE</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-end gap-6 bg-zinc-900/50 p-8 rounded-[40px] border border-zinc-800/50 backdrop-blur-xl">
                                <div className="text-right space-y-1">
                                    <p className="text-[9px] font-black text-stone-700 uppercase italic tracking-widest">IVA Liability (16%)</p>
                                    <p className="text-2xl font-headline font-black text-white italic">$ 232.369,60</p>
                                </div>
                                <div className="h-px w-full bg-zinc-800"></div>
                                <div className="text-right space-y-1">
                                    <p className="text-[9px] font-black text-stone-700 uppercase italic tracking-widest">Pre-Tax Appraisal</p>
                                    <p className="text-2xl font-headline font-black text-white/50 italic">$ 1.219.940,40</p>
                                </div>
                            </div>
                        </div>
                        <span className="material-symbols-outlined absolute left-10 bottom-10 text-white/5 text-[140px] font-black italic pointer-events-none group-hover:-rotate-12 transition-transform">precision_manufacturing</span>
                    </section>

                    <aside className="md:col-span-4 bg-zinc-900 rounded-[56px] border border-outline-variant/10 p-10 border-l-[12px] border-l-amber-500 shadow-3xl flex flex-col justify-between group">
                        <div className="space-y-8">
                             <h3 className="text-xl font-headline font-black uppercase text-white italic tracking-widest border-b border-zinc-800 pb-6 block">Restock Pipeline</h3>
                             <div className="space-y-6">
                                <div className="flex justify-between items-center group/item hover:translate-x-2 transition-transform">
                                    <span className="text-[11px] font-black text-stone-600 uppercase italic tracking-widest">Critical Low Delta</span>
                                    <span className="bg-amber-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase italic animate-pulse">04 SKUs Breach</span>
                                </div>
                                <div className="flex justify-between items-center group/item hover:translate-x-2 transition-transform">
                                    <span className="text-[11px] font-black text-stone-600 uppercase italic tracking-widest">In-Transit Buffer</span>
                                    <span className="text-white font-headline font-black text-xl italic tracking-tighter uppercase leading-none tracking-widest">12 Shipments</span>
                                </div>
                             </div>
                        </div>
                        
                        <button className="w-full bg-zinc-950 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black py-6 rounded-3xl font-black uppercase tracking-[0.4em] text-[10px] transition-all italic shadow-2xl mt-10">
                            GENERATE RESTOCK PROTOCOL
                        </button>
                    </aside>
                </div>

                {/* Industrial Infrastructure Footer */}
                <footer className="mt-20 pt-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-4 gap-16 px-6">
                    <div className="space-y-6">
                        <div className="text-white font-headline font-black tracking-[-0.1em] text-3xl opacity-10 italic mb-4 uppercase">Forge_Catalog_System</div>
                        <p className="text-[10px] font-black text-stone-800 leading-loose uppercase tracking-widest italic max-w-sm">High-density asset tracking and catalog management for high-performance industrial automotive aftermarket channels.</p>
                    </div>
                    <div className="space-y-6">
                         <h5 className="text-[11px] font-black text-stone-500 uppercase tracking-[0.6em] italic">Operational Terms</h5>
                         <p className="text-[10px] font-black text-stone-800 uppercase italic tracking-widest leading-loose">
                            Version: 4.2.0 Stable Build<br/>
                            ID: TF_WAREHOUSE_A12<br/>
                            License: Enterprise Ultra_P7
                        </p>
                    </div>
                    <div className="col-span-1 md:col-span-2 text-right flex flex-col justify-end gap-2 grayscale">
                        <div className="text-primary font-headline text-[13px] font-black italic tracking-[0.2em] uppercase leading-none italic mb-2">MAYOR DE REPUESTO LA CIMA, C.A.</div>
                        <div className="text-stone-800 font-mono text-[10px] font-black italic tracking-widest leading-none">RIF: J-40308741-5 | VALENCIA_VE_HUB</div>
                        <span className="text-[9px] font-black text-stone-900 uppercase tracking-[0.1em] mt-4 italic">© 2024 Titan Systems Group LLC. ALL ASSET DISCOVERY PROTOCOLS ACTIVE.</span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
