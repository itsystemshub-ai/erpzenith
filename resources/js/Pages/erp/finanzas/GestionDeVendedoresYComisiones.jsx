import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeVendedoresYComisiones() {
    const sellers = [
        { name: 'Ricardo Mendoza', id: 'V-14.822.391', initials: 'RM', region: 'Región Central', commission: '8.5%', customers: 142, performance: 82 },
        { name: 'Sofia Castellanos', id: 'V-20.119.504', initials: 'SC', region: 'Región Oriente', commission: '10.0%', customers: 89, performance: 95 },
        { name: 'Javier Peraza', id: 'V-17.443.109', initials: 'JP', region: 'Región Occidente', commission: '6.5%', customers: 215, performance: 45 },
        { name: 'Elena Lugo', id: 'V-23.900.221', initials: 'EL', region: 'Región Central', commission: '7.5%', customers: 110, performance: 68 },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">badge</span>
                    <span>Finanzas <span className="text-white/60 mx-2">|</span> Vendedores y Comisiones</span>
                </div>
            }
        >
            <Head title="Gestión de Vendedores" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em] italic">Sales Force Management Layer</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            SALES <br/><span className="text-stone-700">POWER</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.2em] text-xs uppercase mt-6">
                           RIF: J-40308741-5 • MAYOR DE REPUESTO LA CIMA, C.A.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Registration Form Bento */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mt-16 -mr-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                            <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-primary opacity-5" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
                            
                            <h3 className="text-2xl font-headline font-black uppercase text-white mb-8 flex items-center gap-4 italic text-primary">
                                REPR. REGISTRY
                            </h3>
                            
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Full Name</label>
                                    <input className="w-full bg-zinc-950 border-none rounded-2xl text-white focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner placeholder:text-stone-900" placeholder="e.g. ALEJANDRO RAMIREZ" type="text"/>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">ID / RIF</label>
                                        <input className="w-full bg-zinc-950 border-none rounded-2xl text-white focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner placeholder:text-stone-900" placeholder="V-00.000.000" type="text"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Comm. %</label>
                                        <div className="relative">
                                            <input className="w-full bg-zinc-950 border-none rounded-2xl text-white focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner placeholder:text-stone-900 pr-12" placeholder="5.0" type="number"/>
                                            <span className="absolute right-5 top-5 text-stone-800 font-black">%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Assigned Hub</label>
                                    <select className="w-full bg-zinc-950 border-none rounded-2xl text-stone-300 focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner appearance-none">
                                        <option>Región Central</option>
                                        <option>Región Occidente</option>
                                        <option>Región Oriente</option>
                                        <option>Región Los Andes</option>
                                    </select>
                                </div>

                                <button className="w-full bg-stone-100 hover:bg-primary py-5 rounded-3xl text-stone-950 hover:text-white font-black uppercase text-[10px] tracking-[0.3em] transition-all mt-4 shadow-2xl">
                                    Sync Representative Node
                                </button>
                            </form>
                        </div>

                        {/* Performance Targets */}
                        <div className="bg-primary rounded-[56px] p-10 relative overflow-hidden group shadow-3xl">
                             <div className="absolute inset-0 bg-industrial-mesh opacity-10"></div>
                             <div className="relative z-10">
                                <h5 className="font-headline text-black font-black text-2xl uppercase italic tracking-tighter">Performance Targets</h5>
                                <p className="text-black/60 text-[9px] font-black uppercase mt-2 tracking-widest">Quarterly Threshold: Q3 2024</p>
                                <div className="mt-8 flex items-baseline gap-2">
                                    <span className="text-5xl font-headline font-black text-black italic tracking-tighter decoration-double underline">$450K</span>
                                    <span className="text-[9px] font-black text-black/40 uppercase tracking-widest italic">Industrial Floor</span>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Sellers Data List */}
                    <div className="lg:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                        <div className="p-10 bg-zinc-950/40 border-b border-white/5 flex items-center justify-between">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-700 italic">Active Sales Force Matrix</h4>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-stone-800 hover:text-primary cursor-pointer transition-colors p-3 bg-zinc-900 rounded-2xl">filter_list</span>
                                <span className="material-symbols-outlined text-stone-800 hover:text-primary cursor-pointer transition-colors p-3 bg-zinc-900 rounded-2xl">download</span>
                            </div>
                        </div>

                        <div className="overflow-x-auto p-8">
                            <table className="w-full text-left border-separate border-spacing-y-4">
                                <thead>
                                    <tr className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.5em]">
                                        <th className="px-8 py-5">Personnel Nodes</th>
                                        <th className="px-8 py-5">Ops Region</th>
                                        <th className="px-8 py-5">Comm. Delta</th>
                                        <th className="px-8 py-5">B2B Base</th>
                                        <th className="px-8 py-5">Performance</th>
                                        <th className="px-8 py-5"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs font-black">
                                    {sellers.map((s, i) => (
                                        <tr key={i} className="bg-zinc-950/20 hover:bg-zinc-950 transition-all duration-300 group/row">
                                            <td className="px-8 py-6 first:rounded-l-[32px]">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center font-headline font-black text-primary rounded-2xl border border-white/5 shadow-inner">
                                                        {s.initials}
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-white font-headline text-lg uppercase tracking-tight group-hover/row:text-primary transition-colors">{s.name}</span>
                                                        <span className="text-[8px] text-stone-800 font-mono tracking-widest">{s.id}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="bg-zinc-900 text-stone-600 text-[8px] font-black px-3 py-1.5 rounded-lg uppercase tracking-tighter border border-white/5 italic">
                                                    {s.region}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-white font-mono tracking-widest">{s.commission}</td>
                                            <td className="px-8 py-6 text-stone-500 italic">{s.customers} Nodes</td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-1 h-1.5 bg-zinc-950 rounded-full overflow-hidden w-24 shadow-inner">
                                                        <div className={`h-full ${s.performance > 90 ? 'bg-primary shadow-[0_0_10px_#9acd32]' : 'bg-stone-800'} transition-all`} style={{ width: `${s.performance}%` }}></div>
                                                    </div>
                                                    <span className={`text-[10px] font-black tracking-tighter ${s.performance > 90 ? 'text-primary' : 'text-stone-800'}`}>{s.performance}%</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-right last:rounded-r-[32px]">
                                                <button className="p-3 bg-zinc-900 rounded-2xl text-stone-800 hover:text-white transition-all border border-white/5 shadow-inner">
                                                    <span className="material-symbols-outlined text-xl">edit_note</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-10 bg-zinc-950/40 text-center border-t border-white/5 flex items-center justify-between">
                            <p className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] italic">Showing 4 of 12 personnel units</p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-zinc-950 text-stone-800 text-[9px] font-black rounded-2xl border border-white/5 uppercase tracking-widest hover:text-primary transition-colors">Prev_Hub</button>
                                <button className="px-6 py-3 bg-zinc-950 text-stone-800 text-[9px] font-black rounded-2xl border border-white/5 uppercase tracking-widest hover:text-primary transition-colors">Next_Hub</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industrial Technical Footer */}
                <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity pb-10">
                    <div className="flex items-center gap-6">
                         <span className="material-symbols-outlined text-primary text-2xl font-black">precision_manufacturing</span>
                         <div className="space-y-1">
                             <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Zenith_Engine_Core v4.22.9</p>
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">SALES OPERATIONS LAYER</p>
                         </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                         <p className="text-[9px] font-black text-stone-800 uppercase tracking-widest">© 2024 Mayor de Repuesto La Cima, C.A.</p>
                         <div className="flex items-center gap-4 text-[8px] font-mono font-black text-primary/40 tracking-widest uppercase italic">
                             <span>Official RIF J-40308741-5</span>
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
