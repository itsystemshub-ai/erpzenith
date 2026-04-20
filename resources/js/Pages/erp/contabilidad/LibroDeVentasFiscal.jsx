import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function LibroDeVentasFiscal() {
    const sales = [
        { invoice: 'INV-2024-001', date: '01/11/2024', rif: 'J-12345678-9', customer: 'Siderúrgica del Turbio S.A.', exempt: '0,00', base: '12.500,00', iva: '2.000,00', retention: '1.500,00', total: '13.000,00' },
        { invoice: 'INV-2024-002', date: '02/11/2024', rif: 'J-98765432-1', customer: 'Corp. Eléctrica Nacional', exempt: '8.420,00', base: '0,00', iva: '0,00', retention: '0,00', total: '8.420,00' },
        { invoice: 'INV-2024-003', date: '05/11/2024', rif: 'G-20001234-5', customer: 'Ministerio de Transporte', exempt: '0,00', base: '45.200,00', iva: '7.232,00', retention: '5.424,00', total: '47.008,00' },
        { invoice: 'INV-2024-004', date: '08/11/2024', rif: 'J-55443322-1', customer: 'Inversiones Hidráulicas C.A.', exempt: '0,00', base: '22.150,00', iva: '3.544,00', retention: '0,00', total: '25.694,00' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">history</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Libro de Ventas Fiscal</span>
                </div>
            }
        >
            <Head title="Libro de Ventas Fiscal" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                    <div className="max-w-3xl space-y-4">
                        <div className="flex items-center gap-4 text-primary mb-2">
                             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Compliance Node V4.2</span>
                             <div className="h-px w-16 bg-primary/20"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-white leading-[0.9]">
                            Libro De <br/><span className="text-stone-700">Ventas Fiscal</span>
                        </h1>
                        <p className="text-stone-500 font-medium text-lg border-l-2 border-stone-900 pl-8 mt-6">
                            SENIAT Compliance (Art. 58). Chronological record of operations for the fiscal period for heavy industrial assets.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-4 bg-zinc-900 border border-white/5 text-stone-200 px-8 py-5 rounded-2xl font-headline font-black uppercase text-[10px] tracking-widest hover:bg-zinc-800 transition-all active:scale-95">
                            <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                            Export PDF
                        </button>
                        <button className="flex items-center gap-4 bg-primary text-black px-8 py-5 rounded-2xl font-headline font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(154,205,50,0.3)]">
                            <span className="material-symbols-outlined text-lg">table_view</span>
                            Export Excel
                        </button>
                    </div>
                </header>

                {/* Filters & Stats Bento */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Period Selector */}
                    <div className="lg:col-span-6 bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between">
                        <div>
                            <h3 className="font-headline text-[9px] font-black uppercase tracking-[0.4em] text-stone-600 mb-8">Fiscal Period Selection</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="block text-[8px] uppercase font-black text-stone-700 tracking-widest">Fiscal Year</label>
                                    <select className="w-full bg-zinc-950 border border-white/5 rounded-2xl text-xs font-black text-white focus:ring-1 focus:ring-primary py-4 px-6 shadow-inner tracking-widest">
                                        <option>2024</option>
                                        <option>2023</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[8px] uppercase font-black text-stone-700 tracking-widest">Month Registry</label>
                                    <select className="w-full bg-zinc-950 border border-white/5 rounded-2xl text-xs font-black text-white focus:ring-1 focus:ring-primary py-4 px-6 shadow-inner tracking-widest">
                                        <option>OCTOBER</option>
                                        <option selected>NOVEMBER</option>
                                        <option>DECEMBER</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center gap-4 text-primary text-[10px] font-black uppercase tracking-widest bg-zinc-950/50 p-4 rounded-2xl border border-primary/10">
                            <span className="material-symbols-outlined text-lg font-black animate-pulse">verified</span>
                            <span>Viewing Nov 2024 (Art. 58 Validated Nodes)</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="lg:col-span-3 bg-zinc-950 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl flex flex-col justify-between group">
                        <h3 className="font-headline text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 mb-2">VAT Debit Total</h3>
                        <div>
                            <p className="text-4xl font-headline font-black text-white mb-3 tracking-tighter italic">Bs. 42.105,50</p>
                            <div className="text-[9px] text-primary font-black uppercase flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full w-fit">
                                <span className="material-symbols-outlined text-sm font-black">trending_up</span>
                                +12.4% VS PREV. MONTH
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between">
                        <h3 className="font-headline text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 mb-2">Exempt Sales</h3>
                        <div>
                            <p className="text-4xl font-headline font-black text-white mb-4 tracking-tighter">Bs. 8.420,00</p>
                            <div className="text-[9px] text-stone-800 font-black uppercase tracking-widest border border-white/5 px-4 py-2 rounded-2xl">
                                Representing 16.5% of nodes
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fiscal Record Ledger */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="overflow-x-auto min-h-[600px] p-8">
                        <table className="w-full text-left border-separate border-spacing-y-4">
                            <thead>
                                <tr className="bg-zinc-950/40 text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                    <th className="px-8 py-6 first:rounded-l-3xl">Invoice / Date</th>
                                    <th className="px-8 py-6">Customer Ledger (RIF)</th>
                                    <th className="px-8 py-6 text-right">Exempt</th>
                                    <th className="px-8 py-6 text-right">Tax Base</th>
                                    <th className="px-8 py-6 text-right">VAT (16%)</th>
                                    <th className="px-8 py-6 text-right">Retentions</th>
                                    <th className="px-8 py-6 text-right last:rounded-r-3xl">Total General</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {sales.map((sale, i) => (
                                    <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-500 group/row">
                                        <td className="px-8 py-8 first:rounded-l-3xl border-l-4 border-transparent group-hover/row:border-primary transition-all">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-white font-mono tracking-widest font-black">{sale.invoice}</span>
                                                <span className="text-[10px] text-stone-700 font-mono tracking-tighter">{sale.date}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-8">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-white uppercase tracking-tight text-[11px] font-black">{sale.customer}</span>
                                                <span className="text-primary font-mono text-[9px] tracking-widest">{sale.rif}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-8 text-right font-mono text-stone-600 tabular-nums">{sale.exempt}</td>
                                        <td className="px-8 py-8 text-right font-mono text-stone-400 tabular-nums">{sale.base}</td>
                                        <td className="px-8 py-8 text-right font-mono text-stone-400 tabular-nums">{sale.iva}</td>
                                        <td className="px-8 py-8 text-right font-mono text-stone-700 tabular-nums lowercase">{sale.retention}</td>
                                        <td className="px-8 py-8 text-right text-white font-headline text-lg font-black last:rounded-r-3xl tracking-tighter">
                                            {sale.total}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-zinc-950/80 border-t-4 border-primary">
                                    <td className="px-8 py-10 rounded-bl-[40px]" colSpan="2">
                                        <span className="font-headline text-[11px] font-black uppercase tracking-[0.6em] text-white">Monthly Period Totals</span>
                                    </td>
                                    <td className="px-8 py-10 text-right font-mono text-white text-sm font-black">8.420,00</td>
                                    <td className="px-8 py-10 text-right font-mono text-white text-sm font-black">79.850,00</td>
                                    <td className="px-8 py-10 text-right font-mono text-white text-sm font-black">12.776,00</td>
                                    <td className="px-8 py-10 text-right font-mono text-white text-sm font-black">6.924,00</td>
                                    <td className="px-8 py-10 text-right font-headline text-2xl font-black text-primary rounded-br-[40px] tracking-tighter italic">
                                        Bs. 94.122,00
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>

                {/* Technical Footnotes */}
                <footer className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="space-y-3">
                         <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">Digital Identity Node</h4>
                         <p className="text-[10px] text-stone-800 font-mono tracking-widest uppercase">
                            TITAN ENGINE ERP - FISCAL MODULE v4.2.1 <br/>
                            STAMP: 0X992-B7F-1120-CC-ZENITH
                         </p>
                    </div>
                    <div className="text-right space-y-3 flex flex-col items-end">
                        <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">Legal Certification</h4>
                        <p className="text-[10px] text-stone-800 font-medium max-w-sm leading-relaxed uppercase italic">
                            Certified Document under Venezuelan Law. <br/>
                            Electronic signature valid for SENIAT audits and industrial oversight.
                        </p>
                    </div>
                </footer>
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
