import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function PortalDelEmpleado() {
    const receipts = [
        { period: 'QUINCENA 2 - OCTUBRE 2023', date: '30/10/2023', amount: '$1.450,22' },
        { period: 'QUINCENA 1 - OCTUBRE 2023', date: '15/10/2023', amount: '$1.450,22' },
        { period: 'QUINCENA 2 - SEPTIEMBRE 2023', date: '30/09/2023', amount: '$1.485,50' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">badge</span>
                    <span>RRHH <span className="text-white/60 mx-2">|</span> Portal del Empleado</span>
                </div>
            }
        >
            <Head title="Portal del Empleado" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* User Header Section */}
                <header className="relative overflow-hidden bg-zinc-900 rounded-[56px] border border-white/5 p-12 shadow-3xl group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-32 h-32 rounded-3xl bg-zinc-950 flex items-center justify-center border border-white/5 shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-700">
                             <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6sqOCBZCcM9Cs7nu4tr5B44z4xO4oaMNqOBm5_qOCsoZm4T6d6gdHuu2cxOZNg6SA0BxpE65gY41z1ZfNuQ4M0Q4iDPMfv-bMr337L1EPSxQnMvGJFOrLGAE_JNnhgRF27FrNRHq_3pSkbb3Nt2XrUHv-hoUuNFF0mrcT0DKXlnNf8EJ9wvnF0Ntp0rt_vXvDPxsfNj95eSmQag-h6tvHxajvV7X7MSeWqE1NEF1W8rInYVb4FV8MWpk38DCfG9HFPvqufcelNbs" 
                                alt="Profile" 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <span className="px-4 py-1.5 bg-primary/10 text-primary font-black text-[9px] tracking-[0.4em] uppercase rounded-full italic border border-primary/20">Active Workforce Node</span>
                            <h1 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter leading-none italic">
                                CARLOS <span className="text-stone-700">ORTEGA</span>
                            </h1>
                            <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase">
                                ID: TITAN-74492 • Operador Senior • Planta Central
                            </p>
                        </div>
                        <div className="md:ml-auto flex flex-col items-end gap-2">
                             <div className="text-[9px] font-black text-stone-800 uppercase tracking-widest italic">Operations Integrity</div>
                             <div className="flex items-center gap-3 text-primary font-headline font-black text-2xl italic tracking-tighter shadow-sm">
                                <span className="material-symbols-outlined font-black animate-pulse">check_circle</span> OPTIMAL
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Bento Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Vacations Card */}
                    <div className="md:col-span-4 bg-zinc-950 p-10 rounded-[48px] border border-white/5 shadow-inner group flex flex-col justify-between h-[320px]">
                        <div>
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-800 mb-10 block italic">Vacation_Balance Cycle</span>
                            <div className="flex items-end gap-4">
                                <h2 className="text-7xl font-headline font-black text-primary italic tracking-tighter shadow-[0_0_20px_rgba(154,205,50,0.1)]">18</h2>
                                <span className="text-[10px] font-black text-stone-700 uppercase tracking-widest mb-4 italic">Days_Available</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden shadow-inner">
                                <div className="bg-primary h-full shadow-[0_0_10px_#9acd32]" style={{ width: '60%' }}></div>
                            </div>
                            <div className="flex justify-between items-center text-[9px] font-black text-stone-800 uppercase tracking-widest italic">
                                <span>Consumption Rate</span>
                                <span>60% Efficiency</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Benefits Card */}
                    <div className="md:col-span-8 bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl group flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                             <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 mb-10 block italic">Prestaciones Sociales Accumulation (Art. 142)</span>
                                <h2 className="text-5xl font-headline font-black text-white italic tracking-tighter decoration-double underline decoration-primary/20">$ 12.450,82</h2>
                             </div>
                             <button className="w-16 h-16 bg-zinc-950 rounded-3xl flex items-center justify-center border border-white/5 shadow-inner text-stone-700 hover:text-primary transition-all group-hover:scale-110">
                                <span className="material-symbols-outlined text-2xl font-black">receipt_long</span>
                             </button>
                         </div>
                         <div className="grid grid-cols-3 gap-10 mt-10 pt-10 border-t border-white/5">
                            <div>
                                <p className="text-[8px] text-stone-800 uppercase font-black tracking-widest italic mb-2">Quarterly_Accrual</p>
                                <p className="text-lg font-black text-white italic tracking-tighter">$1.200,00</p>
                            </div>
                            <div>
                                <p className="text-[8px] text-stone-800 uppercase font-black tracking-widest italic mb-2">Tenure_Node</p>
                                <p className="text-lg font-black text-white italic tracking-tighter uppercase">4y 2m Matrix</p>
                            </div>
                            <div>
                                <p className="text-[8px] text-stone-800 uppercase font-black tracking-widest italic mb-2">System_Sync</p>
                                <p className="text-lg font-black text-primary italic tracking-tighter">30 SEP 2023</p>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Secondary Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Left: Payroll Receipts History */}
                    <div className="lg:col-span-2 space-y-10">
                        <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden group relative min-h-[500px]">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-5 pointer-events-none"></div>
                            
                            <div className="p-10 border-b border-white/5 flex justify-between items-center relative z-10">
                                <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-white italic">Payroll Voucher Registry</h3>
                                <Link className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic hover:underline decoration-double">Access Full Archives_Node</Link>
                            </div>

                            <div className="p-10 space-y-6 relative z-10">
                                {receipts.map((r, i) => (
                                    <div key={i} className="bg-zinc-950/20 p-8 rounded-[40px] border border-white/5 hover:bg-zinc-950 transition-all duration-500 group/row flex flex-col md:flex-row items-center justify-between gap-10 shadow-inner">
                                        <div className="flex items-center gap-8">
                                            <div className="w-16 h-16 bg-zinc-900 flex items-center justify-center font-headline font-black text-stone-700 rounded-3xl border border-white/5 group-hover/row:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-3xl font-black">description</span>
                                            </div>
                                            <div className="space-y-1 text-center md:text-left">
                                                <span className="text-white font-headline text-lg uppercase tracking-tight group-hover/row:text-primary transition-colors italic">{r.period}</span>
                                                <div className="text-[9px] text-stone-800 font-black uppercase tracking-[0.4em] italic">Abonado Protocol: {r.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <span className="text-2xl font-headline font-black text-primary italic tracking-tighter tabular-nums">{r.amount}</span>
                                            <button className="px-8 py-4 bg-zinc-950 text-[9px] font-black uppercase tracking-[0.3em] text-white rounded-2xl hover:bg-primary hover:text-black transition-all border border-white/5 shadow-2xl">
                                                Download_Voucher
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right: Permission Request Engine */}
                    <div className="lg:col-span-1">
                        <section className="bg-zinc-950 p-12 rounded-[56px] border border-white/5 shadow-inner relative overflow-hidden group h-full">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                            
                            <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-white mb-12 italic border-b border-white/5 pb-8">Permission Request Engine</h3>
                            
                            <form className="space-y-10 relative z-10">
                                <div className="space-y-4">
                                    <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic block">Protocol_Type</label>
                                    <select className="w-full bg-zinc-900 border-none rounded-3xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-6 text-xs font-black uppercase tracking-widest shadow-inner appearance-none">
                                        <option>Vacation Day Node</option>
                                        <option>Medical Leave Vector</option>
                                        <option>Personal Affairs Cluster</option>
                                        <option>Family Protocol</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic block">Start_Node</label>
                                        <input className="w-full bg-zinc-900 border-none rounded-3xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-6 text-xs font-black uppercase tracking-widest shadow-inner shadow-inner" type="date"/>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic block">End_Node</label>
                                        <input className="w-full bg-zinc-900 border-none rounded-3xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-6 text-xs font-black uppercase tracking-widest shadow-inner shadow-inner" type="date"/>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[9px] font-black uppercase text-stone-700 tracking-[0.4em] italic block">Justification_Brief</label>
                                    <textarea className="w-full bg-zinc-900 border-none rounded-[40px] text-stone-300 focus:ring-2 focus:ring-primary/20 p-8 text-xs font-black uppercase tracking-widest shadow-inner" rows="4" placeholder="PROTOCOL RATIONALE..."></textarea>
                                </div>

                                <button className="w-full bg-primary p-8 rounded-[40px] font-black uppercase text-xs tracking-[0.3em] text-black shadow-3xl hover:scale-[1.02] active:scale-95 transition-all italic mt-10">
                                    Transmit Request Protocol
                                </button>
                            </form>

                            <div className="mt-12 p-8 bg-zinc-900/30 rounded-[32px] border border-dashed border-white/5">
                                <div className="flex items-center gap-4 text-stone-700">
                                    <span className="material-symbols-outlined text-xl font-black">info</span>
                                    <p className="text-[9px] font-black uppercase leading-relaxed tracking-widest italic">
                                        Medical leave vectors require digital certification uploads within a 48H integrity window.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">badge</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">EMPLOYEE SELF-SERVICE LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic shadow-sm">
                             <span className="flex items-center gap-2 italic">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#9acd32]"></span>
                                Personnel Portal Encrypted
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
