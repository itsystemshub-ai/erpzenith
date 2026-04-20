import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function LibroDeComprasFiscal() {
    const purchases = [
        { date: '12/10/2023', rif: 'J-31456789-0', provider: 'Siderúrgica del Turbo C.A.', invoice: '00045612', control: '00-998811', base: '12.500,00', iva: '2.000,00', retention: '2023100045', total: '14.500,00' },
        { date: '15/10/2023', rif: 'J-00123456-7', provider: 'Tecnología de Motores V8', invoice: '00008922', control: '00-004512', base: '5.200,00', iva: '832,00', retention: '2023100046', total: '6.032,00' },
        { date: '18/10/2023', rif: 'J-40552147-1', provider: 'Lubricantes Industriales X', invoice: '00012399', control: '00-112233', base: '2.100,50', iva: '336,08', retention: '2023100047', total: '2.436,58' },
        { date: '22/10/2023', rif: 'G-20000001-1', provider: 'Alcaldía de Municipio Industrial', invoice: 'F-88120', control: 'N/A', base: '800,00', iva: '0,00', retention: 'EXENTO', total: '800,00' },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">menu_book</span>
                    <span>Contabilidad <span className="text-white/60 mx-2">|</span> Libro de Compras Fiscal</span>
                </div>
            }
        >
            <Head title="Libro de Compras Fiscal" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                    <div className="space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Fiscal Compliance Engine</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-white leading-none">
                            Libro De <br/><span className="text-stone-700">Compras Fiscal</span>
                        </h1>
                        <p className="text-stone-500 font-mono text-[10px] tracking-widest uppercase">CONTROL FISCAL PERIODICIDAD MENSUAL - ART. 75 RIVA</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 border border-white/5 text-stone-200 px-10 py-5 rounded-2xl font-headline font-black uppercase text-[10px] tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-4">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Export Ledger
                        </button>
                        <button className="bg-primary text-black px-10 py-5 rounded-2xl font-headline font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4">
                            <span className="material-symbols-outlined text-lg font-black">lock</span>
                            Close Period
                        </button>
                    </div>
                </div>

                {/* Filter Stats Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-zinc-900 p-8 rounded-[32px] border-l-4 border-primary shadow-xl">
                        <div className="text-stone-700 font-headline uppercase text-[9px] font-black tracking-widest mb-3">Total Base Imponible</div>
                        <div className="text-3xl font-headline font-black text-white tracking-tighter">45.290,50 <span className="text-stone-800 text-xs ml-2 font-black">VED</span></div>
                    </div>
                    <div className="bg-zinc-950 p-8 rounded-[32px] border-l-4 border-stone-800 shadow-xl">
                        <div className="text-stone-700 font-headline uppercase text-[9px] font-black tracking-widest mb-3">Total IVA (16%)</div>
                        <div className="text-3xl font-headline font-black text-white tracking-tighter">7.246,48 <span className="text-stone-800 text-xs ml-2 font-black">VED</span></div>
                    </div>
                    <div className="bg-zinc-950 p-8 rounded-[32px] border-l-4 border-stone-800 shadow-xl">
                        <div className="text-stone-700 font-headline uppercase text-[9px] font-black tracking-widest mb-3">IVA Retenido</div>
                        <div className="text-3xl font-headline font-black text-primary tracking-tighter italic">5.434,86 <span className="text-stone-800 text-xs ml-2 font-black">VED</span></div>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-[32px] border-l-4 border-primary/50 shadow-xl">
                        <div className="text-stone-700 font-headline uppercase text-[9px] font-black tracking-widest mb-3">Total Compras</div>
                        <div className="text-3xl font-headline font-black text-white tracking-tighter">52.536,98 <span className="text-stone-800 text-xs ml-2 font-black">VED</span></div>
                    </div>
                </div>

                {/* Fiscal Table Section */}
                <div className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group">
                    <div className="p-10 bg-zinc-950/80 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex gap-6">
                            <select className="bg-zinc-900 border-none rounded-xl text-[10px] font-black font-headline uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary pr-12 py-3 shadow-inner">
                                <option>Octubre 2023</option>
                                <option>Septiembre 2023</option>
                            </select>
                            <div className="flex items-center gap-4 px-6 py-3 bg-zinc-900 rounded-xl text-[9px] font-black font-headline uppercase tracking-[0.2em] text-primary border border-primary/10 shadow-inner">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#9acd32]"></span>
                                Estado: Abierto
                            </div>
                        </div>
                        <div className="text-stone-800 text-[10px] font-black uppercase tracking-[0.4em]">Audit Registry: 24 Industrial Purchase Nodes</div>
                    </div>

                    <div className="overflow-x-auto min-h-[600px] p-6">
                        <table className="w-full text-left border-separate border-spacing-y-2">
                            <thead>
                                <tr className="bg-zinc-950/40 text-stone-700 font-headline text-[9px] font-black uppercase tracking-[0.4em]">
                                    <th className="px-8 py-5 first:rounded-l-2xl">Fecha</th>
                                    <th className="px-8 py-5">Proveedor (IDENT)</th>
                                    <th className="px-8 py-5">Factura / Control</th>
                                    <th className="px-8 py-5 text-right">Base Imponible</th>
                                    <th className="px-8 py-5 text-right">IVA (16%)</th>
                                    <th className="px-8 py-5 text-center">Retención</th>
                                    <th className="px-8 py-5 text-right last:rounded-r-2xl">Total General</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-black">
                                {purchases.map((purchase, i) => (
                                    <tr key={i} className="bg-zinc-950/30 hover:bg-zinc-950 transition-colors group/row">
                                        <td className="px-8 py-6 first:rounded-l-2xl">
                                            <span className="text-stone-500 font-mono tracking-widest">{purchase.date}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-primary font-mono tracking-tighter text-[11px] mb-1">{purchase.rif}</span>
                                                <span className="text-white uppercase tracking-tight text-[10px]">{purchase.provider}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-white font-mono">{purchase.invoice}</span>
                                                <span className="text-[10px] text-stone-700 font-mono tracking-tighter">CTRL: {purchase.control}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right font-mono text-stone-400">{purchase.base}</td>
                                        <td className="px-8 py-6 text-right font-mono text-stone-400">{purchase.iva}</td>
                                        <td className="px-8 py-6 text-center">
                                            <span className={`text-[8px] font-black px-4 py-1 rounded-full uppercase tracking-widest border ${
                                                purchase.retention === 'EXENTO' ? 'bg-zinc-900 text-stone-700 border-white/5' : 'bg-primary/20 text-primary border-primary/20'
                                            }`}>
                                                {purchase.retention}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right text-white font-headline text-sm font-black last:rounded-r-2xl tabular-nums">
                                            {purchase.total}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Industrial Footer Status */}
                    <div className="bg-zinc-950/80 px-10 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="max-w-xl text-right md:text-left order-2 md:order-1">
                            <h3 className="text-[9px] font-headline font-black text-stone-800 uppercase tracking-[0.5em] mb-4">Declaración de Cumplimiento Industrial</h3>
                            <p className="text-[10px] text-stone-700 leading-relaxed font-medium uppercase italic">
                                Este reporte ha sido generado bajo los lineamientos industriales establecidos en la providencia administrativa SNAT/2011/00071 dictada por el SENIAT. Integridad AES-256 Confirmada.
                            </p>
                        </div>
                        <div className="flex items-center gap-8 order-1 md:order-2">
                             <div className="text-right">
                                <div className="text-[8px] text-stone-800 uppercase tracking-widest font-black mb-1">Sello Digital de Integridad</div>
                                <div className="text-[9px] font-mono text-primary font-black">SHA256: 8f2a...1e4c</div>
                            </div>
                            <div className="w-16 h-16 border border-white/10 p-2 bg-zinc-950 rounded-2xl group-hover:border-primary/20 transition-all">
                                <span className="material-symbols-outlined text-stone-800 text-4xl group-hover:text-primary transition-colors duration-700">qr_code_2</span>
                            </div>
                        </div>
                    </div>
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
