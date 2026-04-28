import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DashboardRRHH() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">badge</span>
                    <span>RRHH <span className="text-white/60 mx-2">|</span> Dashboard de Control</span>
                </div>
            }
        >
            <Head title="Dashboard RRHH" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Industrial Human Capital Engine</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            RRHH <br/><span className="text-stone-700">CORE</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                            RIF: J-40308741-5 • MAYOR DE REPUESTO LA CIMA, C.A.
                        </p>
                    </div>
                    <div className="text-right space-y-2">
                        <div className="text-[10px] font-black text-stone-800 uppercase tracking-widest">System Integrity Status</div>
                        <div className="flex items-center gap-3 text-primary font-headline font-black text-2xl italic tracking-tighter shadow-sm">
                            <span className="material-symbols-outlined font-black animate-pulse">verified</span> OPTIMAL_OPS
                        </div>
                    </div>
                </header>

                {/* Bento Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Stats Column */}
                    <div className="lg:col-span-3 space-y-10">
                        {/* Total Workforce */}
                        <div className="bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl flex flex-col justify-between group overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mt-16 -mr-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 mb-8 italic">Total Workforce</span>
                            <div>
                                <p className="text-6xl font-headline font-black text-white italic tracking-tighter decoration-double underline decoration-primary/20">142</p>
                                <div className="mt-8 flex gap-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest">Active_Nodes</span>
                                        <span className="text-primary font-black text-lg">138</span>
                                    </div>
                                    <div className="flex flex-col gap-1 text-zinc-700">
                                        <span className="text-[8px] font-black uppercase tracking-widest">Idle_Nodes</span>
                                        <span className="font-black text-lg">4</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Payroll */}
                        <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner flex flex-col justify-between group">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-800 mb-8 italic">Masa Salarial (Mensual)</span>
                            <div>
                                <p className="text-4xl font-headline font-black text-white italic tracking-tighter">$42,850.00</p>
                                <div className="text-[9px] text-primary font-black uppercase tracking-widest flex items-center gap-2 mt-4 italic">
                                    <span className="material-symbols-outlined text-sm font-black animate-bounce">trending_up</span> +2.4% vs Prev_Period
                                </div>
                            </div>
                        </div>

                        {/* Social Benefits */}
                        <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner flex flex-col justify-between group">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-800 mb-8 italic">Pasivo Laboral Acumulado</span>
                            <div>
                                <p className="text-3xl font-headline font-black text-stone-600 italic tracking-tighter">$156,210.00</p>
                                <p className="text-[9px] text-stone-900 font-black uppercase tracking-widest mt-4">Total Accrued Benefits</p>
                            </div>
                        </div>

                        {/* Turnover */}
                        <div className="bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-error shadow-3xl group">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-error/60 mb-8 italic">Turnover Rate</span>
                            <p className="text-5xl font-headline font-black text-white italic tracking-tighter">1.8%</p>
                            <div className="w-full bg-zinc-950 h-1.5 mt-6 rounded-full overflow-hidden shadow-inner">
                                <div className="bg-error h-full shadow-[0_0_10px_#ff0000]" style={{ width: '1.8%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Central Visualization Column */}
                    <div className="lg:col-span-6 space-y-10">
                        {/* Payroll Trend */}
                        <div className="bg-zinc-900 rounded-[56px] p-12 relative overflow-hidden h-[480px] flex flex-col shadow-3xl group">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-10 pointer-events-none"></div>
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <div>
                                    <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-white italic">Payroll Cost Trend</h3>
                                    <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] mt-3">Fiscal Cycle Year-to-Date Projection</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-3xl font-black opacity-20 group-hover:opacity-100 transition-opacity">monitoring</span>
                            </div>
                            
                            {/* Chart Simulation */}
                            <div className="flex-1 flex items-end justify-between gap-4 relative z-10 border-b border-white/5 pb-2">
                                {[40, 45, 42, 55, 60, 75, 100].map((h, i) => (
                                    <div 
                                        key={i} 
                                        className={`w-full ${i === 6 ? 'bg-primary shadow-[0_0_20px_#9acd32]' : 'bg-primary/20 hover:bg-primary/40'} rounded-t-xl transition-all duration-700 cursor-help group/bar relative`}
                                        style={{ height: `${h}%` }}
                                        title={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i]}
                                    >
                                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[8px] font-black px-3 py-1.5 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-white/10 italic">
                                            {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'][i]}: ${h*2}K
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Distribution Matrices */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner">
                                <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] mb-10 block italic">Department Load Matrix</span>
                                <div className="space-y-8">
                                    {[
                                        { dept: 'Logistics', val: 45, color: 'primary' },
                                        { dept: 'Sales Force', val: 30, color: 'primary/60' },
                                        { dept: 'Admin_Ops', val: 25, color: 'stone-800' }
                                    ].map((d, i) => (
                                        <div key={i} className="space-y-3 group/item">
                                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-stone-500 group-hover/item:text-white transition-colors">
                                                <span>{d.dept}</span>
                                                <span className="font-mono">{d.val}%</span>
                                            </div>
                                            <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden shadow-inner">
                                                <div className={`h-full ${d.color.includes('primary') ? 'bg-primary' : 'bg-stone-800'} transition-all duration-1000`} style={{ width: `${d.val}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner flex flex-col items-center justify-center text-center group">
                                <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] mb-8 w-full text-left italic">Attendance Protocol Rate</span>
                                <div className="relative w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle className="text-zinc-900" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="12"></circle>
                                        <circle className="text-primary shadow-[0_0_15px_#9acd32]" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeDasharray="351.8" strokeDashoffset="17.6" strokeWidth="12" strokeLinecap="round"></circle>
                                    </svg>
                                    <span className="absolute text-4xl font-headline font-black text-white italic tracking-tighter">95%</span>
                                </div>
                                <div className="mt-8 text-[9px] font-black text-stone-800 uppercase tracking-[0.3em] italic">Absenteeism Delta: 5%</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Schedule Column */}
                    <div className="lg:col-span-3 space-y-10">
                        {/* Upcoming Events */}
                        <div className="bg-zinc-900 p-10 rounded-[48px] border border-white/5 shadow-3xl h-full relative overflow-hidden group">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                            <h3 className="font-headline font-black text-lg uppercase tracking-tighter text-white mb-10 italic border-b border-white/5 pb-6">Operations Schedule</h3>
                            
                            <div className="space-y-10 relative z-10">
                                {[
                                    { month: 'JUL', day: '12', type: 'VACATION START', name: 'Carlos Mendoza', detail: 'Warehouse Ops • 15 Days', color: 'primary' },
                                    { month: 'JUL', day: '15', type: 'BIRTHDAY NODE', name: 'Elena Rodriguez', detail: 'HR Generalist', color: 'stone-600' },
                                    { month: 'JUL', day: '20', type: 'IVSS FILING', name: 'Monthly Contribution', detail: 'STATUS: URGENT_OPS', color: 'error' }
                                ].map((event, i) => (
                                    <div key={i} className="flex gap-6 group/event hover:translate-x-2 transition-transform">
                                        <div className={`p-3 rounded-2xl flex flex-col items-center justify-center min-w-[64px] h-[64px] border border-white/5 shadow-inner ${event.color === 'primary' ? 'bg-primary/10 text-primary' : event.color === 'error' ? 'bg-error/10 text-error' : 'bg-zinc-950 text-stone-700'}`}>
                                            <span className="text-[10px] font-black uppercase tracking-widest">{event.month}</span>
                                            <span className="text-2xl font-headline font-black">{event.day}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className={`text-[10px] font-black uppercase tracking-widest ${event.color === 'error' ? 'text-error' : 'text-stone-700'}`}>{event.type}</div>
                                            <div className="text-sm font-black text-white group-hover/event:text-primary transition-colors">{event.name}</div>
                                            <div className="text-[9px] text-stone-800 font-black uppercase tracking-widest italic">{event.detail}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-20 p-8 bg-zinc-950 rounded-[32px] border border-dashed border-white/5 relative overflow-hidden group/alert">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -mt-8 -mr-8 rounded-full blur-2xl group-hover/alert:bg-primary/10 transition-all"></div>
                                <div className="flex items-center gap-3 text-stone-700 mb-4 group-hover/alert:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-lg font-black">precision_manufacturing</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] italic text-primary">Module Delta</span>
                                </div>
                                <p className="text-[10px] font-black text-stone-800 uppercase leading-relaxed mb-6">Accounting & Finance integration is currently in heavy-duty development.</p>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b]"></span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 italic">Work in Progress</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">badge</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">HR OPERATIONS LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <span>Workforce Optimization Active</span>
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
