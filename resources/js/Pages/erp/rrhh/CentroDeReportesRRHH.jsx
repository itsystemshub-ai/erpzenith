import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CentroDeReportesRRHH() {
    const performances = [
        { name: 'Elena Rodriguez', role: 'PROJECT LEAD', rating: '4.9', detail: 'Exceeded Q3 production targets by 15%. Demonstrated exceptional lead in the Forge-X integration project.', initials: 'ER', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcYX_zLz4F-DIHW5ZLEjUqYN4nGjcTEtmmOwH0_DUiakbBAy0CUGvFTaPoZZyGtOxzjzlyWX--jlhduQDi4no6mq7_Un77OIrXmNKwpcdU_BKEOzbYhFcfo0FSDMYOiDPk47P0QXv_CS4QtD-5of3womt9KzZAF6ysXeg3OlTUILC0LxCswoAxkJG32I4_16V1y1ZBPzB67zQi62CN-Ng330sX-J3JBrzEUFdYnMrwpyiVzVy9lGfqx--YA_34tRuz-Z4ybqDx7O8' },
        { name: 'Marcus Thorne', role: 'SENIOR TECHNICIAN', rating: '4.7', detail: 'Consistent performance in maintenance cycles. Instrumental in reducing downtime of the hydraulic press by 20%.', initials: 'MT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeSVfecYM00jYZTucel3zKrJLOggw7-Mc-j61TF7DzFAhKzOUa4dQb4pyG3CQdNzlUx0BJtOP5RVDFAD3oT2TTTZUFO3oWcE1kLj3elnpLPKHLMF2tatbxnSJOGdRK3S7FKoV5RrdANAi-fRYs_uSpVPoHobyY_KyWmr2YjrKagGQhoczIeG6ELGpbpTCTbPT0CAHSFKEtrYxQbNVbqDZSFYz38y3NFqFoofLLGmXa_yUZORRz1pqkWvA6UoJ-CWV8jd8nAQ2DwlM' },
        { name: 'Sarah Jenkins', role: 'LOGISTICS COORDINATOR', rating: '4.8', detail: 'Optimized supply chain routes during the regional strike. Achieved zero delay in crucial parts delivery.', initials: 'SJ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO5pGRox9jSQmMtsdPOcQymeo4pZLVpq3yvO3kwHC8a7RMvTIWvqyVAbOl9458KGaWo0QjZFFIqjWnRl7lGv_xmtfbCtCKxbOiMRtX6E7ppI0xw-yCcgAl_WAVX_q2kOD16M66-DVNYVavvVHlgcbvb6l9M5ODfhwZJFrsXuU7dZ8Rd3Xb2RzdlF_BU4rbBouW7hU2w4G4vk4r3GuDNVM0NneF0JuMgMRWlvVsgBQO5hLec7tN4vZr1Nm-PYsLxtyQtrQIee1easo' },
    ];

    const ledger = [
        { dept: 'Engineering - Heavy Duty', count: 124, ivss: '$12,450.00', inces: '$2,490.00', faov: '$1,245.00', status: 'Paid' },
        { dept: 'Logistics & Warehousing', count: 86, ivss: '$8,120.50', inces: '$1,624.10', faov: '$812.05', status: 'Paid' },
        { dept: 'Administration Headquarters', count: 42, ivss: '$9,800.00', inces: '$1,960.00', faov: '$980.00', status: 'Pending' },
        { dept: 'Quality Control (QC)', count: 18, ivss: '$2,100.00', inces: '$420.00', faov: '$210.00', status: 'Paid' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">analytics</span>
                    <span>RRHH <span className="text-white/60 mx-2">|</span> Centro de Reportes</span>
                </div>
            }
        >
            <Head title="Centro de Reportes RRHH" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Industrial Force Reporting Engine</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            REPORTING <br/><span className="text-stone-700">SUITE</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            ZENITH ERP • HR Management • Reporting Matrix V2.4
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-10 py-5 bg-primary text-black font-black text-[9px] uppercase tracking-[0.3em] rounded-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            <span className="material-symbols-outlined text-sm font-black">download</span> protocol_EXPORT_ALL
                        </button>
                    </div>
                </header>

                {/* Dashboard Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Payroll Overview */}
                    <div className="md:col-span-2 bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mt-16 -mr-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                        <div className="flex justify-between items-start mb-8 relative z-10">
                             <div>
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-2 block italic">Financial Period: OCT 2023</span>
                                <h3 className="text-2xl font-headline font-black text-white uppercase italic tracking-tighter">Payroll Distribution_Alpha</h3>
                             </div>
                             <span className="material-symbols-outlined text-primary text-4xl font-black opacity-20">payments</span>
                        </div>
                        <div className="flex items-end gap-6 mb-10 relative z-10">
                            <span className="text-6xl font-headline font-black text-white italic tracking-tighter tabular-nums decoration-double underline decoration-primary/20">$428,950</span>
                            <span className="text-primary font-black text-xs flex items-center gap-2 mb-3 italic">
                                <span className="material-symbols-outlined font-black animate-bounce text-sm">arrow_upward</span> +3.2% vs Prev
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10 relative z-10">
                             <div>
                                <p className="text-[8px] font-black text-stone-800 uppercase tracking-widest italic mb-2">Direct Labor Load</p>
                                <p className="text-xl font-black text-stone-300 italic tracking-tighter">$312,400</p>
                             </div>
                             <div>
                                <p className="text-[8px] font-black text-stone-800 uppercase tracking-widest italic mb-2">Admin_Ops Node</p>
                                <p className="text-xl font-black text-stone-300 italic tracking-tighter">$116,550</p>
                             </div>
                        </div>
                    </div>

                    {/* Compliance Bento */}
                    <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner group flex flex-col justify-between">
                         <div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 mb-10 block italic flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary font-black">verified_user</span> Compliance Integrity
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'IVSS_Protocol', status: 'VALID', color: 'primary' },
                                    { label: 'INCES_Vector', status: 'VALID', color: 'primary' },
                                    { label: 'FAOV_Matrix', status: 'RENEWAL', color: 'amber-500' }
                                ].map((c, i) => (
                                    <div key={i} className="flex justify-between items-center group/item transition-colors">
                                        <span className="text-[10px] font-black text-stone-800 uppercase tracking-widest group-hover/item:text-white">{c.label}</span>
                                        <span className={`px-3 py-1 bg-${c.color === 'primary' ? 'primary/10 text-primary' : 'amber-500/10 text-amber-500'} text-[8px] font-black rounded-lg border border-${c.color}/20 italic`}>{c.status}</span>
                                    </div>
                                ))}
                            </div>
                         </div>
                         <button className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mt-10 flex items-center gap-3 italic hover:translate-x-2 transition-transform">
                             VIEW_CERTIFICATES <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
                         </button>
                    </div>

                    {/* Turnover Metric */}
                    <div className="bg-primary p-12 rounded-[48px] shadow-3xl group flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-10"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-4 block italic relative z-10">Turnover Delta</span>
                        <h2 className="text-7xl font-headline font-black text-black italic tracking-tighter leading-none relative z-10">4.2%</h2>
                        <span className="text-[9px] font-black text-black/60 mt-4 italic relative z-10">Industry Sync: 8.5%</span>
                        <div className="w-full bg-black/10 h-1.5 mt-8 rounded-full overflow-hidden relative z-10">
                            <div className="bg-black/40 h-full shadow-[0_0_10px_rgba(0,0,0,0.2)]" style={{ width: '42%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Secondary Grid: Performance & Accruals */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left: Performance Summaries */}
                    <div className="lg:col-span-8 space-y-10">
                         <div className="flex justify-between items-end border-b border-white/5 pb-8">
                            <h2 className="text-3xl font-headline font-black text-white uppercase italic tracking-tighter">Performance Summaries_Beta</h2>
                            <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] italic mb-2">Q3 Engineering_Module High_Load</span>
                         </div>
                         
                         <div className="space-y-6">
                            {performances.map((p, i) => (
                                <div key={i} className="bg-zinc-900 p-8 rounded-[40px] border border-white/5 hover:bg-zinc-950 transition-all duration-500 group/card flex flex-col md:flex-row items-center gap-10 shadow-3xl">
                                    <div className="w-20 h-20 rounded-3xl overflow-hidden grayscale group-hover/card:grayscale-0 transition-all duration-700 border border-white/5">
                                        <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="flex-1 space-y-2 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <h4 className="font-headline font-black text-2xl uppercase tracking-tighter text-stone-300 group-hover/card:text-white transition-colors italic">{p.name}</h4>
                                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic">{p.role}</span>
                                        </div>
                                        <p className="text-[10px] font-black text-stone-700 uppercase tracking-widest leading-loose max-w-xl group-hover/card:text-stone-500 transition-colors italic">"{p.detail}"</p>
                                    </div>
                                    <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2 border-l border-white/5 pl-10">
                                        <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em] italic">Rating_Delta</p>
                                        <p className="text-4xl font-headline font-black text-primary italic tracking-tighter">{p.rating}</p>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>

                    {/* Right: Vacation Accruals */}
                    <div className="lg:col-span-4 h-full">
                        <section className="bg-zinc-950 p-12 rounded-[56px] border border-white/5 shadow-inner flex flex-col h-full relative overflow-hidden group">
                             <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                             
                             <h2 className="text-2xl font-headline font-black uppercase text-white italic tracking-tighter mb-10 border-b border-white/5 pb-8 relative z-10">Vacation Accruals_Sync</h2>
                             
                             <div className="space-y-10 relative z-10">
                                 <div>
                                     <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-4 italic">
                                         <span>Pending_Approvals</span>
                                         <span className="text-white">142 Days_Total Matrix</span>
                                     </div>
                                     <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden shadow-inner">
                                         <div className="bg-primary h-full shadow-[0_0_10px_#9acd32]" style={{ width: '66%' }}></div>
                                     </div>
                                 </div>

                                 <div className="space-y-6 overflow-y-auto max-h-[480px] pr-4 custom-scrollbar">
                                     {[
                                         { dept: 'Industrial Ops Team', detail: 'Avg. 12.5 days/node', status: 'HIGH LOAD', color: 'stone-800' },
                                         { dept: 'Design Bureau', detail: 'Avg. 18.2 days/node', status: 'AVAIL_PROTOCOL', color: 'primary' },
                                         { dept: 'Admin & HR Core', detail: 'Avg. 9.1 days/node', status: 'CRITICAL_DELTA', color: 'error' },
                                         { dept: 'Sales Division', detail: 'Avg. 15.0 days/node', status: 'AVAIL_PROTOCOL', color: 'primary' },
                                     ].map((item, i) => (
                                         <div key={i} className="flex justify-between items-center py-6 border-b border-white/5 group/row hover:translate-x-2 transition-all">
                                             <div className="space-y-1">
                                                 <p className="font-headline font-black text-sm uppercase text-stone-300 group-hover/row:text-white transition-colors">{item.dept}</p>
                                                 <p className="text-[8px] text-stone-800 font-black uppercase tracking-widest italic">{item.detail}</p>
                                             </div>
                                             <span className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-lg border ${item.color === 'primary' ? 'bg-primary/10 text-primary border-primary/20' : item.color === 'error' ? 'bg-error/10 text-error border-error/20' : 'bg-zinc-900 text-stone-800 border-white/5'}`}>
                                                 {item.status}
                                             </span>
                                         </div>
                                     ))}
                                 </div>

                                 <button className="w-full bg-zinc-950 p-6 rounded-3xl border-2 border-primary text-primary font-black uppercase text-[10px] tracking-[0.3em] hover:bg-primary hover:text-black transition-all shadow-3xl mt-auto italic">
                                     Generate Accrual Forecast_Engine
                                 </button>
                             </div>
                        </section>
                    </div>
                </div>

                {/* Compliance Ledger Table Section */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5 pointer-events-none"></div>
                    
                    <div className="p-10 border-b border-white/5 flex justify-between items-center relative z-10">
                        <h3 className="text-2xl font-headline font-black uppercase tracking-tighter text-white italic flex items-center gap-6">
                            <span className="w-4 h-4 bg-primary shadow-[0_0_10px_#9acd32]"></span>
                            Social Benefits Compliance Ledger_Module
                        </h3>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-zinc-950 border border-white/5 rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] text-stone-700 hover:text-white transition-all shadow-inner">protocol_PDF</button>
                            <button className="px-6 py-3 bg-zinc-950 border border-white/5 rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] text-stone-700 hover:text-white transition-all shadow-inner">protocol_CSV</button>
                        </div>
                    </div>

                    <div className="overflow-x-auto p-10 relative z-10">
                        <table className="w-full text-left border-separate border-spacing-y-4">
                             <thead>
                                 <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                     <th className="px-10 py-6">Department Hub</th>
                                     <th className="px-10 py-6">Node Count</th>
                                     <th className="px-10 py-6 text-right">IVSS_Contr</th>
                                     <th className="px-10 py-6 text-right">INCES (2%)</th>
                                     <th className="px-10 py-6 text-right">FAOV (1%)</th>
                                     <th className="px-10 py-6">Status Delta</th>
                                 </tr>
                             </thead>
                             <tbody className="text-xs font-black">
                                 {ledger.map((l, i) => (
                                     <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row italic">
                                         <td className="px-10 py-8 first:rounded-l-[32px] text-white uppercase tracking-wider">{l.dept}</td>
                                         <td className="px-10 py-8 text-stone-500 font-mono">{l.count} Units</td>
                                         <td className="px-10 py-8 text-right text-stone-400 font-mono tracking-widest">{l.ivss}</td>
                                         <td className="px-10 py-8 text-right text-stone-400 font-mono tracking-widest">{l.inces}</td>
                                         <td className="px-10 py-8 text-right text-stone-400 font-mono tracking-widest">{l.faov}</td>
                                         <td className="px-10 py-8 last:rounded-r-[32px]">
                                             <span className={`flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] ${l.status === 'Paid' ? 'text-primary' : 'text-amber-500'} italic underline decoration-double`}>
                                                 <span className={`w-2 h-2 rounded-full ${l.status === 'Paid' ? 'bg-primary shadow-[0_0_8px_#9acd32]' : 'bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]'}`}></span>
                                                 {l.status}
                                             </span>
                                         </td>
                                     </tr>
                                 ))}
                             </tbody>
                        </table>
                    </div>
                </section>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">analytics</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">ANALYTICS & DATA LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <span className="flex items-center gap-2 italic">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#9acd32]"></span>
                                Reporting Engine: Latency_LOW
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
                    background-size: 34px 34px;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #1c1c1c;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9acd32;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
