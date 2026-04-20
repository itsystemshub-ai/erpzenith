import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DeclaracionDeIva() {
    const retentions = [
        { name: 'TRANS-CARIBE, C.A.', rif: 'J-30922831-2', type: 'IVA', amount: '12,500.00' },
        { name: 'INVERSIONES 2020', rif: 'J-29833100-1', type: 'ISLR', amount: '4,200.00' },
        { name: 'DISTRIBUIDORA METAL', rif: 'J-10293344-0', type: 'IVA', amount: '8,950.00' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">account_balance</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Declaración de IVA e Impuestos</span>
                </div>
            }
        >
            <Head title="Declaración de IVA e Impuestos" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <header className="relative">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                        <div className="space-y-6">
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Fiscal Oversight Node</span>
                            <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-white leading-none">
                                Declaración <br/><span className="text-stone-700">De IVA Mensual</span>
                            </h1>
                        </div>
                        <div className="bg-zinc-900 p-8 rounded-[32px] border-l-[8px] border-primary shadow-3xl">
                            <p className="text-[9px] text-stone-600 uppercase tracking-widest font-black mb-2">Tax ID (RIF)</p>
                            <p className="text-2xl font-mono text-primary tracking-widest font-black">J-40592831-0</p>
                        </div>
                    </div>
                </header>

                {/* Bento Grid Statistics */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Balance Analysis */}
                    <div className="lg:col-span-8 bg-zinc-900 p-12 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="font-headline uppercase text-stone-500 tracking-[0.3em] text-[10px] font-black mb-10">IVA Balance Analysis</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-[9px] text-stone-700 font-black uppercase tracking-widest mb-3 text-right md:text-left">Débito Fiscal</p>
                                        <p className="text-4xl font-headline font-black text-white tracking-tighter">VES 425.890,50</p>
                                    </div>
                                    <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-3/4 shadow-[0_0_10px_#9acd32]"></div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="text-right">
                                        <p className="text-[9px] text-stone-700 font-black uppercase tracking-widest mb-3">Crédito Fiscal</p>
                                        <p className="text-4xl font-headline font-black text-primary tracking-tighter">VES 312.440,00</p>
                                    </div>
                                    <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-stone-800 h-full w-1/2 ml-auto"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between">
                                <p className="text-[10px] uppercase font-black text-stone-600 tracking-[0.3em]">Calculated Differential</p>
                                <p className="text-2xl font-headline font-black text-white tracking-tighter">+ VES 113.450,50</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    </div>

                    {/* Tax Retentions Card */}
                    <div className="lg:col-span-4 grid grid-cols-1 gap-8">
                        <div className="bg-zinc-950 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col justify-between group">
                            <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                            <div>
                                <h3 className="font-headline uppercase text-stone-700 tracking-widest text-[9px] font-black mb-2 lowercase">IVA Practicadas</h3>
                                <p className="text-3xl font-headline font-black text-white tracking-tighter italic">VES 84.120,50</p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <p className="text-[8px] text-stone-800 font-black uppercase tracking-[0.3em]">Last Update: May 24, 2024</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Declaration Form Simulation */}
                    <section className="lg:col-span-8 bg-zinc-900 p-12 rounded-[48px] border border-outline-variant/10 shadow-3xl">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-2xl font-headline font-black uppercase text-white tracking-tight">Formulario 00030: <span className="text-primary ml-2 italic">IVA Mensual</span></h2>
                            <span className="px-5 py-2 bg-zinc-950 text-stone-600 text-[9px] uppercase font-black tracking-[0.4em] rounded-full border border-white/5">Period: 05-2024</span>
                        </div>
                        
                        <div className="space-y-12">
                            {/* Section A: Sales */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="h-px bg-white/5 flex-1"></div>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.5em]">Sección A: Ventas y Debitos</span>
                                    <div className="h-px bg-white/5 flex-1"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[9px] uppercase text-stone-600 font-black tracking-widest">Base Imponible (Alícuota 16%)</label>
                                        <div className="bg-zinc-950 border border-white/5 p-6 rounded-2xl focus-within:border-primary/40 transition-colors shadow-inner">
                                            <input className="bg-transparent border-none focus:ring-0 text-white font-mono w-full text-xl font-bold" type="text" defaultValue="2.661.812,50"/>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[9px] uppercase text-stone-600 font-black tracking-widest">Débito Fiscal</label>
                                        <div className="bg-zinc-950/50 border border-white/5 p-6 rounded-2xl shadow-inner">
                                            <input className="bg-transparent border-none focus:ring-0 text-primary font-mono w-full text-xl font-black opacity-50" readOnly type="text" defaultValue="425.890,00"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section B: Purchases */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="h-px bg-white/5 flex-1"></div>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.5em]">Sección B: Compras y Créditos</span>
                                    <div className="h-px bg-white/5 flex-1"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[9px] uppercase text-stone-600 font-black tracking-widest">Base Imponible (Alícuota 16%)</label>
                                        <div className="bg-zinc-950 border border-white/5 p-6 rounded-2xl focus-within:border-primary/40 transition-colors shadow-inner">
                                            <input className="bg-transparent border-none focus:ring-0 text-white font-mono w-full text-xl font-bold" type="text" defaultValue="1.952.750,00"/>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[9px] uppercase text-stone-600 font-black tracking-widest">Crédito Fiscal</label>
                                        <div className="bg-zinc-950/50 border border-white/5 p-6 rounded-2xl shadow-inner">
                                            <input className="bg-transparent border-none focus:ring-0 text-stone-500 font-mono w-full text-xl font-black opacity-50" readOnly type="text" defaultValue="312.440,00"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Footer */}
                            <div className="bg-zinc-950 p-10 rounded-[32px] border-l-[12px] border-primary shadow-3xl mt-12 flex flex-col md:flex-row justify-between items-center gap-10">
                                <div>
                                    <p className="text-[9px] text-stone-700 font-black uppercase mb-2 tracking-widest">Total Impuesto a Pagar (Neto)</p>
                                    <p className="text-5xl font-headline font-black text-white tracking-tighter">VES 113.450,00</p>
                                </div>
                                <button className="w-full md:w-auto bg-primary text-black px-12 py-5 rounded-2xl font-headline font-black uppercase text-[10px] tracking-widest shadow-[0_0_25px_rgba(154,205,50,0.4)] hover:scale-105 active:scale-95 transition-all">
                                    Submit To SENIAT Portal
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Side Metadata */}
                    <aside className="lg:col-span-4 space-y-10">
                        <div className="bg-zinc-950/50 rounded-[40px] border border-outline-variant/10 overflow-hidden shadow-2xl">
                            <div className="p-8 bg-zinc-900 border-b border-white/5">
                                <h3 className="font-headline uppercase text-[9px] font-black text-stone-500 tracking-[0.4em]">Detail Retentions Ledger</h3>
                            </div>
                            <div className="divide-y divide-white/5">
                                {retentions.map((item, i) => (
                                    <div key={i} className="p-8 hover:bg-zinc-950 transition-colors group">
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="text-xs font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">{item.name}</p>
                                            <span className="text-[8px] bg-zinc-900 text-stone-600 px-3 py-1 rounded-full font-black border border-white/5">{item.type}</span>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <p className="text-[9px] text-stone-800 font-mono">{item.rif}</p>
                                            <p className="text-sm font-headline font-black text-stone-500 tabular-nums">{item.amount}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Audit Status */}
                        <div className="p-10 bg-zinc-900 rounded-[40px] border-b-4 border-primary shadow-xl group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="material-symbols-outlined text-stone-700 group-hover:text-primary transition-colors">verified_user</span>
                                <span className="text-[9px] uppercase text-stone-700 font-black tracking-widest group-hover:text-stone-400 transition-colors">Industrial Security Protocol</span>
                            </div>
                            <p className="text-[11px] text-stone-500 leading-relaxed italic uppercase font-medium">
                                "Documentación verificada según normativa Gaceta Oficial N° 42.100. Todos los cálculos están sujetos a conciliación bancaria forjada final."
                            </p>
                        </div>
                    </aside>
                </div>
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
