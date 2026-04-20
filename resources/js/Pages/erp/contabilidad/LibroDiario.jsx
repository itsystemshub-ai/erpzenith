import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function LibroDiario() {
    const journalEntries = [
        { 
            date: '2023-10-24', 
            seat: '#GJ-8842', 
            type: 'Automatic', 
            entries: [
                { code: '1100-00', account: 'Cash & Bank', desc: 'Sales Receipt: INV-9901 / Customer: ForgeWorks Ltd', debit: '12,500.00', credit: '—' },
                { code: '4000-01', account: 'Product Sales - Domestic', desc: 'Corresponding Credit Entry', debit: '—', credit: '12,500.00', indent: true },
            ]
        },
        { 
            date: '2023-10-23', 
            seat: '#GJ-8841', 
            type: 'Manual', 
            entries: [
                { code: '6100-05', account: 'Office Maintenance', desc: 'Quarterly AC Service Adjustment - Manual Correction', debit: '850.00', credit: '—' },
                { code: '1100-00', account: 'Cash & Bank', desc: 'Corresponding Credit Entry', debit: '—', credit: '850.00', indent: true },
            ]
        },
        { 
            date: '2023-10-22', 
            seat: '#GJ-8840', 
            type: 'Automatic', 
            entries: [
                { code: '1500-00', account: 'Inventory - Raw Materials', desc: 'Purchase Order: PO-4552 / Supplier: SteelCore Ind.', debit: '45,200.00', credit: '—' },
                { code: '2100-00', account: 'Accounts Payable', desc: 'Corresponding Credit Entry', debit: '—', credit: '45,200.00', indent: true },
            ]
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">receipt_long</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Libro Diario</span>
                </div>
            }
        >
            <Head title="Libro Diario de Asientos Contables" />

            <div className="space-y-10 pb-12">
                {/* Header & Stats */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                        <span className="text-primary font-bold font-label tracking-widest text-[10px] uppercase">Transaction Ledger</span>
                        <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tighter uppercase mt-1 text-white">General Journal</h1>
                        <div className="h-1.5 w-24 bg-primary mt-6 rounded-full shadow-[0_0_15px_#9acd32]"></div>
                    </div>
                    {/* Quick Filter Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-w-[160px]">
                            <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest mb-2">Total Debits</span>
                            <span className="text-xl font-headline font-black text-white">$1,240,502.50</span>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-w-[160px]">
                            <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest mb-2">Total Credits</span>
                            <span className="text-xl font-headline font-black text-white">$1,240,502.50</span>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 flex flex-col justify-between min-w-[160px]">
                            <span className="text-[9px] font-black text-primary uppercase tracking-widest mb-2">Auto-Generated</span>
                            <span className="text-xl font-headline font-black text-white">142</span>
                        </div>
                        <div className="bg-zinc-900/80 p-6 rounded-2xl border border-white/5 flex flex-col justify-between min-w-[160px]">
                            <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest mb-2">Manual Entries</span>
                            <span className="text-xl font-headline font-black text-amber-500">18</span>
                        </div>
                    </div>
                </div>

                {/* Filter Controls Area */}
                <div className="bg-zinc-900/50 p-8 rounded-[32px] border border-outline-variant/10 backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-6 shadow-3xl">
                    <div className="md:col-span-5 relative">
                        <label className="block text-[9px] font-black text-stone-500 uppercase mb-3 tracking-[0.3em]">Search Account/Description</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-stone-600">search</span>
                            <input 
                                className="w-full bg-zinc-950/50 border-none rounded-2xl py-4 pl-12 pr-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary focus:ring-1 focus:ring-primary shadow-inner" 
                                placeholder="ENTER KEYWORDS..." 
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[9px] font-black text-stone-500 uppercase mb-3 tracking-[0.3em]">Date Range</label>
                            <input className="w-full bg-zinc-950/50 border-none rounded-2xl py-4 px-4 text-[10px] font-black uppercase tracking-widest text-stone-300 focus:ring-1 focus:ring-primary h-[52px]" type="date"/>
                        </div>
                        <div>
                            <label className="block text-[9px] font-black text-stone-500 opacity-0 mb-3 uppercase tracking-widest">To</label>
                            <input className="w-full bg-zinc-950/50 border-none rounded-2xl py-4 px-4 text-[10px] font-black uppercase tracking-widest text-stone-300 focus:ring-1 focus:ring-primary h-[52px]" type="date"/>
                        </div>
                    </div>
                    <div className="md:col-span-3 flex items-end">
                        <button className="w-full bg-primary text-black h-[52px] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
                            Apply Analysis Filter
                        </button>
                    </div>
                </div>

                {/* Journal Ledger */}
                <div className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="overflow-x-auto p-4">
                        <table className="w-full text-left border-separate border-spacing-y-2">
                            <thead>
                                <tr className="bg-zinc-950/80 text-stone-700 font-headline text-[9px] tracking-[0.4em] uppercase">
                                    <th className="px-8 py-5 font-black first:rounded-l-2xl">Date / Seat #</th>
                                    <th className="px-8 py-5 font-black text-center">Account / Ledger</th>
                                    <th className="px-8 py-5 font-black">Description & Delta Origin</th>
                                    <th className="px-8 py-5 font-black text-right">Debit</th>
                                    <th className="px-8 py-5 font-black text-right">Credit</th>
                                    <th className="px-8 py-5 font-black text-center last:rounded-r-2xl">Type</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {journalEntries.map((seat, i) => (
                                    <React.Fragment key={i}>
                                        {seat.entries.map((entry, j) => (
                                            <tr key={`${i}-${j}`} className={`bg-zinc-950/30 hover:bg-zinc-950 transition-colors group/row border-l-4 ${seat.type === 'Automatic' ? 'border-primary' : 'border-amber-500'}`}>
                                                <td className="px-8 py-6 first:rounded-l-2xl">
                                                    {j === 0 && (
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-white font-mono tracking-widest">{seat.date}</span>
                                                            <span className="text-[8px] text-stone-700 font-mono tracking-tighter uppercase">{seat.seat}</span>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className={`flex flex-col ${entry.indent ? 'pl-8' : ''}`}>
                                                        <span className="text-white font-bold tracking-tight">{entry.code}</span>
                                                        <span className="text-[9px] text-stone-700 uppercase tracking-widest">{entry.account}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <p className={`text-stone-400 group-hover/row:text-stone-200 transition-colors ${entry.indent ? 'italic' : ''}`}>{entry.desc}</p>
                                                </td>
                                                <td className={`px-8 py-6 text-right font-mono ${entry.debit !== '—' ? 'text-white' : 'text-stone-800'}`}>
                                                    {entry.debit}
                                                </td>
                                                <td className={`px-8 py-6 text-right font-mono ${entry.credit !== '—' ? 'text-white' : 'text-stone-800'}`}>
                                                    {entry.credit}
                                                </td>
                                                <td className="px-8 py-6 text-center last:rounded-r-2xl">
                                                    {j === 0 && (
                                                        <span className={`inline-block px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full border shadow-lg ${
                                                            seat.type === 'Automatic' ? 'bg-primary/20 text-primary border-primary/20' : 'bg-amber-500/20 text-amber-500 border-amber-500/20'
                                                        }`}>
                                                            {seat.type}
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Footer */}
                    <div className="bg-zinc-950/80 px-10 py-6 flex flex-col md:flex-row items-center justify-between border-t border-outline-variant/10 gap-6">
                        <div className="flex items-center gap-6">
                            <button className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-stone-700 hover:text-white transition-all border border-outline-variant/5">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-8 flex items-center justify-center bg-primary text-black rounded-lg text-[10px] font-black">1</span>
                                <span className="w-8 h-8 flex items-center justify-center text-stone-700 hover:text-white transition-colors cursor-pointer text-[10px] font-black">2</span>
                                <span className="w-8 h-8 flex items-center justify-center text-stone-700 hover:text-white transition-colors cursor-pointer text-[10px] font-black">3</span>
                            </div>
                            <button className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-stone-700 hover:text-white transition-all border border-outline-variant/5">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-stone-800">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#9acd32]"></div>
                                <span className="text-white">Active Sync</span>
                            </div>
                            <span>Showing 50 of 1,242 Forensic Records</span>
                            <button className="text-primary hover:text-white transition-all border-b border-primary/20 hover:border-primary pb-0.5">Export SECURE-CSV</button>
                        </div>
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
