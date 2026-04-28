import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ProcesamientoDeNomina() {
    const payroll = [
        { name: 'RICARDO MENDOZA', role: 'Operations Lead', id: '402231', base: '45.000,00', ot: 'OT 50%: 12.5h', bonus: '5.000,00', deductions: '-1.250,40', extra: 'IVSS (0.5%) + FAOV (0.25%)', cesta: '1.000,00', days: '22 Days Active', net: '49.749,60', initials: 'RM' },
        { name: 'ANA SÁNCHEZ', role: 'Mechanical Engineer', id: '402245', base: '62.000,00', ot: 'OT 75%: 4.0h', bonus: '8.500,00', deductions: '-1.860,00', extra: 'PF (1%) + IVSS/FAOV', cesta: '1.000,00', days: '22 Days Active', net: '69.640,00', initials: 'AS' },
        { name: 'JOSE VILLALOBOS', role: 'Technician II', id: '402289', base: '38.500,00', ot: 'OT 100%: 8.0h', bonus: '0,00', deductions: '-962,50', extra: 'Full Deductions', cesta: '850,00', days: '18 Days Active', net: '42.387,50', initials: 'JV' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">payments</span>
                    <span>RRHH <span className="text-white/60 mx-2">|</span> Cálculo de Nómina</span>
                </div>
            }
        >
            <Head title="Cálculo de Nómina" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Industrial Processing Unit</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            PAYROLL <br/><span className="text-stone-700">ENGINE</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            MAYOR DE REPUESTO LA CIMA, C.A. • Cálculo y Procesamiento V.2.4.0
                        </p>
                    </div>
                    
                    {/* Period Selector Bento */}
                    <div className="bg-zinc-900 p-2 flex items-center rounded-3xl border border-white/5 shadow-inner">
                        <div className="px-6 py-3 flex flex-col border-r border-white/5">
                            <span className="text-[8px] text-primary font-black uppercase tracking-widest italic">Period_Start</span>
                            <input className="bg-transparent border-none text-white p-0 text-xs font-black uppercase focus:ring-0" type="date" defaultValue="2023-11-01"/>
                        </div>
                        <div className="px-6 py-3 flex flex-col border-r border-white/5">
                            <span className="text-[8px] text-primary font-black uppercase tracking-widest italic">Period_End</span>
                            <input className="bg-transparent border-none text-white p-0 text-xs font-black uppercase focus:ring-0" type="date" defaultValue="2023-11-15"/>
                        </div>
                        <button className="px-6 py-3 text-stone-700 hover:text-primary transition-colors group">
                            <span className="material-symbols-outlined font-black group-hover:rotate-180 transition-transform duration-500">refresh</span>
                        </button>
                    </div>
                </header>

                {/* KPI Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {[
                        { label: 'Gross Total', val: '245.890,00', border: 'primary', unit: 'VED' },
                        { label: 'Deductions Sum', val: '12.340,50', border: 'zinc-700', unit: 'VED' },
                        { label: 'Net Payable', val: '233.549,50', border: 'primary', unit: 'VED', accent: true },
                        { label: 'Patronal Costs', val: '34.120,00', border: 'zinc-700', unit: 'VED' }
                    ].map((kpi, i) => (
                        <div key={i} className={`bg-zinc-900 p-8 rounded-[40px] border-l-[10px] ${kpi.border === 'primary' ? 'border-primary shadow-3xl' : 'border-stone-800 shadow-inner'} group`}>
                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-6 italic group-hover:text-stone-400 transition-colors">{kpi.label}</p>
                            <h3 className={`text-2xl font-headline font-black italic tracking-tighter ${kpi.accent ? 'text-primary animate-pulse' : 'text-white'}`}>
                                {kpi.val} <span className="text-[10px] text-stone-800 uppercase font-mono tracking-widest not-italic ml-2">{kpi.unit}</span>
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Payroll Table Matrix */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    
                    <div className="relative z-10 p-10 bg-zinc-950/40 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 italic text-primary">Detailed Payroll Worksheet_Alpha</h3>
                        <div className="flex gap-6">
                            <button className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-stone-700 hover:text-white transition-colors group/btn">
                                <span className="material-symbols-outlined text-sm font-black group-hover/btn:rotate-12 transition-transform">filter_alt</span> Filter_Ops
                            </button>
                            <button className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-stone-700 hover:text-white transition-colors group/btn">
                                <span className="material-symbols-outlined text-sm font-black group-hover/btn:translate-y-1 transition-transform">download</span> protocol_CSV
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 overflow-x-auto p-10">
                        <table className="w-full text-left border-separate border-spacing-y-4">
                            <thead>
                                <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                    <th className="px-10 py-6">Personnel Node</th>
                                    <th className="px-10 py-6">Wage_Basic</th>
                                    <th className="px-10 py-6">LOTTT_Loading</th>
                                    <th className="px-10 py-6">Legal Delta</th>
                                    <th className="px-10 py-6">Food_Ticket</th>
                                    <th className="px-10 py-6">Net_Disbursement</th>
                                    <th className="px-10 py-6"></th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {payroll.map((p, i) => (
                                    <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row">
                                        <td className="px-10 py-8 first:rounded-l-[32px]">
                                            <div className="flex items-center gap-6">
                                                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center font-headline font-black text-primary rounded-2xl border border-white/5 shadow-inner">
                                                    {p.initials}
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-white font-headline text-lg uppercase tracking-tight group-hover/row:text-primary transition-colors">{p.name}</span>
                                                    <span className="text-[8px] text-stone-800 font-mono tracking-widest uppercase italic">{p.role} • ID: {p.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-stone-400 font-mono tracking-widest">{p.base}</td>
                                        <td className="px-10 py-8">
                                            <div className="flex flex-col gap-2">
                                                <span className="px-3 py-1 bg-zinc-900 text-stone-700 text-[8px] font-black rounded-lg uppercase tracking-widest border border-white/5">{p.ot}</span>
                                                {p.bonus !== '0,00' && (
                                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[8px] font-black rounded-lg uppercase tracking-widest border border-primary/20 italic">Bonus: {p.bonus}</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-error font-mono tracking-widest text-sm">{p.deductions}</span>
                                                <span className="text-[8px] text-stone-800 uppercase font-black tracking-widest italic">{p.extra}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex flex-col gap-1 text-stone-400">
                                                <span className="font-mono tracking-widest">{p.cesta}</span>
                                                <span className="text-[8px] text-stone-700 font-black tracking-widest uppercase">{p.days} Active</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-primary font-headline text-2xl italic tracking-tighter tabular-nums decoration-double underline decoration-primary/20 underline-offset-8 group-hover/row:scale-110 transition-transform origin-left">
                                            {p.net}
                                        </td>
                                        <td className="px-10 py-8 text-right last:rounded-r-[32px]">
                                            <div className="flex gap-4 opacity-30 group-hover/row:opacity-100 transition-opacity">
                                                <button className="p-4 bg-zinc-900 rounded-2xl text-stone-700 hover:text-white hover:scale-110 transition-all border border-white/5 shadow-inner" title="View Full Ledger">
                                                    <span className="material-symbols-outlined text-2xl">visibility</span>
                                                </button>
                                                <button className="p-4 bg-zinc-900 rounded-2xl text-stone-700 hover:text-white hover:scale-110 transition-all border border-white/5 shadow-inner" title="Download Voucher">
                                                    <span className="material-symbols-outlined text-2xl">file_download</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Operations Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-zinc-950 p-12 rounded-[56px] border border-white/5 shadow-inner relative overflow-hidden group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <h3 className="text-xl font-headline font-black uppercase tracking-tighter text-white mb-10 italic">Accounting Matrix Summary</h3>
                        <div className="space-y-6">
                            {[
                                { label: 'Total Basic Wage_Pool', val: '145.500,00', color: 'stone-400' },
                                { label: 'Overtime_Loading (50/75/100)', val: '28.400,00', color: 'stone-400' },
                                { label: 'Legal Delta_Deductions', val: '-12.340,50', color: 'error' }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center group/row transition-all hover:bg-white/5 p-4 rounded-2xl">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 group-hover/row:text-stone-400">{row.label}</span>
                                    <span className={`font-mono text-lg font-black text-${row.color === 'error' ? 'error' : 'white'}`}>{row.val}</span>
                                </div>
                            ))}
                            <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-end">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary italic mb-4 block">Net Operations Liability</span>
                                    <p className="text-5xl font-headline font-black text-primary italic tracking-tighter decoration-double underline decoration-primary/20">233.549,50</p>
                                </div>
                                <span className="text-[9px] text-stone-800 font-mono tracking-widest italic uppercase">Sync Integrity: 100%</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <button className="flex-1 bg-primary p-12 rounded-[56px] group transition-all hover:scale-[1.02] active:scale-95 shadow-3xl text-left relative overflow-hidden">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-10"></div>
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <span className="material-symbols-outlined text-6xl text-black/10 absolute -right-4 -top-4 group-hover:rotate-12 transition-transform duration-1000">account_balance_wallet</span>
                                <h4 className="text-3xl font-headline font-black uppercase text-black italic tracking-tighter leading-none mb-6">Process & Generate <br/>Accounting Seats</h4>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60 max-w-xs">Automatic Ledger Entry Posting for Global Financial Integrity</p>
                                <div className="mt-12 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.5em] text-black border-t border-black/10 pt-8">
                                    Execute Protocol <span className="material-symbols-outlined font-black">arrow_forward</span>
                                </div>
                            </div>
                        </button>
                        
                        <div className="grid grid-cols-2 gap-10 flex-1">
                            <button className="bg-zinc-950 rounded-[40px] border border-white/5 flex flex-col items-center justify-center gap-6 group hover:bg-zinc-900 transition-all shadow-inner">
                                <span className="material-symbols-outlined text-4xl text-stone-800 group-hover:text-white transition-colors">description</span>
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 group-hover:text-stone-300">Download Receipts</span>
                            </button>
                            <button className="bg-zinc-950 rounded-[40px] border border-white/5 flex flex-col items-center justify-center gap-6 group hover:bg-zinc-900 transition-all shadow-inner">
                                <span className="material-symbols-outlined text-4xl text-stone-800 group-hover:text-white transition-colors">print</span>
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 group-hover:text-stone-300">Print Summary_Prot</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">precision_manufacturing</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">PAYROLL PROCESSING LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <span className="flex items-center gap-2 italic">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                Local System Operational
                             </span>
                             <span className="w-1 h-1 bg-stone-900 rounded-full"></span>
                             <span>Engineering Integrity Active</span>
                         </div>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 32px 32px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
