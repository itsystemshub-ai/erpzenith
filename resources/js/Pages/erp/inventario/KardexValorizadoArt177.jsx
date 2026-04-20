import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function KardexValorizadoArt177() {
    const kardexRows = [
        { date: '2023-10-01', ref: 'INV-INIT-001', type: 'Inventario Inicial', in: 150, out: '--', bal: 150, unit: '$180.00', debit: '$27,000.00', total: '$27,000.00' },
        { date: '2023-10-05', ref: 'FAC-PUR-8822', type: 'Compra Nacional', in: 50, out: '--', bal: 200, unit: '$195.00', debit: '$9,750.00', total: '$36,750.00' },
        { date: '2023-10-12', ref: 'SAL-009121', type: 'Venta Contado', in: '--', out: 30, bal: 170, unit: '$183.75', debit: '($5,512.50)', total: '$31,237.50' },
        { date: '2023-10-20', ref: 'ADJ-PHYS-02', type: 'Ajuste de Auditoría', in: 5, out: '--', bal: 175, unit: '$183.75', debit: '$918.75', total: '$32,156.25', special: 'text-amber-500' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">gavel</span>
                    <span>Kardex Valorizado <span className="text-white/60 mx-2">|</span> Art. 177 ISLR</span>
                </div>
            }
        >
            <Head title="Kardex Valorizado Art. 177" />

            <div className="space-y-12 pb-12">
                {/* Header Identity Section */}
                <header className="flex flex-col md:flex-row gap-8 px-4">
                    <div className="flex-1 bg-zinc-900 p-12 rounded-[48px] border-l-[12px] border-l-primary border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000 pointer-events-none">
                            <span className="material-symbols-outlined text-[200px] text-white">engineering</span>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-headline font-black text-white tracking-tighter uppercase mb-2">MAYOR DE REPUESTO LA CIMA, C.A.</h2>
                            <p className="text-stone-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-12">RIF: J-00000000-0 | Industrial Engine Parts Division</p>
                            
                            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-outline-variant/5">
                                <div className="space-y-2">
                                    <span className="block text-[9px] text-primary font-black uppercase tracking-[0.4em]">Product Description</span>
                                    <span className="text-2xl font-headline font-black text-white uppercase tracking-tight">PISTON KIT - CATERPILLAR C15</span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block text-[9px] text-primary font-black uppercase tracking-[0.4em]">Accounting Method</span>
                                    <span className="text-2xl font-headline font-black text-stone-500 uppercase tracking-tight">CPP (Average Cost)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-[400px] bg-zinc-950 p-12 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between group">
                        <div>
                            <span className="block text-[9px] text-stone-700 font-black uppercase tracking-[0.4em] mb-6">Total Inventory Valuation</span>
                            <div className="text-6xl font-headline font-black text-primary tracking-tighter mb-4">$ 42,850.25</div>
                            <div className="flex items-center gap-3 text-[10px] font-black text-stone-500 uppercase tracking-[0.2em] bg-zinc-900/50 p-3 rounded-2xl border border-outline-variant/5">
                                <span className="material-symbols-outlined text-primary text-base">trending_up</span>
                                +4.2% vs previous fiscal month
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            <button className="bg-zinc-900 hover:bg-primary hover:text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 border border-outline-variant/5">
                                Export PDF
                            </button>
                            <button className="bg-zinc-900 hover:bg-zinc-800 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 border border-outline-variant/5">
                                Export XML
                            </button>
                        </div>
                    </div>
                </header>

                {/* Filter & Performance Stats */}
                <section className="bg-zinc-900/50 rounded-[40px] border border-outline-variant/10 overflow-hidden shadow-3xl">
                    <div className="flex items-center justify-between px-12 py-6 border-b border-outline-variant/5">
                        <div className="flex items-center gap-12">
                            <div className="flex flex-col">
                                <label className="text-[9px] uppercase font-black text-stone-700 mb-2 tracking-[0.3em]">Fiscal Period</label>
                                <select className="bg-zinc-950 border-none rounded-xl text-[11px] font-black text-primary uppercase tracking-widest focus:ring-1 ring-primary py-3 px-6 shadow-inner appearance-none transition-all">
                                    <option>OCTUBRE 2024</option>
                                    <option>NOVIEMBRE 2024</option>
                                </select>
                            </div>
                            <div className="h-12 w-px bg-outline-variant/10"></div>
                            <div className="flex flex-col">
                                <label className="text-[9px] uppercase font-black text-stone-700 mb-2 tracking-[0.3em]">Transaction Filter</label>
                                <div className="flex gap-3">
                                    {['Purchases', 'Sales', 'Adjustments'].map((t, i) => (
                                        <button key={t} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                                            i === 0 ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(154,205,50,0.1)]' : 'bg-zinc-900 border-outline-variant/5 text-stone-600 hover:text-white'
                                        }`}>
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-[10px] text-stone-800 font-mono font-bold tracking-[0.2em] uppercase">
                            SYSTEM_VER: <span className="text-stone-600">4.8.2-STABLE</span>
                        </div>
                    </div>

                    {/* Kardex Detailed Grid */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-950/50 text-stone-500">
                                    <th className="px-8 py-8 text-[11px] font-black uppercase tracking-[0.5em] border-r border-outline-variant/5">Date</th>
                                    <th className="px-8 py-8 text-[11px] font-black uppercase tracking-[0.5em] border-r border-outline-variant/5 text-center">Reference ID</th>
                                    <th className="px-8 py-8 text-[11px] font-black uppercase tracking-[0.5em] border-r border-outline-variant/5">Operation Type</th>
                                    <th className="px-8 py-4 text-[11px] font-black uppercase tracking-[0.5em] text-center border-b border-outline-variant/5" colSpan="3">Unit Movement (Qty)</th>
                                    <th className="px-8 py-4 text-[11px] font-black uppercase tracking-[0.5em] text-center border-b border-outline-variant/5" colSpan="3">Evaluation Logic (CPP)</th>
                                </tr>
                                <tr className="bg-zinc-900/80 text-[10px] font-bold text-stone-700 uppercase tracking-widest">
                                    <th className="border-r border-outline-variant/5" colSpan="3"></th>
                                    <th className="px-6 py-4 text-center border-r border-outline-variant/5">Inflow</th>
                                    <th className="px-6 py-4 text-center border-r border-outline-variant/5">Outflow</th>
                                    <th className="px-6 py-4 text-center border-r border-outline-variant/5 bg-zinc-950/20">Balance</th>
                                    <th className="px-6 py-4 text-center border-r border-outline-variant/5">Unit Cost</th>
                                    <th className="px-6 py-4 text-center border-r border-outline-variant/5">Debit/Credit</th>
                                    <th className="px-6 py-4 text-center bg-zinc-950/30 text-white">Fiscal Balance</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono text-xs divide-y divide-outline-variant/5">
                                {kardexRows.map((row, i) => (
                                    <tr key={i} className="hover:bg-zinc-950/40 transition-all group">
                                        <td className="px-8 py-8 text-stone-600 group-hover:text-stone-300 transition-colors uppercase tracking-widest">{row.date}</td>
                                        <td className="px-8 py-8 font-black text-center text-primary tracking-tighter text-base group-hover:scale-110 transition-transform">{row.ref}</td>
                                        <td className={`px-8 py-8 uppercase font-headline font-black text-sm tracking-tight ${row.special || 'text-white'}`}>{row.type}</td>
                                        <td className="px-6 py-8 text-center bg-zinc-950/20 font-black text-stone-400 text-lg">{row.in}</td>
                                        <td className="px-6 py-8 text-center font-black text-error text-lg">{row.out}</td>
                                        <td className="px-6 py-8 text-center font-black text-white text-xl bg-zinc-950/40">{row.bal}</td>
                                        <td className="px-6 py-8 text-right font-black text-stone-500 text-lg">{row.unit}</td>
                                        <td className={`px-6 py-8 text-right font-black text-lg ${row.debit.includes('(') ? 'text-error/60' : 'text-primary'}`}>{row.debit}</td>
                                        <td className="px-6 py-8 text-right bg-zinc-950 font-headline font-black text-2xl text-white tracking-tighter">{row.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Metrics Summary Area */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between group">
                        <span className="block text-[10px] text-stone-700 font-black uppercase tracking-[0.4em] mb-6">Current Weighted Cost (CPP)</span>
                        <div className="text-4xl font-headline font-black text-white tracking-tighter mb-4">$ 183.75</div>
                        <div className="p-4 bg-zinc-950 rounded-2xl border border-outline-variant/5 text-[9px] text-stone-600 font-bold uppercase tracking-widest leading-relaxed">
                            Calculated dynamically based on 175 aggregated units on hand.
                        </div>
                    </div>
                    
                    <div className="md:col-span-3 grid grid-cols-3 gap-1 bg-zinc-950/30 rounded-[48px] overflow-hidden border border-outline-variant/10 shadow-3xl">
                        <div className="bg-zinc-900/50 p-10 flex flex-col justify-center border-r border-outline-variant/5 hover:bg-zinc-900 transition-colors cursor-pointer">
                            <span className="block text-[10px] text-stone-700 font-black uppercase tracking-[0.4em] mb-4">Total Entries</span>
                            <span className="text-5xl font-headline font-black text-white tracking-tighter">205 <span className="text-sm font-bold text-stone-800 ml-2 uppercase">Units</span></span>
                        </div>
                        <div className="bg-zinc-900/50 p-10 flex flex-col justify-center border-r border-outline-variant/5 hover:bg-zinc-900 transition-colors cursor-pointer">
                            <span className="block text-[10px] text-stone-700 font-black uppercase tracking-[0.4em] mb-4">Total Exits</span>
                            <span className="text-5xl font-headline font-black text-error/60 tracking-tighter">30 <span className="text-sm font-bold text-stone-800 ml-2 uppercase">Units</span></span>
                        </div>
                        <div className="bg-primary p-10 flex flex-col justify-center relative overflow-hidden group/compl cursor-pointer">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover/compl:opacity-10 transition-opacity"></div>
                            <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-black/60 mb-4">Inventory Status</span>
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-4xl text-black" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                <span className="text-4xl font-headline font-black text-black uppercase tracking-tighter italic">Compliant</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Footer */}
                <footer className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-outline-variant/5 px-4 gap-8">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3 bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Fiscal System Active</span>
                        </div>
                        <div className="text-[10px] text-stone-700 font-mono font-black tracking-widest">
                            HASH_INTEGRITY: <span className="text-stone-500">9A2F-11EB-9439-0242AC130002</span>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        {['Privacy Policy', 'Audit Ledger', 'Protocol Support'].map(link => (
                            <button key={link} className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-700 hover:text-white transition-colors">
                                {link}
                            </button>
                        ))}
                    </div>
                </footer>
            </div>

            {/* FAB Action */}
            <div className="fixed bottom-12 right-12 flex items-center gap-4 group">
                <div className="bg-zinc-900 border border-outline-variant/10 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 shadow-3xl pointer-events-none">
                    New Transaction Entry
                </div>
                <button className="w-20 h-20 bg-primary text-black rounded-3xl shadow-[0_25px_60px_rgba(154,205,50,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 overflow-hidden relative group/fab">
                    <span className="material-symbols-outlined text-4xl font-black group-hover/fab:rotate-90 transition-transform">add</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/fab:opacity-20 transition-opacity"></div>
                </button>
            </div>
            
        </AuthenticatedLayout>
    );
}
