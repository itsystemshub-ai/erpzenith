import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function KardexValorizado() {
    const movements = [
        { date: '2023-10-01', ref: 'INV-INIT-001', type: 'Inventario Inicial', in: 150, out: '--', bal: 150, cost: '$ 180.00', debit: '$ 27,000.00', total: '$ 27,000.00' },
        { date: '2023-10-05', ref: 'FAC-PUR-8822', type: 'Compra Nacional', in: 50, out: '--', bal: 200, cost: '$ 195.00', debit: '$ 9,750.00', total: '$ 36,750.00' },
        { date: '2023-10-12', ref: 'SAL-009121', type: 'Venta Contado', in: '--', out: 30, bal: 170, cost: '$ 183.75', debit: '$ (5,512.50)', total: '$ 31,237.50' },
        { date: '2023-10-20', ref: 'ADJ-PHYS-02', type: 'Ajuste de Auditoría', in: 5, out: '--', bal: 175, cost: '$ 183.75', debit: '$ 918.75', total: '$ 32,156.25' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">gavel</span>
                    <span>Inventario <span className="text-white/60 mx-2">|</span> Kardex Valorizado <span className="text-primary/60 ml-2 italic">Art. 177 ISLR</span></span>
                </div>
            }
        >
            <Head title="Kardex Valorizado - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Legal Authority Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Fiscal Compliance Node</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Official Ledger Stream</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Valuated <br/> <span className="text-stone-700">Kardex</span></h1>
                    </div>
                    
                    <div className="flex flex-col items-end gap-4">
                        <div className="text-right">
                             <div className="text-[10px] font-black text-stone-700 uppercase tracking-widest italic mb-2">Aggregate Valuation Buffer</div>
                             <div className="text-5xl font-headline font-black text-primary italic tracking-tighter leading-none">$ 42.850<span className="text-white/20 italic">.25</span></div>
                        </div>
                        <div className="flex gap-2">
                             <button className="bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[9px] hover:border-primary transition-all italic shadow-2xl">Export Official PDF</button>
                             <button className="bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[9px] hover:border-primary transition-all italic shadow-2xl">XML Ledger</button>
                        </div>
                    </div>
                </header>

                {/* Identity Matrix */}
                <section className="bg-zinc-950 rounded-[56px] border border-outline-variant/10 p-12 shadow-inner relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                        <span className="material-symbols-outlined text-[240px] font-black italic">engineering</span>
                    </div>

                    <div className="relative z-10 space-y-10">
                        <div>
                             <h2 className="text-3xl md:text-4xl font-headline font-black text-white uppercase italic tracking-widest leading-none mb-3">Mayor de Repuesto La Cima, C.A.</h2>
                             <div className="flex items-center gap-4">
                                <span className="text-[11px] font-black text-stone-700 uppercase tracking-[0.4em] italic">RIF: J-40308741-5</span>
                                <div className="h-4 w-px bg-zinc-800"></div>
                                <span className="text-[11px] font-black text-stone-700 uppercase tracking-[0.4em] italic">Industrial Engine Parts Hub</span>
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-zinc-900">
                             <div className="space-y-4">
                                <div className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic leading-none">Entity Description</div>
                                <div className="text-2xl font-headline font-black text-white uppercase italic tracking-tighter shadow-text">Piston Kit - Caterpillar C15</div>
                             </div>
                             <div className="space-y-4">
                                <div className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic leading-none">Valuation Methodology</div>
                                <div className="text-2xl font-headline font-black text-white uppercase italic tracking-tighter">Costo Promedio Ponderado (CPP)</div>
                             </div>
                        </div>
                    </div>
                </section>

                {/* Tactical Selection Bar */}
                <section className="bg-zinc-900 rounded-[32px] p-6 border border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8 shadow-3xl">
                     <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex flex-col">
                             <label className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic mb-2">Fiscal Cycle Archive</label>
                             <select className="bg-zinc-950 border border-zinc-800 rounded-xl px-6 py-2 text-white text-[11px] font-black uppercase tracking-widest italic appearance-none focus:ring-1 focus:ring-primary min-w-[200px]">
                                <option>OCTUBRE 2023</option>
                                <option>NOVIEMBRE 2023</option>
                             </select>
                        </div>
                        <div className="h-10 w-px bg-zinc-800 hidden md:block"></div>
                        <div className="flex flex-col">
                             <label className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic mb-2">Filter Protocol</label>
                             <div className="flex gap-3">
                                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest italic border border-primary/20 cursor-pointer hover:bg-primary hover:text-black transition-all">Purchases</span>
                                <span className="px-4 py-2 rounded-full bg-zinc-950 text-stone-600 text-[9px] font-black uppercase tracking-widest italic border border-zinc-800 cursor-pointer hover:border-primary transition-all">Sales</span>
                                <span className="px-4 py-2 rounded-full bg-zinc-950 text-stone-600 text-[9px] font-black uppercase tracking-widest italic border border-zinc-800 cursor-pointer hover:border-primary transition-all">Adjustments</span>
                             </div>
                        </div>
                     </div>
                     <div className="text-[10px] font-black text-stone-800 uppercase tracking-[0.4em] italic">System_Core: 4.8.2-DEFLATE</div>
                </section>

                {/* Master Ledger Table */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden flex flex-col min-h-[600px]">
                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left">
                            <thead className="bg-zinc-950/40">
                                <tr className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 border-b border-zinc-800">
                                    <th className="px-10 py-10 border-r border-zinc-800/50">Sequence Trace</th>
                                    <th className="px-10 py-10 border-r border-zinc-800/50">Entity Reference</th>
                                    <th className="px-10 py-10 border-r border-zinc-800/50">Operation Logic</th>
                                    <th className="px-10 py-4 text-center border-b border-zinc-800/50 bg-black/5" colSpan="3">Kinetic Flow (Qty)</th>
                                    <th className="px-10 py-4 text-center border-b border-zinc-800/50 bg-primary/5" colSpan="3">Valuation Protocol (CPP)</th>
                                </tr>
                                <tr className="text-[8px] font-black uppercase tracking-widest text-stone-800 border-b border-zinc-800">
                                    <th colSpan="3"></th>
                                    <th className="px-6 py-4 text-center border-r border-zinc-800/50">Ingress</th>
                                    <th className="px-6 py-4 text-center border-r border-zinc-800/50">Egress</th>
                                    <th className="px-6 py-4 text-center border-r border-zinc-800/50 bg-black/10 text-stone-500">Balance</th>
                                    <th className="px-6 py-4 text-center border-r border-zinc-800/50">Unit Node</th>
                                    <th className="px-6 py-4 text-center border-r border-zinc-800/50">Delta Value</th>
                                    <th className="px-6 py-4 text-center bg-primary/10 text-primary">Aggregate Balance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/30">
                                {movements.map((m, i) => (
                                    <tr key={i} className="hover:bg-zinc-950/50 transition-colors group italic">
                                        <td className="px-10 py-10 text-[11px] font-black text-stone-600 uppercase tracking-widest group-hover:text-white transition-colors">{m.date}</td>
                                        <td className="px-10 py-10 font-black text-primary text-[12px] tracking-tighter uppercase">{m.ref}</td>
                                        <td className="px-10 py-10 text-[11px] font-black text-stone-400 uppercase tracking-widest italic">{m.type}</td>
                                        
                                        <td className="px-6 py-10 text-center font-headline font-black text-xl italic tracking-tighter text-stone-500">{m.in}</td>
                                        <td className="px-6 py-10 text-center font-headline font-black text-xl italic tracking-tighter text-error">{m.out}</td>
                                        <td className="px-6 py-10 text-center font-headline font-black text-2xl italic tracking-tighter text-white bg-black/5">{m.bal}</td>

                                        <td className="px-6 py-10 text-right text-[13px] font-black text-stone-600">{m.cost}</td>
                                        <td className="px-6 py-10 text-right font-headline font-black text-xl italic tracking-tighter text-stone-400">{m.debit}</td>
                                        <td className="px-10 py-10 text-right font-headline font-black text-3xl italic tracking-tighter text-primary bg-primary/5">{m.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Summary Logic Grid */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
                     <div className="bg-zinc-950 border border-outline-variant/10 rounded-[48px] p-10 flex flex-col justify-between shadow-inner">
                        <div className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] italic mb-6">Current CPP Node</div>
                        <div className="text-4xl font-headline font-black text-white italic tracking-tighter leading-none">$ 183<span className="text-stone-800">.75</span></div>
                        <div className="mt-8 bg-zinc-900 border border-zinc-800 p-6 rounded-3xl text-[10px] font-black text-stone-600 uppercase italic tracking-widest leading-relaxed">
                            Calculated dynamically based on 175 aggregate units in current buffer.
                        </div>
                     </div>

                     <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-zinc-900/50 rounded-[48px] border border-zinc-800 p-10 flex flex-col justify-between group hover:border-primary/20 transition-all">
                             <div className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] italic">Total Ledger Ingress</div>
                             <div className="text-5xl font-headline font-black text-white italic tracking-tighter leading-none mt-4">205 <span className="text-[12px] text-stone-800 not-italic uppercase font-bold tracking-widest ml-2">Units</span></div>
                        </div>
                        <div className="bg-zinc-900/50 rounded-[48px] border border-zinc-800 p-10 flex flex-col justify-between group hover:border-error/20 transition-all">
                             <div className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] italic">Total Ledger Egress</div>
                             <div className="text-5xl font-headline font-black text-white italic tracking-tighter leading-none mt-4">30 <span className="text-[12px] text-stone-800 not-italic uppercase font-bold tracking-widest ml-2">Units</span></div>
                        </div>
                        <div className="bg-primary rounded-[48px] p-10 flex flex-col justify-between shadow-3xl shadow-primary/20 border-4 border-black/10">
                             <div className="text-[10px] font-black text-black uppercase tracking-[0.4em] italic">Protocol Integrity</div>
                             <div className="text-4xl font-headline font-black text-black italic tracking-widest uppercase leading-none mt-4">Compliant</div>
                        </div>
                     </div>
                </section>

                {/* Industrial Infrastructure Footer */}
                <footer className="mt-20 pt-20 border-t border-zinc-900 flex justify-between items-center opacity-60">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#9acd32]"></span>
                            <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] italic">Fiscal Engine Active</span>
                        </div>
                        <div className="text-[10px] font-mono font-black text-stone-800 uppercase tracking-widest italic">Hash: 9a2f-11eb-9439-0242ac130002</div>
                    </div>
                    <div className="flex gap-10 text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] italic">
                         <span className="hover:text-primary cursor-pointer transition-colors">Privacy Shield</span>
                         <span className="hover:text-primary cursor-pointer transition-colors">Audit Ledger</span>
                         <span className="hover:text-primary cursor-pointer transition-colors">Support Node</span>
                    </div>
                </footer>
            </div>

            {/* Action FAB */}
            <button className="fixed bottom-12 right-12 w-20 h-20 bg-primary text-black rounded-full shadow-4xl shadow-primary/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group border-4 border-black">
                <span className="material-symbols-outlined text-4xl font-black italic group-hover:rotate-180 transition-transform duration-500">add</span>
                <div className="absolute right-24 bg-zinc-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-primary border border-zinc-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-2xl italic">
                    Initiate Ledger Entry
                </div>
            </button>
        </AuthenticatedLayout>
    );
}
