import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DashboardDeContabilidad() {
    const stats = [
        { label: 'Total Assets', value: '842,391.00', currency: 'VES', change: '+4.2%', icon: 'account_balance_wallet', color: 'text-primary' },
        { label: 'Total Liabilities', value: '312,105.50', currency: 'VES', change: '-1.8%', icon: 'payments', color: 'text-error' },
        { label: 'Net Equity', value: '530,285.50', currency: 'VES', change: 'RATIO: 1.69', icon: 'pie_chart', color: 'text-amber-500' },
    ];

    const entries = [
        { ref: 'AS-2023-0941', origin: 'SALES', desc: 'Daily Sales Batch: Retail POS 04', debit: '12,450.00', credit: '0.00', status: 'verified' },
        { ref: 'AS-2023-0940', origin: 'PURCHASE', desc: 'Inv: #X992 - Global Parts Inc.', debit: '0.00', credit: '8,200.00', status: 'verified' },
        { ref: 'AS-2023-0939', origin: 'INVENTORY', desc: 'Stock Adjustment: Core Engine Block #4', debit: '1,200.00', credit: '1,200.00', status: 'pending' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">account_balance</span>
                    <span>Finanzas <span className="text-white/60 mx-2">|</span> Dashboard de Contabilidad</span>
                </div>
            }
        >
            <Head title="Dashboard de Contabilidad" />

            <div className="space-y-12 pb-12">
                {/* Fiscal Header Section */}
                <header className="relative overflow-hidden bg-zinc-900 rounded-[48px] p-12 border-l-[12px] border-primary shadow-3xl group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    <div className="relative z-10 flex flex-col xl:flex-row justify-between items-end gap-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">RIF: J-40308741-5</span>
                                <div className="h-px w-12 bg-white/10"></div>
                                <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em]">FISCAL PERIOD: OCT 2023</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-[0.85]">Mayor de Repuestos <br/> <span className="text-stone-700">La Cima, C.A.</span></h1>
                            <p className="text-stone-500 text-sm font-medium max-w-2xl leading-relaxed">
                                Ledger balance synchronization confirmed across all industrial nodes. 
                                High-precision distribution and accounting standards verified by SENIAT.
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <div className="bg-zinc-950 p-8 rounded-[32px] border border-outline-variant/5 shadow-inner flex flex-col items-center min-w-[160px] group-hover:scale-105 transition-transform text-right">
                                <span className="text-[9px] text-stone-700 font-black uppercase tracking-[0.4em] mb-2">Exchange Rate</span>
                                <span className="text-2xl font-headline font-black text-primary tracking-tighter">34.82 <span className="text-[10px] text-stone-600">VES/USD</span></span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Financial Stats Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group hover:border-primary/20 transition-all">
                            <div className="relative z-10 space-y-6">
                                <span className="text-[9px] text-stone-700 font-black uppercase tracking-[0.4em]">{stat.label}</span>
                                <div className="space-y-1">
                                    <h3 className="text-4xl font-headline font-black text-white tracking-tighter">
                                        {stat.value} <span className="text-xs text-stone-600 ml-1">{stat.currency}</span>
                                    </h3>
                                    <p className={`text-[10px] font-black uppercase tracking-widest ${stat.color}`}>
                                        {stat.change}
                                    </p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[140px] opacity-[0.03] group-hover:opacity-10 transition-all group-hover:scale-110 pointer-events-none text-primary">
                                {stat.icon}
                            </span>
                        </div>
                    ))}
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Recent Ledger Entries */}
                    <div className="lg:col-span-8 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                        <div className="px-10 py-8 border-b border-outline-variant/5 flex justify-between items-center bg-zinc-950/30">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-stone-500">Recent Journal Entries</h3>
                            <Link href="#" className="text-[10px] font-black text-primary uppercase tracking-[0.2em] border-b border-primary/20 hover:border-primary pb-1 transition-all">View Full Ledger</Link>
                        </div>
                        <div className="overflow-x-auto p-2">
                            <table className="w-full text-left border-separate border-spacing-y-2">
                                <thead>
                                    <tr className="text-stone-700 font-headline text-[9px] tracking-[0.4em] uppercase">
                                        <th className="px-8 py-4 font-black">Ref #</th>
                                        <th className="px-8 py-4 font-black">Origin</th>
                                        <th className="px-8 py-4 font-black text-center">Debit</th>
                                        <th className="px-8 py-4 font-black text-center">Credit</th>
                                        <th className="px-8 py-4 font-black text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs font-black">
                                    {entries.map((entry, i) => (
                                        <tr key={i} className="bg-zinc-950/30 hover:bg-zinc-950 transition-colors group/row rounded-2xl overflow-hidden">
                                            <td className="px-8 py-6 first:rounded-l-2xl">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-white font-mono tracking-widest">{entry.ref}</span>
                                                    <span className="text-[8px] text-stone-700 uppercase">{entry.desc}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase border border-white/5 shadow-xl ${
                                                    entry.origin === 'SALES' ? 'bg-primary/20 text-primary' : 
                                                    entry.origin === 'PURCHASE' ? 'bg-zinc-800 text-stone-400' : 'bg-amber-500/20 text-amber-500'
                                                }`}>
                                                    {entry.origin}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-center text-white">{entry.debit}</td>
                                            <td className="px-8 py-6 text-center text-stone-500">{entry.credit}</td>
                                            <td className="px-8 py-6 text-right last:rounded-r-2xl">
                                                <span className={`material-symbols-outlined text-xl ${entry.status === 'verified' ? 'text-primary' : 'text-stone-700'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                                    {entry.status === 'verified' ? 'verified' : 'pending'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Fiscal Actions & Compliance */}
                    <div className="lg:col-span-4 space-y-10">
                        {/* Compliance Card */}
                        <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                           <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                           <div className="relative z-10 flex flex-col h-full justify-between">
                               <div className="space-y-8">
                                   <div className="flex justify-between items-start">
                                       <h3 className="text-lg font-headline font-black text-white uppercase tracking-tight flex items-center gap-4">
                                           <span className="w-8 h-1 bg-primary rounded-full shadow-[0_0_15px_#9acd32]"></span>
                                           SENIAT Status
                                       </h3>
                                       <span className="bg-primary/20 text-primary text-[8px] font-black px-3 py-1 rounded-full uppercase border border-primary/20 shadow-lg">LXV-VALID</span>
                                   </div>
                                   <div className="space-y-6">
                                       <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
                                           <span>IVA Retention</span>
                                           <span className="text-white">SYNCHRONIZED</span>
                                       </div>
                                       <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
                                           <span>ISLR Advance</span>
                                           <span className="text-white">PAID 15/10</span>
                                       </div>
                                   </div>
                               </div>
                               <button className="w-full mt-10 bg-primary py-5 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] text-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                   GENERATE FISCAL REPORT
                               </button>
                           </div>
                        </div>

                        {/* Period Closure */}
                        <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl group">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-stone-500 mb-8 lowercase group-hover:text-amber-500 transition-colors uppercase">Period Oct '23 Closure</h3>
                            <div className="space-y-6">
                                <div className="relative pt-1">
                                    <div className="flex mb-4 items-center justify-between">
                                        <span className="text-[10px] font-black inline-block py-1 px-3 uppercase rounded-full text-amber-500 bg-amber-500/10 border border-amber-500/20">78% Complete</span>
                                        <span className="text-xs font-black text-white">04 DAYS LEFT</span>
                                    </div>
                                    <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-zinc-950 p-1 shadow-inner">
                                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-zinc-950 rounded-2xl border border-white/5 flex flex-col items-center">
                                        <span className="text-[8px] text-stone-700 font-black uppercase mb-1">Payroll</span>
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                    </div>
                                    <div className="p-4 bg-zinc-950 rounded-2xl border border-white/5 flex flex-col items-center">
                                        <span className="text-[8px] text-stone-700 font-black uppercase mb-1">Reconciliation</span>
                                        <span className="material-symbols-outlined text-amber-500 text-lg">pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industrial Footer Watermark */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none">ZENITH FORGE</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Heavy-Duty Accounting Node</span>
                    </div>
                    <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700">
                        <div className="flex flex-col gap-2 text-right">
                            <span className="text-stone-900">SYSTEM CORE</span>
                            <span className="text-stone-500 font-mono tracking-widest text-primary">FORGE-CONT-99</span>
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
