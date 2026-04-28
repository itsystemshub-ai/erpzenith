import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeClientesYRetenciones() {
    const customers = [
        { name: 'Transporte Carabobo', id: 'J-30492834-0', location: 'Zona Industrial II, Valencia', status: 'Retention Agent', iva: true, islr: true },
        { name: 'Servicio El Parral', id: 'J-41223945-2', location: 'Altos del Parral, Valencia', status: 'Standard Entity', iva: false, islr: false },
        { name: 'Inversiones Heavy Duty', id: 'J-29955883-4', location: 'Av. Michelena, C.C. Industrial', status: 'Retention Agent', iva: true, islr: false },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">group</span>
                    <span>Finanzas <span className="text-white/60 mx-2">|</span> Gestión de Clientes</span>
                </div>
            }
        >
            <Head title="Gestión de Clientes y Retenciones" />

            <div className="space-y-12 pb-12">
                {/* Hero Header */}
                <header className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-white leading-none">
                            Customer <br/><span className="text-stone-700">Registry</span>
                        </h1>
                        <p className="text-stone-500 font-medium tracking-[0.4em] text-xs uppercase mt-6">
                            System Core: Engine_Module_v4.02 // B2B Management
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-zinc-900 px-8 py-5 rounded-2xl border-l-[12px] border-primary shadow-3xl">
                            <p className="text-[9px] text-stone-700 uppercase font-black tracking-widest mb-2">Active Accounts</p>
                            <p className="text-3xl font-headline font-black text-white italic tracking-tighter">1,429</p>
                        </div>
                        <div className="bg-zinc-950 px-8 py-5 rounded-2xl border border-white/5 shadow-2xl">
                            <p className="text-[9px] text-stone-800 uppercase font-black tracking-widest mb-2">Retention Ratio</p>
                            <p className="text-3xl font-headline font-black text-stone-500 italic tracking-tighter">42%</p>
                        </div>
                    </div>
                </header>

                {/* Bento Layout Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Registration Form */}
                    <div className="lg:col-span-5">
                        <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mt-16 -mr-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                            <span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-primary opacity-5" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                            
                            <h3 className="text-2xl font-headline font-black uppercase text-white mb-8 flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl">person_add</span>
                                Database Entry
                            </h3>
                            
                            <form className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Full Corporate Name</label>
                                    <input className="w-full bg-zinc-950 border-none rounded-2xl text-white focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner placeholder:text-stone-900" placeholder="E.G. TRANSPORTES VALENCIA C.A." type="text"/>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">RIF / Tax ID</label>
                                        <input className="w-full bg-zinc-950 border-none rounded-2xl text-white focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner placeholder:text-stone-900" placeholder="J-12345678-9" type="text"/>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Contact Node</label>
                                        <input className="w-full bg-zinc-950 border-none rounded-2xl text-white focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner placeholder:text-stone-900" placeholder="+58 241-0000" type="text"/>
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Operational Address</label>
                                    <textarea className="w-full bg-zinc-950 border-none rounded-2xl text-white focus:ring-2 focus:ring-primary/20 p-5 text-xs font-black uppercase tracking-widest shadow-inner placeholder:text-stone-900" placeholder="INDUSTRIAL ZONE II..." rows="3"></textarea>
                                </div>

                                {/* Retention Matrix */}
                                <div className="bg-zinc-950 p-8 rounded-[32px] space-y-6 border border-white/5">
                                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.6em] mb-4 italic">Tax Retention Protocol</p>
                                    
                                    <div className="flex items-center justify-between group/toggle cursor-pointer">
                                        <div>
                                            <p className="text-xs font-black text-white uppercase tracking-widest">Retention Agent</p>
                                            <p className="text-[9px] text-stone-800 uppercase font-black tracking-widest mt-1">Seniat Global Status</p>
                                        </div>
                                        <div className="w-14 h-7 bg-zinc-900 rounded-full relative p-1 group/btn border border-white/5">
                                            <div className="w-5 h-5 bg-primary rounded-full absolute right-1 shadow-[0_0_10px_#9acd32]"></div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/5"></div>
                                    <div className="flex items-center justify-between group/toggle cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest group-hover/toggle:text-white transition-colors">VAT / IVA Retention</span>
                                        <div className="w-12 h-6 bg-zinc-900 rounded-full relative p-1 border border-white/5">
                                            <div className="w-4 h-4 bg-stone-800 rounded-full absolute left-1"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between group/toggle cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest group-hover/toggle:text-white transition-colors">ISLR Protocol</span>
                                        <div className="w-12 h-6 bg-zinc-900 rounded-full relative p-1 border border-white/5">
                                            <div className="w-4 h-4 bg-stone-800 rounded-full absolute left-1"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 border border-white/5 text-stone-700 font-black py-5 rounded-2xl text-[9px] tracking-widest hover:bg-zinc-800 transition-all uppercase" type="reset">Discard</button>
                                    <button className="flex-1 bg-primary text-black font-black py-5 rounded-2xl text-[9px] tracking-widest hover:scale-105 active:scale-95 transition-all uppercase shadow-2xl" type="submit">Execute Node Sync</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Customer Registry List */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Search & Filter Matrix */}
                        <div className="bg-zinc-900 p-6 rounded-[32px] border border-outline-variant/10 shadow-3xl flex gap-6 items-center">
                            <div className="flex-1 flex items-center bg-zinc-950 px-6 py-4 rounded-2xl shadow-inner group/search">
                                <span className="material-symbols-outlined text-stone-700 text-lg group-focus-within/search:text-primary transition-colors">filter_list</span>
                                <input className="bg-transparent border-none focus:ring-0 text-[10px] font-black uppercase tracking-widest text-stone-500 placeholder:text-stone-900 w-full ml-4" placeholder="FILTER BY NAME, RIF OR INDUSTRIAL SECTOR..." type="text"/>
                            </div>
                            <button className="bg-zinc-950 p-4 rounded-2xl text-stone-700 hover:text-primary transition-all shadow-inner border border-white/5">
                                <span className="material-symbols-outlined">download</span>
                            </button>
                        </div>

                        {/* Customer Cards Matrix */}
                        <div className="space-y-6">
                            {customers.map((c, i) => (
                                <div key={i} className={`bg-zinc-900/50 p-8 rounded-[40px] border-l-[12px] shadow-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-10 hover:bg-zinc-900 transition-all group/card overflow-hidden relative ${
                                    c.status === 'Retention Agent' ? 'border-primary' : 'border-stone-800 opacity-60'
                                }`}>
                                   <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                                   <div className="relative z-10 flex-1">
                                        <div className="flex items-center gap-4 mb-3">
                                            <h4 className="text-2xl font-headline font-black text-white uppercase tracking-tight group-hover/card:text-primary transition-colors">{c.name}</h4>
                                            {c.status === 'Retention Agent' && (
                                                <span className="bg-primary/20 text-primary text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase italic">Agent_Active</span>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-8 text-[10px] text-stone-600 font-black tracking-widest uppercase italic">
                                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-stone-800">id_card</span> {c.id}</span>
                                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-stone-800">location_on</span> {c.location}</span>
                                        </div>
                                   </div>

                                   <div className="relative z-10 flex items-center gap-10 w-full md:w-auto">
                                        <div className="text-right">
                                             <p className="text-[8px] text-stone-800 uppercase font-black tracking-[0.4em] mb-3">Tax_Compliance_Status</p>
                                             <div className="flex gap-4">
                                                <div className="flex flex-col items-center">
                                                    <span className={`text-[9px] font-black mb-1 ${c.iva ? 'text-primary' : 'text-stone-900'}`}>IVA</span>
                                                    <div className={`w-8 h-1 rounded-full ${c.iva ? 'bg-primary shadow-[0_0_8px_#9acd32]' : 'bg-stone-950'}`}></div>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <span className={`text-[9px] font-black mb-1 ${c.islr ? 'text-primary' : 'text-stone-900'}`}>ISLR</span>
                                                    <div className={`w-8 h-1 rounded-full ${c.islr ? 'bg-primary shadow-[0_0_8px_#9acd32]' : 'bg-stone-950'}`}></div>
                                                </div>
                                             </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="w-14 h-14 flex items-center justify-center bg-zinc-950 text-stone-800 hover:text-primary hover:scale-110 transition-all rounded-2xl shadow-inner border border-white/5">
                                                <span className="material-symbols-outlined text-2xl">edit</span>
                                            </button>
                                            <button className="w-14 h-14 flex items-center justify-center bg-zinc-950 text-stone-800 hover:text-white hover:scale-110 transition-all rounded-2xl shadow-inner border border-white/5">
                                                <span className="material-symbols-outlined text-2xl">history</span>
                                            </button>
                                        </div>
                                   </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary Compliance Nodes */}
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div className="bg-zinc-950 p-8 rounded-[40px] border border-white/5 flex items-center gap-6 group hover:border-primary/20 transition-all shadow-inner">
                                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl">
                                    <span className="material-symbols-outlined text-primary text-2xl font-black group-hover:scale-125 transition-transform duration-700">verified</span>
                                </div>
                                <div>
                                    <p className="text-[9px] text-stone-800 uppercase font-black tracking-[0.4em]">Integrated Database Sync</p>
                                    <p className="text-xs font-black text-white uppercase tracking-widest mt-1">Last Sync: 02m Ago_Nodes</p>
                                </div>
                            </div>
                            <div className="bg-zinc-950 p-8 rounded-[40px] border border-white/5 flex items-center gap-6 group hover:border-primary/20 transition-all shadow-inner">
                                <div className="w-14 h-14 bg-stone-900 flex items-center justify-center rounded-2xl">
                                    <span className="material-symbols-outlined text-stone-700 text-2xl font-black">gavel</span>
                                </div>
                                <div>
                                    <p className="text-[9px] text-stone-800 uppercase font-black tracking-[0.4em]">Compliance Protocol</p>
                                    <p className="text-xs font-black text-white uppercase tracking-widest mt-1 italic">100% Tax Compliant</p>
                                </div>
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
                             <p className="text-[8px] font-black text-stone-800 uppercase tracking-[0.4em]">B2B REGISTRY LAYER</p>
                         </div>
                    </div>
                    <div className="text-[10px] text-right font-black text-stone-800 uppercase tracking-widest italic max-w-sm">
                        La integridad de los datos de retención está vinculada directamente al motor fiscal Forge Industrial Engine.
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
