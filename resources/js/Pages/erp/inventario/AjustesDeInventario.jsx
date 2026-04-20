import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AjustesDeInventario() {
    const recentActs = [
        { id: 'AJU-2023-089', status: 'Approved', title: 'Mermas de Producción Q3', user: 'Ing. M. Salazar', approved: true },
        { id: 'AJU-2023-090', status: 'Pending', title: 'Ajuste Inventario Anual', user: 'Admin Central', approved: false },
        { id: 'AJU-2023-087', status: 'Approved', title: 'Daño por Transporte Aéreo', user: 'Logística Int.', approved: true }
    ];

    const adjustmentItems = [
        { sku: 'ENG-992-TX', name: 'Válvula de Presión Hidráulica', current: 154, adjust: -2, new: 152 }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">edit_document</span>
                    <span>Inventario <span className="text-white/60 mx-2">|</span> Registro de Ajustes y Actas</span>
                </div>
            }
        >
            <Head title="Ajustes de Inventario - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Protocol Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Fiscal Compliance Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Shrinkage & Delta Control</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Stock <br/> <span className="text-stone-700">Adjustment</span></h1>
                        <p className="text-[12px] font-black text-stone-600 uppercase italic tracking-[0.1em] leading-relaxed max-w-xl">Mandatory registration of mermas, damages, and physical discrepancies. Enforcing strict compliance with Article 177 ISLR.</p>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="bg-zinc-900 border border-zinc-800 px-8 py-4 rounded-3xl text-right italic">
                            <span className="text-[9px] font-black text-stone-600 block uppercase tracking-[0.4em]">Last Closure</span>
                            <span className="text-white font-black text-[15px] uppercase tracking-tighter italic">28 OCT 2023</span>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 px-8 py-4 rounded-3xl text-right italic border-l-4 border-l-error">
                            <span className="text-[9px] font-black text-stone-600 block uppercase tracking-[0.4em]">Accum. Variation</span>
                            <span className="text-error font-black text-[24px] uppercase tracking-tighter italic leading-none">-2.40%</span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                    <section className="xl:col-span-8 space-y-10">
                        {/* Adjustment Form Node */}
                        <div className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-10 md:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                            
                            <div className="flex items-center gap-4 mb-16">
                                <span className="w-2 h-10 bg-primary skew-x-[-15deg]"></span>
                                <h3 className="text-2xl font-headline font-black uppercase tracking-widest italic text-white leading-none">New Adjustment Protocol</h3>
                            </div>

                            <form className="space-y-12 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Adjustment Topology</label>
                                        <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white text-[11px] font-black uppercase tracking-widest focus:ring-2 focus:ring-primary appearance-none italic">
                                            <option>Operational Shrinkage</option>
                                            <option>Damage / Loss Registry</option>
                                            <option>Physical Discrepancy Delta</option>
                                            <option>Expiration Breach</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Warehouse Node Origin</label>
                                        <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white text-[11px] font-black uppercase tracking-widest focus:ring-2 focus:ring-primary appearance-none italic">
                                            <option>Main Plant Hub - A1</option>
                                            <option>North Logistics Terminal</option>
                                            <option>External Strategic Depot</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-8 bg-zinc-950/30 p-10 rounded-[40px] border border-zinc-800/30">
                                    <div className="flex justify-between items-center border-b border-zinc-800 pb-6">
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.6em] text-stone-500 italic">Target Asset Array</h4>
                                        <button className="text-[11px] font-black text-primary uppercase tracking-[0.4em] italic hover:text-white transition-colors flex items-center gap-2 group">
                                            <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform italic">add_circle</span>
                                            Inject Item Node
                                        </button>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="text-[9px] font-black uppercase tracking-[0.5em] text-stone-700 border-b border-zinc-800/50">
                                                    <th className="py-4 px-4">Component Trace</th>
                                                    <th className="py-4 px-4">Curr Stock</th>
                                                    <th className="py-4 px-4">Delta Qty</th>
                                                    <th className="py-4 px-4">New Balance</th>
                                                    <th className="py-4 px-4 text-right pr-6">Ops</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-zinc-800/30">
                                                {adjustmentItems.map((item, i) => (
                                                    <tr key={i} className="hover:bg-zinc-900/50 transition-colors group">
                                                        <td className="py-6 px-4">
                                                            <div className="text-[12px] font-black text-white italic uppercase tracking-tighter group-hover:text-primary transition-colors">{item.sku}</div>
                                                            <div className="text-[9px] font-black text-stone-700 uppercase italic tracking-widest">{item.name}</div>
                                                        </td>
                                                        <td className="py-6 px-4 text-[13px] font-black text-stone-500 italic uppercase">{item.current} Units</td>
                                                        <td className="py-6 px-4">
                                                            <input type="number" defaultValue={item.adjust} className="w-24 bg-zinc-950 border border-zinc-800 text-primary font-headline font-black italic text-lg px-4 py-2 rounded-xl focus:ring-2 focus:ring-primary transition-all" />
                                                        </td>
                                                        <td className="py-6 px-4 font-headline font-black text-white text-xl italic tracking-tighter">{item.new}</td>
                                                        <td className="py-6 px-4 text-right pr-6">
                                                            <button className="text-stone-800 hover:text-error transition-colors"><span className="material-symbols-outlined font-black italic">delete</span></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Administrative Justification (Art. 177 ISLR Compliance)</label>
                                    <textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-[32px] p-8 text-white text-[12px] font-black uppercase tracking-widest focus:ring-2 focus:ring-primary transition-all italic leading-relaxed h-40 placeholder:text-stone-900" placeholder="DECONSTRUCT TECHNICAL RATIONALE FOR ASSET DELTA..."></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Logistics Payload (Acta Administrativa)</label>
                                        <div className="border-4 border-dashed border-zinc-800 bg-zinc-950/50 rounded-[40px] p-12 flex flex-col items-center gap-6 hover:border-primary/50 group transition-all cursor-pointer shadow-inner">
                                            <span className="material-symbols-outlined text-4xl text-stone-800 group-hover:text-primary group-hover:scale-125 transition-all italic">upload_file</span>
                                            <div className="text-center group-hover:translate-y-[-5px] transition-transform">
                                                <div className="text-[10px] font-black text-stone-500 uppercase tracking-[0.4em] italic mb-1">Commit Digital Evidence</div>
                                                <div className="text-[8px] font-black text-stone-800 uppercase italic">PDF, JPG (MAX BINARY LOAD 5MB)</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <button className="w-full bg-primary text-black py-10 rounded-[3.5rem] font-headline font-black uppercase tracking-[0.3em] text-xl hover:bg-white transition-all italic shadow-2xl shadow-primary/5 active:scale-95 group">
                                            <span className="flex items-center justify-center gap-4">
                                                Commit Fiscal Adjustment
                                                <span className="material-symbols-outlined text-2xl font-black italic group-hover:translate-x-3 transition-transform">lock_person</span>
                                            </span>
                                        </button>
                                        <button className="w-full border-2 border-zinc-800 hover:border-zinc-700 text-stone-700 hover:text-stone-500 py-6 rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-[10px] transition-all italic">Save State for Later Review</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Protocol Compliance Badges */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
                            <div className="flex gap-6 items-center">
                                <span className="material-symbols-outlined text-3xl text-primary font-black italic">security</span>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black text-white uppercase italic tracking-widest">Data Integrity</div>
                                    <p className="text-[9px] font-black text-stone-700 uppercase italic leading-tight">Digital signatures & chronostamps active.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                <span className="material-symbols-outlined text-3xl text-primary font-black italic">policy</span>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black text-white uppercase italic tracking-widest">Legal Enforced</div>
                                    <p className="text-[9px] font-black text-stone-700 uppercase italic leading-tight">Art. 177 Perpetual Ledger Sync.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                <span className="material-symbols-outlined text-3xl text-primary font-black italic">query_stats</span>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black text-white uppercase italic tracking-widest">Immutable Trace</div>
                                    <p className="text-[9px] font-black text-stone-700 uppercase italic leading-tight">Zero-deletion audit trajectory.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Meta Sidebar */}
                    <aside className="xl:col-span-4 space-y-10">
                        {/* Historical Activity Vault */}
                        <section className="bg-zinc-950 border border-outline-variant/10 shadow-3xl rounded-[56px] p-10 relative overflow-hidden group border-l-[12px] border-l-stone-700/50">
                             <div className="absolute top-0 right-0 w-48 h-48 bg-stone-500/5 rounded-full blur-3xl opacity-50"></div>
                             <h3 className="text-xl font-headline font-black uppercase tracking-widest text-white italic mb-10 border-b border-zinc-800 pb-6 block flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary italic font-black">history</span>
                                Recent Acts
                             </h3>
                             
                             <div className="space-y-6">
                                {recentActs.map((act) => (
                                    <div key={act.id} className={`border-l-4 pl-6 py-2 transition-all hover:translate-x-2 ${act.approved ? 'border-primary' : 'border-stone-800 shadow-inner'}`}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[10px] font-black text-white font-mono uppercase tracking-[0.2em] italic">{act.id}</span>
                                            <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase italic border ${act.approved ? 'bg-primary/10 text-primary border-primary/20' : 'bg-stone-900 text-stone-600 border-zinc-800'}`}>{act.status}</span>
                                        </div>
                                        <h4 className="text-[12px] font-black text-stone-200 uppercase italic mb-1 tracking-tighter leading-none">{act.title}</h4>
                                        <p className="text-[9px] font-black text-stone-700 uppercase italic tracking-widest">{act.user}</p>
                                    </div>
                                ))}
                             </div>
                             
                             <button className="w-full mt-12 py-5 border border-zinc-800 rounded-3xl text-[9px] font-black text-stone-800 uppercase tracking-[0.8em] italic hover:border-primary hover:text-white transition-all shadow-inner">Access Universal History</button>
                        </section>

                        {/* Analytical Projection */}
                        <section className="bg-zinc-900 border border-outline-variant/10 shadow-3xl rounded-[56px] p-10 group overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                             <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-700 italic border-b border-zinc-800 pb-4 mb-4">Control Telemetry</h3>
                             
                             <div className="space-y-10">
                                <div className="aspect-[16/10] bg-zinc-950 rounded-[40px] border border-zinc-800 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 group/img">
                                    <img src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBAwV04LJtOSEN-d15SJByiTCJIxfQOgTOlDNO4WEgmMNRfUCX_XqbdzsNDSdx_YfGn-T5i6MTHznikyQXEtnxWGZemRXxADtyOfXJ8SM58sH_FAzhGYVu1l2EpE0BN_9XOEFKvYCBWk7TwjehJEiJWHnxqJRE3S7XxYrzaRfNKA0NEY8Rpr5IZj5cJHfjwmebMema3XxKV-AzaVIOb7NMjtEImjYtJ7HxRoOtJmFBS0E5dIT8TiTIvzApEWNIT3VSB5THa2gntm2s`} className="w-full h-full object-cover opacity-30 group-hover/img:opacity-60 transition-opacity" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                                    <div className="absolute bottom-6 left-8">
                                         <div className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic mb-1">Industrial Shrinkage Rate</div>
                                         <div className="text-4xl font-headline font-black text-white italic tracking-tighter leading-none">0.84%</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-zinc-950/50 p-6 rounded-[32px] border border-zinc-800/50 shadow-inner group-hover:-translate-y-1 transition-transform">
                                        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest italic block mb-2">Aggregate Value</span>
                                        <span className="text-xl font-headline font-black text-primary italic tracking-tighter">$12.450</span>
                                    </div>
                                    <div className="bg-zinc-950/50 p-6 rounded-[32px] border border-zinc-800/50 shadow-inner group-hover:-translate-y-1 transition-transform delay-75">
                                        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest italic block mb-2">Entity Breach</span>
                                        <span className="text-xl font-headline font-black text-white italic tracking-tighter">428 Pts</span>
                                    </div>
                                </div>
                             </div>
                        </section>

                        {/* Audit Oracle Callout */}
                        <div className="bg-primary shadow-2xl p-10 rounded-[56px] space-y-4 shadow-primary/20 hover:scale-105 transition-transform duration-500 cursor-pointer group">
                             <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl"><span className="material-symbols-outlined text-primary text-3xl font-black italic">policy</span></div>
                                <h4 className="text-black font-headline font-black text-xl uppercase italic tracking-tighter leading-tight">Critical Audit Directive</h4>
                             </div>
                             <p className="text-black text-[11px] font-black uppercase italic leading-loose tracking-[0.05em] border-t border-black/10 pt-4 opacity-70 italic">"The lack of signed administrative acts to justify shrinkage exceeding 2% may trigger immediate fiscal rectification protocols."</p>
                        </div>
                    </aside>
                </div>

                {/* Industrial Infrastructure Footer */}
                <footer className="mt-20 pt-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-4 gap-16 px-6">
                    <div className="space-y-6">
                        <div className="text-white font-headline font-black tracking-[-0.1em] text-3xl opacity-10 italic mb-4 uppercase">Titan_Ledger_Integrity</div>
                        <p className="text-[10px] font-black text-stone-800 leading-loose uppercase tracking-widest italic max-w-sm">High-performance fiscal orchestration for the heavy industry supply chain. Built for precision asset valuation.</p>
                    </div>
                    <div className="space-y-6">
                         <h5 className="text-[11px] font-black text-stone-500 uppercase tracking-[0.6em] italic">Compliance Center</h5>
                         <p className="text-[10px] font-black text-stone-800 uppercase italic tracking-widest leading-loose">
                            Permanent Inventory Protocol v4.2<br/>
                            Auth Mode: Article 177 ISLR<br/>
                            ID: TF_LOGISTICS_HUB_VAL
                        </p>
                    </div>
                    <div className="col-span-1 md:col-span-2 text-right flex flex-col justify-end gap-2 grayscale">
                        <div className="text-primary font-headline text-[13px] font-black italic tracking-[0.2em] uppercase leading-none italic mb-2">MAYOR DE REPUESTO LA CIMA, C.A.</div>
                        <div className="text-stone-800 font-mono text-[10px] font-black italic tracking-widest leading-none">RIF: J-40308741-5 | VALENCIA_VE_HUB</div>
                        <span className="text-[9px] font-black text-stone-900 uppercase tracking-[0.1em] mt-4 italic">© 2024 MAYOR DE REPUESTO LA CIMA, C.A. ALL ADJUSTMENT VECTORS RECONCILED.</span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
