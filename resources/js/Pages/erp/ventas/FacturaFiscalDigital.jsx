import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function FacturaFiscalDigital() {
    const items = [
        { sku: 'EP-992-TX', desc: 'Pistón Forjado Serie Titan 4500', detail: 'Aleación de aluminio reforzado, tratamiento térmico T6', qty: 12, price: '$ 145.00', total: '$ 1,740.00' },
        { sku: 'GK-441-RG', desc: 'Kit de Empacaduras Industriales (Gasket)', detail: 'Alta presión, temperatura hasta 400°C, sellado hermético', qty: 4, price: '$ 82.50', total: '$ 330.00' },
        { sku: 'BR-102-HD', desc: 'Rodamientos de Carga Pesada (Heavy Duty)', detail: 'Acero al cromo, doble hilera de esferas, sellado NBR', qty: 8, price: '$ 210.00', total: '$ 1,680.00' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest no-print">
                    <span className="material-symbols-outlined text-lg">gavel</span>
                    <span>Ventas <span className="text-white/60 mx-2">|</span> Factura Fiscal Digital</span>
                </div>
            }
        >
            <Head title="Factura Fiscal Digital - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
                {/* Protocol Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8 no-print">
                    <div className="space-y-6 text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Fiscal Compliance Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10 hidden md:block"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Revision Fiscal Node: VLC-9928</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Fiscal <br/> <span className="text-stone-700">Digital Node</span></h1>
                    </div>
                </header>

                {/* Main Content Shell */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative print:bg-white print:text-black print:rounded-none">
                    <div className="absolute left-0 top-0 w-2 h-full bg-primary print:hidden"></div>

                    <div className="p-12 md:p-20 space-y-20">
                        {/* Company & Fiscal Metadata */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start border-b border-zinc-800 pb-20 print:border-zinc-200">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <div className="bg-primary px-10 py-4 w-fit skew-x-[-10deg] print:bg-black">
                                        <h2 className="text-xl font-headline font-black text-black italic tracking-tighter uppercase leading-none skew-x-[10deg] print:text-white">MAYOR DE REPUESTO LA CIMA, C.A.</h2>
                                    </div>
                                    <div className="space-y-2 pl-4">
                                        <span className="text-[11px] font-black text-white uppercase tracking-widest print:text-black">RIF J-40308741-5</span>
                                        <p className="text-[10px] font-black text-stone-600 uppercase tracking-widest leading-relaxed print:text-zinc-700">Av. Principal Industrial Norte, Galpón 42 <br/> Valencia, Edo. Carabobo - Venezuela</p>
                                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] print:text-black">+58 241 555 0199</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="bg-zinc-950 p-12 rounded-[56px] border border-zinc-800 w-full max-w-sm space-y-10 relative overflow-hidden print:bg-zinc-100 print:border-zinc-300">
                                    {/* Tech Pattern Background */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-10 translate-x-10 blur-2xl"></div>
                                    
                                    <div className="relative z-10 flex justify-between items-center text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] print:text-zinc-500">
                                        <span>Control Fiscal</span>
                                        <span className="text-white print:text-black">#00-847291</span>
                                    </div>
                                    
                                    <div className="relative z-10 border-t border-zinc-900 pt-10 print:border-zinc-300">
                                        <h3 className="text-4xl font-headline font-black text-white italic tracking-tighter uppercase leading-none print:text-black">FACTURA <br/> <span className="opacity-20 italic">DIGITAL V-2</span></h3>
                                    </div>

                                    <div className="relative z-10 grid grid-cols-2 gap-8 pt-10 border-t border-zinc-900 print:border-zinc-300">
                                        <div className="space-y-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Emission</span>
                                            <span className="text-[10px] font-black text-white uppercase tracking-[0.1em] print:text-black">24 OCT 2023</span>
                                        </div>
                                        <div className="space-y-1 text-right">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Expiry</span>
                                            <span className="text-[10px] font-black text-white uppercase tracking-[0.1em] print:text-black">07 NOV 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customer & Tracking Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-20 border-b border-zinc-800 print:border-zinc-200">
                            <div className="lg:col-span-2 space-y-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center print:bg-black">
                                        <span className="material-symbols-outlined text-primary text-2xl font-black italic">account_circle</span>
                                    </div>
                                    <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.5em] italic">Identity Registration Data</h3>
                                </div>
                                <div className="bg-zinc-950/30 p-12 rounded-[56px] border border-zinc-800 space-y-10 print:bg-zinc-50 print:border-zinc-200">
                                     <h4 className="text-2xl font-headline font-black text-white italic tracking-tighter uppercase leading-none print:text-black">CONSTRUCTORA DELTA HIERRO S.A.</h4>
                                     <div className="grid grid-cols-2 gap-12">
                                        <div className="space-y-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Legal Entity Identification</span>
                                            <span className="text-[11px] font-black text-white uppercase tracking-[0.2em] print:text-black">J-31298455-0</span>
                                        </div>
                                        <div className="col-span-2 space-y-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Certified Fiscal Address</span>
                                            <span className="text-[10px] font-black text-stone-600 uppercase leading-relaxed print:text-zinc-700">Zona Industrial Municipal II, Av. Este-Oeste, Parroquia Rafael Urdaneta. Valencia, Edo. Carabobo.</span>
                                        </div>
                                     </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center print:bg-black">
                                        <span className="material-symbols-outlined text-stone-700 text-2xl">local_shipping</span>
                                    </div>
                                    <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.5em] italic">Logistics Stream</h3>
                                </div>
                                <div className="space-y-10">
                                     <div className="space-y-2">
                                        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Method of Dispatch</span>
                                        <span className="text-[11px] font-black text-white uppercase tracking-[0.1em] print:text-black">Transporte Propio - Ruta Norte</span>
                                     </div>
                                     <div className="pt-10 border-t border-zinc-900 space-y-2 print:border-zinc-200">
                                        <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Fulfillment Reference / OC</span>
                                        <span className="text-2xl font-headline font-black text-primary italic tracking-tighter uppercase block print:text-black">OC-2023-4492</span>
                                     </div>
                                </div>
                            </div>
                        </div>

                        {/* Line Item Data Grid */}
                        <section className="space-y-10">
                            <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.5em] italic flex items-center gap-4">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Technical Inventory Line Specification
                            </h3>
                            <div className="bg-zinc-950/20 rounded-[56px] border border-zinc-800 overflow-hidden print:border-zinc-300">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-zinc-950 border-b border-zinc-800 text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] print:bg-zinc-100 print:text-black print:border-zinc-300">
                                            <th className="px-12 py-8">Asset SKU</th>
                                            <th className="px-12 py-8">Technical Specification</th>
                                            <th className="px-12 py-8 text-center">Batch Vol.</th>
                                            <th className="px-12 py-8 text-right">Yield/Unit</th>
                                            <th className="px-12 py-8 text-right">Base Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-900 print:divide-zinc-200">
                                        {items.map((it, i) => (
                                            <tr key={i} className="group hover:bg-zinc-950 transition-colors">
                                                <td className="px-12 py-10 font-mono text-[11px] text-stone-700 font-bold uppercase tracking-widest group-hover:text-primary transition-colors">{it.sku}</td>
                                                <td className="px-12 py-10 space-y-2">
                                                    <span className="text-[13px] font-headline font-black text-white uppercase tracking-tighter italic block leading-none print:text-black">{it.desc}</span>
                                                    <span className="text-[9px] font-black text-stone-800 uppercase tracking-widest leading-relaxed print:text-zinc-500">{it.detail}</span>
                                                </td>
                                                <td className="px-12 py-10 text-center font-headline font-black text-white italic text-xl print:text-black">{it.qty}</td>
                                                <td className="px-12 py-10 text-right font-headline font-black text-stone-700 text-sm print:text-zinc-600">{it.price}</td>
                                                <td className="px-12 py-10 text-right font-headline font-black text-white text-2xl tracking-tighter italic group-hover:text-primary transition-colors print:text-black">{it.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Final Verification Block */}
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-20 pt-10">
                            {/* Certification Manifest */}
                            <div className="xl:col-span-7 space-y-16">
                                <div className="bg-zinc-950 p-12 rounded-[56px] border border-zinc-800 flex flex-col md:flex-row gap-12 items-center print:bg-zinc-50 print:border-zinc-200">
                                    <div className="w-40 h-40 bg-white p-3 rounded-3xl shrink-0 group hover:rotate-2 transition-transform cursor-pointer">
                                        <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 grid grid-cols-12 opacity-10"><div className="bg-white col-span-1 border border-black h-full"></div><div className="bg-white col-span-3 border border-black h-full"></div></div>
                                            <span className="material-symbols-outlined text-primary text-7xl font-black italic">qr_code_2</span>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-1">
                                            <h4 className="text-[11px] font-black text-white uppercase tracking-widest italic print:text-black">Certificación Fiscal Digital</h4>
                                            <p className="text-[9px] font-black text-stone-700 uppercase leading-relaxed max-w-sm">Este documento constituye una representación gráfica de una factura digital emitida bajo la normativa vigente de providencias administrativas del SENIAT.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="bg-zinc-900 px-6 py-2 rounded-xl border border-zinc-800"><span className="text-[9px] font-black text-primary uppercase tracking-[0.1em]">HASH: 9928-XA2-LL01</span></div>
                                            <div className="bg-zinc-900 px-6 py-2 rounded-xl border border-zinc-800"><span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.1em]">SERVER: TR-NODE-04</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-zinc-950/40 p-10 rounded-[40px] border-l-4 border-primary space-y-10 print:border-zinc-300">
                                    <span className="text-[8px] font-black text-stone-800 uppercase tracking-[0.5em] block">Digital Signature Manifest</span>
                                    <div className="h-20 flex items-end">
                                        <span className="text-3xl font-headline font-black text-white italic underline decoration-zinc-800 underline-offset-8 print:text-black print:decoration-zinc-200">Ing. Marcos Rodriguez - Operaciones</span>
                                    </div>
                                </div>
                            </div>

                            {/* Monetary Summary Engine */}
                            <div className="xl:col-span-5 bg-zinc-950 rounded-[64px] border border-zinc-800 shadow-4xl p-16 space-y-12 self-start relative overflow-hidden print:bg-zinc-100 print:text-black print:border-zinc-300">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-20 translate-x-20 blur-3xl"></div>
                                
                                <div className="space-y-8 relative z-10">
                                     {[
                                         { l: 'Subtotal Base Imponible', v: '$ 3,750.00' },
                                         { l: 'IVA (16%)', v: '$ 600.00' },
                                         { l: 'Retención IVA (75%)', v: '- $ 450.00', s: true }
                                     ].map((tot, i) => (
                                        <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                                            <span className="text-stone-700 print:text-zinc-500">{tot.l}</span>
                                            <span className={tot.s ? 'text-primary' : 'text-white print:text-black'}>{tot.v}</span>
                                        </div>
                                     ))}
                                </div>

                                <div className="pt-12 border-t border-zinc-900 flex flex-col gap-8 relative z-10 print:border-zinc-300">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-black text-stone-800 uppercase tracking-[0.6em] block print:text-zinc-500 italic">Total Settlement</span>
                                            <span className="text-[12px] font-black text-stone-700 uppercase italic print:text-zinc-700">Neto Total Operativo</span>
                                        </div>
                                        <div className="text-right space-y-2">
                                            <span className="text-6xl font-headline font-black text-primary italic tracking-tighter block leading-none print:text-black">$ 3,900.00</span>
                                            <span className="text-[9px] font-black text-stone-800 uppercase italic print:text-zinc-500">Sujeto a tasa oficial BCV del día</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-primary text-black font-black py-6 rounded-[24px] uppercase tracking-[0.4em] text-xs hover:scale-[1.02] active:scale-95 transition-all italic shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 group print:hidden">
                                        <span className="material-symbols-outlined text-2xl group-hover:animate-bounce">download</span>
                                        Download Certified Manifest
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Industrial Registry Footer */}
                        <footer className="pt-20 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-10 print:border-zinc-200">
                            <div className="flex items-center gap-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                                <span className="text-[10px] font-black text-stone-800 uppercase tracking-[0.5em] italic">Sistema Operativo Centralizado v4.2.1-SECURE</span>
                            </div>
                            <div className="flex gap-10 text-[10px] font-black text-stone-700 uppercase tracking-[0.2em] italic">
                                <a className="hover:text-primary transition-colors" href="#">Technical Support</a>
                                <a className="hover:text-primary transition-colors" href="#">Legal Compliance</a>
                                <a className="hover:text-primary transition-colors" href="#">Audit Node</a>
                            </div>
                        </footer>
                    </div>
                </section>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; font-size: 10pt; }
                    main { margin: 0 !important; width: 100% !important; }
                }
            `}} />
        </AuthenticatedLayout>
    );
}
