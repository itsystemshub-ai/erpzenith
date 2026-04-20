import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeProveedoresB2B() {
    const suppliers = [
        { name: 'ACEROS DE VENEZUELA S.A.', rif: 'J-30594832-1', email: 'compras@acerosv.com', phone: '+58 212 993 4001', status: 'Agente Especial', lastPurchase: '14 OCT 2023', lastFact: '#A-4055', balance: '$42,900.00' },
        { name: 'QUÍMICOS INDUSTRIALES MARACAIBO', rif: 'J-40112345-0', email: 'logistica@qimca.com.ve', phone: '+58 261 740 1200', status: 'Ordinario', lastPurchase: '02 NOV 2023', lastFact: '#B-1120', balance: '$12,450.50' },
        { name: 'REPUESTOS PESADOS BOLÍVAR', rif: 'J-00192837-4', email: 'ventas@rpesados.com', phone: '+58 286 923 0044', status: 'Agente Especial', lastPurchase: '28 OCT 2023', lastFact: '#Z-9901', balance: '$87,151.90', critical: true }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">factory</span>
                    <span>Compras <span className="text-white/60 mx-2">|</span> Gestión de Proveedores B2B</span>
                </div>
            }
        >
            <Head title="Gestión de Proveedores - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Hero Header Section */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Supply Chain Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Vendor Management Node</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Vendors <br/> <span className="text-stone-700">Database</span></h1>
                    </div>
                    
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 text-white px-10 py-5 rounded-[24px] text-[10px] font-black uppercase tracking-[0.4em] border border-zinc-800 hover:border-white transition-all flex items-center gap-4 group italic">
                            <span className="material-symbols-outlined text-xl font-black group-hover:rotate-180 transition-transform">refresh</span>
                            Sync Manifest
                        </button>
                        <button className="bg-primary text-black px-12 py-5 rounded-[24px] text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all italic flex items-center gap-4 group">
                             <span className="material-symbols-outlined text-xl font-black group-hover:rotate-90 transition-transform">add_business</span>
                             Registrar Provider
                        </button>
                    </div>
                </header>

                {/* Main Action Bento */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                     {/* Editor Form */}
                     <section className="xl:col-span-8 bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 space-y-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-20 translate-x-20 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                        
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-2 h-10 bg-primary"></div>
                            <h3 className="text-2xl font-headline font-black uppercase tracking-tighter italic text-white leading-none">Node Editor <span className="text-stone-700 italic">| Entity Config</span></h3>
                        </div>

                        <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 block italic">Asset Identifier / RIF</label>
                                    <input type="text" placeholder="J-12345678-9" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-stone-800" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 block italic">Corporate Identity / Razón Social</label>
                                    <input type="text" placeholder="INDUSTRIAS METALÚRGICAS FORGE C.A." className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white font-headline text-sm font-black tracking-widest focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-stone-800 uppercase italic" />
                                </div>
                                <div className="flex items-center gap-6 py-4">
                                    <div className="relative inline-flex items-center cursor-pointer group/toggle">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-14 h-8 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary shadow-lg group-hover/toggle:shadow-primary/20"></div>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">Agente de Retención Autorizado</span>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 block italic">Fiscal Domicile</label>
                                    <textarea rows="2" placeholder="Zona Industrial II, Av. Principal, Galpón 45..." className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-zinc-400 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-stone-800 italic" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 block italic">Comms / Phone</label>
                                        <input type="tel" placeholder="+58 251 000 0000" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-stone-800" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 block italic">Electronic Node / Email</label>
                                        <input type="email" placeholder="contacto@forge.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-stone-800 italic" />
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-10 border-t border-zinc-800 flex justify-end items-center gap-10">
                                <button type="button" className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] hover:text-white transition-colors italic">Abort Changes</button>
                                <button type="submit" className="bg-white text-black px-12 py-5 rounded-3xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-primary transition-all italic shadow-2xl shadow-primary/5">COMMIT ENTITY DATA</button>
                            </div>
                        </form>
                     </section>

                     {/* Quick Stats */}
                     <div className="xl:col-span-4 flex flex-col gap-8">
                        <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 flex flex-col justify-between flex-1 relative overflow-hidden group border-l-[12px] border-l-primary">
                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] italic block">Total Aggregate Due</span>
                            <div className="space-y-4">
                                <div className="text-5xl font-headline font-black text-white italic tracking-tighter leading-none">$142.502<span className="text-stone-700">,40</span></div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl font-black">trending_up</span>
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">▲ 12.4% Delta (Current Month)</span>
                                </div>
                            </div>
                        </section>
                        <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 flex flex-col justify-between flex-1 relative overflow-hidden group bg-gradient-to-br from-zinc-900 to-zinc-950">
                             <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] italic block">Active Provider Nodes</span>
                             <div className="space-y-4">
                                <div className="text-7xl font-headline font-black text-primary italic tracking-tighter leading-none">84</div>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-widest italic max-w-xs">4 nodes currently pending for security node validation audit.</p>
                             </div>
                        </section>
                     </div>
                </div>

                {/* Data Table Container */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden min-h-[600px] flex flex-col">
                    <div className="p-12 border-b border-zinc-800 flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <h3 className="text-2xl font-headline font-black uppercase tracking-tighter italic text-white leading-none tracking-[0.2em]">Master Ledger <span className="text-stone-700 italic">| B2B Network</span></h3>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center text-stone-700 hover:text-white transition-all"><span className="material-symbols-outlined font-black italic">filter_list</span></button>
                            <button className="w-12 h-12 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center text-stone-700 hover:text-white transition-all"><span className="material-symbols-outlined font-black italic">download</span></button>
                        </div>
                    </div>

                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                                    <th className="px-12 py-6">Entity Identity / RIF</th>
                                    <th className="px-12 py-6">Comms Protocol</th>
                                    <th className="px-12 py-6 text-center">Fiscal Status</th>
                                    <th className="px-12 py-6 text-center">Last Cycle</th>
                                    <th className="px-12 py-6 text-right">Settlement Pending</th>
                                    <th className="px-12 py-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {suppliers.map((s, i) => (
                                    <tr key={i} className="hover:bg-zinc-950/50 group transition-colors">
                                        <td className="px-12 py-8">
                                            <div className="font-headline font-black text-lg text-stone-400 group-hover:text-white italic tracking-tighter transition-all uppercase leading-none mb-1">{s.name}</div>
                                            <div className="font-mono text-[9px] text-stone-700 font-bold uppercase tracking-widest italic">{s.rif}</div>
                                        </td>
                                        <td className="px-12 py-8 space-y-1">
                                            <div className="text-[11px] font-black text-stone-500 uppercase italic tracking-widest">{s.email}</div>
                                            <div className="text-[10px] font-black text-stone-800 uppercase tracking-widest">{s.phone}</div>
                                        </td>
                                        <td className="px-12 py-8 text-center uppercase">
                                            <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] italic border ${s.status === 'Agente Especial' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-zinc-950/50 text-stone-700 border-zinc-900 group-hover:text-zinc-500'}`}>{s.status}</span>
                                        </td>
                                        <td className="px-12 py-8 text-center space-y-1">
                                            <div className="text-[11px] font-headline font-black text-white italic tracking-widest uppercase">{s.lastPurchase}</div>
                                            <div className="text-[8px] font-black text-stone-800 uppercase tracking-widest">{s.lastFact}</div>
                                        </td>
                                        <td className={`px-12 py-8 text-right font-headline font-black text-2xl tracking-tighter italic group-hover:scale-105 transition-transform ${s.critical ? 'text-error' : 'text-white group-hover:text-primary transition-colors'}`}>
                                            {s.balance}
                                        </td>
                                        <td className="px-12 py-8 text-right">
                                            <button className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-stone-700 hover:text-white transition-all"><span className="material-symbols-outlined text-lg">more_vert</span></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-10 border-t border-zinc-900 flex justify-between items-center bg-zinc-950/20">
                         <span className="text-[10px] font-black text-stone-800 uppercase tracking-[0.4em] italic">Showing 01 - 10 Of 84 Entity Nodes</span>
                         <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-2xl border border-zinc-900 flex items-center justify-center text-stone-800 hover:text-white hover:border-white transition-all"><span className="material-symbols-outlined font-black">chevron_left</span></button>
                            <button className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-black font-headline font-black text-lg italic">1</button>
                            <button className="w-12 h-12 rounded-2xl border border-zinc-900 flex items-center justify-center text-stone-600 hover:text-white hover:border-white transition-all font-headline font-black italic">2</button>
                            <button className="w-12 h-12 rounded-2xl border border-zinc-900 flex items-center justify-center text-stone-600 hover:text-white hover:border-white transition-all font-headline font-black italic">3</button>
                            <button className="w-12 h-12 rounded-2xl border border-zinc-900 flex items-center justify-center text-stone-800 hover:text-white hover:border-white transition-all"><span className="material-symbols-outlined font-black">chevron_right</span></button>
                         </div>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-16 px-4">
                     <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.6em] italic">Asset Acquisition Module</h4>
                        <p className="text-[10px] font-black text-stone-800 uppercase leading-relaxed italic max-w-sm tracking-widest">Referential integrity and compliance of active fiscal regulations. Data node audit logs active for each provider interaction stream.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.6em] italic">Network Health Analytics</h4>
                        <div className="space-y-2">
                             <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-[9px] font-black text-stone-600 uppercase tracking-[0.2em] italic">Primary Ledger DB: STABLE_SYNC</span>
                             </div>
                             <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                <span className="text-[9px] font-black text-stone-600 uppercase tracking-[0.2em] italic">Fiscal Authority API (SENIAT): ONLINE</span>
                             </div>
                        </div>
                    </div>
                    <div className="text-right flex flex-col justify-end">
                         <div className="text-white font-headline font-black tracking-[-0.1em] text-4xl opacity-5 italic scale-y-125 mb-4">FORGE_INDUSTRIAL</div>
                         <div className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic opacity-50">© 2024 METALLIC_CORE SOLUTIONS. ALL RIGHTS RESERVED.</div>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
