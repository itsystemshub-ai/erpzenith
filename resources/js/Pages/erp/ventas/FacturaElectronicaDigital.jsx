import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function FacturaElectronicaDigital() {
    const items = [
        { sku: 'CUM-3972886', desc: 'Crankshaft Main Bearing Set', sub: 'Standard Size - Heavy Duty Industrial Grade', qty: '12', price: '$ 450.00', total: '$ 5,400.00' },
        { sku: 'DET-23530663', desc: 'Fuel Injector Assembly (Series 60)', sub: 'Electronic Unit Injector - Precision Calibration', qty: '06', price: '$ 820.00', total: '$ 4,920.00' },
        { sku: 'PER-U5ME0034', desc: 'Upper Gasket Kit - 1104D Series', sub: 'High-Temperature Resistance Composite Material', qty: '03', price: '$ 215.50', total: '$ 646.50' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest no-print">
                    <span className="material-symbols-outlined text-lg">receipt_long</span>
                    <span>Ventas <span className="text-white/60 mx-2">|</span> Visualización de Factura</span>
                </div>
            }
        >
            <Head title="Factura Electrónica Digital - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
                {/* Action Toolbar */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8 no-print">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Document Fulfillment View</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">F-Node ID: 77492.VLC</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Digital <br/> <span className="text-stone-700">Invoice</span></h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] border border-zinc-800 hover:border-primary/40 transition-all italic flex items-center gap-3" onClick={() => window.print()}>
                            <span className="material-symbols-outlined text-lg">print</span>
                            Print Node
                        </button>
                        <button className="bg-primary text-black px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all italic flex items-center gap-3">
                            <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                            Export PDF
                        </button>
                    </div>
                </header>

                {/* The Invoice Shell */}
                <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden relative print:bg-white print:text-black print:rounded-none">
                    {/* Vertical Branding Accent */}
                    <div className="absolute left-0 top-0 w-2 h-full bg-primary print:hidden"></div>

                    <div className="p-12 md:p-20 space-y-20">
                        {/* Header: Company & Invoice Metadata */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start border-b border-zinc-800 pb-20 print:border-zinc-200">
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 bg-zinc-950 border border-zinc-800 rounded-3xl flex items-center justify-center print:bg-black">
                                        <span className="material-symbols-outlined text-primary text-5xl font-black italic">precision_manufacturing</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-headline font-black text-white italic tracking-tighter uppercase leading-none print:text-black">MAYOR DE REPUESTO <br/> <span className="text-primary italic">LA CIMA, C.A.</span></h2>
                                        <span className="text-[10px] font-black text-stone-700 uppercase tracking-widest print:text-zinc-500">RIF J-40308741-5</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                     <p className="text-[10px] font-black text-stone-600 uppercase tracking-widest leading-relaxed print:text-zinc-700">Zona Industrial Municipal Norte <br/> Avenida Henry Ford, Galpón C-12 <br/> Valencia, Edo. Carabobo 2001, Venezuela</p>
                                     <p className="text-[11px] font-black text-white uppercase tracking-widest print:text-black">+58 (241) 555-0198 | info@lacima-repuestos.com</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="bg-zinc-950 p-10 rounded-[40px] border border-zinc-800 w-full max-w-sm space-y-8 print:bg-zinc-100 print:border-zinc-300">
                                    <div className="space-y-1">
                                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] print:text-zinc-500">Fiscal Document ID</span>
                                        <span className="text-4xl font-headline font-black text-white italic tracking-tighter block print:text-black">#FE-2024-0892</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-900 print:border-zinc-300">
                                        <div className="space-y-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Emission Date</span>
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest print:text-black">24 OCT 2023</span>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Control Number</span>
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest print:text-black">00-998822</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customer & Logistics */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-20 border-b border-zinc-800 print:border-zinc-200">
                            <div className="lg:col-span-2 space-y-8">
                                <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.5em] italic flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    Entity Information
                                </h3>
                                <div className="bg-zinc-950/50 p-10 rounded-[40px] border border-zinc-800 space-y-6 print:bg-zinc-50 print:border-zinc-200">
                                    <h4 className="text-2xl font-headline font-black text-white italic tracking-tighter uppercase leading-none print:text-black">SIDERÚRGICA DEL TURBIO, S.A. (SIDETUR)</h4>
                                    <div className="grid grid-cols-2 gap-10">
                                        <div className="space-y-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Tax ID / RIF</span>
                                            <span className="text-[11px] font-black text-white uppercase tracking-[0.1em] print:text-black">J-00034567-0</span>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Contact Line</span>
                                            <span className="text-[11px] font-black text-white uppercase tracking-[0.1em] print:text-black">+58 (251) 441-2090</span>
                                        </div>
                                        <div className="col-span-2 space-y-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest print:text-zinc-500">Fiscal Address</span>
                                            <span className="text-[10px] font-black text-stone-600 uppercase leading-relaxed print:text-zinc-700">Zona Industrial II, Carrera 4 con Calle 2. Barquisimeto, Edo. Lara.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.5em] italic flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    Status & Logistics
                                </h3>
                                <div className="space-y-4">
                                     {[
                                         { l: 'Payment Terms', v: 'Net 15 Days' },
                                         { l: 'Dispatch Origin', v: 'VLC-WH-02' },
                                         { l: 'Priority Status', v: 'Critical Part', s: true }
                                     ].map((log, i) => (
                                        <div key={i} className="flex justify-between items-center py-4 border-b border-zinc-900 group print:border-zinc-100">
                                            <span className="text-[10px] font-black text-stone-700 uppercase tracking-widest group-hover:text-stone-500 transition-colors">{log.l}</span>
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${log.s ? 'bg-primary text-black px-4 py-1 rounded italic' : 'text-white print:text-black'}`}>{log.v}</span>
                                        </div>
                                     ))}
                                </div>
                            </div>
                        </div>

                        {/* High-Fidelity Items Table */}
                        <section className="space-y-8">
                             <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.5em] italic flex items-center gap-4">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Line Item Specifications
                            </h3>
                            <div className="bg-zinc-950/20 rounded-[40px] border border-zinc-800 overflow-hidden print:border-zinc-300">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-zinc-950 border-b border-zinc-800 text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] print:bg-zinc-100 print:text-black print:border-zinc-300">
                                            <th className="px-10 py-6">Machine SKU</th>
                                            <th className="px-10 py-6">Component Description</th>
                                            <th className="px-10 py-6 text-right">Quantity</th>
                                            <th className="px-10 py-6 text-right">Unit Yield</th>
                                            <th className="px-10 py-6 text-right">Base Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-900 print:divide-zinc-200">
                                        {items.map((item, i) => (
                                            <tr key={i} className="group hover:bg-zinc-950/40 transition-colors print:text-black">
                                                <td className="px-10 py-8 text-[11px] font-black text-primary italic uppercase tracking-widest">{item.sku}</td>
                                                <td className="px-10 py-8 space-y-1">
                                                    <span className="text-[11px] font-black text-white uppercase tracking-tighter italic print:text-black">{item.desc}</span>
                                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest block">{item.sub}</span>
                                                </td>
                                                <td className="px-10 py-8 text-right font-headline font-black text-white italic text-lg print:text-black">{item.qty}</td>
                                                <td className="px-10 py-8 text-right font-mono text-[10px] text-stone-600 print:text-zinc-600">{item.price}</td>
                                                <td className="px-10 py-8 text-right font-headline font-black text-white text-xl tracking-tighter italic group-hover:text-primary transition-colors print:text-black">{item.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Financial Conclusion & Verification */}
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-20 pt-10">
                            {/* Legal Manifest */}
                            <div className="xl:col-span-7 space-y-12">
                                <div className="bg-zinc-950 p-10 rounded-[40px] border border-zinc-800 flex flex-col md:flex-row gap-10 items-center print:bg-zinc-50 print:border-zinc-200">
                                    <div className="w-32 h-32 bg-white p-2 rounded-2xl shrink-0">
                                        <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 grid grid-cols-10 opacity-20"><div className="bg-white col-span-1 border border-black h-full"></div><div className="bg-white col-span-2 border border-black h-full shadow-[0_0_10px_black_inset]"></div><div className="bg-white col-span-1 border border-black h-full"></div></div>
                                            <span className="material-symbols-outlined text-primary text-5xl font-black">qr_code_2</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] block">Fiscal Authority Validation</span>
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Código de Autorización SENIAT:</span>
                                            <span className="text-sm font-mono font-black text-primary block tracking-[0.1em] uppercase">SNT-2023-44092-VLC-001</span>
                                        </div>
                                        <p className="text-[9px] font-black text-stone-700 uppercase italic leading-relaxed">Documento emitido según Providencia Administrativa N° SNAT/2011/00071 del Servicio Nacional Integrado de Administración Aduanera y Tributaria.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-12">
                                    {[ 'Authorized Signature', 'Customer Acceptance' ].map(sig => (
                                        <div key={sig} className="border-t border-zinc-800 pt-8 space-y-10 print:border-zinc-300">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-[0.3em]">{sig}</span>
                                            <div className="h-px w-full bg-zinc-800/50 print:bg-zinc-200"></div>
                                            <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest italic block text-center">VALID_ID_NODES_ONLY</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Monetary Totals */}
                            <div className="xl:col-span-5 bg-zinc-950 p-12 rounded-[56px] border border-zinc-800 shadow-3xl space-y-10 self-start print:bg-zinc-100 print:text-black print:border-zinc-301">
                                 <div className="space-y-6">
                                     {[
                                         { l: 'Total Tax Base', v: '$ 10,966.50' },
                                         { l: 'VAT / IVA (16%)', v: '$ 1,754.64' },
                                         { l: 'IVA Retenido (75%)', v: '- $ 1,315.98', s: true }
                                     ].map((tot, i) => (
                                        <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                            <span className="text-stone-700 print:text-zinc-600">{tot.l}</span>
                                            <span className={tot.s ? 'text-primary' : 'text-white print:text-black'}>{tot.v}</span>
                                        </div>
                                     ))}
                                 </div>
                                 <div className="pt-10 border-t border-zinc-900 flex justify-between items-end print:border-zinc-300">
                                    <div className="space-y-1">
                                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-[0.4em] block print:text-zinc-500">Amount Due</span>
                                        <span className="text-[11px] font-black text-stone-500 uppercase italic print:text-zinc-700">Neto a Pagar</span>
                                    </div>
                                    <div className="text-right space-y-2">
                                        <span className="text-4xl font-headline font-black text-primary italic tracking-tighter block leading-none print:text-black">$ 11,405.16</span>
                                        <span className="text-[9px] font-black text-stone-800 uppercase tracking-tighter block print:text-zinc-500">Rate: 1 USD = 35.40 VES</span>
                                    </div>
                                 </div>
                            </div>
                        </div>

                        {/* Industrial Branding Slogan */}
                        <footer className="pt-20 border-t border-zinc-800 text-center print:border-zinc-200">
                             <span className="text-[10px] font-black text-stone-800 uppercase tracking-[0.8em] italic">Performance Without Compromise • Industrial Uptime Guaranteed</span>
                        </footer>
                    </div>
                </section>

                {/* Final System Registry Metadata */}
                <footer className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 no-print">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(154,205,50,0.5)]"></div>
                             <span className="text-[10px] font-black text-stone-700 uppercase tracking-widest italic">Verified System Hash Protocol</span>
                        </div>
                        <span className="font-mono text-[10px] text-stone-800 uppercase font-black uppercase tracking-[0.1em]">0x8892_BBAF_C12_9948_SYS_OK</span>
                    </div>
                    <span className="text-[10px] font-black text-stone-800 uppercase tracking-[0.3em]">© 2024 TITAN ENGINE SYSTEMS • VALENCIA OPERATIONS</span>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; padding: 0 !important; margin: 0 !important; }
                    main { margin: 0 !important; padding: 0 !important; }
                }
            `}} />
        </AuthenticatedLayout>
    );
}
