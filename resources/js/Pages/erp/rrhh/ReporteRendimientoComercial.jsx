import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ReporteRendimientoComercial() {
    const summary = [
        { label: 'Revenue Anual Total', value: '$4,829,102.50', trend: '+12.4% vs LY', color: 'primary' },
        { label: 'Promedio Cuota', value: '94.2%', trend: '-2.1% Target', color: 'amber-500' },
        { label: 'Clientes Activos', value: '1,204', trend: '+45 Nuevos', color: 'primary' },
        { label: 'Comisiones Devengadas', value: '$241,455', trend: 'Provisionado Oct-Dic', color: 'primary' },
    ];

    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const actualData = [32, 36, 40, 48, 28, 52, 58, 46, 42, 50, 38, 60];
    const forecastData = [40, 44, 48, 52, 40, 56, 60, 52, 48, 56, 44, 64];

    const sellers = [
        { name: 'Valentina Rodriguez', initials: 'VR', sales: '$1,240,500.00', quota: 115, client: 'Industrial Sol. SA', commission: '$62,025', color: 'primary' },
        { name: 'Marcos Delgado', initials: 'MD', sales: '$985,200.00', quota: 92, client: 'Petro-Titan Corp', commission: '$49,260', color: 'amber-500' },
        { name: 'Ana Castellanos', initials: 'AC', sales: '$820,000.00', quota: 88, client: 'Logistics Group LP', commission: '$41,000', color: 'primary' },
        { name: 'Jorge Rivas', initials: 'JR', sales: '$755,000.00', quota: 102, client: 'Constructora Bolivar', commission: '$37,750', color: 'primary' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">trending_up</span>
                    <span>RRHH <span className="text-white/60 mx-2">|</span> Rendimiento Comercial</span>
                </div>
            }
        >
            <Head title="Reporte de Rendimiento Comercial" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Commercial Integrity Engine</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            PERFORMANCE <br/><span className="text-stone-700">MATRIX</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6 italic underline decoration-primary/20 decoration-double">
                            ZENITH ERP • Commercial Division • Annual Revenue Analytics FY 2023
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-10 py-5 bg-zinc-900 border border-white/5 text-stone-300 font-black text-[9px] uppercase tracking-[0.3em] rounded-2xl flex items-center gap-4 hover:bg-zinc-950 transition-all shadow-inner">
                            <span className="material-symbols-outlined text-sm font-black">file_download</span> SYNC_PDF_EXPORT
                        </button>
                        <button className="px-10 py-5 bg-primary text-black font-black text-[9px] uppercase tracking-[0.3em] rounded-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            <span className="material-symbols-outlined text-sm font-black">calendar_month</span> FY 2023 PROTOCOL
                        </button>
                    </div>
                </header>

                {/* Analytical Bento Grid: KPI Summaries */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {summary.map((s, i) => (
                        <div key={i} className={`bg-zinc-900 p-10 rounded-[48px] border-b-[8px] border-${s.color} shadow-3xl group flex flex-col justify-between relative overflow-hidden h-[240px]`}>
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-${s.color}/5 -mt-12 -mr-12 rounded-full blur-2xl group-hover:bg-${s.color}/10 transition-all duration-700`}></div>
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-4 block italic relative z-10">{s.label}</span>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-headline font-black text-white italic tracking-tighter mb-4 tabular-nums">{s.value}</h2>
                                <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest italic ${s.color === 'primary' ? 'text-primary' : 'text-amber-500'}`}>
                                    <span className="material-symbols-outlined text-sm font-black italic">{s.trend.includes('+') ? 'trending_up' : 'priority_high'}</span>
                                    {s.trend}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Monthly Trend Chart */}
                    <div className="lg:col-span-8 bg-zinc-900 p-12 rounded-[56px] border border-white/5 shadow-3xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="flex justify-between items-center mb-16 relative z-10">
                            <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-white italic">Monthly Sales Delta_Sync</h3>
                            <div className="flex gap-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-primary shadow-[0_0_8px_#9acd32]"></div>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic">Actual Vector</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-zinc-800 shadow-inner"></div>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic">Forecast_Node</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="h-[300px] flex items-end justify-between gap-4 px-4 relative z-10">
                            {months.map((m, i) => (
                                <div key={i} className="group/bar relative flex-1 flex flex-col items-center h-full justify-end">
                                    {/* Forecast Column */}
                                    <div 
                                        className="w-full bg-zinc-800/40 rounded-t-xl transition-all duration-700 group-hover/bar:bg-zinc-800" 
                                        style={{ height: `${forecastData[i]}%` }}
                                    ></div>
                                    {/* Actual Column */}
                                    <div 
                                        className="w-full bg-primary rounded-t-xl absolute bottom-0 shadow-[0_0_15px_rgba(154,205,50,0.1)] group-hover/bar:bg-[#bef456] transition-all duration-700 delay-75" 
                                        style={{ height: `${actualData[i]}%` }}
                                    ></div>
                                    <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest absolute -bottom-8 group-hover/bar:text-primary transition-colors">{m}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Distribution Pie/Ring Chart */}
                    <div className="lg:col-span-4 bg-zinc-950 p-12 rounded-[56px] border border-white/5 shadow-inner group flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-white italic mb-10 relative z-10 underline decoration-primary/10 decoration-double pb-4">Distribution_Delta</h3>
                        
                        <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                            <div className="w-56 h-56 rounded-full border-[18px] border-zinc-900 flex items-center justify-center relative shadow-3xl">
                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                    <circle cx="112" cy="112" r="94" fill="none" stroke="#9acd32" strokeWidth="18" strokeDasharray="590" strokeDashoffset="247" className="opacity-80 group-hover:stroke-[#bef456] transition-all duration-1000" />
                                    <circle cx="112" cy="112" r="94" fill="none" stroke="#f59e0b" strokeWidth="18" strokeDasharray="590" strokeDashoffset="424" className="opacity-80 group-hover:opacity-100 transition-all duration-1000 delay-200" strokeDashoffset="247" />
                                </svg>
                                <div className="text-center group-hover:scale-110 transition-transform duration-700">
                                    <span className="block text-4xl font-headline font-black text-white italic tracking-tighter tabular-nums underline decoration-primary/20">100%</span>
                                    <span className="text-[8px] font-black uppercase text-stone-800 tracking-[0.4em] italic block mt-2">Quota Reach</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 space-y-6 relative z-10 border-t border-white/5 pt-10">
                             {[
                                 { name: 'V. Rodriguez', val: '42%', color: 'primary' },
                                 { name: 'M. Delgado', val: '28%', color: 'amber-500' },
                                 { name: 'Others Cluster', val: '30%', color: 'stone-800' }
                             ].map((d, i) => (
                                 <div key={i} className="flex justify-between items-center group/row">
                                     <div className="flex items-center gap-4">
                                         <div className={`w-2.5 h-2.5 bg-${d.color} shadow-[0_0_8px_${d.color === 'primary' ? '#9acd32' : d.color === 'amber-500' ? '#f59e0b' : '#1c1c1c'}]`}></div>
                                         <span className="text-[10px] font-black text-stone-300 uppercase tracking-widest italic group-hover/row:text-white transition-colors">{d.name}</span>
                                     </div>
                                     <span className="text-[10px] font-black text-white italic tracking-tighter tabular-nums">{d.val}</span>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>

                {/* Detailed Performance Table */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5 pointer-events-none"></div>
                    
                    <div className="p-12 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                        <div className="space-y-4">
                             <h3 className="text-3xl font-headline font-black uppercase tracking-tighter text-white italic flex items-center gap-6">
                                <span className="w-5 h-5 bg-primary shadow-[0_0_12px_#9acd32]"></span>
                                Performance Breakdown_Module
                             </h3>
                             <p className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] italic mb-2">INTEGRITY AUDIT: TOTAL 12 SELLERS REGISTERED</p>
                        </div>
                        <div className="flex gap-4">
                             <div className="relative">
                                 <input className="bg-zinc-950 border border-white/5 rounded-2xl pl-12 pr-6 py-4 text-[9px] font-black uppercase tracking-widest text-stone-300 focus:ring-2 focus:ring-primary/20 w-80 shadow-inner" placeholder="SEARCH SELL_NODE..."/>
                                 <span className="material-symbols-outlined absolute left-4 top-4 text-primary text-lg font-black opacity-40">search</span>
                             </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto p-12 relative z-10">
                        <table className="w-full text-left border-separate border-spacing-y-4">
                             <thead>
                                 <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                     <th className="px-10 py-6">Personnel Node</th>
                                     <th className="px-10 py-6 text-right">Revenue_Vector (USD)</th>
                                     <th className="px-10 py-6">Quota Achievement_Delta</th>
                                     <th className="px-10 py-6">Principal Anchor</th>
                                     <th className="px-10 py-6 text-right">Commission_Yield</th>
                                 </tr>
                             </thead>
                             <tbody className="text-xs font-black">
                                 {sellers.map((s, i) => (
                                     <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row italic">
                                         <td className="px-10 py-8 first:rounded-l-[32px] flex items-center gap-6">
                                             <div className={`w-12 h-12 bg-${s.color}/10 border border-${s.color}/20 flex items-center justify-center text-${s.color} font-headline font-black text-sm rounded-xl italic group-hover/row:scale-110 transition-transform duration-500`}>
                                                 {s.initials}
                                             </div>
                                             <span className="text-white uppercase tracking-wider group-hover/row:text-primary transition-colors">{s.name}</span>
                                         </td>
                                         <td className="px-10 py-8 text-right text-stone-400 font-mono tracking-widest tabular-nums">{s.sales}</td>
                                         <td className="px-10 py-8">
                                             <div className="flex items-center gap-6">
                                                 <div className="flex-1 h-2 bg-zinc-900 rounded-full overflow-hidden shadow-inner w-32 border border-white/5">
                                                     <div className={`h-full bg-${s.color} shadow-[0_0_10px_${s.color === 'primary' ? '#9acd32' : '#f59e0b'}]`} style={{ width: `${Math.min(s.quota, 100)}%` }}></div>
                                                 </div>
                                                 <span className={`text-[10px] tabular-nums font-black ${s.quota >= 100 ? 'text-primary animate-pulse' : 'text-amber-500'} italic underline`}>{s.quota}%</span>
                                             </div>
                                         </td>
                                         <td className="px-10 py-8 text-stone-500 uppercase tracking-widest">{s.client}</td>
                                         <td className="px-10 py-8 last:rounded-r-[32px] text-right">
                                             <span className="text-primary font-headline text-lg italic tracking-tighter tabular-nums decoration-double underline decoration-primary/10">{s.commission}</span>
                                         </td>
                                     </tr>
                                 ))}
                             </tbody>
                        </table>
                    </div>
                </section>

                {/* Industrial Metadata & Notice */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-8 bg-zinc-900 rounded-[48px] overflow-hidden grayscale contrast-125 opacity-30 border border-white/5 h-48 relative shadow-3xl">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Bxinnokvtt5oYa7onK8lfHSpcRNqvQdRpj-unX1jcfUPI3EvFJvai8GhN7tt_oNwYnwQwTDd9kuBoc2EhJdx7QQL2QFOhFiYwvoIDKIIIFFxIXXix3ZdDjGTEbRaF158gIpDubtMPGzBohm178iSzK81dHRpkL_LKLRVVcR2fYo5N4THgtEViAlbyZ89S91IezwWJo4B0Op8mtysFB6Ar92yuNGapnvXrfVqEzNAsUMH8coYZY4IudHdXPt-gFvbTK5g2NHhPNo" 
                              alt="Background Industrial" 
                              className="w-full h-full object-cover"/>
                         <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                    </div>
                    <div className="md:col-span-4 bg-zinc-950 p-10 rounded-[48px] border-l-[12px] border-amber-500 shadow-inner flex flex-col justify-center">
                         <div className="flex items-center gap-4 text-amber-500 mb-6 italic animate-pulse">
                             <span className="material-symbols-outlined font-black">warning</span>
                             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Protocol_Notice: Year_End Review</span>
                         </div>
                         <p className="text-[10px] font-black text-stone-800 uppercase tracking-[0.2em] leading-relaxed italic">
                             Sales commissions are currently in <span className="text-stone-300">"Pending_Audit"</span> status for Q4. Final adjustments based on credit note reconciliations will be applied by January 15th integrity window.
                         </p>
                    </div>
                </div>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black italic">trending_up</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">COMMERCIAL PERFORMANCE LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <span className="flex items-center gap-2 italic">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#9acd32]"></span>
                                Data Stream: SYNCHRONIZED
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
                    background-size: 36px 36px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
