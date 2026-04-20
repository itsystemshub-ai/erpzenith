import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function BalanceDeComprobacion() {
    const accounts = [
        { code: '10100', name: 'CASH AND BANK EQUIVALENTS', opening: '$450,000.00', debit: '$125,000.00', credit: '$85,000.00', closing: '$490,000.00' },
        { code: '11200', name: 'ACCOUNTS RECEIVABLE', opening: '$820,500.00', debit: '$340,000.00', credit: '$210,000.00', closing: '$950,500.00' },
        { code: '12100', name: 'INVENTORY: RAW MATERIALS', opening: '$1,200,000.00', debit: '$450,000.00', credit: '$600,000.00', closing: '$1,050,000.00' },
        { code: '20100', name: 'ACCOUNTS PAYABLE', opening: '$650,000.00', debit: '$180,000.00', credit: '$240,000.00', closing: '$710,000.00' },
        { code: '30100', name: 'RETAINED EARNINGS', opening: '$1,169,000.00', debit: '$0.00', credit: '$85,000.00', closing: '$1,084,000.00' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">balance</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Balance de Comprobación</span>
                </div>
            }
        >
            <Head title="Balance de Comprobación" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-6">
                        <nav className="flex text-[10px] uppercase font-black tracking-[0.4em] text-stone-700 mb-2">
                            <span>FINANCE</span>
                            <span className="mx-4 opacity-30">/</span>
                            <span className="text-primary">TRIAL BALANCE</span>
                        </nav>
                        <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-white leading-none">
                            Balance De <br/><span className="text-stone-700">Comprobación</span>
                        </h1>
                        <p className="max-w-2xl text-stone-500 font-medium leading-relaxed mt-6">
                            Financial period overview for <span className="text-white">Q3 Fiscal Year 2024</span>. 
                            Ensuring equilibrium through high-precision ledger validation and automated reconciliation.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex bg-zinc-950 p-2 rounded-2xl border border-white/5 shadow-inner">
                            <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest shadow-lg transition-all active:scale-95">
                                <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                                PDF
                            </button>
                            <button className="flex items-center gap-3 px-6 py-3 rounded-xl text-stone-600 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-lg">table_view</span>
                                EXCEL
                            </button>
                        </div>
                        <button className="bg-primary text-black font-black text-[10px] uppercase tracking-[0.2em] px-10 py-5 rounded-2xl transition-all shadow-2xl flex items-center gap-4 group hover:scale-105 active:scale-95">
                            <span className="material-symbols-outlined text-lg font-black group-hover:rotate-180 transition-transform duration-500">lock</span>
                            CLOSE MONTH
                        </button>
                    </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl flex flex-col justify-between group">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">Accounts Verified</span>
                            <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">verified</span>
                        </div>
                        <div>
                            <div className="text-5xl font-black font-headline tracking-tighter text-white">142</div>
                            <div className="text-[9px] text-primary font-black uppercase mt-3 tracking-widest bg-primary/10 px-3 py-1 rounded-full w-fit">STATUS: OPERATIONAL</div>
                        </div>
                    </div>
                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">Total Ledger Value</span>
                            <span className="material-symbols-outlined text-stone-800">payments</span>
                        </div>
                        <div>
                            <div className="text-4xl font-headline font-black tracking-tighter text-white">$4,289,500.00</div>
                            <div className="text-[9px] text-stone-800 font-black uppercase mt-3 tracking-widest">CURRENCY: USD NODES</div>
                        </div>
                    </div>
                    <div className="bg-zinc-950 p-10 rounded-[48px] border-l-[12px] border-stone-800 shadow-3xl flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">Integrity Check</span>
                            <span className="material-symbols-outlined text-primary opacity-20">verified_user</span>
                        </div>
                        <div>
                            <div className="text-4xl font-headline font-black tracking-tighter text-primary italic">BALANCED</div>
                            <div className="text-[9px] text-stone-800 font-black uppercase mt-3 tracking-widest">DELTA: 0.000 PRECISION</div>
                        </div>
                    </div>
                </div>

                {/* Trial Balance Table */}
                <div className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="overflow-x-auto min-h-[500px] p-8">
                        <table className="w-full text-left border-separate border-spacing-y-3">
                            <thead>
                                <tr className="bg-zinc-950/40 text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                    <th className="px-8 py-6 first:rounded-l-3xl">Code Node</th>
                                    <th className="px-8 py-6">Account Description</th>
                                    <th className="px-8 py-6 text-right">Opening Balance</th>
                                    <th className="px-8 py-6 text-right">Debit Total</th>
                                    <th className="px-8 py-6 text-right">Credit Total</th>
                                    <th className="px-8 py-6 text-right last:rounded-r-3xl">Closing Balance</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {accounts.map((acc, i) => (
                                    <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-500 group/row">
                                        <td className="px-8 py-7 first:rounded-l-3xl">
                                            <span className="text-primary font-mono tracking-[0.2em] font-black">{acc.code}</span>
                                        </td>
                                        <td className="px-8 py-7">
                                            <span className="text-white uppercase tracking-tight group-hover/row:text-primary transition-colors">{acc.name}</span>
                                        </td>
                                        <td className="px-8 py-7 text-right font-mono text-stone-600 italic tabular-nums">{acc.opening}</td>
                                        <td className="px-8 py-7 text-right font-mono text-primary font-black tabular-nums">{acc.debit}</td>
                                        <td className="px-8 py-7 text-right font-mono text-error font-black tabular-nums">{acc.credit}</td>
                                        <td className="px-8 py-7 text-right font-headline text-lg font-black text-white last:rounded-r-3xl tabular-nums">
                                            {acc.closing}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-zinc-950/80 border-t-4 border-primary">
                                    <td className="px-8 py-10 rounded-bl-[48px]" colSpan="2">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#9acd32]"></div>
                                            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white">TOTALS VALIDATED NODES</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-10 text-right font-mono font-black text-stone-400">$4,289,500.00</td>
                                    <td className="px-8 py-10 text-right font-mono font-black text-primary text-lg italic">$1,095,000.00</td>
                                    <td className="px-8 py-10 text-right font-mono font-black text-primary text-lg italic">$1,095,000.00</td>
                                    <td className="px-8 py-10 text-right font-headline text-2xl font-black text-white rounded-br-[48px] tracking-tighter">
                                        $4,289,500.00
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Validation Badge */}
                <div className="bg-zinc-950 p-12 rounded-[56px] border border-outline-variant/10 shadow-3xl flex flex-col lg:flex-row items-center justify-between gap-12 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    <div className="flex items-center gap-10 relative z-10">
                        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_40px_rgba(154,205,50,0.3)] group-hover:scale-110 transition-transform duration-700">
                            <span className="material-symbols-outlined text-5xl font-black" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-headline font-black uppercase tracking-tight text-white mb-2">Partida Doble Validation</h3>
                            <p className="text-[11px] text-stone-600 font-black uppercase tracking-[0.5em] italic">Satisfied For Current Ledger Node</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-12 relative z-10">
                        <div className="text-right">
                            <div className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] mb-2">Σ Total Debits</div>
                            <div className="text-3xl font-headline font-black text-white px-8 py-4 bg-zinc-900 rounded-[28px] border border-white/5">$1,095,000.00</div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                             <span className="material-symbols-outlined text-primary text-4xl font-black animate-pulse">equalizer</span>
                             <span className="text-[9px] font-black text-primary uppercase tracking-[0.6em]">MATCH</span>
                        </div>
                        <div className="text-left">
                            <div className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] mb-2">Σ Total Credits</div>
                            <div className="text-3xl font-headline font-black text-white px-8 py-4 bg-zinc-900 rounded-[28px] border border-white/5">$1,095,000.00</div>
                        </div>
                    </div>
                </div>

                {/* Industrial Footer */}
                <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-40 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-6">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700">Titan Accounting Node-A19</div>
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-900"></div>
                        <div className="text-[10px] font-mono text-stone-800 tracking-widest font-black uppercase">Ledger ID: 899321-ALPHA</div>
                    </div>
                    <div className="flex gap-16">
                        <div className="flex flex-col items-end gap-2">
                             <span className="text-[8px] font-black uppercase text-stone-800 tracking-[0.4em]">Last Sync Node</span>
                             <span className="text-[10px] font-mono font-black text-primary/60 tracking-widest uppercase">2024-10-27 09:42:15 GMT</span>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                             <span className="text-[8px] font-black uppercase text-stone-800 tracking-[0.4em]">System Compliance</span>
                             <span className="text-[10px] font-black uppercase text-primary italic tracking-[0.2em]">ISO-9001 VALIDATED</span>
                        </div>
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
