import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DashboardFinanciero() {
    const recentActivity = [
        { ref: 'INV-2024-089', account: 'Vendor: Bosch Heavy Duty', status: 'Pending', statusColor: 'amber', amount: '-$12,450.00', time: '2 hours ago' },
        { ref: 'REC-2024-412', account: 'Client: Constructora S&M', status: 'Received', statusColor: 'primary', amount: '+$4,200.00', time: '5 hours ago' },
        { ref: 'TAX-VAT-JUL', account: 'SENIAT Venezuela', status: 'Processing', statusColor: 'stone', amount: '-$8,120.50', time: 'Yesterday' },
        { ref: 'SAL-WEEK-32', account: 'Payroll Disbursement', status: 'Completed', statusColor: 'primary', amount: '-$22,300.00', time: 'Yesterday' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">payments</span>
                    <span>Finanzas <span className="text-white/60 mx-2">|</span> Dashboard Ejecutivo</span>
                </div>
            }
        >
            <Head title="Dashboard Financiero" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Consolidated Finance Engine</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            OPERATIONS <br/><span className="text-stone-700">CONSOLE</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            RIF: J-40308741-5 • Mayor de Repuesto La Cima
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                        <div className="flex items-center gap-3 bg-zinc-950 px-6 py-3 rounded-2xl border border-white/5 shadow-inner">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#9acd32]"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Operational_LIVE</span>
                        </div>
                    </div>
                </header>

                {/* KPI Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-primary opacity-5" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                        <h3 className="text-stone-700 font-black uppercase text-[9px] tracking-[0.4em] mb-4">Liquidez Corriente</h3>
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-headline font-black text-white italic tracking-tighter">2.45</span>
                            <span className="text-primary text-[10px] font-black uppercase tracking-widest">+12% vs LY</span>
                        </div>
                        <div className="mt-8 h-1.5 bg-zinc-950 w-full rounded-full overflow-hidden shadow-inner">
                            <div className="h-full bg-primary w-[75%] shadow-[0_0_15px_#9acd32]"></div>
                        </div>
                        <p className="text-stone-800 text-[8px] mt-4 font-black uppercase tracking-[0.2em]">Optimal Range: 1.5 - 3.0</p>
                    </div>

                    <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-amber-500 opacity-5" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
                        <h3 className="text-stone-700 font-black uppercase text-[9px] tracking-[0.4em] mb-4">Prueba Ácida</h3>
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-headline font-black text-white italic tracking-tighter">1.12</span>
                            <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest">-2% vs LM</span>
                        </div>
                        <div className="mt-8 h-1.5 bg-zinc-950 w-full rounded-full overflow-hidden shadow-inner">
                            <div className="h-full bg-amber-500 w-[60%] shadow-[0_0_15px_#f59e0b]"></div>
                        </div>
                        <p className="text-stone-800 text-[8px] mt-4 font-black uppercase tracking-[0.2em]">Critical Floor: 1.0</p>
                    </div>

                    <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-primary opacity-5" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                        <h3 className="text-stone-700 font-black uppercase text-[9px] tracking-[0.4em] mb-4">Margen Neto</h3>
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-headline font-black text-white italic tracking-tighter">18.4%</span>
                            <span className="text-primary text-[10px] font-black uppercase tracking-widest">+3.5%</span>
                        </div>
                        <div className="mt-8 h-1.5 bg-zinc-950 w-full rounded-full overflow-hidden shadow-inner">
                            <div className="h-full bg-primary w-[85%] shadow-[0_0_15px_#9acd32]"></div>
                        </div>
                        <p className="text-stone-800 text-[8px] mt-4 font-black uppercase tracking-[0.2em]">Efficiency Benchmark: 15%</p>
                    </div>

                    <div className="bg-zinc-950 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl relative overflow-hidden group">
                        <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-primary opacity-10" style={{ fontVariationSettings: "'FILL' 1" }}>show_chart</span>
                        <h3 className="text-stone-800 font-black uppercase text-[9px] tracking-[0.4em] mb-4">ROE Calculation</h3>
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-headline font-black text-primary italic tracking-tighter">24.2%</span>
                            <span className="text-primary/40 text-[10px] font-black uppercase tracking-widest">Stable</span>
                        </div>
                        <div className="mt-8 h-1.5 bg-zinc-900 w-full rounded-full overflow-hidden shadow-inner">
                            <div className="h-full bg-primary w-[90%] shadow-[0_0_15px_#9acd32]"></div>
                        </div>
                        <p className="text-stone-900 text-[8px] mt-4 font-black uppercase tracking-[0.2em]">Equity Yield: Peak Performance</p>
                    </div>
                </section>

                {/* Charts & Alerts Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Revenue vs Expenses Visualization */}
                    <div className="lg:col-span-8 bg-zinc-900 rounded-[56px] p-12 border border-outline-variant/10 shadow-3xl relative group">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
                            <div>
                                <h4 className="text-2xl font-headline font-black uppercase tracking-tight text-white italic">Evolución Finanzas</h4>
                                <p className="text-stone-700 text-[10px] uppercase font-black tracking-[0.4em] mt-2">Jan - Jun 2024 Performance Index</p>
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-3.5 h-3.5 bg-primary shadow-lg shadow-primary/20 rounded-sm"></div>
                                    <span className="text-[9px] font-black uppercase text-stone-600 tracking-widest">Ingresos Delta</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3.5 h-3.5 bg-stone-800 rounded-sm"></div>
                                    <span className="text-[9px] font-black uppercase text-stone-600 tracking-widest">Gastos Oper.</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Interactive Bar Matrix */}
                        <div className="h-80 flex items-end justify-between gap-6 px-4">
                            {[60, 65, 50, 70, 55, 60].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col justify-end items-center gap-4 group/month">
                                    <div className="w-full h-full flex justify-center items-end gap-2 relative">
                                        <div className="w-1/2 bg-stone-950 h-[40%] group-hover/month:bg-stone-800 transition-all rounded-t-lg"></div>
                                        <div className="w-1/2 bg-zinc-800 h-[80%] group-hover/month:bg-primary transition-all rounded-t-lg relative group/bar shadow-2xl">
                                             <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-3 py-1.5 rounded-lg font-black opacity-0 group-hover/bar:opacity-100 transition-opacity z-10 whitespace-nowrap">$4.2M</div>
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-black text-stone-800 tracking-widest uppercase italic">Node_{i+1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Financial Alerts */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="bg-zinc-950 p-12 rounded-[56px] border-l-[12px] border-amber-500 shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 -mt-16 -mr-16 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all duration-700"></div>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="material-symbols-outlined text-amber-500 text-3xl font-black">warning</span>
                                <h4 className="text-xl font-headline font-black uppercase tracking-tight text-white">Alertas Críticas</h4>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5 flex items-start gap-6 hover:border-error/30 transition-all group/item shadow-inner">
                                    <div className="p-3 bg-error/10 text-error rounded-2xl group-hover/item:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl font-black">payments</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-white tracking-widest">Saldo De Caja Bajo</p>
                                        <p className="text-[9px] text-stone-800 font-black uppercase tracking-widest mt-1 italic">Under Threshold 12%</p>
                                        <button className="mt-4 text-[9px] font-black text-primary uppercase tracking-[0.2em] group-hover/item:translate-x-2 transition-transform inline-flex items-center gap-2">
                                            Execute Transfer <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5 flex items-start gap-6 hover:border-amber-500/30 transition-all group/item shadow-inner">
                                    <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl group-hover/item:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl font-black">event_busy</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-white tracking-widest">Vencimientos Ledger</p>
                                        <p className="text-[9px] text-stone-800 font-black uppercase tracking-widest mt-1 italic">8 Invoices due 48h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Efficiency Widget */}
                        <div className="bg-zinc-900 p-10 rounded-[56px] border border-outline-variant/10 shadow-3xl text-center">
                            <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.5em] block mb-8 italic">Operating Efficiency</span>
                            <div className="text-6xl font-headline font-black text-white italic tracking-tighter mb-4">94.8<span className="text-primary">%</span></div>
                            <p className="text-[10px] text-stone-500 font-black uppercase tracking-widest">Zenith Core Optimization Level</p>
                        </div>
                    </div>
                </div>

                {/* Lower Section: Composition & Recent activity */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Asset Composition Matrix */}
                    <div className="lg:col-span-4 bg-zinc-900 p-12 rounded-[56px] border border-outline-variant/10 shadow-3xl flex flex-col items-center">
                        <h4 className="w-full text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 mb-12 italic">Composición Activos</h4>
                        <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
                            {/* Circular Matrix Graphic */}
                            <svg className="w-full h-full -rotate-90 select-none" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#09090b" strokeWidth="10" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#9acd32" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="127" className="shadow-[0_0_20px_#9acd32] opacity-80" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#f59e0b" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="240" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-5xl font-headline font-black text-white tracking-tighter italic">$2.8M</span>
                                <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em]">Total Nodes</span>
                            </div>
                        </div>
                        <div className="w-full space-y-6">
                            {[
                                { label: 'Inventory Assets', value: '55%', color: 'bg-primary' },
                                { label: 'Accounts Receivable', value: '25%', color: 'bg-amber-500' },
                                { label: 'Cash Equivalents', value: '20%', color: 'bg-zinc-800' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group/comp cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-3.5 h-3.5 ${item.color} rounded-full group-hover/comp:scale-150 transition-transform`}></div>
                                        <span className="text-[10px] font-black uppercase text-stone-600 tracking-widest group-hover/comp:text-white transition-colors">{item.label}</span>
                                    </div>
                                    <span className="text-xs font-black text-white italic">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Ledger Activity Table */}
                    <div className="lg:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                        <div className="p-10 bg-zinc-950/40 border-b border-white/5 flex items-center justify-between">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 italic">Recent Ledger Activity</h4>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-stone-800 hover:text-primary cursor-pointer transition-colors p-3 bg-zinc-900 rounded-2xl">filter_list</span>
                                <span className="material-symbols-outlined text-stone-800 hover:text-primary cursor-pointer transition-colors p-3 bg-zinc-900 rounded-2xl">sync_alt</span>
                            </div>
                        </div>
                        <div className="overflow-x-auto p-6">
                            <table className="w-full text-left border-separate border-spacing-y-3">
                                <thead>
                                    <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                        <th className="px-8 py-5">Reference</th>
                                        <th className="px-8 py-5">Core Account Node</th>
                                        <th className="px-8 py-5">Status</th>
                                        <th className="px-8 py-5 text-right">Monto Delta</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs font-black">
                                    {recentActivity.map((act, i) => (
                                        <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row">
                                            <td className="px-8 py-6 first:rounded-l-3xl">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-white font-mono tracking-widest uppercase">{act.ref}</span>
                                                    <span className="text-[8px] text-stone-800 uppercase font-black tracking-widest italic">{act.time}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-stone-500 uppercase tracking-tight group-hover/row:text-primary transition-colors italic">{act.account}</span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/5 shadow-inner ${
                                                    act.statusColor === 'primary' ? 'bg-primary/10 text-primary' :
                                                    act.statusColor === 'amber' ? 'bg-amber-500/10 text-amber-500' : 'bg-stone-500/10 text-stone-500'
                                                }`}>
                                                    {act.status}
                                                </span>
                                            </td>
                                            <td className={`px-8 py-6 text-right font-headline text-lg font-black italic tracking-tighter last:rounded-r-3xl tabular-nums ${
                                                act.amount.startsWith('+') ? 'text-primary' : 'text-white'
                                            }`}>
                                                {act.amount}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-8 bg-zinc-950/40 text-center border-t border-white/5">
                            <button className="text-[9px] font-black uppercase tracking-[0.5em] text-stone-800 hover:text-primary transition-all group flex items-center justify-center gap-4 mx-auto">
                                View Universal Ledger Console
                                <span className="material-symbols-outlined text-xs group-hover:translate-x-2 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">precision_manufacturing</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">Industrial Financial Protocol Layer</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase">
                             <span>Node ID: FIN-8122-ALPHA</span>
                             <span className="w-1 h-1 bg-stone-900 rounded-full"></span>
                             <span>Encrypted AES-256 Validated</span>
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
