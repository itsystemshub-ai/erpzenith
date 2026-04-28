import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function PrestacionesYLiquidaciones() {
    const ledger = [
        { name: 'CARLOS MARTINEZ', id: 'V-18.293.XXX', salary: '$ 2,450.00', days: '180 + 12', total: '$ 16,340.50' },
        { name: 'ANA RODRIGUEZ', id: 'V-20.104.XXX', salary: '$ 1,890.00', days: '60 + 2', total: '$ 4,120.25' },
        { name: 'MARCOS PERNIA', id: 'V-15.882.XXX', salary: '$ 3,100.00', days: '320 + 24', total: '$ 38,400.00' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">account_balance</span>
                    <span>RRHH <span className="text-white/60 mx-2">|</span> Prestaciones y Liquidaciones</span>
                </div>
            }
        >
            <Head title="Prestaciones y Liquidaciones" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Social Benefits Management System</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            LEGAL <br/><span className="text-stone-700">ESCROW</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            MAYOR DE REPUESTO LA CIMA, C.A. • Cumplimiento LOTTT Art. 142
                        </p>
                    </div>
                </header>

                {/* KPI Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {[
                        { label: 'Total Accrued (Garantía)', val: '$ 428,590.00', border: 'primary' },
                        { label: 'Interests Provision', val: '$ 12,402.15', border: 'stone-800' },
                        { label: 'Active Simulations', val: '03', border: 'primary', accent: true },
                        { label: 'BCV Rate (TAM)', val: '54.2%', border: 'stone-800' }
                    ].map((kpi, i) => (
                        <div key={i} className={`bg-zinc-900 p-8 rounded-[40px] border-l-[10px] ${kpi.border === 'primary' ? 'border-primary shadow-3xl' : 'border-stone-800 shadow-inner'} group hover:scale-105 transition-transform duration-500`}>
                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-6 italic">{kpi.label}</p>
                            <h3 className={`text-2xl font-headline font-black italic tracking-tighter ${kpi.accent ? 'text-primary' : 'text-white'}`}>
                                {kpi.val}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left: Ledger List */}
                    <div className="lg:col-span-8 space-y-10">
                        <div className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-5 pointer-events-none"></div>
                            
                            <div className="p-10 border-b border-white/5 flex justify-between items-center relative z-10">
                                <h3 className="font-headline font-black text-xl uppercase tracking-tighter text-white italic">Accrued Benefits Ledger</h3>
                                <button className="p-4 bg-zinc-950 rounded-2xl border border-white/5 text-stone-700 hover:text-primary transition-all shadow-inner group/btn">
                                    <span className="material-symbols-outlined text-sm font-black group-hover/btn:rotate-90 transition-transform">filter_list</span>
                                </button>
                            </div>

                            <div className="overflow-x-auto p-10 relative z-10">
                                <table className="w-full text-left border-separate border-spacing-y-4">
                                    <thead>
                                        <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                            <th className="px-10 py-6">Personnel Node</th>
                                            <th className="px-10 py-6 text-right">Integral Salary</th>
                                            <th className="px-10 py-6 text-right">Garantía Days</th>
                                            <th className="px-10 py-6 text-right">Total Accrued</th>
                                            <th className="px-10 py-6"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-black">
                                        {ledger.map((row, i) => (
                                            <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row">
                                                <td className="px-10 py-8 first:rounded-l-[32px]">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-white font-headline text-lg uppercase tracking-tight group-hover/row:text-primary transition-colors">{row.name}</span>
                                                        <span className="text-[8px] text-stone-800 font-mono tracking-widest uppercase italic">ID: {row.id}</span>
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8 text-right text-primary font-mono tracking-widest">{row.salary}</td>
                                                <td className="px-10 py-8 text-right text-stone-400 font-headline text-lg italic tracking-tighter">{row.days}</td>
                                                <td className="px-10 py-8 text-right text-white font-headline text-2xl italic tracking-tighter tabular-nums decoration-double underline decoration-primary/20 underline-offset-8">
                                                    {row.total}
                                                </td>
                                                <td className="px-10 py-8 text-right last:rounded-r-[32px]">
                                                    <button className="p-4 bg-zinc-900 rounded-2xl text-stone-700 hover:text-white transition-all border border-white/5 shadow-inner hover:scale-110">
                                                        <span className="material-symbols-outlined text-2xl">calculate</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right: Simulation Engine */}
                    <div className="lg:col-span-4 space-y-10">
                        <section className="bg-zinc-950 rounded-[56px] border border-white/5 shadow-inner p-12 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                            
                            <div className="flex items-center gap-6 mb-12 relative z-10">
                                <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center shadow-3xl text-black">
                                    <span className="material-symbols-outlined text-3xl font-black">precision_manufacturing</span>
                                </div>
                                <div>
                                    <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-white italic leading-tight">Simulation <br/>Engine</h3>
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary italic">Liquidation protocol</span>
                                </div>
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic mb-2 block">Personnel Vector</label>
                                    <select className="w-full bg-zinc-900 border-none rounded-2xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner appearance-none">
                                        <option>MARCOS PERNIA</option>
                                        <option>CARLOS MARTINEZ</option>
                                        <option>ANA RODRIGUEZ</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic mb-2 block">Resignation_Date</label>
                                        <input className="w-full bg-zinc-900 border-none rounded-2xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner" type="date"/>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic mb-2 block">Exit_Protocol</label>
                                        <select className="w-full bg-zinc-900 border-none rounded-2xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner appearance-none">
                                            <option>Voluntary</option>
                                            <option>Justified</option>
                                            <option>Unjustified</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="p-8 bg-zinc-900 rounded-[40px] border border-white/5 shadow-inner space-y-6">
                                    {[
                                        { label: 'Antiquity (Art. 142)', val: '$ 38,400.00' },
                                        { label: 'Accrued Interests', val: '$ 2,120.10' },
                                        { label: 'Indemnity (Art. 92)', val: '$ 0.00' }
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-stone-700">
                                            <span>{row.label}</span>
                                            <span className="text-white font-mono">{row.val}</span>
                                        </div>
                                    ))}
                                    <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-primary font-black uppercase tracking-[0.4em] italic text-[10px]">Total Payable Matrix</span>
                                        <span className="text-primary font-headline text-3xl font-black italic tracking-tighter animate-pulse">$ 40,520.10</span>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6">
                                    <button className="w-full bg-primary p-6 rounded-3xl font-black uppercase text-xs tracking-widest text-black shadow-3xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4">
                                        <span className="material-symbols-outlined font-black text-lg">picture_as_pdf</span>
                                        Generate Finiquito PDF
                                    </button>
                                    <button className="w-full bg-zinc-900 p-6 rounded-3xl font-black uppercase text-[9px] tracking-[0.4em] text-stone-700 border border-white/5 hover:text-white transition-all shadow-inner italic">
                                        Save Simulation Draft_Node
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Legal & Context Footer */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-zinc-900/40 p-12 rounded-[56px] border border-white/5 shadow-inner group">
                        <div className="flex items-center gap-4 mb-8 text-primary group-hover:translate-x-2 transition-transform">
                            <span className="material-symbols-outlined text-3xl font-black">info</span>
                            <h4 className="text-xl font-headline font-black uppercase tracking-[0.1em] italic text-white">LOTTT Art. 142 Compliance</h4>
                        </div>
                        <p className="text-sm font-medium text-stone-600 leading-relaxed uppercase text-[10px] tracking-widest decoration-dotted underline decoration-white/10 underline-offset-8">
                            The "Garantía de Prestaciones" consists of 15 days of integral salary per quarter, totaling 60 days per year. Additionally, after the first year, employees accrue 2 additional days per year (up to 30 days). The system automatically compares the <span className="text-white">Accrued Account</span> vs <span className="text-white">Calculation by Time</span> at the end of the relationship, paying whichever is more favorable.
                        </p>
                    </div>

                    <div className="bg-zinc-900/40 p-12 rounded-[56px] border border-white/5 shadow-inner">
                        <h4 className="text-lg font-headline font-black uppercase tracking-widest italic text-white mb-10 border-b border-white/5 pb-6">Salario Integral Structure_Alpha</h4>
                        <div className="space-y-8">
                            {[
                                { icon: 'payments', label: 'Base Salary_Vector', detail: 'Monthly fixed amount protocol' },
                                { icon: 'beach_access', label: 'Vacation Bonus_Fract', detail: 'Annual fractional impact matrix' },
                                { icon: 'account_balance_wallet', label: 'Utilities (Profit Sharing)', detail: 'Statutory profit sharing node' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                                    <div className="w-14 h-14 bg-zinc-950 text-stone-800 flex items-center justify-center rounded-2xl border border-white/5 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-2xl font-black">{item.icon}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="font-headline font-black text-sm uppercase text-stone-300 tracking-wider group-hover:text-white transition-colors">{item.label}</div>
                                        <div className="text-[9px] text-stone-800 font-black uppercase tracking-[0.4em] italic">{item.detail}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">gavel</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">LEGAL COMPLIANCE LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <span className="flex items-center gap-2 italic">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#9acd32]"></span>
                                Compliance Verified
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
                    background-size: 30px 30px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
