import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CentroDeReportesFinancieros() {
    const ledger = [
        { name: 'Turbine Heavy Industries', id: '#INV-88219-B', status: 'Current', amount: '$124,500.00', age: '12d', initials: 'TH', color: 'primary' },
        { name: 'Aerospace Solutions Ltd', id: '#INV-90122-C', status: 'Current', amount: '$98,000.00', age: '18d', initials: 'AS', color: 'primary' },
        { name: 'Forge Manufacturing Gmbh', id: '#INV-77121-A', status: 'Critical', amount: '$442,150.00', age: '94d', initials: 'FM', color: 'error' },
        { name: 'Precision Castings Inc', id: '#INV-88331-Z', status: '30+ Days', amount: '$21,200.00', age: '42d', initials: 'PC', color: 'stone-400' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">analytics</span>
                    <span>Finanzas <span className="text-white/60 mx-2">|</span> Centro de Reportes</span>
                </div>
            }
        >
            <Head title="Centro de Reportes Financieros" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Financial Analysis Node</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            REPORT <br/><span className="text-stone-700">MATRIX</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                           ZENITH CORE REPORTING SUITE V2.4 • MAYOR DE REPUESTO LA CIMA, C.A.
                        </p>
                    </div>
                </header>

                {/* Hero Stats Bento */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="bg-zinc-900 p-10 rounded-[48px] border border-white/5 shadow-3xl flex flex-col justify-between group">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-8 italic">Current Ratio</p>
                        <div>
                            <div className="flex items-baseline gap-3">
                                <p className="text-4xl font-headline font-black text-white italic tracking-tighter">2.41</p>
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">+12% Delta</span>
                            </div>
                            <div className="mt-6 h-1 w-full bg-zinc-950 rounded-full overflow-hidden shadow-inner flex">
                                <div className="h-full bg-primary w-[75%] shadow-[0_0_10px_#9acd32]"></div>
                            </div>
                            <p className="mt-4 text-[8px] font-black text-stone-800 uppercase tracking-widest">Optimal Threshold: 2.0</p>
                        </div>
                    </div>

                    <div className="bg-zinc-900 p-10 rounded-[48px] border-l-8 border-primary shadow-3xl flex flex-col justify-between group">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-8 italic">Quick Ratio (Acid Test)</p>
                        <div>
                            <div className="flex items-baseline gap-3">
                                <p className="text-4xl font-headline font-black text-white italic tracking-tighter">1.85</p>
                                <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">+4% Delta</span>
                            </div>
                            <div className="mt-6 h-1 w-full bg-zinc-950 rounded-full overflow-hidden shadow-inner flex">
                                <div className="h-full bg-stone-300 w-[62%]"></div>
                            </div>
                            <p className="mt-4 text-[8px] font-black text-stone-800 uppercase tracking-widest font-mono">LIQUIDITY: STRONG_ID</p>
                        </div>
                    </div>

                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner flex flex-col justify-between">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-800 mb-8 italic">Operating Cash Flow</p>
                        <div>
                            <div className="flex items-baseline gap-3">
                                <p className="text-4xl font-headline font-black text-stone-500 italic tracking-tighter">$1.2M</p>
                                <span className="text-[10px] font-black text-stone-800 uppercase tracking-widest">STABLE</span>
                            </div>
                            <div className="mt-6 h-1 w-full bg-zinc-900 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full bg-stone-800 w-[90%]"></div>
                            </div>
                            <p className="mt-4 text-[8px] font-black text-stone-900 uppercase tracking-widest">Monthly Avg Analysis</p>
                        </div>
                    </div>

                    <div className="bg-zinc-900 p-10 rounded-[48px] border border-error/20 shadow-3xl flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-error/5 -mt-10 -mr-10 rounded-full blur-2xl group-hover:bg-error/10 transition-all duration-700"></div>
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-error/60 mb-8 italic">Budget Deviation</p>
                        <div>
                            <div className="flex items-center gap-4">
                                <p className="text-4xl font-headline font-black text-error italic tracking-tighter">14.2%</p>
                                <span className="material-symbols-outlined text-error font-black animate-pulse">warning</span>
                            </div>
                            <div className="mt-6 h-1 w-full bg-zinc-950 rounded-full overflow-hidden shadow-inner flex">
                                <div className="h-full bg-error w-[14%] shadow-[0_0_10px_#ff0000]"></div>
                            </div>
                            <p className="mt-4 text-[8px] font-black text-error uppercase tracking-widest italic decoration-solid underline decoration-error/30 underline-offset-4">Alert: R&D Division Delta</p>
                        </div>
                    </div>
                </section>

                {/* Analysis Matrix Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Cash Flow Graph */}
                    <div className="lg:col-span-8 bg-zinc-900 rounded-[56px] p-12 border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
                            <div>
                                <h3 className="text-2xl font-headline font-black uppercase tracking-tighter text-white italic">Cash Flow Statement</h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] mt-3">Direct vs Indirect Core Verification Method</p>
                            </div>
                            <div className="flex bg-zinc-950 p-2 rounded-2xl border border-white/5 shadow-inner">
                                <button className="px-6 py-3 text-[9px] font-black uppercase tracking-widest text-stone-700 hover:text-white transition-colors">Direct</button>
                                <button className="px-6 py-3 bg-zinc-900 text-[9px] font-black uppercase tracking-widest text-primary rounded-xl shadow-2xl">Indirect</button>
                            </div>
                        </div>

                        {/* Chart Simulation */}
                        <div className="relative h-64 w-full flex items-end gap-3 px-4 border-b border-white/5 mb-10">
                            {[60, 75, 95, 45, 80, 100, 30, 55, 85, 65, 40, 70].map((h, i) => (
                                <div 
                                    key={i} 
                                    className={`flex-1 ${i % 3 === 0 ? 'bg-primary/20' : i % 3 === 1 ? 'bg-primary/40' : 'bg-primary'} rounded-t-lg transition-all duration-700 group/bar hover:scale-x-110 shadow-2xl relative`}
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[8px] font-black px-3 py-1.5 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                                        NODE_{i+1}: ${h*5}K
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center text-[9px] font-black text-stone-800 uppercase tracking-[0.5em] italic">
                            <span>Analysis_Node: Q3 2023 Console</span>
                            <span className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                Current Forecast Active
                            </span>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
                            <div className="space-y-6">
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary italic">Operating Activities Delta</span>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-stone-400 group/item transition-colors hover:text-white">
                                        <span className="tracking-widest">Net Income Adjustment</span>
                                        <span className="text-white font-mono">+$242,500</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-stone-400 group/item transition-colors hover:text-white">
                                        <span className="tracking-widest">Depreciation / Amort</span>
                                        <span className="text-white font-mono">+$88,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 italic">Financing Activities Delta</span>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-stone-500">
                                        <span className="tracking-widest">Dividend Payments</span>
                                        <span className="text-error font-mono">-($45,000)</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-stone-500">
                                        <span className="tracking-widest">Loan Repayments</span>
                                        <span className="text-error font-mono">-($112,000)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Aging & Revenue Widgets */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="bg-zinc-950 p-12 rounded-[56px] border border-white/5 shadow-inner relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mt-16 -mr-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-1000"></div>
                             <h3 className="text-xl font-headline font-black uppercase tracking-tighter text-white mb-10 italic">AR Aging Matrix</h3>
                             <div className="space-y-8">
                                {[
                                    { label: 'Current (0-30 Days)', val: 72, color: 'primary' },
                                    { label: 'Overdue (31-60 Days)', val: 18, color: 'primary/60' },
                                    { label: 'Critical (61-90+ Days)', val: 10, color: 'error' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-stone-500">
                                            <span>{item.label}</span>
                                            <span className="text-white">{item.val}% Threshold</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden shadow-inner">
                                            <div className={`h-full bg-${item.color.includes('/') ? 'stone-600' : item.color} transition-all duration-1000`} style={{ width: `${item.val}%`, backgroundColor: item.color.includes('primary') ? '#9acd32CC' : item.color === 'error' ? '#ff0000' : '' }}></div>
                                        </div>
                                    </div>
                                ))}
                             </div>
                             <div className="mt-12 pt-8 border-t border-white/5">
                                <p className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] mb-4 italic">Total Global Outstanding Balance</p>
                                <p className="text-5xl font-headline font-black text-primary italic tracking-tighter decoration-double underline decoration-primary/20">$3,842,900</p>
                             </div>
                        </div>

                        <div className="bg-zinc-900 p-12 rounded-[56px] border border-white/5 shadow-3xl overflow-hidden relative group">
                             <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 mb-10 italic">Revenue vs Exp_Delta</h3>
                             <div className="flex items-center gap-8 mb-10">
                                 <div className="flex items-center gap-3">
                                     <span className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_10px_#9acd32]"></span>
                                     <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Revenue_Node</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <span className="w-3 h-3 bg-stone-700 rounded-sm"></span>
                                     <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Expense_Node</span>
                                 </div>
                             </div>
                             <div className="flex items-end gap-2 h-32 px-4 border-b border-white/5 group-hover:gap-3 transition-all duration-500">
                                {[40, 35, 1, 60, 55, 1, 80, 40, 1, 95, 50].map((h, i) => (
                                    <div key={i} className={`${h === 1 ? 'w-1' : 'w-2'} ${i % 3 === 0 ? 'bg-primary shadow-2xl' : i % 3 === 1 ? 'bg-stone-800' : ''} rounded-t-sm transition-all duration-700`} style={{ height: `${h}%` }}></div>
                                ))}
                             </div>
                             <button className="w-full mt-10 py-5 bg-zinc-950 text-[9px] font-black uppercase tracking-[0.3em] text-white rounded-2xl border border-white/5 hover:bg-primary hover:text-black transition-all shadow-inner scale-95 hover:scale-100">
                                View Core Breakdown Protocol
                             </button>
                        </div>
                    </div>
                </section>

                {/* Detailed Table Matrix */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="px-10 py-8 bg-zinc-950/40 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 italic">AR Aging Ledger: Operational View</h3>
                        <div className="flex items-center gap-8 bg-zinc-900 p-3 rounded-2xl border border-white/5 shadow-inner">
                            <span className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic">Sort Delta: Execution_Date</span>
                            <span className="material-symbols-outlined text-stone-800 text-lg hover:text-primary transition-colors cursor-pointer">filter_list</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto p-10">
                        <table className="w-full text-left border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                    <th className="px-10 py-6">Entity Node Protocol</th>
                                    <th className="px-10 py-6">Invoice #ID</th>
                                    <th className="px-10 py-6">Status Delta</th>
                                    <th className="px-10 py-6">Gross Amount</th>
                                    <th className="px-10 py-6 text-right">Age_Delta</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {ledger.map((l, i) => (
                                    <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row">
                                        <td className="px-10 py-8 first:rounded-l-[32px]">
                                            <div className="flex items-center gap-6">
                                                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center font-headline font-black text-primary rounded-2xl border border-white/5 shadow-inner">
                                                    {l.initials}
                                                </div>
                                                <span className="text-white font-headline text-lg uppercase tracking-tight group-hover/row:text-primary transition-colors">{l.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 font-mono text-stone-500 tracking-widest">{l.id}</td>
                                        <td className="px-10 py-8">
                                            <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border border-white/5 italic ${l.status === 'Critical' ? 'bg-error/10 text-error' : l.status === 'Current' ? 'bg-primary/10 text-primary' : 'bg-zinc-900 text-stone-700'}`}>
                                                {l.status}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 text-white font-mono tracking-widest text-lg">{l.amount}</td>
                                        <td className={`px-10 py-8 text-right font-mono tracking-widest last:rounded-r-[32px] ${l.status === 'Critical' ? 'text-error' : 'text-stone-700'}`}>{l.age}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="px-10 py-8 bg-zinc-950/40 border-t border-white/5 flex justify-end">
                        <button className="text-[9px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-4 hover:translate-x-4 transition-transform italic animate-pulse">
                            Execute Full Ledger View Protocol <span className="material-symbols-outlined">trending_flat</span>
                        </button>
                    </div>
                </section>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">terminal</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">REPORTING ANALYSIS LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                SYSTEM ONLINE_NODE
                             </div>
                             <span className="w-1 h-1 bg-stone-900 rounded-full"></span>
                             <span>Last Sync Core: 14:22:10 EST</span>
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
