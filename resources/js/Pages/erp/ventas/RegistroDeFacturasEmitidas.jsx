import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function RegistroDeFacturasEmitidas() {
    const summary = [
        { l: 'Total Facturado', v: '$284,930.00', t: '+12% este mes', tc: 'text-primary', bc: 'border-primary', icon: 'payments' },
        { l: 'Facturas Emitidas', v: '1,248', t: 'Total histórico', tc: 'text-stone-500', bc: 'border-zinc-800', icon: 'receipt_long' },
        { l: 'Anuladas', v: '12', t: '0.9% del total', tc: 'text-error', bc: 'border-error/20', icon: 'block' },
        { l: 'Impuestos Retenidos', v: '$45,588.80', t: 'Fiscal Acumulado', tc: 'text-primary/60', bc: 'border-primary/40', icon: 'account_balance' }
    ];

    const invoices = [
        { date: '24/05/2024', nro: 'F-0001824', client: 'Aceros del Orinoco C.A.', rif: 'J-30456214-0', base: '$12,450.00', iva: '$1,992.00', total: '$14,442.00', status: 'Vigente' },
        { date: '23/05/2024', nro: 'F-0001823', client: 'Suministros Industriales 2000', rif: 'J-29877452-1', base: '$4,200.00', iva: '$672.00', total: '$4,872.00', status: 'Vigente' },
        { date: '23/05/2024', nro: 'F-0001822', client: 'Constructora El Faro', rif: 'J-41123300-8', base: '$8,900.00', iva: '$1,424.00', total: '$10,324.00', status: 'Anulada' },
        { date: '22/05/2024', nro: 'F-0001821', client: 'Logística Global S.A.', rif: 'J-00122455-9', base: '$45,000.00', iva: '$7,200.00', total: '$52,200.00', status: 'Vigente' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">history_edu</span>
                    <span>Ventas <span className="text-white/60 mx-2">|</span> Registro de Facturas</span>
                </div>
            }
        >
            <Head title="Registro Histórico de Facturas - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Registry Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Data Archival Registry</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Revision Fiscal 2024.1</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Invoice <br/> <span className="text-stone-700">History</span></h1>
                    </div>
                </header>

                {/* Precision Filters Bar */}
                <section className="bg-zinc-950 p-8 rounded-[48px] border border-outline-variant/10 shadow-3xl flex flex-col xl:flex-row gap-8 items-end relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
                    
                    <div className="flex-1 w-full space-y-4">
                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] block">Rango de Fecha Operativa</span>
                        <div className="flex gap-4">
                            <input type="date" className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-6 text-[10px] font-black text-white focus:ring-2 focus:ring-primary w-full uppercase tracking-widest" />
                            <span className="self-center text-zinc-800 font-black">/</span>
                            <input type="date" className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-6 text-[10px] font-black text-white focus:ring-2 focus:ring-primary w-full uppercase tracking-widest" />
                        </div>
                    </div>

                    <div className="flex-1 w-full space-y-4">
                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] block">Filtro de Entidad / RIF</span>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-stone-700">person</span>
                            <input type="text" placeholder="Nombre o RIF de Cliente..." className="bg-zinc-900 border border-zinc-800 rounded-xl py-3 pl-12 pr-6 text-[10px] font-black text-white focus:ring-2 focus:ring-primary w-full uppercase tracking-widest placeholder:text-stone-800" />
                        </div>
                    </div>

                    <div className="flex gap-4 shrink-0">
                        <button className="bg-primary text-black px-10 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all italic flex items-center gap-3">
                            <span className="material-symbols-outlined text-lg">filter_alt</span>
                            Aplicar
                        </button>
                        <button className="bg-zinc-900 text-stone-700 border border-zinc-800 p-3.5 rounded-xl hover:text-white transition-all"><span className="material-symbols-outlined">refresh</span></button>
                    </div>
                </section>

                {/* Summary Metrics */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {summary.map((s, i) => (
                        <div key={i} className={`bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 border-l-[6px] ${s.bc} shadow-3xl group hover:bg-zinc-800 transition-all duration-500`}>
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">{s.l}</span>
                                    <span className="material-symbols-outlined text-xl text-stone-700 group-hover:text-primary transition-colors">{s.icon}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-3xl font-headline font-black text-white tracking-tighter italic block leading-none">{s.v}</span>
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${s.tc}`}>{s.t}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* High-Density Registry Table */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                    <div className="p-10 border-b border-zinc-800 flex justify-between items-center">
                        <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none text-zinc-700">Transaction <span className="text-stone-800 italic">History</span></h3>
                        <div className="flex gap-1">
                             {[1, 2, 3].map(n => (
                                 <button key={n} className={`w-8 h-8 rounded-lg text-[9px] font-black flex items-center justify-center transition-all ${n === 1 ? 'bg-primary text-black' : 'bg-zinc-950 text-stone-700 border border-zinc-800'}`}>{n}</button>
                             ))}
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/30 font-black text-[9px] text-stone-700 uppercase tracking-[0.4em]">
                                    <th className="px-10 py-6 border-b border-zinc-801">Fecha</th>
                                    <th className="px-10 py-6 border-b border-zinc-801">Control ID</th>
                                    <th className="px-10 py-6 border-b border-zinc-801">Identity Registry</th>
                                    <th className="px-10 py-6 border-b border-zinc-801 text-right">Base Fiscal</th>
                                    <th className="px-10 py-6 border-b border-zinc-801 text-right">IVA (16%)</th>
                                    <th className="px-10 py-6 border-b border-zinc-801 text-right">Yield Total</th>
                                    <th className="px-10 py-6 border-b border-zinc-801 text-center">Protocol Status</th>
                                    <th className="px-10 py-6 border-b border-zinc-801 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                                {invoices.map((inv, i) => (
                                    <tr key={i} className={`hover:bg-zinc-950 transition-colors group ${inv.status === 'Anulada' ? 'opacity-40 grayscale italic' : ''}`}>
                                        <td className="px-10 py-8 text-[9px] font-black text-stone-700 uppercase tracking-widest">{inv.date}</td>
                                        <td className="px-10 py-8 font-headline font-black text-white uppercase tracking-tighter italic text-[13px]">{inv.nro}</td>
                                        <td className="px-10 py-8 space-y-1">
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest block italic leading-none">{inv.client}</span>
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest">{inv.rif}</span>
                                        </td>
                                        <td className="px-10 py-8 text-right font-mono text-[10px] text-stone-700">{inv.base}</td>
                                        <td className="px-10 py-8 text-right font-mono text-[10px] text-stone-700">{inv.iva}</td>
                                        <td className="px-10 py-8 text-right font-headline font-black text-white text-lg tracking-tighter italic group-hover:text-primary transition-colors">{inv.total}</td>
                                        <td className="px-10 py-8 text-center uppercase">
                                             <span className={`px-4 py-1.5 rounded-full border text-[8px] font-black tracking-[0.2em] ${inv.status === 'Vigente' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-error/10 text-error border-error/20'}`}>
                                                {inv.status}
                                             </span>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center justify-center gap-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                                 <button className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-stone-600 hover:text-white transition-all"><span className="material-symbols-outlined text-lg">picture_as_pdf</span></button>
                                                 <button className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-stone-600 hover:text-white transition-all"><span className="material-symbols-outlined text-lg">print</span></button>
                                                 {inv.status === 'Vigente' && <button className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-stone-600 hover:text-error transition-all"><span className="material-symbols-outlined text-lg">block</span></button>}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Additional Insights Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
                    <div className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group cursor-pointer h-56">
                        <img className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-60 group-hover:scale-110 transition-all duration-[2000ms]" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent p-12 flex flex-col justify-end">
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2 italic">Automated Auditor Suite</span>
                            <h4 className="text-3xl font-headline font-black text-white italic tracking-tighter uppercase leading-none">Solicitar Reporte <br/> <span className="opacity-40 italic">Mensual SENIAT</span></h4>
                        </div>
                    </div>

                    <div className="space-y-8">
                         <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 italic border-l-4 border-primary pl-6">Industrial Core Alerts</h5>
                         <div className="space-y-6">
                            {[
                                { l: 'Conexión SENIAT Activa', d: 'Sincronización fiscal operativa y actualizada.', i: 'check_circle', c: 'text-primary', bg: 'bg-primary/5' },
                                { l: 'Próximo Cierre de Mes', d: 'Faltan 7 días para el cierre fiscal de Mayo.', i: 'warning', c: 'text-amber-500', bg: 'bg-amber-500/5' }
                            ].map((alert, i) => (
                                <div key={i} className={`flex gap-6 p-6 rounded-[32px] border border-zinc-900 ${alert.bg}`}>
                                    <div className={`w-12 h-12 rounded-[18px] bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0`}>
                                        <span className={`material-symbols-outlined text-xl ${alert.c}`}>{alert.i}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h6 className="text-[11px] font-black text-white uppercase tracking-widest">{alert.l}</h6>
                                        <p className="text-[10px] font-black text-stone-700 uppercase tracking-widest leading-relaxed">{alert.d}</p>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-16 px-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-2xl uppercase leading-none italic">FORGE TRANSCRIPT CORE</span>
                        <span className="text-stone-800 font-headline text-[10px] font-black uppercase tracking-[0.8em]">Transaction Audit & Historical Registry Registry</span>
                    </div>
                    <div className="bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">Protocol Status: <span className="text-primary italic uppercase">Data_Immutable</span></span>
                    </div>
                </footer>
            </div>

            {/* Floating Action Button */}
            <button className="fixed bottom-10 right-10 w-20 h-20 bg-primary text-black rounded-[24px] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group shadow-primary/20">
                <span className="material-symbols-outlined text-4xl font-black">file_download</span>
                <span className="absolute right-full mr-8 bg-black text-white text-[9px] font-black px-6 py-2 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap uppercase tracking-[0.3em] italic border border-zinc-800">Exportar XLS Manifest</span>
            </button>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
