import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CierreContable() {
    const checklist = [
        { label: 'Depreciación de Activos', status: 'Finalizado', icon: 'check_circle', color: 'text-primary' },
        { label: 'Cuentas por Pagar', status: 'Bloqueado', icon: 'check_circle', color: 'text-primary' },
        { label: 'Provisión de Nómina', status: 'Esperando RRHH', icon: 'radio_button_unchecked', color: 'text-stone-700' },
        { label: 'Sincronización Inter-Compañía', status: 'Pendiente', icon: 'radio_button_unchecked', color: 'text-stone-700' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">lock</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Cierre Fiscal & Impuestos</span>
                </div>
            }
        >
            <Head title="Cierre Fiscal y Liquidación de Impuestos" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <header className="relative overflow-hidden bg-zinc-900 rounded-[48px] p-12 border-l-[12px] border-primary shadow-3xl group">
                    <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                    <div className="relative z-10 flex flex-col xl:flex-row justify-between items-end gap-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Module: FISCAL_CLOSURE_v4</span>
                                <div className="h-px w-12 bg-white/10"></div>
                                <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-[8px] font-bold tracking-widest uppercase flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> IN PROGRESS
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-[0.85]">Cierre Fiscal <br/> <span className="text-primary">& Liquidación</span></h1>
                            <p className="text-stone-500 text-sm font-medium max-w-2xl leading-relaxed">
                                Advanced fiscal engine for industrial-grade tax settlements. 
                                Ensuring full compliance with international accounting standards and local SENIAT regulations.
                            </p>
                        </div>
                        <div className="flex bg-zinc-950 p-8 rounded-[32px] border border-outline-variant/5 shadow-inner min-w-[200px]">
                             <div className="text-right w-full">
                                <span className="text-[9px] text-stone-700 font-black uppercase tracking-[0.4em] mb-2 block">Fiscal Period</span>
                                <span className="text-2xl font-headline font-black text-white tracking-tighter uppercase">DECEMBER 2023</span>
                             </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Reconciliations & Checklist */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* Transitions Section */}
                        <section className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                           <div className="flex items-center gap-4 mb-10">
                                <span className="material-symbols-outlined text-primary text-3xl">account_balance_wallet</span>
                                <h3 className="font-headline text-xl font-black text-white uppercase tracking-tight">Conciliaciones Pendientes</h3>
                           </div>
                           <div className="space-y-6">
                                <div className="flex items-center justify-between bg-zinc-950/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden group/item">
                                    <div className="absolute left-0 top-0 h-full w-1.5 bg-primary shadow-[0_0_15px_#9acd32]"></div>
                                    <div>
                                        <p className="text-[9px] font-black text-stone-600 uppercase tracking-[0.3em] mb-2 text-primary">Bank vs Ledger</p>
                                        <p className="text-3xl font-headline font-black text-white tracking-tighter">$ 14,203.45</p>
                                        <p className="text-[10px] font-black text-error uppercase mt-2">UNMATCHED VARIANCE DETECTED</p>
                                    </div>
                                    <button className="bg-zinc-900 border border-outline-variant/10 px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest text-stone-400 group-hover/item:border-primary group-hover/item:text-primary transition-all">Review Diff</button>
                                </div>
                                <div className="flex items-center justify-between bg-zinc-950/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden group/item">
                                    <div className="absolute left-0 top-0 h-full w-1.5 bg-stone-800"></div>
                                    <div>
                                        <p className="text-[9px] font-black text-stone-600 uppercase tracking-[0.3em] mb-2">Inventory vs Ledger</p>
                                        <p className="text-3xl font-headline font-black text-white tracking-tighter">$ 2,840.10</p>
                                        <p className="text-[10px] font-black text-primary uppercase mt-2">WITHIN MARGIN</p>
                                    </div>
                                    <button className="bg-zinc-900 border border-outline-variant/10 px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest text-stone-400 group-hover/item:border-primary group-hover/item:text-primary transition-all">Audit Logs</button>
                                </div>
                           </div>
                        </section>

                        {/* Checklist Section */}
                        <section className="bg-zinc-950/50 p-10 rounded-[48px] border border-outline-variant/10 shadow-xl">
                            <h3 className="font-headline text-lg font-black text-white uppercase tracking-tight mb-8">Closure Integrity Checklist</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                                {checklist.map((item, i) => (
                                    <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 flex items-center gap-6 group hover:border-primary/20 transition-all">
                                        <span className={`material-symbols-outlined text-3xl ${item.color} group-hover:scale-110 transition-transform`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                            {item.icon}
                                        </span>
                                        <div>
                                            <p className="text-[9px] font-black text-stone-600 uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-xs font-black uppercase tracking-widest">{item.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Tax Provisions & Certs */}
                    <div className="lg:col-span-5 space-y-10">
                        {/* Tax Provision Card */}
                        <section className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group flex flex-col justify-between min-h-[450px]">
                            <div className="absolute top-0 right-0 p-8">
                                <span className="material-symbols-outlined text-primary text-[100px] opacity-[0.03] group-hover:opacity-10 transition-all">description</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-headline text-2xl font-black text-white uppercase tracking-tight mb-12">Proviciones de Impuestos <span className="text-primary ml-2">FY2023</span></h3>
                                <div className="space-y-10">
                                    <div className="border-l-4 border-primary/40 pl-8">
                                        <p className="text-[9px] font-black text-stone-600 uppercase tracking-[0.4em] mb-3">ISLR Calculation (34%)</p>
                                        <p className="font-headline text-5xl font-black text-white tracking-tighter">$ 184,290.00</p>
                                        <p className="text-[10px] font-black text-stone-500 uppercase mt-4">Estimated Taxable Income: $ 542,029.41</p>
                                    </div>
                                    <div className="border-l-4 border-stone-800 pl-8">
                                        <p className="text-[9px] font-black text-stone-600 uppercase tracking-[0.4em] mb-3">IVA Liquidations (NET)</p>
                                        <p className="font-headline text-3xl font-black text-stone-400 tracking-tighter">$ 42,105.12</p>
                                        <div className="flex gap-10 mt-6 text-[10px] font-black uppercase text-stone-500 tracking-widest">
                                            <span>Input Credit: $ 82K</span>
                                            <span>Output Tax: $ 124K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="relative z-10 w-full mt-12 bg-primary py-6 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] text-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                SETTLE TAX PROVISION
                            </button>
                        </section>

                        {/* Certification Card */}
                        <section className="bg-zinc-950 p-10 rounded-[48px] border-l-[12px] border-stone-800 shadow-3xl text-white">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="font-headline text-lg font-black uppercase tracking-tight">Certification of Integrity</h3>
                                    <p className="text-[9px] font-black text-primary tracking-[0.3em] uppercase mt-2">Hash: 8F-22-E9-01-TITAN</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-4xl">verified</span>
                            </div>
                            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 italic text-stone-500 text-[11px] leading-relaxed mb-8">
                                "Certifico que los registros financieros presentados para el periodo finalizado en DIC-2023 reflejan fielmente la posición fiscal industrial según los Estándares Internacionales de Contabilidad..."
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-white">DRA. ELARA VANCE</p>
                                    <p className="text-[9px] font-black text-stone-700 uppercase tracking-widest mt-1">Chief Financial Officer</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[9px] font-black text-stone-700 uppercase tracking-widest mb-1">SENIAT AUTH CODE</p>
                                    <p className="text-xs font-black text-primary tracking-widest">#SNT-2023-X99L-412</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Analytical Overlay */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80 hover:opacity-100 transition-opacity">
                    <div className="bg-zinc-900 p-8 rounded-[32px] border-b border-primary/20">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest">EBITDA Margin</span>
                            <span className="text-primary text-[10px] font-black">+2.4%</span>
                        </div>
                        <div className="h-1 bg-zinc-950 rounded-full overflow-hidden">
                            <div className="h-full bg-primary shadow-[0_0_8px_#9acd32]" style={{ width: '74%' }}></div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-[32px] border-b border-error/20">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest">Liquidity Ratio</span>
                            <span className="text-error text-[10px] font-black">-0.1%</span>
                        </div>
                        <div className="h-1 bg-zinc-950 rounded-full overflow-hidden">
                            <div className="h-full bg-error" style={{ width: '62%' }}></div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-[32px] border-b border-white/10">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-black text-stone-600 uppercase tracking-widest">Deferred Taxes</span>
                            <span className="text-stone-700 text-[10px] font-black">STABLE</span>
                        </div>
                        <div className="h-1 bg-zinc-950 rounded-full overflow-hidden">
                            <div className="h-full bg-stone-700" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                </section>
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
